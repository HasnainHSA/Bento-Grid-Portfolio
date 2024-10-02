// import Image from "next/image";
import "./globals.css";


// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="home-section">
      <div className="container">

        <Header/>

        <div className="box1">
          <div className="inner-box-one">
            <div className="top-profile-avatar">
              <div className="name-plate">
                <div className="img-avatar"></div>
                <div className="name-text">
                  <h1> Hasnain Saleem</h1>
                  <span>Designer & Developer</span>
                </div>
              </div>

              <div className="social-icons">
                <div className="icon-back">
                  <FaLinkedinIn className="icon-pad" />
                </div>
                <div className="icon-back">
                  <FaGithub className="icon-pad" />
                </div>
                <div className="icon-back">
                  <FaDiscord className="icon-pad" />
                </div>
              </div>
            </div>

            <div className="middle-profile-avatar">
              <h1>Passionated Designer and Developer</h1>
            </div>

            <div className="bottom-profile-avatar">
              <p>
                I enjoy learning new things and try to overcome new challenges
                while analyzing how i improved through them.
              </p>
            </div>
          </div>

          <div className="inner-box-two"></div>
        </div>

        <div className="box2">
          <div className="inner-box2-one">
            <div className="text-box2-one">
              <h1>Currently I am working at Rectigenx</h1>
              <p>Building and design Best Expriences for Brands</p>
            </div>
          </div>
          <div className="inner-box2-two">
            <div className="text-box2-one">
              <h1>
                Rectigenx.<span>com</span>
              </h1>
              <div className="arrow-icon">
                <MdKeyboardArrowUp className="arw-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="box3">
          <div className="inner-box3-one">
            <h4>I constantly try to improve my self</h4>
            <h1>Currently. I am learning  <span>NextJS</span>.</h1>
            <p>I am also learning TypeScript via giaic Other than that, I also constantly practice web design.</p>
          </div>

          <div className="inner-box3-two">
            <h1>Contact <span>me</span></h1>
            <p>make a contact via email or twitter DMs.</p>

            <div className="contact-social">
              <div className="contact-icon-cont">
                <RiInstagramFill className="contact-icon" />
              </div>
              <div className="contact-icon-cont">
                <IoLogoWhatsapp className="contact-icon" />
              </div>
            </div>
          </div>
        </div>


        <Footer/>

      </div>
    </div>
  );
}
