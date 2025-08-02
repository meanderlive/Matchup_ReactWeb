import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotificationPage from "../../component/popUps/notification";

import blog1 from "../assets/images/blog/01.jpg";
import blog2 from "../assets/images/blog/02.jpg";
import blog3 from "../assets/images/blog/03.jpg";
import blog4 from "../assets/images/blog/04.jpg";
import blog5 from "../assets/images/blog/03.jpg";
import blog6 from "../assets/images/blog/06.jpg";
import blog7 from "../assets/images/blog/07.jpg";
import blog8 from "../assets/images/blog/08.jpg";
import blog9 from "../assets/images/blog/09.jpg";
import FooterFour from "../../component/layout/footerFour";
import HeaderFour from "../../component/layout/HeaderFour";
import Testmonial from "./testmonial";
const BlogContentListOne = [
  {
    imgUrl: blog3,
    imgAlt: "Blog Thumb",
    title:
      "Dating can be an exhilarating journey, filled with excitement, anticipation, and the potential for meaningful connections.",
    desc: "Navigating the intricate maze of modern dating often feels like an exciting yet daunting journey. At Meander Software Company, we understand the complexities inherent in this quest for connection. That's why we've developed Marier, a comprehensive and thoughtful solution designed to be your steadfast companion in navigating the landscape of relationships and meaningful connections.",
    btnText: "read more",
    pubDate: "10 March 2023",
    pubAuthor: "Ethan Thompson",
  },
];

const BlogContentListTwo = [
  {
    imgUrl: blog1,
    imgAlt: "Blog Thumb",
    title: "Nurturing Trust: The Bedrock of Meaningful Relationships",
    desc: "In the realm of relationships, trust is the linchpin that fortifies the connection between partners. Building and nurturing trust lays the groundwork for a fulfilling and lasting relationship. Let’s delve into the key elements and strategies for cultivating trust in relationships. In the realm of relationships, trust is the glue that holds everything together",
    btnText: "read more",
    pubDate: "2 April 2023",
    pubAuthor: "Liam Johnson",
  },
  {
    imgUrl: blog2,
    imgAlt: "Blog Thumb",
    title:
      "Title: The Evolution of Dating Apps: Redefining Connections in Tomorrow's World",
    desc: "In a world constantly propelled by technological advancements, the domain of dating apps continues to undergo a fascinating evolution. These digital platforms, once simple avenues for meeting new people, have transcended their initial purposes, becoming vibrant ecosystems shaping the way individuals connect, engage, and seek companionship.",
    btnText: "read more",
    pubDate: "15 April 2023",
    pubAuthor: "Noah Martinez",
  },
];

const BlogContentListThree = [
  {
    imgUrl: blog4,
    imgAlt: "Blog Thumb",
    title:
      "Title: The Rise of Virtual Dating: Navigating Love in a Digital Era",
    desc: "In a world where screens have become our windows to the world, the concept of dating has undergone a significant transformation. The evolution of technology has given birth to a new realm of relationships – one that thrives in the digital landscape. Let's embark on a captivating journey into the world of virtual dating, where pixels meet hearts, and connections transcend physical boundaries. ",
    btnText: "read more",
    pubDate: "10 May 2023",
    pubAuthor: "Daniel Edwards",
  },
  {
    imgUrl: blog5,
    imgAlt: "Blog Thumb",
    title: "IS ONLINE DATING SAFE?",
    desc: "Navigating the world of online dating is like exploring uncharted territory.Online dating is a powerful tool, a gateway to meeting individuals who might otherwise remain outside our social circles. Yet, it's vital to balance the allure of new connections with safety and caution. Using Google image search or reverse phone number searches can provide additional information about someone you've connected with online.",
    btnText: "read more",
    pubDate: "15 May 2023",
    pubAuthor: "Benjamin Taylor",
  },
  {
    imgUrl: blog6,
    imgAlt: "Blog Thumb",
    title:
      "The Journey Within: 5 Crucial Questions to Ask Yourself When You're Looking for Love",
    desc: "Love, the enigmatic force that weaves through our lives, often prompts us to embark on quests to find that special connection. Yet, before diving into the search for a partner, it's invaluable to pause and engage in introspection. The journey toward finding love is not solely about meeting the right person; it's equally about understanding yourself and what you seek in a relationship. ",
    btnText: "read more",
    pubDate: "25 May 2023",
    pubAuthor: "Samuel Mitchell",
  },
  {
    imgUrl: blog7,
    imgAlt: "Blog Thumb",
    title:
      "Avoid These 10 Dating Mistakes That Can Sabotage Your Quest for Love.",
    desc: "In the quest for love, navigating the intricacies of dating can be both exhilarating and nerve-wracking. As a seasoned matchmaker, I've witnessed numerous dating scenarios and identified common mistakes that can significantly impact your chances of finding lasting love.",
    btnText: "read more",
    pubDate: "15 June 2023",
    pubAuthor: "Mason Davis",
  },
  {
    imgUrl: blog8,
    imgAlt: "Blog Thumb",
    title:
      "The Art of Online Dating: Unveiling the Untold Secrets to Finding Genuine Connections",
    desc: "In the realm of online dating, hope intermingles with skepticism, creating a delicate balance between optimism and caution. For many, this digital landscape becomes a paradox of opportunities and challenges, a place where quality connections await those who tread carefully.",
    btnText: "read more",
    pubDate: "10 July 2023",
    pubAuthor: "Daniel Edwards",
  },
  {
    imgUrl: blog9,
    imgAlt: "Blog Thumb",
    title: "Initiating a Relationship: The Art of Beginning.",
    desc: "Entering into a new romantic connection marks a pivotal and thrilling chapter in one's life journey. These initial steps lay the groundwork for what could potentially blossom into a profound and lasting relationship . Authenticity forms the bedrock upon which genuine connections flourish",
    btnText: "read more",
    pubDate: "25 August 2023",
    pubAuthor: "Alexander Brown",
  },
];

const BlogPage = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNotifications(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <HeaderFour />
      <div className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center">
              {BlogContentListOne.map((val, i) => (
                <div className="col-12" key={i}>
                  <div className="blog__item">
                    <div className="blog__inner d-flex flex-wrap align-items-center">
                      <div className="blog__thumb w-xl-50 w-100">
                        <Link to="/dating/blog/User/blogDetails">
                          <img
                            src={`${val.imgUrl}`}
                            alt={`${val.imgAlt}`}
                            className="w-100"
                          />
                        </Link>
                      </div>
                      <div className="blog__content p-4 ps-xl-5 w-xl-50 w-100">
                        <Link to="/dating/blog/User/blogDetails">
                          <h3>{val.title}</h3>
                        </Link>
                        <div className="blog__metapost">
                          <a href="#">{val.pubAuthor}</a>
                          <a href="#">{val.pubDate}</a>
                        </div>
                        <p>{val.desc}</p>
                        <Link
                          to="/dating/blog/User/blogDetails"
                          className="default-btn"
                        >
                          <span>{val.btnText}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {BlogContentListTwo.map((val, i) => (
                <div className="col-lg-6 col-12" key={i}>
                  <div className="blog__item">
                    <div className="blog__inner">
                      <div className="blog__thumb">
                        <Link to="/dating/blog/User/blogDetails">
                          <img
                            src={`${val.imgUrl}`}
                            alt={`${val.imgAlt}`}
                            className="w-100"
                          />
                        </Link>
                      </div>
                      <div className="blog__content px-3 py-4">
                        <Link to="/dating/blog/User/blogDetails">
                          <h3>{val.title}</h3>
                        </Link>
                        <div className="blog__metapost">
                          <a href="#">{val.pubAuthor}</a>
                          <a href="#">{val.pubDate}</a>
                        </div>
                        <p>{val.desc}</p>
                        <Link
                          to="/dating/blog/User/blogDetails"
                          className="default-btn reverse"
                        >
                          <span>{val.btnText}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {BlogContentListThree.map((val, i) => (
                <div className="col-xl-4 col-md-6 col-12" key={i}>
                  <div className="blog__item">
                    <div className="blog__inner">
                      <div className="blog__thumb">
                        <Link to="/dating/blog/User/blogDetails">
                          <img
                            src={`${val.imgUrl}`}
                            alt={`${val.imgAlt}`}
                            className="w-100"
                          />
                        </Link>
                      </div>
                      <div className="blog__content px-3 py-4">
                        <Link to="/dating/blog/User/blogDetails">
                          <h3>{val.title}</h3>
                        </Link>
                        <div className="blog__metapost">
                          <a href="#">{val.pubAuthor}</a>
                          <a href="#">{val.pubDate}</a>
                        </div>
                        <p>{val.desc}</p>
                        <Link
                          to="/dating/blog/User/blogDetails"
                          className="default-btn"
                        >
                          <span>{val.btnText}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* {showNotifications && <NotificationPage />} */}
      {/* <Footer /> */}
      <FooterFour />
    </>
  );
};

export default BlogPage;
