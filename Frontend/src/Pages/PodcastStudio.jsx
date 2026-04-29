import React, { useEffect, useState } from "react";
import './Podcast.css'
import PodcastStudioBooking from "../components/StudioBooking";
import cameras from '../assets/podcast/podcast-cameras.JPG';
import chairs from '../assets/podcast/podcast-chair.JPG';
import mics from '../assets/podcast/podcast-mic.JPG';
import output from '../assets/podcast/podcast-output.JPG';
import light from '../assets/podcast/studio-light2-min.JPG';
import set2 from '../assets/podcast/studio-set2-min.JPG';
import nytview from '../assets/podcast/StudioNightView-min.JPG';
import set from '../assets/podcast/studioSet-min.JPG';






export default function PodcastStudio() {
  

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openWhatsApp = () =>
    window.open("https://wa.me/919032845433", "_blank");
  

  
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target); // 🔥 stop observing
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "100px 0px",
    }
  );

  document
    .querySelectorAll(
      ".content, .visual, .studio-header, .studio-image, .floating-actions, .sbf-card, .testimonial-card, .testimonial-cta, .sbf-section"
    )
    .forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);

const videoRef = React.useRef(null);

useEffect(() => {
  const t = setTimeout(() => {
    videoRef.current?.play();
  }, 1200); // play AFTER page settles

  return () => clearTimeout(t);
}, []);



  return (
    <div>
     

      {/* HERO SECTION */}
      <section className="hero">
       <video src="https://karthik.kkdigitalgrowth.com/wp-content/uploads/2026/03/podcast_clip.mp4"
         muted
         loop
         playsInline
         preload="none"
         className="hero-bg-video"
         ref={videoRef}
       >
        
       </video>


        <div className="bg-gradient bg-gradient-1"></div>
        <div className="bg-gradient bg-gradient-2"></div>

        <h1 className="hero-title1">
          <span>YOUR PODCAST BEGINS HERE</span>
          <br />
          <span>IN</span>
          <span className="highlight">VISAKHAPATNAM</span>
        </h1>

        <p className="hero-description1">
          Bring your voice to life at Genie Studio, the city’s most trusted
          podcast recording and content creation space.
        </p>

        <div className="hero-cta">
          <a href="https://wa.me/+919032845433" className="btn btn-primary">
            Book Studio
          </a>
        </div>
      </section>

      {/* NETWORK SECTION */}
      <section className="network-section" id="network">
        <div className="network-content">
          <h4 className="network-subtitle">OUR SPACE</h4>
          <h2 className="network-title">
            Where voices grow louder, stories find rhythm, <br />
            and sound becomes legacy.
          </h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            <img src= {mics} alt="Podcast 1" loading='lazy' decoding="async"/>
            <img src= {nytview} alt="Podcast 2" loading='lazy' decoding="async"/>
            <img src=  {set} alt="Podcast 3" loading='lazy' decoding="async" />
            <img src=  {light} alt="Podcast 4" loading='lazy' decoding="async" />
            <img src= {cameras} alt="Podcast 5" loading='lazy' decoding="async" />

            <img src= {chairs} alt="Podcast 1" loading='lazy' decoding="async" />
            <img src= {mics} alt="Podcast 3" loading='lazy' decoding="async" />
            <img src= {set2} alt="Podcast 4" loading='lazy' decoding="async" />
          </div>
        </div>
      </section>

      {/* ADVERTISING SECTION */}
      <section className="advertising-section">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>

        <div className="container">
          <div className="content">
            <span className="content-label">ADVERTISING</span>
            <h2>YOUR VOICE. OUR STUDIO. ONE VISION.</h2>
            <p>
              At Genie Studio, your ideas become sound that connects. We provide
              high-quality acoustics, professional support, and more.
            </p>
            <a
              href="https://wa.me/+919032845433"
              className="cta-button"
            >
              Get Started
            </a>
          </div>

          <div className="visual">
            <div className="phone-mockup">
              <div className="mic-circle">
                <div className="mic-icon">
                  <div className="mic-stand"></div>
                  <div className="mic-base"></div>
                </div>
              </div>

              <div className="sound-wave">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="wave-bar"></div>
                ))}
              </div>

              <div className="hand-visual"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO SECTION */}
      <section className="studio-section" id="our-studio">
        <div className="studio-container">
          <div className="left-column">
            <div className="studio-header">
              <h2>A SPACE DESIGNED FOR EVERY CREATOR</h2>
              <p>
                Whether you're a solo podcaster or influencer, Genie Studio
                adapts to you.
              </p>
            </div>

            <div className="studio-image large">
              <img
                src= {set2}
                alt="Red Studio Setup"
                loading='lazy'
              />
            </div>
          </div>

          <div className="right-column">
            <div className="studio-image small">
              <img
                src= {nytview}
                alt="Studio Setup"
                loading='lazy'
              />
            </div>

            <div className="studio-image small">
              <img
                src= {light}
                alt="Studio Setup"
                loading='lazy'
              />
            </div>
          </div>
        </div>

      </section>

      {/* EQUIPMENT SECTION */}
      <section className="furniture-section" id="equipment">
        <h2 className="section-title">
          Equipped with all the <br /> furniture & props you need
        </h2>

        <div className="furniture-container">
          <div className="furniture-item">
            <img src= {set2}  alt="Studio Set" loading='lazy' />
            <p className="item-text">1 x complete podcast setup</p>
          </div>

          <div className="furniture-item">
            <img src= {mics} alt="Mics" loading='lazy' />
            <p className="item-text">2 x high-quality mic</p>
          </div>
        </div>
      </section>

      {/* Grid section */}
      <section className="sbf-section">
        <div className="sbf-grid">
          <figure className="sbf-card sbf-left">
            <img src= {cameras} loading='lazy' alt="Camera" />
            <figcaption>3 x high-quality camera</figcaption>
          </figure>

          <figure className="sbf-card sbf-right">
            <img src= {output} loading='lazy' alt="Output" />
            <figcaption>4 x excellent output</figcaption>
          </figure>

          <figure className="sbf-card sbf-bottom">
            <img src= {nytview} loading='lazy' alt="Premium" />
            <figcaption>5 x premium look set</figcaption>
          </figure>
        </div>
      </section>

      <PodcastStudioBooking/>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section" id="reviews">
        <div className="bg-pattern"></div>
        <div className="decor-orb decor-orb-1"></div>
        <div className="decor-orb decor-orb-2"></div>

        <div className="testimonial-container">
          <div className="testimonial-header">
            <span className="testimonial-label">Testimonials</span>
            <h2>WHAT OUR CREATORS SAY</h2>
            <p>
             Every voice, every emotion, every story, that’s the Genie Studio experience.
            </p>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="quote-icon"></div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">
                "The studio quality is absolutely incredible. The acoustics are perfect, and the equipment is top-notch. Our podcast has never sounded better since we started recording here."
              </p>

              <div className="author-info">
                <div className="author-avatar">SP</div>
                <div className="author-details">
                  <h4>Sasidhar Pydiraju</h4>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="quote-icon"></div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">
                "Professional setup with amazing support staff. They helped us every step of the way, from setup to post-production. Highly recommend for serious podcasters!"
              </p>

              <div className="author-info">
                <div className="author-avatar">AS</div>
                <div className="author-details">
                  <h4>Aruna Sai Kumar</h4>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="quote-icon"></div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">
                "As a beginner, I was nervous about recording my first podcast. The team made everything so easy and welcoming. The studio space is inspiring and the results are phenomenal!"
              </p>

              <div className="author-info">
                <div className="author-avatar">S</div>
                <div className="author-details">
                  <h4>Shanmuk</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-cta">
            <button
              className="cta-button"
              onClick={() =>
                window.open("/contact", "_blank")
              }
            >
              Book Your Session Today
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
