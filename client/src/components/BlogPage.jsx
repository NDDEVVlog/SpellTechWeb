// src/components/BlogPage.jsx
import React, { useState } from 'react'; // Nhớ thêm useState
import { Link } from 'react-router-dom';
import { blogsData } from '../data';
import './BlogPage.css';
import { FaArrowLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogPage = () => {
  // 1. Tạo State để lưu tag đang chọn (Mặc định là 'All')
  const [activeTag, setActiveTag] = useState('All');

  // 2. Tự động lấy danh sách Tag duy nhất từ data
  // Kết quả sẽ là: ['All', 'Tech', 'Art', 'Career'...]
  const uniqueTags = ['All', ...new Set(blogsData.map(blog => blog.tag))];

  // 3. Lọc bài viết dựa trên Tag đang chọn
  const filteredBlogs = activeTag === 'All' 
    ? blogsData 
    : blogsData.filter(blog => blog.tag === activeTag);

  return (
    <div className="blog-page-container">
      <div className="bp-header">
        <Link to="/" className="bp-back-btn" style={{textDecoration:'none'}}>
          <FaArrowLeft /> Back
        </Link>
        <h1 className="bp-title">Developer's Journal</h1>
      </div>

      <div className="bp-layout">
        {/* Main Content: Render danh sách ĐÃ LỌC */}
        <div className="bp-main">
          {filteredBlogs.map(blog => (
            <article key={blog.id} className="bp-card">
              <div className="bp-card-header">
                {/* Hiển thị Tag */}
                <span className={`bp-tag ${blog.tag.replace(/\s+/g, '-').toLowerCase()}`}>
                  {blog.tag}
                </span>
                <span className="bp-date"><FaCalendarAlt /> {blog.date}</span>
              </div>
              
              <Link to={`/blog/${blog.slug}`} style={{textDecoration:'none'}}>
                 <h2 className="bp-card-title">{blog.title}</h2>
              </Link>
              
              <div className="bp-meta">
                 <span><FaUser /> {blog.author}</span>
              </div>
              <p className="bp-excerpt">{blog.excerpt}</p>
              <Link to={`/blog/${blog.slug}`} className="bp-read-more">Read Full Story &rarr;</Link>
            </article>
          ))}
          
          {/* Thông báo nếu không tìm thấy bài nào */}
          {filteredBlogs.length === 0 && (
            <p style={{color: '#888', fontStyle: 'italic'}}>No posts found for "{activeTag}".</p>
          )}
        </div>

        {/* Sidebar: Render Category tự động */}
        <aside className="bp-sidebar">
          <div className="bp-widget">
            <h3>Categories</h3>
            <ul>
              {uniqueTags.map(tag => (
                <li 
                  key={tag} 
                  onClick={() => setActiveTag(tag)}
                  style={{
                    color: activeTag === tag ? '#c8aa6e' : '#888', // Highlight mục đang chọn
                    fontWeight: activeTag === tag ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}
                >
                  {tag} 
                  {/* (Option) Đếm số bài viết của tag đó */}
                  {tag !== 'All' && ` (${blogsData.filter(b => b.tag === tag).length})`}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bp-widget newsletter">
            <h3>Subscribe</h3>
            <p>Get the latest updates directly to your inbox.</p>
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;