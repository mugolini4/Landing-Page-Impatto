import './Hero.css'
import logo from '../assets/logo-bando.png'
import mapDesktop from '../assets/barriera-map-line.png'
import mapMobile from '../assets/barriera-map.png'
import ScrollingBanner from './ScrollingBanner'

const Hero = ({ onOpenPopup }) => {
    return (
        <section className="hero-section">
            <div className="hero-container">

                {/* Logo - First Element */}
                <div className="hero-logo-container fade-in-up">
                    <img src={logo} alt="Barriera è - Bando Impatto" className="hero-logo" />
                </div>

                {/* Text Paragraph - Second Element */}
                <div className="hero-text-container fade-in-up delay-1">
                    <p className="hero-description">
                        è una residenza artistica e un progetto di produzione dal basso che ha un obiettivo:
                        raccontare il quartiere torinese di <span className="highlight-text">Barriera di Milano</span> attraverso storie che portino al centro
                        del un luogo che è spesso alla periferia dello sguardo.
                    </p>
                    <p className="hero-description">
                        Cerchiamo <span className="highlight-text">videomaker</span>, <span className="highlight-text">filmmaker</span> e creativ* <span className="highlight-text">under 35</span>, <span className="highlight-text">residenti o domiciliat* a Torino e/o
                            nell’area metropolitana torinese</span> per dare vita a opere filmiche che raccontino le tante
                        sfumature del quartiere: la sua multietnicità, le sue problematiche e le sue potenzialità,
                        le pratiche sociali e creative, le forme di convivenza e i <span className="highlight-text">futuri possibili</span>.
                    </p>
                </div>

                {/* Scrolling Banner */}
                <ScrollingBanner />

                {/* Map - Third Element */}
                <div className="hero-map-container fade-in-up delay-2">
                    <img src={mapDesktop} alt="Map of Barriera di Milano" className="hero-map map-desktop" />
                    <img src={mapMobile} alt="Map of Barriera di Milano" className="hero-map map-mobile" />

                    <div className="map-overlay-container">
                        <p className="map-overlay-text">come partecipare</p>
                        <ol className="participation-steps">
                            <li>
                                <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }} className="text-link">
                                    Leggi il bando della residenza creativa
                                </a>
                            </li>
                            <li>
                                Compila il <a href="#" onClick={onOpenPopup} className="highlight-link">form</a>
                            </li>
                            <li>Candidati singolarmente o in team</li>
                        </ol>
                    </div>
                </div>

                {/* Mobile Text for 'Come partecipare' */}
                <div className="mobile-participation-text fade-in-up delay-2">
                    <p>come partecipare</p>
                    <ol className="participation-steps">
                        <li>
                            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }} className="text-link">
                                Leggi il bando della residenza creativa
                            </a>
                        </li>
                        <li>
                            Compila il <a href="#" onClick={onOpenPopup} className="highlight-link">form</a>
                        </li>
                        <li>Candidati singolarmente o in team</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Hero
