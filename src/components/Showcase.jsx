import React from 'react'

const Showcase = () => {
  return (
    <div className="w-full py-4 xl:py-8 mb-12">
        
        <div id="portfolio-item" className="xl:flex gap-16 items-center py-8 mb-6 xl:mb-12 border-b border-zinc-500">
            <a href="https://arbe.store/" target="_blank"><h2 className="text-4xl xl:text-8xl font-bold leading-none ">Arbe</h2></a>
            <p className="text-xl leading-none pt-4 uppercase">Branding Strategy + Visual Identity + Design +  Development</p>
        </div>

        <div id="portfolio-item" className="xl:flex gap-16 items-center py-8 mb-6 xl:mb-12 border-b border-zinc-500">
            <a href="https://proaxion.pro/" target="_blank"><h2 className="text-4xl xl:text-8xl font-bold leading-none ">Proaxion</h2></a>
            <p className="text-xl leading-none pt-4 uppercase">Web Development + Interaction Design</p>
        </div>

        <div id="portfolio-item" className="xl:flex gap-16 items-center py-8 mb-6 xl:mb-8 border-b border-zinc-500">
            <a href="https://www.linkedin.com/company/zenitsolar/" target="_blank"><h2 className="text-4xl font-bold xl:text-8xl leading-none ">Zenit</h2></a>
            <p className="text-xl leading-none pt-4 uppercase">Visual Identity + Branding Strategy + Visual Design + Development</p>
        </div>

        <div id="portfolio-item" className="xl:flex gap-16 items-center py-8 mb-6 xl:mb-8 border-b border-zinc-500">
            <a href="https://brainershub.com/" target="_blank"><h2 className="text-4xl font-bold xl:text-8xl leading-none ">BrainersHub</h2></a>
            <p className="text-xl leading-none pt-4 uppercase">Visual Design + Development</p>
        </div>

        <div id="portfolio-item" className="xl:flex gap-16 items-center py-8 mb-6 xl:mb-8 border-b border-zinc-500">
            <a href="https://alex3d-io.webflow.io/" target="_blank"><h2 className="text-4xl font-bold xl:text-8xl leading-none ">Alex3D</h2></a>
            <p className="text-xl leading-none pt-4 uppercase">Visual Design + Development</p>
        </div>

    </div>
  )
}

export default Showcase