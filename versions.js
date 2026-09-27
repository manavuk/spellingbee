// App Versioning & Change History
const APP_VERSION = "v1.5.6";

const VERSION_HISTORY = [
    {
        version: "v1.5.6",
        date: "Latest Release",
        badge: "Stickers & Sync",
        title: "Sports Category Completion & Resilient Sticker Sync",
        highlights: [
            "Added 13 new high-gloss collectible sticker assets, fully completing the Sports & Hobbies category (10/10) and expanding Nature & Wonders",
            "Cached all new sticker image assets for instant offline album and shop availability in service worker v1.5.6",
            "Resolved false 429 quota exhaustion bug in sticker scheduler with exponential backoff and rate-limit throttle",
            "Added dual-model engine support for Imagen 3 and Gemini Flash with multi-model fallback and automated progress sync"
        ]
    },
    {
        version: "v1.5.5",
        date: "Previous Release",
        badge: "Mobile UI",
        title: "Mobile Wallpaper Display & Gallery Optimization",
        highlights: [
            "Hardware-accelerated fixed viewport background container (#app-wallpaper-bg) eliminating iOS Safari background-attachment zoom bug",
            "Responsive widescreen 16:9 wallpaper preview boxes and adaptive card layouts for phones and tablets",
            "Smooth touch scrolling and dvh-aware viewport bounds for wallpaper gallery on mobile screens",
            "Wrapping status badges and multi-line button labels preventing overflow on small screens",
            "Bumped service worker cache to v1.5.5"
        ]
    },
    {
        version: "v1.5.4",
        date: "Previous Release",
        badge: "Fix",
        title: "Sticker Shop Restoration & Mystery Blur",
        highlights: [
            "Fixed sticker catalog definitions to restore all category filters, sticker shop cards, and album views",
            "Added mystery progressive blur and lock badges to unpurchased stickers with hover peek clarity",
            "Instant crystal-clear reveal upon unlocking stickers with Honey Coins",
            "Bumped service worker cache to v1.5.4 for seamless update delivery"
        ]
    },
    {
        version: "v1.5.3",
        date: "Previous Release",
        badge: "Stickers",
        title: "Sticker Collection Expansion & Status Tracking",
        highlights: [
            "7 new high-gloss die-cut vinyl bee stickers generated and added to the Sticker Shop and Album",
            "Full offline caching of all 20 custom sticker assets and 6 wallpapers in service worker v1.5.3",
            "Comprehensive status tracking system in STICKER_PROMPTS.md and sticker_prompts.json for idempotent bulk generation",
            "Automatic synchronization of custom sticker artwork in Sticker Seeds catalog"
        ]
    },
    {
        version: "v1.5.2",
        date: "Previous Release",
        badge: "Art",
        title: "Master Bee Art Wallpapers",
        highlights: [
            "6 high-resolution custom bee art wallpapers created and integrated as offline progressive unlocks up to 250,000 points",
            "Cinematic widescreen previews with dynamic clarity & blur-reduction engine based on cumulative player points",
            "Full-screen ambient background art rendering with fixed cover layout when equipped",
            "Offline caching of all 6 wallpaper artwork assets in service worker for instantaneous loading"
        ]
    },
    {
        version: "v1.5.1",
        date: "Previous Release",
        badge: "Hints",
        title: "Guaranteed Word Definitions & Sentence Hints",
        highlights: [
            "All words across 11+ and Standard vocabulary now have complete definitions, parts of speech, and contextual example sentences",
            "Guaranteed 100% availability of 'Define Word' and 'Use in Sentence' hint buttons on every turn with zero network dependency",
            "Automatic masked sentence hints (______ in place of target word) with natural audio speech synthesis playback",
            "Enhanced Admin Word Manager with direct viewing and editing for definitions, parts of speech, and example sentences",
            "Automatic offline migration and enrichment of existing cached words in local storage"
        ]
    },
    {
        version: "v1.5.0",
        date: "Previous Release",
        badge: "Themes",
        title: "Visual Themes & Mobile-First Experience",
        highlights: [
            "Real custom AI die-cut vinyl stickers with realistic glossy finish, 3D drop-shadows & hover tilt",
            "5 visual themes: Midnight Blue, Daylight Honey (Light), Forest Emerald, Cyberpunk Neon & Sunset Gold",
            "Enhanced typography and high-contrast styling across all light mode elements and keyboards",
            "Responsive layout optimizations for mobile phones, smaller touch viewports and compact keyboards",
            "Real-time theme switching with persistent cross-session localStorage sync",
            "Over-the-air PWA update deployment for all installed web apps"
        ]
    },
    {
        version: "v1.4.0",
        date: "Previous Release",
        badge: "PWA",
        title: "Progressive Web App (PWA) & Update Engine",
        highlights: [
            "Install as a standalone native-like app on Android, iOS, Windows & Mac",
            "Automatic background update checker with instantaneous notification toast",
            "Zero data loss: points, coins, stickers, wallpapers & misspelled words retained",
            "Interactive Version History and Changelog viewer",
            "Full offline asset caching for seamless play anywhere"
        ]
    },
    {
        version: "v1.3.0",
        date: "Previous Release",
        badge: "Milestone",
        title: "500 Stickers & Progressive Art Wallpapers",
        highlights: [
            "500 collectible stickers across 8 themed categories with search & filter",
            "Honey Coins economy earned through correct spelling streaks",
            "6 Master bee art wallpapers unlocking progressively up to 250,000 points",
            "Dynamic blur-reduction preview engine as points accumulate"
        ]
    },
    {
        version: "v1.2.0",
        date: "Feature Update",
        badge: "Feature",
        title: "Misspelled Words Studio & Practice Engine",
        highlights: [
            "Misspelled Words Studio with real-time stats & CSV export",
            "Rich mastery cards with past mistake strike-through pills",
            "Category filter chips (11+ Words, Frequent Mistakes, Difficulties)",
            "Dedicated 'Practice Missed Words' challenge round"
        ]
    },
    {
        version: "v1.1.0",
        date: "Feature Update",
        badge: "Feature",
        title: "Landing Modernization & Settings Modal",
        highlights: [
            "Default 11+ Exam Vocabulary Word Bank with thousands of words",
            "Game Preferences modal popup with persistent storage across sessions",
            "Configurable starting lives (10 Standard vs 5 Challenge mode)",
            "Customizable text-to-speech voice and keyboard input modes"
        ]
    },
    {
        version: "v1.0.0",
        date: "Initial Release",
        badge: "Initial",
        title: "Spell Bee Launch",
        highlights: [
            "Audio speech synthesis with definition and sentence context hints",
            "Adaptive difficulty scaling based on player performance",
            "Comprehensive Admin Portal with word manager and dictionary editing"
        ]
    }
];
