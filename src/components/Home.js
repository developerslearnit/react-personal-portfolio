import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanityClient";
import * as Unicons from "@iconscout/react-unicons";

import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { homeData } = useAppContext();
  const { follow } = useAppContext();

  // useEffect(() => {
  //   const loadHomeData = async () => {
  //     const home = await client.fetch(`*[_type == "home"]`);
  //     const followData = await client.fetch(`*[_type == "followMe"]`);
  //     setHomeData(home[0]);
  //     setFollow(followData[0]);
  //   };
  //   loadHomeData();
  // }, []);

  return (
    <div className="home__container container grid">
      <div className="home__social">
        <span className="home__social-follow">Follow Me</span>
        <div className="home__social-links">
          <a
            href={follow.facebook}
            target="_blank"
            className="home__social-link"
          >
            <Unicons.UilFacebookF size={18} />
          </a>
          <a href={follow.github} target="_blank" className="home__social-link">
            <Unicons.UilGithub size={18} />
          </a>
          <a
            href={follow.twitter}
            target="_blank"
            className="home__social-link"
          >
            <Unicons.UilTwitter size={18} />
          </a>
          <a
            href={follow.linkedin}
            target="_blank"
            className="home__social-link"
          >
            <Unicons.UilLinkedin size={18} />
          </a>

          <a href={follow.blog} target="_blank" className="home__social-link">
            <Unicons.UilGlobe size={18} />
          </a>
        </div>
      </div>

      <img
        src={homeData?.homeImage && urlFor(homeData.homeImage)}
        alt="home-img"
        className="home__img"
      />

      <div className="home__data">
        <h1 className="home__title">{homeData && homeData.greetingLine}</h1>
        <h3 className="home__subtitle">{homeData && homeData.title}</h3>
        <p className="home__description">{homeData && homeData.shortBio}</p>
        <a href="#about" className="button">
          <Unicons.UilUser className="button__icon" />
          More About Me
        </a>
      </div>
      {/* end home data */}
      <div className="my__info">
        <div className="info__item">
          <Unicons.UilFacebookMessenger className="info__icon" />
          <div>
            <h3 className="info__title">Messenger</h3>
            <span className="info__subtitle">
              {homeData && homeData.messanger}
            </span>
          </div>
        </div>

        <div className="info__item">
          <Unicons.UilWhatsapp className="info__icon" />
          <div>
            <h3 className="info__title">Whatsapp</h3>
            <span className="info__subtitle">
              {homeData && homeData.whatsapp}
            </span>
          </div>
        </div>

        <div className="info__item">
          <Unicons.UilEnvelopeEdit className="info__icon" />
          <div>
            <h3 className="info__title">Email</h3>
            <span className="info__subtitle">{homeData && homeData.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
