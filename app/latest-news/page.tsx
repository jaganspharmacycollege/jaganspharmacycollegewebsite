'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    Sparkles,
    ArrowLeft,
    X,
    Maximize2,
} from 'lucide-react';
import styles from './LatestNews.module.css';

interface NewspaperClipping {
    id: number;
    image: string;
}

const newspaperClippings: NewspaperClipping[] = [
    {
        id: 1,
        image: '/assets/HomePageImages/CGS_events.png',
    },
    {
        id: 2,
        image: '/assets/HomePageImages/CGS_lab.png',
    },
    {
        id: 3,
        image: '/assets/HomePageImages/CGS_sports.png',
    },
    {
        id: 4,
        image: '/assets/HomePageImages/CGS_classroom.png',
    },
    {
        id: 5,
        image: '/assets/HomePageImages/CGS_lib.png',
    },
    {
        id: 6,
        image: '/assets/HomePageImages/WCU.png',
    },
];

export default function LatestNewsPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const orbLeftRef = useRef<HTMLDivElement>(null);
    const orbRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isMounted = true;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMounted && entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let animationFrameId: number;
        let isMounted = true;

        const updateParallax = () => {
            if (!isMounted || !sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentScroll += (targetScroll - currentScroll) * 0.035;
                const relativeOffset = window.innerHeight - rect.top;
                if (orbLeftRef.current) {
                    orbLeftRef.current.style.transform = `translate3d(0, ${relativeOffset * 0.06
                        }px, 0)`;
                }
                if (orbRightRef.current) {
                    orbRightRef.current.style.transform = `translate3d(0, ${relativeOffset * -0.05
                        }px, 0)`;
                }
            }
            if (isMounted) {
                animationFrameId = requestAnimationFrame(updateParallax);
            }
        };

        const handleScroll = () => {
            if (!isMounted) return;
            targetScroll = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        animationFrameId = requestAnimationFrame(updateParallax);

        return () => {
            isMounted = false;
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    return (
        <div ref={sectionRef} className={styles.pageWrapper}>
            <div ref={orbLeftRef} className={styles.bgOrbLeft} />
            <div ref={orbRightRef} className={styles.bgOrbRight} />

            <div className={styles.container}>
                <div
                    className={`${styles.backNav} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} />
                        <span>Return to Home</span>
                    </Link>
                </div>

                <div
                    className={`${styles.header} ${isVisible ? styles.animateReveal1 : styles.hiddenState
                        }`}
                >
                    <div className={styles.eyebrowTag}>
                        <Sparkles size={14} className={styles.eyebrowIcon} />
                        <span>Press Publications</span>
                    </div>
                    <h1 className={styles.title}>Latest News</h1>
                    <div className={styles.accentLine} />
                </div>

                {/* Newspaper Clippings Gallery */}
                <div
                    className={`${styles.newsGrid} ${isVisible ? styles.animateReveal2 : styles.hiddenState
                        }`}
                >
                    {newspaperClippings.map((item) => (
                        <div
                            key={item.id}
                            className={styles.newspaperCard}
                            onClick={() => setSelectedImage(item.image)}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={`Newspaper Publication ${item.id}`}
                                    className={styles.newspaperImage}
                                />
                                <div className={styles.imageOverlay}>
                                    <div className={styles.zoomButton}>
                                        <Maximize2 size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className={styles.lightboxOverlay}
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className={styles.closeBtn}
                            aria-label="Close Preview"
                        >
                            <X size={22} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Newspaper Clipping Full View"
                            className={styles.lightboxImg}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}