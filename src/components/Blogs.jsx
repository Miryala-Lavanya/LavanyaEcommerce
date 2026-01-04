import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const blogPosts = [
  { id: 1, title: "Top Saree Trends 2025", excerpt: "Discover the hottest saree styles...", date: "Dec 29, 2025", content: "Full content about saree trends..." },
  { id: 2, title: "How to Style Ethnic Wear", excerpt: "Tips and tricks to make your ethnic look stunning...", date: "Dec 20, 2025", content: "Complete guide on ethnic styling..." },
  { id: 3, title: "Winter Fashion Guide", excerpt: "Stay warm and stylish with these winter outfits...", date: "Dec 15, 2025", content: "Detailed winter fashion tips..." }
];

function Blogs() {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Blogs / Stories</h2>
      <div className="blogs-list">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <Link to={`/blogs/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Blogs;
