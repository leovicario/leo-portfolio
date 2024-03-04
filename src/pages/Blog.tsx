import React from 'react';
import '../css/main.css'
import '../css/responsive.css'

import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'

import Article from '../components/blog/Article.tsx'

const Blog: React.FC = () => {
  return (
    <main className="p-4 w-screen h-fit-content">
      
      <Header />

          <h1>Blog</h1>
          <div className="w-screen h-auto flex flex-row gap-8">
            <Article />
            <Article />
            <Article />
          </div>
       

      <Footer />

    </main>

  );
};

export default Blog;