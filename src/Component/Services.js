

import React from 'react'
import { Link } from 'react-router-dom';
import './Services.css';
import Footer from './Footer.js'
// import card13 from '../Navbar/Picture/develop.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import new1 from '../Images/new1.png';
import new2 from '../Images/new2.png';
import new3 from '../Images/new3.png';
import new4 from '../Images/new4.png';


function Services() {
  const { hash } = useLocation(); // Get the hash from the URL
 
  useEffect(() => {
    const scrollToHash = () => {
      if (hash) {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Add slight delay for reliable scrolling
          setTimeout(() => {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }, 100);
        }
      }
    };
  
    // Initial scroll on component mount
    scrollToHash();
    
    // Optional: Add event listener for hash changes after mount
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [hash]);
  const services = [
    {
      id: "web-development",
    title: "Web Development",
      description:
        "Web development is the process of creating and maintaining websites and web applications. It includes both front-end (user interface) and back-end (server-side) development. Front-end developers use HTML, CSS, JavaScript, React.js to build responsive and interactive user interfaces. Back-end developers handle databases, server logic, and application architecture using languages like Node js, Express, Mongo DB. For more details, visit our ",
      link: "/services#web-development",
      image: new1,
    },
    {
      id: "app-development", // Add ID
    title: "App Development",
      description:
        "Our team of experts specializes in developing high-quality, user-friendly mobile applications. We focus on creating seamless, scalable solutions that meet your business needs and enhance user engagement. From ideation to deployment, we ensure top-notch performance, security, and functionality. Trust us to turn your app vision into a reality, delivering exceptional results.",
      image: new2,
    },
    {
      id: "marketing", // Add ID
    title: "Marketing",
      description:
        "Our marketing services are designed to boost your brand visibility and drive business growth. We specialize in digital marketing, including SEO, PPC, and social media campaigns, to connect with your audience effectively. Our content marketing strategies ensure engaging and impactful communication with your customers.",
      image: new3,
    },
    {
      id: "graphic-design", // Add ID
    title: "Graphic Design",
      description:
        "Our graphic design services bring your brand vision to life with creativity and precision. We specialize in designing logos, brochures, banners, and other marketing materials that capture attention and communicate your message effectively. Our team combines innovative concepts with professional execution to create visually stunning designs.",
      image: new4,
    },
  ];

  useEffect(() => {
    if (hash) {
     
      const targetId = hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
       
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log(`Element with ID ${targetId} not found.`);
      }
    }
  }, [hash]); 
  return (
    <div>

      <div className='backs '>

        <div className='logoo'>
          <div className='vote'>
            <h1>Our Expertise</h1>
            <p>Solutions crafted with care. Your success, our purpose.</p>
          </div>


        </div>
        <div className='navbars' >
          <Link to="/home" className='tts' >Home</Link>
          <Link to="/services" className='tts'>Services</Link>
          <Link to="/aboutus" className='tts'>AboutUs</Link>
          <Link to="/contactus" className='tts'>ContactUs</Link>



        </div>

      </div>
      {/* <div className='workoff'>
        <img src={card13} alt='loading...' className='workoff1' ></img>
      </div>


      <div className='Gapp' >
        <div className="text-overlay-container" style={{ marginTop: '19%' }}>
          <div className="hh" id="web-development">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>Web Development</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
            Web development is the process of creating and maintaining websites and web applications. It includes both front-end (user interface) and back-end (server-side) development. Front-end developers use HTML, CSS, JavaScript, React.js to build responsive and interactive user interfaces. Back-end developers handle databases, server logic, and application architecture using languages like Node js,
            Express, Mongo DB.
            </p>
          </div>
        </div>

        <div className="text-overlay-container" style={{ marginTop: '3%' }}>
          <div className="ff"  id="app-development">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>App Development</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
            Our team of experts specializes in developing high-quality, user-friendly mobile applications. We focus on creating seamless, scalable solutions that meet your business needs and enhance user engagement. From ideation to deployment, we ensure top-notch performance, security, and functionality. Trust us to turn your app vision into a reality, delivering exceptional results.
            </p>
          </div>
        </div>

        <div className="text-overlay-container" style={{ marginTop: '3%' }}>
          <div className="gf" id="marketing">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>Marketing</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
            Our marketing services are designed to boost your brand visibility and drive business growth. We specialize in digital marketing, including SEO, PPC, and social media campaigns, to connect with your audience effectively. Our content marketing strategies ensure engaging and impactful communication with your customers.
            </p>
          </div>
        </div>
        <div className="text-overlay-container" style={{ marginTop: '3%', marginBottom: '5%' }}>
          <div className="tf" id="graphic-design">
            <div className="overlay"></div>

            <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '5px' }}>
              <b>Graphic Designing</b>
            </h1>
            <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif', marginLeft: "5px", paddingBottom: "60px" }}>
            Our graphic design services bring your brand vision to life with creativity and precision. We specialize in designing logos, brochures, banners, and other marketing materials that capture attention and communicate your message effectively. Our team combines innovative concepts with professional execution to create visually stunning designs.
            </p>
          </div>
        </div>

      </div> */}



<div className="services-container">
      {services.map((service, index) => (
       <div 
       key={index}
       id={service.id} // Add this line
       className={`service-box ${index % 2 === 0 ? "row-normal" : "row-reverse"}`}
     >
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h2 style={{paddingBottom:'3%'}}>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Services;