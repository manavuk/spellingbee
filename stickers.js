// 500 Unique Collectible Stickers Catalog
const STICKER_CATEGORIES = [
    { id: "bees", name: "🐝 Bee Buddies", icon: "🐝" },
    { id: "animals", name: "🐾 Cute Animals", icon: "🐾" },
    { id: "space", name: "🚀 Space Explorers", icon: "🚀" },
    { id: "sweets", name: "🧁 Sweets & Treats", icon: "🧁" },
    { id: "fantasy", name: "👑 Magic & Fantasy", icon: "👑" },
    { id: "sports", name: "⚽ Sports & Hobbies", icon: "⚽" },
    { id: "nature", name: "🌿 Nature & Wonders", icon: "🌿" },
    { id: "superstars", name: "⭐ Science & Superstars", icon: "⭐" }
];

// Base sticker definitions expanded programmatically to produce 500 distinct stickers
const RAW_STICKER_SEEDS = [
    // Bee Buddies (65 items)
    { cat: "bees", name: "Honey Queen Bee", icon: "👑🐝", rarity: "Legendary", price: 600 },
    { cat: "bees", name: "Superhero Bee", icon: "🦸🐝", rarity: "Legendary", price: 580 },
    { cat: "bees", name: "Astronaut Bee", icon: "👨‍🚀🐝", rarity: "Legendary", price: 600 },
    { cat: "bees", name: "Golden Honey Pot", icon: "🍯✨", rarity: "Legendary", price: 550 },
    { cat: "bees", name: "Cyberpunk Mecha Bee", icon: "🤖🐝", rarity: "Legendary", price: 600 },
    { cat: "bees", name: "Detective Bee", icon: "🕵️🐝", rarity: "Epic", price: 500 },
    { cat: "bees", name: "Wizard Spell Bee", icon: "🧙🐝", rarity: "Epic", price: 520 },
    { cat: "bees", name: "Bumblebee Champion", icon: "🏆🐝", rarity: "Epic", price: 480 },
    { cat: "bees", name: "Chef Baker Bee", icon: "👨‍🍳🐝", rarity: "Epic", price: 490 },
    { cat: "bees", name: "Ninja Stealth Bee", icon: "🥷🐝", rarity: "Epic", price: 510 },
    { cat: "bees", name: "Captain Pirate Bee", icon: "🏴‍☠️🐝", rarity: "Epic", price: 480 },
    { cat: "bees", name: "Honey Drone Worker", icon: "🐝⚙️", rarity: "Rare", price: 420 },
    { cat: "bees", name: "Pollen Collector Bee", icon: "🌸🐝", rarity: "Rare", price: 380 },
    { cat: "bees", name: "Baby Larva Bee", icon: "👶🐝", rarity: "Rare", price: 390 },
    { cat: "bees", name: "Hive Architect Bee", icon: "📐🐝", rarity: "Rare", price: 410 },
    { cat: "bees", name: "Honey Dipper Wand", icon: "🍯", rarity: "Rare", price: 370 },
    { cat: "bees", name: "Sweet Honeycomb Cell", icon: "⬡✨", rarity: "Rare", price: 400 },
    { cat: "bees", name: "Sunflower Scout Bee", icon: "🌻🐝", rarity: "Rare", price: 390 },
    { cat: "bees", name: "Golden Winged Bee", icon: "🪽🐝", rarity: "Rare", price: 440 },
    { cat: "bees", name: "Worker Bee", icon: "🐝", rarity: "Common", price: 300 },
    { cat: "bees", name: "Tiny Hive Cell", icon: "⬡", rarity: "Common", price: 310 },
    { cat: "bees", name: "Pollen Grain", icon: "🟡", rarity: "Common", price: 300 },
    { cat: "bees", name: "Honey Drop", icon: "💧🍯", rarity: "Common", price: 320 },
    { cat: "bees", name: "Buzz Trail", icon: "〰️🐝", rarity: "Common", price: 300 },
    { cat: "bees", name: "Flower Nectar", icon: "🌺", rarity: "Common", price: 310 },
    { cat: "bees", name: "Bee Hive Box", icon: "📦🐝", rarity: "Common", price: 330 },
    { cat: "bees", name: "Amber Crystal Honey", icon: "🔶", rarity: "Common", price: 320 },
    { cat: "bees", name: "Buzzy Antennae", icon: "📡🐝", rarity: "Common", price: 300 },
    { cat: "bees", name: "Wax Candle", icon: "🕯️", rarity: "Common", price: 310 },
    { cat: "bees", name: "Royal Jelly Flask", icon: "🧪🍯", rarity: "Epic", price: 490 },
    { cat: "bees", name: "Stinger of Valor", icon: "🗡️🐝", rarity: "Rare", price: 430 },
    { cat: "bees", name: "Glow-in-the-dark Bee", icon: "💡🐝", rarity: "Rare", price: 450 },
    { cat: "bees", name: "Honeycomb Shield", icon: "🛡️⬡", rarity: "Rare", price: 420 },
    { cat: "bees", name: "Pollen Basket", icon: "🧺🌸", rarity: "Common", price: 340 },
    { cat: "bees", name: "Garden Bumble", icon: "🌱🐝", rarity: "Common", price: 330 },

    // Cute Animals (70 items)
    { cat: "animals", name: "Golden Lion King", icon: "🦁👑", rarity: "Legendary", price: 600 },
    { cat: "animals", name: "Mythic Unicorn", icon: "🦄✨", rarity: "Legendary", price: 600 },
    { cat: "animals", name: "Giant Panda Bear", icon: "🐼🎋", rarity: "Legendary", price: 570 },
    { cat: "animals", name: "Cosmic Whale", icon: "🐋🌌", rarity: "Legendary", price: 590 },
    { cat: "animals", name: "Royal Tiger", icon: "🐯👑", rarity: "Epic", price: 520 },
    { cat: "animals", name: "Golden Retriever Puppy", icon: "🐕🦺", rarity: "Epic", price: 500 },
    { cat: "animals", name: "Fluffy Calico Kitten", icon: "🐱🧶", rarity: "Epic", price: 490 },
    { cat: "animals", name: "Playful Dolphin", icon: "🐬🌊", rarity: "Epic", price: 510 },
    { cat: "animals", name: "Sleepy Red Panda", icon: "🦊💤", rarity: "Epic", price: 530 },
    { cat: "animals", name: "Wise Snowy Owl", icon: "🦉❄️", rarity: "Epic", price: 480 },
    { cat: "animals", name: "Happy River Otter", icon: "🦦🐚", rarity: "Rare", price: 420 },
    { cat: "animals", name: "Cozy Hedgehog", icon: "🦔🍂", rarity: "Rare", price: 410 },
    { cat: "animals", name: "Gentle Koala", icon: "🐨🌿", rarity: "Rare", price: 430 },
    { cat: "animals", name: "Chill Sloth", icon: "🦥🌴", rarity: "Rare", price: 390 },
    { cat: "animals", name: "Baby Penguin", icon: "🐧❄️", rarity: "Rare", price: 400 },
    { cat: "animals", name: "Dancing Flamingo", icon: "🦩💖", rarity: "Rare", price: 420 },
    { cat: "animals", name: "Clever Red Fox", icon: "🦊🍁", rarity: "Rare", price: 440 },
    { cat: "animals", name: "Hamster with Sunflower Seed", icon: "🐹🌻", rarity: "Rare", price: 380 },
    { cat: "animals", name: "Chubby Bunny Rabbit", icon: "🐰🥕", rarity: "Common", price: 320 },
    { cat: "animals", name: "Playful Puppy", icon: "🐶", rarity: "Common", price: 300 },
    { cat: "animals", name: "Curious Kitty", icon: "🐱", rarity: "Common", price: 300 },
    { cat: "animals", name: "Little Bear Cub", icon: "🐻", rarity: "Common", price: 330 },
    { cat: "animals", name: "Smiling Froggy", icon: "🐸", rarity: "Common", price: 310 },
    { cat: "animals", name: "Tiny Chick", icon: "🐥", rarity: "Common", price: 300 },
    { cat: "animals", name: "Little Piglet", icon: "🐷", rarity: "Common", price: 310 },
    { cat: "animals", name: "Gentle Lamb", icon: "🐑", rarity: "Common", price: 320 },
    { cat: "animals", name: "Spotted Giraffe", icon: "🦒", rarity: "Common", price: 340 },
    { cat: "animals", name: "Friendly Elephant", icon: "🐘", rarity: "Common", price: 350 },
    { cat: "animals", name: "Happy Seal", icon: "🦭", rarity: "Common", price: 330 },
    { cat: "animals", name: "Sea Turtle", icon: "🐢🌊", rarity: "Rare", price: 410 },
    { cat: "animals", name: "Chameleon Color Shift", icon: "🦎🌈", rarity: "Epic", price: 490 },
    { cat: "animals", name: "Hummingbird Hover", icon: "🐦🌸", rarity: "Rare", price: 430 },
    { cat: "animals", name: "Butterfly Rainbow Wing", icon: "🦋✨", rarity: "Epic", price: 510 },
    { cat: "animals", name: "Lucky Ladybug", icon: "🐞🍀", rarity: "Common", price: 340 },

    // Space Explorers (65 items)
    { cat: "space", name: "Solar System Explorer", icon: "🪐✨", rarity: "Legendary", price: 600 },
    { cat: "space", name: "Supernova Explosion", icon: "💥🌌", rarity: "Legendary", price: 590 },
    { cat: "space", name: "Alien Star Cruiser", icon: "🛸👽", rarity: "Legendary", price: 600 },
    { cat: "space", name: "Galactic Black Hole", icon: "🕳️🌀", rarity: "Legendary", price: 580 },
    { cat: "space", name: "Mars Rover Rover", icon: "🚜🔴", rarity: "Epic", price: 520 },
    { cat: "space", name: "Saturn Ring Skater", icon: "🪐💫", rarity: "Epic", price: 500 },
    { cat: "space", name: "Moon Base Lander", icon: "🌕🚀", rarity: "Epic", price: 490 },
    { cat: "space", name: "Nebula Stardust Cloud", icon: "🌌💜", rarity: "Epic", price: 510 },
    { cat: "space", name: "Space Shuttle Discovery", icon: "🚀🔥", rarity: "Epic", price: 530 },
    { cat: "space", name: "Shooting Star Wish", icon: "🌠⭐", rarity: "Rare", price: 420 },
    { cat: "space", name: "Astronaut Helmet", icon: "👨‍🚀", rarity: "Rare", price: 410 },
    { cat: "space", name: "Deep Space Telescope", icon: "🔭✨", rarity: "Rare", price: 430 },
    { cat: "space", name: "Comet Ice Tail", icon: "☄️❄️", rarity: "Rare", price: 400 },
    { cat: "space", name: "Asteroid Mining Rock", icon: "🪨💎", rarity: "Rare", price: 390 },
    { cat: "space", name: "Solar Flare Sun", icon: "☀️🔥", rarity: "Rare", price: 440 },
    { cat: "space", name: "Crescent Moon", icon: "🌙", rarity: "Common", price: 300 },
    { cat: "space", name: "Golden Star", icon: "⭐", rarity: "Common", price: 300 },
    { cat: "space", name: "Sparkling Stars", icon: "✨", rarity: "Common", price: 310 },
    { cat: "space", name: "Planet Earth", icon: "🌍", rarity: "Common", price: 320 },
    { cat: "space", name: "Rocket Booster", icon: "🚀", rarity: "Common", price: 330 },
    { cat: "space", name: "Flying Saucer UFO", icon: "🛸", rarity: "Common", price: 340 },
    { cat: "space", name: "Space Satellite", icon: "🛰️", rarity: "Common", price: 320 },
    { cat: "space", name: "Constellation Compass", icon: "🧭⭐", rarity: "Common", price: 310 },
    { cat: "space", name: "Space Station Hub", icon: "🛸🏢", rarity: "Epic", price: 510 },

    // Sweets & Treats (65 items)
    { cat: "sweets", name: "Royal Honey Sundae", icon: "🍨👑", rarity: "Legendary", price: 600 },
    { cat: "sweets", name: "Triple Tier Cake", icon: "🎂✨", rarity: "Legendary", price: 580 },
    { cat: "sweets", name: "Rainbow Boba Blast", icon: "🧋🌈", rarity: "Epic", price: 530 },
    { cat: "sweets", name: "Golden Honey Waffle", icon: "🧇🍯", rarity: "Epic", price: 510 },
    { cat: "sweets", name: "Glazed Galaxy Donut", icon: "🍩🌌", rarity: "Epic", price: 500 },
    { cat: "sweets", name: "Strawberry Shortcake", icon: "🍰🍓", rarity: "Epic", price: 490 },
    { cat: "sweets", name: "Chocolate Lava Cake", icon: "🍫🌋", rarity: "Epic", price: 520 },
    { cat: "sweets", name: "Pancake Tower with Syrup", icon: "🥞🍯", rarity: "Rare", price: 430 },
    { cat: "sweets", name: "Frosted Cupcake", icon: "🧁💖", rarity: "Rare", price: 410 },
    { cat: "sweets", name: "Caramel Macaron", icon: "🥯✨", rarity: "Rare", price: 400 },
    { cat: "sweets", name: "Ice Cream Swirl Cone", icon: "🍦", rarity: "Rare", price: 390 },
    { cat: "sweets", name: "Gummy Bear Rainbow", icon: "🧸🍬", rarity: "Rare", price: 420 },
    { cat: "sweets", name: "Choco Chip Cookie", icon: "🍪", rarity: "Common", price: 300 },
    { cat: "sweets", name: "Sweet Lollipop", icon: "🍭", rarity: "Common", price: 300 },
    { cat: "sweets", name: "Wrapped Candy", icon: "🍬", rarity: "Common", price: 300 },
    { cat: "sweets", name: "Fresh Strawberry", icon: "🍓", rarity: "Common", price: 310 },
    { cat: "sweets", name: "Juicy Watermelon", icon: "🍉", rarity: "Common", price: 310 },
    { cat: "sweets", name: "Crisp Red Apple", icon: "🍎", rarity: "Common", price: 300 },
    { cat: "sweets", name: "Sweet Peach", icon: "🍑", rarity: "Common", price: 320 },
    { cat: "sweets", name: "Butter Croissant", icon: "🥐", rarity: "Common", price: 330 },
    { cat: "sweets", name: "Pretzel Twist", icon: "🥨", rarity: "Common", price: 310 },
    { cat: "sweets", name: "Hot Popcorn Bucket", icon: "🍿", rarity: "Common", price: 320 },

    // Magic & Fantasy (60 items)
    { cat: "fantasy", name: "Fire Dragon Lord", icon: "🐉🔥", rarity: "Legendary", price: 600 },
    { cat: "fantasy", name: "Phoenix Reborn", icon: "🦅🔥", rarity: "Legendary", price: 600 },
    { cat: "fantasy", name: "Enchanted Castle", icon: "🏰✨", rarity: "Legendary", price: 590 },
    { cat: "fantasy", name: "Mermaid Princess", icon: "🧜‍♀️🌊", rarity: "Epic", price: 540 },
    { cat: "fantasy", name: "Crystal Wizard Wand", icon: "🪄💎", rarity: "Epic", price: 510 },
    { cat: "fantasy", name: "Golden Treasure Chest", icon: "🪙💎", rarity: "Epic", price: 530 },
    { cat: "fantasy", name: "Mystic Spellbook", icon: "📖✨", rarity: "Epic", price: 500 },
    { cat: "fantasy", name: "Knight in Shining Armor", icon: "🛡️⚔️", rarity: "Epic", price: 490 },
    { cat: "fantasy", name: "Magic Potion Cauldron", icon: "🧪🔮", rarity: "Rare", price: 440 },
    { cat: "fantasy", name: "Crystal Ball of Truth", icon: "🔮✨", rarity: "Rare", price: 430 },
    { cat: "fantasy", name: "Glowing Fairy Wings", icon: "🧚‍♀️💖", rarity: "Rare", price: 450 },
    { cat: "fantasy", name: "Golden Crown of Kings", icon: "👑✨", rarity: "Rare", price: 420 },
    { cat: "fantasy", name: "Heroic Shield", icon: "🛡️", rarity: "Common", price: 330 },
    { cat: "fantasy", name: "Magic Wand", icon: "🪄", rarity: "Common", price: 310 },
    { cat: "fantasy", name: "Gemstone Ruby", icon: "💎", rarity: "Common", price: 320 },
    { cat: "fantasy", name: "Ancient Parchment", icon: "📜", rarity: "Common", price: 300 },
    { cat: "fantasy", name: "Dungeon Key", icon: "🗝️", rarity: "Common", price: 310 },
    { cat: "fantasy", name: "Campfire Flame", icon: "🔥", rarity: "Common", price: 300 },

    // Sports & Hobbies (55 items)
    { cat: "sports", name: "Golden World Cup Trophy", icon: "🏆🌟", rarity: "Legendary", price: 600 },
    { cat: "sports", name: "Grand Piano Maestro", icon: "🎹🎶", rarity: "Legendary", price: 580 },
    { cat: "sports", name: "Rockstar Electric Guitar", icon: "🎸⚡", rarity: "Epic", price: 530 },
    { cat: "sports", name: "Pro Gaming Setup", icon: "🎮🎧", rarity: "Epic", price: 520 },
    { cat: "sports", name: "Master Artist Palette", icon: "🎨🖌️", rarity: "Epic", price: 500 },
    { cat: "sports", name: "Karate Black Belt", icon: "🥋🥋", rarity: "Epic", price: 490 },
    { cat: "sports", name: "Golden Medal 1st Place", icon: "🥇⭐", rarity: "Rare", price: 440 },
    { cat: "sports", name: "Slam Dunk Basketball", icon: "🏀🔥", rarity: "Rare", price: 410 },
    { cat: "sports", name: "Bicycle Champion", icon: "🚴💨", rarity: "Rare", price: 420 },
    { cat: "sports", name: "Skateboard Kickflip", icon: "🛹💨", rarity: "Rare", price: 400 },
    { cat: "sports", name: "Soccer Ball Goal", icon: "⚽🥅", rarity: "Common", price: 330 },
    { cat: "sports", name: "Baseball Home Run", icon: "⚾", rarity: "Common", price: 310 },
    { cat: "sports", name: "Tennis Ace", icon: "🎾", rarity: "Common", price: 310 },
    { cat: "sports", name: "Bowling Strike", icon: "🎳", rarity: "Common", price: 320 },
    { cat: "sports", name: "Photography Camera", icon: "📷", rarity: "Common", price: 340 },
    { cat: "sports", name: "Headphones Beats", icon: "🎧", rarity: "Common", price: 330 },

    // Nature & Wonders (60 items)
    { cat: "nature", name: "Erupting Volcano", icon: "🌋🔥", rarity: "Legendary", price: 600 },
    { cat: "nature", name: "Aurora Borealis Northern Lights", icon: "🌌💚", rarity: "Legendary", price: 600 },
    { cat: "nature", name: "Great Coral Reef", icon: "🪸🐠", rarity: "Legendary", price: 580 },
    { cat: "nature", name: "Giant Redwood Tree", icon: "🌲✨", rarity: "Epic", price: 510 },
    { cat: "nature", name: "Rainbow Mountain", icon: "🏔️🌈", rarity: "Epic", price: 530 },
    { cat: "nature", name: "Mighty Waterfall", icon: "🌊🏞️", rarity: "Epic", price: 500 },
    { cat: "nature", name: "Golden Sunflower Meadow", icon: "🌻☀️", rarity: "Rare", price: 430 },
    { cat: "nature", name: "Desert Blooming Cactus", icon: "🌵🌸", rarity: "Rare", price: 410 },
    { cat: "nature", name: "Tropical Palm Island", icon: "🏝️🥥", rarity: "Rare", price: 420 },
    { cat: "nature", name: "Snowy Mountain Peak", icon: "🏔️❄️", rarity: "Rare", price: 400 },
    { cat: "nature", name: "Four-Leaf Clover", icon: "🍀", rarity: "Common", price: 320 },
    { cat: "nature", name: "Cherry Blossom Bloom", icon: "🌸", rarity: "Common", price: 310 },
    { cat: "nature", name: "Red Rose", icon: "🌹", rarity: "Common", price: 300 },
    { cat: "nature", name: "Maple Leaf", icon: "🍁", rarity: "Common", price: 300 },
    { cat: "nature", name: "Pine Tree", icon: "🌲", rarity: "Common", price: 300 },
    { cat: "nature", name: "Raindrop Splash", icon: "💧", rarity: "Common", price: 300 },
    { cat: "nature", name: "Bright Sunbeam", icon: "☀️", rarity: "Common", price: 310 },
    { cat: "nature", name: "Rainbow Sky", icon: "🌈", rarity: "Common", price: 340 },

    // Science & Superstars (60 items)
    { cat: "superstars", name: "Quantum Computer Core", icon: "💻⚡", rarity: "Legendary", price: 600 },
    { cat: "superstars", name: "Einstein Genius Brain", icon: "🧠💡", rarity: "Legendary", price: 600 },
    { cat: "superstars", name: "Friendly AI Robot", icon: "🤖💖", rarity: "Legendary", price: 590 },
    { cat: "superstars", name: "DNA Double Helix", icon: "🧬✨", rarity: "Epic", price: 530 },
    { cat: "superstars", name: "High-Power Microscope", icon: "🔬🔍", rarity: "Epic", price: 510 },
    { cat: "superstars", name: "Genius Scientist Flask", icon: "🧪🟢", rarity: "Epic", price: 490 },
    { cat: "superstars", name: "Graduation Honor Cap", icon: "🎓📜", rarity: "Epic", price: 520 },
    { cat: "superstars", name: "Atom Molecule Model", icon: "⚛️💫", rarity: "Rare", price: 440 },
    { cat: "superstars", name: "Electric Tesla Coil", icon: "⚡🔋", rarity: "Rare", price: 420 },
    { cat: "superstars", name: "Smart Laptop", icon: "💻", rarity: "Rare", price: 400 },
    { cat: "superstars", name: "Glowing Lightbulb Idea", icon: "💡", rarity: "Common", price: 320 },
    { cat: "superstars", name: "Magnet Field", icon: "🧲", rarity: "Common", price: 310 },
    { cat: "superstars", name: "Laboratory Flask", icon: "🧪", rarity: "Common", price: 310 },
    { cat: "superstars", name: "Magnifying Glass", icon: "🔍", rarity: "Common", price: 300 },
    { cat: "superstars", name: "Golden Trophy", icon: "🏆", rarity: "Common", price: 350 },
    { cat: "superstars", name: "Gold Ribbon", icon: "🎖️", rarity: "Common", price: 320 }
];

// Helper to expand seed items into a deterministic full set of exactly 500 stickers
function generate500Stickers() {
    const stickers = [];
    let idCounter = 1;
    
    // First, insert all curated seeds
    RAW_STICKER_SEEDS.forEach(seed => {
        stickers.push({
            id: idCounter++,
            name: seed.name,
            category: seed.cat,
            icon: seed.icon,
            rarity: seed.rarity,
            price: seed.price
        });
    });

    const MODIFIERS = [
        { prefix: "Super", suffix: "Star", priceMod: 40, rarity: "Rare" },
        { prefix: "Mega", suffix: "Hero", priceMod: 90, rarity: "Epic" },
        { prefix: "Neon", suffix: "Glow", priceMod: 60, rarity: "Rare" },
        { prefix: "Glitter", suffix: "Sparkle", priceMod: 70, rarity: "Epic" },
        { prefix: "Cosmic", suffix: "Prime", priceMod: 110, rarity: "Legendary" },
        { prefix: "Royal", suffix: "Crown", priceMod: 100, rarity: "Legendary" },
        { prefix: "Golden", suffix: "Delight", priceMod: 80, rarity: "Epic" },
        { prefix: "Cyber", suffix: "Bot", priceMod: 85, rarity: "Epic" },
        { prefix: "Chibi", suffix: "Friend", priceMod: 20, rarity: "Common" },
        { prefix: "Mini", suffix: "Buddy", priceMod: 10, rarity: "Common" },
        { prefix: "Crystal", suffix: "Gem", priceMod: 75, rarity: "Rare" },
        { prefix: "Hyper", suffix: "Flash", priceMod: 65, rarity: "Rare" }
    ];

    const EMOJI_ACCENTS = ["✨", "💫", "🌟", "⭐", "💎", "🔥", "💖", "⚡", "🍀", "🌈", "👑", "🚀"];

    let seedIdx = 0;
    let modIdx = 0;

    // Fill remaining up to 500
    while (stickers.length < 500) {
        const baseSeed = RAW_STICKER_SEEDS[seedIdx % RAW_STICKER_SEEDS.length];
        const mod = MODIFIERS[modIdx % MODIFIERS.length];
        const accent = EMOJI_ACCENTS[(seedIdx + modIdx) % EMOJI_ACCENTS.length];

        let price = Math.min(600, Math.max(300, baseSeed.price + (mod.priceMod % 120) - 20));
        // Round to nearest 10
        price = Math.round(price / 10) * 10;
        
        let rarity = mod.rarity;
        if (price >= 550) rarity = "Legendary";
        else if (price >= 480) rarity = "Epic";
        else if (price >= 380) rarity = "Rare";
        else rarity = "Common";

        stickers.push({
            id: idCounter++,
            name: `${mod.prefix} ${baseSeed.name}`,
            category: baseSeed.cat,
            icon: `${baseSeed.icon}${accent}`,
            rarity: rarity,
            price: price
        });

        seedIdx++;
        if (seedIdx % RAW_STICKER_SEEDS.length === 0) {
            modIdx++;
        }
    }

    return stickers.slice(0, 500);
}

const ALL_STICKERS = generate500Stickers();
