import React from 'react';
import '../css/main.css'
import '../css/responsive.css'

import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

import { Link } from "react-router-dom"

// import Article from '../components/blog/Article.tsx'

import { useEffect, useState } from "react";
import  client from "../sanity.jsx"; 



const Blog = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    client
    .fetch(`*[_type == "post"]{
        title,
        slug,
        "category": categories[0]->title,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`)
    .then((data) => setData(data))
    .catch(console.error)
},[]);


  return (
    <main className="p-4 w-screen h-fit-content">
      
      <Header />

          <h1>Blog</h1>
          <div className="w-screen h-auto flex flex-row gap-8">

          {data && data.map((post, index) =>(
    
    <article className="" key={index}>
        <div className="block relative">
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
            <span className="block absolute w-full h-full flex justify-end items-end pr-4 pb-4">
                <h2 className="text-white font-medium tracking-tight font-xl">{post.category}</h2>   
            </span>
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
            className="w-full h-72 object-cover"/> 
                 </Link>
         </div>

     
         <div className="p-8 border-black border h-1/2 bg-gray-100 px-6 py-3 mb-3">
                <h2 className="text-black italic font-light tracking-tighter text-2xl py-3">{post.category}</h2> 
                <Link to={"/post/" + post.slug.current}>
                <h3 className="text-black font-semibold text-3xl hover:text-gray-800 underline decoration-transparent hover:decoration-gray-700 decoration-2 transition ease-in duration-200 underline-offset-8 tracking-tighter pb-4">
                    {post.title}
                </h3> </Link>
                <Link to={"/post/" + post.slug.current}>
                <h4 className="pb-4">Leer más</h4></Link>
                </div>
        
    </article>
   )) }
          </div>
       

      <Footer />

    </main>

  );
};

export default Blog;