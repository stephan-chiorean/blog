import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <Image 
                className="rounded-full"
                src="/logo.jpeg"
                width={50}
                height={50}
                alt="logo"
                />
            </Link>
            <div className="text-xl px-2 uppercase tracking-[7px]">Stephan Chiorean</div>
        </div>
        <div>
            <Link 
            href="http://stephantc.dev"
            className="px-5 py-3 text-sm md:text-base bg-[#FA6945] text-slate-700 flex items-center rounded-full text0center">
                Learn more about Stevie Productions
            </Link>

        </div>
    </header>
  )
}

export default Header