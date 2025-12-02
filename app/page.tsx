import Default from "./templates/Default";
import FormChat from '@/app/components/forms/FormChat';

export default function Home() {
  return (
    <Default>
      <div className="container mx-auto p-5 flex flex-col gap-10 items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
        
        <div className="max-w-md w-full mx-auto">
          <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-lg p-8 border border-teal-100">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                Hello, Guest!
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Welcome to Study Buddy!{" "}
                <a className="text-teal-600 hover:text-teal-700 underline font-medium transition-colors" href="/signup">
                  Create your free account
                </a>{" "}
                and upload your notes to get instant AI-powered study help.
              </p>
            </div>
            <FormChat />

       

            
          </div>
        </div>

      </div>
    </Default>
  );
}