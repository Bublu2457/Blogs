import Link from "next/link";
export default function Navigation(){
     return(
        <nav className="bg-gradient-to-r from-yellow-500 to-black h-20  px-4 py-4 flex items-center justify-between w-full ">
           <Link href="/" className="text-xl px-4 py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-teal-500 hover:bg-black text-white">home</Link>
            <Link href="/About" className="text-xl px-4 py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-teal-500 hover:bg-black text-white ">About</Link>
            <Link href="/contact" className="text-xl px-4 py-4  rounded-lg bg-gradient-to-r from-yellow-500 to-teal-500 hover:bg-black text-white">Contact</Link>
        </nav>
     );
};