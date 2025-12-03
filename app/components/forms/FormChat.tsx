'use client'
import { useChat } from '@ai-sdk/react'
import { useState, useRef, useEffect } from 'react'
import { UserRound, Bot } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
export default function FormChat() {
  const { messages, sendMessage } = useChat({
    onError: (error) => {
      console.log('error: ', error)
      setError(error.toString())
    },
  })
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const form = e.currentTarget.form
      if (form && input.trim()) {
        form.requestSubmit()
      }
    }
  }
  async function handleChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input) return
    try {
      setIsLoading(true)
      await sendMessage({ text: input })
      setInput('')
    } catch (error: any) {
      console.log('error: ', error)
      setError(error.toString())
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    } else if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mx-auto w-full max-w-2xl max-h-[65vh] flex flex-col bg-transparent">
        <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-6 py-6">
          {messages && messages.length > 0 && (
            <div className="flex flex-col gap-4">
              {messages.map((message) => {
                const isUser = message.role === 'user'
                return (
                  // Conditional class for the entire row container:
                  // Bot: 'flex flex-row' (icon on left)
                  // User: 'flex flex-row-reverse' (icon on right)
                  <div 
                    key={message.id} 
                    className={`flex gap-3 p-1 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                  > 
                    <div className="shrink-0">
                      {/* Avatar Icon */}
                      <div className="h-10 w-10 rounded-full border flex items-center justify-center bg-teal-600 text-white border-teal-700">
                        {isUser ? <UserRound /> : <Bot />}
                      </div>
                    </div>
                    
                    {/* Message Content Container */}
                    {/* User messages need 'flex justify-end' to push the bubble to the right */}
                    <div className={isUser ? 'flex justify-end flex-1' : 'flex justify-start flex-1'}>
                      {message.parts.map((part, i) => {
                        if (part.type === 'text') {
                          return (
                            <div
                              key={`${message.id}-${i}`}
                              // Message bubble styling/formatting
                              className={`p-4 rounded-md [&>p]:mb-3 [&>p]:last:mb-0 [&>ul]:mb-4 [&>ul>li]:list-disc [&>ul>li]:ml-5 [&>ol>li]:list-decimal [&>ol>li]:ml-5 [&_strong]:font-semibold [&_b]:font-semibold max-w-[90%] ${
                                isUser 
                                  ? 'bg-teal-100 text-black max-w-fit' // User: fit-to-content, lighter teal
                                  : 'bg-gray-100'                      // Bot: default gray
                              }`}
                            >
                              <ReactMarkdown>{part.text}</ReactMarkdown>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>
                )
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        {/* Input Form Section */}
        <form onSubmit={handleChat} data-loading={isLoading} className="px-6 pb-6 pt-3">
          <div className="flex items-center border-2" style={{ borderColor: '#0f7a66', borderRadius: 9999 }}>
            <input
              name="message"
              placeholder="What do you want to know?"
              className="flex-1 px-6 py-3 text-gray-700 placeholder-gray-400 bg-white rounded-l-full rounded-r-none outline-none"
              onKeyDown={handleKeyDown}
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
            />
            {error && <div className="alert alert--error">{error}</div>}
            <button
              type="submit"
              className="h-12 w-12 flex items-center justify-center rounded-r-full"
              style={{ backgroundColor: '#0f7a66', color: '#fff' }}
              aria-label="Send"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          {error && <div className="mt-3 text-red-600 text-sm">{error}</div>}
        </form>
      </div>
    </div>
  )
}