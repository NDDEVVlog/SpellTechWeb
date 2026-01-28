import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data';
import { FaArrowLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './BlogDetail.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogsData.find(b => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) return <div className="bd-container"><h1>Blog Not Found</h1></div>;

  // Lấy Component từ data ra (Lưu ý viết hoa chữ cái đầu để React hiểu là Component)
  const PostContent = blog.ContentComponent;

  return (
    <div className="bd-container">
      <div className="bd-wrapper">
        <Link to="/blog" className="bd-back-btn">
          <FaArrowLeft /> Back to Journal
        </Link>

        <header className="bd-header">
          <span className="bd-tag">{blog.tag}</span>
          <h1 className="bd-title">{blog.title}</h1>
          <div className="bd-meta">
            <span><FaUser /> {blog.author}</span>
            <span><FaCalendarAlt /> {blog.date}</span>
          </div>
        </header>

        {/* --- KHU VỰC RENDER NỘI DUNG --- */}
        <div className="bd-content-area">
          {/* Kiểm tra nếu có Component thì render, nếu không thì báo lỗi hoặc render text cũ */}
          {PostContent ? <PostContent /> : <p>{blog.content}</p>}
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;