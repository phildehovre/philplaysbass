import VideoPlayer from "./components/VideoPlayer";
import './Hero.css';
import Socials from "./components/Socials";
import { textObject } from "./constants/textFile";

const Hero = () => {
  const lang = 'en';

  return (
    <div className="hero_ctn">
      <VideoPlayer />
      <div className="slogan_ctn">
        <div className="left top"> 
          <h1 id='phil'>Phil</h1>
          <h1 id='bass'>BASS</h1>
          <h1 id='plays'>plays</h1>
        </div>
            <div className="right bottom">
            <div className="container">
            <div className="links_ctn">
                <ul>
                <li className="link_item">
                    <a href="">{textObject.nav.buttons.about.labels[lang]}</a>
                </li>
                <li className="link_item">
                    <a href="">{textObject.nav.buttons.home.labels[lang]}</a>
                </li>
                <li className="link_item">
                    <a href="">{textObject.nav.buttons.lessons.labels[lang]}</a>
                </li>
                </ul>
              </div>
                <div className="buttons_ctn">
                    <button>Shop</button>
                    <button>Learn</button>
                </div>
                <Socials />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
