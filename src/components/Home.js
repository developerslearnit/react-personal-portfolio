import React, { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import * as Unicons from "@iconscout/react-unicons";

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const loadHomeData = async () => {
      const home = await client.fetch(`*[_type == "home"]`);
      setHomeData(home[0]);
    };
    loadHomeData();
  }, []);

  return (
    <div className="home__container container grid">
      <div className="home__social">
        <span className="home__social-follow">Follow Me</span>
        <div className="home__social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            className="home__social-link"
          >
            <Unicons.UilFacebookF size={18} />
          </a>
          <a
            href="htpps://instagram.com"
            target="_blank"
            className="home__social-link"
          >
            <Unicons.UilInstagram size={18} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="home__social-link"
          >
            <Unicons.UilTwitter size={18} />
          </a>
        </div>
      </div>

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
