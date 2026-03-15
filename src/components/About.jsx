import './About.css'
import ScrollingBanner from './ScrollingBanner'
import './About.css'
import CallToAction from './CallToAction'

const About = ({ onOpenPopup }) => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content">
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                        <h2 className="section-title" style={{ margin: 0 }}>CALL TO ACTION <span className="text-accent">BarriERA / BarriÈ</span></h2>
                        <a
                            href="/Bando_Call4Entries_Barriera_Barrie_140326.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Bando_Barriera_Barrie.pdf"
                            className="download-icon-btn custom-tooltip"
                            data-tooltip="Scarica il bando in PDF"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </a>
                    </div>
                    <h3 className="section-subtitle">Residenza artistica per giovani regist* | <span className="text-white">Barriera di Milano (Torino)</span></h3>
                    <div className="text-block">
                        <p>
                            <span className="highlight-text">Barriera di Milano</span> è un quartiere torinese che porta nel nome l’idea di confine, ma nella vita quotidiana funziona come un sistema di attraversamenti: lingue che si incrociano, generazioni che convivono, memorie che restano e visioni che spingono in avanti.
                        </p>
                        <p>
                            Il progetto <span className="highlight-text">BarriERA / BarriÈ</span> nasce dall’urgenza di trasformare la ricerca e il cinema in strumenti di ascolto, relazione e restituzione: non un racconto “da fuori”, non un semplice reportage, ma un percorso collettivo che attraversa il quartiere.
                        </p>
                        <p>
                            Durante la residenza, che si svolgerà <span className="highlight-text">tra Maggio 2026 e Maggio 2027</span>, i partecipanti selezionati saranno invitati a vivere e attraversare il territorio, prendendo parte a incontri, passeggiate urbane, momenti di ascolto e confronto con la comunità locale.
                            <br />
                            Da questo processo prenderà forma un insieme di restituzioni audiovisive, sviluppate nel corso del progetto come esito diretto della ricerca sul campo e come strumenti di condivisione con il territorio.
                        </p>
                        <p>
                            <strong>BarriERA / BarriÈ</strong> diventa così un <span className="highlight-text">esperimento collettivo</span>: un progetto che trasforma l’osservazione in partecipazione, il fare cinema in uno spazio di relazione e la ricerca sul territorio in strumenti di narrazione condivisa.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                paddingTop: 'var(--spacing-md)',
                paddingBottom: 'var(--spacing-md)',
            }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}><strong>Scadenza: 18 Aprile 2026</strong></p>
                <a href="#" onClick={onOpenPopup} className="btn btn-primary">Compila il form di candidatura</a>
            </div>

            <ScrollingBanner direction="right" />

            <div className="container" style={{ marginTop: 'var(--spacing-md)' }}>
                <div className="about-content">
                    <div className="bando-grid">
                        <div className="bando-column">
                            <h4 className="column-title">Obiettivo della call</h4>
                            <p>
                                La call invita <span className="highlight-text">professionisti e professioniste del settore audiovisivo</span>, a partecipare a una <span className="highlight-text">residenza di ricerca territoriale</span> di un anno, finalizzata al racconto di Barriera di Milano attraverso il linguaggio audiovisivo.
                            </p>
                            <p>
                                Il progetto mira anche alla costruzione di un vero e proprio <span className="highlight-text">archivio vivo</span>, uno spazio in cui possano confluire tutti i materiali raccolti, quali testimonianze, ricordi e visioni degli abitanti.
                            </p>

                            <h4 className="column-title">Temi e direzione editoriale</h4>
                            <p>Ogni gruppo realizzerà un cortometraggio originale con un legame diretto con Barriera di Milano, lavorando (a scelta e in modo trasversale) su temi come:</p>
                            <ul className="feature-list">
                                <li>Convivenza interculturale e intergenerazionale</li>
                                <li>Trasformazione urbana e sociale</li>
                                <li>Storie dal basso: micro-narrazioni, quotidianità, genealogie locali</li>
                                <li>Visioni per il futuro del quartiere</li>
                                <li>Memorie e radici</li>
                                <li>Pratiche sociali, ecologiche e creative</li>
                            </ul>
                        </div>

                        <div className="bando-column">
                            <h4 className="column-title">Chi può partecipare</h4>
                            <ul className="requirements-list">
                                <li><strong>Persone maggiorenni, singole o in team</strong>. Se ci si candida individualmente, si verrà inseriti in gruppi di lavoro multidisciplinari per valorizzare le competenze complementari. Altrimenti, è possibile candidarsi come gruppo già costituito.</li>
                            </ul>
                            <p className="small-text">
                                Sono ammess* professioniste e professionisti di ogni reparto (regist*, sceneggiatori e sceneggiatrici, fonic*, montatori e montatrici, videomaker ecc.) ma non è richiesto un livello specifico di esperienza: è fondamentale una conoscenza di base dei linguaggi audiovisivi.<br />
                            </p>

                            <h4 className="column-title">Come si presenta la candidatura</h4>
                            <p>
                                La candidatura deve essere presentata entro la data di chiusura della call compilando il{' '}
                                <a href="#" onClick={onOpenPopup} className="highlight-text" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                    form online ufficiale
                                </a>
                                {' '}e caricando i materiali richiesti. È possibile candidarsi come singolo/a o come team creativo; in caso di candidatura in team, è necessario indicare un/a referente che sarà il punto di contatto con l’organizzazione.
                            </p>

                            {/*<h4 className="column-title">Criteri di selezione</h4>
                            <p>I team verranno selezionati in base a:</p>
                            <ul className="feature-list">
                                <li>Aderenza ai temi e legame con Barriera di Milano</li>
                                <li>Forza narrativa e coerenza artistica</li>
                                <li>Sguardo non stereotipato e approccio decoloniale</li>
                                <li>Relazione con il territorio (ascolto, coinvolgimento, restituzione)</li>
                                <li>Solidità del team e sostenibilità produttiva</li>
                            </ul>*/}
                        </div>
                    </div>

                    <div className="text-block full-width">
                        <h4 className="column-title">Percorso / Sostegno economico</h4>
                        <p>
                            I team selezionati partecipano a un percorso di residenza a tappe che include moduli formativi, esplorazioni urbane e sessioni di revisione.
                        </p>
                        <p>
                            <strong>Produzione e Finanziamento:</strong> Il percorso di residenza è sostenuto da un finanziamento complessivo fino a un massimo di <strong>3.000 €</strong> destinato ai gruppi selezionati per lo sviluppo. Sono inclusi supporto formativo e un corredo videografico messo a disposizione da Associazione Gomboc.<br />
                            <strong>Diritti:</strong> Gli autori vengono riconosciuti nei credits, e l’associazione in qualità di produttore unico deterrà i diritti sull'opera prodotta e ne curerà la distribuzione. Per partecipare, le persone selezionate dovranno iscriversi all'Associazione Gomboc (5 euro).
                        </p>
                    </div>

                    <div style={{
                        textAlign: 'center',
                        paddingTop: 'var(--spacing-md)',
                        paddingBottom: 'var(--spacing-md)',
                    }}>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}><strong>Scadenza: 18 Aprile 2026</strong></p>
                        <a href="#" onClick={onOpenPopup} className="btn btn-primary">Compila il form di candidatura</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
