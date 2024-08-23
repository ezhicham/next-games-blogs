
import { faFacebook, faPinterest, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer className="footer-section" >
      {/* our brand and privacy-policy */}
      <section className="brand-privacy">
        <div className="brand">
          <h5>games X</h5>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing
             elit. Saepe, perspiciatis?</p>
        </div>
        <div className="privacy">
          <h5>privacy & policy</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto qui
             ratione a cum odit quo voluptatibus incidunt maxime aliquam placeat.</p>
        </div>
      </section>
      {/* divider */}
       <div className="divider"></div>
       {/* links for blogs , affiliate , stores */}
      <section className="links">
        
       <ul className="navigation-links">
       <h5>navigation</h5>
        <li><a href="">home</a></li> 
        <li><a href="">services</a></li> 
        <li><a href="">games stores</a></li> 
       </ul>

       <ul className="affiliate-links">
       <h5>best games</h5>
        <li><a href="">gta 6</a></li> 
        <li><a href="">fifa 2025</a></li> 
        <li><a href="">pes 2025</a></li> 
        <li><a href="">steam</a></li> 
        <li><a href="">x Box </a></li> 
       </ul>
       <ul className="affiliate-links">
       <h5>best games</h5>
        <li><a href="">gta 6</a></li> 
        <li><a href="">fifa 2025</a></li> 
        <li><a href="">pes 2025</a></li> 
        <li><a href="">steam</a></li> 
        <li><a href="">x Box </a></li> 
       </ul>
      
       
      </section>
      {/* divider */}
      <div className="divider"></div>
      {/* social media links */}
      <section className="social-media">
        <p>contact us on:</p>
          <div className="platforms">
            <a href=""><FontAwesomeIcon width={"20"} icon={faFacebook} /></a>
            <a href=""><FontAwesomeIcon width={"20"} icon={faWhatsapp} /></a>
            <a href=""><FontAwesomeIcon width={"20"} icon={faPinterest} /></a>  
            <a href=""><FontAwesomeIcon width={"20"} icon={faTwitter} /></a>    
                </div>
      </section>
      
    </footer>
  )
}

export default Footer
