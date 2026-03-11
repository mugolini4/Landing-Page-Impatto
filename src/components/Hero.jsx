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
                        di un luogo che è spesso alla periferia dello sguardo.
                    </p>
                    <p className="hero-description">
                        Cerchiamo <span className="highlight-text">videomaker</span>, <span className="highlight-text">filmmaker</span> e creativ* per dare vita a opere filmiche che raccontino le tante
                        sfumature del quartiere: la sua multietnicità, le sue problematiche e le sue potenzialità,
                        le pratiche sociali e creative, le forme di convivenza e i <span className="highlight-text">futuri possibili</span>.
                    </p>
                    <p>
                        Il progetto, della durata di un anno, è a cura di <a href="https://associazionegomboc.wixsite.com/gomboc" target="_blank" rel="noopener noreferrer" className="highlight-text" style={{ textDecoration: 'underline' }}>Associazione Gomboc</a> in collaborazione
                        con <a href="https://fondazioneamendola.it/" target="_blank" rel="noopener noreferrer" className="highlight-text" style={{ textDecoration: 'underline' }}>Fondazione Amendola</a> nell’ambito di <span className="highlight-text"><i>Ri-creiamo il giardino che vorrei</i></span>, il progetto
                        di rigenerazione urbana
                        del Giardino Giorgio Amendola.
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
                                <a href="/Bando%20Barriera%20Barrie_V04.pdf" target="_blank" rel="noopener noreferrer" download="Bando_Barriera_Barrie.pdf" className="text-link">
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
                            <a href="/Bando%20Barriera%20Barrie_V04.pdf" target="_blank" rel="noopener noreferrer" download="Bando_Barriera_Barrie.pdf" className="text-link">
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
