"use client";

import { useEffect, useState } from 'react';
import "../blogpost.css";
import { faBookmark, faEye, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import Image from 'next/image';
import { marked } from 'marked';
import CardOneBlog from './CardOneBlog';


function Page({ params }) {
  
  return (
    <div className="blog-page">
      <main className='content-blogs'>
      {/* display the target blog =======*/}
      <CardOneBlog   idblog={params}/>
        <aside className="aside-section">
          <section className="card-media">
            <h4>Follow us</h4>
            <div className="social-media">
              <a href=""><FontAwesomeIcon width={"20"} icon={faFacebook} /></a>
              <a href=""><FontAwesomeIcon width={"20"} icon={faTwitter} /></a>
              <a href=""><FontAwesomeIcon width={"20"} icon={faTwitch} /></a>
              <a href=""><FontAwesomeIcon width={"20"} icon={faYoutube} /></a>
            </div>
          </section>

          <section className="important-blogs-cards">
            <h4 className="title">Trends blogs</h4>
            <div className="card">
              <div className="card-body">
                <h3>How can gamers improve their streaming setup?</h3>
                <p>To improve streaming setup you should invest in a good microphone, camera, and lighting....</p>
              </div>
              <div className="line"></div>
              <div className="card-footer">
                <div className="seen"><FontAwesomeIcon width={"15"} icon={faEye} /> <span>40k</span> views</div>
                <a href="/articleDetails/2">Read more</a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3>What are the top gaming accessories to buy?</h3>
                <p>The top accessories for gaming to buy are headsets, gaming mice, and mechanical keyboards...</p>
              </div>
              <div className="line"></div>
              <div className="card-footer">
                <div className="seen"><FontAwesomeIcon width={"15"} icon={faEye} /> <span>300k</span> views</div>
                <a href="/articleDetails/2">Read more</a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3>How can you make money from gaming content on YouTube?</h3>
                <p>We will teach you how to earn money from gaming on YouTube through a few easy steps...</p>
              </div>
              <div className="line"></div>
              <div className="card-footer">
                <div className="seen"><FontAwesomeIcon width={"15"} icon={faEye} /> <span>16.5k</span> views</div>
                <a href="/articleDetails/2">Read more</a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3>What are the best new games to play in 2025?</h3>
                <p>Tears of the Kingdom, Elden Ring, Starfield, Hogwarts Legacy, Cyberpunk 2077...</p>
              </div>
              <div className="line"></div>
              <div className="card-footer">
                <div className="seen"><FontAwesomeIcon width={"15"} icon={faEye} /> <span>6.3k</span> views</div>
                <a href="/articleDetails/2">Read more</a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3>What are the most useful mods for Fortnite?</h3>
                <p>A useful mod in Fortnite is Fortnite Tracker, which helps track player stats and game performance...</p>
              </div>
              <div className="line"></div>
              <div className="card-footer">
                <div className="seen"><FontAwesomeIcon width={"15"} icon={faEye} /> <span>10k</span> views</div>
                <a href="/articleDetails/2">Read more</a>
              </div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Page;
