import VideoPlayer from "./components/VideoPlayer"
import './Hero.css'

const Hero = () => {

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
                <h1>right - bottom</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero