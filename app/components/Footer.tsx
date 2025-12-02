// Footer: full-width teal bar with centered copyright (matches header styling)
export default function Footer() {
  return (
    // Use the same inline background color as the header to guarantee exact match
    <footer style={{ backgroundColor: '#0f7a66' }} className="text-white">
      {/* Keep footer container width consistent with header using `container` */}
      <div className="container mx-auto text-center text-sm py-3">
        Copyright © StudyBuddy
      </div>
    </footer>
  );
}