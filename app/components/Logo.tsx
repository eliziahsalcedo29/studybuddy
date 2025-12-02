import Link from "next/link";

// Logo: display site name in bold; ensure text is white to show on the teal header
export default function Logo() {
  return (
    <div className="font-bold text-2xl tracking-[-0px] text-white">
      <Link href="/">StudyBuddy</Link>
    </div>
  );
} 