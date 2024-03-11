import React from 'react'

const Showcase = () => {
  return (
    <div className="w-full py-8">
        
        <div id="portfolio-item" className="flex gap-16 items-center py-8 mb-12 border-b border-zinc-500">
            <h2 className="text-8xl leading-none ">arbe.store</h2>
            <p className="text-xl leading-none pt-4 uppercase">Strategy + branding + design +  development</p>
        </div>

        <div id="portfolio-item" className="flex gap-16 items-center py-8 mb-12 border-b border-zinc-500">
            <h2 className="text-8xl leading-none ">Proaxion</h2>
            <p className="text-xl leading-none pt-4 uppercase">Web Development + Interaction Design</p>
        </div>

        <div id="portfolio-item" className="flex gap-16 items-center py-8 mb-8 border-b border-zinc-500">
            <h2 className="text-8xl leading-none ">Zenit</h2>
            <p className="text-xl leading-none pt-4 uppercase">Visual Identity + Branding Strategy + Visual Design + Development</p>
        </div>

    </div>
  )
}

export default Showcase