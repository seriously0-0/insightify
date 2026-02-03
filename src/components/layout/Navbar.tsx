"use client"

import Link from "next/link"


const navItem = [
    {lable:'features',href:'#features'},
    {lable:'pricing',href:'#pricing'},
    {lable:'about',href:'#about'},
]
export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10 ">
            {/* <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-white"></Link>
            </div> */}
            <div className="flex items-center justify-between border-b border-white/10 px-12 py-2">
                <div className="hidden md:flex gap-8 text-gray-300 items-center py-2">
                    {navItem.map((item)=>(
                    <Link key={item.href}  
                    href={item.href} className="hover:text-white transition">
                        {item.lable}
                    </Link>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <Link
                    href="#"
                    className="hidden sm:inline-flex px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                    >
                    Login
                    </Link>
                    <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium">
                    Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}