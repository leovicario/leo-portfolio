import React from 'react'

const Header = () => {
  return (
    <header className="w-full z-10 text-accent grid grid-cols-3 gap-2 fixed py-3 px-8 xl:px-4 top-0 left-0 justify-between ">
      <div className="w-full">
          <a href="/" className="uppercase text-m font-medium">Leo Vicario</a>
          {/* <a href="/blog" className="text-m font-roman"><br />Visit the blog</a> */}
      </div>

      <div className="w-full flex place-content-center">
          <a href="/" className="text-white hidden lg:inline uppercase backdrop-blur-md text-sm font-roman py-1 px-8 ring-1 ring-accent rounded-3xl border-accent">Hire me</a>
      </div>

      <div className="hidden lg:inline w-full text-right uppercase">
          <a href="/" className="text-sm font-roman">leo@leovicario.com</a>
      </div>
        
      
      </header>
  )
}

export default Header