import React from "react";
import "../assets/about.css";

const About = () => (
  <div className="aboutus" style={{ padding: `15px 25px` }}>
    <h1>About Us</h1>
    <img className="gndimg" src="/images/GNDphoto.jpg" alt="GND" />
    <p className="about">
      <span style={{ textIndent: `5%` }} className="firstletter">
        G
      </span>
      uru Nanak Dwara was founded in 1970 as an Ashram (spiritual learning
      center) committed to practicing both the Sikh way of life and Kundalini
      Yoga as taught by Yogi Bhajan. In the early days, many of those attracted
      to Guru Nanak Dwara were the soul-searching youth of the consciousness
      revolution. Guru Nanak Dwara was unlike other collectives of the time as
      it provided a drug and alcohol free environment where spiritual discipline
      (daily Sadhana) and selfless service (Seva) were the means of peace, calm
      and delight. Bonds of support were formed through countless hours of
      meditation, singing, cooking, working and eating together.
    </p>
    <p style={{ textIndent: `5%` }}>
      In 1972, Darshan Singh Teji, a good friend of Yogi Bhajan’s, helped the
      Ashram members establish a Gurdwara. With loving attention, he instructed
      them in the proper care and ceremonies surrounding the Guru, which has
      proven to be a guiding light these many years. By 1980, the land where
      Guru Nanak Dwara currently resides, was purchased and the community
      focused on creating a ‘village lifestyle’, with many family dwellings
      surrounding the main center. By the mid-80s, Sikhs originally from Punjab
      India, were attracted in large numbers to Guru Nanak Dwara, mainly due to
      the feeling of peaceful contemplation emanating from the community’s
      practices.
    </p>
    <p style={{ textIndent: `5%` }}>
      The new Guru Nanak Dwara structure began in 1996 to provide the community
      with the infrastructure necessary for a bright and flourishing future,
      embracing the traditions of both East and West. The dynamic blend of a
      devotional Sadh Sangat (company of the holy), the sacred scriptures of the
      Sikhs, a healthy lifestyle, and Kundalini Yoga is unique and enables Guru
      Nanak Dwara to be a place of peace and refuge in service to the greater
      community.
    </p>
  </div>
);

export default About;