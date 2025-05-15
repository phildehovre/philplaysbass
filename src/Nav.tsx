import './Nav.css'
import {textObject as lg} from './constants/textFile'

const Nav = () => {

    const selectedLanguage = 'fr'
    const btns = lg.nav.buttons

    return (
        <nav>
            <div className="logo">Logo</div>
            <ul>
                <li><a href="/" title={btns.home.tooltip[selectedLanguage]}>{btns.home.labels[selectedLanguage]}</a></li>
                <li><a href="/about" title={btns.about.tooltip[selectedLanguage]}>{btns.about.labels[selectedLanguage]}</a></li>
                <li><a href="/lessons" title={btns.lessons.tooltip[selectedLanguage]}>{btns.lessons.labels[selectedLanguage]}</a></li>
            </ul>
        </nav>
    )

}

export default Nav