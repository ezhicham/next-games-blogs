import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./blogs.css";

import {

  faBarsStaggered,
  faChevronRight,
  faDollarSign,
  faMagnifyingGlass,
  faNewspaper,
  faPlay,
  faPlus,  
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import CardBlog from "./CardBlog";

// Function to fetch data from Strapi
// async function fetchBlogs() {
//   const res = await fetch('https://strapi-blog-demo-yuir.onrender.com/api/blogs?populate=*', {
  //     next: { revalidate: 60 }, // Optional: Revalidate data every 60 seconds
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch blogs');
//   }
//   return res.json();
// }

async function page() {
  // const data = await fetchBlogs();


  // data.data.map((blog) => {
  //   console.log(blog.attributes.blogImg.data[0].attributes.url)
  // }
  // )


  return (
    <div className="blogs-page">
      <div className="filter">
        <div className="filter-menu">
          <FontAwesomeIcon width={"25"} icon={faBarsStaggered} />
        </div>

        {/* filter the blogs by subjects  earn money ,events, competitions..... */}
        <div className="filter-subjects">
          {/* subject */}
          <div className="subject-section">
            <FontAwesomeIcon className="text-cyan-400" icon={faDollarSign} />
            <div className="text">
              <h5>earn money</h5>
              <p>sell , buy , markets...</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>

          {/* subject */}
          <div className="subject-section">
            <FontAwesomeIcon className="text-red-400" icon={faPlay} />
            <div className="text">
              <h5>gameplay</h5>
              <p>hightlight , videos , live...</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
          {/* subject */}
          <div className="subject-section">
            <FontAwesomeIcon className="text-green-300" icon={faNewspaper} />
            <div className="text">
              <h5>video games</h5>
              <p>news , blogs , articles...</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>

          {/* subject */}
          <div className="subject-section">
            <FontAwesomeIcon
              width={"25"}
              className="text-violet-400"
              icon={faTrophy}
            />
            <div className="text">
              <h5>others</h5>
              <p>competition , tournament...</p>
            </div>
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>

        {/* search by text about blog */}
        <div className="search-box">
          <input type="text" placeholder="Search about a game..." />
          <FontAwesomeIcon width={"20"} icon={faMagnifyingGlass} />
        </div>
      </div>

      {/* ======== blogs cards section  ========= */}
      <section className="blogs">
        <div className="title">
          <h2>Explore our blogs & articles</h2>
        </div>
        {/*====== import  the card component=========== */}
             
              <CardBlog/>
              
        {/* load more blogs */}
        <a href="" className="more-blogs-btn">
          <span>load more blogs</span>
          <FontAwesomeIcon width={"15"} icon={faPlus} />
        </a>
      </section>
    </div>
  );
}

export default page;
