import React from "react";
import { useAppContext } from "../context/AppContext";
const Contact = () => {
  const { homeData } = useAppContext();
  return (
    <div className="contact__container container grid">
      <div className="contact__content">
        <div className="contact__info">
          <div className="contact__card">
            <i className="uil uil-envelope-edit contact__card-icon"> </i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">
              {homeData && homeData.email}
            </span>
            <span className="contact__button">
              Write me
              <i className="uil uil-arrow-right contact__button-icon"></i>
            </span>
          </div>

          <div className="contact__card">
            <i className="uil uil-whatsapp contact__card-icon"> </i>
            <h3 className="contact__card-title">Whatsapp</h3>
            <span className="contact__card-data">
              {homeData && homeData.whatsapp}
            </span>
            <span className="contact__button">
              Write me
              <i className="uil uil-arrow-right contact__button-icon"></i>
            </span>
          </div>

          <div className="contact__card">
            <i className="uil uil-facebook-messenger contact__card-icon"> </i>
            <h3 className="contact__card-title">Facebook</h3>
            <span className="contact__card-data">
              {homeData && homeData.messanger}
            </span>
            <span className="contact__button">
              Write me
              <i className="uil uil-arrow-right contact__button-icon"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="contact__content">
        <form action="" className="contact__form">
          <div className="input__container">
            <input type="text" className="input" />
            <label htmlFor="">Name</label>
            <span>Name</span>
          </div>

          <div className="input__container">
            <input type="email" className="input" />
            <label htmlFor="">Email</label>
            <span>Email</span>
          </div>

          <div className="input__container">
            <input type="tel" className="input" />
            <label htmlFor="">Phone</label>
            <span>Phone</span>
          </div>

          <div className="input__container textarea">
            <textarea className="input" name="" id=""></textarea>
            <label htmlFor="">Message</label>
            <span>Message</span>
          </div>
          <button type="submit" className="button">
            <i className="uil uil-navigator button__icon"></i>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
