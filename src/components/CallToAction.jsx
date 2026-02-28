import './CallToAction.css'

import footerLogos from '../assets/footer-logos.png'

const CallToAction = () => {
    return (
        <footer className="cta-section section">
            <div className="container cta-container">
                <img src={footerLogos} alt="Loghi Partner" className="footer-banner" />
                <div className="footer-links">
                    <span>&copy; 2026 Gomboc</span>
                    {/* <a href="#">Privacy</a>
                    <a href="#">Contatti</a>*/}
                </div>
            </div>
        </footer>
    )
}

export default CallToAction
