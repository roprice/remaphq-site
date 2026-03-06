function siteData() {
    return {
        async init() {
            // Phase 4: The "Living" Pill Dots
            const brandPalette = [
                "#C99A18", /* Pitcher yellow */
                "#4A6FA5", /* Jacket blue */
                "#E8567F", /* Sticky pink */
                "#189E48", /* Marker green */
                "#C9A96E"  /* Honey oak */
            ];

            setInterval(() => {
                const dots = document.querySelectorAll('.domain-pill-dot');
                if (dots.length > 0) {
                    let randomDot = dots[Math.floor(Math.random() * dots.length)];
                    let randomColor = brandPalette[Math.floor(Math.random() * brandPalette.length)];

                    // 1. Change the color first — CSS transition fades it over 1.2s
                    randomDot.style.color = randomColor;

                    // 2. Wait for the color transition to finish, THEN blip
                    //    so it's the NEW color that scales up
                    setTimeout(() => {
                        randomDot.classList.add('blip-active');

                        // 3. Remove the class after the animation finishes (1.5s)
                        setTimeout(() => {
                            randomDot.classList.remove('blip-active');
                        }, 1500);
                    }, 1200); // matches the CSS transition: color 1.2s
                }
            }, 4000); // how often a dot is picked
        },
        /* ── State ── */
        activeTab: 'automation',
        openFaq: 0,
        bookingModalOpen: false,
        mobileMenu: false,

        /* ── Computed ── */
        get currentTab() {
            if (!this.services || !this.services.tabs) return {};
            return this.services.tabs.find(t => t.id === this.activeTab) || {};
        },

        /* ── Content (Fallback Skeleton) ── */
        header: { menu: [], cta: {}, emailCta: {} },
        hero: { headline: {}, cta: {}, secondaryCta: {}, domainPills: [], logoRows: [] },
        services: { tabs: [], tabPreviews: {}, activityLines: [] },
        testimonials: [],
        about: { paragraphs: [] },
        faq: { items: [] },
        cta: { button: {} },
        footer: { columns: [], contact: {} }
    };
}



function liveFeed() {
    return {
        activities: [
            "Ingesting 1042 industry RSS feeds...",
            "Ingesting 341 YouTube transcripts...",
            "Filtering out fluff content...",
            "Curating 840  items for  relevance...(Gemini)",
            "Curating down to 78 finalists... (DeepSeek)",
            "Watching/reading finalists... (Claude)",
            "Drafting executive summaries (MiniMax)...",
            "Picking winners and losers...(Claude)",
            "Clustering and grouping for audience...(Gemini)",
            "Formatting HTML layout for Mailchimp...",
            "Sending to human for review..."
        ],
        currentIndex: 0,
        startFeed() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.activities.length;
            }, 2500);
        }
    }
}

// A lightweight observer that triggers the fade-in once per element
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { rootMargin: "0px 0px -10% 0px" }); // Triggers when the element is 10% up the screen

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector('.agent-cta-card');

    // If the card doesn't exist on this page, stop running the script
    if (!card) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                scrubCardOpacity();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    function scrubCardOpacity() {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Find the exact vertical center of the card
        const cardCenterY = rect.top + (rect.height / 2);

        // Calculate normalized position (0.0 at bottom, 0.5 at center, 1.0 at top)
        let position = (windowHeight - cardCenterY) / windowHeight;
        position = Math.max(0, Math.min(1, position)); // Keep it between 0 and 1

        let currentOpacity = 0;

        if (position <= 0.5) {
            // 1st Half: Fade IN (Position 0.0 to 0.5 maps to Opacity 0.0 to 0.9)
            currentOpacity = position * 1.8;
        } else {
            // 2nd Half: Fade OUT (Position 0.5 to 1.0 maps to Opacity 0.9 to 0.2)
            const progressPastCenter = (position - 0.5) / 0.5; // Scale from 0 to 1
            currentOpacity = 0.9 - (progressPastCenter * 0.7); // Drop by 0.7 (from 0.9 down to 0.2)
        }

        // Apply the exact opacity frame-by-frame
        card.style.opacity = currentOpacity.toFixed(2);
    }

    // Initialize immediately on load
    scrubCardOpacity();
});

// Smart Sticky Header Logic
document.addEventListener("DOMContentLoaded", () => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    // Make sure header exists before trying to manipulate it
    if (!header) return;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // 1. Handle appearance/disappearance based on scroll direction
        if (currentScroll > lastScrollTop) {
            // Scrolling DOWN - Hide header
            header.classList.remove('header-visible');
        } else {
            // Scrolling UP - Show header
            header.classList.add('header-visible');
        }

        // 2. Handle border styling (only show border if we aren't at the absolute top)
        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
            // Ensure header is always visible when at the very top of the page
            header.classList.add('header-visible');
        }

        // Update the last scroll position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);

    // Trigger once on load to set initial state correctly
    window.dispatchEvent(new Event('scroll'));
});