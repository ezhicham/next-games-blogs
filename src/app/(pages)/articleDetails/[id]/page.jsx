"use client"
import  { useEffect, useState } from 'react';
import "../blogpost.css";
import { faBookmark, faEye, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import Image from 'next/image';
import { marked} from 'marked';
// // Function to fetch a single blog by ID from Strapi
async function fetchBlogById(blogId) {
  const res = await fetch(`https://strapi-blog-demo-yuir.onrender.com/api/blogs/${blogId}?populate=*`, {
    next: { revalidate: 60 }, // Optional: Revalidate data every 60 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch the blog');
  }

  const data = await res.json();
  return data.data;
}

async function Page({params}) {
  console.log(params)
  const data = await fetchBlogById(params.id);
  console.log(data)
  const htmlContent = marked(data.attributes.blogDesc.slice(0,100));
  // const [blog, setBlog] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  // console.log(data)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const blogData = await fetchBlogById(1); // Replace '1' with the ID of the blog you want to fetch
  //       setBlog(blogData);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
   
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!blog) {
  //   return <div>No blog found</div>;
  // }



  return (
    <div className="blog-page">
      <main className='content-blogs'>
        <article className="blog-card">
          {/* header of card bloger */}
          <div className="header">
            <span>Created at:{moment(data.attributes.publishedAt).format("MM/DD/YYYY")}  </span>
            <div className="blog-action">
              <button><FontAwesomeIcon width={"15"} icon={faBookmark} /> <p>Save</p> </button>
              <button><FontAwesomeIcon width={"15"} icon={faShareNodes} /> <p>Share</p> </button>
            </div>
          </div>

          <div className="line"></div>

          <Image 
             src={`${data.attributes.blogImg.data[0].attributes.url}`}
             quality={30}
             width={300}
             height={200}

              alt="" />
          <h1>{data.attributes.blogTitle}</h1>
          <div
                    dangerouslySetInnerHTML={{
                      __html: htmlContent,
                    }}
                  />
          
        </article>

        {/* ======== aside section for best blogs and social media links ====== */}
        <aside className="aside-section">
          {/*======= follow us on social media section====  */}
          <section className="card-media">
            <h4>Follow us</h4>
            <div className="social-media">
              <a href=""><FontAwesomeIcon width={"20"} icon={faFacebook} /></a>
              <a href=""><FontAwesomeIcon width={"20"} icon={faTwitter} /></a>
              <a href=""><FontAwesomeIcon width={"20"} icon={faTwitch} /></a>
              <a href=""><FontAwesomeIcon width={"20"} icon={faYoutube} /></a>
            </div>
          </section>

          {/* ====== The best and trend blogs for affiliate links for VPN, programs, games shops ===== */}
          <section className="important-blogs-cards">
            <h4 className="title">Trends blogs</h4>
            {/* Sample blog card (you can dynamically generate these from fetched data if needed) */}
            <div className="card">
              <div className="card-body">
                <h3>What is the best VPNs?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="line"></div>
              <div className="card-footer ">
                <div className="seen"> <FontAwesomeIcon width={"15"} icon={faEye} /> <span>10k</span> views</div>
                <a href="">Read more</a>
              </div>
            </div>
            {/* Add more blog cards as needed */}
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Page;
