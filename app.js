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
                // Look for the actual HTML elements instead of the JSON array
                const dots = document.querySelectorAll('.domain-pill-dot');
                if (dots.length > 0) {
                    let randomDot = dots[Math.floor(Math.random() * dots.length)];
                    let randomColor = brandPalette[Math.floor(Math.random() * brandPalette.length)];
                    randomDot.style.color = randomColor;
                }
            }, 2000);
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