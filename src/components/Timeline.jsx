import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const Timeline = () => {
    // Consolidated data: coordinates match the SVG path 1000x600 viewBox
    const steps = [
        {
            date: 'Gennaio 2026',
            title: 'Apertura call',
            x: 50, y: 50,
            textTop: '-5%', textLeft: '-2%'
        },
        {
            date: '28 Febbraio 2026',
            title: 'Chiusura call',
            x: 200, y: 120,
            textTop: '8%', textLeft: '21%'
        },
        {
            date: 'Febbraio 2026',
            title: 'Selezione dei team e comunicazione esiti',
            x: 400, y: 180,
            textTop: '31%', textLeft: '16%',
            textAlign: 'right'
        },
        {
            date: 'Marzo 2026',
            title: 'Avvio residenza',
            x: 550, y: 300,
            textTop: '38%', textLeft: '56%'
        },
        {
            date: 'Marzo 2027',
            title: 'Consegna dei cortometraggi',
            x: 750, y: 400,
            textTop: '67%', textLeft: '49%',
            textAlign: 'right'
        },
        {
            date: 'Maggio 2027',
            title: 'Proiezione finale e restituzione pubblica',
            x: 900, y: 550,
            textTop: '93%', textLeft: '80%',
            textAlign: 'center'
        }
    ];

    const timelineRef = useRef(null);
    const pathRef = useRef(null);
    const dotsRef = useRef([]);
    const thresholds = useRef([]);
    const [pathLength, setPathLength] = useState(0);

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
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            style={{
                                top: step.textTop,
                                left: step.textLeft,
                                textAlign: step.textAlign || 'left' // Default left aligned
                            }}
                        >
                            <span className="timeline-date">{step.date}</span>
                            <span className="timeline-title text-accent">{step.title}</span>
                        </div>
                    ))}
                </div>

                {/* Mobile View (Vertical List) */}
                <div className="timeline-mobile">
                    {steps.map((step, index) => (
                        <div key={index} className="timeline-mobile-item">
                            <div className="timeline-mobile-line">
                                <div className="timeline-dot"></div>
                                {index !== steps.length - 1 && <div className="timeline-connector"></div>}
                            </div>
                            <div className="timeline-mobile-content">
                                <span className="timeline-date">{step.date}</span>
                                <span className="timeline-title text-accent">{step.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
