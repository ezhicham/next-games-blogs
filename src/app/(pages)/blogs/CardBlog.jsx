"use client";

import { useState, useEffect } from 'react';
import { faArrowRight, faComment, faShareFromSquare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { marked } from 'marked';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import Loading from 'app/component/loading/Loading';


// Function to fetch blogs from the API
async function fetchBlogs() {
  const res = await fetch('https://strapi-blog-demo-yuir.onrender.com/api/blogs?populate=*', {
    next: { revalidate: 60 }, // Optional: Revalidate data every 60 seconds
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

function CardBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getBlogs() {
      try {
        const data = await fetchBlogs();
        setBlogs(data.data); // Set the fetched blogs data
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false); // Update the loading state
      }
    }

    getBlogs(); // Fetch blogs on component mount
  }, []); // Empty dependency array ensures this runs only once
  
  if (loading) {
    return <Loading/>; // Display loading message while fetching data
  }

  return (
    <div>
      <div className="cards">
        {blogs.map((blog) => {
          // Convert the blog description to HTML using 'marked'
          const htmlContent = marked(blog.attributes.blogDesc.slice(0, 100));

          return (
            <article className="card-blog" key={blog.id}>
              <div className="card-header">
                <Image
                  src={blog.attributes.blogImg.data[0].attributes.formats.small.url}
                  width={500}
                  height={301}  // Use the corresponding height from the `small` format
                  quality={10}
                  loading="lazy"
                  alt="Blog Image"
                />
              </div>
              <div className="card-content">
                <h3>{blog.attributes.blogTitle}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: htmlContent,
                  }}
                />
                <span>{moment(blog.attributes.publishedAt).format('MMMM Do, YYYY')}</span>
              </div>
              <div className="card-footer">
                <div className="part-1">
                  <Link href={`articleDetails/${blog.id}`}>
                    <span>Read article</span>
                    <FontAwesomeIcon width={"15"} icon={faArrowRight} />
                  </Link>
                </div>
                <div className="part-2 flex gap-3">
                  <button>
                    <span>{blog.attributes.comments}</span>
                    <FontAwesomeIcon width={"15"} icon={faComment} />
                  </button>
                  <button>
                    <span>{blog.attributes.likes}</span>
                    <FontAwesomeIcon width={"15"} icon={faThumbsUp} />
                  </button>
                  <button>
                    <FontAwesomeIcon width={"15"} icon={faShareFromSquare} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default CardBlog;
