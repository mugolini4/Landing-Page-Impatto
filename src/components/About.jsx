import './About.css'

const About = () => {
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

                    <div className="bando-grid">
                        <div className="bando-column">
                            <h4 className="column-title">Obiettivo della call</h4>
                            <p>
                                La call invita <span className="highlight-text">registi</span>, <span className="highlight-text">videomaker</span>, <span className="highlight-text">filmmaker</span> e creativi <span className="highlight-text">under 35</span>, residenti o domiciliati a Torino e/o nell’area metropolitana torinese, a partecipare a una <span className="highlight-text">residenza artistica annuale</span> con l’obiettivo di realizzare cortometraggi dedicati a Barriera di Milano: la sua multietnicità, le sue problematiche e le sue potenzialità, le pratiche sociali e creative, le forme di convivenza e i futuri possibili.
                            </p>
                            <p>
                                Parallelamente alla selezione dei team, verrà avviata una campagna digitale di raccolta di storie dal basso nel quartiere: testimonianze, ricordi, sogni, idee e frammenti di quotidianità condivisi dagli abitanti, per creare un archivio contemporaneo che alimenti il processo creativo e rafforzi il dialogo con chi vive Barriera.
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
                                <li><strong>Singoli o team creativi</strong>. Il/la regista (o referente creativo) deve essere <span className="highlight-text">under 35</span> alla data di chiusura della call. Nel caso di candidatura in team, almeno il 50% dei componenti indicati in candidatura deve essere under 35.</li>
                                <li>Residenti o domiciliati a Torino e/o nell’area metropolitana torinese.</li>
                            </ul>
                            <p className="small-text">
                                Sono ammessi tutte le modalità narrative e i linguaggi: documentario, fiction, animazione, sperimentale, reportage.<br />
                                La call è aperta anche ad autori emergenti e a persone con background non convenzionali. Saranno valutate positivamente le proposte che includono sguardi interculturali, di genere e generazionali.
                            </p>
                            <p className="highlight-note">
                                Saranno selezionati fino a 4 team.
                            </p>

                            <h4 className="column-title">Come si presenta la candidatura</h4>
                            <p>
                                La candidatura deve essere presentata entro la data di chiusura della call compilando il <span className="highlight-text">form online ufficiale</span> e caricando i materiali richiesti. È possibile candidarsi come singolo/a o come team creativo; in caso di candidatura in team, è necessario indicare un/a referente che sarà il punto di contatto con l’organizzazione.
                            </p>
                            <p className="small-text">
                                La candidatura si considera valida solo se completa in tutte le sue parti e corredata dalla documentazione richiesta. L’Associazione si riserva di richiedere, in fase di verifica, documenti utili a confermare i requisiti dichiarati (età, residenza/domicilio) e di escludere le candidature incomplete o non conformi.
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
                        <h4 className="column-title">Percorso / Impegno obbligatorio</h4>
                        <p>
                            I team selezionati partecipano al percorso di residenza che include: incontro di avvio e co-progettazione, attività nel quartiere, revisione lavori, mentorship. È richiesta la consegna dei materiali intermedi e finali e la partecipazione ai momenti pubblici.
                        </p>
                        <p>
                            <strong>Produzione:</strong> L’associazione accompagna i team dallo sviluppo alla distribuzione. Supporto tecnico, logistico e organizzativo per una co-produzione dal basso.<br />
                            <strong>Diritti:</strong> Gli autori mantengono i diritti morali. Associazione Gomboc ha ruolo di produzione e diffusione.
                        </p>

                        <div className="cta-container">
                            <p><strong>Scadenza: 28 Febbraio 2026</strong></p>
                            <a href="#" target="_blank" className="btn btn-primary">Compila il form di candidatura</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
