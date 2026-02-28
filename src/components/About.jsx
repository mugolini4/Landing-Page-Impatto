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
                    <h2 className="section-title">Call to Action <span className="text-accent">BarriEra / BarriE’</span></h2>
                    <h3 className="section-subtitle">Residenza artistica per giovani registi | <span className="text-white">Barriera di Milano (Torino)</span></h3>
                    <div className="text-block">
                        <p>
                            <span className="highlight-text">Barriera di Milano</span> è un quartiere che porta nel nome l’idea di confine, ma che nella vita quotidiana funziona più come un sistema di attraversamenti: lingue che si incrociano, generazioni che convivono, memorie che restano e visioni che spingono in avanti. <strong>BarriEra - BarriE’</strong> nasce da qui: dall’urgenza di trasformare il cinema in uno strumento di ascolto, di relazione e di restituzione.
                        </p>
                        <p>
                            Non un racconto “da fuori”, non un reportage che si limita a osservare, ma un percorso che entra nel vivo del territorio, ne esplora le sfaccettature e prova a restituirne la complessità attraverso gli occhi di chi la vive, l'abita, la attraversa ogni giorno.
                        </p>
                        <p>
                            L’approccio è <span className="highlight-text">decoloniale</span>: significa spostare lo sguardo, disimparare categorie predefinite, evitare narrazioni stereotipate e lasciare spazio a prospettive plurali. Barriera non è “periferia” da interpretare, ma centro di produzione di immaginario, un luogo dove le storie non si estraggono: si co-costruiscono.
                        </p>
                        <p>
                            <strong>BarriEra / BarriE’</strong> diventa così una residenza artistica e, insieme, un esperimento collettivo: una produzione dal basso che trasforma l’osservazione in partecipazione, e il set in uno spazio di relazione.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                paddingTop: 'var(--spacing-md)',
                paddingBottom: 'var(--spacing-md)',
            }}>
                <p style={{ marginBottom: 'var(--spacing-md)' }}><strong>Scadenza: 15 Aprile 2026</strong></p>
                <a href="#" onClick={onOpenPopup} className="btn btn-primary">Compila il form di candidatura</a>
            </div>

            <ScrollingBanner direction="right" />

            <div className="container" style={{ marginTop: 'var(--spacing-md)' }}>
                <div className="about-content">
                    <div className="bando-grid">
                        <div className="bando-column">
                            <h4 className="column-title">Obiettivo della call</h4>
                            <p>
                                La call invita <span className="highlight-text">professionisti e professioniste del settore audiovisivo</span>, studenti o organizzatori, a partecipare a una <span className="highlight-text">residenza di ricerca territoriale</span> di un anno. L'obiettivo è la comprensione delle dinamiche sociali, urbane e umane legate al concetto di “barriera”, con particolare riferimento a Barriera di Milano (Torino), finalizzata alla realizzazione di forme di restituzione narrativa e audiovisiva.
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
                            <p>
                                La residenza non richiede “un tema imposto”, ma una postura: la capacità di stare nel quartiere con attenzione, di fare spazio alle voci, di costruire relazione. Qui il cinema non serve a semplificare: serve a tenere insieme sfumature e contraddizioni, radici e possibilità, ricordo e futuro.
                            </p>
                        </div>

                        <div className="bando-column">
                            <h4 className="column-title">Chi può partecipare</h4>
                            <ul className="requirements-list">
                                <li><strong>Persone maggiorenni, singole o in team</strong>. Se ci si candida individualmente, si verrà inseriti in gruppi di lavoro multidisciplinari per valorizzare le competenze complementari. Altrimenti, è possibile candidarsi come gruppo già costituito.</li>
                                <li>Disponibilità a lavorare in modo collaborativo e mettersi in gioco in un processo partecipativo.</li>
                            </ul>
                            <p className="small-text">
                                Sono ammessi professionisti di ogni reparto (registi, sceneggiatori, fonici, montatori, videomaker ecc.) ma non è richiesto un livello specifico di esperienza: è fondamentale una conoscenza di base dei linguaggi audiovisivi.<br />
                                Saranno valutate positivamente le proposte che sanno adottare uno sguardo decoloniale e includono prospettive interculturali, di genere e generazionali.
                            </p>

                            <h4 className="column-title">Come si presenta la candidatura</h4>
                            <p>
                                La candidatura deve essere presentata entro la data di chiusura della call compilando il <span className="highlight-text">form online ufficiale</span> e caricando i materiali richiesti. È possibile candidarsi come singolo/a o come team creativo; in caso di candidatura in team, è necessario indicare un/a referente che sarà il punto di contatto con l’organizzazione.
                            </p>

                            <h4 className="column-title">Criteri di selezione</h4>
                            <p>I team verranno selezionati in base a:</p>
                            <ul className="feature-list">
                                <li>Aderenza ai temi e legame con Barriera di Milano</li>
                                <li>Forza narrativa e coerenza artistica</li>
                                <li>Sguardo non stereotipato e approccio decoloniale</li>
                                <li>Relazione con il territorio (ascolto, coinvolgimento, restituzione)</li>
                                <li>Solidità del team e sostenibilità produttiva</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-block full-width">
                        <h4 className="column-title">Percorso / Sostegno economico</h4>
                        <p>
                            I team selezionati partecipano a un percorso di residenza a tappe che include moduli formativi, esplorazioni urbane e sessioni di revisione. Oltre allo sviluppo del cortometraggio finale, ogni gruppo realizzerà micro-output intermedi.
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
                        <p style={{ marginBottom: 'var(--spacing-md)' }}><strong>Scadenza: 15 Aprile 2026</strong></p>
                        <a href="#" onClick={onOpenPopup} className="btn btn-primary">Compila il form di candidatura</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
