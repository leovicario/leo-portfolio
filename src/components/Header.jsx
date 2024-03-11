import React from 'react'

const Header = () => {
  return (
    <header className="w-full z-10 grid grid-cols-3 gap-2 fixed py-3 px-4 top-0 left-0 justify-between">
      <div className="w-full">
          <a href="/" className="uppercase text-m font-medium">Leo Vicario</a>
          {/* <a href="/blog" className="text-m font-roman"><br />Visit the blog</a> */}
      </div>

      <div className="w-full flex place-content-center">
          <a href="/" className="uppercase text-sm font-roman py-1 px-8 ring-1 ring-current rounded-3xl border-current">Hire me</a>
      </div>

      <div className="w-full text-right">
          <a href="/" className="text-sm font-roman">leo@leovicario.com</a>
      </div>
        
      
      </header>
  )
}

export default Header