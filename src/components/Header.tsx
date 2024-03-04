import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="w-full fixed p-2 pl-4 top-0 left-0">
        <a href="/" className="uppercase text-m font-roman">Leo Vicario</a>
        <a href="/blog" className="text-m font-roman"><br />Visit the blog</a>
      </header>
  )
}

export default Header