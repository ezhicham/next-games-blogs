import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./blogs.css";
import { marked } from "marked";
import Image from "next/image";
import {
  faArrowRight,
  faBarsStaggered,
  faChevronRight,
  faCoins,
  faComment,
  faDollarSign,
  faMagnifyingGlass,
  faNewspaper,
  faPlay,
  faPlus,
  faShareFromSquare,
  faThumbsUp,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


// Function to fetch data from Strapi
async function fetchBlogs() {
  const res = await fetch('https://strapi-blog-demo-yuir.onrender.com/api/blogs?populate=*', {
    next: { revalidate: 60 }, // Optional: Revalidate data every 60 seconds
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

async function page() {
  const data = await fetchBlogs();


  data.data.map((blog) => {
    console.log(blog.attributes.blogImg.data[0].attributes.url)
  }
  )


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
        <div className="cards">
          {data.data.map((blog) => {
            
            // Ensure the blog description is properly converted to HTML
            const htmlContent = marked(blog.attributes.blogDesc.slice(0,100));

            return (
              <article className="card-blog" key={blog.id}>
                <div className="card-header">
                {/* <img src={`https://strapi-blog-demo-yuir.onrender.com${blog.attributes.ezzghari.data[0].attributes.url}`}  alt="" /> */}
                                  <Image
                    src={blog.attributes.blogImg.data[0].attributes.formats.small.url}
                    width={500}
                    height={301}  // Use the corresponding height from the `small` format
                    quality={10}
                    loading="lazy"
                    alt="Picture of the author"
                  />
                </div>
                <div className="card-content">
                  <h3>{blog.attributes.blogTitle}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: htmlContent,
                    }}
                  />
                  <span>11/09/2024</span>
                </div>
                <div className="card-footer">
                  <div className="part-1">
                    <Link href={`articleDetails/${blog.id}`}>
                      <span>read article </span>
                      <FontAwesomeIcon width={"15"} icon={faArrowRight} />
                    </Link>
                  </div>
                  <div className="part-2 flex gap-3">
                    <button>
                      <span>500</span>
                      <FontAwesomeIcon width={"15"} icon={faComment} />
                    </button>
                    <button>
                      <span>1.3k</span>
                      <FontAwesomeIcon width={"15"} icon={faThumbsUp} />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        width={"15"}
                        icon={faShareFromSquare}
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
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
