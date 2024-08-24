import Image from "next/image";
import "./home.css"
import moment from 'moment';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCartShopping, faComment, faDesktop, faGamepad, faNewspaper, faPlus, faShareFromSquare, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons";
import TrendGames from "./TrendGames/TrendGames";
import Link from "next/link";
import CardblogHome from "./CardblogHome";



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


export default async function Home() {
  // const data = await fetchBlogs();
  // console.log(data.data.slice(0,4))

  return (
    <main className="home-page">
      {/*======== hero-section =========== */}
       <section className="hero-section">
        {/* introducing the website */}
        <div className="text-intro">
          <h1>discover more about games </h1>
          <p>this website will help you to know more about your favorite and trend 
            games Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt atque ratione doloremque. Laboriosam qui ipsam pariatur incidunt cum, consectetur repellendus, 
            voluptate nulla minima odio magnam ut, in maxime consequuntur velit? </p>
          <div className="btns">
            <button> <span>games news </span>  <FontAwesomeIcon width={"15"} icon={faNewspaper} /></button>
            <button> <span>buy games</span> <FontAwesomeIcon width={"15"} icon={faCartShopping} />  </button>
          </div>
        </div>
        {/* image intro */}
        <div className="image-intro">
          
        </div>

       </section>
      



{/* ===========section of our game catigory  */}
    <section className="game-catigories">
    <div className="title">
      <h2>blogs catigories</h2>
      <p>🎮 Explore the Latest in Gaming News & Trends! ✨

Dive into our blogs for updates on the hottest game trends—whether it's action-packed battle royales, exciting sports car games, or more! 🚀🎯 From PlayStation and Xbox to PC and Android, we've got all your gaming needs covered. 🕹️💻

Plus, snag exclusive coupons and discounts for games, coins, and accounts from reputable sources. 🏷️💸 Get the best deals and enjoy your favorites for less! 🎉🎁 </p>
      </div>
    <div className="games-platform"> 
       <div className="game-platform"><FontAwesomeIcon icon={faXbox} /></div>
      <div className="game-platform"><FontAwesomeIcon   icon={faPlaystation} /></div>
      <div className="game-platform"><FontAwesomeIcon   icon={faGamepad} /></div>
      <div className="game-platform"><FontAwesomeIcon  icon={faDesktop} /></div>
      <div className="game-platform">  <FontAwesomeIcon icon={faAndroid} /></div>
    
      </div>

    </section>


{/* ======== blogs cards section  ========= */}
    <section className="blogs">
       <div className="title"><h2>Explore our blogs & articles</h2></div>
       {/*component of  cards of articles ======== */}
        <CardblogHome/>
       {/* load more blogs */}
       <Link href="/blogs" className="more-blogs-btn"><span>load more blogs</span> <FontAwesomeIcon width={"15"} icon={faPlus} /></Link>
    </section>
      

      {/*======== news section ======= */}
      <TrendGames/>
    </main>
  );
}
