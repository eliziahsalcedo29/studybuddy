import Link from "next/link";
import Logo from "./Logo";

// Header: styled to match the provided screenshot (teal top bar with actions on the right)
export default function Header() {
  return (
    // Use a full-width teal background and white text. Use inline style
    // with an exact hex so header and footer share the same color.
    // Removed the shadow to avoid perceived color differences.
    <header style={{ backgroundColor: '#0f7a66' }} className="text-white">
      <div className="container mx-auto p-5 flex items-center justify-between">
        {/* Logo on the left (Logo component updated to render white text) */}
        <Logo />

        {/* Actions on the right: small 'Log In' link and a white pill 'Sign Up' button */}
        <div className="flex items-center gap-4">
          {/* Log in: match Sign Up size and weight (bold), but keep transparent background */}
          <Link
            href="/login"
            // Use `text-base` so Log In matches Sign Up font size
            className="text-white px-4 py-1.5 rounded-full font-semibold text-base hover:bg-white/10"
          >
            Log In
          </Link>

          {/* Sign up: white pill button to match screenshot. Kept as a Link for client navigation. */}
           <Link
            href="/signup"
            className="bg-white text-teal-800 px-4 py-1.5 rounded-full font-semibold shadow-sm hover:opacity-95"
          >
            Sign Up
          </Link> 
        </div>
      </div>
    </header>
  );
}