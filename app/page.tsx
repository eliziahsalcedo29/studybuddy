import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1><b>Hello BulSU</b></h1>
       <div>
        <Link href="/login">Login</Link>
    </div>
    </div>
    
  );
}
