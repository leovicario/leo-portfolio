import React from 'react'


const Article = () => {

  return (
    <div className='w-full'>
        <img className="w-full h-96 object-cover" src='../images/mvp.jpg' />
        <div className="py-4 flex flex-col gap-2">
            <h2 className='text-4xl'>Article name</h2>
            <p>Article description</p>
        </div>
        
    </div>
  )
}

export default Article;