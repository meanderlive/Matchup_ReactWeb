import React from "react";
import Slider from "react-slick";
// import './Testimonial.css'; // Add a separate CSS file for styling if needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from "../assets/images/blog/01.jpg";
import blog2 from "../assets/images/blog/02.jpg";
import blog3 from "../assets/images/blog/03.jpg";
import blog4 from "../assets/images/blog/04.jpg";
import blog5 from "../assets/images/blog/03.jpg";
import blog6 from "../assets/images/blog/06.jpg";
import blog7 from "../assets/images/blog/07.jpg";
import blog8 from "../assets/images/blog/08.jpg";
import blog9 from "../assets/images/blog/09.jpg";
import { Link } from "react-router-dom";
import "./testmonial.css";
const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  // Slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const BlogContentListThree = [
    {
      imgUrl: blog4,
      imgAlt: "Blog Thumb",
      title:
        "Title: Exploring the Impact of Augmented Reality on Modern Relationships",
      desc: "As technology seamlessly integrates augmented reality into our daily lives, we explore the innovative ways AR reshapes modern relationships, offering a unique and immersive perspective on how virtual elements enhance and deepen connections.",
      btnText: "read more",
      pubDate: "10 May 2023",
      pubAuthor: "Daniel Edwards",
    },
    {
      imgUrl: blog5,
      imgAlt: "Blog Thumb",
      title: "Decoding the Language of Online Profiles: A Guide to Safe Dating",
      desc: "Understanding the nuances of online dating profiles is crucial for a safe and enjoyable experience. In this guide, we unravel the language used in profiles, offering insights into potential red flags and tips for navigating the digital dating landscape securely.",
      btnText: "read more",
      pubDate: "15 May 2023",
      pubAuthor: "Benjamin Taylor",
    },
    {
      imgUrl: blog6,
      imgAlt: "Blog Thumb",
      title:
        "Self-Reflection in the Search for Love: 5 Questions to Transform Your Journey",
      desc: "Embarking on a journey to find love requires introspection. Take a moment to ask yourself crucial questions that can transform your search for a meaningful connection. Understanding your own desires is key to building a fulfilling relationship.",
      btnText: "read more",
      pubDate: "25 May 2023",
      pubAuthor: "Samuel Mitchell",
    },
    {
      imgUrl: blog7,
      imgAlt: "Blog Thumb",
      title: "Maximizing Your Chances: 10 Tips to Excel in the Dating Game",
      desc: "In the pursuit of love, sidestep common pitfalls that can sabotage your quest for connection. A seasoned matchmaker shares invaluable tips, guiding you to excel in the dating game and maximize your chances of finding a lasting and meaningful bond.",
      btnText: "read more",
      pubDate: "15 June 2023",
      pubAuthor: "Mason Davis",
    },
    {
      imgUrl: blog8,
      imgAlt: "Blog Thumb",
      title:
        "Cracking the Code: Strategies for Genuine Connections in Online Dating",
      desc: "Online dating is a realm filled with opportunities and challenges. Explore the art of online dating by unveiling the untold secrets that lead to genuine connections. Balancing optimism and caution is key to navigating this digital landscape successfully.",
      btnText: "read more",
      pubDate: "10 July 2023",
      pubAuthor: "Daniel Edwards",
    },
    {
      imgUrl: blog9,
      imgAlt: "Blog Thumb",
      title: "Building Bridges: The Foundations of a New Relationship",
      desc: "Initiating a new romantic connection is a thrilling and transformative chapter in life. Explore the art of beginning a relationship, where authenticity forms the bedrock upon which genuine connections flourish, fostering lasting bonds and cherished moments.",
      btnText: "read more",
      pubDate: "25 August 2023",
      pubAuthor: "Alexander Brown",
    },
  ];

  return (
    <div className="member padding-top padding-bottom overflow-hidden">
      <div className="container">
        <h2 style={{ textAlign: "center" }}> Testimonials</h2>
        <Slider {...settings}>
          {/* Testimonial 1 */}

          {BlogContentListThree.map((val, i) => (
            <div className="col-xl-4 col-md-6 col-12" key={i}>
              <div className="blog__item">
                <div className="blog__inner">
                  <div className="blog__thumb">
                    <Link to="/dating/blog/user/blogDetails">
                      <img
                        src={`${val.imgUrl}`}
                        alt={`${val.imgAlt}`}
                        className="w-100"
                      />
                    </Link>
                  </div>
                  <div className="blog__content px-3 py-4">
                    <Link to="/dating/blog/user/blogDetails">
                      <h3>{val.title}</h3>
                    </Link>
                    <div className="blog__metapost">
                      <a>{val.pubAuthor}</a>
                      <a>{val.pubDate}</a>
                    </div>
                    <div>
                      <p>{val.desc}</p>
                    </div>
                    <Link
                      to="/dating/blog/user/blogDetails"
                      className="default-btn"
                    >
                      <span>{val.btnText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Add more testimonials as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
