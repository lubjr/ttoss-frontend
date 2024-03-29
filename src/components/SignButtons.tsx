'use client'
import { usePathname } from 'next/navigation'

export default function SignButtons() {

    const pathname = usePathname()

    return (
        <div className="max-w-screen-xl mx-auto text-center mt-10">
            <a href="/user/login" className={`bg-gray-900 text-white font-semibold py-2 px-4 rounded-md mr-4 mb-2 hover:bg-gray-800 
            ${pathname === '/user/login' ? 'bg-white text-gray-900 font-bold hover:bg-white' : ''}`}>Sign in</a>
            <a href="" className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-md mb-2 hover:bg-gray-800">Sign up</a>
        </div>
    )
}