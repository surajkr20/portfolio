// import React from 'react'

import { useState } from "react"

const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
    </div>
  )
}

export default Menu