"use client"
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [openmenu, setopenmenu] = useState(false)
    const handleclick = () => {
        setopenmenu(!openmenu)
    }
    return (
        <div>
            <nav>
                <div className="button md:hidden flex items-end justify-end mx-4 pt-2">
                    <button onClick={handleclick}>
                        <img src="/menu.png" alt="menu" className='w-8'/>
                    </button>
                    {openmenu && (
                        <ul className="bg-green-200 opacity-80 py-4 md:flex md:flex-col text-center absolute top-16 left-0 justify-center w-[calc(100%-4rem)] mx-8 rounded-md shadow-md z-50">
                            <li className="py-2">
                                <a href="#Hero" onClick={() => setopenmenu(false)} className="hover:underline">Hero</a>
                            </li>
                            <li className="py-2">
                                <a href="#About" onClick={() => setopenmenu(false)} className="hover:underline">About</a>
                            </li>
                            <li className="py-2">
                                <a href="#Services" onClick={() => setopenmenu(false)} className="hover:underline">Services</a>
                            </li>
                            <li className="py-2">
                                <a href="#FAQ" onClick={() => setopenmenu(false)} className="hover:underline">FAQ</a>
                            </li>
                            <li className="py-2">
                                <a href="#Contact" onClick={() => setopenmenu(false)} className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="screen flex justify-center">
                    <ul className='hidden py-4 md:flex flex-row justify-between w-1/2'>
                        <li className="group">
                            <a href='#Hero'>Hero</a>
                            <div className="h-0.5 w-0 group-hover:w-full bg-black mt-0.1 transition-all duration-300" />
                        </li>
                        <li className="group">
                            <a href='#About'>About</a>
                            <div className="h-0.5 w-0 group-hover:w-full bg-black mt-0.1 transition-all duration-300" />
                        </li>
                        <li className="group">
                            <a href='#Services'>Services</a>
                            <div className="h-0.5 w-0 group-hover:w-full bg-black mt-0.1 transition-all duration-300" />
                        </li>
                        <li className="group">
                            <a href='#FAQ'>FAQ</a>
                            <div className="h-0.5 w-0 group-hover:w-full bg-black mt-0.1 transition-all duration-300" />
                        </li>
                        <li className="group">
                            <a href='#Contact'>Contact</a>
                            <div className="h-0.5 w-0 group-hover:w-full bg-black mt-0.1 transition-all duration-300" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
