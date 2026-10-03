const CACHE_NAME = 'spelling-bee-v1.5.6';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './words.js',
    './words_filtered.js',
    './stickers.js',
    './wallpapers.js',
    './versions.js',
    './manifest.json',
    './favicon.png',
    './bee_logo.png',
    './bee_oops.png',
    './bee_happy.png',
    './bee_thinking.png',
    './bee_dizzy.png',
    './bee_superhero.png',
    './icon-96.png',
    './icon-144.png',
    './icon-192.png',
    './icon-512.png',
    './apple-touch-icon.png',
    './assets/stickers/honey_queen_bee.jpg',
    './assets/stickers/superhero_bee.jpg',
    './assets/stickers/astronaut_bee.jpg',
    './assets/stickers/mecha_cyber_bee.jpg',
    './assets/stickers/wizard_spell_bee.jpg',
    './assets/stickers/golden_honey_pot.jpg',
    './assets/stickers/detective_bee.jpg',
    './assets/stickers/mythic_unicorn.jpg',
    './assets/stickers/golden_lion_king.jpg',
    './assets/stickers/cosmic_whale.jpg',
    './assets/stickers/solar_explorer.jpg',
    './assets/stickers/rainbow_boba.jpg',
    './assets/stickers/magic_crystal_dragon.jpg',
    './assets/stickers/buzzy_antennae.jpg',
    './assets/stickers/honey_drop.jpg',
    './assets/stickers/bee_hive_box.jpg',
    './assets/stickers/garden_bumble.jpg',
    './assets/stickers/pollen_basket.jpg',
    './assets/stickers/pollen_collector_bee.jpg',
    './assets/stickers/baby_larva_bee.jpg',
    './assets/stickers/sunflower_scout_bee.jpg',
    './assets/stickers/hive_architect_bee.jpg',
    './assets/stickers/honey_drone_worker.jpg',
    './assets/stickers/stinger_of_valor.jpg',
    './assets/stickers/glow_in_the_dark_bee.jpg',
    './assets/stickers/bumblebee_champion.jpg',
    './assets/stickers/captain_pirate_bee.jpg',
    './assets/stickers/chef_baker_bee.jpg',
    './assets/stickers/royal_jelly_flask.jpg',
    './assets/stickers/ninja_stealth_bee.jpg',
    './assets/stickers/chubby_bunny_rabbit.jpg',
    './assets/stickers/lucky_ladybug.jpg',
    './assets/stickers/hamster_with_sunflower_seed.jpg',
    './assets/stickers/soccer_ball_goal.jpg',
    './assets/stickers/skateboard_kickflip.jpg',
    './assets/stickers/slam_dunk_basketball.jpg',
    './assets/stickers/bicycle_champion.jpg',
    './assets/stickers/karate_black_belt.jpg',
    './assets/stickers/master_artist_palette.jpg',
    './assets/stickers/pro_gaming_setup.jpg',
    './assets/stickers/rockstar_electric_guitar.jpg',
    './assets/stickers/grand_piano_maestro.jpg',
    './assets/stickers/golden_world_cup_trophy.jpg',
    './assets/stickers/snowy_mountain_peak.jpg',
    './assets/stickers/desert_blooming_cactus.jpg',
    './assets/stickers/tropical_palm_island.jpg',
    './assets/stickers/golden_sunflower_meadow.jpg',
    './assets/stickers/mighty_waterfall.jpg',
    './assets/stickers/giant_redwood_tree.jpg',
    './assets/stickers/rainbow_mountain.jpg',
    './assets/stickers/aurora_borealis_northern_lights.jpg',
    './assets/stickers/erupting_volcano.jpg',
    './assets/stickers/electric_tesla_coil.jpg',
    './assets/stickers/atom_molecule_model.jpg',
    './assets/stickers/genius_scientist_flask.jpg',
    './assets/stickers/high_power_microscope.jpg',
    './assets/stickers/graduation_honor_cap.jpg',
    './assets/stickers/dna_double_helix.jpg',
    './assets/stickers/friendly_ai_robot.jpg',
    './assets/stickers/einstein_genius_brain.jpg',
    './assets/stickers/quantum_computer_core.jpg',
    './assets/stickers/caramel_macaron.jpg',
    './assets/stickers/frosted_cupcake.jpg',
    './assets/stickers/gummy_bear_rainbow.jpg',
    './assets/stickers/pancake_tower_with_syrup.jpg',
    './assets/stickers/strawberry_shortcake.jpg',
    './assets/stickers/glazed_galaxy_donut.jpg',
    './assets/stickers/golden_honey_waffle.jpg',
    './assets/stickers/chocolate_lava_cake.jpg',
    './assets/stickers/triple_tier_cake.jpg',
    './assets/stickers/royal_honey_sundae.jpg',
    './assets/stickers/golden_crown_of_kings.jpg',
    './assets/stickers/crystal_ball_of_truth.jpg',
    './assets/stickers/magic_potion_cauldron.jpg',
    './assets/stickers/glowing_fairy_wings.jpg',
    './assets/stickers/knight_in_shining_armor.jpg',
    './assets/stickers/mystic_spellbook.jpg',
    './assets/stickers/mermaid_princess.jpg',
    './assets/stickers/enchanted_castle.jpg',
    './assets/stickers/fire_dragon_lord.jpg',
    './assets/stickers/phoenix_reborn.jpg',
    './assets/wallpapers/honeycomb_kingdom.jpg',
    './assets/wallpapers/enchanted_meadow.jpg',
    './assets/wallpapers/cosmic_galaxy.jpg',
    './assets/wallpapers/sunflower_sanctuary.jpg',
    './assets/wallpapers/cyber_neon_hive.jpg',
    './assets/wallpapers/mythic_golden_hive.jpg'
];

// Install: Cache all core assets and wait for user update or auto-activate
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Activate: Clean up any old version caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Message listener for skip waiting prompt triggered by UI
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Fetch: Stale-While-Revalidate for app assets, Network-First for external dictionaries
self.addEventListener('fetch', (event) => {
    // Dictionary API calls: Network first, cache fallback
    if (event.request.url.includes('api.dictionaryapi.dev') || event.request.url.includes('api.datamuse.com') || event.request.url.includes('wiktionary.org')) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // Static Assets: Stale-While-Revalidate to ensure fast startup + automatic background refresh
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => cachedResponse);

            return cachedResponse || fetchPromise;
        })
    );
});
