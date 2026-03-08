import './CallToAction.css'

import logoBarrie from '../assets/colophon/logo barrie_x2.png'
import logoGomboc from '../assets/colophon/gomboc_x2.png'
import logoAmendola from '../assets/colophon/amendola_x2.png'
import logoImpatto from '../assets/colophon/Logo ImpatTO.png'
import colophonImg from '../assets/colophon/colophon.jpeg'

const CallToAction = () => {
    return (
        <div>
            <footer className="cta-section section" style={{ paddingBottom: 'var(--spacing-md)' }}>
                <div className="container cta-container">
                    <div className="footer-logos-row">
                        <img src={logoBarrie} alt="BarriÈ" className="footer-logo" />
                        <a href="https://associazionegomboc.wixsite.com/gomboc" target="_blank" rel="noopener noreferrer">
                            <img src={logoGomboc} alt="Gomboc" className="footer-logo" />
                        </a>
                        <a href="https://fondazioneamendola.it/" target="_blank" rel="noopener noreferrer">
                            <img src={logoAmendola} alt="Amendola" className="footer-logo" />
                        </a>
                        <img src={logoImpatto} alt="ImpatTO" className="footer-logo" />
                    </div>
                    <div className="footer-links" style={{ marginBottom: 'var(--spacing-md)' }}>
                        <span>&copy; 2026 Gomboc</span>
                        {/* <a href="#">Privacy</a>
                    <a href="#">Contatti</a>*/}
                    </div>
                </div>
            </footer>
            <div style={{ padding: '20px', backgroundColor: 'white' }}>
                <img src={colophonImg} alt="Partner e Contributori" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    )
}

export default CallToAction
