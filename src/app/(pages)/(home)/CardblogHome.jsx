"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../component/loading/Loading.jsx';


async function fetchBlogs() {
  const res = await fetch('https://strapi-blog-demo-yuir.onrender.com/api/blogs?populate=*', {
    next: { revalidate: 60 }, // Optional: Revalidate data every 60 seconds
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

function CardblogHome() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlogs() {
      try {
        const data = await fetchBlogs();
        setBlogs(data.data.slice(0, 4)); // Fetch only the first 4 blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    }

    getBlogs();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return <Loading/>; // Show a loading state while fetching
  }

  return (
    <div>
      <div className="cards">
        {blogs.map((blog) => {
          const blogImageUrl = blog.attributes.blogImg.data[0].attributes.formats.small.url;

          return (
            <article className="card" key={blog.id}>
              <div className="card-header">
                <Image
                  src={blogImageUrl}
                  width={500}
                  height={301}  // Use the corresponding height from the `small` format
                  quality={10}
                  loading="lazy"
                  alt="Blog Image"
                />
              </div>
              <div className="card-content">
                <h3>{blog.attributes.blogTitle}</h3>
                <p></p>
                <span>{moment(blog.attributes.publishedAt).format('MM/DD/YYYY')}</span>
              </div>
              <div className="card-footer">
                <div className="part-1">
                  <Link href={`articleDetails/${blog.id}`}>
                    <span>Read more</span> <FontAwesomeIcon width={"15"} icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default CardblogHome;
