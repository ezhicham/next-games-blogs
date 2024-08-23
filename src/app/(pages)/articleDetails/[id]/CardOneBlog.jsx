"use client"
import { faBookmark, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Loading from "../../../component/loading/Loading"
import { marked } from "marked"
import moment from "moment"
import Image from "next/image"
import { useEffect, useState } from "react";

// Function to fetch a single blog by ID from Strapi
async function fetchBlogById(idblog) {
  const res = await fetch(`https://strapi-blog-demo-yuir.onrender.com/api/blogs/${idblog}?populate=*`, {
    next: { revalidate: 60 }, // Optional: Revalidate data every 60 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch the blog');
  }

  const data = await res.json();
  return data.data;
}
 

function CardOneBlog({idblog}) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await fetchBlogById(idblog.id);
        setBlog(blogData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idblog.id]);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  const htmlContent = marked(blog.attributes.blogDesc);

  
  return (
    <article className="blog-card">
    <div className="header">
      <span>Created at: {moment(blog.attributes.publishedAt).format("MM/DD/YYYY")}</span>
      <div className="blog-action">
        <button><FontAwesomeIcon width={"15"} icon={faBookmark} /> <p>Save</p></button>
        <button><FontAwesomeIcon width={"15"} icon={faShareNodes} /> <p>Share</p></button>
      </div>
    </div>

    <div className="line"> </div>

    <Image
      src={blog.attributes.blogImg.data[0].attributes.formats.small.url}
      width={500}
      height={301}
      quality={10}
      loading="lazy"
      alt="Blog image"
    />
    <h1>{blog.attributes.blogTitle}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: htmlContent,
      }}
    />
  </article>

  )
}

export default CardOneBlog
