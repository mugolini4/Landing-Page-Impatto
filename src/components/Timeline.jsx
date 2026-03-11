import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const Timeline = () => {
    // Consolidated data: coordinates match the SVG path 1000x600 viewBox
    const steps = [
        {
            date: '11 Marzo 2026',
            title: 'Apertura call',
            x: 50, y: 50,
            textTop: '-5%', textLeft: '-2%'
        },
        {
            date: '10 Aprile 2026',
            title: 'Vicinissima Festival - Evento di lancio della call',
            x: 180, y: 120,
            textTop: '20%', textLeft: '0%',
            textAlign: 'left'
        },
        {
            date: '18 Aprile 2026',
            title: 'Chiusura call',
            x: 280, y: 220,
            textTop: '38%', textLeft: '25%',
            textAlign: 'left'
        },
        {
            date: '4 Maggio 2026',
            title: 'Selezione dei team e comunicazione degli esiti',
            x: 430, y: 130,
            textTop: '2%', textLeft: '29%',
            textAlign: 'right'
        },
        {
            date: '10 Maggio 2026',
            title: 'Avvio residenza con primo incontro',
            x: 550, y: 280,
            textTop: '38%', textLeft: '56%'
        },
        {
            date: 'Giugno-Luglio 2026',
            title: 'Primo evento di restituzione',
            x: 400, y: 450,
            textTop: '68%', textLeft: '16%',
            textAlign: 'right'
        },
        {
            date: 'Novembre-Dicembre 2026',
            title: 'Secondo evento di restituzione',
            x: 650, y: 480,
            textTop: '81%', textLeft: '58%'
        },
        {
            date: 'Aprile 2027',
            title: 'Consegna del progetto finale',
            x: 820, y: 350,
            textTop: '48%', textLeft: '85%',
            textAlign: 'center'
        },
        {
            date: 'Maggio 2027',
            title: 'Evento finale e restituzione pubblica',
            x: 950, y: 530,
            textTop: '92%', textLeft: '80%',
            textAlign: 'right'
        }
    ];

    const timelineRef = useRef(null);
    const pathRef = useRef(null);
    const dotsRef = useRef([]);
    const thresholds = useRef([]);
    const [pathLength, setPathLength] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Generate path data "M x1 y1 L x2 y2 ..."
    const pathData = steps.reduce((acc, step, i) => {
        return acc + (i === 0 ? `M ${step.x} ${step.y}` : ` L ${step.x} ${step.y}`);
    }, '');

    // Init: Calculate path length and step thresholds
    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
            pathRef.current.style.strokeDasharray = length;
            pathRef.current.style.strokeDashoffset = length;

            // Calculate cumulative distance for each step to determine progress threshold (0-1)
            let cumulativeLen = 0;
            const th = [0]; // First step is at start (0.0)

            for (let i = 0; i < steps.length - 1; i++) {
                const p1 = steps[i];
                const p2 = steps[i + 1];
                const dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
                cumulativeLen += dist;
                th.push(cumulativeLen);
            }

            // Normalize thresholds relative to total length
            // If calculated cumulativeLen differs slightly from getTotalLength due to curves/lines logic, use calculated one for ratios or just max.
            // Since it's a polyline, sum of segments should equal total length.
            thresholds.current = th.map(t => t / cumulativeLen);
        }
    }, []);

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current || !pathRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;

            // Calculate scroll percentage as element passes through center of viewport
            // Tuned to start drawing when element enters, and finish when it leaves or is fully visible.
            // Using a factor (e.g. 1.2) to ensure it fills comfortably while reading.
            const scrollPercentage = (windowHeight - rect.top - (windowHeight * 0.2)) / (elementHeight + (windowHeight * 0.2));

            const clampedFill = Math.max(0, Math.min(1, scrollPercentage));

            if (pathLength > 0) {
                pathRef.current.style.strokeDashoffset = pathLength - (pathLength * clampedFill);

                // Check thresholds for pulse animation
                dotsRef.current.forEach((dot, index) => {
                    if (dot) {
                        // Activate dot if valid fill passes its threshold
                        const threshold = thresholds.current[index] || 0;
                        if (clampedFill >= (threshold - 0.01)) { // Small buffer
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Trigger once on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [pathLength]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <section className="timeline-section section" ref={timelineRef}>
            <div className="container timeline-container">
                {/* Desktop View (SVG) */}
                <div className="timeline-desktop">
                    <svg className="timeline-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
                        {/* Background Path (Faint) */}
                        <path
                            d={pathData}
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.2)"
                            strokeWidth="2"
                        />

                        {/* Foreground Path (Animated) */}
                        <path
                            ref={pathRef}
                            d={pathData}
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        />

                        {/* Dots at vertices */}
                        {steps.map((step, index) => (
                            <circle
                                key={index}
                                ref={el => dotsRef.current[index] = el}
                                cx={step.x}
                                cy={step.y}
                                r="6"
                                fill="rgba(255, 255, 255, 1)"
                                className="timeline-dot-desktop"
                            />
                        ))}
                    </svg>

                    {/* Text Positioning: varied positions around the dots */}
                    {steps.map((step, index) => {
                        const isInteractive = step.title.includes('Vicinissima Festival');
                        return (
                            <div
                                key={index}
                                className={`timeline-item ${isInteractive ? 'interactive-step' : ''}`}
                                style={{
                                    top: step.textTop,
                                    left: step.textLeft,
                                    textAlign: step.textAlign || 'left', // Default left aligned
                                    cursor: isInteractive ? 'pointer' : 'default'
                                }}
                                onClick={() => isInteractive && setIsModalOpen(true)}
                            >
                                <span className="timeline-date">{step.date}</span>
                                <span className="timeline-title text-accent">
                                    {isInteractive && <u>{step.title}</u>}
                                    {!isInteractive && step.title}
                                    {isInteractive && <span className="info-icon" style={{ marginLeft: '8px', fontSize: '1.4em' }}>🎬️️</span>}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile View (Vertical List) */}
                <div className="timeline-mobile">
                    {steps.map((step, index) => {
                        const isInteractive = step.title.includes('Vicinissima Festival');
                        return (
                            <div key={index} className="timeline-mobile-item">
                                <div className="timeline-mobile-line">
                                    <div className="timeline-dot"></div>
                                    {index !== steps.length - 1 && <div className="timeline-connector"></div>}
                                </div>
                                <div
                                    className={`timeline-mobile-content ${isInteractive ? 'interactive-step' : ''}`}
                                    style={{ cursor: isInteractive ? 'pointer' : 'default' }}
                                    onClick={() => isInteractive && setIsModalOpen(true)}
                                >
                                    <span className="timeline-date">{step.date}</span>
                                    <span className="timeline-title text-accent">
                                        {step.title}
                                        {isInteractive && <span className="info-icon" style={{ marginLeft: '6px', fontSize: '0.9em' }}>ℹ️</span>}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Vicinissima Modal */}
            {isModalOpen && (
                <div className="popup-backdrop" onClick={(e) => {
                    if (e.target.className === 'popup-backdrop') setIsModalOpen(false);
                }}>
                    <div className="popup-content" style={{ maxWidth: '900px', width: '90%', textAlign: 'justify' }}>
                        <button className="popup-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close">
                            &times;
                        </button>
                        <h2 className="popup-title" style={{ marginTop: '0', marginBottom: 'var(--spacing-md)', fontSize: '1.5rem' }}>Vicinissima Festival</h2>
                        <div className="popup-description" style={{ color: '#e0e0e0', fontSize: '0.95rem', lineHeight: '1.6', maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                <b>Vicinissima Festival</b> è il ciclo di eventi aperti al pubblico con cui il progetto di residenza artistica <strong>BarriERA / BarriÈ</strong> contribuirà all’offerta culturale del Giardino Giorgio Amendola, nell’ambito del progetto di rigenerazione urbana <b><em>Ri-creiamo il giardino che vorrei</em></b>.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Il nome gioca con il superlativo tipico di molti eventi torinesi e lo reinterpreta in una dimensione più intima: un evento piccolo nelle dimensioni ma <b>profondamente radicato nel territorio</b>, nato per raccontare un quartiere e raccogliere le storie di chi lo vive e di chi lo immagina, un appuntamento che - più che un festival tradizionale - diventa l’occasione per trasformare il giardino in uno spazio di incontro e condivisione, attraverso il linguaggio del cinema.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Vicinissima accompagnerà l’intero percorso di residenza artistica e ospiterà le restituzioni - intermedie e finali - dei gruppi di lavoro coinvolti, così che la comunità possa conoscere e seguire da vicino i processi creativi sviluppati durante il progetto.
                            </p>
                            <p>
                                Le restituzioni saranno affiancate anche da una piccola programmazione di <b>cortometraggi indipendenti della scena torinese</b>, selezionati tramite call dedicate, e da momenti di incontro e confronto aperti a tutto il quartiere, così da costruire insieme uno spazio inedito di dialogo tra artisti, pubblico e territorio.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Timeline;
