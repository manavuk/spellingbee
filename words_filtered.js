const WORD_LIST = [
    {
        "word": "the",
        "valid": [
            "the"
        ],
        "difficulty": "easy",
        "definition": "Used to refer to a person or thing that is specific or already known.",
        "sentence": "The password is \"Muiriel\".",
        "partOfSpeech": "article"
    },
    {
        "word": "and",
        "valid": [
            "and"
        ],
        "difficulty": "easy",
        "definition": "Used to connect words of the same part of speech, clauses, or sentences.",
        "sentence": "Today is June 18th and it is Muiriel's birthday!",
        "partOfSpeech": "conjunction"
    },
    {
        "word": "that",
        "valid": [
            "that"
        ],
        "difficulty": "easy",
        "definition": "Used to identify a specific person, thing, idea, or event mentioned earlier.",
        "sentence": "That was an evil bunny.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "this",
        "valid": [
            "this"
        ],
        "difficulty": "easy",
        "definition": "Used to identify a specific person or thing close at hand or being indicated.",
        "sentence": "This is never going to end.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "with",
        "valid": [
            "with"
        ],
        "difficulty": "easy",
        "definition": "Accompanied by or possessing; in the company of.",
        "sentence": "You're so impatient with me.",
        "partOfSpeech": "preposition"
    },
    {
        "word": "you",
        "valid": [
            "you"
        ],
        "difficulty": "easy",
        "definition": "The person or people that the speaker is addressing.",
        "sentence": "You are in my way.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "not",
        "valid": [
            "not"
        ],
        "difficulty": "easy",
        "definition": "Used with an auxiliary verb or 'be' to form the negative.",
        "sentence": "He does not speak French.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "are",
        "valid": [
            "are"
        ],
        "difficulty": "easy",
        "definition": "Second person singular and present tense plural of 'be'.",
        "sentence": "You are in my way.",
        "partOfSpeech": "verb"
    },
    {
        "word": "from",
        "valid": [
            "from"
        ],
        "difficulty": "easy",
        "definition": "Indicating the point in space or time at which an action, motion, or state starts.",
        "sentence": "I didn't know where it came from.",
        "partOfSpeech": "preposition"
    },
    {
        "word": "all",
        "valid": [
            "all"
        ],
        "difficulty": "easy",
        "definition": "The whole quantity or extent of; completely.",
        "sentence": "Became all attention.",
        "partOfSpeech": "determiner"
    },
    {
        "word": "have",
        "valid": [
            "have"
        ],
        "difficulty": "easy",
        "definition": "To possess, hold, or keep something in one's ownership or use.",
        "sentence": "Have another bowl of chicken soup!",
        "partOfSpeech": "verb"
    },
    {
        "word": "new",
        "valid": [
            "new"
        ],
        "difficulty": "easy",
        "definition": "Not of long duration; having just (or relatively recently) come into being or been made or acquired or discovered.",
        "sentence": "New experiences.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "more",
        "valid": [
            "more"
        ],
        "difficulty": "easy",
        "definition": "A greater or additional amount or quantity.",
        "sentence": "More interesting.",
        "partOfSpeech": "determiner"
    },
    {
        "word": "was",
        "valid": [
            "was"
        ],
        "difficulty": "easy",
        "definition": "Past tense of 'be' for first and third person singular.",
        "sentence": "That was an evil bunny.",
        "partOfSpeech": "verb"
    },
    {
        "word": "will",
        "valid": [
            "will"
        ],
        "difficulty": "easy",
        "definition": "Expressing the future tense, determination, or intention.",
        "sentence": "Where there's a will there's a way.",
        "partOfSpeech": "verb"
    },
    {
        "word": "home",
        "valid": [
            "home"
        ],
        "difficulty": "easy",
        "definition": "Where you live at a particular time.",
        "sentence": "A home for the elderly.",
        "partOfSpeech": "noun"
    },
    {
        "word": "can",
        "valid": [
            "can"
        ],
        "difficulty": "easy",
        "definition": "Be able to; have the ability, capacity, or permission to.",
        "sentence": "Sometimes he can be a strange guy.",
        "partOfSpeech": "verb"
    },
    {
        "word": "about",
        "valid": [
            "about"
        ],
        "difficulty": "easy",
        "definition": "On the subject of; concerning; approximately.",
        "sentence": "In just about a minute.",
        "partOfSpeech": "preposition"
    },
    {
        "word": "page",
        "valid": [
            "page"
        ],
        "difficulty": "easy",
        "definition": "One side of one leaf (of a book or magazine or newspaper or letter etc.) or the written or pictorial matter it contains.",
        "sentence": "More than 90 percent of visits to a web page are from search engines.",
        "partOfSpeech": "noun"
    },
    {
        "word": "has",
        "valid": [
            "has"
        ],
        "difficulty": "easy",
        "definition": "Third-person singular present form of 'have'.",
        "sentence": "This is always the way it has been.",
        "partOfSpeech": "verb"
    },
    {
        "word": "search",
        "valid": [
            "search"
        ],
        "difficulty": "medium",
        "definition": "The activity of looking thoroughly in order to find something or someone.",
        "sentence": "A thorough search of the ledgers revealed nothing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "free",
        "valid": [
            "free"
        ],
        "difficulty": "easy",
        "definition": "People who are free.",
        "sentence": "The home of the free and the brave.",
        "partOfSpeech": "noun"
    },
    {
        "word": "but",
        "valid": [
            "but"
        ],
        "difficulty": "easy",
        "definition": "Used to introduce a phrase or clause contrasting with what has already been mentioned.",
        "sentence": "Hopes that last but a moment.",
        "partOfSpeech": "conjunction"
    },
    {
        "word": "one",
        "valid": [
            "one"
        ],
        "difficulty": "easy",
        "definition": "The smallest whole number or a numeral representing this number.",
        "sentence": "He is the best one.",
        "partOfSpeech": "noun"
    },
    {
        "word": "other",
        "valid": [
            "other"
        ],
        "difficulty": "easy",
        "definition": "Used to refer to a person or thing that is different or distinct.",
        "sentence": "The construction of highways and other public works.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "information",
        "valid": [
            "information"
        ],
        "difficulty": "expert",
        "definition": "A message received and understood.",
        "sentence": "The signal contained thousands of bits of information.",
        "partOfSpeech": "noun"
    },
    {
        "word": "time",
        "valid": [
            "time"
        ],
        "difficulty": "easy",
        "definition": "The indefinite continued progress of existence and events.",
        "sentence": "He waited for along time.",
        "partOfSpeech": "noun"
    },
    {
        "word": "they",
        "valid": [
            "they"
        ],
        "difficulty": "easy",
        "definition": "Used to refer to two or more people or things previously mentioned.",
        "sentence": "They are too busy fighting against each other to care for common ideals.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "site",
        "valid": [
            "site"
        ],
        "difficulty": "easy",
        "definition": "The piece of land on which something is located (or is to be located).",
        "sentence": "The Israeli web site was damaged by hostile hackers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "may",
        "valid": [
            "may"
        ],
        "difficulty": "easy",
        "definition": "Expressing possibility or permission.",
        "sentence": "I may give up soon and just nap instead.",
        "partOfSpeech": "verb"
    },
    {
        "word": "what",
        "valid": [
            "what"
        ],
        "difficulty": "easy",
        "definition": "Asking for information specifying something.",
        "sentence": "I just don't know what to say.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "which",
        "valid": [
            "which"
        ],
        "difficulty": "easy",
        "definition": "Asking for information specifying one or more people or things from a definite set.",
        "sentence": "All that which is invented, is true.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "news",
        "valid": [
            "news"
        ],
        "difficulty": "easy",
        "definition": "Information about recent and important events.",
        "sentence": "He is no longer news in the fashion world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "out",
        "valid": [
            "out"
        ],
        "difficulty": "easy",
        "definition": "Through or away from the inside; into the open air.",
        "sentence": "The truth will out.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "use",
        "valid": [
            "use"
        ],
        "difficulty": "easy",
        "definition": "To employ something for a particular purpose.",
        "sentence": "Long use had hardened him to it.",
        "partOfSpeech": "verb"
    },
    {
        "word": "any",
        "valid": [
            "any"
        ],
        "difficulty": "easy",
        "definition": "One or some or every or all without specification.",
        "sentence": "It isn't any better.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "there",
        "valid": [
            "there"
        ],
        "difficulty": "easy",
        "definition": "In, at, or to that place or position.",
        "sentence": "You can take it from there.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "see",
        "valid": [
            "see"
        ],
        "difficulty": "easy",
        "definition": "To perceive with the eyes; discern visually.",
        "sentence": "Now I see!",
        "partOfSpeech": "verb"
    },
    {
        "word": "only",
        "valid": [
            "only"
        ],
        "difficulty": "easy",
        "definition": "Being the only one; single and isolated from others.",
        "sentence": "I'll have this car and this car only.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "his",
        "valid": [
            "his"
        ],
        "difficulty": "easy",
        "definition": "Belonging to or associated with a male person previously mentioned.",
        "sentence": "I would like to give him a present for his birthday.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "when",
        "valid": [
            "when"
        ],
        "difficulty": "easy",
        "definition": "At what time or during what period.",
        "sentence": "I suppose it's different when you think about it over the long term.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "contact",
        "valid": [
            "contact"
        ],
        "difficulty": "medium",
        "definition": "Close interaction.",
        "sentence": "They kept in daily contact.",
        "partOfSpeech": "noun"
    },
    {
        "word": "here",
        "valid": [
            "here"
        ],
        "difficulty": "easy",
        "definition": "The present location; this place.",
        "sentence": "Where do we go from here?",
        "partOfSpeech": "noun"
    },
    {
        "word": "business",
        "valid": [
            "business"
        ],
        "difficulty": "hard",
        "definition": "A commercial or industrial enterprise and the people who constitute it.",
        "sentence": "His business with the cane was hilarious.",
        "partOfSpeech": "noun"
    },
    {
        "word": "who",
        "valid": [
            "who"
        ],
        "difficulty": "easy",
        "definition": "What or which person or people.",
        "sentence": "Every person who is alone is alone because they are afraid of others.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "web",
        "valid": [
            "web"
        ],
        "difficulty": "easy",
        "definition": "An intricate network suggesting something that was formed by weaving or interweaving.",
        "sentence": "Tangled in a web of cloth.",
        "partOfSpeech": "noun"
    },
    {
        "word": "also",
        "valid": [
            "also"
        ],
        "difficulty": "easy",
        "definition": "In addition.",
        "sentence": "There are also nightclubs where you dance flamenco.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "now",
        "valid": [
            "now"
        ],
        "difficulty": "easy",
        "definition": "At the present time or moment.",
        "sentence": "Now is a good time to do it.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "help",
        "valid": [
            "help"
        ],
        "difficulty": "easy",
        "definition": "The activity of contributing to the fulfillment of a need or furtherance of an effort or purpose.",
        "sentence": "Offered his help in unloading.",
        "partOfSpeech": "noun"
    },
    {
        "word": "get",
        "valid": [
            "get"
        ],
        "difficulty": "easy",
        "definition": "To come to have or hold something; receive.",
        "sentence": "Get someone mad.",
        "partOfSpeech": "verb"
    },
    {
        "word": "view",
        "valid": [
            "view"
        ],
        "difficulty": "easy",
        "definition": "A way of regarding situations or topics etc.",
        "sentence": "He tried to get a better view of it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "online",
        "valid": [
            "online"
        ],
        "difficulty": "medium",
        "definition": "On a regular route of a railroad or bus or airline system.",
        "sentence": "It almost scared me not to see you online for a whole day.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "first",
        "valid": [
            "first"
        ],
        "difficulty": "easy",
        "definition": "Coming before all others in time, order, or importance.",
        "sentence": "The first of the month.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "been",
        "valid": [
            "been"
        ],
        "difficulty": "easy",
        "definition": "Past participle of 'be'.",
        "sentence": "This is always the way it has been.",
        "partOfSpeech": "verb"
    },
    {
        "word": "would",
        "valid": [
            "would"
        ],
        "difficulty": "easy",
        "definition": "Past form of 'will', expressing conditional mood or intention.",
        "sentence": "This is what I would have said.",
        "partOfSpeech": "verb"
    },
    {
        "word": "how",
        "valid": [
            "how"
        ],
        "difficulty": "easy",
        "definition": "In what way or manner; by what means.",
        "sentence": "How many close friends do you have?",
        "partOfSpeech": "adverb"
    },
    {
        "word": "were",
        "valid": [
            "were"
        ],
        "difficulty": "easy",
        "definition": "Past tense plural and second person singular of 'be'.",
        "sentence": "Humans were never meant to live forever.",
        "partOfSpeech": "verb"
    },
    {
        "word": "services",
        "valid": [
            "services"
        ],
        "difficulty": "hard",
        "definition": "Performance of duties or provision of space and equipment helpful to others.",
        "sentence": "The mayor tried to maintain city services.",
        "partOfSpeech": "noun"
    },
    {
        "word": "some",
        "valid": [
            "some"
        ],
        "difficulty": "easy",
        "definition": "An unspecified amount or number of.",
        "sentence": "That was some party.",
        "partOfSpeech": "determiner"
    },
    {
        "word": "these",
        "valid": [
            "these"
        ],
        "difficulty": "easy",
        "definition": "Plural form of this; indicating things close at hand.",
        "sentence": "I am a flawed person, but these are flaws that can easily be fixed.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "click",
        "valid": [
            "click"
        ],
        "difficulty": "easy",
        "definition": "A short light metallic sound.",
        "sentence": "A click on the right button for example.",
        "partOfSpeech": "noun"
    },
    {
        "word": "its",
        "valid": [
            "its"
        ],
        "difficulty": "easy",
        "definition": "Belonging to or associated with a thing previously mentioned.",
        "sentence": "If you don't understand something, it's because you aren't aware of its context.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "like",
        "valid": [
            "like"
        ],
        "difficulty": "easy",
        "definition": "Having the same characteristics or qualities as; similar to.",
        "sentence": "We'll not see his like again.",
        "partOfSpeech": "preposition"
    },
    {
        "word": "service",
        "valid": [
            "service"
        ],
        "difficulty": "medium",
        "definition": "Work done by one person or group that benefits another.",
        "sentence": "That restaurant has excellent service.",
        "partOfSpeech": "noun"
    },
    {
        "word": "than",
        "valid": [
            "than"
        ],
        "difficulty": "easy",
        "definition": "Used in comparisons to introduce the second element.",
        "sentence": "You're in better shape than I am.",
        "partOfSpeech": "conjunction"
    },
    {
        "word": "find",
        "valid": [
            "find"
        ],
        "difficulty": "easy",
        "definition": "To discover or perceive by chance or by search.",
        "sentence": "My son went to Berkeley to find himself.",
        "partOfSpeech": "verb"
    },
    {
        "word": "price",
        "valid": [
            "price"
        ],
        "difficulty": "easy",
        "definition": "The property of having material worth (often indicated by the amount of money something would bring if sold).",
        "sentence": "Her price is far above rubies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "date",
        "valid": [
            "date"
        ],
        "difficulty": "easy",
        "definition": "The specified day of the month.",
        "sentence": "She asked how to avoid kissing at the end of a date.",
        "partOfSpeech": "noun"
    },
    {
        "word": "back",
        "valid": [
            "back"
        ],
        "difficulty": "easy",
        "definition": "The posterior part of a human (or animal) body from the neck to the end of the spine.",
        "sentence": "The back of the dental chair was adjustable.",
        "partOfSpeech": "noun"
    },
    {
        "word": "top",
        "valid": [
            "top"
        ],
        "difficulty": "easy",
        "definition": "The upper part of anything.",
        "sentence": "They had the big top up in less than an hour.",
        "partOfSpeech": "noun"
    },
    {
        "word": "people",
        "valid": [
            "people"
        ],
        "difficulty": "medium",
        "definition": "Human beings in general or considered collectively.",
        "sentence": "Old people.",
        "partOfSpeech": "noun"
    },
    {
        "word": "had",
        "valid": [
            "had"
        ],
        "difficulty": "easy",
        "definition": "Form of have: a person who possesses great material wealth.",
        "sentence": "I am not an artist. I never had the knack for it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "list",
        "valid": [
            "list"
        ],
        "difficulty": "easy",
        "definition": "A database containing an ordered array of items (names or topics).",
        "sentence": "The ship developed a list to starboard.",
        "partOfSpeech": "noun"
    },
    {
        "word": "name",
        "valid": [
            "name"
        ],
        "difficulty": "easy",
        "definition": "A language unit by which a person or thing is known.",
        "sentence": "Halt in the name of the law.",
        "partOfSpeech": "noun"
    },
    {
        "word": "just",
        "valid": [
            "just"
        ],
        "difficulty": "easy",
        "definition": "Used especially of what is legally or ethically right or proper or fitting; \"a just and lasting peace\"- A.Lincoln.",
        "sentence": "A kind and just man.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "over",
        "valid": [
            "over"
        ],
        "difficulty": "easy",
        "definition": "The division of play during which six balls are bowled at the batsman by one player from the other team from the same end of the pitch.",
        "sentence": "The wallpaper was covered all over with flowers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "state",
        "valid": [
            "state"
        ],
        "difficulty": "easy",
        "definition": "The territory occupied by one of the constituent administrative districts of a nation.",
        "sentence": "The current state of knowledge.",
        "partOfSpeech": "noun"
    },
    {
        "word": "year",
        "valid": [
            "year"
        ],
        "difficulty": "easy",
        "definition": "A period of time containing 365 (or 366) days.",
        "sentence": "She was in my year at Hoehandle High.",
        "partOfSpeech": "noun"
    },
    {
        "word": "day",
        "valid": [
            "day"
        ],
        "difficulty": "easy",
        "definition": "Each of the twenty-four-hour periods of time; daylight hours.",
        "sentence": "He deserves his day in court.",
        "partOfSpeech": "noun"
    },
    {
        "word": "into",
        "valid": [
            "into"
        ],
        "difficulty": "easy",
        "definition": "Expressing movement or action with the result that someone or something becomes enclosed.",
        "sentence": "Pull into shape after washing.",
        "partOfSpeech": "preposition"
    },
    {
        "word": "email",
        "valid": [
            "email"
        ],
        "difficulty": "easy",
        "definition": "A system of world-wide electronic communication in which a computer user can compose a message at one terminal that can be regenerated at the recipient's terminal when the recipient logs in.",
        "sentence": "I just wanted to check my email.",
        "partOfSpeech": "noun"
    },
    {
        "word": "two",
        "valid": [
            "two"
        ],
        "difficulty": "easy",
        "definition": "The number equivalent to the sum of one and one; 2.",
        "sentence": "He received two messages.",
        "partOfSpeech": "noun"
    },
    {
        "word": "health",
        "valid": [
            "health"
        ],
        "difficulty": "medium",
        "definition": "A healthy state of wellbeing free from disease.",
        "sentence": "His delicate health.",
        "partOfSpeech": "noun"
    },
    {
        "word": "world",
        "valid": [
            "world"
        ],
        "difficulty": "easy",
        "definition": "Everything that exists anywhere.",
        "sentence": "All the world loves a lover.",
        "partOfSpeech": "noun"
    },
    {
        "word": "next",
        "valid": [
            "next"
        ],
        "difficulty": "easy",
        "definition": "Immediately following in time or order.",
        "sentence": "Next in line.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "used",
        "valid": [
            "used"
        ],
        "difficulty": "easy",
        "definition": "Employed in accomplishing something; \"the principle of surprise is the most used and misused of all the principles of war\"- H.H.Arnold & I.C.Eaker.",
        "sentence": "Bought a secondhand (or used) car.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "work",
        "valid": [
            "work"
        ],
        "difficulty": "easy",
        "definition": "Activity directed toward making or doing something.",
        "sentence": "She checked several points needing further work.",
        "partOfSpeech": "noun"
    },
    {
        "word": "last",
        "valid": [
            "last"
        ],
        "difficulty": "easy",
        "definition": "The temporal end; the concluding time.",
        "sentence": "He breathed his last.",
        "partOfSpeech": "noun"
    },
    {
        "word": "most",
        "valid": [
            "most"
        ],
        "difficulty": "easy",
        "definition": "(superlative of `many' used with count nouns and often preceded by `the') quantifier meaning the greatest in number.",
        "sentence": "Most everyone agrees.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "products",
        "valid": [
            "products"
        ],
        "difficulty": "hard",
        "definition": "Form of product: commodities offered for sale.",
        "sentence": "Would you please send me details of your products via e-mail as an attachment?",
        "partOfSpeech": "noun"
    },
    {
        "word": "music",
        "valid": [
            "music"
        ],
        "difficulty": "easy",
        "definition": "An artistic form of auditory communication incorporating instrumental or vocal tones in a structured and continuous manner.",
        "sentence": "His music was his central interest.",
        "partOfSpeech": "noun"
    },
    {
        "word": "buy",
        "valid": [
            "buy"
        ],
        "difficulty": "easy",
        "definition": "An advantageous purchase.",
        "sentence": "The stock was a real buy at that price.",
        "partOfSpeech": "noun"
    },
    {
        "word": "data",
        "valid": [
            "data"
        ],
        "difficulty": "easy",
        "definition": "A collection of facts from which conclusions may be drawn.",
        "sentence": "Statistical data.",
        "partOfSpeech": "noun"
    },
    {
        "word": "make",
        "valid": [
            "make"
        ],
        "difficulty": "easy",
        "definition": "To form, create, construct, or produce something.",
        "sentence": "What make of car is that?",
        "partOfSpeech": "verb"
    },
    {
        "word": "them",
        "valid": [
            "them"
        ],
        "difficulty": "easy",
        "definition": "Used as the object of a verb or preposition to refer to two or more people or things.",
        "sentence": "I'll call them tomorrow when I come back.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "should",
        "valid": [
            "should"
        ],
        "difficulty": "medium",
        "definition": "Used as an auxiliary verb, to express a conditional or contingent act or state, or as a supposition of an actual fact; also, to express moral obligation (see Shall); e. g.: they sh.",
        "sentence": "You should sleep.",
        "partOfSpeech": "noun"
    },
    {
        "word": "product",
        "valid": [
            "product"
        ],
        "difficulty": "medium",
        "definition": "Commodities offered for sale.",
        "sentence": "They improve their product every year.",
        "partOfSpeech": "noun"
    },
    {
        "word": "system",
        "valid": [
            "system"
        ],
        "difficulty": "medium",
        "definition": "Instrumentality that combines interrelated interacting artifacts designed to work as a coherent entity.",
        "sentence": "He bought a new stereo system.",
        "partOfSpeech": "noun"
    },
    {
        "word": "post",
        "valid": [
            "post"
        ],
        "difficulty": "easy",
        "definition": "The position where someone (as a guard or sentry) stands or is assigned to stand.",
        "sentence": "It came by the first post.",
        "partOfSpeech": "noun"
    },
    {
        "word": "her",
        "valid": [
            "her"
        ],
        "difficulty": "easy",
        "definition": "Belonging to or associated with a female person previously mentioned.",
        "sentence": "I can't tell her now. It's not that simple anymore.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "city",
        "valid": [
            "city"
        ],
        "difficulty": "easy",
        "definition": "A large and densely populated urban area; may include several independent administrative districts.",
        "sentence": "The city voted for Republicans in 1994.",
        "partOfSpeech": "noun"
    },
    {
        "word": "add",
        "valid": [
            "add"
        ],
        "difficulty": "easy",
        "definition": "A condition (mostly in boys) characterized by behavioral and learning disorders.",
        "sentence": "Add insult to injury.",
        "partOfSpeech": "noun"
    },
    {
        "word": "policy",
        "valid": [
            "policy"
        ],
        "difficulty": "medium",
        "definition": "A plan of action adopted by an individual or social group.",
        "sentence": "It was a policy of retribution.",
        "partOfSpeech": "noun"
    },
    {
        "word": "number",
        "valid": [
            "number"
        ],
        "difficulty": "medium",
        "definition": "The property possessed by a sum or total or indefinite quantity of units or individuals.",
        "sentence": "She preferred the black nylon number.",
        "partOfSpeech": "noun"
    },
    {
        "word": "such",
        "valid": [
            "such"
        ],
        "difficulty": "easy",
        "definition": "Of so extreme a degree or extent.",
        "sentence": "He is such a baby.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "please",
        "valid": [
            "please"
        ],
        "difficulty": "medium",
        "definition": "Give pleasure to or be pleasing to.",
        "sentence": "These colors please the senses.",
        "partOfSpeech": "verb"
    },
    {
        "word": "available",
        "valid": [
            "available"
        ],
        "difficulty": "hard",
        "definition": "Obtainable or accessible and ready for use or service.",
        "sentence": "Kept a fire extinguisher available.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "copyright",
        "valid": [
            "copyright"
        ],
        "difficulty": "hard",
        "definition": "A document granting exclusive right to publish and sell literary or musical or artistic work.",
        "sentence": "Did you copyright your manuscript?",
        "partOfSpeech": "noun"
    },
    {
        "word": "support",
        "valid": [
            "support"
        ],
        "difficulty": "medium",
        "definition": "The activity of providing for or maintaining by supplying with money or necessities.",
        "sentence": "The strongest support for this view is the work of Jones.",
        "partOfSpeech": "noun"
    },
    {
        "word": "message",
        "valid": [
            "message"
        ],
        "difficulty": "medium",
        "definition": "A communication (usually brief) that is written or spoken or signaled.",
        "sentence": "He sent a three-word message.",
        "partOfSpeech": "noun"
    },
    {
        "word": "after",
        "valid": [
            "after"
        ],
        "difficulty": "easy",
        "definition": "Located farther aft.",
        "sentence": "Two hours after that.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "best",
        "valid": [
            "best"
        ],
        "difficulty": "easy",
        "definition": "The supreme effort one can make.",
        "sentence": "They did their best.",
        "partOfSpeech": "noun"
    },
    {
        "word": "software",
        "valid": [
            "software"
        ],
        "difficulty": "hard",
        "definition": "Written programs or procedures or rules and associated documentation pertaining to the operation of a computer system and that are stored in read/write memory.",
        "sentence": "The market for software is expected to expand.",
        "partOfSpeech": "noun"
    },
    {
        "word": "then",
        "valid": [
            "then"
        ],
        "difficulty": "easy",
        "definition": "At that time; next in order of time or sequence.",
        "sentence": "We will arrive before then.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "good",
        "valid": [
            "good"
        ],
        "difficulty": "easy",
        "definition": "Benefit.",
        "sentence": "There is much good to be found in people.",
        "partOfSpeech": "noun"
    },
    {
        "word": "video",
        "valid": [
            "video"
        ],
        "difficulty": "easy",
        "definition": "The visible part of a television transmission.",
        "sentence": "She is a star of screen and video.",
        "partOfSpeech": "noun"
    },
    {
        "word": "well",
        "valid": [
            "well"
        ],
        "difficulty": "easy",
        "definition": "A deep hole or shaft dug or drilled to obtain water or oil or gas or brine.",
        "sentence": "She was a well of information.",
        "partOfSpeech": "noun"
    },
    {
        "word": "where",
        "valid": [
            "where"
        ],
        "difficulty": "easy",
        "definition": "Whether. [Sometimes written whe'r.] [Obs.] Piers Plowman. Men must enquire (this is mine assent), Wher she be wise or sober or dronkelewe. Chaucer.\n\n1. At or in what place; hence,.",
        "sentence": "I didn't know where it came from.",
        "partOfSpeech": "noun"
    },
    {
        "word": "info",
        "valid": [
            "info"
        ],
        "difficulty": "easy",
        "definition": "A message received and understood.",
        "sentence": "I'm sorry I haven't been able to give you my cousin's contact info.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rights",
        "valid": [
            "rights"
        ],
        "difficulty": "medium",
        "definition": "Form of right: an abstract idea of that which is due to a person or governmental body by law or tradition or nature; \"Certain rights can never be granted to the government but must be kept in the hands of the people\"- Eleanor Roosevelt; \"a right is not something that somebody gives you; it is something that nobody can take away\".",
        "sentence": "We have to stand up for minority rights.",
        "partOfSpeech": "noun"
    },
    {
        "word": "public",
        "valid": [
            "public"
        ],
        "difficulty": "medium",
        "definition": "People in general considered as a whole.",
        "sentence": "The reading public.",
        "partOfSpeech": "noun"
    },
    {
        "word": "books",
        "valid": [
            "books"
        ],
        "difficulty": "easy",
        "definition": "Form of book: a written work or composition that has been published (printed on pages bound together).",
        "sentence": "I think it is good that books still exist, but they do make me sleepy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "high",
        "valid": [
            "high"
        ],
        "difficulty": "easy",
        "definition": "A lofty level or position or degree.",
        "sentence": "Summer temperatures reached an all-time high.",
        "partOfSpeech": "noun"
    },
    {
        "word": "school",
        "valid": [
            "school"
        ],
        "difficulty": "medium",
        "definition": "An educational institution.",
        "sentence": "The school was built in 1932.",
        "partOfSpeech": "noun"
    },
    {
        "word": "through",
        "valid": [
            "through"
        ],
        "difficulty": "medium",
        "definition": "Having finished or arrived at completion.",
        "sentence": "After the treatment, the patient is through except for follow-up.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "each",
        "valid": [
            "each"
        ],
        "difficulty": "easy",
        "definition": "Every one of two or more considered individually.",
        "sentence": "They received $10 each.",
        "partOfSpeech": "determiner"
    },
    {
        "word": "links",
        "valid": [
            "links"
        ],
        "difficulty": "easy",
        "definition": "A golf course that is built on sandy ground near a shore.",
        "sentence": "Would you like to exchange links?",
        "partOfSpeech": "noun"
    },
    {
        "word": "she",
        "valid": [
            "she"
        ],
        "difficulty": "easy",
        "definition": "Used to refer to a female person or animal previously mentioned.",
        "sentence": "Whatever I do, she says I can do better.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "review",
        "valid": [
            "review"
        ],
        "difficulty": "medium",
        "definition": "A new appraisal or evaluation.",
        "sentence": "The platoon stood ready for review.",
        "partOfSpeech": "noun"
    },
    {
        "word": "years",
        "valid": [
            "years"
        ],
        "difficulty": "easy",
        "definition": "A late time of life.",
        "sentence": "In his final years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "order",
        "valid": [
            "order"
        ],
        "difficulty": "easy",
        "definition": "A command given by a superior (e.g., a military or law enforcement officer) that must be obeyed.",
        "sentence": "It was on the order of a mile.",
        "partOfSpeech": "noun"
    },
    {
        "word": "very",
        "valid": [
            "very"
        ],
        "difficulty": "easy",
        "definition": "Precisely as stated.",
        "sentence": "She was very gifted.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "privacy",
        "valid": [
            "privacy"
        ],
        "difficulty": "medium",
        "definition": "The quality of being secluded from the presence or view of others.",
        "sentence": "Reporters do not hesitate to intrude into people's privacy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "book",
        "valid": [
            "book"
        ],
        "difficulty": "easy",
        "definition": "A written work or composition that has been published (printed on pages bound together).",
        "sentence": "He used a large book as a doorstop.",
        "partOfSpeech": "noun"
    },
    {
        "word": "items",
        "valid": [
            "items"
        ],
        "difficulty": "easy",
        "definition": "Form of item: a distinct part that can be specified separately in a group of things that could be enumerated on a list.",
        "sentence": "Let's proceed with the items on the agenda.",
        "partOfSpeech": "noun"
    },
    {
        "word": "company",
        "valid": [
            "company"
        ],
        "difficulty": "medium",
        "definition": "An institution created to conduct business.",
        "sentence": "He started the company in his garage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "read",
        "valid": [
            "read"
        ],
        "difficulty": "easy",
        "definition": "Something that is read.",
        "sentence": "The article was a very good read.",
        "partOfSpeech": "noun"
    },
    {
        "word": "group",
        "valid": [
            "group"
        ],
        "difficulty": "easy",
        "definition": "Any number of entities (members) considered as a unit.",
        "sentence": "Can you group these shapes together?",
        "partOfSpeech": "noun"
    },
    {
        "word": "need",
        "valid": [
            "need"
        ],
        "difficulty": "easy",
        "definition": "A condition requiring relief.",
        "sentence": "She satisfied his need for affection.",
        "partOfSpeech": "noun"
    },
    {
        "word": "many",
        "valid": [
            "many"
        ],
        "difficulty": "easy",
        "definition": "A large number of.",
        "sentence": "Many temptations.",
        "partOfSpeech": "determiner"
    },
    {
        "word": "user",
        "valid": [
            "user"
        ],
        "difficulty": "easy",
        "definition": "A person who makes use of a thing; someone who uses or employs something.",
        "sentence": "It's simply that I don't really understand what an \"oddball\" is when said by a Mixi user.",
        "partOfSpeech": "noun"
    },
    {
        "word": "said",
        "valid": [
            "said"
        ],
        "difficulty": "easy",
        "definition": "Past tense and past participle of 'say'; uttered words.",
        "sentence": "That's the stupidest thing I've ever said.",
        "partOfSpeech": "verb"
    },
    {
        "word": "does",
        "valid": [
            "does"
        ],
        "difficulty": "easy",
        "definition": "Form of do: an uproarious party.",
        "sentence": "How long does it take to get to the station?",
        "partOfSpeech": "noun"
    },
    {
        "word": "set",
        "valid": [
            "set"
        ],
        "difficulty": "easy",
        "definition": "A group of things of the same kind that belong together and are so used.",
        "sentence": "He gave a final set to his hat.",
        "partOfSpeech": "noun"
    },
    {
        "word": "under",
        "valid": [
            "under"
        ],
        "difficulty": "easy",
        "definition": "Located below or beneath something else.",
        "sentence": "The under parts of a machine.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "general",
        "valid": [
            "general"
        ],
        "difficulty": "medium",
        "definition": "A general officer of the highest rank.",
        "sentence": "He discussed the general but neglected the particular.",
        "partOfSpeech": "noun"
    },
    {
        "word": "research",
        "valid": [
            "research"
        ],
        "difficulty": "hard",
        "definition": "Systematic investigation to establish facts.",
        "sentence": "Their pottery deserves more research than it has received.",
        "partOfSpeech": "noun"
    },
    {
        "word": "university",
        "valid": [
            "university"
        ],
        "difficulty": "expert",
        "definition": "The body of faculty and students at a university.",
        "sentence": "You met him at the university?",
        "partOfSpeech": "noun"
    },
    {
        "word": "mail",
        "valid": [
            "mail"
        ],
        "difficulty": "easy",
        "definition": "The bags of letters and packages that are transported by the postal service.",
        "sentence": "The mail handles billions of items every day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "full",
        "valid": [
            "full"
        ],
        "difficulty": "easy",
        "definition": "The time when the Moon is fully illuminated.",
        "sentence": "The moon is at the full.",
        "partOfSpeech": "noun"
    },
    {
        "word": "map",
        "valid": [
            "map"
        ],
        "difficulty": "easy",
        "definition": "A diagrammatic representation of the earth's surface (or part of it).",
        "sentence": "We haven't even begun to map the many galaxies that we know exist.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reviews",
        "valid": [
            "reviews"
        ],
        "difficulty": "medium",
        "definition": "Form of review: a new appraisal or evaluation.",
        "sentence": "The New York Times reviews her gallery all the time.",
        "partOfSpeech": "noun"
    },
    {
        "word": "program",
        "valid": [
            "program"
        ],
        "difficulty": "medium",
        "definition": "A series of steps to be carried out or goals to be accomplished.",
        "sentence": "The program lasted more than two hours.",
        "partOfSpeech": "noun"
    },
    {
        "word": "life",
        "valid": [
            "life"
        ],
        "difficulty": "easy",
        "definition": "A characteristic state or mode of living.",
        "sentence": "The oceans are teeming with life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "know",
        "valid": [
            "know"
        ],
        "difficulty": "easy",
        "definition": "The fact of being aware of information that is known to few people.",
        "sentence": "He is always in the know.",
        "partOfSpeech": "noun"
    },
    {
        "word": "games",
        "valid": [
            "games"
        ],
        "difficulty": "easy",
        "definition": "Form of gam: a herd of whales.",
        "sentence": "While I was playing video games in the living room, Mom asked me if I would go shopping with her.",
        "partOfSpeech": "noun"
    },
    {
        "word": "way",
        "valid": [
            "way"
        ],
        "difficulty": "easy",
        "definition": "A method, style, or manner of doing something; a path.",
        "sentence": "The true way to success.",
        "partOfSpeech": "noun"
    },
    {
        "word": "days",
        "valid": [
            "days"
        ],
        "difficulty": "easy",
        "definition": "The time during which someone's life continues.",
        "sentence": "The monarch's last days.",
        "partOfSpeech": "noun"
    },
    {
        "word": "management",
        "valid": [
            "management"
        ],
        "difficulty": "expert",
        "definition": "The act of managing something.",
        "sentence": "He was given overall management of the program.",
        "partOfSpeech": "noun"
    },
    {
        "word": "part",
        "valid": [
            "part"
        ],
        "difficulty": "easy",
        "definition": "An amount or section which, with others, makes up the whole.",
        "sentence": "The government must do its part.",
        "partOfSpeech": "noun"
    },
    {
        "word": "could",
        "valid": [
            "could"
        ],
        "difficulty": "easy",
        "definition": "Past form of 'can'; used to indicate possibility or ability.",
        "sentence": "If the world weren't in the shape it is now, I could trust anyone.",
        "partOfSpeech": "verb"
    },
    {
        "word": "great",
        "valid": [
            "great"
        ],
        "difficulty": "easy",
        "definition": "A person who has achieved distinction and honor in some field.",
        "sentence": "Had a great time at the party.",
        "partOfSpeech": "noun"
    },
    {
        "word": "united",
        "valid": [
            "united"
        ],
        "difficulty": "medium",
        "definition": "Characterized by unity; being or joined into a single entity.",
        "sentence": "Presented a united front.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "hotel",
        "valid": [
            "hotel"
        ],
        "difficulty": "easy",
        "definition": "A building where travelers can pay for lodging and meals and other services.",
        "sentence": "You can't go naked in this hotel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "real",
        "valid": [
            "real"
        ],
        "difficulty": "easy",
        "definition": "Any rational or irrational number.",
        "sentence": "His brief time as Prime Minister brought few real benefits to the poor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "item",
        "valid": [
            "item"
        ],
        "difficulty": "easy",
        "definition": "A distinct part that can be specified separately in a group of things that could be enumerated on a list.",
        "sentence": "He noticed an item in the New York Times.",
        "partOfSpeech": "noun"
    },
    {
        "word": "international",
        "valid": [
            "international"
        ],
        "difficulty": "expert",
        "definition": "Any of several international socialist organizations.",
        "sentence": "International trade.",
        "partOfSpeech": "noun"
    },
    {
        "word": "center",
        "valid": [
            "center"
        ],
        "difficulty": "medium",
        "definition": "An area that is approximately central within some larger region.",
        "sentence": "It is a center's responsibility to get the football to the quarterback.",
        "partOfSpeech": "noun"
    },
    {
        "word": "must",
        "valid": [
            "must"
        ],
        "difficulty": "easy",
        "definition": "A necessary or essential thing.",
        "sentence": "Seat belts are an absolute must.",
        "partOfSpeech": "noun"
    },
    {
        "word": "store",
        "valid": [
            "store"
        ],
        "difficulty": "easy",
        "definition": "A mercantile establishment for the retail sale of goods or services.",
        "sentence": "He brought back a large store of Cuban cigars.",
        "partOfSpeech": "noun"
    },
    {
        "word": "travel",
        "valid": [
            "travel"
        ],
        "difficulty": "medium",
        "definition": "The act of going from one place to another.",
        "sentence": "He enjoyed selling but he hated the travel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comments",
        "valid": [
            "comments"
        ],
        "difficulty": "hard",
        "definition": "Form of comment: a statement that expresses a personal opinion or belief or adds information.",
        "sentence": "The chairman would only make her comments off the record.",
        "partOfSpeech": "noun"
    },
    {
        "word": "made",
        "valid": [
            "made"
        ],
        "difficulty": "easy",
        "definition": "Past tense and past participle of 'make'.",
        "sentence": "A neatly made bed.",
        "partOfSpeech": "verb"
    },
    {
        "word": "development",
        "valid": [
            "development"
        ],
        "difficulty": "expert",
        "definition": "Act of improving by expanding or enlarging or refining.",
        "sentence": "He congratulated them on their development of a plan to meet the emergency.",
        "partOfSpeech": "noun"
    },
    {
        "word": "report",
        "valid": [
            "report"
        ],
        "difficulty": "medium",
        "definition": "A written document describing the findings of some individual or group.",
        "sentence": "He was a person of bad report.",
        "partOfSpeech": "noun"
    },
    {
        "word": "off",
        "valid": [
            "off"
        ],
        "difficulty": "easy",
        "definition": "Kill intentionally and with premeditation.",
        "sentence": "He's off every Tuesday.",
        "partOfSpeech": "verb"
    },
    {
        "word": "member",
        "valid": [
            "member"
        ],
        "difficulty": "medium",
        "definition": "One of the persons who compose a social group (especially individuals who have joined and participate in a group organization).",
        "sentence": "The library was a member of the interlibrary loan association.",
        "partOfSpeech": "noun"
    },
    {
        "word": "details",
        "valid": [
            "details"
        ],
        "difficulty": "medium",
        "definition": "True confidential information.",
        "sentence": "After the trial he gave us the real details.",
        "partOfSpeech": "noun"
    },
    {
        "word": "line",
        "valid": [
            "line"
        ],
        "difficulty": "easy",
        "definition": "A formation of people or things one beside another.",
        "sentence": "He's not in my line of business.",
        "partOfSpeech": "noun"
    },
    {
        "word": "terms",
        "valid": [
            "terms"
        ],
        "difficulty": "easy",
        "definition": "Status with respect to the relations between people or groups.",
        "sentence": "He got his new car on excellent terms.",
        "partOfSpeech": "noun"
    },
    {
        "word": "before",
        "valid": [
            "before"
        ],
        "difficulty": "medium",
        "definition": "Earlier in time; previously.",
        "sentence": "I had known her before.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "hotels",
        "valid": [
            "hotels"
        ],
        "difficulty": "medium",
        "definition": "Form of hotel: a building where travelers can pay for lodging and meals and other services.",
        "sentence": "Where's the information center for hotels?",
        "partOfSpeech": "noun"
    },
    {
        "word": "did",
        "valid": [
            "did"
        ],
        "difficulty": "easy",
        "definition": "Past tense of 'do'.",
        "sentence": "How long did you stay?",
        "partOfSpeech": "verb"
    },
    {
        "word": "send",
        "valid": [
            "send"
        ],
        "difficulty": "easy",
        "definition": "Cause to go somewhere.",
        "sentence": "Send me your latest results.",
        "partOfSpeech": "verb"
    },
    {
        "word": "right",
        "valid": [
            "right"
        ],
        "difficulty": "easy",
        "definition": "An abstract idea of that which is due to a person or governmental body by law or tradition or nature; \"Certain rights can never be granted to the government but must be kept in the hands of the people\"- Eleanor Roosevelt; \"a right is not something that somebody gives you; it is something that nobody can take away\".",
        "sentence": "Take a right at the corner.",
        "partOfSpeech": "noun"
    },
    {
        "word": "type",
        "valid": [
            "type"
        ],
        "difficulty": "easy",
        "definition": "A subdivision of a particular kind of thing.",
        "sentence": "He dropped a case of type, so they made him pick them up.",
        "partOfSpeech": "noun"
    },
    {
        "word": "because",
        "valid": [
            "because"
        ],
        "difficulty": "medium",
        "definition": "By or for the cause that; on this account that; for the reason that. Milton. 2. In order that; that. [Obs.] And the multitude rebuked them because they should hold their peace.",
        "sentence": "It's because you don't want to be alone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "local",
        "valid": [
            "local"
        ],
        "difficulty": "easy",
        "definition": "Public transport consisting of a bus or train that stops at all stations or stops.",
        "sentence": "The local seemed to take forever to get to New York.",
        "partOfSpeech": "noun"
    },
    {
        "word": "those",
        "valid": [
            "those"
        ],
        "difficulty": "easy",
        "definition": "The plural of that. See That.",
        "sentence": "Those who live in glass houses should not throw stones.",
        "partOfSpeech": "noun"
    },
    {
        "word": "using",
        "valid": [
            "using"
        ],
        "difficulty": "easy",
        "definition": "An act that exploits or victimizes someone (treats them unfairly).",
        "sentence": "I am against using death as a punishment. I am also against using it as a reward.",
        "partOfSpeech": "noun"
    },
    {
        "word": "results",
        "valid": [
            "results"
        ],
        "difficulty": "medium",
        "definition": "Form of result: a phenomenon that follows and is caused by some previous phenomenon.",
        "sentence": "You must inform your superior of the results.",
        "partOfSpeech": "noun"
    },
    {
        "word": "office",
        "valid": [
            "office"
        ],
        "difficulty": "medium",
        "definition": "Place of business where professional or clerical duties are performed.",
        "sentence": "He rented an office in the new building.",
        "partOfSpeech": "noun"
    },
    {
        "word": "education",
        "valid": [
            "education"
        ],
        "difficulty": "hard",
        "definition": "The activities of educating or instructing; activities that impart knowledge or skill.",
        "sentence": "He received no formal education.",
        "partOfSpeech": "noun"
    },
    {
        "word": "national",
        "valid": [
            "national"
        ],
        "difficulty": "hard",
        "definition": "A person who owes allegiance to that nation.",
        "sentence": "The national government.",
        "partOfSpeech": "noun"
    },
    {
        "word": "car",
        "valid": [
            "car"
        ],
        "difficulty": "easy",
        "definition": "A motor vehicle with four wheels; usually propelled by an internal combustion engine.",
        "sentence": "They took a cable car to the top of the mountain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "design",
        "valid": [
            "design"
        ],
        "difficulty": "medium",
        "definition": "The act of working out the form of something (as by making a sketch or outline or plan).",
        "sentence": "He contributed to the design of a new instrument.",
        "partOfSpeech": "noun"
    },
    {
        "word": "take",
        "valid": [
            "take"
        ],
        "difficulty": "easy",
        "definition": "The income or profit arising from such transactions as the sale of land or other property.",
        "sentence": "Take the gun from your pocket.",
        "partOfSpeech": "noun"
    },
    {
        "word": "posted",
        "valid": [
            "posted"
        ],
        "difficulty": "medium",
        "definition": "Publicly displayed.",
        "sentence": "The posted speed limit.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "internet",
        "valid": [
            "internet"
        ],
        "difficulty": "hard",
        "definition": "A computer network consisting of a worldwide network of computer networks that use the TCP/IP network protocols to facilitate data transmission and exchange.",
        "sentence": "It is easier to hit on people on the Internet than in the street.",
        "partOfSpeech": "noun"
    },
    {
        "word": "address",
        "valid": [
            "address"
        ],
        "difficulty": "medium",
        "definition": "The code that identifies where a piece of information is stored.",
        "sentence": "He failed in his manner of address to the captain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "community",
        "valid": [
            "community"
        ],
        "difficulty": "hard",
        "definition": "A group of people living in a particular local area.",
        "sentence": "He was well known throughout the Catholic community.",
        "partOfSpeech": "noun"
    },
    {
        "word": "within",
        "valid": [
            "within"
        ],
        "difficulty": "medium",
        "definition": "On the inside.",
        "sentence": "You must cut down on extra expenses in order to live within your means.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "states",
        "valid": [
            "states"
        ],
        "difficulty": "medium",
        "definition": "Form of state: the territory occupied by one of the constituent administrative districts of a nation.",
        "sentence": "This will be a good souvenir of my trip around the United States.",
        "partOfSpeech": "noun"
    },
    {
        "word": "area",
        "valid": [
            "area"
        ],
        "difficulty": "easy",
        "definition": "A particular geographical region of indefinite boundary (usually serving some special purpose or distinguished by its people or culture or geography).",
        "sentence": "The spacious cooking area provided plenty of room for servants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "want",
        "valid": [
            "want"
        ],
        "difficulty": "easy",
        "definition": "A state of extreme poverty.",
        "sentence": "For want of a nail the shoe was lost.",
        "partOfSpeech": "noun"
    },
    {
        "word": "phone",
        "valid": [
            "phone"
        ],
        "difficulty": "easy",
        "definition": "Electronic equipment that converts sound into electrical signals that can be transmitted over distances and then converts received signals back into sounds.",
        "sentence": "Where can one make a phone call?",
        "partOfSpeech": "noun"
    },
    {
        "word": "dvd",
        "valid": [
            "dvd"
        ],
        "difficulty": "easy",
        "definition": "A digital recording (as of a movie) on an optical disk that can be played on a computer or a television set.",
        "sentence": "Is this your DVD?",
        "partOfSpeech": "noun"
    },
    {
        "word": "shipping",
        "valid": [
            "shipping"
        ],
        "difficulty": "hard",
        "definition": "The commercial enterprise of moving goods and materials.",
        "sentence": "I work for a shipping company.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reserved",
        "valid": [
            "reserved"
        ],
        "difficulty": "hard",
        "definition": "Set aside for the use of a particular person or party.",
        "sentence": "We have reserved a lot of food for emergencies.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "subject",
        "valid": [
            "subject"
        ],
        "difficulty": "medium",
        "definition": "The subject matter of a conversation or discussion.",
        "sentence": "A moving picture of a train is more dramatic than a still picture of the same subject.",
        "partOfSpeech": "noun"
    },
    {
        "word": "between",
        "valid": [
            "between"
        ],
        "difficulty": "medium",
        "definition": "In the interval.",
        "sentence": "Two houses with a tree between.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "forum",
        "valid": [
            "forum"
        ],
        "difficulty": "easy",
        "definition": "A public meeting or assembly for open discussion.",
        "sentence": "This movement is like a forum or platform from which feminists speak out on women's issues.",
        "partOfSpeech": "noun"
    },
    {
        "word": "family",
        "valid": [
            "family"
        ],
        "difficulty": "medium",
        "definition": "A social unit living together.",
        "sentence": "He wanted to have a good job before starting a family.",
        "partOfSpeech": "noun"
    },
    {
        "word": "long",
        "valid": [
            "long"
        ],
        "difficulty": "easy",
        "definition": "Measuring a great distance from end to end.",
        "sentence": "Long on brains.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "based",
        "valid": [
            "based"
        ],
        "difficulty": "easy",
        "definition": "Having a base.",
        "sentence": "A locally based business.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "code",
        "valid": [
            "code"
        ],
        "difficulty": "easy",
        "definition": "A set of rules or principles or laws (especially written ones).",
        "sentence": "Code the pieces with numbers so that you can identify them later.",
        "partOfSpeech": "noun"
    },
    {
        "word": "show",
        "valid": [
            "show"
        ],
        "difficulty": "easy",
        "definition": "The act of publicly exhibiting or entertaining.",
        "sentence": "A remarkable show of skill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "even",
        "valid": [
            "even"
        ],
        "difficulty": "easy",
        "definition": "The latter part of the day (the period of decreasing daylight from late afternoon until nightfall).",
        "sentence": "Even out the surface.",
        "partOfSpeech": "noun"
    },
    {
        "word": "black",
        "valid": [
            "black"
        ],
        "difficulty": "easy",
        "definition": "The quality or state of the achromatic color of least lightness (bearing the least resemblance to white).",
        "sentence": "The widow wore black.",
        "partOfSpeech": "noun"
    },
    {
        "word": "check",
        "valid": [
            "check"
        ],
        "difficulty": "easy",
        "definition": "A written order directing a bank to pay money.",
        "sentence": "They made a check of their equipment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "special",
        "valid": [
            "special"
        ],
        "difficulty": "medium",
        "definition": "A special offering (usually temporary and at a reduced price) that is featured in advertising.",
        "sentence": "They are having a special on pork chops.",
        "partOfSpeech": "noun"
    },
    {
        "word": "prices",
        "valid": [
            "prices"
        ],
        "difficulty": "medium",
        "definition": "Form of price: the property of having material worth (often indicated by the amount of money something would bring if sold).",
        "sentence": "Prices have been gradually rising in recent years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "website",
        "valid": [
            "website"
        ],
        "difficulty": "medium",
        "definition": "A computer connected to the internet that maintains a series of web pages on the World Wide Web.",
        "sentence": "First, I'm going to do an outline of my new website.",
        "partOfSpeech": "noun"
    },
    {
        "word": "index",
        "valid": [
            "index"
        ],
        "difficulty": "easy",
        "definition": "A numerical scale used to compare variables with one another or with some reference number.",
        "sentence": "Index the book.",
        "partOfSpeech": "noun"
    },
    {
        "word": "being",
        "valid": [
            "being"
        ],
        "difficulty": "easy",
        "definition": "The state or fact of existing.",
        "sentence": "A point of view gradually coming into being.",
        "partOfSpeech": "noun"
    },
    {
        "word": "women",
        "valid": [
            "women"
        ],
        "difficulty": "easy",
        "definition": "Pl. of Woman.",
        "sentence": "What would the world be without women?",
        "partOfSpeech": "noun"
    },
    {
        "word": "much",
        "valid": [
            "much"
        ],
        "difficulty": "easy",
        "definition": "A great amount or extent.",
        "sentence": "They did much for humanity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sign",
        "valid": [
            "sign"
        ],
        "difficulty": "easy",
        "definition": "A perceptible indication of something not immediately apparent (as a visible clue that something has happened).",
        "sentence": "Don't forget the minus sign.",
        "partOfSpeech": "noun"
    },
    {
        "word": "file",
        "valid": [
            "file"
        ],
        "difficulty": "easy",
        "definition": "A set of related records (either written or electronic) kept together.",
        "sentence": "File these bills, please.",
        "partOfSpeech": "noun"
    },
    {
        "word": "link",
        "valid": [
            "link"
        ],
        "difficulty": "easy",
        "definition": "The means of connection between things linked in series.",
        "sentence": "Link arms.",
        "partOfSpeech": "noun"
    },
    {
        "word": "open",
        "valid": [
            "open"
        ],
        "difficulty": "easy",
        "definition": "A clear or unobstructed space or expanse of land or water.",
        "sentence": "All the reports were out in the open.",
        "partOfSpeech": "noun"
    },
    {
        "word": "today",
        "valid": [
            "today"
        ],
        "difficulty": "easy",
        "definition": "The present time or age.",
        "sentence": "Today is beautiful.",
        "partOfSpeech": "noun"
    },
    {
        "word": "technology",
        "valid": [
            "technology"
        ],
        "difficulty": "expert",
        "definition": "The application of the knowledge and usage of tools (such as machines or utensils) and techniques to control one's environment.",
        "sentence": "The mastery of fire was a huge advance in human technology.",
        "partOfSpeech": "noun"
    },
    {
        "word": "south",
        "valid": [
            "south"
        ],
        "difficulty": "easy",
        "definition": "The region of the United States lying to the south of the Mason-Dixon line.",
        "sentence": "The south entrance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "case",
        "valid": [
            "case"
        ],
        "difficulty": "easy",
        "definition": "An occurrence of something.",
        "sentence": "For English, a compositor will ordinarily have two such cases, the upper case containing the capitals and the lower case containing the small letters.",
        "partOfSpeech": "noun"
    },
    {
        "word": "project",
        "valid": [
            "project"
        ],
        "difficulty": "medium",
        "definition": "Any piece of work that is undertaken or attempted.",
        "sentence": "Project a missile.",
        "partOfSpeech": "noun"
    },
    {
        "word": "same",
        "valid": [
            "same"
        ],
        "difficulty": "easy",
        "definition": "A member of an indigenous nomadic people living in northern Scandinavia and herding reindeer.",
        "sentence": "The same amount.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pages",
        "valid": [
            "pages"
        ],
        "difficulty": "easy",
        "definition": "Form of page: one side of one leaf (of a book or magazine or newspaper or letter etc.) or the written or pictorial matter it contains.",
        "sentence": "It took me more than two hours to translate a few pages of English.",
        "partOfSpeech": "noun"
    },
    {
        "word": "version",
        "valid": [
            "version"
        ],
        "difficulty": "medium",
        "definition": "An interpretation of a matter from a particular viewpoint.",
        "sentence": "An experimental version of the night fighter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "section",
        "valid": [
            "section"
        ],
        "difficulty": "medium",
        "definition": "A self-contained part of a larger composition (written or musical).",
        "sentence": "A section of a fishing rod.",
        "partOfSpeech": "noun"
    },
    {
        "word": "own",
        "valid": [
            "own"
        ],
        "difficulty": "easy",
        "definition": "Have ownership or possession of.",
        "sentence": "Most people only want to hear their own truth.",
        "partOfSpeech": "verb"
    },
    {
        "word": "found",
        "valid": [
            "found"
        ],
        "difficulty": "easy",
        "definition": "Food and lodging provided in addition to money.",
        "sentence": "They worked for $30 and found.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sports",
        "valid": [
            "sports"
        ],
        "difficulty": "medium",
        "definition": "Form of sport: an active diversion requiring physical exertion and competition.",
        "sentence": "What kinds of sports do you go in for these days?",
        "partOfSpeech": "noun"
    },
    {
        "word": "house",
        "valid": [
            "house"
        ],
        "difficulty": "easy",
        "definition": "A dwelling that serves as living quarters for one or more families.",
        "sentence": "The children were playing house.",
        "partOfSpeech": "noun"
    },
    {
        "word": "related",
        "valid": [
            "related"
        ],
        "difficulty": "medium",
        "definition": "Being connected either logically or causally or by shared characteristics.",
        "sentence": "Painting and the related arts.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "security",
        "valid": [
            "security"
        ],
        "difficulty": "hard",
        "definition": "The state of being free from danger or injury.",
        "sentence": "Military security has been stepped up since the recent uprising.",
        "partOfSpeech": "noun"
    },
    {
        "word": "both",
        "valid": [
            "both"
        ],
        "difficulty": "easy",
        "definition": "Two considered together; the two.",
        "sentence": "I'll get something to drink for both of you.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "county",
        "valid": [
            "county"
        ],
        "difficulty": "medium",
        "definition": "(United Kingdom) a region created by territorial division for the purpose of local government.",
        "sentence": "The county has a population of 12,345 people.",
        "partOfSpeech": "noun"
    },
    {
        "word": "photo",
        "valid": [
            "photo"
        ],
        "difficulty": "easy",
        "definition": "A representation of a person or scene in the form of a print or transparent slide or in digital format.",
        "sentence": "When you're beginning to look like the photo in your passport, you should go on a holiday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "game",
        "valid": [
            "game"
        ],
        "difficulty": "easy",
        "definition": "A contest with rules to determine a winner.",
        "sentence": "He thought of his painting as a game that filled his empty time.",
        "partOfSpeech": "noun"
    },
    {
        "word": "members",
        "valid": [
            "members"
        ],
        "difficulty": "medium",
        "definition": "Form of member: one of the persons who compose a social group (especially individuals who have joined and participate in a group organization).",
        "sentence": "Many members dropped out of the club when the dues were raised.",
        "partOfSpeech": "noun"
    },
    {
        "word": "power",
        "valid": [
            "power"
        ],
        "difficulty": "easy",
        "definition": "Possession of controlling influence.",
        "sentence": "The deterrent power of nuclear weapons.",
        "partOfSpeech": "noun"
    },
    {
        "word": "while",
        "valid": [
            "while"
        ],
        "difficulty": "easy",
        "definition": "A period of indeterminate length (usually short) marked by some action or condition.",
        "sentence": "He was here for a little while.",
        "partOfSpeech": "noun"
    },
    {
        "word": "care",
        "valid": [
            "care"
        ],
        "difficulty": "easy",
        "definition": "The work of providing treatment for or attending to someone or something.",
        "sentence": "He wrote the manual on car care.",
        "partOfSpeech": "noun"
    },
    {
        "word": "network",
        "valid": [
            "network"
        ],
        "difficulty": "medium",
        "definition": "An interconnected system of things or people.",
        "sentence": "A railroad network.",
        "partOfSpeech": "noun"
    },
    {
        "word": "down",
        "valid": [
            "down"
        ],
        "difficulty": "easy",
        "definition": "Toward or in a lower place or position.",
        "sentence": "Some people can down a pound of meat in the course of one meal.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "computer",
        "valid": [
            "computer"
        ],
        "difficulty": "hard",
        "definition": "A machine for performing calculations automatically.",
        "sentence": "My computer has got to be useful for something.",
        "partOfSpeech": "noun"
    },
    {
        "word": "systems",
        "valid": [
            "systems"
        ],
        "difficulty": "medium",
        "definition": "Form of system: instrumentality that combines interrelated interacting artifacts designed to work as a coherent entity.",
        "sentence": "The elevators in a skyscraper are vital systems.",
        "partOfSpeech": "noun"
    },
    {
        "word": "three",
        "valid": [
            "three"
        ],
        "difficulty": "easy",
        "definition": "The cardinal number that is the sum of one and one and one.",
        "sentence": "Excuse me; allow me to point out three errors in the above article.",
        "partOfSpeech": "noun"
    },
    {
        "word": "total",
        "valid": [
            "total"
        ],
        "difficulty": "easy",
        "definition": "The whole amount.",
        "sentence": "A total failure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "place",
        "valid": [
            "place"
        ],
        "difficulty": "easy",
        "definition": "A point located with respect to surface features of some region.",
        "sentence": "Took his place.",
        "partOfSpeech": "noun"
    },
    {
        "word": "end",
        "valid": [
            "end"
        ],
        "difficulty": "easy",
        "definition": "Either extremity of something that has length.",
        "sentence": "No one wanted to play end.",
        "partOfSpeech": "noun"
    },
    {
        "word": "following",
        "valid": [
            "following"
        ],
        "difficulty": "hard",
        "definition": "A group of followers or enthusiasts.",
        "sentence": "The following day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "download",
        "valid": [
            "download"
        ],
        "difficulty": "hard",
        "definition": "Transfer a file or program from a central computer to a smaller computer or to a computer at a remote location.",
        "sentence": "If you do not have this program, you can download it now.",
        "partOfSpeech": "verb"
    },
    {
        "word": "him",
        "valid": [
            "him"
        ],
        "difficulty": "easy",
        "definition": "Used as the object of a verb or preposition to refer to a male person.",
        "sentence": "I'm gonna shoot him.",
        "partOfSpeech": "pronoun"
    },
    {
        "word": "without",
        "valid": [
            "without"
        ],
        "difficulty": "medium",
        "definition": "On or at the outside of; out of; not within; as, without doors. Without the gate Some drive the cars, and some the coursers rein. Dryden. 2. Out of the limits of; out of reach o.",
        "sentence": "I learned to live without her.",
        "partOfSpeech": "noun"
    },
    {
        "word": "per",
        "valid": [
            "per"
        ],
        "difficulty": "easy",
        "definition": "Through; by means of; through the agency of; by; for; for each; as, per annum; per capita, by heads, or according to individuals; per curiam, by the court; per se, by itself, of it.",
        "sentence": "We can travel through time. And we do at the remarkable rate of one second per second.",
        "partOfSpeech": "noun"
    },
    {
        "word": "access",
        "valid": [
            "access"
        ],
        "difficulty": "medium",
        "definition": "The right to enter.",
        "sentence": "He gained access to the building.",
        "partOfSpeech": "noun"
    },
    {
        "word": "think",
        "valid": [
            "think"
        ],
        "difficulty": "easy",
        "definition": "An instance of deliberate thinking.",
        "sentence": "I need to give it a good think.",
        "partOfSpeech": "noun"
    },
    {
        "word": "north",
        "valid": [
            "north"
        ],
        "difficulty": "easy",
        "definition": "The region of the United States lying to the north of the Mason-Dixon line.",
        "sentence": "The North's superior resources turned the scale.",
        "partOfSpeech": "noun"
    },
    {
        "word": "resources",
        "valid": [
            "resources"
        ],
        "difficulty": "hard",
        "definition": "Form of resource: available source of wealth; a new or reserve supply that can be drawn upon when needed.",
        "sentence": "The ocean affords various kinds of resources.",
        "partOfSpeech": "noun"
    },
    {
        "word": "current",
        "valid": [
            "current"
        ],
        "difficulty": "medium",
        "definition": "A flow of electricity through a conductor.",
        "sentence": "The raft floated downstream on the current.",
        "partOfSpeech": "noun"
    },
    {
        "word": "posts",
        "valid": [
            "posts"
        ],
        "difficulty": "easy",
        "definition": "Form of post: the position where someone (as a guard or sentry) stands or is assigned to stand.",
        "sentence": "Go to your posts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "big",
        "valid": [
            "big"
        ],
        "difficulty": "easy",
        "definition": "Above average in size or number or quantity or magnitude or extent.",
        "sentence": "A big figure in the movement.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "media",
        "valid": [
            "media"
        ],
        "difficulty": "easy",
        "definition": "Form of medium: a means or instrumentality for storing or communicating information.",
        "sentence": "I had otitis media last year.",
        "partOfSpeech": "noun"
    },
    {
        "word": "law",
        "valid": [
            "law"
        ],
        "difficulty": "easy",
        "definition": "The collection of rules imposed by authority.",
        "sentence": "He studied law at Yale.",
        "partOfSpeech": "noun"
    },
    {
        "word": "control",
        "valid": [
            "control"
        ],
        "difficulty": "medium",
        "definition": "Power to direct or determine.",
        "sentence": "The control of the mob by the police was admirable.",
        "partOfSpeech": "noun"
    },
    {
        "word": "water",
        "valid": [
            "water"
        ],
        "difficulty": "easy",
        "definition": "A clear, colorless, odorless liquid essential for plant and animal life.",
        "sentence": "The town debated the purification of the water supply.",
        "partOfSpeech": "noun"
    },
    {
        "word": "history",
        "valid": [
            "history"
        ],
        "difficulty": "medium",
        "definition": "The aggregate of past events.",
        "sentence": "He teaches Medieval history.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pictures",
        "valid": [
            "pictures"
        ],
        "difficulty": "hard",
        "definition": "Form of picture: a visual representation (of an object or scene or person or abstraction) produced on a surface.",
        "sentence": "I tend to look at the pictures before reading the text.",
        "partOfSpeech": "noun"
    },
    {
        "word": "size",
        "valid": [
            "size"
        ],
        "difficulty": "easy",
        "definition": "The physical magnitude of something (how big it is).",
        "sentence": "He wears a size 13 shoe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "art",
        "valid": [
            "art"
        ],
        "difficulty": "easy",
        "definition": "The products of human creativity; works of art collectively.",
        "sentence": "Art does not need to be innovative to be good.",
        "partOfSpeech": "noun"
    },
    {
        "word": "personal",
        "valid": [
            "personal"
        ],
        "difficulty": "hard",
        "definition": "A short newspaper article about a particular person or group.",
        "sentence": "A personal favor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "since",
        "valid": [
            "since"
        ],
        "difficulty": "easy",
        "definition": "From a definite past time until now; as, he went a month ago, and I have not seen him since. We since become the slaves to one man's lust. B. Jonson. 2. In the time past, counti.",
        "sentence": "I don't know how to demonstrate it, since it's too obvious!",
        "partOfSpeech": "noun"
    },
    {
        "word": "including",
        "valid": [
            "including"
        ],
        "difficulty": "hard",
        "definition": "Form of include: have as a part, be made up out of.",
        "sentence": "An astute reader should be willing to weigh everything they read, including anonymous sources.",
        "partOfSpeech": "verb"
    },
    {
        "word": "guide",
        "valid": [
            "guide"
        ],
        "difficulty": "easy",
        "definition": "Someone employed to conduct others.",
        "sentence": "They had the lights to guide on.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shop",
        "valid": [
            "shop"
        ],
        "difficulty": "easy",
        "definition": "A mercantile establishment for the retail sale of goods or services.",
        "sentence": "I built a birdhouse in shop.",
        "partOfSpeech": "noun"
    },
    {
        "word": "directory",
        "valid": [
            "directory"
        ],
        "difficulty": "hard",
        "definition": "An alphabetical list of names and addresses.",
        "sentence": "I looked up his telephone number in a telephone directory.",
        "partOfSpeech": "noun"
    },
    {
        "word": "board",
        "valid": [
            "board"
        ],
        "difficulty": "easy",
        "definition": "A committee having supervisory powers.",
        "sentence": "He got out the board and set up the pieces.",
        "partOfSpeech": "noun"
    },
    {
        "word": "location",
        "valid": [
            "location"
        ],
        "difficulty": "hard",
        "definition": "A point or extent in space.",
        "sentence": "They shot the film on location in Nevada.",
        "partOfSpeech": "noun"
    },
    {
        "word": "change",
        "valid": [
            "change"
        ],
        "difficulty": "medium",
        "definition": "An event that occurs when something passes from one state or phase to another.",
        "sentence": "The change of government had no impact on the economy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "white",
        "valid": [
            "white"
        ],
        "difficulty": "easy",
        "definition": "A Caucasian.",
        "sentence": "Voting patterns within the white population.",
        "partOfSpeech": "noun"
    },
    {
        "word": "text",
        "valid": [
            "text"
        ],
        "difficulty": "easy",
        "definition": "The words of something written.",
        "sentence": "There were more than a thousand words of text.",
        "partOfSpeech": "noun"
    },
    {
        "word": "small",
        "valid": [
            "small"
        ],
        "difficulty": "easy",
        "definition": "The slender part of the back.",
        "sentence": "Her comments made me feel small.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rating",
        "valid": [
            "rating"
        ],
        "difficulty": "medium",
        "definition": "An appraisal of the value of something.",
        "sentence": "The thought of rating people by attractiveness does not seem fair to me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rate",
        "valid": [
            "rate"
        ],
        "difficulty": "easy",
        "definition": "A magnitude or frequency relative to a time unit.",
        "sentence": "He works at a great rate.",
        "partOfSpeech": "noun"
    },
    {
        "word": "government",
        "valid": [
            "government"
        ],
        "difficulty": "expert",
        "definition": "The organization that is the governing authority of a political unit.",
        "sentence": "He had considerable experience of government.",
        "partOfSpeech": "noun"
    },
    {
        "word": "children",
        "valid": [
            "children"
        ],
        "difficulty": "hard",
        "definition": "Form of child: a young person of either sex.",
        "sentence": "Half a million children still face malnutrition in Niger.",
        "partOfSpeech": "noun"
    },
    {
        "word": "during",
        "valid": [
            "during"
        ],
        "difficulty": "medium",
        "definition": "In the time of; as long as the action or existence of; as, during life; during the space of a year.",
        "sentence": "I slept a little during lunch break because I was so tired.",
        "partOfSpeech": "noun"
    },
    {
        "word": "usa",
        "valid": [
            "usa"
        ],
        "difficulty": "easy",
        "definition": "North American republic containing 50 states - 48 conterminous states in North America plus Alaska in northwest North America and the Hawaiian Islands in the Pacific Ocean; achieved independence in 1776.",
        "sentence": "I'd like to drive across the USA in a convertible car.",
        "partOfSpeech": "noun"
    },
    {
        "word": "return",
        "valid": [
            "return"
        ],
        "difficulty": "medium",
        "definition": "Document giving the tax collector information about the taxpayer's tax liability.",
        "sentence": "On his return from Australia we gave him a welcoming party.",
        "partOfSpeech": "noun"
    },
    {
        "word": "students",
        "valid": [
            "students"
        ],
        "difficulty": "hard",
        "definition": "Form of student: a learner who is enrolled in an educational institution.",
        "sentence": "Ms. Eichler had a notorious reputation for being austere to her students.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shopping",
        "valid": [
            "shopping"
        ],
        "difficulty": "hard",
        "definition": "Searching for or buying goods or services.",
        "sentence": "Went shopping for a reliable plumber.",
        "partOfSpeech": "noun"
    },
    {
        "word": "account",
        "valid": [
            "account"
        ],
        "difficulty": "medium",
        "definition": "A record or narrative description of past events.",
        "sentence": "She turned her writing skills to good account.",
        "partOfSpeech": "noun"
    },
    {
        "word": "times",
        "valid": [
            "times"
        ],
        "difficulty": "easy",
        "definition": "A more or less definite period of time now or previously present.",
        "sentence": "Four times three equals twelve.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sites",
        "valid": [
            "sites"
        ],
        "difficulty": "easy",
        "definition": "Form of sit: be seated.",
        "sentence": "How many new sites were uncovered?",
        "partOfSpeech": "verb"
    },
    {
        "word": "level",
        "valid": [
            "level"
        ],
        "difficulty": "easy",
        "definition": "A position on a scale of intensity or amount or quality.",
        "sentence": "What level is the office on?",
        "partOfSpeech": "noun"
    },
    {
        "word": "digital",
        "valid": [
            "digital"
        ],
        "difficulty": "medium",
        "definition": "Displaying numbers rather than scale positions.",
        "sentence": "Digital computer.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "profile",
        "valid": [
            "profile"
        ],
        "difficulty": "medium",
        "definition": "An analysis (often in graphical form) representing the extent to which something exhibits various characteristics.",
        "sentence": "A biochemical profile of blood.",
        "partOfSpeech": "noun"
    },
    {
        "word": "previous",
        "valid": [
            "previous"
        ],
        "difficulty": "hard",
        "definition": "Just preceding something else in time or order.",
        "sentence": "I would like to retract my previous statement.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "form",
        "valid": [
            "form"
        ],
        "difficulty": "easy",
        "definition": "The phonological or orthographic sound or appearance of a word that can be used to describe or identify something.",
        "sentence": "His resentment took the form of extreme hostility.",
        "partOfSpeech": "noun"
    },
    {
        "word": "events",
        "valid": [
            "events"
        ],
        "difficulty": "medium",
        "definition": "Form of event: something that happens at a given place and time.",
        "sentence": "A chain of events led to the outbreak of the war.",
        "partOfSpeech": "noun"
    },
    {
        "word": "love",
        "valid": [
            "love"
        ],
        "difficulty": "easy",
        "definition": "A strong positive emotion of regard and affection.",
        "sentence": "He hadn't had any love in months.",
        "partOfSpeech": "noun"
    },
    {
        "word": "old",
        "valid": [
            "old"
        ],
        "difficulty": "easy",
        "definition": "Past times (especially in the phrase `in days of old').",
        "sentence": "My old house was larger.",
        "partOfSpeech": "noun"
    },
    {
        "word": "main",
        "valid": [
            "main"
        ],
        "difficulty": "easy",
        "definition": "Any very large body of (salt) water.",
        "sentence": "What is the main purpose of your studying English?",
        "partOfSpeech": "noun"
    },
    {
        "word": "call",
        "valid": [
            "call"
        ],
        "difficulty": "easy",
        "definition": "To give a specified name to; to speak in a loud voice.",
        "sentence": "He was ejected for protesting the call.",
        "partOfSpeech": "verb"
    },
    {
        "word": "hours",
        "valid": [
            "hours"
        ],
        "difficulty": "easy",
        "definition": "A period of time assigned for work.",
        "sentence": "They talked for hours.",
        "partOfSpeech": "noun"
    },
    {
        "word": "image",
        "valid": [
            "image"
        ],
        "difficulty": "easy",
        "definition": "An iconic mental representation.",
        "sentence": "The emperor's tomb had his image carved in stone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "department",
        "valid": [
            "department"
        ],
        "difficulty": "expert",
        "definition": "A specialized division of a large organization.",
        "sentence": "Baking is not my department.",
        "partOfSpeech": "noun"
    },
    {
        "word": "title",
        "valid": [
            "title"
        ],
        "difficulty": "easy",
        "definition": "A heading that names a statute or legislative bill; may give a brief summary of the matters it deals with.",
        "sentence": "His title to fame.",
        "partOfSpeech": "noun"
    },
    {
        "word": "description",
        "valid": [
            "description"
        ],
        "difficulty": "expert",
        "definition": "A statement that represents something in words.",
        "sentence": "Every description of book was there.",
        "partOfSpeech": "noun"
    },
    {
        "word": "non",
        "valid": [
            "non"
        ],
        "difficulty": "easy",
        "definition": "Negation of a word or group of words.",
        "sentence": "Smoking or non smoking?",
        "partOfSpeech": "adverb"
    },
    {
        "word": "insurance",
        "valid": [
            "insurance"
        ],
        "difficulty": "hard",
        "definition": "Promise of reimbursement in the case of loss; paid to people or companies so concerned about hazards that they have made prepayments to an insurance company.",
        "sentence": "Our insurance policy covers various kinds of damages.",
        "partOfSpeech": "noun"
    },
    {
        "word": "another",
        "valid": [
            "another"
        ],
        "difficulty": "medium",
        "definition": "Any of various alternatives; some other.",
        "sentence": "I told them to send me another ticket.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "why",
        "valid": [
            "why"
        ],
        "difficulty": "easy",
        "definition": "The cause or intention underlying an action or situation, especially in the phrase `the whys and wherefores'.",
        "sentence": "Why do you ask?",
        "partOfSpeech": "noun"
    },
    {
        "word": "shall",
        "valid": [
            "shall"
        ],
        "difficulty": "easy",
        "definition": "To owe; to be under obligation for. [Obs.] \"By the faith I shall to God\" Court of Love. 2. To be obliged; must. [Obs.] \"Me athinketh [I am sorry] that I shall rehearse it her.\".",
        "sentence": "You shall have a bicycle for your birthday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "property",
        "valid": [
            "property"
        ],
        "difficulty": "hard",
        "definition": "Something owned; any tangible or intangible possession that is owned by someone.",
        "sentence": "Self-confidence is not an endearing property.",
        "partOfSpeech": "noun"
    },
    {
        "word": "class",
        "valid": [
            "class"
        ],
        "difficulty": "easy",
        "definition": "A collection of things sharing a common attribute.",
        "sentence": "She has a lot of class.",
        "partOfSpeech": "noun"
    },
    {
        "word": "still",
        "valid": [
            "still"
        ],
        "difficulty": "easy",
        "definition": "A static photograph (especially one taken from a movie and used for advertising purposes).",
        "sentence": "The still of the night.",
        "partOfSpeech": "noun"
    },
    {
        "word": "money",
        "valid": [
            "money"
        ],
        "difficulty": "easy",
        "definition": "The most common medium of exchange; functions as legal tender.",
        "sentence": "All his money is in real estate.",
        "partOfSpeech": "noun"
    },
    {
        "word": "quality",
        "valid": [
            "quality"
        ],
        "difficulty": "medium",
        "definition": "An essential and distinguishing attribute of something or someone; \"the quality of mercy is not strained\"--Shakespeare.",
        "sentence": "The quality of students has risen.",
        "partOfSpeech": "noun"
    },
    {
        "word": "every",
        "valid": [
            "every"
        ],
        "difficulty": "easy",
        "definition": "Each and all of the members of a group considered singly and without exception.",
        "sentence": "Back in high school, I got up at 6 a.m. every morning.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "listing",
        "valid": [
            "listing"
        ],
        "difficulty": "medium",
        "definition": "A database containing an ordered array of items (names or topics).",
        "sentence": "The ship was listing fifteen degrees to port.",
        "partOfSpeech": "noun"
    },
    {
        "word": "content",
        "valid": [
            "content"
        ],
        "difficulty": "medium",
        "definition": "Everything that is included in a collection and that is held or included in something.",
        "sentence": "The two groups were similar in content.",
        "partOfSpeech": "noun"
    },
    {
        "word": "country",
        "valid": [
            "country"
        ],
        "difficulty": "medium",
        "definition": "A politically organized body of people under a single government.",
        "sentence": "The whole country worshipped him.",
        "partOfSpeech": "noun"
    },
    {
        "word": "private",
        "valid": [
            "private"
        ],
        "difficulty": "medium",
        "definition": "An enlisted man of the lowest rank in the Army or Marines.",
        "sentence": "Our prisoner was just a private and knew nothing of value.",
        "partOfSpeech": "noun"
    },
    {
        "word": "little",
        "valid": [
            "little"
        ],
        "difficulty": "medium",
        "definition": "A small amount or duration.",
        "sentence": "He accepted the little they gave him.",
        "partOfSpeech": "noun"
    },
    {
        "word": "visit",
        "valid": [
            "visit"
        ],
        "difficulty": "easy",
        "definition": "The act of going to see some person or place or thing for a short time.",
        "sentence": "A visit to the dentist.",
        "partOfSpeech": "noun"
    },
    {
        "word": "save",
        "valid": [
            "save"
        ],
        "difficulty": "easy",
        "definition": "The act of preventing the opposition from scoring.",
        "sentence": "The goalie made a brilliant save.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tools",
        "valid": [
            "tools"
        ],
        "difficulty": "easy",
        "definition": "Form of tool: an implement used in the practice of a vocation.",
        "sentence": "Bicycles are tools for urban sustainability.",
        "partOfSpeech": "noun"
    },
    {
        "word": "low",
        "valid": [
            "low"
        ],
        "difficulty": "easy",
        "definition": "An air mass of lower pressure; often brings precipitation.",
        "sentence": "The stock market fell to a new low.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reply",
        "valid": [
            "reply"
        ],
        "difficulty": "easy",
        "definition": "A statement (either spoken or written) that is made to reply to a question or request or criticism or accusation.",
        "sentence": "He growled his reply.",
        "partOfSpeech": "noun"
    },
    {
        "word": "customer",
        "valid": [
            "customer"
        ],
        "difficulty": "hard",
        "definition": "Someone who pays for goods or services.",
        "sentence": "The customer did not come.",
        "partOfSpeech": "noun"
    },
    {
        "word": "compare",
        "valid": [
            "compare"
        ],
        "difficulty": "medium",
        "definition": "Qualities that are comparable.",
        "sentence": "Beyond compare.",
        "partOfSpeech": "noun"
    },
    {
        "word": "movies",
        "valid": [
            "movies"
        ],
        "difficulty": "medium",
        "definition": "Form of movie: a form of entertainment that enacts a story by sound and a sequence of images giving the illusion of continuous movement.",
        "sentence": "Why do people go to the movies?",
        "partOfSpeech": "noun"
    },
    {
        "word": "include",
        "valid": [
            "include"
        ],
        "difficulty": "medium",
        "definition": "Have as a part, be made up out of.",
        "sentence": "We must include this chemical element in the group.",
        "partOfSpeech": "verb"
    },
    {
        "word": "college",
        "valid": [
            "college"
        ],
        "difficulty": "medium",
        "definition": "The body of faculty and students of a college.",
        "sentence": "Which college are you aiming for?",
        "partOfSpeech": "noun"
    },
    {
        "word": "value",
        "valid": [
            "value"
        ],
        "difficulty": "easy",
        "definition": "A numerical quantity measured or assigned or computed.",
        "sentence": "The Shakespearean Shylock is of dubious value in the modern world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "article",
        "valid": [
            "article"
        ],
        "difficulty": "medium",
        "definition": "Nonfictional prose forming an independent part of a publication.",
        "sentence": "An article of clothing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "york",
        "valid": [
            "york"
        ],
        "difficulty": "easy",
        "definition": "The English royal house (a branch of the Plantagenet line) that reigned from 1461 to 1485; its emblem was a white rose.",
        "sentence": "It is out of the question for you to go to New York this weekend.",
        "partOfSpeech": "noun"
    },
    {
        "word": "man",
        "valid": [
            "man"
        ],
        "difficulty": "easy",
        "definition": "An adult person who is male (as opposed to a woman).",
        "sentence": "She takes good care of her man.",
        "partOfSpeech": "noun"
    },
    {
        "word": "card",
        "valid": [
            "card"
        ],
        "difficulty": "easy",
        "definition": "One of a set of small pieces of stiff paper marked in various ways and used for playing games or for telling fortunes.",
        "sentence": "He had to show his card to get in.",
        "partOfSpeech": "noun"
    },
    {
        "word": "jobs",
        "valid": [
            "jobs"
        ],
        "difficulty": "easy",
        "definition": "Form of job: the principal activity in your life that you do to earn money.",
        "sentence": "You must share your jobs with others.",
        "partOfSpeech": "noun"
    },
    {
        "word": "provide",
        "valid": [
            "provide"
        ],
        "difficulty": "medium",
        "definition": "Give something useful or necessary to.",
        "sentence": "Provide for the proper care of the passengers on the cruise ship.",
        "partOfSpeech": "verb"
    },
    {
        "word": "food",
        "valid": [
            "food"
        ],
        "difficulty": "easy",
        "definition": "Any substance that can be metabolized by an animal to give energy and build tissue.",
        "sentence": "Food and drink.",
        "partOfSpeech": "noun"
    },
    {
        "word": "source",
        "valid": [
            "source"
        ],
        "difficulty": "medium",
        "definition": "The place where something begins, where it springs into being.",
        "sentence": "He spent hours looking for the source of that quotation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "author",
        "valid": [
            "author"
        ],
        "difficulty": "medium",
        "definition": "Writes (books or stories or articles or the like) professionally (for pay).",
        "sentence": "Richard Roberts is the author of numerous books.",
        "partOfSpeech": "noun"
    },
    {
        "word": "different",
        "valid": [
            "different"
        ],
        "difficulty": "hard",
        "definition": "Unlike in nature or quality or form or degree.",
        "sentence": "Advertising that strives continually to be different.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "press",
        "valid": [
            "press"
        ],
        "difficulty": "easy",
        "definition": "The state of demanding notice or attention.",
        "sentence": "He gave the button a press.",
        "partOfSpeech": "noun"
    },
    {
        "word": "learn",
        "valid": [
            "learn"
        ],
        "difficulty": "easy",
        "definition": "Gain knowledge or skills.",
        "sentence": "I thought you liked to learn new things.",
        "partOfSpeech": "verb"
    },
    {
        "word": "sale",
        "valid": [
            "sale"
        ],
        "difficulty": "easy",
        "definition": "A particular instance of selling.",
        "sentence": "He has just made his first sale.",
        "partOfSpeech": "noun"
    },
    {
        "word": "around",
        "valid": [
            "around"
        ],
        "difficulty": "medium",
        "definition": "In the area or vicinity.",
        "sentence": "Weighs around a hundred pounds.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "print",
        "valid": [
            "print"
        ],
        "difficulty": "easy",
        "definition": "The text appearing in a book, newspaper, or other printed publication.",
        "sentence": "We've got to get that story into print.",
        "partOfSpeech": "noun"
    },
    {
        "word": "course",
        "valid": [
            "course"
        ],
        "difficulty": "medium",
        "definition": "Education imparted in a series of lessons or meetings.",
        "sentence": "If you persist in that course you will surely fail.",
        "partOfSpeech": "noun"
    },
    {
        "word": "job",
        "valid": [
            "job"
        ],
        "difficulty": "easy",
        "definition": "The principal activity in your life that you do to earn money.",
        "sentence": "Dry rot did the job of destroying the barn.",
        "partOfSpeech": "noun"
    },
    {
        "word": "process",
        "valid": [
            "process"
        ],
        "difficulty": "medium",
        "definition": "A particular course of action intended to achieve a result.",
        "sentence": "Events now in process.",
        "partOfSpeech": "noun"
    },
    {
        "word": "teen",
        "valid": [
            "teen"
        ],
        "difficulty": "easy",
        "definition": "A juvenile between the onset of puberty and maturity.",
        "sentence": "The teen years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "room",
        "valid": [
            "room"
        ],
        "difficulty": "easy",
        "definition": "An area within a building enclosed by walls and floor and ceiling.",
        "sentence": "The whole room was cheering.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stock",
        "valid": [
            "stock"
        ],
        "difficulty": "easy",
        "definition": "The capital raised by a corporation through the issue of shares entitling holders to an ownership interest (equity).",
        "sentence": "He grabbed the cue by the stock.",
        "partOfSpeech": "noun"
    },
    {
        "word": "training",
        "valid": [
            "training"
        ],
        "difficulty": "hard",
        "definition": "Activity leading to skilled behavior.",
        "sentence": "I was given training in that school.",
        "partOfSpeech": "noun"
    },
    {
        "word": "too",
        "valid": [
            "too"
        ],
        "difficulty": "easy",
        "definition": "To a degree exceeding normal or proper limits.",
        "sentence": "Too big.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "credit",
        "valid": [
            "credit"
        ],
        "difficulty": "medium",
        "definition": "Approval.",
        "sentence": "She already had several performances to her credit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "point",
        "valid": [
            "point"
        ],
        "difficulty": "easy",
        "definition": "A geometric element that has position but no extension.",
        "sentence": "He stuck the point of the knife into a tree.",
        "partOfSpeech": "noun"
    },
    {
        "word": "join",
        "valid": [
            "join"
        ],
        "difficulty": "easy",
        "definition": "The shape or manner in which things come together and a connection is made.",
        "sentence": "The two roads join here.",
        "partOfSpeech": "noun"
    },
    {
        "word": "science",
        "valid": [
            "science"
        ],
        "difficulty": "medium",
        "definition": "A particular branch of scientific knowledge.",
        "sentence": "The sweet science of pugilism.",
        "partOfSpeech": "noun"
    },
    {
        "word": "men",
        "valid": [
            "men"
        ],
        "difficulty": "easy",
        "definition": "The force of workers available.",
        "sentence": "Why would you marry a woman if you like men?",
        "partOfSpeech": "noun"
    },
    {
        "word": "categories",
        "valid": [
            "categories"
        ],
        "difficulty": "expert",
        "definition": "Form of category: a collection of things sharing a common attribute.",
        "sentence": "Why people fall into these categories, however, is a mystery.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advanced",
        "valid": [
            "advanced"
        ],
        "difficulty": "hard",
        "definition": "Farther along in physical or mental development.",
        "sentence": "Advanced societies.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "west",
        "valid": [
            "west"
        ],
        "difficulty": "easy",
        "definition": "The countries of (originally) Europe and (now including) North America and South America.",
        "sentence": "We moved west to Arizona.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sales",
        "valid": [
            "sales"
        ],
        "difficulty": "easy",
        "definition": "Income (at invoice values) received for goods and services over some given period of time.",
        "sentence": "The company is turning to export markets to make up for a decline in domestic sales.",
        "partOfSpeech": "noun"
    },
    {
        "word": "look",
        "valid": [
            "look"
        ],
        "difficulty": "easy",
        "definition": "To direct one's eyes toward someone or something.",
        "sentence": "He went out to have a look.",
        "partOfSpeech": "verb"
    },
    {
        "word": "left",
        "valid": [
            "left"
        ],
        "difficulty": "easy",
        "definition": "Location near or direction toward the left side; i.e. the side to the north when a person or object faces east.",
        "sentence": "Take a left at the corner.",
        "partOfSpeech": "noun"
    },
    {
        "word": "team",
        "valid": [
            "team"
        ],
        "difficulty": "easy",
        "definition": "A cooperative unit (especially in sports).",
        "sentence": "Every time I join a new game of Warcraft, I am pitted against a new team of adversaries.",
        "partOfSpeech": "noun"
    },
    {
        "word": "estate",
        "valid": [
            "estate"
        ],
        "difficulty": "medium",
        "definition": "Everything you own; all of your assets (whether real property or personal property) and liabilities.",
        "sentence": "The family owned a large estate on Long Island.",
        "partOfSpeech": "noun"
    },
    {
        "word": "box",
        "valid": [
            "box"
        ],
        "difficulty": "easy",
        "definition": "A (usually rectangular) container; may have a lid.",
        "sentence": "I gave him a good box on the ear.",
        "partOfSpeech": "noun"
    },
    {
        "word": "conditions",
        "valid": [
            "conditions"
        ],
        "difficulty": "expert",
        "definition": "The prevailing context that influences the performance or the outcome of a process.",
        "sentence": "Every day we have weather conditions and yesterday was no exception.",
        "partOfSpeech": "noun"
    },
    {
        "word": "select",
        "valid": [
            "select"
        ],
        "difficulty": "medium",
        "definition": "Pick out, select, or choose from a number of alternatives.",
        "sentence": "Select peaches.",
        "partOfSpeech": "verb"
    },
    {
        "word": "windows",
        "valid": [
            "windows"
        ],
        "difficulty": "medium",
        "definition": "An operating system with a graphical user interface.",
        "sentence": "If your windows are not airtight, moisture will seep in.",
        "partOfSpeech": "noun"
    },
    {
        "word": "photos",
        "valid": [
            "photos"
        ],
        "difficulty": "medium",
        "definition": "Form of photo: a representation of a person or scene in the form of a print or transparent slide or in digital format.",
        "sentence": "Please do not take photos here.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gay",
        "valid": [
            "gay"
        ],
        "difficulty": "easy",
        "definition": "Someone who is sexually attracted to persons of the same sex.",
        "sentence": "A gay sunny room.",
        "partOfSpeech": "noun"
    },
    {
        "word": "thread",
        "valid": [
            "thread"
        ],
        "difficulty": "medium",
        "definition": "A fine cord of twisted fibers (of cotton or silk or wool or nylon etc.) used in sewing and weaving.",
        "sentence": "He lost the thread of his argument.",
        "partOfSpeech": "noun"
    },
    {
        "word": "week",
        "valid": [
            "week"
        ],
        "difficulty": "easy",
        "definition": "Any period of seven consecutive days.",
        "sentence": "They worked a 40-hour week.",
        "partOfSpeech": "noun"
    },
    {
        "word": "category",
        "valid": [
            "category"
        ],
        "difficulty": "hard",
        "definition": "A collection of things sharing a common attribute.",
        "sentence": "It is reasonable to think that there exist other anomalies in this category.",
        "partOfSpeech": "noun"
    },
    {
        "word": "note",
        "valid": [
            "note"
        ],
        "difficulty": "easy",
        "definition": "A brief written record.",
        "sentence": "It ended on a sour note.",
        "partOfSpeech": "noun"
    },
    {
        "word": "live",
        "valid": [
            "live"
        ],
        "difficulty": "easy",
        "definition": "Be an inhabitant of or reside in.",
        "sentence": "We had to live frugally after the war.",
        "partOfSpeech": "verb"
    },
    {
        "word": "large",
        "valid": [
            "large"
        ],
        "difficulty": "easy",
        "definition": "A garment size for a large person.",
        "sentence": "Taking the large view.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gallery",
        "valid": [
            "gallery"
        ],
        "difficulty": "medium",
        "definition": "Spectators at a golf or tennis match.",
        "sentence": "Shooting gallery.",
        "partOfSpeech": "noun"
    },
    {
        "word": "table",
        "valid": [
            "table"
        ],
        "difficulty": "easy",
        "definition": "A set of data arranged in rows and columns.",
        "sentence": "It was a sturdy table.",
        "partOfSpeech": "noun"
    },
    {
        "word": "register",
        "valid": [
            "register"
        ],
        "difficulty": "hard",
        "definition": "An official written record of names or events or transactions.",
        "sentence": "Did this event register in your parents' minds?",
        "partOfSpeech": "noun"
    },
    {
        "word": "however",
        "valid": [
            "however"
        ],
        "difficulty": "medium",
        "definition": "Despite anything to the contrary (usually preceding a concession).",
        "sentence": "Although I'm a little afraid, however I'd like to try it.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "market",
        "valid": [
            "market"
        ],
        "difficulty": "medium",
        "definition": "The world of commercial activity where goods and services are bought and sold.",
        "sentence": "Without competition there would be no market.",
        "partOfSpeech": "noun"
    },
    {
        "word": "library",
        "valid": [
            "library"
        ],
        "difficulty": "medium",
        "definition": "A room where books are kept.",
        "sentence": "They had brandy in the library.",
        "partOfSpeech": "noun"
    },
    {
        "word": "really",
        "valid": [
            "really"
        ],
        "difficulty": "medium",
        "definition": "In accordance with truth or fact or reality.",
        "sentence": "Real' is sometimes used informally for `really.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "action",
        "valid": [
            "action"
        ],
        "difficulty": "medium",
        "definition": "Something done (usually as opposed to something said).",
        "sentence": "The action is no longer in technology stocks but in municipal bonds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "start",
        "valid": [
            "start"
        ],
        "difficulty": "easy",
        "definition": "The beginning of anything.",
        "sentence": "He got his start because one of the regular pitchers was in the hospital.",
        "partOfSpeech": "noun"
    },
    {
        "word": "series",
        "valid": [
            "series"
        ],
        "difficulty": "medium",
        "definition": "Similar things placed in order or happening one after another.",
        "sentence": "A comedy series.",
        "partOfSpeech": "noun"
    },
    {
        "word": "model",
        "valid": [
            "model"
        ],
        "difficulty": "easy",
        "definition": "A hypothetical description of a complex entity or process.",
        "sentence": "His car was an old model.",
        "partOfSpeech": "noun"
    },
    {
        "word": "features",
        "valid": [
            "features"
        ],
        "difficulty": "hard",
        "definition": "Form of feature: a prominent attribute or aspect of something.",
        "sentence": "Can you tell us about some of the natural features of that area?",
        "partOfSpeech": "noun"
    },
    {
        "word": "air",
        "valid": [
            "air"
        ],
        "difficulty": "easy",
        "definition": "A mixture of gases (especially oxygen) required for breathing; the stuff that the wind consists of.",
        "sentence": "Air travel involves too much waiting in airports.",
        "partOfSpeech": "noun"
    },
    {
        "word": "industry",
        "valid": [
            "industry"
        ],
        "difficulty": "hard",
        "definition": "The people or companies engaged in a particular kind of commercial enterprise.",
        "sentence": "American industry is making increased use of computers to control production.",
        "partOfSpeech": "noun"
    },
    {
        "word": "plan",
        "valid": [
            "plan"
        ],
        "difficulty": "easy",
        "definition": "A series of steps to be carried out or goals to be accomplished.",
        "sentence": "A plan for seating guests.",
        "partOfSpeech": "noun"
    },
    {
        "word": "human",
        "valid": [
            "human"
        ],
        "difficulty": "easy",
        "definition": "Any living or extinct member of the family Hominidae characterized by superior intelligence, articulate speech, and erect carriage.",
        "sentence": "Human beings.",
        "partOfSpeech": "noun"
    },
    {
        "word": "provided",
        "valid": [
            "provided"
        ],
        "difficulty": "hard",
        "definition": "Form of provide: give something useful or necessary to.",
        "sentence": "My neighbors provided food for me.",
        "partOfSpeech": "verb"
    },
    {
        "word": "yes",
        "valid": [
            "yes"
        ],
        "difficulty": "easy",
        "definition": "An affirmative.",
        "sentence": "I was hoping for a yes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "required",
        "valid": [
            "required"
        ],
        "difficulty": "hard",
        "definition": "Necessary for relief or supply.",
        "sentence": "Required reading.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "second",
        "valid": [
            "second"
        ],
        "difficulty": "medium",
        "definition": "1/60 of a minute; the basic unit of time adopted under the Systeme International d'Unites.",
        "sentence": "He had to shift down into second to make the hill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hot",
        "valid": [
            "hot"
        ],
        "difficulty": "easy",
        "definition": "Used of physical heat; having a high or higher than desirable temperature or giving off heat or feeling or causing a sensation of heat or burning.",
        "sentence": "A hot week on the stock market.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "accessories",
        "valid": [
            "accessories"
        ],
        "difficulty": "expert",
        "definition": "Form of accessory: clothing that is worn or carried, but not part of your main clothing.",
        "sentence": "The shop sells expensive accessories for women.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cost",
        "valid": [
            "cost"
        ],
        "difficulty": "easy",
        "definition": "The total spent for goods or services including money and time and labor.",
        "sentence": "He couldn't calculate the cost of the collection.",
        "partOfSpeech": "noun"
    },
    {
        "word": "movie",
        "valid": [
            "movie"
        ],
        "difficulty": "easy",
        "definition": "A form of entertainment that enacts a story by sound and a sequence of images giving the illusion of continuous movement.",
        "sentence": "They went to a movie every Saturday night.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forums",
        "valid": [
            "forums"
        ],
        "difficulty": "medium",
        "definition": "Form of forum: a public meeting or assembly for open discussion.",
        "sentence": "I do not have an account in these forums.",
        "partOfSpeech": "noun"
    },
    {
        "word": "march",
        "valid": [
            "march"
        ],
        "difficulty": "easy",
        "definition": "The month following February and preceding April.",
        "sentence": "The march of science.",
        "partOfSpeech": "noun"
    },
    {
        "word": "better",
        "valid": [
            "better"
        ],
        "difficulty": "medium",
        "definition": "Something superior in quality or condition or effect.",
        "sentence": "A change for the better.",
        "partOfSpeech": "noun"
    },
    {
        "word": "say",
        "valid": [
            "say"
        ],
        "difficulty": "easy",
        "definition": "The chance to speak.",
        "sentence": "Let him have his say.",
        "partOfSpeech": "noun"
    },
    {
        "word": "questions",
        "valid": [
            "questions"
        ],
        "difficulty": "hard",
        "definition": "Form of question: an instance of questioning.",
        "sentence": "The only useful answers are those that raise new questions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "going",
        "valid": [
            "going"
        ],
        "difficulty": "easy",
        "definition": "The act of departing.",
        "sentence": "Persuading him was easy going.",
        "partOfSpeech": "noun"
    },
    {
        "word": "medical",
        "valid": [
            "medical"
        ],
        "difficulty": "medium",
        "definition": "A thorough physical examination; includes a variety of tests depending on the age and sex and health of the person.",
        "sentence": "Medical treatment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "test",
        "valid": [
            "test"
        ],
        "difficulty": "easy",
        "definition": "Trying something to find out about it.",
        "sentence": "He survived the great test of battle.",
        "partOfSpeech": "noun"
    },
    {
        "word": "friend",
        "valid": [
            "friend"
        ],
        "difficulty": "medium",
        "definition": "A person you know well and regard with affection and trust.",
        "sentence": "He was my best friend at the university.",
        "partOfSpeech": "noun"
    },
    {
        "word": "come",
        "valid": [
            "come"
        ],
        "difficulty": "easy",
        "definition": "To move or travel toward or into a place thought of as near.",
        "sentence": "Nothing good will come of this.",
        "partOfSpeech": "verb"
    },
    {
        "word": "server",
        "valid": [
            "server"
        ],
        "difficulty": "medium",
        "definition": "A person whose occupation is to serve at table (as in a restaurant).",
        "sentence": "Is something going on with your server?",
        "partOfSpeech": "noun"
    },
    {
        "word": "study",
        "valid": [
            "study"
        ],
        "difficulty": "easy",
        "definition": "A detailed critical inspection.",
        "sentence": "He knocked lightly on the closed door of the study.",
        "partOfSpeech": "noun"
    },
    {
        "word": "application",
        "valid": [
            "application"
        ],
        "difficulty": "expert",
        "definition": "The act of bringing something to bear; using it for a particular purpose.",
        "sentence": "The application of maximum thrust.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cart",
        "valid": [
            "cart"
        ],
        "difficulty": "easy",
        "definition": "A heavy open wagon usually having two wheels and drawn by an animal.",
        "sentence": "Planning the wedding before proposing is putting the cart before the horse.",
        "partOfSpeech": "noun"
    },
    {
        "word": "staff",
        "valid": [
            "staff"
        ],
        "difficulty": "easy",
        "definition": "Personnel who assist their superior in carrying out an assigned task.",
        "sentence": "He walked with the help of a wooden staff.",
        "partOfSpeech": "noun"
    },
    {
        "word": "articles",
        "valid": [
            "articles"
        ],
        "difficulty": "hard",
        "definition": "Form of article: nonfictional prose forming an independent part of a publication.",
        "sentence": "He has just published an interesting series of articles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "san",
        "valid": [
            "san"
        ],
        "difficulty": "easy",
        "definition": "Storage Area Network; or an honorific title used in Japanese.",
        "sentence": "I saw the film in San Francisco last year.",
        "partOfSpeech": "noun"
    },
    {
        "word": "feedback",
        "valid": [
            "feedback"
        ],
        "difficulty": "hard",
        "definition": "The process in which part of the output of a system is returned to its input in order to regulate its further output.",
        "sentence": "Please review the contents and provide any appropriate feedback.",
        "partOfSpeech": "noun"
    },
    {
        "word": "again",
        "valid": [
            "again"
        ],
        "difficulty": "easy",
        "definition": "Anew.",
        "sentence": "She tried again.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "play",
        "valid": [
            "play"
        ],
        "difficulty": "easy",
        "definition": "A dramatic work intended for performance by actors on a stage.",
        "sentence": "There was heavy play at the blackjack table.",
        "partOfSpeech": "noun"
    },
    {
        "word": "looking",
        "valid": [
            "looking"
        ],
        "difficulty": "medium",
        "definition": "The act of directing the eyes toward something and perceiving it visually.",
        "sentence": "He gave it a good looking at.",
        "partOfSpeech": "noun"
    },
    {
        "word": "issues",
        "valid": [
            "issues"
        ],
        "difficulty": "medium",
        "definition": "Form of issue: an important question that is in dispute and must be settled.",
        "sentence": "When can one say that a person has alcohol issues?",
        "partOfSpeech": "noun"
    },
    {
        "word": "never",
        "valid": [
            "never"
        ],
        "difficulty": "easy",
        "definition": "Not ever; at no time in the past or future.",
        "sentence": "I have never been to China.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "users",
        "valid": [
            "users"
        ],
        "difficulty": "easy",
        "definition": "Form of user: a person who makes use of a thing; someone who uses or employs something.",
        "sentence": "Computer users have so many buzzwords, it's a wonder if anyone else can understand them.",
        "partOfSpeech": "noun"
    },
    {
        "word": "complete",
        "valid": [
            "complete"
        ],
        "difficulty": "hard",
        "definition": "Come or bring to a finish or an end; \"The fastest runner finished the race in just over 2 hours; others finished in over 4 hours\".",
        "sentence": "A child would complete the family.",
        "partOfSpeech": "verb"
    },
    {
        "word": "street",
        "valid": [
            "street"
        ],
        "difficulty": "medium",
        "definition": "A thoroughfare (usually including sidewalks) that is lined with buildings.",
        "sentence": "He lives on Nassau Street.",
        "partOfSpeech": "noun"
    },
    {
        "word": "topic",
        "valid": [
            "topic"
        ],
        "difficulty": "easy",
        "definition": "The subject matter of a conversation or discussion.",
        "sentence": "He kept drifting off the topic.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comment",
        "valid": [
            "comment"
        ],
        "difficulty": "medium",
        "definition": "A statement that expresses a personal opinion or belief or adds information.",
        "sentence": "He wrote an extended comment on the proposal.",
        "partOfSpeech": "noun"
    },
    {
        "word": "financial",
        "valid": [
            "financial"
        ],
        "difficulty": "hard",
        "definition": "Involving financial matters.",
        "sentence": "How do you expect to weather the financial storm when the bank refuses to extend a helping hand?",
        "partOfSpeech": "adjective"
    },
    {
        "word": "things",
        "valid": [
            "things"
        ],
        "difficulty": "medium",
        "definition": "Any movable possession (especially articles of clothing).",
        "sentence": "She packed her things and left.",
        "partOfSpeech": "noun"
    },
    {
        "word": "working",
        "valid": [
            "working"
        ],
        "difficulty": "medium",
        "definition": "A mine or quarry that is being or has been worked.",
        "sentence": "Discussed the working draft of a peace treaty.",
        "partOfSpeech": "noun"
    },
    {
        "word": "against",
        "valid": [
            "against"
        ],
        "difficulty": "medium",
        "definition": "Abreast; opposite to; facing; towards; as, against the mouth of a river; -- in this sense often preceded by over. Jacob saw the angels of God come against him. Tyndale. 2. From.",
        "sentence": "They are too busy fighting against each other to care for common ideals.",
        "partOfSpeech": "noun"
    },
    {
        "word": "standard",
        "valid": [
            "standard"
        ],
        "difficulty": "hard",
        "definition": "A basis for comparison; a reference point against which other things can be evaluated.",
        "sentence": "Standard procedure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tax",
        "valid": [
            "tax"
        ],
        "difficulty": "easy",
        "definition": "Charge against a citizen's person or property or activity for the support of government.",
        "sentence": "The income tax rate increases in proportion as your salary rises.",
        "partOfSpeech": "noun"
    },
    {
        "word": "person",
        "valid": [
            "person"
        ],
        "difficulty": "medium",
        "definition": "A human being.",
        "sentence": "There was too much for one person to do.",
        "partOfSpeech": "noun"
    },
    {
        "word": "below",
        "valid": [
            "below"
        ],
        "difficulty": "easy",
        "definition": "In or to a place that is lower.",
        "sentence": "See below.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "mobile",
        "valid": [
            "mobile"
        ],
        "difficulty": "medium",
        "definition": "A river in southwestern Alabama; flows into Mobile Bay.",
        "sentence": "Upwardly mobile.",
        "partOfSpeech": "noun"
    },
    {
        "word": "less",
        "valid": [
            "less"
        ],
        "difficulty": "easy",
        "definition": "(comparative of `little' usually used with mass nouns) a quantifier meaning not as great in amount or degree.",
        "sentence": "Less than three weeks.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "got",
        "valid": [
            "got"
        ],
        "difficulty": "easy",
        "definition": "Form of get: a return on a shot that seemed impossible to reach and would normally have resulted in a point for the opponent.",
        "sentence": "Back in high school, I got up at 6 a.m. every morning.",
        "partOfSpeech": "noun"
    },
    {
        "word": "blog",
        "valid": [
            "blog"
        ],
        "difficulty": "easy",
        "definition": "A shared on-line journal where people can post diary entries about their personal experiences and hobbies.",
        "sentence": "Postings on a blog are usually in chronological order.",
        "partOfSpeech": "noun"
    },
    {
        "word": "party",
        "valid": [
            "party"
        ],
        "difficulty": "easy",
        "definition": "An organization to gain political power.",
        "sentence": "He planned a party to celebrate Bastille Day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "payment",
        "valid": [
            "payment"
        ],
        "difficulty": "medium",
        "definition": "A sum of money paid or a claim discharged.",
        "sentence": "We will make the payment by bank transfer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "equipment",
        "valid": [
            "equipment"
        ],
        "difficulty": "hard",
        "definition": "An instrumentality needed for an undertaking or to perform a service.",
        "sentence": "Our advice is that the company invest in new equipment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "login",
        "valid": [
            "login"
        ],
        "difficulty": "easy",
        "definition": "The act, process, or credentials used to gain access to a computer system.",
        "sentence": "Your login attempt was not successful. Please try again.",
        "partOfSpeech": "noun"
    },
    {
        "word": "student",
        "valid": [
            "student"
        ],
        "difficulty": "medium",
        "definition": "A learner who is enrolled in an educational institution.",
        "sentence": "\"Haven't we met somewhere before?\" asked the student.",
        "partOfSpeech": "noun"
    },
    {
        "word": "let",
        "valid": [
            "let"
        ],
        "difficulty": "easy",
        "definition": "A brutal terrorist group active in Kashmir; fights against India with the goal of restoring Islamic rule of India.",
        "sentence": "This let me in for a big surprise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "programs",
        "valid": [
            "programs"
        ],
        "difficulty": "hard",
        "definition": "Form of program: a series of steps to be carried out or goals to be accomplished.",
        "sentence": "The master plan includes programs to provide employment as well as recreation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "offers",
        "valid": [
            "offers"
        ],
        "difficulty": "medium",
        "definition": "Form of offer: the verbal act of offering.",
        "sentence": "Gonzales offers a bike to all his employees in Europe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "legal",
        "valid": [
            "legal"
        ],
        "difficulty": "easy",
        "definition": "Established by or founded upon law or official or accepted rules.",
        "sentence": "A legal pass receiver.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "above",
        "valid": [
            "above"
        ],
        "difficulty": "easy",
        "definition": "An earlier section of a written text.",
        "sentence": "For instructions refer to the above.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recent",
        "valid": [
            "recent"
        ],
        "difficulty": "medium",
        "definition": "Approximately the last 10,000 years.",
        "sentence": "Recent graduates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "park",
        "valid": [
            "park"
        ],
        "difficulty": "easy",
        "definition": "A large area of land preserved in its natural state as public property.",
        "sentence": "The put the car in park and got out.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stores",
        "valid": [
            "stores"
        ],
        "difficulty": "medium",
        "definition": "Form of store: a mercantile establishment for the retail sale of goods or services.",
        "sentence": "The tourists wandered around the stores.",
        "partOfSpeech": "noun"
    },
    {
        "word": "side",
        "valid": [
            "side"
        ],
        "difficulty": "easy",
        "definition": "A place within a region identified relative to a center or reference location.",
        "sentence": "He turned the box over to examine the bottom side.",
        "partOfSpeech": "noun"
    },
    {
        "word": "act",
        "valid": [
            "act"
        ],
        "difficulty": "easy",
        "definition": "A legal document codifying the result of deliberations of a committee or society or legislative body.",
        "sentence": "He did his act three times every evening.",
        "partOfSpeech": "noun"
    },
    {
        "word": "problem",
        "valid": [
            "problem"
        ],
        "difficulty": "medium",
        "definition": "A state of difficulty that needs to be resolved.",
        "sentence": "What's the problem?",
        "partOfSpeech": "noun"
    },
    {
        "word": "red",
        "valid": [
            "red"
        ],
        "difficulty": "easy",
        "definition": "Red color or pigment; the chromatic color resembling the hue of blood.",
        "sentence": "The company operated in the red last year.",
        "partOfSpeech": "noun"
    },
    {
        "word": "give",
        "valid": [
            "give"
        ],
        "difficulty": "easy",
        "definition": "The elasticity of something that can be stretched and returns to its original length.",
        "sentence": "Give thought to.",
        "partOfSpeech": "noun"
    },
    {
        "word": "memory",
        "valid": [
            "memory"
        ],
        "difficulty": "medium",
        "definition": "Something that is remembered.",
        "sentence": "A memory and the CPU form the central part of a computer to which peripherals are attached.",
        "partOfSpeech": "noun"
    },
    {
        "word": "performance",
        "valid": [
            "performance"
        ],
        "difficulty": "expert",
        "definition": "A dramatic or musical entertainment.",
        "sentence": "They admired his performance under stress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "social",
        "valid": [
            "social"
        ],
        "difficulty": "medium",
        "definition": "A party of people assembled to promote sociability and communal activity.",
        "sentence": "A social cup of coffee.",
        "partOfSpeech": "noun"
    },
    {
        "word": "august",
        "valid": [
            "august"
        ],
        "difficulty": "medium",
        "definition": "The month following July and preceding September.",
        "sentence": "Of august lineage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "quote",
        "valid": [
            "quote"
        ],
        "difficulty": "easy",
        "definition": "A punctuation mark used to attribute the enclosed text to someone else.",
        "sentence": "He said he could quote several instances of this behavior.",
        "partOfSpeech": "noun"
    },
    {
        "word": "language",
        "valid": [
            "language"
        ],
        "difficulty": "hard",
        "definition": "A systematic means of communicating by the use of sounds or conventional symbols.",
        "sentence": "Language sets homo sapiens apart from all other animals.",
        "partOfSpeech": "noun"
    },
    {
        "word": "story",
        "valid": [
            "story"
        ],
        "difficulty": "easy",
        "definition": "A message that tells the particulars of an act or occurrence or course of events; presented in writing or drama or cinema or as a radio or television program.",
        "sentence": "The story of exposure to lead.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sell",
        "valid": [
            "sell"
        ],
        "difficulty": "easy",
        "definition": "The activity of persuading someone to buy.",
        "sentence": "It was a hard sell.",
        "partOfSpeech": "noun"
    },
    {
        "word": "options",
        "valid": [
            "options"
        ],
        "difficulty": "medium",
        "definition": "Form of option: the right to buy or sell property at an agreed price; the right is purchased and if it is not exercised by a stated date the money is forfeited.",
        "sentence": "What other options do I have?",
        "partOfSpeech": "noun"
    },
    {
        "word": "experience",
        "valid": [
            "experience"
        ],
        "difficulty": "expert",
        "definition": "The accumulation of knowledge or skill that results from direct participation in events or activities.",
        "sentence": "A man of experience.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rates",
        "valid": [
            "rates"
        ],
        "difficulty": "easy",
        "definition": "A local tax on property (usually used in the plural).",
        "sentence": "Bank lending is rising because of lower interest rates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "create",
        "valid": [
            "create"
        ],
        "difficulty": "medium",
        "definition": "Make or cause to be or to become.",
        "sentence": "Create a furor.",
        "partOfSpeech": "verb"
    },
    {
        "word": "key",
        "valid": [
            "key"
        ],
        "difficulty": "easy",
        "definition": "Metal device shaped in such a way that when it is inserted into the appropriate lock the lock's mechanism can be rotated.",
        "sentence": "He spoke in a low key.",
        "partOfSpeech": "noun"
    },
    {
        "word": "body",
        "valid": [
            "body"
        ],
        "difficulty": "easy",
        "definition": "The entire physical structure of an organism (an animal, plant, or human being).",
        "sentence": "The body of the car was badly rusted.",
        "partOfSpeech": "noun"
    },
    {
        "word": "young",
        "valid": [
            "young"
        ],
        "difficulty": "easy",
        "definition": "Any immature animal.",
        "sentence": "Rock music appeals to the young.",
        "partOfSpeech": "noun"
    },
    {
        "word": "important",
        "valid": [
            "important"
        ],
        "difficulty": "hard",
        "definition": "Of great significance or value.",
        "sentence": "Important people.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "field",
        "valid": [
            "field"
        ],
        "difficulty": "easy",
        "definition": "A piece of land cleared of trees and usually enclosed.",
        "sentence": "They are outstanding in their field.",
        "partOfSpeech": "noun"
    },
    {
        "word": "few",
        "valid": [
            "few"
        ],
        "difficulty": "easy",
        "definition": "A small elite group.",
        "sentence": "It was designed for the discriminating few.",
        "partOfSpeech": "noun"
    },
    {
        "word": "east",
        "valid": [
            "east"
        ],
        "difficulty": "easy",
        "definition": "The cardinal compass point that is at 90 degrees.",
        "sentence": "We travelled east for several miles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "paper",
        "valid": [
            "paper"
        ],
        "difficulty": "easy",
        "definition": "A material made of cellulose pulp derived mainly from wood or rags or certain grasses.",
        "sentence": "The notion of an office running without paper is absurd.",
        "partOfSpeech": "noun"
    },
    {
        "word": "single",
        "valid": [
            "single"
        ],
        "difficulty": "medium",
        "definition": "A base hit on which the batter stops safely at first base.",
        "sentence": "Sex and the single girl.",
        "partOfSpeech": "noun"
    },
    {
        "word": "age",
        "valid": [
            "age"
        ],
        "difficulty": "easy",
        "definition": "How long something has existed.",
        "sentence": "It was replaced because of its age.",
        "partOfSpeech": "noun"
    },
    {
        "word": "activities",
        "valid": [
            "activities"
        ],
        "difficulty": "expert",
        "definition": "Form of activity: any specific behavior.",
        "sentence": "The environment was the focus of student council activities.",
        "partOfSpeech": "noun"
    },
    {
        "word": "club",
        "valid": [
            "club"
        ],
        "difficulty": "easy",
        "definition": "A team of professional baseball players who play and travel together.",
        "sentence": "He played the drums at a jazz club.",
        "partOfSpeech": "noun"
    },
    {
        "word": "example",
        "valid": [
            "example"
        ],
        "difficulty": "medium",
        "definition": "An item of information that is typical of a class or group.",
        "sentence": "This patient provides a typical example of the syndrome.",
        "partOfSpeech": "noun"
    },
    {
        "word": "girls",
        "valid": [
            "girls"
        ],
        "difficulty": "easy",
        "definition": "Form of girl: a young female.",
        "sentence": "They are sensible girls.",
        "partOfSpeech": "noun"
    },
    {
        "word": "additional",
        "valid": [
            "additional"
        ],
        "difficulty": "expert",
        "definition": "Further or added.",
        "sentence": "Called for additional troops.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "password",
        "valid": [
            "password"
        ],
        "difficulty": "hard",
        "definition": "A secret word or phrase known only to a restricted group.",
        "sentence": "He forgot the password.",
        "partOfSpeech": "noun"
    },
    {
        "word": "latest",
        "valid": [
            "latest"
        ],
        "difficulty": "medium",
        "definition": "The most recent news or development.",
        "sentence": "Have you heard the latest?",
        "partOfSpeech": "noun"
    },
    {
        "word": "something",
        "valid": [
            "something"
        ],
        "difficulty": "hard",
        "definition": "Anything unknown, undetermined, or not specifically designated; a certain indefinite thing; an indeterminate or unknown event; an unspecified task, work, or thing. There is some.",
        "sentence": "Let's try something.",
        "partOfSpeech": "noun"
    },
    {
        "word": "road",
        "valid": [
            "road"
        ],
        "difficulty": "easy",
        "definition": "An open way (generally public) for travel or transportation.",
        "sentence": "The road to fame.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gift",
        "valid": [
            "gift"
        ],
        "difficulty": "easy",
        "definition": "Something acquired without compensation.",
        "sentence": "I cannot accept your gift.",
        "partOfSpeech": "noun"
    },
    {
        "word": "question",
        "valid": [
            "question"
        ],
        "difficulty": "hard",
        "definition": "An instance of questioning.",
        "sentence": "There is no question about the validity of the enterprise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "changes",
        "valid": [
            "changes"
        ],
        "difficulty": "medium",
        "definition": "Form of chang: the longest river of Asia; flows eastward from Tibet into the East China Sea near Shanghai.",
        "sentence": "Let me know if I need to make any changes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "night",
        "valid": [
            "night"
        ],
        "difficulty": "easy",
        "definition": "The time after sunset and before sunrise while it is dark outside.",
        "sentence": "It vanished into the night.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hard",
        "valid": [
            "hard"
        ],
        "difficulty": "easy",
        "definition": "Not easy; requiring great physical or mental effort to accomplish or comprehend or endure.",
        "sentence": "Why is it so hard for you to keep a secret?",
        "partOfSpeech": "adjective"
    },
    {
        "word": "pay",
        "valid": [
            "pay"
        ],
        "difficulty": "easy",
        "definition": "Something that remunerates.",
        "sentence": "He wasted his pay on drink.",
        "partOfSpeech": "noun"
    },
    {
        "word": "four",
        "valid": [
            "four"
        ],
        "difficulty": "easy",
        "definition": "The cardinal number that is the sum of three and one.",
        "sentence": "I am four months pregnant.",
        "partOfSpeech": "noun"
    },
    {
        "word": "poker",
        "valid": [
            "poker"
        ],
        "difficulty": "easy",
        "definition": "Fire iron consisting of a metal rod with a handle; used to stir a fire.",
        "sentence": "He is very good at poker.",
        "partOfSpeech": "noun"
    },
    {
        "word": "status",
        "valid": [
            "status"
        ],
        "difficulty": "medium",
        "definition": "The relative position or standing of things or especially persons in a society.",
        "sentence": "The current status of the arms negotiations.",
        "partOfSpeech": "noun"
    },
    {
        "word": "browse",
        "valid": [
            "browse"
        ],
        "difficulty": "medium",
        "definition": "Vegetation (such as young shoots, twigs, and leaves) that is suitable for animals to eat.",
        "sentence": "A deer needs to eat twenty pounds of browse every day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "issue",
        "valid": [
            "issue"
        ],
        "difficulty": "easy",
        "definition": "An important question that is in dispute and must be settled.",
        "sentence": "A new issue of stamps.",
        "partOfSpeech": "noun"
    },
    {
        "word": "range",
        "valid": [
            "range"
        ],
        "difficulty": "easy",
        "definition": "An area in which something acts or operates or has power or control: \"the range of a supersonic jet\".",
        "sentence": "The army maintains a missile range in the desert.",
        "partOfSpeech": "noun"
    },
    {
        "word": "building",
        "valid": [
            "building"
        ],
        "difficulty": "hard",
        "definition": "A structure that has a roof and walls and stands more or less permanently in one place.",
        "sentence": "His hobby was the building of boats.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seller",
        "valid": [
            "seller"
        ],
        "difficulty": "medium",
        "definition": "Someone who promotes or exchanges goods or services for money.",
        "sentence": "This book ought to be a good seller.",
        "partOfSpeech": "noun"
    },
    {
        "word": "court",
        "valid": [
            "court"
        ],
        "difficulty": "easy",
        "definition": "An assembly (including one or more judges) to conduct judicial business.",
        "sentence": "Pay court to the emperor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "always",
        "valid": [
            "always"
        ],
        "difficulty": "medium",
        "definition": "At all times; all the time and on every occasion.",
        "sentence": "I will always be there to help you.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "result",
        "valid": [
            "result"
        ],
        "difficulty": "medium",
        "definition": "A phenomenon that follows and is caused by some previous phenomenon.",
        "sentence": "He computed the result to four decimal places.",
        "partOfSpeech": "noun"
    },
    {
        "word": "audio",
        "valid": [
            "audio"
        ],
        "difficulty": "easy",
        "definition": "The audible part of a transmitted signal.",
        "sentence": "They always raise the audio for commercials.",
        "partOfSpeech": "noun"
    },
    {
        "word": "light",
        "valid": [
            "light"
        ],
        "difficulty": "easy",
        "definition": "Electromagnetic radiation that can produce a visual sensation.",
        "sentence": "Do you have a light?",
        "partOfSpeech": "noun"
    },
    {
        "word": "write",
        "valid": [
            "write"
        ],
        "difficulty": "easy",
        "definition": "Produce a literary work.",
        "sentence": "Write her soon, please!",
        "partOfSpeech": "verb"
    },
    {
        "word": "war",
        "valid": [
            "war"
        ],
        "difficulty": "easy",
        "definition": "The waging of armed conflict against an enemy.",
        "sentence": "The war on poverty.",
        "partOfSpeech": "noun"
    },
    {
        "word": "offer",
        "valid": [
            "offer"
        ],
        "difficulty": "easy",
        "definition": "The verbal act of offering.",
        "sentence": "A generous offer of assistance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "blue",
        "valid": [
            "blue"
        ],
        "difficulty": "easy",
        "definition": "Blue color or pigment; resembling the color of the clear sky in the daytime.",
        "sentence": "She was wearing blue.",
        "partOfSpeech": "noun"
    },
    {
        "word": "groups",
        "valid": [
            "groups"
        ],
        "difficulty": "medium",
        "definition": "Form of group: any number of entities (members) considered as a unit.",
        "sentence": "Some go in groups organized by their schools, but most go in twos and threes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "easy",
        "valid": [
            "easy"
        ],
        "difficulty": "easy",
        "definition": "Posing no difficulty; requiring little effort.",
        "sentence": "Easy money.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "given",
        "valid": [
            "given"
        ],
        "difficulty": "easy",
        "definition": "An assumption that is taken for granted.",
        "sentence": "Given the engine's condition, it is a wonder that it started.",
        "partOfSpeech": "noun"
    },
    {
        "word": "files",
        "valid": [
            "files"
        ],
        "difficulty": "easy",
        "definition": "Form of file: a set of related records (either written or electronic) kept together.",
        "sentence": "I'm attaching three files.",
        "partOfSpeech": "noun"
    },
    {
        "word": "event",
        "valid": [
            "event"
        ],
        "difficulty": "easy",
        "definition": "Something that happens at a given place and time.",
        "sentence": "He acted very wise after the event.",
        "partOfSpeech": "noun"
    },
    {
        "word": "release",
        "valid": [
            "release"
        ],
        "difficulty": "medium",
        "definition": "Merchandise issued for sale or public showing (especially a record or film).",
        "sentence": "A new release from the London Symphony Orchestra.",
        "partOfSpeech": "noun"
    },
    {
        "word": "analysis",
        "valid": [
            "analysis"
        ],
        "difficulty": "hard",
        "definition": "An investigation of the component parts of a whole and their relations in making up the whole.",
        "sentence": "I beg to differ, as I disagree with your analysis of the situation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "request",
        "valid": [
            "request"
        ],
        "difficulty": "medium",
        "definition": "A formal message requesting something that is submitted to an authority.",
        "sentence": "You should have refused his request flatly.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fax",
        "valid": [
            "fax"
        ],
        "difficulty": "easy",
        "definition": "Duplicator that transmits the copy by wire or radio.",
        "sentence": "Can you fax me the report right away?",
        "partOfSpeech": "noun"
    },
    {
        "word": "making",
        "valid": [
            "making"
        ],
        "difficulty": "medium",
        "definition": "The act that results in something coming to be.",
        "sentence": "The making of measurements.",
        "partOfSpeech": "noun"
    },
    {
        "word": "picture",
        "valid": [
            "picture"
        ],
        "difficulty": "medium",
        "definition": "A visual representation (of an object or scene or person or abstraction) produced on a surface.",
        "sentence": "The very picture of a modern general.",
        "partOfSpeech": "noun"
    },
    {
        "word": "needs",
        "valid": [
            "needs"
        ],
        "difficulty": "easy",
        "definition": "In such a manner as could not be otherwise.",
        "sentence": "We must needs by objective.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "possible",
        "valid": [
            "possible"
        ],
        "difficulty": "hard",
        "definition": "Something that can be done.",
        "sentence": "Politics is the art of the possible.",
        "partOfSpeech": "noun"
    },
    {
        "word": "might",
        "valid": [
            "might"
        ],
        "difficulty": "easy",
        "definition": "Physical strength.",
        "sentence": "It might sound far-fetched, but this is a real problem.",
        "partOfSpeech": "noun"
    },
    {
        "word": "professional",
        "valid": [
            "professional"
        ],
        "difficulty": "expert",
        "definition": "A person engaged in one of the learned professions.",
        "sentence": "The professional man or woman possesses distinctive qualifications.",
        "partOfSpeech": "noun"
    },
    {
        "word": "yet",
        "valid": [
            "yet"
        ],
        "difficulty": "easy",
        "definition": "Up to the present time.",
        "sentence": "A yet sadder tale.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "month",
        "valid": [
            "month"
        ],
        "difficulty": "easy",
        "definition": "One of the twelve divisions of the calendar year.",
        "sentence": "He was given a month to pay the bill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "major",
        "valid": [
            "major"
        ],
        "difficulty": "easy",
        "definition": "A commissioned military officer in the United States Army or Air Force or Marines; below lieutenant colonel and above captain.",
        "sentence": "Her major is linguistics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "star",
        "valid": [
            "star"
        ],
        "difficulty": "easy",
        "definition": "A celestial body of hot gases that radiates energy derived from thermonuclear reactions in the interior.",
        "sentence": "Linguists star unacceptable sentences.",
        "partOfSpeech": "noun"
    },
    {
        "word": "areas",
        "valid": [
            "areas"
        ],
        "difficulty": "easy",
        "definition": "Form of area: a particular geographical region of indefinite boundary (usually serving some special purpose or distinguished by its people or culture or geography).",
        "sentence": "The prospect of famine hangs over many areas of the world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "future",
        "valid": [
            "future"
        ],
        "difficulty": "medium",
        "definition": "The time yet to come.",
        "sentence": "Some future historian will evaluate him.",
        "partOfSpeech": "noun"
    },
    {
        "word": "space",
        "valid": [
            "space"
        ],
        "difficulty": "easy",
        "definition": "The unlimited expanse in which everything is located.",
        "sentence": "They tested his ability to locate objects in space.",
        "partOfSpeech": "noun"
    },
    {
        "word": "committee",
        "valid": [
            "committee"
        ],
        "difficulty": "hard",
        "definition": "A special group delegated to consider some matter; \"a committee is a group that keeps minutes and loses hours\" - Milton Berle.",
        "sentence": "Are you on the committee?",
        "partOfSpeech": "noun"
    },
    {
        "word": "hand",
        "valid": [
            "hand"
        ],
        "difficulty": "easy",
        "definition": "The (prehensile) extremity of the superior limb.",
        "sentence": "Give me a hand with the chores.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sun",
        "valid": [
            "sun"
        ],
        "difficulty": "easy",
        "definition": "The star that is the source of light and heat for the planets in the solar system.",
        "sentence": "The sun contains 99.85% of the mass in the solar system.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cards",
        "valid": [
            "cards"
        ],
        "difficulty": "easy",
        "definition": "A game played with playing cards.",
        "sentence": "Place the deck of cards on the oaken table.",
        "partOfSpeech": "noun"
    },
    {
        "word": "problems",
        "valid": [
            "problems"
        ],
        "difficulty": "hard",
        "definition": "Form of problem: a state of difficulty that needs to be resolved.",
        "sentence": "You're just running away from life's problems.",
        "partOfSpeech": "noun"
    },
    {
        "word": "meeting",
        "valid": [
            "meeting"
        ],
        "difficulty": "medium",
        "definition": "A formally arranged gathering.",
        "sentence": "There was no meeting of minds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "become",
        "valid": [
            "become"
        ],
        "difficulty": "medium",
        "definition": "Enter or assume a certain state or condition.",
        "sentence": "A small forest fire can easily spread and quickly become a great conflagration.",
        "partOfSpeech": "verb"
    },
    {
        "word": "interest",
        "valid": [
            "interest"
        ],
        "difficulty": "hard",
        "definition": "A sense of concern with and curiosity about someone or something.",
        "sentence": "In the interest of safety.",
        "partOfSpeech": "noun"
    },
    {
        "word": "child",
        "valid": [
            "child"
        ],
        "difficulty": "easy",
        "definition": "A young person of either sex.",
        "sentence": "He remained a child in practical matters as long as he lived.",
        "partOfSpeech": "noun"
    },
    {
        "word": "keep",
        "valid": [
            "keep"
        ],
        "difficulty": "easy",
        "definition": "The financial means whereby one lives.",
        "sentence": "Each child was expected to pay for their keep.",
        "partOfSpeech": "noun"
    },
    {
        "word": "enter",
        "valid": [
            "enter"
        ],
        "difficulty": "easy",
        "definition": "To come or go into.",
        "sentence": "Enter a race.",
        "partOfSpeech": "verb"
    },
    {
        "word": "share",
        "valid": [
            "share"
        ],
        "difficulty": "easy",
        "definition": "Assets belonging to or due to or contributed by an individual person or group.",
        "sentence": "They all did their share of the work.",
        "partOfSpeech": "noun"
    },
    {
        "word": "similar",
        "valid": [
            "similar"
        ],
        "difficulty": "medium",
        "definition": "Marked by correspondence or resemblance.",
        "sentence": "Similar food at similar prices.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "garden",
        "valid": [
            "garden"
        ],
        "difficulty": "medium",
        "definition": "A plot of ground where plants are cultivated.",
        "sentence": "It is a common or garden sparrow.",
        "partOfSpeech": "noun"
    },
    {
        "word": "schools",
        "valid": [
            "schools"
        ],
        "difficulty": "medium",
        "definition": "Form of school: an educational institution.",
        "sentence": "One can't expect everything from schools.",
        "partOfSpeech": "noun"
    },
    {
        "word": "million",
        "valid": [
            "million"
        ],
        "difficulty": "medium",
        "definition": "The number that is represented as a one followed by 6 zeros.",
        "sentence": "One million people lost their lives in the war.",
        "partOfSpeech": "noun"
    },
    {
        "word": "added",
        "valid": [
            "added"
        ],
        "difficulty": "easy",
        "definition": "Form of add: a condition (mostly in boys) characterized by behavioral and learning disorders.",
        "sentence": "The music added to our enjoyment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reference",
        "valid": [
            "reference"
        ],
        "difficulty": "hard",
        "definition": "A remark that calls attention to something or someone.",
        "sentence": "Reference to an encyclopedia produced the answer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "companies",
        "valid": [
            "companies"
        ],
        "difficulty": "hard",
        "definition": "Form of company: an institution created to conduct business.",
        "sentence": "Companies welcome workers who take initiative.",
        "partOfSpeech": "noun"
    },
    {
        "word": "listed",
        "valid": [
            "listed"
        ],
        "difficulty": "medium",
        "definition": "On a list.",
        "sentence": "No person by that name is listed in the register of the school.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "baby",
        "valid": [
            "baby"
        ],
        "difficulty": "easy",
        "definition": "A very young child (birth to 1 year) who has not yet begun to walk or talk.",
        "sentence": "This project is his baby.",
        "partOfSpeech": "noun"
    },
    {
        "word": "learning",
        "valid": [
            "learning"
        ],
        "difficulty": "hard",
        "definition": "The cognitive process of acquiring skill or knowledge.",
        "sentence": "I don't like learning irregular verbs.",
        "partOfSpeech": "noun"
    },
    {
        "word": "energy",
        "valid": [
            "energy"
        ],
        "difficulty": "medium",
        "definition": "A thermodynamic quantity equivalent to the capacity of a physical system to do work; the units of energy are joules or ergs.",
        "sentence": "His writing conveys great energy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "run",
        "valid": [
            "run"
        ],
        "difficulty": "easy",
        "definition": "A score in baseball made by a runner touching all four bases safely.",
        "sentence": "He broke into a run.",
        "partOfSpeech": "noun"
    },
    {
        "word": "delivery",
        "valid": [
            "delivery"
        ],
        "difficulty": "hard",
        "definition": "The act of delivering or distributing something (as goods or mail).",
        "sentence": "His reluctant delivery of bad news.",
        "partOfSpeech": "noun"
    },
    {
        "word": "net",
        "valid": [
            "net"
        ],
        "difficulty": "easy",
        "definition": "A computer network consisting of a worldwide network of computer networks that use the TCP/IP network protocols to facilitate data transmission and exchange.",
        "sentence": "Net a fish.",
        "partOfSpeech": "noun"
    },
    {
        "word": "popular",
        "valid": [
            "popular"
        ],
        "difficulty": "medium",
        "definition": "Regarded with great favor, approval, or affection especially by the general public.",
        "sentence": "A democratic or popular movement.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "term",
        "valid": [
            "term"
        ],
        "difficulty": "easy",
        "definition": "A word or expression used for some particular thing.",
        "sentence": "The general term of an algebraic equation of the n-th degree.",
        "partOfSpeech": "noun"
    },
    {
        "word": "film",
        "valid": [
            "film"
        ],
        "difficulty": "easy",
        "definition": "A form of entertainment that enacts a story by sound and a sequence of images giving the illusion of continuous movement.",
        "sentence": "The table was covered with a film of dust.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stories",
        "valid": [
            "stories"
        ],
        "difficulty": "medium",
        "definition": "Form of story: a message that tells the particulars of an act or occurrence or course of events; presented in writing or drama or cinema or as a radio or television program.",
        "sentence": "You don't like love stories.",
        "partOfSpeech": "noun"
    },
    {
        "word": "put",
        "valid": [
            "put"
        ],
        "difficulty": "easy",
        "definition": "The option to sell a given stock (or stock index or commodity future) at a given price before a given date.",
        "sentence": "We put the time of arrival at 8 P.M.",
        "partOfSpeech": "noun"
    },
    {
        "word": "computers",
        "valid": [
            "computers"
        ],
        "difficulty": "hard",
        "definition": "Form of computer: a machine for performing calculations automatically.",
        "sentence": "Computers make people stupid.",
        "partOfSpeech": "noun"
    },
    {
        "word": "journal",
        "valid": [
            "journal"
        ],
        "difficulty": "medium",
        "definition": "A daily written record of (usually personal) experiences and observations.",
        "sentence": "This technical journal is above me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reports",
        "valid": [
            "reports"
        ],
        "difficulty": "medium",
        "definition": "Form of report: a written document describing the findings of some individual or group.",
        "sentence": "You have to turn in the reports on Monday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "try",
        "valid": [
            "try"
        ],
        "difficulty": "easy",
        "definition": "Earnest and conscientious activity intended to do or accomplish something.",
        "sentence": "She gave it a good try.",
        "partOfSpeech": "noun"
    },
    {
        "word": "welcome",
        "valid": [
            "welcome"
        ],
        "difficulty": "medium",
        "definition": "The state of being welcome.",
        "sentence": "The proposal got a warm welcome.",
        "partOfSpeech": "noun"
    },
    {
        "word": "central",
        "valid": [
            "central"
        ],
        "difficulty": "medium",
        "definition": "A workplace that serves as a telecommunications facility where lines from telephones can be connected together to permit communication.",
        "sentence": "A central position.",
        "partOfSpeech": "noun"
    },
    {
        "word": "images",
        "valid": [
            "images"
        ],
        "difficulty": "medium",
        "definition": "Form of image: an iconic mental representation.",
        "sentence": "The smell of cut grass summons up images of hot summer afternoons.",
        "partOfSpeech": "noun"
    },
    {
        "word": "president",
        "valid": [
            "president"
        ],
        "difficulty": "hard",
        "definition": "An executive officer of a firm or corporation.",
        "sentence": "A President is elected every four years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "notice",
        "valid": [
            "notice"
        ],
        "difficulty": "medium",
        "definition": "An announcement containing information about an event.",
        "sentence": "He escaped the notice of the police.",
        "partOfSpeech": "noun"
    },
    {
        "word": "original",
        "valid": [
            "original"
        ],
        "difficulty": "hard",
        "definition": "An original creation (i.e., an audio recording) from which copies can be made.",
        "sentence": "This painting is a copy of the original.",
        "partOfSpeech": "noun"
    },
    {
        "word": "head",
        "valid": [
            "head"
        ],
        "difficulty": "easy",
        "definition": "The upper part of the human body or the front part of the body in animals; contains the face and brains.",
        "sentence": "They say he gives good head.",
        "partOfSpeech": "noun"
    },
    {
        "word": "radio",
        "valid": [
            "radio"
        ],
        "difficulty": "easy",
        "definition": "Medium for communication.",
        "sentence": "Will you give me your radio for my bicycle?",
        "partOfSpeech": "noun"
    },
    {
        "word": "until",
        "valid": [
            "until"
        ],
        "difficulty": "easy",
        "definition": "To; unto; towards; -- used of material objects. Chaucer. Taverners until them told the same. Piers Plowman. He roused himself full blithe, and hastened them until. Spenser. 2. T.",
        "sentence": "Class doesn't begin until eight-thirty.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cell",
        "valid": [
            "cell"
        ],
        "difficulty": "easy",
        "definition": "Any small compartment.",
        "sentence": "How can you have a laptop and not a cell phone?",
        "partOfSpeech": "noun"
    },
    {
        "word": "color",
        "valid": [
            "color"
        ],
        "difficulty": "easy",
        "definition": "A visual attribute of things that results from the light they emit or transmit or reflect.",
        "sentence": "The situation soon took on a different color.",
        "partOfSpeech": "noun"
    },
    {
        "word": "self",
        "valid": [
            "self"
        ],
        "difficulty": "easy",
        "definition": "Your consciousness of your own identity.",
        "sentence": "One's own self.",
        "partOfSpeech": "noun"
    },
    {
        "word": "council",
        "valid": [
            "council"
        ],
        "difficulty": "medium",
        "definition": "A body serving in an administrative capacity.",
        "sentence": "Emergency council.",
        "partOfSpeech": "noun"
    },
    {
        "word": "away",
        "valid": [
            "away"
        ],
        "difficulty": "easy",
        "definition": "Not present; having left.",
        "sentence": "The pitch was away (or wide).",
        "partOfSpeech": "adjective"
    },
    {
        "word": "includes",
        "valid": [
            "includes"
        ],
        "difficulty": "hard",
        "definition": "Form of include: have as a part, be made up out of.",
        "sentence": "The entr\u00e9e includes a beverage.",
        "partOfSpeech": "verb"
    },
    {
        "word": "track",
        "valid": [
            "track"
        ],
        "difficulty": "easy",
        "definition": "A line or route along which something travels or moves.",
        "sentence": "The title track of the album.",
        "partOfSpeech": "noun"
    },
    {
        "word": "discussion",
        "valid": [
            "discussion"
        ],
        "difficulty": "expert",
        "definition": "An extended communication (often interactive) dealing with some particular topic.",
        "sentence": "The book contains an excellent discussion of modal logic.",
        "partOfSpeech": "noun"
    },
    {
        "word": "archive",
        "valid": [
            "archive"
        ],
        "difficulty": "medium",
        "definition": "A depository containing historical records and documents.",
        "sentence": "Does ALC's web site include an archive of English expressions?",
        "partOfSpeech": "noun"
    },
    {
        "word": "once",
        "valid": [
            "once"
        ],
        "difficulty": "easy",
        "definition": "On one occasion.",
        "sentence": "Once I ran into her.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "others",
        "valid": [
            "others"
        ],
        "difficulty": "medium",
        "definition": "Form of other: not the same one or ones already mentioned or implied; \"today isn't any other day\"- the White Queen.",
        "sentence": "Every person who is alone is alone because they are afraid of others.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "entertainment",
        "valid": [
            "entertainment"
        ],
        "difficulty": "expert",
        "definition": "An activity that is diverting and that holds the attention.",
        "sentence": "Australians excel at sports and entertainment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agreement",
        "valid": [
            "agreement"
        ],
        "difficulty": "hard",
        "definition": "The statement (oral or written) of an exchange of promises.",
        "sentence": "There was no agreement between theory and measurement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "format",
        "valid": [
            "format"
        ],
        "difficulty": "medium",
        "definition": "The organization of information according to preset specifications (usually for computer processing).",
        "sentence": "Please format this disk before entering data!",
        "partOfSpeech": "noun"
    },
    {
        "word": "least",
        "valid": [
            "least"
        ],
        "difficulty": "easy",
        "definition": "Something that is of no importance.",
        "sentence": "It is the least I can do.",
        "partOfSpeech": "noun"
    },
    {
        "word": "society",
        "valid": [
            "society"
        ],
        "difficulty": "medium",
        "definition": "An extended social group having a distinctive cultural and economic organization.",
        "sentence": "They formed a small lunch society.",
        "partOfSpeech": "noun"
    },
    {
        "word": "months",
        "valid": [
            "months"
        ],
        "difficulty": "medium",
        "definition": "Form of month: one of the twelve divisions of the calendar year.",
        "sentence": "My friends say I'm a prolific writer, but I haven't written anything for months.",
        "partOfSpeech": "noun"
    },
    {
        "word": "log",
        "valid": [
            "log"
        ],
        "difficulty": "easy",
        "definition": "A segment of the trunk of a tree when stripped of branches.",
        "sentence": "They kept a log of all transmission by the radio station.",
        "partOfSpeech": "noun"
    },
    {
        "word": "safety",
        "valid": [
            "safety"
        ],
        "difficulty": "medium",
        "definition": "The state of being certain that adverse effects will not be caused by some agent under defined conditions.",
        "sentence": "He ran to safety.",
        "partOfSpeech": "noun"
    },
    {
        "word": "friends",
        "valid": [
            "friends"
        ],
        "difficulty": "medium",
        "definition": "Form of friend: a person you know well and regard with affection and trust.",
        "sentence": "How many close friends do you have?",
        "partOfSpeech": "noun"
    },
    {
        "word": "sure",
        "valid": [
            "sure"
        ],
        "difficulty": "easy",
        "definition": "Having or feeling no doubt or uncertainty; confident and assured.",
        "sentence": "Be sure to lock the doors.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "faq",
        "valid": [
            "faq"
        ],
        "difficulty": "easy",
        "definition": "A list of questions that are frequently asked (about a given topic) along with their answers.",
        "sentence": "Take a look at the FAQ before you call tech support.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trade",
        "valid": [
            "trade"
        ],
        "difficulty": "easy",
        "definition": "The commercial exchange (buying and selling on domestic or international markets) of goods and services.",
        "sentence": "He learned his trade as an apprentice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "edition",
        "valid": [
            "edition"
        ],
        "difficulty": "medium",
        "definition": "The form in which a text (especially a printed book) is published.",
        "sentence": "The boy is a younger edition of his father.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cars",
        "valid": [
            "cars"
        ],
        "difficulty": "easy",
        "definition": "Form of car: a motor vehicle with four wheels; usually propelled by an internal combustion engine.",
        "sentence": "The houses and cars looked tiny from the sky.",
        "partOfSpeech": "noun"
    },
    {
        "word": "messages",
        "valid": [
            "messages"
        ],
        "difficulty": "hard",
        "definition": "Form of message: a communication (usually brief) that is written or spoken or signaled.",
        "sentence": "Flashing lights transmit messages between ships and to motorists along city streets.",
        "partOfSpeech": "noun"
    },
    {
        "word": "marketing",
        "valid": [
            "marketing"
        ],
        "difficulty": "hard",
        "definition": "The exchange of goods for an agreed sum of money.",
        "sentence": "Does the weekly marketing at the supermarket.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tell",
        "valid": [
            "tell"
        ],
        "difficulty": "easy",
        "definition": "A Swiss patriot who lived in the early 14th century and who was renowned for his skill as an archer; according to legend an Austrian governor compelled him to shoot an apple from his son's head with his crossbow (which he did successfully without mishap).",
        "sentence": "He could tell that she was unhappy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "further",
        "valid": [
            "further"
        ],
        "difficulty": "medium",
        "definition": "Promote the growth of.",
        "sentence": "Nothing could be further from the truth.",
        "partOfSpeech": "verb"
    },
    {
        "word": "updated",
        "valid": [
            "updated"
        ],
        "difficulty": "medium",
        "definition": "Form of update: information or data that updates.",
        "sentence": "I prefer the updated version of his cookbook.",
        "partOfSpeech": "noun"
    },
    {
        "word": "association",
        "valid": [
            "association"
        ],
        "difficulty": "expert",
        "definition": "A formal organization of people or groups of people.",
        "sentence": "You cannot be convicted of criminal guilt by association.",
        "partOfSpeech": "noun"
    },
    {
        "word": "able",
        "valid": [
            "able"
        ],
        "difficulty": "easy",
        "definition": "(usually followed by `to') having the necessary means or skill or know-how or authority to do something.",
        "sentence": "Able to swim.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "having",
        "valid": [
            "having"
        ],
        "difficulty": "medium",
        "definition": "Form of have: a person who possesses great material wealth.",
        "sentence": "Thanks for having explained to me at last why people take me for an idiot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "provides",
        "valid": [
            "provides"
        ],
        "difficulty": "hard",
        "definition": "Form of provide: give something useful or necessary to.",
        "sentence": "I don't think that technology provides us with everything we need.",
        "partOfSpeech": "verb"
    },
    {
        "word": "fun",
        "valid": [
            "fun"
        ],
        "difficulty": "easy",
        "definition": "Activities that are enjoyable or amusing.",
        "sentence": "I do it for the fun of it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "already",
        "valid": [
            "already"
        ],
        "difficulty": "medium",
        "definition": "Prior to a specified or implied time.",
        "sentence": "She has already graduated.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "green",
        "valid": [
            "green"
        ],
        "difficulty": "easy",
        "definition": "Green color or pigment; resembling the color of growing grass.",
        "sentence": "The ball rolled across the green and into the bunker.",
        "partOfSpeech": "noun"
    },
    {
        "word": "studies",
        "valid": [
            "studies"
        ],
        "difficulty": "medium",
        "definition": "Form of study: a detailed critical inspection.",
        "sentence": "The professor encouraged me in my studies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "close",
        "valid": [
            "close"
        ],
        "difficulty": "easy",
        "definition": "The temporal end; the concluding time.",
        "sentence": "They were playing better at the close of the season.",
        "partOfSpeech": "noun"
    },
    {
        "word": "common",
        "valid": [
            "common"
        ],
        "difficulty": "medium",
        "definition": "A piece of open land for recreational use in an urban area.",
        "sentence": "The common man.",
        "partOfSpeech": "noun"
    },
    {
        "word": "drive",
        "valid": [
            "drive"
        ],
        "difficulty": "easy",
        "definition": "The act of applying force to propel something.",
        "sentence": "After reaching the desired velocity the drive is cut off.",
        "partOfSpeech": "noun"
    },
    {
        "word": "specific",
        "valid": [
            "specific"
        ],
        "difficulty": "hard",
        "definition": "A fact about some part (as opposed to general).",
        "sentence": "Quinine is a specific for malaria.",
        "partOfSpeech": "noun"
    },
    {
        "word": "several",
        "valid": [
            "several"
        ],
        "difficulty": "medium",
        "definition": "Of an indefinite number more than 2 or 3 but not many.",
        "sentence": "He came several times.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "gold",
        "valid": [
            "gold"
        ],
        "difficulty": "easy",
        "definition": "Coins made of gold.",
        "sentence": "He admired the gold of her hair.",
        "partOfSpeech": "noun"
    },
    {
        "word": "living",
        "valid": [
            "living"
        ],
        "difficulty": "medium",
        "definition": "The experience of being alive; the course of human events and activities.",
        "sentence": "Save your pity for the living.",
        "partOfSpeech": "noun"
    },
    {
        "word": "collection",
        "valid": [
            "collection"
        ],
        "difficulty": "expert",
        "definition": "Several things grouped together or considered as a whole.",
        "sentence": "Science is far more than a collection of facts and methods.",
        "partOfSpeech": "noun"
    },
    {
        "word": "called",
        "valid": [
            "called"
        ],
        "difficulty": "medium",
        "definition": "Form of call: a telephone connection.",
        "sentence": "Rye was called the grain of poverty.",
        "partOfSpeech": "noun"
    },
    {
        "word": "short",
        "valid": [
            "short"
        ],
        "difficulty": "easy",
        "definition": "The location on a baseball field where the shortstop is stationed.",
        "sentence": "Shortbread is a short crumbly cookie.",
        "partOfSpeech": "noun"
    },
    {
        "word": "arts",
        "valid": [
            "arts"
        ],
        "difficulty": "easy",
        "definition": "Studies intended to provide general knowledge and intellectual skills (rather than occupational or professional skills).",
        "sentence": "The college of arts and sciences.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lot",
        "valid": [
            "lot"
        ],
        "difficulty": "easy",
        "definition": "(often followed by `of') a large number or amount or extent.",
        "sentence": "They were an angry lot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ask",
        "valid": [
            "ask"
        ],
        "difficulty": "easy",
        "definition": "Make a request or demand for something to somebody.",
        "sentence": "Ask a question.",
        "partOfSpeech": "verb"
    },
    {
        "word": "display",
        "valid": [
            "display"
        ],
        "difficulty": "medium",
        "definition": "Something intended to communicate a particular impression.",
        "sentence": "Made a display of strength.",
        "partOfSpeech": "noun"
    },
    {
        "word": "limited",
        "valid": [
            "limited"
        ],
        "difficulty": "medium",
        "definition": "Public transport consisting of a fast train or bus that makes only a few scheduled stops.",
        "sentence": "A limited list of choices.",
        "partOfSpeech": "noun"
    },
    {
        "word": "powered",
        "valid": [
            "powered"
        ],
        "difficulty": "medium",
        "definition": "Having or using or propelled by means of power or power of a specified kind.",
        "sentence": "Powered flight.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "solutions",
        "valid": [
            "solutions"
        ],
        "difficulty": "hard",
        "definition": "Form of solution: a homogeneous mixture of two or more substances; frequently (but not necessarily) a liquid solution.",
        "sentence": "Some Blacks seek more radical solutions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "means",
        "valid": [
            "means"
        ],
        "difficulty": "easy",
        "definition": "Thing or person that acts to produce a particular effect or achieve an end.",
        "sentence": "A means of control.",
        "partOfSpeech": "noun"
    },
    {
        "word": "director",
        "valid": [
            "director"
        ],
        "difficulty": "hard",
        "definition": "Someone who controls resources and expenditures.",
        "sentence": "The director wanted the local Asahi reporter to go to the scene of the crime.",
        "partOfSpeech": "noun"
    },
    {
        "word": "daily",
        "valid": [
            "daily"
        ],
        "difficulty": "easy",
        "definition": "A newspaper that is published every day.",
        "sentence": "Daily routine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "beach",
        "valid": [
            "beach"
        ],
        "difficulty": "easy",
        "definition": "An area of sand sloping down to the water of a sea or lake.",
        "sentence": "I was planning on going to the beach today, but then it started to rain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "past",
        "valid": [
            "past"
        ],
        "difficulty": "easy",
        "definition": "The time that has elapsed.",
        "sentence": "Forget the past.",
        "partOfSpeech": "noun"
    },
    {
        "word": "natural",
        "valid": [
            "natural"
        ],
        "difficulty": "medium",
        "definition": "Someone regarded as certain to succeed.",
        "sentence": "He's a natural for the job.",
        "partOfSpeech": "noun"
    },
    {
        "word": "whether",
        "valid": [
            "whether"
        ],
        "difficulty": "medium",
        "definition": "Which (of two); which one (of two); -- used interrogatively and relatively. [Archaic] Now choose yourself whether that you liketh. Chaucer. One day in doubt I cast for to compare W.",
        "sentence": "It is up to you to decide whether we will go there or not.",
        "partOfSpeech": "noun"
    },
    {
        "word": "due",
        "valid": [
            "due"
        ],
        "difficulty": "easy",
        "definition": "That which is deserved or owed.",
        "sentence": "Give the devil his due.",
        "partOfSpeech": "noun"
    },
    {
        "word": "electronics",
        "valid": [
            "electronics"
        ],
        "difficulty": "expert",
        "definition": "The branch of physics that deals with the emission and effects of electrons and with the use of electronic devices.",
        "sentence": "He has no equal in the field of electronics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "five",
        "valid": [
            "five"
        ],
        "difficulty": "easy",
        "definition": "The cardinal number that is the sum of four and one.",
        "sentence": "It will take five to ten years for the technology to be ready.",
        "partOfSpeech": "noun"
    },
    {
        "word": "upon",
        "valid": [
            "upon"
        ],
        "difficulty": "easy",
        "definition": "On; -- used in all the senses of that word, with which it is interchangeable. \"Upon an hill of flowers.\" Chaucer. Our host upon his stirrups stood anon. Chaucer. Thou shalt take of.",
        "sentence": "You must not look upon him as great.",
        "partOfSpeech": "noun"
    },
    {
        "word": "period",
        "valid": [
            "period"
        ],
        "difficulty": "medium",
        "definition": "An amount of time.",
        "sentence": "In England they call a period a stop.",
        "partOfSpeech": "noun"
    },
    {
        "word": "planning",
        "valid": [
            "planning"
        ],
        "difficulty": "hard",
        "definition": "An act of formulating a program for a definite course of action.",
        "sentence": "The planning was more fun than the trip itself.",
        "partOfSpeech": "noun"
    },
    {
        "word": "database",
        "valid": [
            "database"
        ],
        "difficulty": "hard",
        "definition": "An organized body of related information.",
        "sentence": "Please change your database to reflect the new address as follows.",
        "partOfSpeech": "noun"
    },
    {
        "word": "says",
        "valid": [
            "says"
        ],
        "difficulty": "easy",
        "definition": "Form of say: the chance to speak.",
        "sentence": "Whatever I do, she says I can do better.",
        "partOfSpeech": "noun"
    },
    {
        "word": "official",
        "valid": [
            "official"
        ],
        "difficulty": "hard",
        "definition": "A worker who holds or is invested with an office.",
        "sentence": "The golfer asked for an official who could give him a ruling.",
        "partOfSpeech": "noun"
    },
    {
        "word": "weather",
        "valid": [
            "weather"
        ],
        "difficulty": "medium",
        "definition": "The atmospheric conditions that comprise the state of the atmosphere in terms of temperature and wind and clouds and precipitation.",
        "sentence": "They were hoping for good weather.",
        "partOfSpeech": "noun"
    },
    {
        "word": "land",
        "valid": [
            "land"
        ],
        "difficulty": "easy",
        "definition": "The land on which real estate is located.",
        "sentence": "There's no work on the land any more.",
        "partOfSpeech": "noun"
    },
    {
        "word": "average",
        "valid": [
            "average"
        ],
        "difficulty": "medium",
        "definition": "A statistic describing the location of a distribution.",
        "sentence": "He is about average in height.",
        "partOfSpeech": "noun"
    },
    {
        "word": "done",
        "valid": [
            "done"
        ],
        "difficulty": "easy",
        "definition": "Having finished or arrived at completion.",
        "sentence": "Certain to make history before he's done.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "technical",
        "valid": [
            "technical"
        ],
        "difficulty": "hard",
        "definition": "A pickup truck with a gun mounted on it.",
        "sentence": "Analysts content that the stock market is due for a technical rally.",
        "partOfSpeech": "noun"
    },
    {
        "word": "window",
        "valid": [
            "window"
        ],
        "difficulty": "medium",
        "definition": "A framework of wood or metal that contains a glass windowpane and is built into a wall or roof to admit light or air.",
        "sentence": "He stuck his head in the window.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pro",
        "valid": [
            "pro"
        ],
        "difficulty": "easy",
        "definition": "An athlete who plays for pay.",
        "sentence": "A pro vote.",
        "partOfSpeech": "noun"
    },
    {
        "word": "region",
        "valid": [
            "region"
        ],
        "difficulty": "medium",
        "definition": "The extended spatial location of something.",
        "sentence": "In the abdominal region.",
        "partOfSpeech": "noun"
    },
    {
        "word": "island",
        "valid": [
            "island"
        ],
        "difficulty": "medium",
        "definition": "A land mass (smaller than a continent) that is surrounded by water.",
        "sentence": "Seen from the sky, the island was very beautiful.",
        "partOfSpeech": "noun"
    },
    {
        "word": "record",
        "valid": [
            "record"
        ],
        "difficulty": "medium",
        "definition": "Anything (such as a document or a phonograph record or a photograph) providing permanent evidence of or information about past events.",
        "sentence": "The lawyer has a good record.",
        "partOfSpeech": "noun"
    },
    {
        "word": "direct",
        "valid": [
            "direct"
        ],
        "difficulty": "medium",
        "definition": "Command with authority.",
        "sentence": "Direct your anger towards others, not towards yourself.",
        "partOfSpeech": "verb"
    },
    {
        "word": "conference",
        "valid": [
            "conference"
        ],
        "difficulty": "expert",
        "definition": "A prearranged meeting for consultation or exchange of information or discussion (especially one with a formal agenda).",
        "sentence": "During the press conference, the President touched on foreign relations.",
        "partOfSpeech": "noun"
    },
    {
        "word": "environment",
        "valid": [
            "environment"
        ],
        "difficulty": "expert",
        "definition": "The totality of surrounding conditions.",
        "sentence": "He longed for the comfortable environment of his living room.",
        "partOfSpeech": "noun"
    },
    {
        "word": "records",
        "valid": [
            "records"
        ],
        "difficulty": "medium",
        "definition": "Form of record: anything (such as a document or a phonograph record or a photograph) providing permanent evidence of or information about past events.",
        "sentence": "You could get into the Guinness Book of World Records as the heaviest drinker.",
        "partOfSpeech": "noun"
    },
    {
        "word": "district",
        "valid": [
            "district"
        ],
        "difficulty": "hard",
        "definition": "A region marked off for administrative or other purposes.",
        "sentence": "The panic spread through the district in an instant.",
        "partOfSpeech": "noun"
    },
    {
        "word": "calendar",
        "valid": [
            "calendar"
        ],
        "difficulty": "hard",
        "definition": "A system of timekeeping that defines the beginning and length and divisions of the year.",
        "sentence": "I have you on my calendar for next Monday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "costs",
        "valid": [
            "costs"
        ],
        "difficulty": "easy",
        "definition": "Pecuniary reimbursement to the winning party for the expenses of litigation.",
        "sentence": "It costs an arm and a leg.",
        "partOfSpeech": "noun"
    },
    {
        "word": "style",
        "valid": [
            "style"
        ],
        "difficulty": "easy",
        "definition": "How something is done or how it happens.",
        "sentence": "A cartilaginous style.",
        "partOfSpeech": "noun"
    },
    {
        "word": "url",
        "valid": [
            "url"
        ],
        "difficulty": "easy",
        "definition": "The address of a web page on the world wide web.",
        "sentence": "Do you suppose I should attach the web page's URL on those occasions?",
        "partOfSpeech": "noun"
    },
    {
        "word": "front",
        "valid": [
            "front"
        ],
        "difficulty": "easy",
        "definition": "The side that is forward or prominent.",
        "sentence": "He put up a bold front.",
        "partOfSpeech": "noun"
    },
    {
        "word": "statement",
        "valid": [
            "statement"
        ],
        "difficulty": "hard",
        "definition": "A message that is stated or declared; a communication (oral or written) setting forth particulars or facts etc.",
        "sentence": "According to his statement he was in London on that day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "update",
        "valid": [
            "update"
        ],
        "difficulty": "medium",
        "definition": "Information or data that updates.",
        "sentence": "The server update ran overnight.",
        "partOfSpeech": "noun"
    },
    {
        "word": "parts",
        "valid": [
            "parts"
        ],
        "difficulty": "easy",
        "definition": "The local environment.",
        "sentence": "He hasn't been seen around these parts in years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ever",
        "valid": [
            "ever"
        ],
        "difficulty": "easy",
        "definition": "At any time.",
        "sentence": "Ever hoping to strike it rich.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "downloads",
        "valid": [
            "downloads"
        ],
        "difficulty": "hard",
        "definition": "Form of download: transfer a file or program from a central computer to a smaller computer or to a computer at a remote location.",
        "sentence": "Tom often downloads movies.",
        "partOfSpeech": "verb"
    },
    {
        "word": "early",
        "valid": [
            "early"
        ],
        "difficulty": "easy",
        "definition": "At or near the beginning of a period of time or course of events or before the usual or expected time.",
        "sentence": "Early morning.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "miles",
        "valid": [
            "miles"
        ],
        "difficulty": "easy",
        "definition": "Form of mil: a Cypriot monetary unit equal to one thousandth of a pound.",
        "sentence": "You can see for miles from the roof.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sound",
        "valid": [
            "sound"
        ],
        "difficulty": "easy",
        "definition": "The particular auditory effect produced by a given cause.",
        "sentence": "The sound of rain on the roof.",
        "partOfSpeech": "noun"
    },
    {
        "word": "resource",
        "valid": [
            "resource"
        ],
        "difficulty": "hard",
        "definition": "Available source of wealth; a new or reserve supply that can be drawn upon when needed.",
        "sentence": "The local library is a valuable resource.",
        "partOfSpeech": "noun"
    },
    {
        "word": "present",
        "valid": [
            "present"
        ],
        "difficulty": "medium",
        "definition": "The period of time that is happening now; any continuous stretch of time including the moment of speech.",
        "sentence": "His tie was a present from his wife.",
        "partOfSpeech": "noun"
    },
    {
        "word": "applications",
        "valid": [
            "applications"
        ],
        "difficulty": "expert",
        "definition": "Form of application: the act of bringing something to bear; using it for a particular purpose.",
        "sentence": "We've received a lot of applications in answer to our advertisements.",
        "partOfSpeech": "noun"
    },
    {
        "word": "either",
        "valid": [
            "either"
        ],
        "difficulty": "medium",
        "definition": "After a negative statement used as an intensive meaning something like `likewise' or `also'.",
        "sentence": "He isn't stupid, but he isn't exactly a genius either.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "ago",
        "valid": [
            "ago"
        ],
        "difficulty": "easy",
        "definition": "Gone by; or in the past.",
        "sentence": "Two years ago.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "document",
        "valid": [
            "document"
        ],
        "difficulty": "hard",
        "definition": "Writing that provides information (especially information of an official nature).",
        "sentence": "Can you document your claims?",
        "partOfSpeech": "noun"
    },
    {
        "word": "word",
        "valid": [
            "word"
        ],
        "difficulty": "easy",
        "definition": "A unit of language that native speakers can identify.",
        "sentence": "He went to carry the Word to the heathen.",
        "partOfSpeech": "noun"
    },
    {
        "word": "works",
        "valid": [
            "works"
        ],
        "difficulty": "easy",
        "definition": "Buildings for carrying on industrial labor.",
        "sentence": "The reward for good works.",
        "partOfSpeech": "noun"
    },
    {
        "word": "material",
        "valid": [
            "material"
        ],
        "difficulty": "hard",
        "definition": "The tangible substance that goes into the makeup of a physical object.",
        "sentence": "She measured off enough material for a dress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bill",
        "valid": [
            "bill"
        ],
        "difficulty": "easy",
        "definition": "A statute in draft before it becomes law.",
        "sentence": "He pulled down the bill of his cap and trudged ahead.",
        "partOfSpeech": "noun"
    },
    {
        "word": "written",
        "valid": [
            "written"
        ],
        "difficulty": "medium",
        "definition": "Set down in writing in any of various ways.",
        "sentence": "Written evidence.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "talk",
        "valid": [
            "talk"
        ],
        "difficulty": "easy",
        "definition": "An exchange of ideas via conversation.",
        "sentence": "I attended an interesting talk on local history.",
        "partOfSpeech": "noun"
    },
    {
        "word": "federal",
        "valid": [
            "federal"
        ],
        "difficulty": "medium",
        "definition": "A member of the Union Army during the American Civil War.",
        "sentence": "The Federal Bureau of Investigation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hosting",
        "valid": [
            "hosting"
        ],
        "difficulty": "medium",
        "definition": "Form of host: a person who invites guests to a social event (such as a party in his or her own home) and who is responsible for them while they are there.",
        "sentence": "The city is hosting the fair.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rules",
        "valid": [
            "rules"
        ],
        "difficulty": "easy",
        "definition": "Form of rule: a principle or condition that customarily governs behavior.",
        "sentence": "You must act in accordance with the rules.",
        "partOfSpeech": "noun"
    },
    {
        "word": "final",
        "valid": [
            "final"
        ],
        "difficulty": "easy",
        "definition": "The final match between the winners of all previous matches in an elimination tournament.",
        "sentence": "The judge's decision is final.",
        "partOfSpeech": "noun"
    },
    {
        "word": "adult",
        "valid": [
            "adult"
        ],
        "difficulty": "easy",
        "definition": "A fully developed person from maturity onward.",
        "sentence": "An adult animal.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tickets",
        "valid": [
            "tickets"
        ],
        "difficulty": "medium",
        "definition": "Form of ticket: a commercial document showing that the holder is entitled to something (as to ride on public transportation or to enter a public entertainment).",
        "sentence": "There were no tickets available for Friday's performance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "thing",
        "valid": [
            "thing"
        ],
        "difficulty": "easy",
        "definition": "A special situation.",
        "sentence": "How could you do such a thing?",
        "partOfSpeech": "noun"
    },
    {
        "word": "centre",
        "valid": [
            "centre"
        ],
        "difficulty": "medium",
        "definition": "A low-lying region in central France.",
        "sentence": "Who do you think is the best centre in the NBA?",
        "partOfSpeech": "noun"
    },
    {
        "word": "requirements",
        "valid": [
            "requirements"
        ],
        "difficulty": "expert",
        "definition": "Form of requirement: required activity.",
        "sentence": "It conforms to the requirements of logic.",
        "partOfSpeech": "noun"
    },
    {
        "word": "via",
        "valid": [
            "via"
        ],
        "difficulty": "easy",
        "definition": "A road way. Via Lactea Etym: [L.] (Anat.), the Milky Way, or Galaxy. See Galaxy, 1. -- Via media Etym: [L.] (Theol.), the middle way; -- a name applied to their own position by the.",
        "sentence": "Would you please send me details of your products via e-mail as an attachment?",
        "partOfSpeech": "noun"
    },
    {
        "word": "cheap",
        "valid": [
            "cheap"
        ],
        "difficulty": "easy",
        "definition": "Relatively low in price or charging low prices.",
        "sentence": "It would have been cheap at twice the price.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "kids",
        "valid": [
            "kids"
        ],
        "difficulty": "easy",
        "definition": "Form of kid: a young person of either sex.",
        "sentence": "We tried so hard to make things better for our kids that we made them worse.",
        "partOfSpeech": "noun"
    },
    {
        "word": "finance",
        "valid": [
            "finance"
        ],
        "difficulty": "medium",
        "definition": "The commercial activity of providing funds and capital.",
        "sentence": "Can we finance the addition to our home?",
        "partOfSpeech": "noun"
    },
    {
        "word": "true",
        "valid": [
            "true"
        ],
        "difficulty": "easy",
        "definition": "Proper alignment; the property possessed by something that is in correct or proper alignment.",
        "sentence": "Out of true.",
        "partOfSpeech": "noun"
    },
    {
        "word": "minutes",
        "valid": [
            "minutes"
        ],
        "difficulty": "medium",
        "definition": "A written account of what transpired at a meeting.",
        "sentence": "I can walk to school in 10 minutes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "else",
        "valid": [
            "else"
        ],
        "difficulty": "easy",
        "definition": "Other; one or something beside; as, Who else is coming What else shall I give Do you expect anything else \"Bastards and else.\" Shak. Note: This word always follows its noun. It is.",
        "sentence": "I can only wonder if this is the same for everyone else.",
        "partOfSpeech": "noun"
    },
    {
        "word": "third",
        "valid": [
            "third"
        ],
        "difficulty": "easy",
        "definition": "One of three equal parts of a divisible whole.",
        "sentence": "He is playing third.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rock",
        "valid": [
            "rock"
        ],
        "difficulty": "easy",
        "definition": "A lump or mass of hard consolidated mineral matter.",
        "sentence": "Rock is a generic term for the range of styles that evolved out of rock'n'roll.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gifts",
        "valid": [
            "gifts"
        ],
        "difficulty": "easy",
        "definition": "Form of gift: something acquired without compensation.",
        "sentence": "Secret gifts are openly rewarded.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reading",
        "valid": [
            "reading"
        ],
        "difficulty": "medium",
        "definition": "The cognitive process of understanding a written linguistic message.",
        "sentence": "He has a job meter reading for the gas company.",
        "partOfSpeech": "noun"
    },
    {
        "word": "topics",
        "valid": [
            "topics"
        ],
        "difficulty": "medium",
        "definition": "Form of topic: the subject matter of a conversation or discussion.",
        "sentence": "I steered clear of sensitive topics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bad",
        "valid": [
            "bad"
        ],
        "difficulty": "easy",
        "definition": "That which is below standard or expectations as of ethics or decency.",
        "sentence": "Take the bad with the good.",
        "partOfSpeech": "noun"
    },
    {
        "word": "individual",
        "valid": [
            "individual"
        ],
        "difficulty": "expert",
        "definition": "A human being.",
        "sentence": "Individual drops of rain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tips",
        "valid": [
            "tips"
        ],
        "difficulty": "easy",
        "definition": "Form of tip: the extreme end of something; especially something pointed.",
        "sentence": "This article contains tips for those who are eager to increase their vocabulary.",
        "partOfSpeech": "noun"
    },
    {
        "word": "plus",
        "valid": [
            "plus"
        ],
        "difficulty": "easy",
        "definition": "A useful or valuable quality.",
        "sentence": "Four plus three equals seven.",
        "partOfSpeech": "noun"
    },
    {
        "word": "auto",
        "valid": [
            "auto"
        ],
        "difficulty": "easy",
        "definition": "A motor vehicle with four wheels; usually propelled by an internal combustion engine.",
        "sentence": "We supply parts to the auto manufacturer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cover",
        "valid": [
            "cover"
        ],
        "difficulty": "easy",
        "definition": "A covering that serves to conceal or shelter something.",
        "sentence": "The cover concealed their guns from enemy aircraft.",
        "partOfSpeech": "noun"
    },
    {
        "word": "usually",
        "valid": [
            "usually"
        ],
        "difficulty": "medium",
        "definition": "Under normal conditions.",
        "sentence": "Usually she was late.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "edit",
        "valid": [
            "edit"
        ],
        "difficulty": "easy",
        "definition": "Prepare for publication or presentation by correcting, revising, or adapting.",
        "sentence": "Edit a book on lexical semantics.",
        "partOfSpeech": "verb"
    },
    {
        "word": "together",
        "valid": [
            "together"
        ],
        "difficulty": "hard",
        "definition": "Mentally and emotionally stable.",
        "sentence": "She's really together.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "videos",
        "valid": [
            "videos"
        ],
        "difficulty": "medium",
        "definition": "Form of video: the visible part of a television transmission.",
        "sentence": "Karaoke, TV games, videos and a fridge ... love hotels nowadays really have everything.",
        "partOfSpeech": "noun"
    },
    {
        "word": "percent",
        "valid": [
            "percent"
        ],
        "difficulty": "medium",
        "definition": "A proportion in relation to a whole (which is usually the amount per hundred).",
        "sentence": "More than 90 percent of visits to a web page are from search engines.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fast",
        "valid": [
            "fast"
        ],
        "difficulty": "easy",
        "definition": "Abstaining from food.",
        "sentence": "Before the medical exam, you must fast.",
        "partOfSpeech": "noun"
    },
    {
        "word": "function",
        "valid": [
            "function"
        ],
        "difficulty": "hard",
        "definition": "A mathematical relation such that each element of a given set (the domain of the function) is associated with an element of another set (the range of the function).",
        "sentence": "The function of a teacher.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fact",
        "valid": [
            "fact"
        ],
        "difficulty": "easy",
        "definition": "A piece of information about circumstances that exist or events that have occurred.",
        "sentence": "Your fears have no basis in fact.",
        "partOfSpeech": "noun"
    },
    {
        "word": "unit",
        "valid": [
            "unit"
        ],
        "difficulty": "easy",
        "definition": "Any division of quantity accepted as a standard of measurement or exchange.",
        "sentence": "The team is a unit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "getting",
        "valid": [
            "getting"
        ],
        "difficulty": "medium",
        "definition": "The act of acquiring something.",
        "sentence": "He's much more interested in the getting than in the giving.",
        "partOfSpeech": "noun"
    },
    {
        "word": "global",
        "valid": [
            "global"
        ],
        "difficulty": "medium",
        "definition": "Involving the entire earth; not limited or provincial in scope.",
        "sentence": "Global war.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "tech",
        "valid": [
            "tech"
        ],
        "difficulty": "easy",
        "definition": "A school teaching mechanical and industrial arts and the applied sciences.",
        "sentence": "Take a look at the FAQ before you call tech support.",
        "partOfSpeech": "noun"
    },
    {
        "word": "meet",
        "valid": [
            "meet"
        ],
        "difficulty": "easy",
        "definition": "A meeting at which a number of athletic contests are held.",
        "sentence": "Does this paper meet the requirements for the degree?",
        "partOfSpeech": "noun"
    },
    {
        "word": "far",
        "valid": [
            "far"
        ],
        "difficulty": "easy",
        "definition": "A terrorist organization that seeks to overthrow the government dominated by Tutsi and to institute Hutu control again.",
        "sentence": "We come from a far country.",
        "partOfSpeech": "noun"
    },
    {
        "word": "economic",
        "valid": [
            "economic"
        ],
        "difficulty": "hard",
        "definition": "Of or relating to an economy, the system of production and management of material wealth.",
        "sentence": "An economic use of home heating oil.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "player",
        "valid": [
            "player"
        ],
        "difficulty": "medium",
        "definition": "A person who participates in or is skilled at some game.",
        "sentence": "He was a major player in setting up the corporation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "projects",
        "valid": [
            "projects"
        ],
        "difficulty": "hard",
        "definition": "Form of project: any piece of work that is undertaken or attempted.",
        "sentence": "A tall tree projects its long shadow on the water.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lyrics",
        "valid": [
            "lyrics"
        ],
        "difficulty": "medium",
        "definition": "Form of lyric: the text of a popular song or musical-comedy number.",
        "sentence": "If you look at the lyrics, they don't really mean much.",
        "partOfSpeech": "noun"
    },
    {
        "word": "often",
        "valid": [
            "often"
        ],
        "difficulty": "easy",
        "definition": "Many times at short intervals.",
        "sentence": "We often met over a cup of coffee.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "subscribe",
        "valid": [
            "subscribe"
        ],
        "difficulty": "hard",
        "definition": "Offer to buy, as of stocks and shares.",
        "sentence": "I subscribe to your view on abortion.",
        "partOfSpeech": "verb"
    },
    {
        "word": "submit",
        "valid": [
            "submit"
        ],
        "difficulty": "medium",
        "definition": "Refer for judgment or consideration.",
        "sentence": "I submit to you that the accused is guilty.",
        "partOfSpeech": "verb"
    },
    {
        "word": "amount",
        "valid": [
            "amount"
        ],
        "difficulty": "medium",
        "definition": "A quantity of money.",
        "sentence": "An adequate amount of food for four people.",
        "partOfSpeech": "noun"
    },
    {
        "word": "watch",
        "valid": [
            "watch"
        ],
        "difficulty": "easy",
        "definition": "A small portable timepiece.",
        "sentence": "Watch how the dog chases the cats away.",
        "partOfSpeech": "noun"
    },
    {
        "word": "included",
        "valid": [
            "included"
        ],
        "difficulty": "hard",
        "definition": "Enclosed in the same envelope or package.",
        "sentence": "The included check.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "feel",
        "valid": [
            "feel"
        ],
        "difficulty": "easy",
        "definition": "An intuitive awareness.",
        "sentence": "The girls hated it when he tried to sneak a feel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "though",
        "valid": [
            "though"
        ],
        "difficulty": "medium",
        "definition": "However.",
        "sentence": "It might be unpleasant, though.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "bank",
        "valid": [
            "bank"
        ],
        "difficulty": "easy",
        "definition": "Sloping land (especially the slope beside a body of water).",
        "sentence": "The plane went into a steep bank.",
        "partOfSpeech": "noun"
    },
    {
        "word": "risk",
        "valid": [
            "risk"
        ],
        "difficulty": "easy",
        "definition": "A source of danger; a possibility of incurring loss or misfortune.",
        "sentence": "Why risk your life?",
        "partOfSpeech": "noun"
    },
    {
        "word": "thanks",
        "valid": [
            "thanks"
        ],
        "difficulty": "medium",
        "definition": "An acknowledgment of appreciation.",
        "sentence": "Thanks to hard work it was a great success.",
        "partOfSpeech": "noun"
    },
    {
        "word": "everything",
        "valid": [
            "everything"
        ],
        "difficulty": "expert",
        "definition": "Whatever pertains to the subject under consideration; all things. More wise, more learned, more just, more everything. Pope.",
        "sentence": "It would take forever for me to explain everything.",
        "partOfSpeech": "noun"
    },
    {
        "word": "deals",
        "valid": [
            "deals"
        ],
        "difficulty": "easy",
        "definition": "Form of deal: a particular instance of buying or selling.",
        "sentence": "I got sucked in on a lot of phony deals.",
        "partOfSpeech": "noun"
    },
    {
        "word": "various",
        "valid": [
            "various"
        ],
        "difficulty": "medium",
        "definition": "Of many different kinds purposefully arranged but lacking any uniformity.",
        "sentence": "His disguises are many and various.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "words",
        "valid": [
            "words"
        ],
        "difficulty": "easy",
        "definition": "The words that are spoken.",
        "sentence": "He has a gift for words.",
        "partOfSpeech": "noun"
    },
    {
        "word": "production",
        "valid": [
            "production"
        ],
        "difficulty": "expert",
        "definition": "The act or process of producing something.",
        "sentence": "The appellate court demanded the production of all documents.",
        "partOfSpeech": "noun"
    },
    {
        "word": "commercial",
        "valid": [
            "commercial"
        ],
        "difficulty": "expert",
        "definition": "A commercially sponsored ad on radio or television.",
        "sentence": "Commercial trucker.",
        "partOfSpeech": "noun"
    },
    {
        "word": "weight",
        "valid": [
            "weight"
        ],
        "difficulty": "medium",
        "definition": "The vertical force exerted by a mass as a result of gravity.",
        "sentence": "His opinion carries great weight.",
        "partOfSpeech": "noun"
    },
    {
        "word": "town",
        "valid": [
            "town"
        ],
        "difficulty": "easy",
        "definition": "An urban area with a fixed boundary that is smaller than a city.",
        "sentence": "The whole town cheered the team.",
        "partOfSpeech": "noun"
    },
    {
        "word": "heart",
        "valid": [
            "heart"
        ],
        "difficulty": "easy",
        "definition": "The locus of feelings and intuitions.",
        "sentence": "He had a change of heart.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advertising",
        "valid": [
            "advertising"
        ],
        "difficulty": "expert",
        "definition": "A public promotion of some product or service.",
        "sentence": "It should be stressed that we are often influenced by advertising without being aware of it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "received",
        "valid": [
            "received"
        ],
        "difficulty": "hard",
        "definition": "Conforming to the established language usage of educated native speakers; \"standard English\" (American); \"received standard English is sometimes called the King's English\" (British).",
        "sentence": "A received moral idea.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "choose",
        "valid": [
            "choose"
        ],
        "difficulty": "medium",
        "definition": "Pick out, select, or choose from a number of alternatives.",
        "sentence": "Choose a good husband for your daughter.",
        "partOfSpeech": "verb"
    },
    {
        "word": "treatment",
        "valid": [
            "treatment"
        ],
        "difficulty": "hard",
        "definition": "Care provided to improve a situation (especially medical procedures or applications that are intended to relieve illness or injury).",
        "sentence": "The treatment of water sewage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "newsletter",
        "valid": [
            "newsletter"
        ],
        "difficulty": "expert",
        "definition": "Report or open letter giving informal or confidential news of interest to a special group.",
        "sentence": "You want more information about our activities? Subscribe to our newsletter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "archives",
        "valid": [
            "archives"
        ],
        "difficulty": "hard",
        "definition": "Collection of records especially about an institution.",
        "sentence": "Putting in place a systematic classification of our archives could be a great time saver.",
        "partOfSpeech": "noun"
    },
    {
        "word": "points",
        "valid": [
            "points"
        ],
        "difficulty": "medium",
        "definition": "Form of point: a geometric element that has position but no extension.",
        "sentence": "The essential points of my argument have been expressed in the preceding pages.",
        "partOfSpeech": "noun"
    },
    {
        "word": "knowledge",
        "valid": [
            "knowledge"
        ],
        "difficulty": "hard",
        "definition": "The psychological result of perception and learning and reasoning.",
        "sentence": "You have knowledge and experience as well.",
        "partOfSpeech": "noun"
    },
    {
        "word": "magazine",
        "valid": [
            "magazine"
        ],
        "difficulty": "hard",
        "definition": "A periodic publication containing pictures and stories and articles of interest to those who purchase it or subscribe to it.",
        "sentence": "It takes several years before a magazine starts to break even or make money.",
        "partOfSpeech": "noun"
    },
    {
        "word": "error",
        "valid": [
            "error"
        ],
        "difficulty": "easy",
        "definition": "A wrong action attributable to bad judgment or ignorance or inattention.",
        "sentence": "You had better not repeat such an error.",
        "partOfSpeech": "noun"
    },
    {
        "word": "camera",
        "valid": [
            "camera"
        ],
        "difficulty": "medium",
        "definition": "Equipment for taking photographs (usually consisting of a lightproof box with a lens at one end and light-sensitive film at the other).",
        "sentence": "I'm going to buy myself a new camera, digital this time.",
        "partOfSpeech": "noun"
    },
    {
        "word": "girl",
        "valid": [
            "girl"
        ],
        "difficulty": "easy",
        "definition": "A young female.",
        "sentence": "The baby was a girl.",
        "partOfSpeech": "noun"
    },
    {
        "word": "currently",
        "valid": [
            "currently"
        ],
        "difficulty": "hard",
        "definition": "At this time or period; now.",
        "sentence": "Currently they live in Connecticut.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "construction",
        "valid": [
            "construction"
        ],
        "difficulty": "expert",
        "definition": "The act of constructing something.",
        "sentence": "The assignment was to make a construction that could be used in proving the Pythagorean theorem.",
        "partOfSpeech": "noun"
    },
    {
        "word": "toys",
        "valid": [
            "toys"
        ],
        "difficulty": "easy",
        "definition": "Form of toy: an artifact designed to be played with.",
        "sentence": "Bill often plays with toys by himself.",
        "partOfSpeech": "noun"
    },
    {
        "word": "registered",
        "valid": [
            "registered"
        ],
        "difficulty": "expert",
        "definition": "Officially recorded with or certified by a recognized breed association; especially in a stud book.",
        "sentence": "Record is made of `registered mail' at each point on its route to assure safe delivery.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "clear",
        "valid": [
            "clear"
        ],
        "difficulty": "easy",
        "definition": "The state of being free of suspicion.",
        "sentence": "Investigation showed that he was in the clear.",
        "partOfSpeech": "noun"
    },
    {
        "word": "golf",
        "valid": [
            "golf"
        ],
        "difficulty": "easy",
        "definition": "A game played on a large open course with 9 or 18 holes; the object is use as few strokes as possible in playing all the holes.",
        "sentence": "We played golf in spite of the rain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "receive",
        "valid": [
            "receive"
        ],
        "difficulty": "medium",
        "definition": "Get something; come into possession of.",
        "sentence": "Receive the incoming radio signals.",
        "partOfSpeech": "verb"
    },
    {
        "word": "domain",
        "valid": [
            "domain"
        ],
        "difficulty": "medium",
        "definition": "A particular environment or walk of life.",
        "sentence": "His domain extended into Europe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "methods",
        "valid": [
            "methods"
        ],
        "difficulty": "medium",
        "definition": "Form of method: a way of doing something, especially a systematic way; implies an orderly logical arrangement (usually in steps).",
        "sentence": "Modern methods improved industry.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chapter",
        "valid": [
            "chapter"
        ],
        "difficulty": "medium",
        "definition": "A subdivision of a written work; usually numbered and titled.",
        "sentence": "He read a chapter every night before falling asleep.",
        "partOfSpeech": "noun"
    },
    {
        "word": "makes",
        "valid": [
            "makes"
        ],
        "difficulty": "easy",
        "definition": "Form of mak: a terrorist organization founded by Osama bin Laden in the 1980s to provide money and recruit fighters around the world; enlisted and transported thousands of men to Afghanistan to fight the Russians; a split in the group led bin Laden and the extremist faction of MAK to form al-Qaeda.",
        "sentence": "The orchestra makes discordant noises when tuning up.",
        "partOfSpeech": "noun"
    },
    {
        "word": "protection",
        "valid": [
            "protection"
        ],
        "difficulty": "expert",
        "definition": "The activity of protecting someone or something.",
        "sentence": "Every store in the neighborhood had to pay him protection.",
        "partOfSpeech": "noun"
    },
    {
        "word": "policies",
        "valid": [
            "policies"
        ],
        "difficulty": "hard",
        "definition": "Form of policy: a plan of action adopted by an individual or social group.",
        "sentence": "It is important for a nation to have an adequate mix of monetary and fiscal policies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "loan",
        "valid": [
            "loan"
        ],
        "difficulty": "easy",
        "definition": "The temporary provision of money (usually at interest).",
        "sentence": "Loan me some money.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wide",
        "valid": [
            "wide"
        ],
        "difficulty": "easy",
        "definition": "Having great (or a certain) extent from one side to the other.",
        "sentence": "The kick was wide.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "beauty",
        "valid": [
            "beauty"
        ],
        "difficulty": "medium",
        "definition": "The qualities that give pleasure to the senses.",
        "sentence": "Beauty lies in the eyes of the one who sees.",
        "partOfSpeech": "noun"
    },
    {
        "word": "manager",
        "valid": [
            "manager"
        ],
        "difficulty": "medium",
        "definition": "Someone who controls resources and expenditures.",
        "sentence": "The manager sat on the bench with his arms folded.",
        "partOfSpeech": "noun"
    },
    {
        "word": "position",
        "valid": [
            "position"
        ],
        "difficulty": "hard",
        "definition": "The particular portion of space occupied by something.",
        "sentence": "What position does he play?",
        "partOfSpeech": "noun"
    },
    {
        "word": "taken",
        "valid": [
            "taken"
        ],
        "difficulty": "easy",
        "definition": "Understood in a certain way; made sense of.",
        "sentence": "The child was taken ill.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "sort",
        "valid": [
            "sort"
        ],
        "difficulty": "easy",
        "definition": "A category of things distinguished by some common characteristic or quality.",
        "sentence": "She wore a sort of magenta dress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "listings",
        "valid": [
            "listings"
        ],
        "difficulty": "hard",
        "definition": "Form of listing: a database containing an ordered array of items (names or topics).",
        "sentence": "Drew constantly checks government listings of unclaimed property.",
        "partOfSpeech": "noun"
    },
    {
        "word": "models",
        "valid": [
            "models"
        ],
        "difficulty": "medium",
        "definition": "Form of model: a hypothetical description of a complex entity or process.",
        "sentence": "The Greeks made theoretical models of geometry.",
        "partOfSpeech": "noun"
    },
    {
        "word": "known",
        "valid": [
            "known"
        ],
        "difficulty": "easy",
        "definition": "Apprehended with certainty.",
        "sentence": "A known quantity.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "half",
        "valid": [
            "half"
        ],
        "difficulty": "easy",
        "definition": "One of two equal parts of a divisible whole.",
        "sentence": "Half a loaf.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cases",
        "valid": [
            "cases"
        ],
        "difficulty": "easy",
        "definition": "Form of case: an occurrence of something.",
        "sentence": "Smoking is responsible for many cases of lung cancer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "step",
        "valid": [
            "step"
        ],
        "difficulty": "easy",
        "definition": "Any maneuver made as part of progress toward a goal.",
        "sentence": "He taught them the waltz step.",
        "partOfSpeech": "noun"
    },
    {
        "word": "engineering",
        "valid": [
            "engineering"
        ],
        "difficulty": "expert",
        "definition": "The practical application of technical and scientific knowledge to commerce or industry.",
        "sentence": "He had trouble deciding which branch of engineering to study.",
        "partOfSpeech": "noun"
    },
    {
        "word": "simple",
        "valid": [
            "simple"
        ],
        "difficulty": "medium",
        "definition": "Any herbaceous plant having medicinal properties.",
        "sentence": "A simple game.",
        "partOfSpeech": "noun"
    },
    {
        "word": "quick",
        "valid": [
            "quick"
        ],
        "difficulty": "easy",
        "definition": "Any area of the body that is highly sensitive to pain (as the flesh underneath the skin or a fingernail or toenail).",
        "sentence": "Quick of foot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "none",
        "valid": [
            "none"
        ],
        "difficulty": "easy",
        "definition": "A canonical hour that is the ninth hour of the day counting from sunrise.",
        "sentence": "Thou shalt have none other gods before me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wireless",
        "valid": [
            "wireless"
        ],
        "difficulty": "hard",
        "definition": "Medium for communication.",
        "sentence": "A wireless security system.",
        "partOfSpeech": "noun"
    },
    {
        "word": "license",
        "valid": [
            "license"
        ],
        "difficulty": "medium",
        "definition": "A legal document giving official permission to do something.",
        "sentence": "I think you'll have very little difficulty in getting a driver's license.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lake",
        "valid": [
            "lake"
        ],
        "difficulty": "easy",
        "definition": "A body of (usually fresh) water surrounded by land.",
        "sentence": "At the foot of the hill is a beautiful lake.",
        "partOfSpeech": "noun"
    },
    {
        "word": "whole",
        "valid": [
            "whole"
        ],
        "difficulty": "easy",
        "definition": "All of something including all its component elements or parts.",
        "sentence": "How big is that part compared to the whole?",
        "partOfSpeech": "noun"
    },
    {
        "word": "annual",
        "valid": [
            "annual"
        ],
        "difficulty": "medium",
        "definition": "A plant that completes its entire life cycle within the space of a year.",
        "sentence": "A border of annual flowering plants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "published",
        "valid": [
            "published"
        ],
        "difficulty": "hard",
        "definition": "Prepared and printed for distribution and sale.",
        "sentence": "Published accounts.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "later",
        "valid": [
            "later"
        ],
        "difficulty": "easy",
        "definition": "Coming at a subsequent time or stage.",
        "sentence": "He's going to the store but he'll be back here later.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "basic",
        "valid": [
            "basic"
        ],
        "difficulty": "easy",
        "definition": "A popular programming language that is relatively easy to learn; an acronym for beginner's all-purpose symbolic instruction code; no longer in general use.",
        "sentence": "A basic course in Russian.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shows",
        "valid": [
            "shows"
        ],
        "difficulty": "easy",
        "definition": "Form of show: the act of publicly exhibiting or entertaining.",
        "sentence": "It only shows you're not a robot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "corporate",
        "valid": [
            "corporate"
        ],
        "difficulty": "hard",
        "definition": "Of or belonging to a corporation.",
        "sentence": "Corporate' is an archaic term.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "church",
        "valid": [
            "church"
        ],
        "difficulty": "medium",
        "definition": "One of the groups of Christians who have their own beliefs and forms of worship.",
        "sentence": "Don't be late for church.",
        "partOfSpeech": "noun"
    },
    {
        "word": "method",
        "valid": [
            "method"
        ],
        "difficulty": "medium",
        "definition": "A way of doing something, especially a systematic way; implies an orderly logical arrangement (usually in steps).",
        "sentence": "Logic is a systematic method of coming to the wrong conclusion with confidence.",
        "partOfSpeech": "noun"
    },
    {
        "word": "purchase",
        "valid": [
            "purchase"
        ],
        "difficulty": "hard",
        "definition": "The acquisition of something for payment.",
        "sentence": "They closed the purchase with a handshake.",
        "partOfSpeech": "noun"
    },
    {
        "word": "customers",
        "valid": [
            "customers"
        ],
        "difficulty": "hard",
        "definition": "Form of customer: someone who pays for goods or services.",
        "sentence": "All you have to do is wait on any customers that come to the shop.",
        "partOfSpeech": "noun"
    },
    {
        "word": "active",
        "valid": [
            "active"
        ],
        "difficulty": "medium",
        "definition": "Chemical agent capable of activity.",
        "sentence": "The boy threw the ball' uses the active voice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "response",
        "valid": [
            "response"
        ],
        "difficulty": "hard",
        "definition": "A result.",
        "sentence": "This situation developed in response to events in Africa.",
        "partOfSpeech": "noun"
    },
    {
        "word": "practice",
        "valid": [
            "practice"
        ],
        "difficulty": "hard",
        "definition": "A customary way of operation or behavior.",
        "sentence": "It is their practice to give annual raises.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hardware",
        "valid": [
            "hardware"
        ],
        "difficulty": "hard",
        "definition": "Major items of military weaponry (as tanks or missile).",
        "sentence": "You will find this in a hardware store.",
        "partOfSpeech": "noun"
    },
    {
        "word": "figure",
        "valid": [
            "figure"
        ],
        "difficulty": "medium",
        "definition": "A diagram or picture illustrating textual material.",
        "sentence": "He made a figure of Santa Claus.",
        "partOfSpeech": "noun"
    },
    {
        "word": "materials",
        "valid": [
            "materials"
        ],
        "difficulty": "hard",
        "definition": "Form of material: the tangible substance that goes into the makeup of a physical object.",
        "sentence": "We import raw materials and export the finished products.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fire",
        "valid": [
            "fire"
        ],
        "difficulty": "easy",
        "definition": "The event of something burning (often destructive).",
        "sentence": "Hold your fire until you can see the whites of their eyes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "holiday",
        "valid": [
            "holiday"
        ],
        "difficulty": "medium",
        "definition": "Leisure time away from work devoted to rest or pleasure.",
        "sentence": "We took a short holiday in Puerto Rico.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chat",
        "valid": [
            "chat"
        ],
        "difficulty": "easy",
        "definition": "An informal conversation.",
        "sentence": "I met Naomi on my way home and we had a chat.",
        "partOfSpeech": "noun"
    },
    {
        "word": "enough",
        "valid": [
            "enough"
        ],
        "difficulty": "medium",
        "definition": "An adequate quantity; a quantity that is large enough to achieve a purpose.",
        "sentence": "Enough is as good as a feast.",
        "partOfSpeech": "noun"
    },
    {
        "word": "designed",
        "valid": [
            "designed"
        ],
        "difficulty": "hard",
        "definition": "Done or made or performed with purpose and intent; \"style...is more than the deliberate and designed creation\"- Havelock Ellis.",
        "sentence": "Games designed for all ages.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "along",
        "valid": [
            "along"
        ],
        "difficulty": "easy",
        "definition": "With a forward motion.",
        "sentence": "We drove along admiring the view.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "among",
        "valid": [
            "among"
        ],
        "difficulty": "easy",
        "definition": "Mixed or mingled; surrounded by. They heard, And from his presence hid themselves among The thickest trees. Milton. 2. Conjoined, or associated with, or making part of the numbe.",
        "sentence": "You can number me among your friends.",
        "partOfSpeech": "noun"
    },
    {
        "word": "death",
        "valid": [
            "death"
        ],
        "difficulty": "easy",
        "definition": "The event of dying or departure from life.",
        "sentence": "Her death came as a terrible shock.",
        "partOfSpeech": "noun"
    },
    {
        "word": "writing",
        "valid": [
            "writing"
        ],
        "difficulty": "medium",
        "definition": "The act of creating written works.",
        "sentence": "She did the thinking while he did the writing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "speed",
        "valid": [
            "speed"
        ],
        "difficulty": "easy",
        "definition": "Distance travelled per unit time.",
        "sentence": "The project advanced with gratifying speed.",
        "partOfSpeech": "noun"
    },
    {
        "word": "countries",
        "valid": [
            "countries"
        ],
        "difficulty": "hard",
        "definition": "Form of country: a politically organized body of people under a single government.",
        "sentence": "Mali is one of the poorest countries in Subsaharan Africa.",
        "partOfSpeech": "noun"
    },
    {
        "word": "loss",
        "valid": [
            "loss"
        ],
        "difficulty": "easy",
        "definition": "Something that is lost.",
        "sentence": "Everyone expected him to win so his loss was a shock.",
        "partOfSpeech": "noun"
    },
    {
        "word": "face",
        "valid": [
            "face"
        ],
        "difficulty": "easy",
        "definition": "The front of the human head from the forehead to the chin and ear to ear.",
        "sentence": "He dealt the cards face down.",
        "partOfSpeech": "noun"
    },
    {
        "word": "brand",
        "valid": [
            "brand"
        ],
        "difficulty": "easy",
        "definition": "A name given to a product or service.",
        "sentence": "There's a new brand of hero in the movies now.",
        "partOfSpeech": "noun"
    },
    {
        "word": "discount",
        "valid": [
            "discount"
        ],
        "difficulty": "hard",
        "definition": "The act of reducing the selling price of merchandise.",
        "sentence": "I never discount these books-they sell like hot cakes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "higher",
        "valid": [
            "higher"
        ],
        "difficulty": "medium",
        "definition": "At a more elevated level, position, rank, or degree.",
        "sentence": "Banks charge higher interest on loans to risky customers.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "effects",
        "valid": [
            "effects"
        ],
        "difficulty": "medium",
        "definition": "Property of a personal character that is portable but not used in business.",
        "sentence": "She left some of her personal effects in the house.",
        "partOfSpeech": "noun"
    },
    {
        "word": "created",
        "valid": [
            "created"
        ],
        "difficulty": "medium",
        "definition": "Form of create: make or cause to be or to become.",
        "sentence": "I created a shortcut on the desktop.",
        "partOfSpeech": "verb"
    },
    {
        "word": "remember",
        "valid": [
            "remember"
        ],
        "difficulty": "hard",
        "definition": "Recall knowledge from memory; have a recollection.",
        "sentence": "I can't remember saying any such thing.",
        "partOfSpeech": "verb"
    },
    {
        "word": "standards",
        "valid": [
            "standards"
        ],
        "difficulty": "hard",
        "definition": "Form of standard: a basis for comparison; a reference point against which other things can be evaluated.",
        "sentence": "The amount of paper produced by a country is closely related to its cultural standards.",
        "partOfSpeech": "noun"
    },
    {
        "word": "oil",
        "valid": [
            "oil"
        ],
        "difficulty": "easy",
        "definition": "A slippery or viscous liquid or liquefiable substance not miscible with water.",
        "sentence": "Oil the wooden surface.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bit",
        "valid": [
            "bit"
        ],
        "difficulty": "easy",
        "definition": "A small piece or quantity of something.",
        "sentence": "He looked around for the right size bit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "yellow",
        "valid": [
            "yellow"
        ],
        "difficulty": "medium",
        "definition": "Yellow color or pigment; the chromatic color resembling the hue of sunflowers or ripe lemons.",
        "sentence": "The pages of the book began to yellow.",
        "partOfSpeech": "noun"
    },
    {
        "word": "political",
        "valid": [
            "political"
        ],
        "difficulty": "hard",
        "definition": "Involving or characteristic of politics or parties or politicians; \"calling a meeting is a political act in itself\"- Daniel Goleman.",
        "sentence": "Political pressure.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "increase",
        "valid": [
            "increase"
        ],
        "difficulty": "hard",
        "definition": "A quantity that is added.",
        "sentence": "He gave me an increase in salary.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advertise",
        "valid": [
            "advertise"
        ],
        "difficulty": "hard",
        "definition": "Call attention to.",
        "sentence": "Please don't advertise the fact that he has AIDS.",
        "partOfSpeech": "verb"
    },
    {
        "word": "kingdom",
        "valid": [
            "kingdom"
        ],
        "difficulty": "medium",
        "definition": "A domain in which something is dominant.",
        "sentence": "The untroubled kingdom of reason.",
        "partOfSpeech": "noun"
    },
    {
        "word": "base",
        "valid": [
            "base"
        ],
        "difficulty": "easy",
        "definition": "Installation from which a military force initiates operations.",
        "sentence": "The base of the lamp.",
        "partOfSpeech": "noun"
    },
    {
        "word": "near",
        "valid": [
            "near"
        ],
        "difficulty": "easy",
        "definition": "Move towards.",
        "sentence": "They are drawing near.",
        "partOfSpeech": "verb"
    },
    {
        "word": "environmental",
        "valid": [
            "environmental"
        ],
        "difficulty": "expert",
        "definition": "Of or relating to the external conditions or surroundings.",
        "sentence": "Environmental pollution.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "thought",
        "valid": [
            "thought"
        ],
        "difficulty": "medium",
        "definition": "The content of cognition; the main thing you are thinking about.",
        "sentence": "She paused for thought.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stuff",
        "valid": [
            "stuff"
        ],
        "difficulty": "easy",
        "definition": "The tangible substance that goes into the makeup of a physical object.",
        "sentence": "The trunk was full of stuff.",
        "partOfSpeech": "noun"
    },
    {
        "word": "storage",
        "valid": [
            "storage"
        ],
        "difficulty": "medium",
        "definition": "The act of storing something.",
        "sentence": "My car is in storage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "doing",
        "valid": [
            "doing"
        ],
        "difficulty": "easy",
        "definition": "Form of do: an uproarious party.",
        "sentence": "Theoretically, I'm doing math.",
        "partOfSpeech": "noun"
    },
    {
        "word": "loans",
        "valid": [
            "loans"
        ],
        "difficulty": "easy",
        "definition": "Form of loan: the temporary provision of money (usually at interest).",
        "sentence": "Banks charge higher interest on loans to risky customers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shoes",
        "valid": [
            "shoes"
        ],
        "difficulty": "easy",
        "definition": "A particular situation.",
        "sentence": "My shoes are too small. I need new ones.",
        "partOfSpeech": "noun"
    },
    {
        "word": "entry",
        "valid": [
            "entry"
        ],
        "difficulty": "easy",
        "definition": "An item inserted in a written record.",
        "sentence": "The entry words are arranged alphabetically.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stay",
        "valid": [
            "stay"
        ],
        "difficulty": "easy",
        "definition": "Continuing or remaining in a place or state.",
        "sentence": "They had a nice stay in Paris.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nature",
        "valid": [
            "nature"
        ],
        "difficulty": "medium",
        "definition": "The essential qualities or characteristics by which something is recognized.",
        "sentence": "It is his nature to help others.",
        "partOfSpeech": "noun"
    },
    {
        "word": "orders",
        "valid": [
            "orders"
        ],
        "difficulty": "medium",
        "definition": "Form of order: (often plural) a command given by a superior (e.g., a military or law enforcement officer) that must be obeyed.",
        "sentence": "All you have to do is to obey my orders.",
        "partOfSpeech": "noun"
    },
    {
        "word": "availability",
        "valid": [
            "availability"
        ],
        "difficulty": "expert",
        "definition": "The quality of being at hand when needed.",
        "sentence": "Whether he has the operation depends upon the availability of the organ.",
        "partOfSpeech": "noun"
    },
    {
        "word": "summary",
        "valid": [
            "summary"
        ],
        "difficulty": "medium",
        "definition": "A brief statement that presents the main points in a concise form.",
        "sentence": "He gave a summary of the conclusions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "turn",
        "valid": [
            "turn"
        ],
        "difficulty": "easy",
        "definition": "A circular segment of a curve.",
        "sentence": "We took a turn in the park.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mean",
        "valid": [
            "mean"
        ],
        "difficulty": "easy",
        "definition": "An average of n numbers computed by adding some function of the numbers and dividing by some function of n.",
        "sentence": "I mean no harm.",
        "partOfSpeech": "noun"
    },
    {
        "word": "growth",
        "valid": [
            "growth"
        ],
        "difficulty": "medium",
        "definition": "The process of an individual organism growing organically; a purely biological unfolding of events involved in an organism changing gradually from a simple to a more complex level.",
        "sentence": "A growth of trees.",
        "partOfSpeech": "noun"
    },
    {
        "word": "notes",
        "valid": [
            "notes"
        ],
        "difficulty": "easy",
        "definition": "Form of not: negation of a word or group of words.",
        "sentence": "I advise you to be careful in making notes for the lecture.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "agency",
        "valid": [
            "agency"
        ],
        "difficulty": "medium",
        "definition": "An administrative unit of government.",
        "sentence": "An example is the best agency of instruction.",
        "partOfSpeech": "noun"
    },
    {
        "word": "king",
        "valid": [
            "king"
        ],
        "difficulty": "easy",
        "definition": "A male sovereign; ruler of a kingdom.",
        "sentence": "The lion is the king of beasts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "activity",
        "valid": [
            "activity"
        ],
        "difficulty": "hard",
        "definition": "Any specific behavior.",
        "sentence": "They avoided all recreational activity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "copy",
        "valid": [
            "copy"
        ],
        "difficulty": "easy",
        "definition": "A reproduction of a written record (e.g. of a legal or school record).",
        "sentence": "She made a copy of the designer dress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "although",
        "valid": [
            "although"
        ],
        "difficulty": "hard",
        "definition": "Grant all this; be it that; supposing that; notwithstanding; though. Although all shall be offended, yet will no I. Mark xiv. 29. Syn. -- Although, Though. Although, which original.",
        "sentence": "Although her house is nearby, I seldom see her.",
        "partOfSpeech": "noun"
    },
    {
        "word": "drug",
        "valid": [
            "drug"
        ],
        "difficulty": "easy",
        "definition": "A substance that is used as a medicine or narcotic.",
        "sentence": "Don't do that!!! There's a computer at the drug store.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pics",
        "valid": [
            "pics"
        ],
        "difficulty": "easy",
        "definition": "Form of pic: a form of entertainment that enacts a story by sound and a sequence of images giving the illusion of continuous movement.",
        "sentence": "I loved your pics from the church!",
        "partOfSpeech": "noun"
    },
    {
        "word": "western",
        "valid": [
            "western"
        ],
        "difficulty": "medium",
        "definition": "A film about life in the western United States during the period of exploration and development.",
        "sentence": "Our company's western office.",
        "partOfSpeech": "noun"
    },
    {
        "word": "income",
        "valid": [
            "income"
        ],
        "difficulty": "medium",
        "definition": "The financial gain (earned or unearned) accruing over a given period of time.",
        "sentence": "Your income is about twice as large as mine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "force",
        "valid": [
            "force"
        ],
        "difficulty": "easy",
        "definition": "A powerful effect or influence.",
        "sentence": "The shortstop got the runner at second on a force.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cash",
        "valid": [
            "cash"
        ],
        "difficulty": "easy",
        "definition": "Money in the form of bills or coins.",
        "sentence": "There is a desperate shortage of hard cash.",
        "partOfSpeech": "noun"
    },
    {
        "word": "employment",
        "valid": [
            "employment"
        ],
        "difficulty": "expert",
        "definition": "The state of being employed or having a job.",
        "sentence": "He is looking for employment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "overall",
        "valid": [
            "overall"
        ],
        "difficulty": "medium",
        "definition": "Work clothing consisting of denim trousers (usually with a bib and shoulder straps).",
        "sentence": "The overall pattern of his life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "river",
        "valid": [
            "river"
        ],
        "difficulty": "easy",
        "definition": "A large natural stream of water (larger than a creek).",
        "sentence": "The river was navigable for 50 miles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "commission",
        "valid": [
            "commission"
        ],
        "difficulty": "expert",
        "definition": "A special group delegated to consider some matter; \"a committee is a group that keeps minutes and loses hours\" - Milton Berle.",
        "sentence": "He works on commission.",
        "partOfSpeech": "noun"
    },
    {
        "word": "package",
        "valid": [
            "package"
        ],
        "difficulty": "medium",
        "definition": "A collection of things wrapped or boxed together.",
        "sentence": "Attach this label to your package.",
        "partOfSpeech": "noun"
    },
    {
        "word": "contents",
        "valid": [
            "contents"
        ],
        "difficulty": "hard",
        "definition": "Everything that is included in a collection and that is held or included in something.",
        "sentence": "He emptied the contents of his pockets.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seen",
        "valid": [
            "seen"
        ],
        "difficulty": "easy",
        "definition": "Form of see: the seat within a bishop's diocese where his cathedral is located.",
        "sentence": "You needn't have seen him to the door.",
        "partOfSpeech": "noun"
    },
    {
        "word": "players",
        "valid": [
            "players"
        ],
        "difficulty": "medium",
        "definition": "Form of player: a person who participates in or is skilled at some game.",
        "sentence": "Sometimes hockey players get so competitive that fights break out.",
        "partOfSpeech": "noun"
    },
    {
        "word": "engine",
        "valid": [
            "engine"
        ],
        "difficulty": "medium",
        "definition": "Motor that converts thermal energy to mechanical work.",
        "sentence": "An engine of change.",
        "partOfSpeech": "noun"
    },
    {
        "word": "port",
        "valid": [
            "port"
        ],
        "difficulty": "easy",
        "definition": "A place (seaport or airport) where people and merchandise can enter or leave a country.",
        "sentence": "Port a rifle.",
        "partOfSpeech": "noun"
    },
    {
        "word": "album",
        "valid": [
            "album"
        ],
        "difficulty": "easy",
        "definition": "One or more recordings issued together; originally released on 12-inch phonograph records (usually with attractive record covers) and later on cassette audiotape and compact disc.",
        "sentence": "There is an album on the desk.",
        "partOfSpeech": "noun"
    },
    {
        "word": "regional",
        "valid": [
            "regional"
        ],
        "difficulty": "hard",
        "definition": "Characteristic of a region.",
        "sentence": "A regional dialect.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "stop",
        "valid": [
            "stop"
        ],
        "difficulty": "easy",
        "definition": "The event of something ending.",
        "sentence": "He used a book as a stop to hold the door open.",
        "partOfSpeech": "noun"
    },
    {
        "word": "supplies",
        "valid": [
            "supplies"
        ],
        "difficulty": "hard",
        "definition": "Form of supply: an amount of something available for use.",
        "sentence": "Supplies cannot keep up with the demand.",
        "partOfSpeech": "noun"
    },
    {
        "word": "started",
        "valid": [
            "started"
        ],
        "difficulty": "medium",
        "definition": "Form of start: the beginning of anything.",
        "sentence": "I was planning on going to the beach today, but then it started to rain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "administration",
        "valid": [
            "administration"
        ],
        "difficulty": "expert",
        "definition": "A method of tending to or managing the affairs of a some group of people (especially the group's business affairs).",
        "sentence": "He claims that the present administration is corrupt.",
        "partOfSpeech": "noun"
    },
    {
        "word": "institute",
        "valid": [
            "institute"
        ],
        "difficulty": "hard",
        "definition": "An association organized to promote art or science or education.",
        "sentence": "Institute proceedings.",
        "partOfSpeech": "noun"
    },
    {
        "word": "views",
        "valid": [
            "views"
        ],
        "difficulty": "easy",
        "definition": "Form of view: a way of regarding situations or topics etc.",
        "sentence": "Sometimes he has difficulty being articulate about his views.",
        "partOfSpeech": "noun"
    },
    {
        "word": "plans",
        "valid": [
            "plans"
        ],
        "difficulty": "easy",
        "definition": "Form of plan: a series of steps to be carried out or goals to be accomplished.",
        "sentence": "Life is what happens to you while you're busy making other plans.",
        "partOfSpeech": "noun"
    },
    {
        "word": "double",
        "valid": [
            "double"
        ],
        "difficulty": "medium",
        "definition": "A base hit on which the batter stops safely at second base.",
        "sentence": "He hit a double to deep centerfield.",
        "partOfSpeech": "noun"
    },
    {
        "word": "build",
        "valid": [
            "build"
        ],
        "difficulty": "easy",
        "definition": "Constitution of the human body.",
        "sentence": "Build up confidence.",
        "partOfSpeech": "noun"
    },
    {
        "word": "screen",
        "valid": [
            "screen"
        ],
        "difficulty": "medium",
        "definition": "A white or silvered surface where pictures can be projected for viewing.",
        "sentence": "A metal screen protected the observers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "exchange",
        "valid": [
            "exchange"
        ],
        "difficulty": "hard",
        "definition": "Chemical process in which one atom or ion or group changes places with another.",
        "sentence": "The endgame began after the exchange of queens.",
        "partOfSpeech": "noun"
    },
    {
        "word": "types",
        "valid": [
            "types"
        ],
        "difficulty": "easy",
        "definition": "Form of type: a subdivision of a particular kind of thing.",
        "sentence": "There are 10 types of people in the world: those who understand binary, and those who don't.",
        "partOfSpeech": "noun"
    },
    {
        "word": "soon",
        "valid": [
            "soon"
        ],
        "difficulty": "easy",
        "definition": "In the near future.",
        "sentence": "The doctor will soon be here.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "sponsored",
        "valid": [
            "sponsored"
        ],
        "difficulty": "hard",
        "definition": "Form of sponsor: someone who supports or champions something.",
        "sentence": "I entered a singing contest sponsored by a pasta company and I made it to the semifinals.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lines",
        "valid": [
            "lines"
        ],
        "difficulty": "easy",
        "definition": "Form of lin: United States sculptor and architect whose public works include the memorial to veterans of the Vietnam War in Washington (born in 1959).",
        "sentence": "You have to read between the lines to get the most out of anything.",
        "partOfSpeech": "noun"
    },
    {
        "word": "electronic",
        "valid": [
            "electronic"
        ],
        "difficulty": "expert",
        "definition": "Of or relating to electronics; concerned with or using devices that operate on principles governing the behavior of electrons.",
        "sentence": "Electronic devices.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "continue",
        "valid": [
            "continue"
        ],
        "difficulty": "hard",
        "definition": "Continue a certain state, condition, or activity.",
        "sentence": "We cannot continue several servants any longer.",
        "partOfSpeech": "verb"
    },
    {
        "word": "across",
        "valid": [
            "across"
        ],
        "difficulty": "medium",
        "definition": "To the opposite side.",
        "sentence": "The marble slabs were cut across.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "benefits",
        "valid": [
            "benefits"
        ],
        "difficulty": "hard",
        "definition": "Form of benefit: financial assistance in time of need.",
        "sentence": "Nowadays we are apt to forget the benefits of nature.",
        "partOfSpeech": "noun"
    },
    {
        "word": "needed",
        "valid": [
            "needed"
        ],
        "difficulty": "medium",
        "definition": "Necessary for relief or supply.",
        "sentence": "Oxygen is needed for combustion.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "season",
        "valid": [
            "season"
        ],
        "difficulty": "medium",
        "definition": "A period of the year marked by special events or activities in some field.",
        "sentence": "It was the Christmas season.",
        "partOfSpeech": "noun"
    },
    {
        "word": "apply",
        "valid": [
            "apply"
        ],
        "difficulty": "easy",
        "definition": "Put into service; make work or employ for a particular purpose or for its inherent or natural purpose.",
        "sentence": "Apply for a job.",
        "partOfSpeech": "verb"
    },
    {
        "word": "someone",
        "valid": [
            "someone"
        ],
        "difficulty": "medium",
        "definition": "A human being.",
        "sentence": "It is difficult to keep up a conversation with someone who only says \"yes\" and \"no\".",
        "partOfSpeech": "noun"
    },
    {
        "word": "held",
        "valid": [
            "held"
        ],
        "difficulty": "easy",
        "definition": "Occupied or in the control of; often used in combination.",
        "sentence": "Enemy-held territory.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "anything",
        "valid": [
            "anything"
        ],
        "difficulty": "hard",
        "definition": "Any object, act, state, event, or fact whatever; thing of any kind; something or other; aught; as, I would not do it for anything. Did you ever know of anything so unlucky A. Tr.",
        "sentence": "I won't ask you anything else today.",
        "partOfSpeech": "noun"
    },
    {
        "word": "printer",
        "valid": [
            "printer"
        ],
        "difficulty": "medium",
        "definition": "Someone whose occupation is printing.",
        "sentence": "The printer needs paper.",
        "partOfSpeech": "noun"
    },
    {
        "word": "condition",
        "valid": [
            "condition"
        ],
        "difficulty": "hard",
        "definition": "A state at a particular time.",
        "sentence": "The human condition.",
        "partOfSpeech": "noun"
    },
    {
        "word": "effective",
        "valid": [
            "effective"
        ],
        "difficulty": "hard",
        "definition": "Producing or capable of producing an intended result or having a striking effect; \"an air-cooled motor was more effective than a witch's broomstick for rapid long-distance transportation\"-LewisMumford.",
        "sentence": "A decline in the effective demand.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "believe",
        "valid": [
            "believe"
        ],
        "difficulty": "medium",
        "definition": "Accept as true; take to be true.",
        "sentence": "We didn't believe his stories from the War.",
        "partOfSpeech": "verb"
    },
    {
        "word": "organization",
        "valid": [
            "organization"
        ],
        "difficulty": "expert",
        "definition": "A group of people who work together.",
        "sentence": "He still remembers the organization of the club.",
        "partOfSpeech": "noun"
    },
    {
        "word": "effect",
        "valid": [
            "effect"
        ],
        "difficulty": "medium",
        "definition": "A phenomenon that follows and is caused by some previous phenomenon.",
        "sentence": "She retained that bold effect in her reproductions of the original painting.",
        "partOfSpeech": "noun"
    },
    {
        "word": "asked",
        "valid": [
            "asked"
        ],
        "difficulty": "easy",
        "definition": "Form of ask: make a request or demand for something to somebody.",
        "sentence": "\"What's the matter?\" asked the little white rabbit.",
        "partOfSpeech": "verb"
    },
    {
        "word": "mind",
        "valid": [
            "mind"
        ],
        "difficulty": "easy",
        "definition": "That which is responsible for one's thoughts, feelings, and conscious brain functions; the seat of the faculty of reason.",
        "sentence": "His mind wandered.",
        "partOfSpeech": "noun"
    },
    {
        "word": "selection",
        "valid": [
            "selection"
        ],
        "difficulty": "hard",
        "definition": "The act of choosing or selecting.",
        "sentence": "The store carried a large selection of shoes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "casino",
        "valid": [
            "casino"
        ],
        "difficulty": "medium",
        "definition": "A public building for gambling and entertainment.",
        "sentence": "He cashed in his chips and took in a show at the casino across the street.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lost",
        "valid": [
            "lost"
        ],
        "difficulty": "easy",
        "definition": "People who are destined to die soon.",
        "sentence": "Words lost in the din.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tour",
        "valid": [
            "tour"
        ],
        "difficulty": "easy",
        "definition": "A journey or route all the way around a particular place or area.",
        "sentence": "They took an extended tour of Europe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "menu",
        "valid": [
            "menu"
        ],
        "difficulty": "easy",
        "definition": "A list of dishes available at a restaurant.",
        "sentence": "They worked rapidly down the menu of reports.",
        "partOfSpeech": "noun"
    },
    {
        "word": "volume",
        "valid": [
            "volume"
        ],
        "difficulty": "medium",
        "definition": "The amount of 3-dimensional space occupied by an object.",
        "sentence": "The kids played their music at full volume.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cross",
        "valid": [
            "cross"
        ],
        "difficulty": "easy",
        "definition": "A wooden structure consisting of an upright post with a transverse piece.",
        "sentence": "A mule is a cross between a horse and a donkey.",
        "partOfSpeech": "noun"
    },
    {
        "word": "anyone",
        "valid": [
            "anyone"
        ],
        "difficulty": "medium",
        "definition": "One taken at random rather than by selection; anybody. Note: [Commonly written as two words.].",
        "sentence": "If the world weren't in the shape it is now, I could trust anyone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mortgage",
        "valid": [
            "mortgage"
        ],
        "difficulty": "hard",
        "definition": "A conditional conveyance of property as security for the repayment of a loan.",
        "sentence": "The bank holds a mortgage on his building.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hope",
        "valid": [
            "hope"
        ],
        "difficulty": "easy",
        "definition": "A specific instance of feeling hopeful.",
        "sentence": "It revived their hope of winning the pennant.",
        "partOfSpeech": "noun"
    },
    {
        "word": "silver",
        "valid": [
            "silver"
        ],
        "difficulty": "medium",
        "definition": "A soft white precious univalent metallic element having the highest electrical and thermal conductivity of any metal; occurs in argentite and in free form; used in coins and jewelry and tableware and photography.",
        "sentence": "Silver the necklace.",
        "partOfSpeech": "noun"
    },
    {
        "word": "corporation",
        "valid": [
            "corporation"
        ],
        "difficulty": "expert",
        "definition": "A business firm whose articles of incorporation have been approved in some state.",
        "sentence": "Your name was given to us by Mr. Hayashi of Keiyo Steel Corporation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wish",
        "valid": [
            "wish"
        ],
        "difficulty": "easy",
        "definition": "A specific feeling of desire.",
        "sentence": "It was his last wish.",
        "partOfSpeech": "noun"
    },
    {
        "word": "inside",
        "valid": [
            "inside"
        ],
        "difficulty": "medium",
        "definition": "The region that is inside of something.",
        "sentence": "The inside lane.",
        "partOfSpeech": "noun"
    },
    {
        "word": "solution",
        "valid": [
            "solution"
        ],
        "difficulty": "hard",
        "definition": "A homogeneous mixture of two or more substances; frequently (but not necessarily) a liquid solution.",
        "sentence": "The solution took three hours.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mature",
        "valid": [
            "mature"
        ],
        "difficulty": "medium",
        "definition": "Develop and reach maturity; undergo maturation.",
        "sentence": "These bonds mature in 2005.",
        "partOfSpeech": "verb"
    },
    {
        "word": "role",
        "valid": [
            "role"
        ],
        "difficulty": "easy",
        "definition": "The actions and activities assigned to or required or expected of a person or group.",
        "sentence": "Play its role.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rather",
        "valid": [
            "rather"
        ],
        "difficulty": "medium",
        "definition": "On the contrary; \"he didn't call; rather (or instead), he wrote her a letter\".",
        "sentence": "It was rather cold.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "weeks",
        "valid": [
            "weeks"
        ],
        "difficulty": "easy",
        "definition": "Form of week: any period of seven consecutive days.",
        "sentence": "If I wanted to scare you, I would tell you what I dreamt about a few weeks ago.",
        "partOfSpeech": "noun"
    },
    {
        "word": "addition",
        "valid": [
            "addition"
        ],
        "difficulty": "hard",
        "definition": "A component that is added to something to improve it.",
        "sentence": "The addition of flowers created a pleasing effect.",
        "partOfSpeech": "noun"
    },
    {
        "word": "came",
        "valid": [
            "came"
        ],
        "difficulty": "easy",
        "definition": "Form of come: the thick white fluid containing spermatozoa that is ejaculated by the male genital tract.",
        "sentence": "I didn't know where it came from.",
        "partOfSpeech": "noun"
    },
    {
        "word": "supply",
        "valid": [
            "supply"
        ],
        "difficulty": "medium",
        "definition": "An amount of something available for use.",
        "sentence": "Supply blankets for the beds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nothing",
        "valid": [
            "nothing"
        ],
        "difficulty": "medium",
        "definition": "A quantity of no importance.",
        "sentence": "It looked like nothing I had ever seen before.",
        "partOfSpeech": "noun"
    },
    {
        "word": "certain",
        "valid": [
            "certain"
        ],
        "difficulty": "medium",
        "definition": "Definite but not specified or identified.",
        "sentence": "Be certain to disconnect the iron when you are through.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "executive",
        "valid": [
            "executive"
        ],
        "difficulty": "hard",
        "definition": "A person responsible for the administration of a business.",
        "sentence": "The executive branch.",
        "partOfSpeech": "noun"
    },
    {
        "word": "running",
        "valid": [
            "running"
        ],
        "difficulty": "medium",
        "definition": "(American football) a play in which a player attempts to carry the ball through or past the opposing team.",
        "sentence": "The coach put great emphasis on running.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lower",
        "valid": [
            "lower"
        ],
        "difficulty": "easy",
        "definition": "The lower of two berths.",
        "sentence": "Lower a rating.",
        "partOfSpeech": "noun"
    },
    {
        "word": "necessary",
        "valid": [
            "necessary"
        ],
        "difficulty": "hard",
        "definition": "Anything indispensable.",
        "sentence": "The necessary consequences of one's actions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "union",
        "valid": [
            "union"
        ],
        "difficulty": "easy",
        "definition": "An organization of employees formed to bargain with the employer.",
        "sentence": "The union of opposing factions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "jewelry",
        "valid": [
            "jewelry"
        ],
        "difficulty": "medium",
        "definition": "An adornment (as a bracelet or ring or necklace) made of precious metals and set with gems (or imitation gems).",
        "sentence": "The old man bribed a young girl with money and jewelry.",
        "partOfSpeech": "noun"
    },
    {
        "word": "according",
        "valid": [
            "according"
        ],
        "difficulty": "hard",
        "definition": "(followed by `to') in agreement with or accordant with.",
        "sentence": "According to historians.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "clothing",
        "valid": [
            "clothing"
        ],
        "difficulty": "hard",
        "definition": "A covering designed to be worn on a person's body.",
        "sentence": "We provided the flood victims with food and clothing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "particular",
        "valid": [
            "particular"
        ],
        "difficulty": "expert",
        "definition": "A fact about some part (as opposed to general).",
        "sentence": "He always reasons from the particular to the general.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fine",
        "valid": [
            "fine"
        ],
        "difficulty": "easy",
        "definition": "Money extracted as a penalty.",
        "sentence": "Fine wine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "names",
        "valid": [
            "names"
        ],
        "difficulty": "easy",
        "definition": "Verbal abuse; a crude substitute for argument.",
        "sentence": "Sticks and stones may break my bones but names can never hurt me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "homepage",
        "valid": [
            "homepage"
        ],
        "difficulty": "hard",
        "definition": "The opening page of a web site.",
        "sentence": "Your website's homepage is very beautiful.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hour",
        "valid": [
            "hour"
        ],
        "difficulty": "easy",
        "definition": "A period of time equal to 1/24th of a day.",
        "sentence": "We live an hour from the airport.",
        "partOfSpeech": "noun"
    },
    {
        "word": "skills",
        "valid": [
            "skills"
        ],
        "difficulty": "medium",
        "definition": "Form of skill: an ability that has been acquired by training.",
        "sentence": "Students should develop their reading skills.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bush",
        "valid": [
            "bush"
        ],
        "difficulty": "easy",
        "definition": "A low woody perennial plant usually having several major stems.",
        "sentence": "Stop beating around the bush and give it to me straight!",
        "partOfSpeech": "noun"
    },
    {
        "word": "islands",
        "valid": [
            "islands"
        ],
        "difficulty": "medium",
        "definition": "Form of island: a land mass (smaller than a continent) that is surrounded by water.",
        "sentence": "What animals inhabit those islands?",
        "partOfSpeech": "noun"
    },
    {
        "word": "advice",
        "valid": [
            "advice"
        ],
        "difficulty": "medium",
        "definition": "A proposal for an appropriate course of action.",
        "sentence": "I need your advice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "career",
        "valid": [
            "career"
        ],
        "difficulty": "medium",
        "definition": "The particular occupation for which you are trained.",
        "sentence": "The general had had a distinguished career.",
        "partOfSpeech": "noun"
    },
    {
        "word": "military",
        "valid": [
            "military"
        ],
        "difficulty": "hard",
        "definition": "The military forces of a nation.",
        "sentence": "Their military is the largest in the region.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rental",
        "valid": [
            "rental"
        ],
        "difficulty": "medium",
        "definition": "Property that is leased or rented out or let.",
        "sentence": "Rental agreement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "decision",
        "valid": [
            "decision"
        ],
        "difficulty": "hard",
        "definition": "The act of making up your mind about something.",
        "sentence": "The burden of decision was his.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leave",
        "valid": [
            "leave"
        ],
        "difficulty": "easy",
        "definition": "The period of time during which you are absent from work or duty.",
        "sentence": "He took his leave.",
        "partOfSpeech": "noun"
    },
    {
        "word": "teens",
        "valid": [
            "teens"
        ],
        "difficulty": "easy",
        "definition": "The time of life between the ages of 12 and 20.",
        "sentence": "Mary went over to the United States in her late teens.",
        "partOfSpeech": "noun"
    },
    {
        "word": "huge",
        "valid": [
            "huge"
        ],
        "difficulty": "easy",
        "definition": "Unusually great in size or amount or degree or especially extent or scope; \"the vast accumulation of knowledge...which we call civilization\"- W.R.Inge.",
        "sentence": "Huge government spending.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "woman",
        "valid": [
            "woman"
        ],
        "difficulty": "easy",
        "definition": "An adult female person (as opposed to a man).",
        "sentence": "Woman is the glory of creation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "facilities",
        "valid": [
            "facilities"
        ],
        "difficulty": "expert",
        "definition": "Form of facility: a building or place that provides a particular service or is used for a particular industry.",
        "sentence": "The lack of modern post facilities caused trouble for many shippers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kind",
        "valid": [
            "kind"
        ],
        "difficulty": "easy",
        "definition": "A category of things distinguished by some common characteristic or quality.",
        "sentence": "Our neighbor was very kind about the window our son broke.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sellers",
        "valid": [
            "sellers"
        ],
        "difficulty": "medium",
        "definition": "English comic actor (1925-1980).",
        "sentence": "If you go to a baseball game today, sellers are walking around with hot-water tanks.",
        "partOfSpeech": "noun"
    },
    {
        "word": "middle",
        "valid": [
            "middle"
        ],
        "difficulty": "medium",
        "definition": "An area that is approximately central within some larger region.",
        "sentence": "The middle of the war.",
        "partOfSpeech": "noun"
    },
    {
        "word": "move",
        "valid": [
            "move"
        ],
        "difficulty": "easy",
        "definition": "The act of deciding to do something.",
        "sentence": "He didn't make a move to help.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cable",
        "valid": [
            "cable"
        ],
        "difficulty": "easy",
        "definition": "A telegram sent abroad.",
        "sentence": "Cable trees.",
        "partOfSpeech": "noun"
    },
    {
        "word": "opportunities",
        "valid": [
            "opportunities"
        ],
        "difficulty": "expert",
        "definition": "Form of opportunity: a possibility due to a favorable combination of circumstances.",
        "sentence": "You had better make the most of your opportunities.",
        "partOfSpeech": "noun"
    },
    {
        "word": "taking",
        "valid": [
            "taking"
        ],
        "difficulty": "medium",
        "definition": "The act of someone who picks up or takes something.",
        "sentence": "Clothing could be had for the taking.",
        "partOfSpeech": "noun"
    },
    {
        "word": "values",
        "valid": [
            "values"
        ],
        "difficulty": "medium",
        "definition": "Beliefs of a person or social group in which they have an emotional investment (either for or against something).",
        "sentence": "He has very conservatives values.",
        "partOfSpeech": "noun"
    },
    {
        "word": "division",
        "valid": [
            "division"
        ],
        "difficulty": "hard",
        "definition": "An army unit large enough to sustain combat.",
        "sentence": "The BBC's engineering division.",
        "partOfSpeech": "noun"
    },
    {
        "word": "coming",
        "valid": [
            "coming"
        ],
        "difficulty": "medium",
        "definition": "The act of drawing spatially closer to something.",
        "sentence": "We're getting out of here. The cops are coming.",
        "partOfSpeech": "noun"
    },
    {
        "word": "object",
        "valid": [
            "object"
        ],
        "difficulty": "medium",
        "definition": "A tangible and visible entity; an entity that can cast a shadow.",
        "sentence": "The object of my affection.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lesbian",
        "valid": [
            "lesbian"
        ],
        "difficulty": "medium",
        "definition": "A female homosexual.",
        "sentence": "Sappho was a famous Lesbian poet.",
        "partOfSpeech": "noun"
    },
    {
        "word": "appropriate",
        "valid": [
            "appropriate"
        ],
        "difficulty": "expert",
        "definition": "Give or assign a resource to a particular person or cause.",
        "sentence": "A book not appropriate for children.",
        "partOfSpeech": "verb"
    },
    {
        "word": "machine",
        "valid": [
            "machine"
        ],
        "difficulty": "medium",
        "definition": "Any mechanical or electrical device that transmits or modifies energy to perform or assist in the performance of human tasks.",
        "sentence": "He was endorsed by the Democratic machine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "logo",
        "valid": [
            "logo"
        ],
        "difficulty": "easy",
        "definition": "A company emblem or device.",
        "sentence": "Spain has won the 2010 FIFA World Cup and the national team logo gains the first star.",
        "partOfSpeech": "noun"
    },
    {
        "word": "length",
        "valid": [
            "length"
        ],
        "difficulty": "medium",
        "definition": "The linear extent in space from one end to the other; the longest dimension of something that is fixed in place.",
        "sentence": "A length of timber.",
        "partOfSpeech": "noun"
    },
    {
        "word": "actually",
        "valid": [
            "actually"
        ],
        "difficulty": "hard",
        "definition": "In actual fact.",
        "sentence": "You may actually be doing the right thing by walking out.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "nice",
        "valid": [
            "nice"
        ],
        "difficulty": "easy",
        "definition": "A city in southeastern France on the Mediterranean; the leading resort on the French Riviera.",
        "sentence": "A nice gesture.",
        "partOfSpeech": "noun"
    },
    {
        "word": "score",
        "valid": [
            "score"
        ],
        "difficulty": "easy",
        "definition": "A number or letter indicating quality (especially of a student's performance).",
        "sentence": "Calling his seduction of the girl a `score' was a typical example of male slang.",
        "partOfSpeech": "noun"
    },
    {
        "word": "statistics",
        "valid": [
            "statistics"
        ],
        "difficulty": "expert",
        "definition": "A branch of applied mathematics concerned with the collection and interpretation of quantitative data and the use of probability theory to estimate population parameters.",
        "sentence": "The aviation expert analyzed the statistics in detail.",
        "partOfSpeech": "noun"
    },
    {
        "word": "client",
        "valid": [
            "client"
        ],
        "difficulty": "medium",
        "definition": "A person who seeks the advice of a lawyer.",
        "sentence": "The client talked with the lawyer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "returns",
        "valid": [
            "returns"
        ],
        "difficulty": "medium",
        "definition": "Form of return: document giving the tax collector information about the taxpayer's tax liability.",
        "sentence": "Election returns were what we had expected.",
        "partOfSpeech": "noun"
    },
    {
        "word": "capital",
        "valid": [
            "capital"
        ],
        "difficulty": "medium",
        "definition": "Assets available for use in the production of further assets.",
        "sentence": "The crime capital of Italy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "follow",
        "valid": [
            "follow"
        ],
        "difficulty": "medium",
        "definition": "To travel behind, go after, come after.",
        "sentence": "Follow a pattern.",
        "partOfSpeech": "verb"
    },
    {
        "word": "sample",
        "valid": [
            "sample"
        ],
        "difficulty": "medium",
        "definition": "A small part of something intended as representative of the whole.",
        "sentence": "Sample the regional dishes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "investment",
        "valid": [
            "investment"
        ],
        "difficulty": "expert",
        "definition": "The act of investing; laying out money or capital in an enterprise with the expectation of profit.",
        "sentence": "This job calls for the investment of some hard thinking.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sent",
        "valid": [
            "sent"
        ],
        "difficulty": "easy",
        "definition": "100 senti equal 1 kroon in Estonia.",
        "sentence": "I was rereading the letters you sent to me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shown",
        "valid": [
            "shown"
        ],
        "difficulty": "easy",
        "definition": "Form of show: the act of publicly exhibiting or entertaining.",
        "sentence": "Because of some technical problem, a movie was shown in place of the announced program.",
        "partOfSpeech": "noun"
    },
    {
        "word": "culture",
        "valid": [
            "culture"
        ],
        "difficulty": "medium",
        "definition": "A particular society at a particular time and place.",
        "sentence": "The culture of oysters.",
        "partOfSpeech": "noun"
    },
    {
        "word": "band",
        "valid": [
            "band"
        ],
        "difficulty": "easy",
        "definition": "An unofficial association of people or groups.",
        "sentence": "He noted that she wore a wedding band.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flash",
        "valid": [
            "flash"
        ],
        "difficulty": "easy",
        "definition": "A sudden intense burst of radiant energy.",
        "sentence": "A flash sewn on his sleeve indicated the unit he belonged to.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lead",
        "valid": [
            "lead"
        ],
        "difficulty": "easy",
        "definition": "An advantage held by a competitor in a race.",
        "sentence": "The lead was in the dummy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "choice",
        "valid": [
            "choice"
        ],
        "difficulty": "medium",
        "definition": "The person or thing chosen or selected.",
        "sentence": "Your choice of colors was unfortunate.",
        "partOfSpeech": "noun"
    },
    {
        "word": "went",
        "valid": [
            "went"
        ],
        "difficulty": "easy",
        "definition": "Form of go: a time period for working (after which you will be relieved by someone else).",
        "sentence": "This is my friend Rachel. We went to high school together.",
        "partOfSpeech": "noun"
    },
    {
        "word": "starting",
        "valid": [
            "starting"
        ],
        "difficulty": "hard",
        "definition": "A turn to be a starter (in a game at the beginning).",
        "sentence": "His starting meant that the coach thought he was one of their best linemen.",
        "partOfSpeech": "noun"
    },
    {
        "word": "registration",
        "valid": [
            "registration"
        ],
        "difficulty": "expert",
        "definition": "The act of enrolling.",
        "sentence": "Does it also work without registration?",
        "partOfSpeech": "noun"
    },
    {
        "word": "courses",
        "valid": [
            "courses"
        ],
        "difficulty": "medium",
        "definition": "Form of course: education imparted in a series of lessons or meetings.",
        "sentence": "Students will take one of these English courses.",
        "partOfSpeech": "noun"
    },
    {
        "word": "consumer",
        "valid": [
            "consumer"
        ],
        "difficulty": "hard",
        "definition": "A person who uses goods or services.",
        "sentence": "Try to be a more rational consumer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "airport",
        "valid": [
            "airport"
        ],
        "difficulty": "medium",
        "definition": "An airfield equipped with control tower and hangars as well as accommodations for passengers and cargo.",
        "sentence": "You needn't have hurried to the airport.",
        "partOfSpeech": "noun"
    },
    {
        "word": "foreign",
        "valid": [
            "foreign"
        ],
        "difficulty": "medium",
        "definition": "Of concern to or concerning the affairs of other nations (other than your own).",
        "sentence": "Foreign nations.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "artist",
        "valid": [
            "artist"
        ],
        "difficulty": "medium",
        "definition": "A person whose creative work shows sensitivity and imagination.",
        "sentence": "I am not an artist. I never had the knack for it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "outside",
        "valid": [
            "outside"
        ],
        "difficulty": "medium",
        "definition": "The region that is outside of something.",
        "sentence": "An outside pitch.",
        "partOfSpeech": "noun"
    },
    {
        "word": "furniture",
        "valid": [
            "furniture"
        ],
        "difficulty": "hard",
        "definition": "Furnishings that make a room or other area ready for occupancy.",
        "sentence": "They had too much furniture for the small apartment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "levels",
        "valid": [
            "levels"
        ],
        "difficulty": "medium",
        "definition": "Form of level: a position on a scale of intensity or amount or quality.",
        "sentence": "My cholesterol levels are high.",
        "partOfSpeech": "noun"
    },
    {
        "word": "channel",
        "valid": [
            "channel"
        ],
        "difficulty": "medium",
        "definition": "A path over which electrical signals can pass.",
        "sentence": "A satellite TV channel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "letter",
        "valid": [
            "letter"
        ],
        "difficulty": "medium",
        "definition": "A written message addressed to a person or organization.",
        "sentence": "Mailed an indignant letter to the editor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mode",
        "valid": [
            "mode"
        ],
        "difficulty": "easy",
        "definition": "How something is done or how it happens.",
        "sentence": "Their nomadic mode of existence.",
        "partOfSpeech": "noun"
    },
    {
        "word": "phones",
        "valid": [
            "phones"
        ],
        "difficulty": "medium",
        "definition": "Form of phon: a unit of subjective loudness.",
        "sentence": "I have push button phones.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ideas",
        "valid": [
            "ideas"
        ],
        "difficulty": "easy",
        "definition": "Form of idea: the content of cognition; the main thing you are thinking about.",
        "sentence": "I don't want to lose my ideas, even though some of them are a bit extreme.",
        "partOfSpeech": "noun"
    },
    {
        "word": "structure",
        "valid": [
            "structure"
        ],
        "difficulty": "hard",
        "definition": "A thing constructed; a complex entity constructed of many parts.",
        "sentence": "The structure consisted of a series of arches.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fund",
        "valid": [
            "fund"
        ],
        "difficulty": "easy",
        "definition": "A reserve of money set aside for some purpose.",
        "sentence": "Fund a medical care plan.",
        "partOfSpeech": "noun"
    },
    {
        "word": "summer",
        "valid": [
            "summer"
        ],
        "difficulty": "medium",
        "definition": "The warmest season of the year; in the northern hemisphere it extends from the summer solstice to the autumnal equinox.",
        "sentence": "The golden summer of his life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "allow",
        "valid": [
            "allow"
        ],
        "difficulty": "easy",
        "definition": "Make it possible through a specific action or lack of action for something to happen.",
        "sentence": "I allow for this possibility.",
        "partOfSpeech": "verb"
    },
    {
        "word": "degree",
        "valid": [
            "degree"
        ],
        "difficulty": "medium",
        "definition": "A position on a scale of intensity or amount or quality.",
        "sentence": "It is all a matter of degree.",
        "partOfSpeech": "noun"
    },
    {
        "word": "contract",
        "valid": [
            "contract"
        ],
        "difficulty": "hard",
        "definition": "A binding agreement between two or more persons that is enforceable by law.",
        "sentence": "The aggressive salesman urged me to sign the contract right away.",
        "partOfSpeech": "noun"
    },
    {
        "word": "button",
        "valid": [
            "button"
        ],
        "difficulty": "medium",
        "definition": "A round fastener sewn to shirts and coats etc to fit through buttonholes.",
        "sentence": "Button the dress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "releases",
        "valid": [
            "releases"
        ],
        "difficulty": "hard",
        "definition": "Form of release: merchandise issued for sale or public showing (especially a record or film).",
        "sentence": "Don't forget to follow us on Twitter and Facebook for updates and info on new releases.",
        "partOfSpeech": "noun"
    },
    {
        "word": "homes",
        "valid": [
            "homes"
        ],
        "difficulty": "easy",
        "definition": "Form of home: where you live at a particular time.",
        "sentence": "Fear of pollution discouraged people from building homes near power plants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "super",
        "valid": [
            "super"
        ],
        "difficulty": "easy",
        "definition": "A caretaker for an apartment house; represents the owner as janitor and rent collector.",
        "sentence": "A super experiment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "male",
        "valid": [
            "male"
        ],
        "difficulty": "easy",
        "definition": "An animal that produces gametes (spermatozoa) that can fertilize female gametes (ova).",
        "sentence": "A male infant.",
        "partOfSpeech": "noun"
    },
    {
        "word": "matter",
        "valid": [
            "matter"
        ],
        "difficulty": "medium",
        "definition": "A vaguely specified concern.",
        "sentence": "Physicists study both the nature of matter and the forces which govern it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "custom",
        "valid": [
            "custom"
        ],
        "difficulty": "medium",
        "definition": "Accepted or habitual practice.",
        "sentence": "I have given this tailor my custom for many years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "almost",
        "valid": [
            "almost"
        ],
        "difficulty": "medium",
        "definition": "Slightly short of or not quite accomplished; all but.",
        "sentence": "The baby was almost asleep when the alarm sounded.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "took",
        "valid": [
            "took"
        ],
        "difficulty": "easy",
        "definition": "Form of take: the income or profit arising from such transactions as the sale of land or other property.",
        "sentence": "It took me more than two hours to translate a few pages of English.",
        "partOfSpeech": "noun"
    },
    {
        "word": "located",
        "valid": [
            "located"
        ],
        "difficulty": "medium",
        "definition": "Situated in a particular spot or position.",
        "sentence": "Valuable centrally located urban land.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "multiple",
        "valid": [
            "multiple"
        ],
        "difficulty": "hard",
        "definition": "The product of a quantity by an integer.",
        "sentence": "36 is a multiple of 9.",
        "partOfSpeech": "noun"
    },
    {
        "word": "distribution",
        "valid": [
            "distribution"
        ],
        "difficulty": "expert",
        "definition": "An arrangement of values of a variable showing their observed or theoretical frequency of occurrence.",
        "sentence": "Worldwide in distribution.",
        "partOfSpeech": "noun"
    },
    {
        "word": "editor",
        "valid": [
            "editor"
        ],
        "difficulty": "medium",
        "definition": "A person responsible for the editorial aspects of publication; the person who determines the final content of a text (especially of a newspaper or magazine).",
        "sentence": "The editor and the publisher are both my cousins.",
        "partOfSpeech": "noun"
    },
    {
        "word": "industrial",
        "valid": [
            "industrial"
        ],
        "difficulty": "expert",
        "definition": "Of or relating to or resulting from industry.",
        "sentence": "Industrial carpeting.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "cause",
        "valid": [
            "cause"
        ],
        "difficulty": "easy",
        "definition": "Events that provide the generative force that is the origin of something.",
        "sentence": "They worked in the cause of world peace.",
        "partOfSpeech": "noun"
    },
    {
        "word": "potential",
        "valid": [
            "potential"
        ],
        "difficulty": "hard",
        "definition": "The inherent capacity for coming into being.",
        "sentence": "A potential problem.",
        "partOfSpeech": "noun"
    },
    {
        "word": "song",
        "valid": [
            "song"
        ],
        "difficulty": "easy",
        "definition": "A short musical composition with words.",
        "sentence": "With a shout and a song they marched up to the gates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "focus",
        "valid": [
            "focus"
        ],
        "difficulty": "easy",
        "definition": "The concentration of attention or energy on something.",
        "sentence": "In focus.",
        "partOfSpeech": "noun"
    },
    {
        "word": "late",
        "valid": [
            "late"
        ],
        "difficulty": "easy",
        "definition": "Being or occurring at an advanced period of time or after a usual or expected time.",
        "sentence": "Late evening.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "fall",
        "valid": [
            "fall"
        ],
        "difficulty": "easy",
        "definition": "The season when the leaves fall from the trees.",
        "sentence": "A fall from virtue.",
        "partOfSpeech": "noun"
    },
    {
        "word": "featured",
        "valid": [
            "featured"
        ],
        "difficulty": "hard",
        "definition": "Made a feature or highlight; given prominence.",
        "sentence": "A grim-featured man.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "idea",
        "valid": [
            "idea"
        ],
        "difficulty": "easy",
        "definition": "The content of cognition; the main thing you are thinking about.",
        "sentence": "A rough idea how long it would take.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rooms",
        "valid": [
            "rooms"
        ],
        "difficulty": "easy",
        "definition": "Apartment consisting of a series of connected rooms used as a living unit (as in a hotel).",
        "sentence": "How many rooms are there in your house?",
        "partOfSpeech": "noun"
    },
    {
        "word": "female",
        "valid": [
            "female"
        ],
        "difficulty": "medium",
        "definition": "An animal that produces gametes (ova) that can be fertilized by male gametes (spermatozoa).",
        "sentence": "A female heir.",
        "partOfSpeech": "noun"
    },
    {
        "word": "responsible",
        "valid": [
            "responsible"
        ],
        "difficulty": "expert",
        "definition": "Worthy of or requiring responsibility or trust; or held accountable.",
        "sentence": "Determined who was the responsible party.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "communications",
        "valid": [
            "communications"
        ],
        "difficulty": "expert",
        "definition": "The discipline that studies the principles of transmiting information and the methods by which it is delivered (as print or radio or television etc.).",
        "sentence": "Communications is his major field of study.",
        "partOfSpeech": "noun"
    },
    {
        "word": "associated",
        "valid": [
            "associated"
        ],
        "difficulty": "expert",
        "definition": "Form of associate: a person who joins with others in some activity or endeavor.",
        "sentence": "The chairperson has been associated with the organization for ten years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "primary",
        "valid": [
            "primary"
        ],
        "difficulty": "medium",
        "definition": "A preliminary election where delegates or nominees are chosen.",
        "sentence": "Current through the primary coil induces current in the secondary coil.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cancer",
        "valid": [
            "cancer"
        ],
        "difficulty": "medium",
        "definition": "Any malignant growth or tumor caused by abnormal and uncontrolled cell division; it may spread to other parts of the body through the lymphatic system or the blood stream.",
        "sentence": "Tiny particles in the air can cause cancer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "numbers",
        "valid": [
            "numbers"
        ],
        "difficulty": "medium",
        "definition": "The fourth book of the Old Testament; contains a record of the number of Israelites who followed Moses out of Egypt.",
        "sentence": "My mother prefers the arbitrary selection of the lottery machines over my lucky numbers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reason",
        "valid": [
            "reason"
        ],
        "difficulty": "medium",
        "definition": "A rational motive for a belief or action.",
        "sentence": "We are told that man is endowed with reason and capable of distinguishing good from evil.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tool",
        "valid": [
            "tool"
        ],
        "difficulty": "easy",
        "definition": "An implement used in the practice of a vocation.",
        "sentence": "A sharp tongue is the only edged tool that grows keener with constant use.",
        "partOfSpeech": "noun"
    },
    {
        "word": "browser",
        "valid": [
            "browser"
        ],
        "difficulty": "medium",
        "definition": "A viewer who looks around casually without seeking anything in particular.",
        "sentence": "I switch on my laptop, start up the browser, and type in the address I've already learnt by heart.",
        "partOfSpeech": "noun"
    },
    {
        "word": "spring",
        "valid": [
            "spring"
        ],
        "difficulty": "medium",
        "definition": "The season of growth.",
        "sentence": "The spring was broken.",
        "partOfSpeech": "noun"
    },
    {
        "word": "foundation",
        "valid": [
            "foundation"
        ],
        "difficulty": "expert",
        "definition": "The basis on which something is grounded.",
        "sentence": "The foundation of a new scientific society.",
        "partOfSpeech": "noun"
    },
    {
        "word": "answer",
        "valid": [
            "answer"
        ],
        "difficulty": "medium",
        "definition": "A statement (either spoken or written) that is made to reply to a question or request or criticism or accusation.",
        "sentence": "His answer to any problem was to get drunk.",
        "partOfSpeech": "noun"
    },
    {
        "word": "voice",
        "valid": [
            "voice"
        ],
        "difficulty": "easy",
        "definition": "The distinctive quality or pitch or condition of a person's speech.",
        "sentence": "The voice of the law.",
        "partOfSpeech": "noun"
    },
    {
        "word": "friendly",
        "valid": [
            "friendly"
        ],
        "difficulty": "hard",
        "definition": "Troops belonging to or allied with your own military forces.",
        "sentence": "Friendly advice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "schedule",
        "valid": [
            "schedule"
        ],
        "difficulty": "hard",
        "definition": "A temporally organized plan for matters to be attended to.",
        "sentence": "A schedule is an identity card for time, but, if you don't have a schedule, the time isn't there.",
        "partOfSpeech": "noun"
    },
    {
        "word": "documents",
        "valid": [
            "documents"
        ],
        "difficulty": "hard",
        "definition": "Form of document: writing that provides information (especially information of an official nature).",
        "sentence": "They found out truth while examining a pile of relevant documents.",
        "partOfSpeech": "noun"
    },
    {
        "word": "communication",
        "valid": [
            "communication"
        ],
        "difficulty": "expert",
        "definition": "The activity of communicating; the activity of conveying information.",
        "sentence": "They could not act without official communication from Moscow.",
        "partOfSpeech": "noun"
    },
    {
        "word": "purpose",
        "valid": [
            "purpose"
        ],
        "difficulty": "medium",
        "definition": "An anticipated outcome that is intended or that guides your planned actions.",
        "sentence": "He is a man of purpose.",
        "partOfSpeech": "noun"
    },
    {
        "word": "feature",
        "valid": [
            "feature"
        ],
        "difficulty": "medium",
        "definition": "A prominent attribute or aspect of something.",
        "sentence": "They ran a feature on retirement planning.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comes",
        "valid": [
            "comes"
        ],
        "difficulty": "easy",
        "definition": "Form of come: the thick white fluid containing spermatozoa that is ejaculated by the male genital tract.",
        "sentence": "My apathy for voting comes from my distaste for politics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "police",
        "valid": [
            "police"
        ],
        "difficulty": "medium",
        "definition": "The force of policemen and officers.",
        "sentence": "The police will get you to find the bullets.",
        "partOfSpeech": "noun"
    },
    {
        "word": "everyone",
        "valid": [
            "everyone"
        ],
        "difficulty": "hard",
        "definition": "Everybody; -- commonly separated, every one.",
        "sentence": "I can only wonder if this is the same for everyone else.",
        "partOfSpeech": "noun"
    },
    {
        "word": "independent",
        "valid": [
            "independent"
        ],
        "difficulty": "expert",
        "definition": "A neutral or uncommitted person (especially in politics).",
        "sentence": "An independent mind.",
        "partOfSpeech": "noun"
    },
    {
        "word": "approach",
        "valid": [
            "approach"
        ],
        "difficulty": "hard",
        "definition": "Ideas or actions intended to deal with a problem or situation.",
        "sentence": "The hunter's approach scattered the geese.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cameras",
        "valid": [
            "cameras"
        ],
        "difficulty": "medium",
        "definition": "Form of camera: equipment for taking photographs (usually consisting of a lightproof box with a lens at one end and light-sensitive film at the other).",
        "sentence": "Eventually it was decided that the stores be equipped with surveillance cameras.",
        "partOfSpeech": "noun"
    },
    {
        "word": "brown",
        "valid": [
            "brown"
        ],
        "difficulty": "easy",
        "definition": "An orange of low brightness and saturation.",
        "sentence": "Brown the meat in the pan.",
        "partOfSpeech": "noun"
    },
    {
        "word": "physical",
        "valid": [
            "physical"
        ],
        "difficulty": "hard",
        "definition": "Involving the body as distinguished from the mind or spirit.",
        "sentence": "A physical manifestation.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "operating",
        "valid": [
            "operating"
        ],
        "difficulty": "hard",
        "definition": "Involved in a kind of operation.",
        "sentence": "The operating conditions of the oxidation pond.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "hill",
        "valid": [
            "hill"
        ],
        "difficulty": "easy",
        "definition": "A local and well-defined elevation of the land.",
        "sentence": "You must go up the hill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "maps",
        "valid": [
            "maps"
        ],
        "difficulty": "easy",
        "definition": "Form of map: a diagrammatic representation of the earth's surface (or part of it).",
        "sentence": "You can't get lost in big cities; there are maps everywhere!",
        "partOfSpeech": "noun"
    },
    {
        "word": "medicine",
        "valid": [
            "medicine"
        ],
        "difficulty": "hard",
        "definition": "The branches of medical science that deal with nonsurgical techniques.",
        "sentence": "He studied medicine at Harvard.",
        "partOfSpeech": "noun"
    },
    {
        "word": "deal",
        "valid": [
            "deal"
        ],
        "difficulty": "easy",
        "definition": "A particular instance of buying or selling.",
        "sentence": "The captain was entrusted with the deal of provisions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hold",
        "valid": [
            "hold"
        ],
        "difficulty": "easy",
        "definition": "The act of grasping.",
        "sentence": "She kept a firm hold on the railing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ratings",
        "valid": [
            "ratings"
        ],
        "difficulty": "medium",
        "definition": "Form of rating: an appraisal of the value of something.",
        "sentence": "Credit card companies are not looking so hard at credit ratings.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forms",
        "valid": [
            "forms"
        ],
        "difficulty": "easy",
        "definition": "Form of form: the phonological or orthographic sound or appearance of a word that can be used to describe or identify something.",
        "sentence": "The rocks are weathered into fantastic forms.",
        "partOfSpeech": "noun"
    },
    {
        "word": "glass",
        "valid": [
            "glass"
        ],
        "difficulty": "easy",
        "definition": "A brittle transparent solid with irregular atomic structure.",
        "sentence": "She collected old glass.",
        "partOfSpeech": "noun"
    },
    {
        "word": "happy",
        "valid": [
            "happy"
        ],
        "difficulty": "easy",
        "definition": "Enjoying or showing or marked by joy or pleasure.",
        "sentence": "A happy turn of phrase.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "wanted",
        "valid": [
            "wanted"
        ],
        "difficulty": "medium",
        "definition": "Desired or wished for or sought.",
        "sentence": "So good to feel wanted.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "developed",
        "valid": [
            "developed"
        ],
        "difficulty": "hard",
        "definition": "Being changed over time so as to be e.g. stronger or more complete or more useful.",
        "sentence": "The developed qualities of the Hellenic outlook.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "thank",
        "valid": [
            "thank"
        ],
        "difficulty": "easy",
        "definition": "Express gratitude or show appreciation to.",
        "sentence": "Thank you very much!",
        "partOfSpeech": "verb"
    },
    {
        "word": "safe",
        "valid": [
            "safe"
        ],
        "difficulty": "easy",
        "definition": "Strongbox where valuables can be safely kept.",
        "sentence": "A safe trip.",
        "partOfSpeech": "noun"
    },
    {
        "word": "unique",
        "valid": [
            "unique"
        ],
        "difficulty": "medium",
        "definition": "Radically distinctive and without equal.",
        "sentence": "Spoke with a unique accent.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "survey",
        "valid": [
            "survey"
        ],
        "difficulty": "medium",
        "definition": "A detailed critical inspection.",
        "sentence": "His survey of the battlefield was limited.",
        "partOfSpeech": "noun"
    },
    {
        "word": "prior",
        "valid": [
            "prior"
        ],
        "difficulty": "easy",
        "definition": "The head of a religious order; in an abbey the prior is next below the abbot.",
        "sentence": "This happened prior to receiving your letter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "telephone",
        "valid": [
            "telephone"
        ],
        "difficulty": "hard",
        "definition": "Electronic equipment that converts sound into electrical signals that can be transmitted over distances and then converts received signals back into sounds.",
        "sentence": "I talked to him on the telephone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sport",
        "valid": [
            "sport"
        ],
        "difficulty": "easy",
        "definition": "An active diversion requiring physical exertion and competition.",
        "sentence": "He said it in sport.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ready",
        "valid": [
            "ready"
        ],
        "difficulty": "easy",
        "definition": "Poised for action.",
        "sentence": "Their guns were at the ready.",
        "partOfSpeech": "noun"
    },
    {
        "word": "feed",
        "valid": [
            "feed"
        ],
        "difficulty": "easy",
        "definition": "Food for domestic livestock.",
        "sentence": "Feed carrots into a food processor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "animal",
        "valid": [
            "animal"
        ],
        "difficulty": "medium",
        "definition": "A living organism characterized by voluntary movement.",
        "sentence": "Life in prison is worse than the life of an animal.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sources",
        "valid": [
            "sources"
        ],
        "difficulty": "medium",
        "definition": "Form of source: the place where something begins, where it springs into being.",
        "sentence": "An astute reader should be willing to weigh everything they read, including anonymous sources.",
        "partOfSpeech": "noun"
    },
    {
        "word": "population",
        "valid": [
            "population"
        ],
        "difficulty": "expert",
        "definition": "The people who inhabit a territory or state.",
        "sentence": "He deplored the population of colonies with convicted criminals.",
        "partOfSpeech": "noun"
    },
    {
        "word": "regular",
        "valid": [
            "regular"
        ],
        "difficulty": "medium",
        "definition": "A regular patron.",
        "sentence": "Took his regular morning walk.",
        "partOfSpeech": "noun"
    },
    {
        "word": "secure",
        "valid": [
            "secure"
        ],
        "difficulty": "medium",
        "definition": "Get by special effort.",
        "sentence": "He was secure that nothing will be held against him.",
        "partOfSpeech": "verb"
    },
    {
        "word": "navigation",
        "valid": [
            "navigation"
        ],
        "difficulty": "expert",
        "definition": "The guidance of ships or airplanes from place to place.",
        "sentence": "The channel will be open to navigation as soon as the ice melts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "operations",
        "valid": [
            "operations"
        ],
        "difficulty": "expert",
        "definition": "Financial transactions at a brokerage; having to do with the execution of trades and keeping customer records.",
        "sentence": "The Mafia uses legitimate business operations as a front.",
        "partOfSpeech": "noun"
    },
    {
        "word": "therefore",
        "valid": [
            "therefore"
        ],
        "difficulty": "hard",
        "definition": "From that fact or reason or as a result.",
        "sentence": "Therefore X must be true.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "simply",
        "valid": [
            "simply"
        ],
        "difficulty": "medium",
        "definition": "And nothing more.",
        "sentence": "It is simply a matter of time.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "evidence",
        "valid": [
            "evidence"
        ],
        "difficulty": "hard",
        "definition": "Your basis for belief or disbelief; knowledge on which to base belief.",
        "sentence": "The evidence that smoking causes lung cancer is very compelling.",
        "partOfSpeech": "noun"
    },
    {
        "word": "station",
        "valid": [
            "station"
        ],
        "difficulty": "medium",
        "definition": "A facility equipped with special equipment and personnel for a particular purpose.",
        "sentence": "He started looking for a gas station.",
        "partOfSpeech": "noun"
    },
    {
        "word": "round",
        "valid": [
            "round"
        ],
        "difficulty": "easy",
        "definition": "A charge of ammunition for a single shot.",
        "sentence": "A round of golf takes about 4 hours.",
        "partOfSpeech": "noun"
    },
    {
        "word": "favorite",
        "valid": [
            "favorite"
        ],
        "difficulty": "hard",
        "definition": "Something regarded with special favor or liking.",
        "sentence": "A favorite tourist attraction.",
        "partOfSpeech": "noun"
    },
    {
        "word": "understand",
        "valid": [
            "understand"
        ],
        "difficulty": "expert",
        "definition": "Know and comprehend the nature or meaning of.",
        "sentence": "She did not understand her husband.",
        "partOfSpeech": "verb"
    },
    {
        "word": "option",
        "valid": [
            "option"
        ],
        "difficulty": "medium",
        "definition": "The right to buy or sell property at an agreed price; the right is purchased and if it is not exercised by a stated date the money is forfeited.",
        "sentence": "What option did I have?",
        "partOfSpeech": "noun"
    },
    {
        "word": "master",
        "valid": [
            "master"
        ],
        "difficulty": "medium",
        "definition": "An artist of consummate skill.",
        "sentence": "A master of the violin.",
        "partOfSpeech": "noun"
    },
    {
        "word": "valley",
        "valid": [
            "valley"
        ],
        "difficulty": "medium",
        "definition": "A long depression in the surface of the land that usually contains a river.",
        "sentence": "A beautiful valley lies behind the hill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recently",
        "valid": [
            "recently"
        ],
        "difficulty": "hard",
        "definition": "In the recent past.",
        "sentence": "He was in Paris recently.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "probably",
        "valid": [
            "probably"
        ],
        "difficulty": "hard",
        "definition": "With considerable certainty; without much doubt.",
        "sentence": "He is probably out of the country.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "rentals",
        "valid": [
            "rentals"
        ],
        "difficulty": "medium",
        "definition": "Form of rental: property that is leased or rented out or let.",
        "sentence": "In the olden days, access to films and series was only possible through rentals and television.",
        "partOfSpeech": "noun"
    },
    {
        "word": "built",
        "valid": [
            "built"
        ],
        "difficulty": "easy",
        "definition": "Having a substance (an abrasive or filler) added to increase effectiveness.",
        "sentence": "The built liquid detergents.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "publications",
        "valid": [
            "publications"
        ],
        "difficulty": "expert",
        "definition": "Form of publication: a copy of a printed work offered for distribution.",
        "sentence": "I put an advertisement for the new publications in the newspaper.",
        "partOfSpeech": "noun"
    },
    {
        "word": "blood",
        "valid": [
            "blood"
        ],
        "difficulty": "easy",
        "definition": "The fluid (red in vertebrates) that is pumped through the body by the heart and contains plasma, blood cells, and platelets.",
        "sentence": "A person of hot blood.",
        "partOfSpeech": "noun"
    },
    {
        "word": "worldwide",
        "valid": [
            "worldwide"
        ],
        "difficulty": "hard",
        "definition": "Spanning or extending throughout the entire world.",
        "sentence": "Worldwide distribution.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "improve",
        "valid": [
            "improve"
        ],
        "difficulty": "medium",
        "definition": "To make better.",
        "sentence": "It seems that the purpose of his study abroad was to improve his ability to speak English.",
        "partOfSpeech": "verb"
    },
    {
        "word": "connection",
        "valid": [
            "connection"
        ],
        "difficulty": "expert",
        "definition": "A relation between things or events (as in the case of one causing the other or sharing features with it).",
        "sentence": "There was a connection via the internet.",
        "partOfSpeech": "noun"
    },
    {
        "word": "publisher",
        "valid": [
            "publisher"
        ],
        "difficulty": "hard",
        "definition": "A firm in the publishing business.",
        "sentence": "The editor and the publisher are both my cousins.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hall",
        "valid": [
            "hall"
        ],
        "difficulty": "easy",
        "definition": "An interior passage or corridor onto which rooms open.",
        "sentence": "Lecture hall.",
        "partOfSpeech": "noun"
    },
    {
        "word": "larger",
        "valid": [
            "larger"
        ],
        "difficulty": "medium",
        "definition": "Large or big relative to something else.",
        "sentence": "Your income is three times larger than mine.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "anti",
        "valid": [
            "anti"
        ],
        "difficulty": "easy",
        "definition": "A person who is opposed (to an action or policy or practice etc.).",
        "sentence": "Which anti depressant would you recommend for someone who can not take hormones?",
        "partOfSpeech": "noun"
    },
    {
        "word": "networks",
        "valid": [
            "networks"
        ],
        "difficulty": "hard",
        "definition": "Form of network: an interconnected system of things or people.",
        "sentence": "With the development of networks a huge and unprecedented volume of messages flies around the world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "earth",
        "valid": [
            "earth"
        ],
        "difficulty": "easy",
        "definition": "The 3rd planet from the sun; the planet we live on.",
        "sentence": "It was hell on earth.",
        "partOfSpeech": "noun"
    },
    {
        "word": "parents",
        "valid": [
            "parents"
        ],
        "difficulty": "medium",
        "definition": "Form of parent: a father or mother; one who begets or one who gives birth to or nurtures and raises a child; a relative who plays the role of guardian.",
        "sentence": "My parents keep arguing about stupid things. It's so annoying!",
        "partOfSpeech": "noun"
    },
    {
        "word": "impact",
        "valid": [
            "impact"
        ],
        "difficulty": "medium",
        "definition": "The striking of one body against another.",
        "sentence": "The book had an important impact on my thinking.",
        "partOfSpeech": "noun"
    },
    {
        "word": "transfer",
        "valid": [
            "transfer"
        ],
        "difficulty": "hard",
        "definition": "The act of moving something from one location to another.",
        "sentence": "The transfer of the music from record to tape suppressed much of the background noise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "introduction",
        "valid": [
            "introduction"
        ],
        "difficulty": "expert",
        "definition": "The act of beginning something new.",
        "sentence": "They resisted the introduction of impractical alternatives.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kitchen",
        "valid": [
            "kitchen"
        ],
        "difficulty": "medium",
        "definition": "A room equipped for preparing meals.",
        "sentence": "When she returned home from school, she began to help her mother in the kitchen.",
        "partOfSpeech": "noun"
    },
    {
        "word": "strong",
        "valid": [
            "strong"
        ],
        "difficulty": "medium",
        "definition": "Having strength or power greater than average or expected.",
        "sentence": "Gave a strong pull on the rope.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "wedding",
        "valid": [
            "wedding"
        ],
        "difficulty": "medium",
        "definition": "The social event at which the ceremony of marriage is performed.",
        "sentence": "You had better set some money apart for your wedding.",
        "partOfSpeech": "noun"
    },
    {
        "word": "properties",
        "valid": [
            "properties"
        ],
        "difficulty": "expert",
        "definition": "Form of property: something owned; any tangible or intangible possession that is owned by someone.",
        "sentence": "These hot springs possess properties for healing wounds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hospital",
        "valid": [
            "hospital"
        ],
        "difficulty": "hard",
        "definition": "A health facility where patients receive treatment.",
        "sentence": "I'm at the hospital. I got struck by lightning.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ground",
        "valid": [
            "ground"
        ],
        "difficulty": "medium",
        "definition": "The solid part of the earth's surface.",
        "sentence": "They gained ground step by step.",
        "partOfSpeech": "noun"
    },
    {
        "word": "overview",
        "valid": [
            "overview"
        ],
        "difficulty": "hard",
        "definition": "A general summary of a subject.",
        "sentence": "The treasurer gave a brief overview of the financial consequences.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ship",
        "valid": [
            "ship"
        ],
        "difficulty": "easy",
        "definition": "A vessel that carries passengers or freight.",
        "sentence": "Ship the cargo in the hold of the vessel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "accommodation",
        "valid": [
            "accommodation"
        ],
        "difficulty": "expert",
        "definition": "Making or becoming suitable; adjusting to circumstances.",
        "sentence": "They reached an accommodation with Japan.",
        "partOfSpeech": "noun"
    },
    {
        "word": "owners",
        "valid": [
            "owners"
        ],
        "difficulty": "medium",
        "definition": "Form of owner: (law) someone who owns (is legal possessor of) a business.",
        "sentence": "The owners appointed him manager.",
        "partOfSpeech": "noun"
    },
    {
        "word": "disease",
        "valid": [
            "disease"
        ],
        "difficulty": "medium",
        "definition": "An impairment of health or a condition of abnormal functioning.",
        "sentence": "Life is a fatal sexually transmitted disease.",
        "partOfSpeech": "noun"
    },
    {
        "word": "excellent",
        "valid": [
            "excellent"
        ],
        "difficulty": "hard",
        "definition": "Very good; of the highest quality.",
        "sentence": "Made an excellent speech.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "paid",
        "valid": [
            "paid"
        ],
        "difficulty": "easy",
        "definition": "Marked by the reception of pay.",
        "sentence": "Paid work.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "perfect",
        "valid": [
            "perfect"
        ],
        "difficulty": "medium",
        "definition": "A tense of verbs used in describing action that has been completed (sometimes regarded as perfective aspect).",
        "sentence": "Perfect your French in Paris!",
        "partOfSpeech": "noun"
    },
    {
        "word": "hair",
        "valid": [
            "hair"
        ],
        "difficulty": "easy",
        "definition": "A covering for the body (or parts of it) consisting of a dense growth of threadlike structures (as on the human head); helps to prevent heat loss.",
        "sentence": "There is a hair in my soup.",
        "partOfSpeech": "noun"
    },
    {
        "word": "opportunity",
        "valid": [
            "opportunity"
        ],
        "difficulty": "expert",
        "definition": "A possibility due to a favorable combination of circumstances.",
        "sentence": "The holiday gave us the opportunity to visit Washington.",
        "partOfSpeech": "noun"
    },
    {
        "word": "classic",
        "valid": [
            "classic"
        ],
        "difficulty": "medium",
        "definition": "A creation of the highest excellence.",
        "sentence": "Classic Chinese pottery.",
        "partOfSpeech": "noun"
    },
    {
        "word": "basis",
        "valid": [
            "basis"
        ],
        "difficulty": "easy",
        "definition": "A relation that provides the foundation for something.",
        "sentence": "The whole argument rested on a basis of conjecture.",
        "partOfSpeech": "noun"
    },
    {
        "word": "command",
        "valid": [
            "command"
        ],
        "difficulty": "medium",
        "definition": "An authoritative direction or instruction to do something.",
        "sentence": "The materials at the command of the potters grew.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cities",
        "valid": [
            "cities"
        ],
        "difficulty": "medium",
        "definition": "Form of city: a large and densely populated urban area; may include several independent administrative districts.",
        "sentence": "Japan is full of beautiful cities. Kyoto and Nara, for instance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "express",
        "valid": [
            "express"
        ],
        "difficulty": "medium",
        "definition": "Mail that is distributed by a rapid and efficient system.",
        "sentence": "He caught the express to New York.",
        "partOfSpeech": "noun"
    },
    {
        "word": "award",
        "valid": [
            "award"
        ],
        "difficulty": "easy",
        "definition": "A grant made by a law court.",
        "sentence": "An award for bravery.",
        "partOfSpeech": "noun"
    },
    {
        "word": "distance",
        "valid": [
            "distance"
        ],
        "difficulty": "hard",
        "definition": "The property created by the space between two objects or points.",
        "sentence": "The distance from New York to Chicago.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tree",
        "valid": [
            "tree"
        ],
        "difficulty": "easy",
        "definition": "A tall perennial woody plant having a main trunk and branches forming a distinct elevated crown; includes both gymnosperms and angiosperms.",
        "sentence": "Genealogical tree.",
        "partOfSpeech": "noun"
    },
    {
        "word": "peter",
        "valid": [
            "peter"
        ],
        "difficulty": "easy",
        "definition": "Disciple of Jesus and leader of the Apostles; regarded by Catholics as the vicar of Christ on earth and first Pope.",
        "sentence": "Peter loves Jane.",
        "partOfSpeech": "noun"
    },
    {
        "word": "assessment",
        "valid": [
            "assessment"
        ],
        "difficulty": "expert",
        "definition": "The classification of someone or something with respect to its worth.",
        "sentence": "The assessment for repairs outraged the club's membership.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ensure",
        "valid": [
            "ensure"
        ],
        "difficulty": "medium",
        "definition": "Make certain of.",
        "sentence": "This nest egg will ensure a nice retirement for us.",
        "partOfSpeech": "verb"
    },
    {
        "word": "thus",
        "valid": [
            "thus"
        ],
        "difficulty": "easy",
        "definition": "An aromatic gum resin obtained from various Arabian or East African trees; formerly valued for worship and for embalming and fumigation.",
        "sentence": "It is late and thus we must go.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wall",
        "valid": [
            "wall"
        ],
        "difficulty": "easy",
        "definition": "An architectural partition with a height and length greater than its thickness; used to divide or enclose an area or to support another structure.",
        "sentence": "The south wall had a small window.",
        "partOfSpeech": "noun"
    },
    {
        "word": "involved",
        "valid": [
            "involved"
        ],
        "difficulty": "hard",
        "definition": "Connected by participation or association or use.",
        "sentence": "The difficulties in which the question is involved.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "extra",
        "valid": [
            "extra"
        ],
        "difficulty": "easy",
        "definition": "A minor actor in crowd scenes.",
        "sentence": "Need extra help.",
        "partOfSpeech": "noun"
    },
    {
        "word": "especially",
        "valid": [
            "especially"
        ],
        "difficulty": "expert",
        "definition": "To a distinctly greater extent or degree than is common.",
        "sentence": "An especially (or specially) cautious approach to the danger.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "interface",
        "valid": [
            "interface"
        ],
        "difficulty": "hard",
        "definition": "A surface forming a common boundary between two things (two objects or liquids or chemical phases).",
        "sentence": "The interface between chemistry and biology.",
        "partOfSpeech": "noun"
    },
    {
        "word": "partners",
        "valid": [
            "partners"
        ],
        "difficulty": "hard",
        "definition": "Form of partner: a person's partner in marriage.",
        "sentence": "You and I are good partners in business.",
        "partOfSpeech": "noun"
    },
    {
        "word": "budget",
        "valid": [
            "budget"
        ],
        "difficulty": "medium",
        "definition": "A sum of money allocated for a particular purpose.",
        "sentence": "The president submitted the annual budget to Congress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rated",
        "valid": [
            "rated"
        ],
        "difficulty": "easy",
        "definition": "Form of rat: any of various long-tailed rodents similar to but larger than a mouse.",
        "sentence": "Blue movies are rated X, which means that only people of 18 and over can watch them.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guides",
        "valid": [
            "guides"
        ],
        "difficulty": "medium",
        "definition": "Form of guide: someone employed to conduct others.",
        "sentence": "We had native guides on our trip to the mountain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "success",
        "valid": [
            "success"
        ],
        "difficulty": "medium",
        "definition": "An event that accomplishes its intended purpose.",
        "sentence": "His success in the marathon was unexpected.",
        "partOfSpeech": "noun"
    },
    {
        "word": "maximum",
        "valid": [
            "maximum"
        ],
        "difficulty": "medium",
        "definition": "The largest possible quantity.",
        "sentence": "Maximum pressure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "operation",
        "valid": [
            "operation"
        ],
        "difficulty": "hard",
        "definition": "The state of being in effect or being operative.",
        "sentence": "Her smooth operation of the vehicle gave us a surprisingly comfortable ride.",
        "partOfSpeech": "noun"
    },
    {
        "word": "existing",
        "valid": [
            "existing"
        ],
        "difficulty": "hard",
        "definition": "Presently existing.",
        "sentence": "Much of the beluga caviar existing in the world is found in the Soviet Union and Iran.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "quite",
        "valid": [
            "quite"
        ],
        "difficulty": "easy",
        "definition": "To a degree (not used with a negative).",
        "sentence": "You're quite right.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "selected",
        "valid": [
            "selected"
        ],
        "difficulty": "hard",
        "definition": "Chosen in preference to another.",
        "sentence": "Those selected will have to face extensive medical and psychological tests.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "patients",
        "valid": [
            "patients"
        ],
        "difficulty": "hard",
        "definition": "Form of patient: a person who requires medical care.",
        "sentence": "The nurses must see to the comfort of their patients.",
        "partOfSpeech": "noun"
    },
    {
        "word": "restaurants",
        "valid": [
            "restaurants"
        ],
        "difficulty": "expert",
        "definition": "Form of restaurant: a building where people go to eat.",
        "sentence": "Many restaurants and pubs are on Itsutsugi Street.",
        "partOfSpeech": "noun"
    },
    {
        "word": "beautiful",
        "valid": [
            "beautiful"
        ],
        "difficulty": "hard",
        "definition": "Delighting the senses or exciting intellectual or emotional admiration.",
        "sentence": "A beautiful child.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "warning",
        "valid": [
            "warning"
        ],
        "difficulty": "medium",
        "definition": "A message informing of danger.",
        "sentence": "The warning was to beware of surprises.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wine",
        "valid": [
            "wine"
        ],
        "difficulty": "easy",
        "definition": "Fermented juice (of grapes especially).",
        "sentence": "Wine is poetry in bottles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "locations",
        "valid": [
            "locations"
        ],
        "difficulty": "hard",
        "definition": "Form of location: a point or extent in space.",
        "sentence": "Are any of these locations easy to get to by bus?",
        "partOfSpeech": "noun"
    },
    {
        "word": "horse",
        "valid": [
            "horse"
        ],
        "difficulty": "easy",
        "definition": "Solid-hoofed herbivorous quadruped domesticated since prehistoric times.",
        "sentence": "500 horse led the attack.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vote",
        "valid": [
            "vote"
        ],
        "difficulty": "easy",
        "definition": "A choice that is made by counting the number of people in favor of each alternative.",
        "sentence": "They put the question to a vote.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forward",
        "valid": [
            "forward"
        ],
        "difficulty": "medium",
        "definition": "The person who plays the position of forward in certain games, such as basketball, soccer, or hockey.",
        "sentence": "Forward my mail.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flowers",
        "valid": [
            "flowers"
        ],
        "difficulty": "medium",
        "definition": "Form of flower: a plant cultivated for its blooms or blossoms.",
        "sentence": "A delivery man is dropping off an arrangement of artificial flowers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stars",
        "valid": [
            "stars"
        ],
        "difficulty": "easy",
        "definition": "Form of star: (astronomy) a celestial body of hot gases that radiates energy derived from thermonuclear reactions in the interior.",
        "sentence": "Your eyes remind me of stars.",
        "partOfSpeech": "noun"
    },
    {
        "word": "significant",
        "valid": [
            "significant"
        ],
        "difficulty": "expert",
        "definition": "Important in effect or meaning.",
        "sentence": "A significant silence.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "lists",
        "valid": [
            "lists"
        ],
        "difficulty": "easy",
        "definition": "Form of list: a database containing an ordered array of items (names or topics).",
        "sentence": "Do not sign a delivery receipt unless it accurately lists the goods received.",
        "partOfSpeech": "noun"
    },
    {
        "word": "technologies",
        "valid": [
            "technologies"
        ],
        "difficulty": "expert",
        "definition": "Form of technology: the application of the knowledge and usage of tools (such as machines or utensils) and techniques to control one's environment.",
        "sentence": "Man should make peaceful use of technologies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "owner",
        "valid": [
            "owner"
        ],
        "difficulty": "easy",
        "definition": "Someone who owns (is legal possessor of) a business.",
        "sentence": "He is the owner of a chain of restaurants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "retail",
        "valid": [
            "retail"
        ],
        "difficulty": "medium",
        "definition": "The selling of goods to consumers; usually in small quantities and not for resale.",
        "sentence": "These gems retail at thousands of dollars each.",
        "partOfSpeech": "noun"
    },
    {
        "word": "animals",
        "valid": [
            "animals"
        ],
        "difficulty": "medium",
        "definition": "Form of animal: a living organism characterized by voluntary movement.",
        "sentence": "Elephants are the largest land animals alive today.",
        "partOfSpeech": "noun"
    },
    {
        "word": "useful",
        "valid": [
            "useful"
        ],
        "difficulty": "medium",
        "definition": "Being of use or service.",
        "sentence": "The girl felt motherly and useful.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "directly",
        "valid": [
            "directly"
        ],
        "difficulty": "hard",
        "definition": "Without deviation.",
        "sentence": "The path leads directly to the lake.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "manufacturer",
        "valid": [
            "manufacturer"
        ],
        "difficulty": "expert",
        "definition": "A business engaged in manufacturing some product.",
        "sentence": "We supply parts to the auto manufacturer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ways",
        "valid": [
            "ways"
        ],
        "difficulty": "easy",
        "definition": "Structure consisting of a sloping way down to the water from the place where ships are built or repaired.",
        "sentence": "Rocks and minerals are useful for us in many ways.",
        "partOfSpeech": "noun"
    },
    {
        "word": "providing",
        "valid": [
            "providing"
        ],
        "difficulty": "hard",
        "definition": "Form of provide: give something useful or necessary to.",
        "sentence": "Television has the advantage of providing sports fans with greater convenience.",
        "partOfSpeech": "verb"
    },
    {
        "word": "rule",
        "valid": [
            "rule"
        ],
        "difficulty": "easy",
        "definition": "A principle or condition that customarily governs behavior.",
        "sentence": "Violence is the rule not the exception.",
        "partOfSpeech": "noun"
    },
    {
        "word": "housing",
        "valid": [
            "housing"
        ],
        "difficulty": "medium",
        "definition": "Structures collectively in which people are housed.",
        "sentence": "The influx of foreign workers has caused a serious housing problem in this area.",
        "partOfSpeech": "noun"
    },
    {
        "word": "takes",
        "valid": [
            "takes"
        ],
        "difficulty": "easy",
        "definition": "Form of take: the income or profit arising from such transactions as the sale of land or other property.",
        "sentence": "Be patient please. It takes time.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bring",
        "valid": [
            "bring"
        ],
        "difficulty": "easy",
        "definition": "Take something or somebody with oneself somewhere.",
        "sentence": "Could you bring the wine?",
        "partOfSpeech": "verb"
    },
    {
        "word": "catalog",
        "valid": [
            "catalog"
        ],
        "difficulty": "medium",
        "definition": "A book or pamphlet containing an enumeration of things.",
        "sentence": "He found it in the Sears catalog.",
        "partOfSpeech": "noun"
    },
    {
        "word": "searches",
        "valid": [
            "searches"
        ],
        "difficulty": "hard",
        "definition": "Form of search: the activity of looking thoroughly in order to find something or someone.",
        "sentence": "Who searches, finds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trying",
        "valid": [
            "trying"
        ],
        "difficulty": "medium",
        "definition": "Hard to endure.",
        "sentence": "A trying day at the office.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "mother",
        "valid": [
            "mother"
        ],
        "difficulty": "medium",
        "definition": "A woman who has given birth to a child (also used as a term of address to your mother).",
        "sentence": "Necessity is the mother of invention.",
        "partOfSpeech": "noun"
    },
    {
        "word": "authority",
        "valid": [
            "authority"
        ],
        "difficulty": "hard",
        "definition": "The power or right to give orders or make decisions.",
        "sentence": "Authority for the program was renewed several times.",
        "partOfSpeech": "noun"
    },
    {
        "word": "considered",
        "valid": [
            "considered"
        ],
        "difficulty": "expert",
        "definition": "Carefully weighed.",
        "sentence": "A considered opinion.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "told",
        "valid": [
            "told"
        ],
        "difficulty": "easy",
        "definition": "Form of tell: a Swiss patriot who lived in the early 14th century and who was renowned for his skill as an archer; according to legend an Austrian governor compelled him to shoot an apple from his son's head with his crossbow (which he did successfully without mishap).",
        "sentence": "I told them to send me another ticket.",
        "partOfSpeech": "noun"
    },
    {
        "word": "traffic",
        "valid": [
            "traffic"
        ],
        "difficulty": "medium",
        "definition": "The aggregation of things (pedestrians or vehicles) coming and going in a particular locality during a specified period of time.",
        "sentence": "Heavy traffic overloaded the trunk lines.",
        "partOfSpeech": "noun"
    },
    {
        "word": "programme",
        "valid": [
            "programme"
        ],
        "difficulty": "hard",
        "definition": "An announcement of the events that will occur as part of a theatrical or sporting event.",
        "sentence": "New problems are often brought up on that TV programme.",
        "partOfSpeech": "noun"
    },
    {
        "word": "joined",
        "valid": [
            "joined"
        ],
        "difficulty": "medium",
        "definition": "Of or relating to two people who are married to each other.",
        "sentence": "New hires who just joined the company do everything in this timid manner.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "input",
        "valid": [
            "input"
        ],
        "difficulty": "easy",
        "definition": "Signal going into an electronic system.",
        "sentence": "We would appreciate input from our users on how we can improve our software.",
        "partOfSpeech": "noun"
    },
    {
        "word": "strategy",
        "valid": [
            "strategy"
        ],
        "difficulty": "hard",
        "definition": "An elaborate and systematic plan of action.",
        "sentence": "Hope is not a strategy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "feet",
        "valid": [
            "feet"
        ],
        "difficulty": "easy",
        "definition": "Form of foot: the part of the leg of a human being below the ankle joint.",
        "sentence": "On your feet, children!",
        "partOfSpeech": "noun"
    },
    {
        "word": "agent",
        "valid": [
            "agent"
        ],
        "difficulty": "easy",
        "definition": "An active and efficient cause; capable of producing a certain effect.",
        "sentence": "In case of an emergency, get in touch with my agent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "valid",
        "valid": [
            "valid"
        ],
        "difficulty": "easy",
        "definition": "Well grounded in logic or truth or having legal force.",
        "sentence": "The license is still valid.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "modern",
        "valid": [
            "modern"
        ],
        "difficulty": "medium",
        "definition": "A contemporary person.",
        "sentence": "Modern English.",
        "partOfSpeech": "noun"
    },
    {
        "word": "senior",
        "valid": [
            "senior"
        ],
        "difficulty": "medium",
        "definition": "An undergraduate student during the year preceding graduation.",
        "sentence": "Senior citizen.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ireland",
        "valid": [
            "ireland"
        ],
        "difficulty": "medium",
        "definition": "A republic consisting of 26 of 32 counties comprising the island of Ireland; achieved independence from the United Kingdom in 1921.",
        "sentence": "Ireland is famous for lace.",
        "partOfSpeech": "noun"
    },
    {
        "word": "teaching",
        "valid": [
            "teaching"
        ],
        "difficulty": "hard",
        "definition": "The profession of a teacher.",
        "sentence": "Good classroom teaching is seldom rewarded.",
        "partOfSpeech": "noun"
    },
    {
        "word": "door",
        "valid": [
            "door"
        ],
        "difficulty": "easy",
        "definition": "A swinging or sliding barrier that will close the entrance to a room or building or vehicle.",
        "sentence": "He knocked on the door.",
        "partOfSpeech": "noun"
    },
    {
        "word": "grand",
        "valid": [
            "grand"
        ],
        "difficulty": "easy",
        "definition": "The cardinal number that is the product of 10 and 100.",
        "sentence": "Grand ballroom.",
        "partOfSpeech": "noun"
    },
    {
        "word": "testing",
        "valid": [
            "testing"
        ],
        "difficulty": "medium",
        "definition": "The act of subjecting to experimental test in order to determine how well something works.",
        "sentence": "They agreed to end the testing of atomic weapons.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trial",
        "valid": [
            "trial"
        ],
        "difficulty": "easy",
        "definition": "The act of testing something.",
        "sentence": "He called each flip of the coin a new trial.",
        "partOfSpeech": "noun"
    },
    {
        "word": "charge",
        "valid": [
            "charge"
        ],
        "difficulty": "medium",
        "definition": "An impetuous rush toward someone or something.",
        "sentence": "His charge was deliver a message.",
        "partOfSpeech": "noun"
    },
    {
        "word": "units",
        "valid": [
            "units"
        ],
        "difficulty": "easy",
        "definition": "Form of unit: any division of quantity accepted as a standard of measurement or exchange.",
        "sentence": "NTT cancelled telephone cards with over 300 units.",
        "partOfSpeech": "noun"
    },
    {
        "word": "instead",
        "valid": [
            "instead"
        ],
        "difficulty": "medium",
        "definition": "In place of, or as an alternative to.",
        "sentence": "Felix became a herpetologist instead.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "cool",
        "valid": [
            "cool"
        ],
        "difficulty": "easy",
        "definition": "The quality of being at a refreshingly low temperature.",
        "sentence": "Keep your cool.",
        "partOfSpeech": "noun"
    },
    {
        "word": "normal",
        "valid": [
            "normal"
        ],
        "difficulty": "medium",
        "definition": "Something regarded as a normative example.",
        "sentence": "Serve wine at normal room temperature.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wrote",
        "valid": [
            "wrote"
        ],
        "difficulty": "easy",
        "definition": "Form of write: produce a literary work.",
        "sentence": "You wrote this book?",
        "partOfSpeech": "verb"
    },
    {
        "word": "enterprise",
        "valid": [
            "enterprise"
        ],
        "difficulty": "expert",
        "definition": "A purposeful or industrious undertaking (especially one that requires effort or boldness).",
        "sentence": "He had doubts about the whole enterprise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ships",
        "valid": [
            "ships"
        ],
        "difficulty": "easy",
        "definition": "Form of ship: a vessel that carries passengers or freight.",
        "sentence": "Larger pirates often preyed on unarmed merchant ships.",
        "partOfSpeech": "noun"
    },
    {
        "word": "entire",
        "valid": [
            "entire"
        ],
        "difficulty": "medium",
        "definition": "Uncastrated adult male horse.",
        "sentence": "An entire town devastated by an earthquake.",
        "partOfSpeech": "noun"
    },
    {
        "word": "educational",
        "valid": [
            "educational"
        ],
        "difficulty": "expert",
        "definition": "Relating to the process of education.",
        "sentence": "An educational film.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "leading",
        "valid": [
            "leading"
        ],
        "difficulty": "medium",
        "definition": "Thin strip of metal used to separate lines of type in printing.",
        "sentence": "We rode in the leading car.",
        "partOfSpeech": "noun"
    },
    {
        "word": "metal",
        "valid": [
            "metal"
        ],
        "difficulty": "easy",
        "definition": "Any of several chemical elements that are usually shiny solids that conduct heat or electricity and can be formed into sheets etc.",
        "sentence": "Metal contracts when cooled.",
        "partOfSpeech": "noun"
    },
    {
        "word": "positive",
        "valid": [
            "positive"
        ],
        "difficulty": "hard",
        "definition": "The primary form of an adjective or adverb; denotes a quality without qualification, comparison, or relation to increase or diminution.",
        "sentence": "A plus (or positive) factor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fitness",
        "valid": [
            "fitness"
        ],
        "difficulty": "medium",
        "definition": "The quality of being suitable.",
        "sentence": "They had to prove their fitness for the position.",
        "partOfSpeech": "noun"
    },
    {
        "word": "opinion",
        "valid": [
            "opinion"
        ],
        "difficulty": "medium",
        "definition": "A personal belief or judgment that is not founded on proof or certainty.",
        "sentence": "My opinion differs from yours.",
        "partOfSpeech": "noun"
    },
    {
        "word": "football",
        "valid": [
            "football"
        ],
        "difficulty": "hard",
        "definition": "Any of various games played with a ball (round or oval) in which two teams try to kick or carry or propel the ball into each other's goal.",
        "sentence": "The English team beat the Brazilian team in the international football tournament.",
        "partOfSpeech": "noun"
    },
    {
        "word": "abstract",
        "valid": [
            "abstract"
        ],
        "difficulty": "hard",
        "definition": "A concept or idea not associated with any specific instance.",
        "sentence": "He loved her only in the abstract--not in person.",
        "partOfSpeech": "noun"
    },
    {
        "word": "uses",
        "valid": [
            "uses"
        ],
        "difficulty": "easy",
        "definition": "Form of us: North American republic containing 50 states - 48 conterminous states in North America plus Alaska in northwest North America and the Hawaiian Islands in the Pacific Ocean; achieved independence in 1776.",
        "sentence": "Machinery uses a lot of electricity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "output",
        "valid": [
            "output"
        ],
        "difficulty": "medium",
        "definition": "Final product; the things produced.",
        "sentence": "Thanks to the technological innovation, the maximum output of the factory has doubled.",
        "partOfSpeech": "noun"
    },
    {
        "word": "funds",
        "valid": [
            "funds"
        ],
        "difficulty": "easy",
        "definition": "Assets in the form of money.",
        "sentence": "You have to raise funds for the relief work.",
        "partOfSpeech": "noun"
    },
    {
        "word": "greater",
        "valid": [
            "greater"
        ],
        "difficulty": "medium",
        "definition": "Greater in size or importance or degree.",
        "sentence": "For the greater good of the community.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "likely",
        "valid": [
            "likely"
        ],
        "difficulty": "medium",
        "definition": "Has a good chance of being the case or of coming about.",
        "sentence": "Not a very likely excuse.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "develop",
        "valid": [
            "develop"
        ],
        "difficulty": "medium",
        "definition": "Make something new, such as a product or a mental or artistic creation.",
        "sentence": "Develop land.",
        "partOfSpeech": "verb"
    },
    {
        "word": "employees",
        "valid": [
            "employees"
        ],
        "difficulty": "hard",
        "definition": "Form of employee: a worker who is hired to perform a job.",
        "sentence": "Gonzales offers a bike to all his employees in Europe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "artists",
        "valid": [
            "artists"
        ],
        "difficulty": "medium",
        "definition": "Form of artist: a person whose creative work shows sensitivity and imagination.",
        "sentence": "Pop artists thrive on the adulation of their loyal fans.",
        "partOfSpeech": "noun"
    },
    {
        "word": "alternative",
        "valid": [
            "alternative"
        ],
        "difficulty": "expert",
        "definition": "One of a number of things from which only one can be chosen.",
        "sentence": "There is no other alternative.",
        "partOfSpeech": "noun"
    },
    {
        "word": "processing",
        "valid": [
            "processing"
        ],
        "difficulty": "expert",
        "definition": "Preparing or putting through a prescribed procedure.",
        "sentence": "The processing of newly arrived immigrants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "responsibility",
        "valid": [
            "responsibility"
        ],
        "difficulty": "expert",
        "definition": "The social force that binds you to the courses of action demanded by that force; \"every right implies a responsibility; every opportunity, an obligation; every possession, a duty\"- John D.Rockefeller Jr.",
        "sentence": "He holds a position of great responsibility.",
        "partOfSpeech": "noun"
    },
    {
        "word": "resolution",
        "valid": [
            "resolution"
        ],
        "difficulty": "expert",
        "definition": "A formal expression by a meeting; agreed to by a vote.",
        "sentence": "It was his unshakeable resolution to finish the work.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guest",
        "valid": [
            "guest"
        ],
        "difficulty": "easy",
        "definition": "A visitor to whom hospitality is extended.",
        "sentence": "She was pleased to be treated as a guest.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seems",
        "valid": [
            "seems"
        ],
        "difficulty": "easy",
        "definition": "Form of seem: give a certain impression or have a certain outward aspect.",
        "sentence": "It seems interesting to me.",
        "partOfSpeech": "verb"
    },
    {
        "word": "publication",
        "valid": [
            "publication"
        ],
        "difficulty": "expert",
        "definition": "A copy of a printed work offered for distribution.",
        "sentence": "Publication of the article was timed to coincide with the professor's birthday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pass",
        "valid": [
            "pass"
        ],
        "difficulty": "easy",
        "definition": "An advance to first base by a batter who receives four balls.",
        "sentence": "He got a pass in introductory chemistry.",
        "partOfSpeech": "noun"
    },
    {
        "word": "relations",
        "valid": [
            "relations"
        ],
        "difficulty": "hard",
        "definition": "Mutual dealings or connections or communications among persons or groups.",
        "sentence": "During the press conference, the President touched on foreign relations.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trust",
        "valid": [
            "trust"
        ],
        "difficulty": "easy",
        "definition": "Something (as property) held by one party (the trustee) for the benefit of another (the beneficiary).",
        "sentence": "The experience destroyed his trust and personal dignity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "contains",
        "valid": [
            "contains"
        ],
        "difficulty": "hard",
        "definition": "Form of contain: include or contain; have as a component.",
        "sentence": "You should write HANDLE WITH CARE on the parcel that contains the teacups.",
        "partOfSpeech": "verb"
    },
    {
        "word": "session",
        "valid": [
            "session"
        ],
        "difficulty": "medium",
        "definition": "A meeting for execution of a group's functions.",
        "sentence": "A filming session.",
        "partOfSpeech": "noun"
    },
    {
        "word": "multi",
        "valid": [
            "multi"
        ],
        "difficulty": "easy",
        "definition": "A combining form signifying many, multiple, or having several parts.",
        "sentence": "My robot's name is Multi.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "photography",
        "valid": [
            "photography"
        ],
        "difficulty": "expert",
        "definition": "The act of taking and printing photographs.",
        "sentence": "I have an interest in photography.",
        "partOfSpeech": "noun"
    },
    {
        "word": "republic",
        "valid": [
            "republic"
        ],
        "difficulty": "hard",
        "definition": "A political system in which the supreme power lies in a body of citizens who can elect people to represent them.",
        "sentence": "The head of state in a republic is usually a president.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fees",
        "valid": [
            "fees"
        ],
        "difficulty": "easy",
        "definition": "Form of fe: a heavy ductile magnetic metallic element; is silver-white in pure form but readily rusts; used in construction and tools and armament; plays a role in the transport of oxygen by the blood.",
        "sentence": "They announced an increase in tuition fees.",
        "partOfSpeech": "noun"
    },
    {
        "word": "components",
        "valid": [
            "components"
        ],
        "difficulty": "expert",
        "definition": "Form of component: an abstract part of something.",
        "sentence": "The components obtained by distillation of coal tar are as shown below.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vacation",
        "valid": [
            "vacation"
        ],
        "difficulty": "hard",
        "definition": "Leisure time away from work devoted to rest or pleasure.",
        "sentence": "We get two weeks of vacation every summer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "century",
        "valid": [
            "century"
        ],
        "difficulty": "medium",
        "definition": "A period of 100 years.",
        "sentence": "What does it mean to have an educated mind in the 21st century?",
        "partOfSpeech": "noun"
    },
    {
        "word": "academic",
        "valid": [
            "academic"
        ],
        "difficulty": "hard",
        "definition": "An educator who works at a college or university.",
        "sentence": "An academic discussion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "assistance",
        "valid": [
            "assistance"
        ],
        "difficulty": "expert",
        "definition": "The activity of contributing to the fulfillment of a need or furtherance of an effort or purpose.",
        "sentence": "Could not walk without assistance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "completed",
        "valid": [
            "completed"
        ],
        "difficulty": "hard",
        "definition": "Successfully completed or brought to an end.",
        "sentence": "The completed project.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "skin",
        "valid": [
            "skin"
        ],
        "difficulty": "easy",
        "definition": "A natural protective body covering and site of the sense of touch.",
        "sentence": "The skin of an airplane.",
        "partOfSpeech": "noun"
    },
    {
        "word": "graphics",
        "valid": [
            "graphics"
        ],
        "difficulty": "hard",
        "definition": "Photographs or other visual representations in a printed publication.",
        "sentence": "Most studies, however, have not focused on the influence Emmet's theory had on computer graphics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "expected",
        "valid": [
            "expected"
        ],
        "difficulty": "hard",
        "definition": "Considered likely or probable to happen or arrive.",
        "sentence": "Prepared for the expected attack.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "ring",
        "valid": [
            "ring"
        ],
        "difficulty": "easy",
        "definition": "A characteristic sound.",
        "sentence": "It has the ring of sincerity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "grade",
        "valid": [
            "grade"
        ],
        "difficulty": "easy",
        "definition": "A body of students who are taught together.",
        "sentence": "The road had a steep grade.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dating",
        "valid": [
            "dating"
        ],
        "difficulty": "medium",
        "definition": "Use of chemical analysis to estimate the age of geological specimens.",
        "sentence": "Fred took a liking to Jane and started dating her.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pacific",
        "valid": [
            "pacific"
        ],
        "difficulty": "medium",
        "definition": "The largest ocean in the world.",
        "sentence": "The result of this pacific policy was that no troops were called up.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mountain",
        "valid": [
            "mountain"
        ],
        "difficulty": "hard",
        "definition": "A land mass that projects well above its surroundings; higher than a hill.",
        "sentence": "We think it is very dangerous that you're climbing the mountain alone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "organizations",
        "valid": [
            "organizations"
        ],
        "difficulty": "expert",
        "definition": "Form of organization: a group of people who work together.",
        "sentence": "It includes widely varying organizations, people, and ideas.",
        "partOfSpeech": "noun"
    },
    {
        "word": "filter",
        "valid": [
            "filter"
        ],
        "difficulty": "medium",
        "definition": "Device that removes something from whatever passes through it.",
        "sentence": "Filter out the impurities.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mailing",
        "valid": [
            "mailing"
        ],
        "difficulty": "medium",
        "definition": "Mail sent by a sender at one time.",
        "sentence": "The postmark indicates the time of mailing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vehicle",
        "valid": [
            "vehicle"
        ],
        "difficulty": "medium",
        "definition": "A conveyance that transports people or objects.",
        "sentence": "His editorials provided a vehicle for his political views.",
        "partOfSpeech": "noun"
    },
    {
        "word": "longer",
        "valid": [
            "longer"
        ],
        "difficulty": "medium",
        "definition": "A person with a strong desire for something.",
        "sentence": "A longer for money.",
        "partOfSpeech": "noun"
    },
    {
        "word": "consider",
        "valid": [
            "consider"
        ],
        "difficulty": "hard",
        "definition": "Deem to be.",
        "sentence": "I consider her to be shallow.",
        "partOfSpeech": "verb"
    },
    {
        "word": "northern",
        "valid": [
            "northern"
        ],
        "difficulty": "hard",
        "definition": "A dialect of Middle English that developed into Scottish Lallans.",
        "sentence": "A northern snowstorm.",
        "partOfSpeech": "noun"
    },
    {
        "word": "behind",
        "valid": [
            "behind"
        ],
        "difficulty": "medium",
        "definition": "The fleshy part of the human body that you sit on.",
        "sentence": "He followed behind.",
        "partOfSpeech": "noun"
    },
    {
        "word": "panel",
        "valid": [
            "panel"
        ],
        "difficulty": "easy",
        "definition": "Sheet that forms a distinct (usually flat and rectangular) section or component of something.",
        "sentence": "He checked the instrument panel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "floor",
        "valid": [
            "floor"
        ],
        "difficulty": "easy",
        "definition": "The inside lower horizontal surface (as of a room, hallway, tent, or other structure).",
        "sentence": "We spread our sleeping bags on the dry floor of the tent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "buying",
        "valid": [
            "buying"
        ],
        "difficulty": "medium",
        "definition": "The act of buying.",
        "sentence": "Buying and selling fill their days.",
        "partOfSpeech": "noun"
    },
    {
        "word": "match",
        "valid": [
            "match"
        ],
        "difficulty": "easy",
        "definition": "Lighter consisting of a thin piece of wood or cardboard tipped with combustible chemical; ignites with friction.",
        "sentence": "When a match is found an entry is made in the notebook.",
        "partOfSpeech": "noun"
    },
    {
        "word": "proposed",
        "valid": [
            "proposed"
        ],
        "difficulty": "hard",
        "definition": "Form of propose: make a proposal, declare a plan for something.",
        "sentence": "The consensus indicates that we are opposed to the proposed idea.",
        "partOfSpeech": "verb"
    },
    {
        "word": "default",
        "valid": [
            "default"
        ],
        "difficulty": "medium",
        "definition": "Loss due to not showing up.",
        "sentence": "He lost the game by default.",
        "partOfSpeech": "noun"
    },
    {
        "word": "require",
        "valid": [
            "require"
        ],
        "difficulty": "medium",
        "definition": "Require as useful, just, or proper.",
        "sentence": "We require our secretary to be on time.",
        "partOfSpeech": "verb"
    },
    {
        "word": "boys",
        "valid": [
            "boys"
        ],
        "difficulty": "easy",
        "definition": "Form of boy: a youthful male person.",
        "sentence": "You are young boys.",
        "partOfSpeech": "noun"
    },
    {
        "word": "outdoor",
        "valid": [
            "outdoor"
        ],
        "difficulty": "medium",
        "definition": "Located, suited for, or taking place in the open air.",
        "sentence": "Outdoor education is the area of teacher training concerned with training for outdoor activities.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "deep",
        "valid": [
            "deep"
        ],
        "difficulty": "easy",
        "definition": "The central and most intense or profound part.",
        "sentence": "Denizens of the deep.",
        "partOfSpeech": "noun"
    },
    {
        "word": "morning",
        "valid": [
            "morning"
        ],
        "difficulty": "medium",
        "definition": "The time period between dawn and noon.",
        "sentence": "The morning of the world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "otherwise",
        "valid": [
            "otherwise"
        ],
        "difficulty": "hard",
        "definition": "Other than as supposed or expected.",
        "sentence": "The outcome was otherwise.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "allows",
        "valid": [
            "allows"
        ],
        "difficulty": "medium",
        "definition": "Form of allow: make it possible through a specific action or lack of action for something to happen.",
        "sentence": "A passport identifies you as a citizen of a country and allows you to travel to foreign countries.",
        "partOfSpeech": "verb"
    },
    {
        "word": "rest",
        "valid": [
            "rest"
        ],
        "difficulty": "easy",
        "definition": "Something left after other parts have been taken away.",
        "sentence": "The gun was steadied on a special rest.",
        "partOfSpeech": "noun"
    },
    {
        "word": "protein",
        "valid": [
            "protein"
        ],
        "difficulty": "medium",
        "definition": "Any of a large group of nitrogenous organic compounds that are essential constituents of living cells; consist of polymers of amino acids; essential in the diet of animals for growth and for repair of tissues; can be obtained from meat and eggs and milk and legumes.",
        "sentence": "A diet high in protein.",
        "partOfSpeech": "noun"
    },
    {
        "word": "plant",
        "valid": [
            "plant"
        ],
        "difficulty": "easy",
        "definition": "Buildings for carrying on industrial labor.",
        "sentence": "They built a large plant to manufacture automobiles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reported",
        "valid": [
            "reported"
        ],
        "difficulty": "hard",
        "definition": "Made known or told about; especially presented in a formal account.",
        "sentence": "His reported opinion.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "transportation",
        "valid": [
            "transportation"
        ],
        "difficulty": "expert",
        "definition": "A facility consisting of the means and equipment necessary for the movement of passengers or goods.",
        "sentence": "The sentence was one of transportation for life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pool",
        "valid": [
            "pool"
        ],
        "difficulty": "easy",
        "definition": "An excavation that is (usually) filled with water.",
        "sentence": "A car pool.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mini",
        "valid": [
            "mini"
        ],
        "difficulty": "easy",
        "definition": "A very short skirt.",
        "sentence": "A mini dress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "politics",
        "valid": [
            "politics"
        ],
        "difficulty": "hard",
        "definition": "Social relations involving intrigue to gain authority or power.",
        "sentence": "Unemployment dominated the politics of the inter-war years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "partner",
        "valid": [
            "partner"
        ],
        "difficulty": "medium",
        "definition": "A person's partner in marriage.",
        "sentence": "Will I do as your partner?",
        "partOfSpeech": "noun"
    },
    {
        "word": "disclaimer",
        "valid": [
            "disclaimer"
        ],
        "difficulty": "expert",
        "definition": "A voluntary repudiation of a person's legal claim to something.",
        "sentence": "The TV commercial for herbal supplements ended with a quickly spoken disclaimer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "authors",
        "valid": [
            "authors"
        ],
        "difficulty": "medium",
        "definition": "Form of author: writes (books or stories or articles or the like) professionally (for pay).",
        "sentence": "For this reason, the credibility of the book's authors rests on the credibility of their sources.",
        "partOfSpeech": "noun"
    },
    {
        "word": "boards",
        "valid": [
            "boards"
        ],
        "difficulty": "medium",
        "definition": "The stage of a theater.",
        "sentence": "Most actors love to stride the boards.",
        "partOfSpeech": "noun"
    },
    {
        "word": "faculty",
        "valid": [
            "faculty"
        ],
        "difficulty": "medium",
        "definition": "One of the inherent cognitive or perceptual powers of the mind.",
        "sentence": "The faculty meeting adopted the dean's proposal.",
        "partOfSpeech": "noun"
    },
    {
        "word": "parties",
        "valid": [
            "parties"
        ],
        "difficulty": "medium",
        "definition": "Form of party: an organization to gain political power.",
        "sentence": "No more parties.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fish",
        "valid": [
            "fish"
        ],
        "difficulty": "easy",
        "definition": "Any of various mostly cold-blooded aquatic vertebrates usually having scales and breathing through gills.",
        "sentence": "The shark is a large fish.",
        "partOfSpeech": "noun"
    },
    {
        "word": "membership",
        "valid": [
            "membership"
        ],
        "difficulty": "expert",
        "definition": "The body of members of an organization or group.",
        "sentence": "They polled their membership.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mission",
        "valid": [
            "mission"
        ],
        "difficulty": "medium",
        "definition": "An organization of missionaries in a foreign land sent to carry on religious work.",
        "sentence": "A confidential mission to London.",
        "partOfSpeech": "noun"
    },
    {
        "word": "string",
        "valid": [
            "string"
        ],
        "difficulty": "medium",
        "definition": "A lightweight cord.",
        "sentence": "A string of beads.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sense",
        "valid": [
            "sense"
        ],
        "difficulty": "easy",
        "definition": "A general conscious awareness.",
        "sentence": "Common sense is not so common.",
        "partOfSpeech": "noun"
    },
    {
        "word": "modified",
        "valid": [
            "modified"
        ],
        "difficulty": "hard",
        "definition": "Changed in form or character.",
        "sentence": "Their modified stand made the issue more acceptable.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "pack",
        "valid": [
            "pack"
        ],
        "difficulty": "easy",
        "definition": "A large indefinite number.",
        "sentence": "A pack of thieves.",
        "partOfSpeech": "noun"
    },
    {
        "word": "released",
        "valid": [
            "released"
        ],
        "difficulty": "hard",
        "definition": "Form of release: merchandise issued for sale or public showing (especially a record or film).",
        "sentence": "The doctor released him from his pain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stage",
        "valid": [
            "stage"
        ],
        "difficulty": "easy",
        "definition": "Any distinct time period in a sequence of events.",
        "sentence": "Then we embarked on the second stage of our Caribbean cruise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "internal",
        "valid": [
            "internal"
        ],
        "difficulty": "hard",
        "definition": "Happening or arising or located within some limits or especially surface.",
        "sentence": "Internal organs.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "goods",
        "valid": [
            "goods"
        ],
        "difficulty": "easy",
        "definition": "Form of good: benefit.",
        "sentence": "We deal in silk goods.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recommended",
        "valid": [
            "recommended"
        ],
        "difficulty": "expert",
        "definition": "Form of recommend: push for something.",
        "sentence": "The nurse recommended that he try walking.",
        "partOfSpeech": "verb"
    },
    {
        "word": "born",
        "valid": [
            "born"
        ],
        "difficulty": "easy",
        "definition": "British nuclear physicist (born in Germany) honored for his contributions to quantum mechanics (1882-1970).",
        "sentence": "He was a child born of adultery.",
        "partOfSpeech": "noun"
    },
    {
        "word": "unless",
        "valid": [
            "unless"
        ],
        "difficulty": "medium",
        "definition": "Upon any less condition than (the fact or thing stated in the sentence or clause which follows); if not; supposing that not; if it be not; were it not that; except; as, we shall fa.",
        "sentence": "Don't stay in bed, unless you can make money in bed.",
        "partOfSpeech": "noun"
    },
    {
        "word": "detailed",
        "valid": [
            "detailed"
        ],
        "difficulty": "hard",
        "definition": "Developed or executed with care and in minute detail; \"the elaborate register of the inhabitants prevented tax evasion\"- John Buchan.",
        "sentence": "A detailed plan.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "race",
        "valid": [
            "race"
        ],
        "difficulty": "easy",
        "definition": "Any competition.",
        "sentence": "The race is to the swift.",
        "partOfSpeech": "noun"
    },
    {
        "word": "approved",
        "valid": [
            "approved"
        ],
        "difficulty": "hard",
        "definition": "Established by authority; given authoritative approval.",
        "sentence": "A list of approved candidates.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "background",
        "valid": [
            "background"
        ],
        "difficulty": "expert",
        "definition": "A person's social heritage: previous experience or training.",
        "sentence": "He is a lawyer with a sports background.",
        "partOfSpeech": "noun"
    },
    {
        "word": "target",
        "valid": [
            "target"
        ],
        "difficulty": "medium",
        "definition": "A reference point to shoot at.",
        "sentence": "The target of a manhunt.",
        "partOfSpeech": "noun"
    },
    {
        "word": "except",
        "valid": [
            "except"
        ],
        "difficulty": "medium",
        "definition": "Take exception to.",
        "sentence": "Except that here, it's not so simple.",
        "partOfSpeech": "verb"
    },
    {
        "word": "character",
        "valid": [
            "character"
        ],
        "difficulty": "hard",
        "definition": "An imaginary person represented in a work of fiction (play or film or story).",
        "sentence": "The radical character of our demands.",
        "partOfSpeech": "noun"
    },
    {
        "word": "maintenance",
        "valid": [
            "maintenance"
        ],
        "difficulty": "expert",
        "definition": "Activity involved in maintaining something in good working order.",
        "sentence": "Unlike champerty, criminal maintenance does not necessarily involve personal profit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ability",
        "valid": [
            "ability"
        ],
        "difficulty": "medium",
        "definition": "The quality of being able to perform; a quality that permits or facilitates achievement or accomplishment.",
        "sentence": "He was sick of being vilified all the time by people who were jealous of his ability.",
        "partOfSpeech": "noun"
    },
    {
        "word": "maybe",
        "valid": [
            "maybe"
        ],
        "difficulty": "easy",
        "definition": "By chance.",
        "sentence": "Maybe it will be exactly the same for him.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "functions",
        "valid": [
            "functions"
        ],
        "difficulty": "hard",
        "definition": "Form of function: (mathematics) a mathematical relation such that each element of a given set (the domain of the function) is associated with an element of another set (the range of the function).",
        "sentence": "The functions sine and cosine take values between -1 and 1 (-1 and 1 included).",
        "partOfSpeech": "noun"
    },
    {
        "word": "moving",
        "valid": [
            "moving"
        ],
        "difficulty": "medium",
        "definition": "In motion.",
        "sentence": "A constantly moving crowd.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "brands",
        "valid": [
            "brands"
        ],
        "difficulty": "medium",
        "definition": "Form of brand: a name given to a product or service.",
        "sentence": "The cattle are marked with brands.",
        "partOfSpeech": "noun"
    },
    {
        "word": "places",
        "valid": [
            "places"
        ],
        "difficulty": "medium",
        "definition": "Form of place: a point located with respect to surface features of some region.",
        "sentence": "That young critic is in high demand in a lot of places.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pretty",
        "valid": [
            "pretty"
        ],
        "difficulty": "medium",
        "definition": "Pleasing by delicacy or grace; not imposing.",
        "sentence": "Pretty girl.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "trademarks",
        "valid": [
            "trademarks"
        ],
        "difficulty": "expert",
        "definition": "Form of trademark: a distinctive characteristic or attribute.",
        "sentence": "Trademarks placed on the site shall not be used or reproduced in any matter without permission.",
        "partOfSpeech": "noun"
    },
    {
        "word": "southern",
        "valid": [
            "southern"
        ],
        "difficulty": "hard",
        "definition": "In or characteristic of a region of the United States south of (approximately) the Mason-Dixon line.",
        "sentence": "Southern breezes.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "yourself",
        "valid": [
            "yourself"
        ],
        "difficulty": "hard",
        "definition": "An emphasized or reflexive form of the pronoun of the second person; -- used as a subject commonly with you; as, you yourself shall see it; also, alone in the predicate, either in.",
        "sentence": "Stop asking me for a drink! Go get it yourself.",
        "partOfSpeech": "noun"
    },
    {
        "word": "winter",
        "valid": [
            "winter"
        ],
        "difficulty": "medium",
        "definition": "The coldest season of the year; in the northern hemisphere it extends from the winter solstice to the vernal equinox.",
        "sentence": "Winter is my favorite season.",
        "partOfSpeech": "noun"
    },
    {
        "word": "battery",
        "valid": [
            "battery"
        ],
        "difficulty": "medium",
        "definition": "Group of guns or missile launchers operated together at one place.",
        "sentence": "Took a battery of achievement tests.",
        "partOfSpeech": "noun"
    },
    {
        "word": "youth",
        "valid": [
            "youth"
        ],
        "difficulty": "easy",
        "definition": "A young person (especially a young man or boy).",
        "sentence": "Youth everywhere rises in revolt.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pressure",
        "valid": [
            "pressure"
        ],
        "difficulty": "hard",
        "definition": "The force applied to a unit area of surface; measured in pascals (SI unit) or in dynes (cgs unit).",
        "sentence": "He used pressure to stop the bleeding.",
        "partOfSpeech": "noun"
    },
    {
        "word": "submitted",
        "valid": [
            "submitted"
        ],
        "difficulty": "hard",
        "definition": "Form of submit: refer for judgment or consideration.",
        "sentence": "The neighboring countries never submitted to his terrorism.",
        "partOfSpeech": "verb"
    },
    {
        "word": "debt",
        "valid": [
            "debt"
        ],
        "difficulty": "easy",
        "definition": "The state of owing something (especially money).",
        "sentence": "He is badly in debt.",
        "partOfSpeech": "noun"
    },
    {
        "word": "keywords",
        "valid": [
            "keywords"
        ],
        "difficulty": "hard",
        "definition": "Plural form of keyword; significant words used for search or indexing.",
        "sentence": "How can you recognize the keywords that an application should contain?",
        "partOfSpeech": "noun"
    },
    {
        "word": "medium",
        "valid": [
            "medium"
        ],
        "difficulty": "medium",
        "definition": "A means or instrumentality for storing or communicating information.",
        "sentence": "Fish require an aqueous medium.",
        "partOfSpeech": "noun"
    },
    {
        "word": "television",
        "valid": [
            "television"
        ],
        "difficulty": "expert",
        "definition": "Broadcasting visual images of stationary or moving objects; \"Television is a medium because it is neither rare nor well done\" - Ernie Kovacs.",
        "sentence": "Do you know how high the television tower is?",
        "partOfSpeech": "noun"
    },
    {
        "word": "interested",
        "valid": [
            "interested"
        ],
        "difficulty": "expert",
        "definition": "Having or showing interest; especially curiosity or fascination or concern.",
        "sentence": "An interested audience.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "core",
        "valid": [
            "core"
        ],
        "difficulty": "easy",
        "definition": "A small group of indispensable persons or things.",
        "sentence": "Each core has three wires passing through it, providing the means to select and detect the contents of each bit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "break",
        "valid": [
            "break"
        ],
        "difficulty": "easy",
        "definition": "Some abrupt occurrence that interrupts an ongoing activity.",
        "sentence": "The break in the eighth frame cost him the match.",
        "partOfSpeech": "noun"
    },
    {
        "word": "purposes",
        "valid": [
            "purposes"
        ],
        "difficulty": "hard",
        "definition": "Form of purpose: an anticipated outcome that is intended or that guides your planned actions.",
        "sentence": "The company moved its corporate domicile to Hong Kong for tax purposes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "throughout",
        "valid": [
            "throughout"
        ],
        "difficulty": "expert",
        "definition": "From first to last.",
        "sentence": "The audience sobbed throughout the climax of the movie.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "sets",
        "valid": [
            "sets"
        ],
        "difficulty": "easy",
        "definition": "Form of set: a group of things of the same kind that belong together and are so used.",
        "sentence": "Those who are delicate in health are apt to catch a cold when the cold season sets in.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dance",
        "valid": [
            "dance"
        ],
        "difficulty": "easy",
        "definition": "An artistic form of nonverbal communication.",
        "sentence": "My husband and I like to dance at home to the radio.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wood",
        "valid": [
            "wood"
        ],
        "difficulty": "easy",
        "definition": "The hard fibrous lignified substance under the bark of trees.",
        "sentence": "I knew it was plastic but it tasted like wood.",
        "partOfSpeech": "noun"
    },
    {
        "word": "itself",
        "valid": [
            "itself"
        ],
        "difficulty": "medium",
        "definition": "The neuter reciprocal pronoun of It; as, the thing is good in itself; it stands by itself. Borrowing of foreigners, in itself, makes not the kingdom rich or poor. Locke.",
        "sentence": "Your sense of humor is beginning to exert itself.",
        "partOfSpeech": "noun"
    },
    {
        "word": "defined",
        "valid": [
            "defined"
        ],
        "difficulty": "medium",
        "definition": "Clearly characterized or delimited.",
        "sentence": "Lost in a maze of words both defined and undefined.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "papers",
        "valid": [
            "papers"
        ],
        "difficulty": "medium",
        "definition": "Writing that provides information (especially information of an official nature).",
        "sentence": "Next thing you know, you'll be in the papers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "playing",
        "valid": [
            "playing"
        ],
        "difficulty": "medium",
        "definition": "The act of playing a musical instrument.",
        "sentence": "Nothing great has been achieved by playing it safe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "awards",
        "valid": [
            "awards"
        ],
        "difficulty": "medium",
        "definition": "Form of award: a grant made by a law court.",
        "sentence": "The film scooped up three awards at the Cannes film festival.",
        "partOfSpeech": "noun"
    },
    {
        "word": "studio",
        "valid": [
            "studio"
        ],
        "difficulty": "medium",
        "definition": "Workplace for the teaching or practice of an art.",
        "sentence": "She ran a dance studio.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reader",
        "valid": [
            "reader"
        ],
        "difficulty": "medium",
        "definition": "A person who enjoys reading.",
        "sentence": "An astute reader should be willing to weigh everything they read, including anonymous sources.",
        "partOfSpeech": "noun"
    },
    {
        "word": "virtual",
        "valid": [
            "virtual"
        ],
        "difficulty": "medium",
        "definition": "Being actually such in almost every respect.",
        "sentence": "Tatoeba Project is our virtual home.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "device",
        "valid": [
            "device"
        ],
        "difficulty": "medium",
        "definition": "An instrumentality invented for a particular purpose.",
        "sentence": "He would stoop to any device to win a point.",
        "partOfSpeech": "noun"
    },
    {
        "word": "established",
        "valid": [
            "established"
        ],
        "difficulty": "expert",
        "definition": "Brought about or set up or accepted; especially long established.",
        "sentence": "The established social order.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "answers",
        "valid": [
            "answers"
        ],
        "difficulty": "medium",
        "definition": "Form of answer: a statement (either spoken or written) that is made to reply to a question or request or criticism or accusation.",
        "sentence": "The only useful answers are those that raise new questions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rent",
        "valid": [
            "rent"
        ],
        "difficulty": "easy",
        "definition": "A payment or series of payments made by the lessee to an owner for use of some property, facility, equipment, or service.",
        "sentence": "Let's rent a car.",
        "partOfSpeech": "noun"
    },
    {
        "word": "remote",
        "valid": [
            "remote"
        ],
        "difficulty": "medium",
        "definition": "A device that can be used to control a machine or apparatus from a distance.",
        "sentence": "He lost the remote for his TV.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dark",
        "valid": [
            "dark"
        ],
        "difficulty": "easy",
        "definition": "Absence of light or illumination.",
        "sentence": "He was in the dark concerning their intentions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "programming",
        "valid": [
            "programming"
        ],
        "difficulty": "expert",
        "definition": "Setting an order and time for planned events.",
        "sentence": "What programming language does everybody like?",
        "partOfSpeech": "noun"
    },
    {
        "word": "external",
        "valid": [
            "external"
        ],
        "difficulty": "hard",
        "definition": "Outward features.",
        "sentence": "The external auditory canal.",
        "partOfSpeech": "noun"
    },
    {
        "word": "apple",
        "valid": [
            "apple"
        ],
        "difficulty": "easy",
        "definition": "Fruit with red or yellow or green skin and sweet to tart crisp whitish flesh.",
        "sentence": "There is an apple on the desk.",
        "partOfSpeech": "noun"
    },
    {
        "word": "regarding",
        "valid": [
            "regarding"
        ],
        "difficulty": "hard",
        "definition": "Form of regard: (usually preceded by `in') a detail or point.",
        "sentence": "Your advice has helped me see the light regarding my future.",
        "partOfSpeech": "noun"
    },
    {
        "word": "instructions",
        "valid": [
            "instructions"
        ],
        "difficulty": "expert",
        "definition": "A manual usually accompanying a technical device and explaining how to install or operate it.",
        "sentence": "You must learn to obey instructions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "offered",
        "valid": [
            "offered"
        ],
        "difficulty": "medium",
        "definition": "Form of offer: the verbal act of offering.",
        "sentence": "Nobody else offered to help.",
        "partOfSpeech": "noun"
    },
    {
        "word": "theory",
        "valid": [
            "theory"
        ],
        "difficulty": "medium",
        "definition": "A well-substantiated explanation of some aspect of the natural world; an organized system of accepted knowledge that applies in a variety of circumstances to explain a specific set of phenomena.",
        "sentence": "A scientific hypothesis that survives experimental testing becomes a scientific theory.",
        "partOfSpeech": "noun"
    },
    {
        "word": "enjoy",
        "valid": [
            "enjoy"
        ],
        "difficulty": "easy",
        "definition": "Derive or receive pleasure from; get enjoyment from; take pleasure in.",
        "sentence": "Enjoy privileges.",
        "partOfSpeech": "verb"
    },
    {
        "word": "remove",
        "valid": [
            "remove"
        ],
        "difficulty": "medium",
        "definition": "Degree of figurative distance or separation.",
        "sentence": "Just one remove from madness.",
        "partOfSpeech": "noun"
    },
    {
        "word": "surface",
        "valid": [
            "surface"
        ],
        "difficulty": "medium",
        "definition": "The outer boundary of an artifact or a material layer constituting or resembling such a boundary.",
        "sentence": "The cloth had a pattern of red dots on a white surface.",
        "partOfSpeech": "noun"
    },
    {
        "word": "minimum",
        "valid": [
            "minimum"
        ],
        "difficulty": "medium",
        "definition": "The smallest possible quantity.",
        "sentence": "Minimum wage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "visual",
        "valid": [
            "visual"
        ],
        "difficulty": "medium",
        "definition": "Relating to or using sight.",
        "sentence": "A visual presentation.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "host",
        "valid": [
            "host"
        ],
        "difficulty": "easy",
        "definition": "A person who invites guests to a social event (such as a party in his or her own home) and who is responsible for them while they are there.",
        "sentence": "Atlanta was chosen to be host for the Olympic Games.",
        "partOfSpeech": "noun"
    },
    {
        "word": "variety",
        "valid": [
            "variety"
        ],
        "difficulty": "medium",
        "definition": "A collection containing a variety of sorts of things.",
        "sentence": "The range and variety of his work is amazing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "teachers",
        "valid": [
            "teachers"
        ],
        "difficulty": "hard",
        "definition": "Form of teacher: a person whose occupation is teaching.",
        "sentence": "The teachers are trying to motivate their students.",
        "partOfSpeech": "noun"
    },
    {
        "word": "manual",
        "valid": [
            "manual"
        ],
        "difficulty": "medium",
        "definition": "A small handbook.",
        "sentence": "A manual transmission.",
        "partOfSpeech": "noun"
    },
    {
        "word": "block",
        "valid": [
            "block"
        ],
        "difficulty": "easy",
        "definition": "A solid piece of something (usually having flat rectangular sides).",
        "sentence": "They put their paintings on the block.",
        "partOfSpeech": "noun"
    },
    {
        "word": "subjects",
        "valid": [
            "subjects"
        ],
        "difficulty": "hard",
        "definition": "Form of subject: the subject matter of a conversation or discussion.",
        "sentence": "The ascendancy of monarchs is what keeps their subjects from rebellion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agents",
        "valid": [
            "agents"
        ],
        "difficulty": "medium",
        "definition": "Form of agent: an active and efficient cause; capable of producing a certain effect.",
        "sentence": "In America, scores of free agents switch teams every year.",
        "partOfSpeech": "noun"
    },
    {
        "word": "increased",
        "valid": [
            "increased"
        ],
        "difficulty": "hard",
        "definition": "Made greater in size or amount or degree.",
        "sentence": "The cost of life increased drastically.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "repair",
        "valid": [
            "repair"
        ],
        "difficulty": "medium",
        "definition": "The act of putting something in working order again.",
        "sentence": "The building was in good repair.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fair",
        "valid": [
            "fair"
        ],
        "difficulty": "easy",
        "definition": "A traveling show; having sideshows and rides and games of skill etc.",
        "sentence": "She won a blue ribbon for her baking at the county fair.",
        "partOfSpeech": "noun"
    },
    {
        "word": "civil",
        "valid": [
            "civil"
        ],
        "difficulty": "easy",
        "definition": "Applying to ordinary citizens as contrasted with the military.",
        "sentence": "Civil peoples.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "steel",
        "valid": [
            "steel"
        ],
        "difficulty": "easy",
        "definition": "An alloy of iron with small amounts of carbon; widely used in construction; mechanical properties can be varied over a wide range.",
        "sentence": "Your name was given to us by Mr. Hayashi of Keiyo Steel Corporation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "understanding",
        "valid": [
            "understanding"
        ],
        "difficulty": "expert",
        "definition": "The cognitive condition of someone who understands.",
        "sentence": "He has virtually no understanding of social cause and effect.",
        "partOfSpeech": "noun"
    },
    {
        "word": "songs",
        "valid": [
            "songs"
        ],
        "difficulty": "easy",
        "definition": "Form of song: a short musical composition with words.",
        "sentence": "What famous songs do you wish you had composed, and why?",
        "partOfSpeech": "noun"
    },
    {
        "word": "fixed",
        "valid": [
            "fixed"
        ],
        "difficulty": "easy",
        "definition": "Having a fixed and unchanging value.",
        "sentence": "Living on fixed incomes.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "wrong",
        "valid": [
            "wrong"
        ],
        "difficulty": "easy",
        "definition": "That which is contrary to the principles of justice or law.",
        "sentence": "He feels that you are in the wrong.",
        "partOfSpeech": "noun"
    },
    {
        "word": "beginning",
        "valid": [
            "beginning"
        ],
        "difficulty": "hard",
        "definition": "The event consisting of the start of something.",
        "sentence": "He was responsible for the beginning of negotiations.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hands",
        "valid": [
            "hands"
        ],
        "difficulty": "easy",
        "definition": "(with `in') guardianship over; in divorce cases it is the right to house and care for and discipline a child.",
        "sentence": "My fate is in your hands.",
        "partOfSpeech": "noun"
    },
    {
        "word": "associates",
        "valid": [
            "associates"
        ],
        "difficulty": "expert",
        "definition": "Form of associate: a person who joins with others in some activity or endeavor.",
        "sentence": "It was a great pleasure for me to meet many associates of your company.",
        "partOfSpeech": "noun"
    },
    {
        "word": "finally",
        "valid": [
            "finally"
        ],
        "difficulty": "medium",
        "definition": "After an unspecified period of time or an especially long delay.",
        "sentence": "You finally succeeded in getting a job.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "updates",
        "valid": [
            "updates"
        ],
        "difficulty": "medium",
        "definition": "Form of update: information or data that updates.",
        "sentence": "Your updates are the best!",
        "partOfSpeech": "noun"
    },
    {
        "word": "desktop",
        "valid": [
            "desktop"
        ],
        "difficulty": "medium",
        "definition": "The top of a desk.",
        "sentence": "I created a shortcut on the desktop.",
        "partOfSpeech": "noun"
    },
    {
        "word": "classes",
        "valid": [
            "classes"
        ],
        "difficulty": "medium",
        "definition": "Form of class: a collection of things sharing a common attribute.",
        "sentence": "My physics teacher doesn't care if I skip classes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gets",
        "valid": [
            "gets"
        ],
        "difficulty": "easy",
        "definition": "Form of get: a return on a shot that seemed impossible to reach and would normally have resulted in a point for the opponent.",
        "sentence": "You should return home before it gets dark.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sector",
        "valid": [
            "sector"
        ],
        "difficulty": "medium",
        "definition": "A plane figure bounded by two radii and the included arc of a circle.",
        "sentence": "He was helpless in an important sector of his life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "capacity",
        "valid": [
            "capacity"
        ],
        "difficulty": "hard",
        "definition": "Capability to perform or produce.",
        "sentence": "He was employed in the capacity of director.",
        "partOfSpeech": "noun"
    },
    {
        "word": "requires",
        "valid": [
            "requires"
        ],
        "difficulty": "hard",
        "definition": "Form of require: require as useful, just, or proper.",
        "sentence": "It requires wisdom to understand wisdom: the music is nothing if the audience is deaf.",
        "partOfSpeech": "verb"
    },
    {
        "word": "jersey",
        "valid": [
            "jersey"
        ],
        "difficulty": "medium",
        "definition": "A Mid-Atlantic state on the Atlantic; one of the original 13 colonies.",
        "sentence": "Contador won the yellow jersey in the Tour de France.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fully",
        "valid": [
            "fully"
        ],
        "difficulty": "easy",
        "definition": "To the greatest degree or extent; completely or entirely; (`full' in this sense is used as a combining form).",
        "sentence": "Fully grown.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "father",
        "valid": [
            "father"
        ],
        "difficulty": "medium",
        "definition": "A male parent (also used as a term of address to your father).",
        "sentence": "Hear our prayers, Heavenly Father.",
        "partOfSpeech": "noun"
    },
    {
        "word": "electric",
        "valid": [
            "electric"
        ],
        "difficulty": "hard",
        "definition": "A car that is powered by electricity.",
        "sentence": "Gave an electric reading of the play.",
        "partOfSpeech": "noun"
    },
    {
        "word": "instruments",
        "valid": [
            "instruments"
        ],
        "difficulty": "expert",
        "definition": "Form of instrument: a device that requires skill for proper use.",
        "sentence": "Some learned to play musical instruments.",
        "partOfSpeech": "noun"
    },
    {
        "word": "quotes",
        "valid": [
            "quotes"
        ],
        "difficulty": "medium",
        "definition": "Form of quote: a punctuation mark used to attribute the enclosed text to someone else.",
        "sentence": "He often quotes from Shakespeare.",
        "partOfSpeech": "noun"
    },
    {
        "word": "officer",
        "valid": [
            "officer"
        ],
        "difficulty": "medium",
        "definition": "Any person in the armed services who holds a position of authority or command.",
        "sentence": "An officer is responsible for the lives of his men.",
        "partOfSpeech": "noun"
    },
    {
        "word": "driver",
        "valid": [
            "driver"
        ],
        "difficulty": "medium",
        "definition": "The operator of a motor vehicle.",
        "sentence": "The load was too heavy for a driver to carry alone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "businesses",
        "valid": [
            "businesses"
        ],
        "difficulty": "expert",
        "definition": "Form of business: a commercial or industrial enterprise and the people who constitute it.",
        "sentence": "In many shops and businesses discounts are now given to senior citizens.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dead",
        "valid": [
            "dead"
        ],
        "difficulty": "easy",
        "definition": "People who are no longer living.",
        "sentence": "They buried the dead.",
        "partOfSpeech": "noun"
    },
    {
        "word": "respect",
        "valid": [
            "respect"
        ],
        "difficulty": "medium",
        "definition": "(usually preceded by `in') a detail or point.",
        "sentence": "He went to law school out of respect for his father's wishes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "unknown",
        "valid": [
            "unknown"
        ],
        "difficulty": "medium",
        "definition": "An unknown and unexplored region.",
        "sentence": "They came like angels out the unknown.",
        "partOfSpeech": "noun"
    },
    {
        "word": "specified",
        "valid": [
            "specified"
        ],
        "difficulty": "hard",
        "definition": "Clearly and explicitly stated.",
        "sentence": "Meals are at specified times.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "restaurant",
        "valid": [
            "restaurant"
        ],
        "difficulty": "expert",
        "definition": "A building where people go to eat.",
        "sentence": "I found that restaurant by accident.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mike",
        "valid": [
            "mike"
        ],
        "difficulty": "easy",
        "definition": "Device for converting sound waves into electrical energy.",
        "sentence": "\"Yes, orange juice please,\" says Mike.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trip",
        "valid": [
            "trip"
        ],
        "difficulty": "easy",
        "definition": "A journey for some purpose (usually including the return).",
        "sentence": "He recited the whole poem without a single trip.",
        "partOfSpeech": "noun"
    },
    {
        "word": "worth",
        "valid": [
            "worth"
        ],
        "difficulty": "easy",
        "definition": "An indefinite quantity of something having a specified value.",
        "sentence": "10 dollars worth of gasoline.",
        "partOfSpeech": "noun"
    },
    {
        "word": "procedures",
        "valid": [
            "procedures"
        ],
        "difficulty": "expert",
        "definition": "Form of procedure: a particular course of action intended to achieve a result.",
        "sentence": "You may injure yourself if you don't follow safety procedures.",
        "partOfSpeech": "noun"
    },
    {
        "word": "poor",
        "valid": [
            "poor"
        ],
        "difficulty": "easy",
        "definition": "People without possessions or wealth (considered as a group).",
        "sentence": "The urban poor need assistance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "teacher",
        "valid": [
            "teacher"
        ],
        "difficulty": "medium",
        "definition": "A person whose occupation is teaching.",
        "sentence": "Experience is a demanding teacher.",
        "partOfSpeech": "noun"
    },
    {
        "word": "eyes",
        "valid": [
            "eyes"
        ],
        "difficulty": "easy",
        "definition": "Opinion or judgment.",
        "sentence": "In the eyes of the law.",
        "partOfSpeech": "noun"
    },
    {
        "word": "relationship",
        "valid": [
            "relationship"
        ],
        "difficulty": "expert",
        "definition": "A relation between people; (`relationship' is often used where `relation' would serve, as in `the relationship between inflation and unemployment', but the preferred usage of `relationship' is for human relations or states of relatedness).",
        "sentence": "The relationship between mothers and their children.",
        "partOfSpeech": "noun"
    },
    {
        "word": "workers",
        "valid": [
            "workers"
        ],
        "difficulty": "medium",
        "definition": "Form of worker: a person who works at a specific occupation.",
        "sentence": "Are you in favor of the workers getting more money?",
        "partOfSpeech": "noun"
    },
    {
        "word": "farm",
        "valid": [
            "farm"
        ],
        "difficulty": "easy",
        "definition": "Workplace consisting of farm buildings and cultivated land as a unit.",
        "sentence": "It takes several people to work the farm.",
        "partOfSpeech": "noun"
    },
    {
        "word": "peace",
        "valid": [
            "peace"
        ],
        "difficulty": "easy",
        "definition": "The state prevailing during the absence of war.",
        "sentence": "Peace came on November 11th.",
        "partOfSpeech": "noun"
    },
    {
        "word": "traditional",
        "valid": [
            "traditional"
        ],
        "difficulty": "expert",
        "definition": "Consisting of or derived from tradition.",
        "sentence": "Traditional history.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "campus",
        "valid": [
            "campus"
        ],
        "difficulty": "medium",
        "definition": "A field on which the buildings of a university are situated.",
        "sentence": "My school is getting ready for the campus music festival.",
        "partOfSpeech": "noun"
    },
    {
        "word": "showing",
        "valid": [
            "showing"
        ],
        "difficulty": "medium",
        "definition": "The display of a motion picture.",
        "sentence": "Sometimes I can't help showing emotions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "creative",
        "valid": [
            "creative"
        ],
        "difficulty": "hard",
        "definition": "Having the ability or power to create.",
        "sentence": "Creative work.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "coast",
        "valid": [
            "coast"
        ],
        "difficulty": "easy",
        "definition": "The shore of a sea or ocean.",
        "sentence": "The children lined up for a coast down the snowy slope.",
        "partOfSpeech": "noun"
    },
    {
        "word": "benefit",
        "valid": [
            "benefit"
        ],
        "difficulty": "medium",
        "definition": "Financial assistance in time of need.",
        "sentence": "For the benefit of all.",
        "partOfSpeech": "noun"
    },
    {
        "word": "progress",
        "valid": [
            "progress"
        ],
        "difficulty": "hard",
        "definition": "Gradual improvement or growth or development.",
        "sentence": "Great progress in the arts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "funding",
        "valid": [
            "funding"
        ],
        "difficulty": "medium",
        "definition": "Financial resources provided to make some project possible.",
        "sentence": "The industry is heavily dependent on government funding.",
        "partOfSpeech": "noun"
    },
    {
        "word": "devices",
        "valid": [
            "devices"
        ],
        "difficulty": "medium",
        "definition": "An inclination or desire; used in the plural in the phrase `left to your own devices'.",
        "sentence": "Eventually the family left the house to the devices of this malevolent force.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lord",
        "valid": [
            "lord"
        ],
        "difficulty": "easy",
        "definition": "Terms referring to the Judeo-Christian God.",
        "sentence": "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.",
        "partOfSpeech": "noun"
    },
    {
        "word": "grant",
        "valid": [
            "grant"
        ],
        "difficulty": "easy",
        "definition": "Any monetary aid.",
        "sentence": "I grant you this much.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agree",
        "valid": [
            "agree"
        ],
        "difficulty": "easy",
        "definition": "Be in accord; be in agreement.",
        "sentence": "I can't agree with you!",
        "partOfSpeech": "verb"
    },
    {
        "word": "fiction",
        "valid": [
            "fiction"
        ],
        "difficulty": "medium",
        "definition": "A literary work based on the imagination and not necessarily on fact.",
        "sentence": "Reading science fiction sometimes does much to encourage a scientific view of the universe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hear",
        "valid": [
            "hear"
        ],
        "difficulty": "easy",
        "definition": "Perceive (sound) via the auditory sense.",
        "sentence": "We must hear the expert before we make a decision.",
        "partOfSpeech": "verb"
    },
    {
        "word": "sometimes",
        "valid": [
            "sometimes"
        ],
        "difficulty": "hard",
        "definition": "On certain occasions or in certain cases but not always; \"sometimes they come for a month; at other times for six months\".",
        "sentence": "Sometimes she wished she were back in England.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "watches",
        "valid": [
            "watches"
        ],
        "difficulty": "medium",
        "definition": "Form of watch: a small portable timepiece.",
        "sentence": "Let's synchronize our watches.",
        "partOfSpeech": "noun"
    },
    {
        "word": "careers",
        "valid": [
            "careers"
        ],
        "difficulty": "medium",
        "definition": "Form of career: the particular occupation for which you are trained.",
        "sentence": "You should read about the careers of great men.",
        "partOfSpeech": "noun"
    },
    {
        "word": "beyond",
        "valid": [
            "beyond"
        ],
        "difficulty": "medium",
        "definition": "Farther along in space or time or degree.",
        "sentence": "Agreed to provide essentials but nothing beyond.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "goes",
        "valid": [
            "goes"
        ],
        "difficulty": "easy",
        "definition": "Form of go: a time period for working (after which you will be relieved by someone else).",
        "sentence": "There is a shuttle bus that goes to the Ginza Tokyu Hotel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "families",
        "valid": [
            "families"
        ],
        "difficulty": "hard",
        "definition": "Form of family: a social unit living together.",
        "sentence": "Four families were killed in the fire.",
        "partOfSpeech": "noun"
    },
    {
        "word": "museum",
        "valid": [
            "museum"
        ],
        "difficulty": "medium",
        "definition": "A depository for collecting and displaying objects having scientific or historical or artistic value.",
        "sentence": "When was it that you visited the museum?",
        "partOfSpeech": "noun"
    },
    {
        "word": "themselves",
        "valid": [
            "themselves"
        ],
        "difficulty": "expert",
        "definition": "The plural of himself, herself, and itself. See Himself, Herself, Itself.",
        "sentence": "If you take care of the small things, the big things will take care of themselves.",
        "partOfSpeech": "noun"
    },
    {
        "word": "transport",
        "valid": [
            "transport"
        ],
        "difficulty": "hard",
        "definition": "Something that serves as a means of transportation.",
        "sentence": "After all, their form of transport produces no pollution at all.",
        "partOfSpeech": "noun"
    },
    {
        "word": "interesting",
        "valid": [
            "interesting"
        ],
        "difficulty": "expert",
        "definition": "Arousing or holding the attention.",
        "sentence": "It seems interesting to me.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "blogs",
        "valid": [
            "blogs"
        ],
        "difficulty": "easy",
        "definition": "Form of blog: a shared on-line journal where people can post diary entries about their personal experiences and hobbies.",
        "sentence": "I often read English and Chinese blogs online.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wife",
        "valid": [
            "wife"
        ],
        "difficulty": "easy",
        "definition": "A married woman; a man's partner in marriage.",
        "sentence": "It is surprising that your wife should object.",
        "partOfSpeech": "noun"
    },
    {
        "word": "evaluation",
        "valid": [
            "evaluation"
        ],
        "difficulty": "expert",
        "definition": "Act of ascertaining or fixing the value or worth of.",
        "sentence": "He has not taken the highest level evaluation, but he is good at mathematics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "accepted",
        "valid": [
            "accepted"
        ],
        "difficulty": "hard",
        "definition": "Generally approved or compelling recognition.",
        "sentence": "Several accepted techniques for treating the condition.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "former",
        "valid": [
            "former"
        ],
        "difficulty": "medium",
        "definition": "The first of two or the first mentioned of two.",
        "sentence": "Tom and Dick were both heroes but only the former is remembered today.",
        "partOfSpeech": "noun"
    },
    {
        "word": "implementation",
        "valid": [
            "implementation"
        ],
        "difficulty": "expert",
        "definition": "The act of accomplishing some aim or executing some order.",
        "sentence": "The agency was created for the implementation of the policy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hits",
        "valid": [
            "hits"
        ],
        "difficulty": "easy",
        "definition": "Form of hit: (baseball) a successful stroke in an athletic contest (especially in baseball).",
        "sentence": "Billy often hits his face against windows.",
        "partOfSpeech": "noun"
    },
    {
        "word": "zone",
        "valid": [
            "zone"
        ],
        "difficulty": "easy",
        "definition": "A locally circumscribed place characterized by some distinctive features.",
        "sentence": "Our combined fleet broke through the enemy's defense zone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "complex",
        "valid": [
            "complex"
        ],
        "difficulty": "medium",
        "definition": "A conceptual whole made up of complicated and related parts.",
        "sentence": "The complex of shopping malls, houses, and roads created a new town.",
        "partOfSpeech": "noun"
    },
    {
        "word": "galleries",
        "valid": [
            "galleries"
        ],
        "difficulty": "hard",
        "definition": "Form of gallery: spectators at a golf or tennis match.",
        "sentence": "He haunted the art galleries.",
        "partOfSpeech": "noun"
    },
    {
        "word": "references",
        "valid": [
            "references"
        ],
        "difficulty": "expert",
        "definition": "Form of reference: a remark that calls attention to something or someone.",
        "sentence": "Please give us three references.",
        "partOfSpeech": "noun"
    },
    {
        "word": "presented",
        "valid": [
            "presented"
        ],
        "difficulty": "hard",
        "definition": "Form of present: the period of time that is happening now; any continuous stretch of time including the moment of speech.",
        "sentence": "The company presented him with a gold watch on the day he retired.",
        "partOfSpeech": "noun"
    },
    {
        "word": "jack",
        "valid": [
            "jack"
        ],
        "difficulty": "easy",
        "definition": "A small worthless amount.",
        "sentence": "You don't know jack.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flat",
        "valid": [
            "flat"
        ],
        "difficulty": "easy",
        "definition": "A level tract of land.",
        "sentence": "Flat sales for the month.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flow",
        "valid": [
            "flow"
        ],
        "difficulty": "easy",
        "definition": "The motion characteristic of fluids (liquids or gases).",
        "sentence": "The flow of thought.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agencies",
        "valid": [
            "agencies"
        ],
        "difficulty": "hard",
        "definition": "Form of agency: an administrative unit of government.",
        "sentence": "This would enable us to compete more effectively with other agencies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "literature",
        "valid": [
            "literature"
        ],
        "difficulty": "expert",
        "definition": "Creative writing of recognized artistic value.",
        "sentence": "Her place in literature is secure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "respective",
        "valid": [
            "respective"
        ],
        "difficulty": "expert",
        "definition": "Considered individually.",
        "sentence": "Go to your respective seats.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "parent",
        "valid": [
            "parent"
        ],
        "difficulty": "medium",
        "definition": "A father or mother; one who begets or one who gives birth to or nurtures and raises a child; a relative who plays the role of guardian.",
        "sentence": "A parent or teacher should bring home to children the pleasure of reading.",
        "partOfSpeech": "noun"
    },
    {
        "word": "michigan",
        "valid": [
            "michigan"
        ],
        "difficulty": "hard",
        "definition": "A midwestern state in north central United States in the Great Lakes region.",
        "sentence": "Lansing is the state capital of Michigan.",
        "partOfSpeech": "noun"
    },
    {
        "word": "setting",
        "valid": [
            "setting"
        ],
        "difficulty": "medium",
        "definition": "The context and environment in which something is set.",
        "sentence": "A place setting of sterling flatware.",
        "partOfSpeech": "noun"
    },
    {
        "word": "scale",
        "valid": [
            "scale"
        ],
        "difficulty": "easy",
        "definition": "An ordered reference standard.",
        "sentence": "They entertained on a grand scale.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stand",
        "valid": [
            "stand"
        ],
        "difficulty": "easy",
        "definition": "A support or foundation.",
        "sentence": "The army made a final stand at the Rhone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "economy",
        "valid": [
            "economy"
        ],
        "difficulty": "medium",
        "definition": "The system of production and distribution and consumption.",
        "sentence": "It was a small economy to walk to work every day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "highest",
        "valid": [
            "highest"
        ],
        "difficulty": "medium",
        "definition": "At the maximum elevation, degree, rank, or position.",
        "sentence": "We have given your order highest priority.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "helpful",
        "valid": [
            "helpful"
        ],
        "difficulty": "medium",
        "definition": "Providing assistance or serving a useful function.",
        "sentence": "Your advice is always helpful to me.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "monthly",
        "valid": [
            "monthly"
        ],
        "difficulty": "medium",
        "definition": "A periodical that is published every month (or 12 issues per year).",
        "sentence": "Monthly payments.",
        "partOfSpeech": "noun"
    },
    {
        "word": "critical",
        "valid": [
            "critical"
        ],
        "difficulty": "hard",
        "definition": "Marked by a tendency to find and call attention to errors and flaws.",
        "sentence": "A critical attitude.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "frame",
        "valid": [
            "frame"
        ],
        "difficulty": "easy",
        "definition": "The framework for a pair of eyeglasses.",
        "sentence": "The frame enhances but is not itself the subject of attention.",
        "partOfSpeech": "noun"
    },
    {
        "word": "musical",
        "valid": [
            "musical"
        ],
        "difficulty": "medium",
        "definition": "A play or film whose action and dialogue is interspersed with singing and dancing.",
        "sentence": "A musical speaking voice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "definition",
        "valid": [
            "definition"
        ],
        "difficulty": "expert",
        "definition": "A concise explanation of the meaning of a word or phrase or symbol.",
        "sentence": "Exercise had given his muscles superior definition.",
        "partOfSpeech": "noun"
    },
    {
        "word": "secretary",
        "valid": [
            "secretary"
        ],
        "difficulty": "hard",
        "definition": "A person who is head of an administrative department of government.",
        "sentence": "The records of our discussions are kept by the secretary.",
        "partOfSpeech": "noun"
    },
    {
        "word": "networking",
        "valid": [
            "networking"
        ],
        "difficulty": "expert",
        "definition": "Form of network: an interconnected system of things or people.",
        "sentence": "Do you have an account with any social networking web sites?",
        "partOfSpeech": "noun"
    },
    {
        "word": "path",
        "valid": [
            "path"
        ],
        "difficulty": "easy",
        "definition": "A course of conduct.",
        "sentence": "The path of virtue.",
        "partOfSpeech": "noun"
    },
    {
        "word": "employee",
        "valid": [
            "employee"
        ],
        "difficulty": "hard",
        "definition": "A worker who is hired to perform a job.",
        "sentence": "Every boss has his or her favorite employee.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chief",
        "valid": [
            "chief"
        ],
        "difficulty": "easy",
        "definition": "A person who is in charge.",
        "sentence": "You don't have proper dignity as chief of the section.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gives",
        "valid": [
            "gives"
        ],
        "difficulty": "easy",
        "definition": "Form of give: the elasticity of something that can be stretched and returns to its original length.",
        "sentence": "Silence gives consent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bottom",
        "valid": [
            "bottom"
        ],
        "difficulty": "medium",
        "definition": "The lower side of anything.",
        "sentence": "They started at the bottom of the hill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "magazines",
        "valid": [
            "magazines"
        ],
        "difficulty": "hard",
        "definition": "Form of magazine: a periodic publication containing pictures and stories and articles of interest to those who purchase it or subscribe to it.",
        "sentence": "Newspapers, magazines, and newscasts tell what is going on in the world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "packages",
        "valid": [
            "packages"
        ],
        "difficulty": "hard",
        "definition": "Form of package: a collection of things wrapped or boxed together.",
        "sentence": "Just put those packages anywhere.",
        "partOfSpeech": "noun"
    },
    {
        "word": "detail",
        "valid": [
            "detail"
        ],
        "difficulty": "medium",
        "definition": "An isolated fact that is considered separately from the whole.",
        "sentence": "The essay contained too much detail.",
        "partOfSpeech": "noun"
    },
    {
        "word": "laws",
        "valid": [
            "laws"
        ],
        "difficulty": "easy",
        "definition": "The first of three divisions of the Hebrew Scriptures comprising the first five books of the Hebrew Bible considered as a unit.",
        "sentence": "Even our brains are subject to the laws of physics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "changed",
        "valid": [
            "changed"
        ],
        "difficulty": "medium",
        "definition": "Made or become different in nature or form.",
        "sentence": "He's an altered (or changed) man since his election to Congress.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "heard",
        "valid": [
            "heard"
        ],
        "difficulty": "easy",
        "definition": "Detected or perceived by the sense of hearing.",
        "sentence": "A conversation heard through the wall.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "begin",
        "valid": [
            "begin"
        ],
        "difficulty": "easy",
        "definition": "Israeli statesman (born in Russia) who (as prime minister of Israel) negotiated a peace treaty with Anwar Sadat (then the president of Egypt) (1913-1992).",
        "sentence": "Begin a new chapter in your life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "individuals",
        "valid": [
            "individuals"
        ],
        "difficulty": "expert",
        "definition": "Form of individual: a human being.",
        "sentence": "The community is made up of individuals.",
        "partOfSpeech": "noun"
    },
    {
        "word": "colorado",
        "valid": [
            "colorado"
        ],
        "difficulty": "hard",
        "definition": "A state in west central United States in the Rocky Mountains.",
        "sentence": "The actor has a hideaway in Colorado.",
        "partOfSpeech": "noun"
    },
    {
        "word": "royal",
        "valid": [
            "royal"
        ],
        "difficulty": "easy",
        "definition": "A sail set next above the topgallant on a royal mast.",
        "sentence": "The royal (or crowned) heads of Europe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "clean",
        "valid": [
            "clean"
        ],
        "difficulty": "easy",
        "definition": "A weightlift in which the barbell is lifted to shoulder height and then jerked overhead.",
        "sentence": "Clean up before you see your grandparents.",
        "partOfSpeech": "noun"
    },
    {
        "word": "switch",
        "valid": [
            "switch"
        ],
        "difficulty": "medium",
        "definition": "Control consisting of a mechanical or electrical or electronic device for making or breaking or changing the connections in a circuit.",
        "sentence": "His switch on abortion cost him the election.",
        "partOfSpeech": "noun"
    },
    {
        "word": "largest",
        "valid": [
            "largest"
        ],
        "difficulty": "medium",
        "definition": "Of the greatest size, extent, capacity, or amount.",
        "sentence": "Elephants are the largest land animals alive today.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "titles",
        "valid": [
            "titles"
        ],
        "difficulty": "medium",
        "definition": "Form of title: a heading that names a statute or legislative bill; may give a brief summary of the matters it deals with.",
        "sentence": "In footnotes, book titles and journal names are written in italics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "relevant",
        "valid": [
            "relevant"
        ],
        "difficulty": "hard",
        "definition": "Having a bearing on or connection with the subject at issue.",
        "sentence": "The scientist corresponds with colleagues in order to learn about matters relevant to her own research.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "guidelines",
        "valid": [
            "guidelines"
        ],
        "difficulty": "expert",
        "definition": "Form of guideline: a light line that is used in lettering to help align the letters.",
        "sentence": "These are just guidelines, not hard and fast rules.",
        "partOfSpeech": "noun"
    },
    {
        "word": "justice",
        "valid": [
            "justice"
        ],
        "difficulty": "medium",
        "definition": "The quality of being just or fair.",
        "sentence": "Justice is expensive.",
        "partOfSpeech": "noun"
    },
    {
        "word": "connect",
        "valid": [
            "connect"
        ],
        "difficulty": "medium",
        "definition": "Connect, fasten, or put together two or more pieces.",
        "sentence": "I cannot connect these two pieces of evidence in my mind.",
        "partOfSpeech": "verb"
    },
    {
        "word": "basket",
        "valid": [
            "basket"
        ],
        "difficulty": "medium",
        "definition": "A container that is usually woven and has handles.",
        "sentence": "Mary set the basket on the table.",
        "partOfSpeech": "noun"
    },
    {
        "word": "applied",
        "valid": [
            "applied"
        ],
        "difficulty": "medium",
        "definition": "Concerned with concrete problems or data rather than with fundamental principles; \"technical problems in medicine, engineering, economics and other applied disciplines\"- Sidney Hook.",
        "sentence": "Applied physics.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "weekly",
        "valid": [
            "weekly"
        ],
        "difficulty": "medium",
        "definition": "A periodical that is published every week (or 52 issues per year).",
        "sentence": "A weekly visit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "installation",
        "valid": [
            "installation"
        ],
        "difficulty": "expert",
        "definition": "The act of installing something (as equipment).",
        "sentence": "The telephone installation took only a few minutes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "described",
        "valid": [
            "described"
        ],
        "difficulty": "hard",
        "definition": "Represented in words especially with sharpness and detail.",
        "sentence": "The vividly described wars.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "demand",
        "valid": [
            "demand"
        ],
        "difficulty": "medium",
        "definition": "An urgent or peremptory request.",
        "sentence": "The automobile reduced the demand for buggywhips.",
        "partOfSpeech": "noun"
    },
    {
        "word": "suite",
        "valid": [
            "suite"
        ],
        "difficulty": "easy",
        "definition": "A musical composition of several movements only loosely connected.",
        "sentence": "I'd like a suite.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vegas",
        "valid": [
            "vegas"
        ],
        "difficulty": "easy",
        "definition": "Form of vega: prolific Spanish playwright (1562-1635).",
        "sentence": "I really enjoyed betting in Las Vegas.",
        "partOfSpeech": "noun"
    },
    {
        "word": "square",
        "valid": [
            "square"
        ],
        "difficulty": "medium",
        "definition": "A plane rectangle with four equal sides and four right angles; a four-sided regular polygon.",
        "sentence": "The carpenter who built this room must have lost his square.",
        "partOfSpeech": "noun"
    },
    {
        "word": "attention",
        "valid": [
            "attention"
        ],
        "difficulty": "hard",
        "definition": "The process whereby a person concentrates on some features of the environment to the (relative) exclusion of others.",
        "sentence": "The old car needs constant attention.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advance",
        "valid": [
            "advance"
        ],
        "difficulty": "medium",
        "definition": "A movement forward.",
        "sentence": "The news caused a general advance on the stock market.",
        "partOfSpeech": "noun"
    },
    {
        "word": "skip",
        "valid": [
            "skip"
        ],
        "difficulty": "easy",
        "definition": "A gait in which steps and hops alternate.",
        "sentence": "Skip a stone across the pond.",
        "partOfSpeech": "noun"
    },
    {
        "word": "diet",
        "valid": [
            "diet"
        ],
        "difficulty": "easy",
        "definition": "A prescribed selection of foods.",
        "sentence": "He has high blood pressure and must stick to a low-salt diet.",
        "partOfSpeech": "noun"
    },
    {
        "word": "army",
        "valid": [
            "army"
        ],
        "difficulty": "easy",
        "definition": "A permanent organization of the military land forces of a nation or state.",
        "sentence": "The town was defended by a large army.",
        "partOfSpeech": "noun"
    },
    {
        "word": "auction",
        "valid": [
            "auction"
        ],
        "difficulty": "medium",
        "definition": "A variety of bridge in which tricks made in excess of the contract are scored toward game; now generally superseded by contract bridge.",
        "sentence": "We will be willing to make a deal with you after the auction.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gear",
        "valid": [
            "gear"
        ],
        "difficulty": "easy",
        "definition": "A toothed wheel that engages another toothed mechanism in order to change the speed or direction of transmitted motion.",
        "sentence": "Do you have rain gear with you?",
        "partOfSpeech": "noun"
    },
    {
        "word": "difference",
        "valid": [
            "difference"
        ],
        "difficulty": "expert",
        "definition": "The quality of being unlike or dissimilar.",
        "sentence": "The difference in her is amazing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "allowed",
        "valid": [
            "allowed"
        ],
        "difficulty": "medium",
        "definition": "Form of allow: make it possible through a specific action or lack of action for something to happen.",
        "sentence": "Sir, you are not allowed to park your car here.",
        "partOfSpeech": "verb"
    },
    {
        "word": "correct",
        "valid": [
            "correct"
        ],
        "difficulty": "medium",
        "definition": "Make right or correct.",
        "sentence": "The new contact lenses will correct for his myopia.",
        "partOfSpeech": "verb"
    },
    {
        "word": "nation",
        "valid": [
            "nation"
        ],
        "difficulty": "medium",
        "definition": "A politically organized body of people under a single government.",
        "sentence": "A statement that sums up the nation's mood.",
        "partOfSpeech": "noun"
    },
    {
        "word": "selling",
        "valid": [
            "selling"
        ],
        "difficulty": "medium",
        "definition": "The exchange of goods for an agreed sum of money.",
        "sentence": "She's selling drugs at concerts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lots",
        "valid": [
            "lots"
        ],
        "difficulty": "easy",
        "definition": "A large number or amount.",
        "sentence": "Made lots of new friends.",
        "partOfSpeech": "noun"
    },
    {
        "word": "piece",
        "valid": [
            "piece"
        ],
        "difficulty": "easy",
        "definition": "A separate part of a whole.",
        "sentence": "He sacrificed a piece to get a strategic advantage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sheet",
        "valid": [
            "sheet"
        ],
        "difficulty": "easy",
        "definition": "Any broad thin expanse or surface.",
        "sentence": "A sheet of ice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "firm",
        "valid": [
            "firm"
        ],
        "difficulty": "easy",
        "definition": "The members of a business organization that owns or operates one or more establishments.",
        "sentence": "Your muscles will firm when you exercise regularly.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seven",
        "valid": [
            "seven"
        ],
        "difficulty": "easy",
        "definition": "The cardinal number that is the sum of six and one.",
        "sentence": "Make sure that you arrive at seven o'clock.",
        "partOfSpeech": "noun"
    },
    {
        "word": "older",
        "valid": [
            "older"
        ],
        "difficulty": "easy",
        "definition": "Advanced in years; (`aged' is pronounced as two syllables).",
        "sentence": "The older soldiers.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "regulations",
        "valid": [
            "regulations"
        ],
        "difficulty": "expert",
        "definition": "Form of regulation: an authoritative rule.",
        "sentence": "You must follow the regulations.",
        "partOfSpeech": "noun"
    },
    {
        "word": "elements",
        "valid": [
            "elements"
        ],
        "difficulty": "hard",
        "definition": "Violent or severe weather (viewed as caused by the action of the four elements).",
        "sentence": "They felt the full fury of the elements.",
        "partOfSpeech": "noun"
    },
    {
        "word": "species",
        "valid": [
            "species"
        ],
        "difficulty": "medium",
        "definition": "Taxonomic group whose members can interbreed.",
        "sentence": "A species of molecule.",
        "partOfSpeech": "noun"
    },
    {
        "word": "jump",
        "valid": [
            "jump"
        ],
        "difficulty": "easy",
        "definition": "A sudden and decisive increase.",
        "sentence": "A jump in attendance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cells",
        "valid": [
            "cells"
        ],
        "difficulty": "easy",
        "definition": "Form of cell: any small compartment.",
        "sentence": "Muscle tissue consists of innumerable cells.",
        "partOfSpeech": "noun"
    },
    {
        "word": "module",
        "valid": [
            "module"
        ],
        "difficulty": "medium",
        "definition": "One of the inherent cognitive or perceptual powers of the mind.",
        "sentence": "A module is said to be semisimple if it is the sum of simple submodules.",
        "partOfSpeech": "noun"
    },
    {
        "word": "resort",
        "valid": [
            "resort"
        ],
        "difficulty": "medium",
        "definition": "A hotel located in a resort area.",
        "sentence": "An appeal to his uncle was his last resort.",
        "partOfSpeech": "noun"
    },
    {
        "word": "facility",
        "valid": [
            "facility"
        ],
        "difficulty": "hard",
        "definition": "A building or place that provides a particular service or is used for a particular industry.",
        "sentence": "A cell phone with internet facility.",
        "partOfSpeech": "noun"
    },
    {
        "word": "random",
        "valid": [
            "random"
        ],
        "difficulty": "medium",
        "definition": "Lacking any definite plan or order or purpose; governed by or depending on chance.",
        "sentence": "A random choice.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "pricing",
        "valid": [
            "pricing"
        ],
        "difficulty": "medium",
        "definition": "The evaluation of something in terms of its price.",
        "sentence": "Our company decided on flat rate pricing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dvds",
        "valid": [
            "dvds"
        ],
        "difficulty": "easy",
        "definition": "Form of dvd: a digital recording (as of a movie) on an optical disk that can be played on a computer or a television set.",
        "sentence": "20 boxes filled with pirate CDs and DVDs were found.",
        "partOfSpeech": "noun"
    },
    {
        "word": "certificate",
        "valid": [
            "certificate"
        ],
        "difficulty": "expert",
        "definition": "A document attesting to the truth of certain stated facts.",
        "sentence": "If you have a certificate of immunization, please bring it when you come.",
        "partOfSpeech": "noun"
    },
    {
        "word": "minister",
        "valid": [
            "minister"
        ],
        "difficulty": "hard",
        "definition": "A person authorized to conduct religious worship.",
        "sentence": "Minister of Finance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "motion",
        "valid": [
            "motion"
        ],
        "difficulty": "medium",
        "definition": "The use of movements (especially of the hands) to communicate familiar or prearranged signals.",
        "sentence": "Police controlled the motion of the crowd.",
        "partOfSpeech": "noun"
    },
    {
        "word": "looks",
        "valid": [
            "looks"
        ],
        "difficulty": "easy",
        "definition": "Form of look: the feelings expressed on a person's face.",
        "sentence": "You are saying you intentionally hide your good looks?",
        "partOfSpeech": "noun"
    },
    {
        "word": "fashion",
        "valid": [
            "fashion"
        ],
        "difficulty": "medium",
        "definition": "How something is done or how it happens.",
        "sentence": "In an abrasive fashion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "directions",
        "valid": [
            "directions"
        ],
        "difficulty": "expert",
        "definition": "Form of direction: a line leading to a place or point.",
        "sentence": "You have only to follow the directions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "visitors",
        "valid": [
            "visitors"
        ],
        "difficulty": "hard",
        "definition": "Form of visitor: someone who visits.",
        "sentence": "We will have some visitors one of these days.",
        "partOfSpeech": "noun"
    },
    {
        "word": "documentation",
        "valid": [
            "documentation"
        ],
        "difficulty": "expert",
        "definition": "Confirmation that some fact or statement is true through the use of documentary evidence.",
        "sentence": "His documentation of the results was excellent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "monitor",
        "valid": [
            "monitor"
        ],
        "difficulty": "medium",
        "definition": "Someone who supervises (an examination).",
        "sentence": "The police monitor the suspect's moves.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trading",
        "valid": [
            "trading"
        ],
        "difficulty": "medium",
        "definition": "Buying or selling securities or commodities.",
        "sentence": "Stock prices soared in active trading as corporations announced good financial results.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forest",
        "valid": [
            "forest"
        ],
        "difficulty": "medium",
        "definition": "The trees and other plants in a large densely wooded area.",
        "sentence": "A small forest fire can easily spread and quickly become a great conflagration.",
        "partOfSpeech": "noun"
    },
    {
        "word": "calls",
        "valid": [
            "calls"
        ],
        "difficulty": "easy",
        "definition": "Form of call: a telephone connection.",
        "sentence": "He who pays the piper calls the tune.",
        "partOfSpeech": "noun"
    },
    {
        "word": "whose",
        "valid": [
            "whose"
        ],
        "difficulty": "easy",
        "definition": "The possessive case of who or which. See Who, and Which. Whose daughter art thou tell me, I pray thee. Gen. xxiv. 23. The question whose solution I require. Dryden.",
        "sentence": "Being objective means not telling everybody whose side you are on.",
        "partOfSpeech": "noun"
    },
    {
        "word": "coverage",
        "valid": [
            "coverage"
        ],
        "difficulty": "hard",
        "definition": "The total amount and type of insurance carried.",
        "sentence": "The dictionary's coverage of standard English is excellent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "couple",
        "valid": [
            "couple"
        ],
        "difficulty": "medium",
        "definition": "A pair who associate with one another.",
        "sentence": "The engaged couple.",
        "partOfSpeech": "noun"
    },
    {
        "word": "giving",
        "valid": [
            "giving"
        ],
        "difficulty": "medium",
        "definition": "The act of giving.",
        "sentence": "The alumni followed a program of annual giving.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chance",
        "valid": [
            "chance"
        ],
        "difficulty": "medium",
        "definition": "A possibility due to a favorable combination of circumstances.",
        "sentence": "You take a chance when you let her drive.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vision",
        "valid": [
            "vision"
        ],
        "difficulty": "medium",
        "definition": "A vivid mental image.",
        "sentence": "The runners emerged from the trees into his clear vision.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ball",
        "valid": [
            "ball"
        ],
        "difficulty": "easy",
        "definition": "Round object that is hit or thrown or kicked in games.",
        "sentence": "There was a desire for National League ball in the area.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ending",
        "valid": [
            "ending"
        ],
        "difficulty": "medium",
        "definition": "The end of a word (a suffix or inflectional ending or final morpheme).",
        "sentence": "I don't like words that have -ism as an ending.",
        "partOfSpeech": "noun"
    },
    {
        "word": "clients",
        "valid": [
            "clients"
        ],
        "difficulty": "medium",
        "definition": "Form of client: a person who seeks the advice of a lawyer.",
        "sentence": "Our company has many clients from abroad.",
        "partOfSpeech": "noun"
    },
    {
        "word": "actions",
        "valid": [
            "actions"
        ],
        "difficulty": "medium",
        "definition": "Form of action: something done (usually as opposed to something said).",
        "sentence": "You should be responsible for your actions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "listen",
        "valid": [
            "listen"
        ],
        "difficulty": "medium",
        "definition": "Hear with intention.",
        "sentence": "Listen to the sound of this cello.",
        "partOfSpeech": "verb"
    },
    {
        "word": "discuss",
        "valid": [
            "discuss"
        ],
        "difficulty": "medium",
        "definition": "To consider or examine in speech or writing.",
        "sentence": "Let's discuss your love problems on the way back from school.",
        "partOfSpeech": "verb"
    },
    {
        "word": "accept",
        "valid": [
            "accept"
        ],
        "difficulty": "medium",
        "definition": "Consider or hold as true.",
        "sentence": "I shall have to accept these unpleasant working conditions.",
        "partOfSpeech": "verb"
    },
    {
        "word": "automotive",
        "valid": [
            "automotive"
        ],
        "difficulty": "expert",
        "definition": "Of or relating to motor vehicles.",
        "sentence": "Automotive supplies.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "naked",
        "valid": [
            "naked"
        ],
        "difficulty": "easy",
        "definition": "Completely unclothed.",
        "sentence": "Naked from the waist up.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "goal",
        "valid": [
            "goal"
        ],
        "difficulty": "easy",
        "definition": "The state of affairs that a plan is intended to achieve and that (when achieved) terminates behavior intended to achieve it.",
        "sentence": "The winning goal came with less than a minute left to play.",
        "partOfSpeech": "noun"
    },
    {
        "word": "successful",
        "valid": [
            "successful"
        ],
        "difficulty": "expert",
        "definition": "Having succeeded or being marked by a favorable outcome.",
        "sentence": "A successful architect.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "sold",
        "valid": [
            "sold"
        ],
        "difficulty": "easy",
        "definition": "Disposed of to a purchaser.",
        "sentence": "This merchandise is sold.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "wind",
        "valid": [
            "wind"
        ],
        "difficulty": "easy",
        "definition": "Air moving (sometimes with considerable force) from an area of high pressure to an area of low pressure.",
        "sentence": "He put the key in the old clock and gave it a good wind.",
        "partOfSpeech": "noun"
    },
    {
        "word": "communities",
        "valid": [
            "communities"
        ],
        "difficulty": "expert",
        "definition": "Form of community: a group of people living in a particular local area.",
        "sentence": "Man lives in communities such as cities and countries.",
        "partOfSpeech": "noun"
    },
    {
        "word": "clinical",
        "valid": [
            "clinical"
        ],
        "difficulty": "hard",
        "definition": "Relating to a clinic or conducted in or as if in a clinic and depending on direct observation of patients.",
        "sentence": "He spoke in the clipped clinical monotones typical of police testimony.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "situation",
        "valid": [
            "situation"
        ],
        "difficulty": "hard",
        "definition": "The general state of things; the combination of circumstances at a given time; \"eternal truths will be neither true nor eternal unless they have fresh meaning for every new social situation\"- Franklin D.Roosevelt.",
        "sentence": "The unpleasant situation (or position) of having to choose between two evils.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sciences",
        "valid": [
            "sciences"
        ],
        "difficulty": "hard",
        "definition": "Form of science: a particular branch of scientific knowledge.",
        "sentence": "Knowledge of computers is basic to all sciences.",
        "partOfSpeech": "noun"
    },
    {
        "word": "markets",
        "valid": [
            "markets"
        ],
        "difficulty": "medium",
        "definition": "Form of market: the world of commercial activity where goods and services are bought and sold.",
        "sentence": "What is the percentage of overseas markets for your products?",
        "partOfSpeech": "noun"
    },
    {
        "word": "lowest",
        "valid": [
            "lowest"
        ],
        "difficulty": "medium",
        "definition": "Lowest in rank or importance.",
        "sentence": "The branch with the big peaches on it hung lowest.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "highly",
        "valid": [
            "highly"
        ],
        "difficulty": "medium",
        "definition": "To a high degree or extent; favorably or with much respect.",
        "sentence": "Details known by only a few highly placed persons.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "publishing",
        "valid": [
            "publishing"
        ],
        "difficulty": "expert",
        "definition": "The business of issuing printed matter for sale or distribution.",
        "sentence": "I'd like to place an order for the book with the publishing company.",
        "partOfSpeech": "noun"
    },
    {
        "word": "appear",
        "valid": [
            "appear"
        ],
        "difficulty": "medium",
        "definition": "Give a certain impression or have a certain outward aspect.",
        "sentence": "Did your latest book appear yet?",
        "partOfSpeech": "verb"
    },
    {
        "word": "emergency",
        "valid": [
            "emergency"
        ],
        "difficulty": "hard",
        "definition": "A sudden unforeseen crisis (usually involving danger) that requires immediate action.",
        "sentence": "He never knew what to do in an emergency.",
        "partOfSpeech": "noun"
    },
    {
        "word": "developing",
        "valid": [
            "developing"
        ],
        "difficulty": "expert",
        "definition": "Processing a photosensitive material in order to make an image visible.",
        "sentence": "The urban population in most developing countries is increasing very fast.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lives",
        "valid": [
            "lives"
        ],
        "difficulty": "easy",
        "definition": "Form of life: a characteristic state or mode of living.",
        "sentence": "One million people lost their lives in the war.",
        "partOfSpeech": "noun"
    },
    {
        "word": "currency",
        "valid": [
            "currency"
        ],
        "difficulty": "hard",
        "definition": "The metal or paper medium of exchange that is presently used.",
        "sentence": "The currency of ideas.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leather",
        "valid": [
            "leather"
        ],
        "difficulty": "medium",
        "definition": "An animal skin made smooth and flexible by removing the hair and then tanning.",
        "sentence": "Good leather will wear for years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "determine",
        "valid": [
            "determine"
        ],
        "difficulty": "hard",
        "definition": "Establish after a calculation, investigation, experiment, survey, or study.",
        "sentence": "No one can determine the amount of money we waste in a year.",
        "partOfSpeech": "verb"
    },
    {
        "word": "temperature",
        "valid": [
            "temperature"
        ],
        "difficulty": "expert",
        "definition": "The degree of hotness or coldness of a body or environment (corresponding to its molecular activity).",
        "sentence": "You don't have a temperature.",
        "partOfSpeech": "noun"
    },
    {
        "word": "palm",
        "valid": [
            "palm"
        ],
        "difficulty": "easy",
        "definition": "The inner surface of the hand from the wrist to the base of the fingers.",
        "sentence": "That politician won't meet you unless you grease his palm.",
        "partOfSpeech": "noun"
    },
    {
        "word": "announcements",
        "valid": [
            "announcements"
        ],
        "difficulty": "expert",
        "definition": "Form of announcement: a formal public statement.",
        "sentence": "I've got a couple of announcements to make.",
        "partOfSpeech": "noun"
    },
    {
        "word": "patient",
        "valid": [
            "patient"
        ],
        "difficulty": "medium",
        "definition": "A person who requires medical care.",
        "sentence": "A patient smile.",
        "partOfSpeech": "noun"
    },
    {
        "word": "actual",
        "valid": [
            "actual"
        ],
        "difficulty": "medium",
        "definition": "Presently existing in fact and not merely potential or possible.",
        "sentence": "The predicted temperature and the actual temperature were markedly different.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "historical",
        "valid": [
            "historical"
        ],
        "difficulty": "expert",
        "definition": "Of or relating to the study of history.",
        "sentence": "Historical (or historic) times.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "stone",
        "valid": [
            "stone"
        ],
        "difficulty": "easy",
        "definition": "A lump or mass of hard consolidated mineral matter.",
        "sentence": "He wanted a special stone to mark the site.",
        "partOfSpeech": "noun"
    },
    {
        "word": "commerce",
        "valid": [
            "commerce"
        ],
        "difficulty": "hard",
        "definition": "Transactions (sales and purchases) having the objective of supplying commodities (goods and services).",
        "sentence": "We must promote commerce with neighboring countries.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ringtones",
        "valid": [
            "ringtones"
        ],
        "difficulty": "hard",
        "definition": "Sounds or tunes produced by a telephone to indicate an incoming call.",
        "sentence": "She sampled several musical ringtones before choosing one for her phone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "perhaps",
        "valid": [
            "perhaps"
        ],
        "difficulty": "medium",
        "definition": "By chance.",
        "sentence": "Perhaps she will call tomorrow.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "persons",
        "valid": [
            "persons"
        ],
        "difficulty": "medium",
        "definition": "Form of person: a human being.",
        "sentence": "Doctors should help sick or injured persons.",
        "partOfSpeech": "noun"
    },
    {
        "word": "difficult",
        "valid": [
            "difficult"
        ],
        "difficulty": "hard",
        "definition": "Not easy; requiring great physical or mental effort to accomplish or comprehend or endure.",
        "sentence": "A difficult task.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "scientific",
        "valid": [
            "scientific"
        ],
        "difficulty": "expert",
        "definition": "Of or relating to the practice of science.",
        "sentence": "A scientific approach.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "satellite",
        "valid": [
            "satellite"
        ],
        "difficulty": "hard",
        "definition": "Man-made equipment that orbits around the earth or the moon.",
        "sentence": "A city and its satellite communities.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tests",
        "valid": [
            "tests"
        ],
        "difficulty": "easy",
        "definition": "Form of test: trying something to find out about it.",
        "sentence": "Those selected will have to face extensive medical and psychological tests.",
        "partOfSpeech": "noun"
    },
    {
        "word": "village",
        "valid": [
            "village"
        ],
        "difficulty": "medium",
        "definition": "A community of people smaller than a town.",
        "sentence": "In a town you may pass unnoticed, whereas in a village it's impossible.",
        "partOfSpeech": "noun"
    },
    {
        "word": "accounts",
        "valid": [
            "accounts"
        ],
        "difficulty": "hard",
        "definition": "Form of account: a record or narrative description of past events.",
        "sentence": "The treasurer was short in his accounts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "amateur",
        "valid": [
            "amateur"
        ],
        "difficulty": "medium",
        "definition": "Someone who pursues a study or sport as a pastime.",
        "sentence": "An amateur painter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pain",
        "valid": [
            "pain"
        ],
        "difficulty": "easy",
        "definition": "A symptom of some physical hurt or disorder.",
        "sentence": "As the intensity increased the sensation changed from tickle to pain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "particularly",
        "valid": [
            "particularly"
        ],
        "difficulty": "expert",
        "definition": "To a distinctly greater extent or degree than is common.",
        "sentence": "He was particularly fussy about spelling.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "factors",
        "valid": [
            "factors"
        ],
        "difficulty": "medium",
        "definition": "Form of factor: anything that contributes causally to a result.",
        "sentence": "Scientists say many factors bring about changes in weather.",
        "partOfSpeech": "noun"
    },
    {
        "word": "coffee",
        "valid": [
            "coffee"
        ],
        "difficulty": "medium",
        "definition": "A beverage consisting of an infusion of ground coffee beans.",
        "sentence": "He ordered a cup of coffee.",
        "partOfSpeech": "noun"
    },
    {
        "word": "settings",
        "valid": [
            "settings"
        ],
        "difficulty": "hard",
        "definition": "Form of setting: the context and environment in which something is set.",
        "sentence": "Are you using the default settings?",
        "partOfSpeech": "noun"
    },
    {
        "word": "buyer",
        "valid": [
            "buyer"
        ],
        "difficulty": "easy",
        "definition": "A person who buys.",
        "sentence": "Bear in mind that, under such circumstances, we have no alternative but to find another buyer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cultural",
        "valid": [
            "cultural"
        ],
        "difficulty": "hard",
        "definition": "Of or relating to the arts and manners that a group favors.",
        "sentence": "A cultural variety.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "easily",
        "valid": [
            "easily"
        ],
        "difficulty": "medium",
        "definition": "With ease (`easy' is sometimes used informally for `easily').",
        "sentence": "A mistake that could easily have ended in disaster.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "oral",
        "valid": [
            "oral"
        ],
        "difficulty": "easy",
        "definition": "An examination conducted by spoken communication.",
        "sentence": "The oral cavity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ford",
        "valid": [
            "ford"
        ],
        "difficulty": "easy",
        "definition": "United States film maker (1896-1973).",
        "sentence": "I'll buy a Ford.",
        "partOfSpeech": "noun"
    },
    {
        "word": "poster",
        "valid": [
            "poster"
        ],
        "difficulty": "medium",
        "definition": "A sign posted in a public place as an advertisement.",
        "sentence": "A poster advertised the coming attractions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "edge",
        "valid": [
            "edge"
        ],
        "difficulty": "easy",
        "definition": "The boundary of a surface.",
        "sentence": "The edge of the leaf is wavy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "functional",
        "valid": [
            "functional"
        ],
        "difficulty": "expert",
        "definition": "Designed for or capable of a particular function or use.",
        "sentence": "A style of writing in which every word is functional.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "root",
        "valid": [
            "root"
        ],
        "difficulty": "easy",
        "definition": "The usually underground organ that lacks buds or leaves or nodes; absorbs water and mineral salts; usually it anchors the plant to the ground.",
        "sentence": "Communism's Russian root.",
        "partOfSpeech": "noun"
    },
    {
        "word": "closed",
        "valid": [
            "closed"
        ],
        "difficulty": "medium",
        "definition": "Not open or affording passage or access.",
        "sentence": "The many closed streets made travel difficult.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "holidays",
        "valid": [
            "holidays"
        ],
        "difficulty": "hard",
        "definition": "Form of holiday: leisure time away from work devoted to rest or pleasure.",
        "sentence": "We are looking forward to the holidays.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pink",
        "valid": [
            "pink"
        ],
        "difficulty": "easy",
        "definition": "A light shade of red.",
        "sentence": "I'm tickled pink about winning 10,000 yen at the horse races.",
        "partOfSpeech": "noun"
    },
    {
        "word": "zealand",
        "valid": [
            "zealand"
        ],
        "difficulty": "medium",
        "definition": "The largest island of Denmark and the site of Copenhagen.",
        "sentence": "I haven't seen Rick since he returned from New Zealand.",
        "partOfSpeech": "noun"
    },
    {
        "word": "balance",
        "valid": [
            "balance"
        ],
        "difficulty": "medium",
        "definition": "A state of equilibrium.",
        "sentence": "He took what he wanted and I got the balance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "monitoring",
        "valid": [
            "monitoring"
        ],
        "difficulty": "expert",
        "definition": "The act of observing something (and sometimes keeping a record of it).",
        "sentence": "The monitoring of enemy communications plays an important role in war times.",
        "partOfSpeech": "noun"
    },
    {
        "word": "graduate",
        "valid": [
            "graduate"
        ],
        "difficulty": "hard",
        "definition": "A person who has received a degree from a school (high school or college or university).",
        "sentence": "Graduate a cylinder.",
        "partOfSpeech": "noun"
    },
    {
        "word": "replies",
        "valid": [
            "replies"
        ],
        "difficulty": "medium",
        "definition": "Form of reply: a statement (either spoken or written) that is made to reply to a question or request or criticism or accusation.",
        "sentence": "The Irishman replies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shot",
        "valid": [
            "shot"
        ],
        "difficulty": "easy",
        "definition": "The act of firing a projectile.",
        "sentence": "A good shot requires good balance and tempo.",
        "partOfSpeech": "noun"
    },
    {
        "word": "architecture",
        "valid": [
            "architecture"
        ],
        "difficulty": "expert",
        "definition": "An architectural product or work.",
        "sentence": "The architecture of a computer's system software.",
        "partOfSpeech": "noun"
    },
    {
        "word": "initial",
        "valid": [
            "initial"
        ],
        "difficulty": "medium",
        "definition": "The first letter of a word (especially a person's name).",
        "sentence": "Took the initial step toward reconciliation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "label",
        "valid": [
            "label"
        ],
        "difficulty": "easy",
        "definition": "A brief description given for purposes of identification.",
        "sentence": "The artists and repertoire department of a recording label is responsible for finding new talent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "thinking",
        "valid": [
            "thinking"
        ],
        "difficulty": "hard",
        "definition": "The process of using your mind to consider something carefully.",
        "sentence": "Thinking always made him frown.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recommend",
        "valid": [
            "recommend"
        ],
        "difficulty": "hard",
        "definition": "Push for something.",
        "sentence": "If you have some troubles, I recommend you confer with him.",
        "partOfSpeech": "verb"
    },
    {
        "word": "league",
        "valid": [
            "league"
        ],
        "difficulty": "medium",
        "definition": "An association of sports teams that organizes matches for its members.",
        "sentence": "The manager has put him back in the major league.",
        "partOfSpeech": "noun"
    },
    {
        "word": "waste",
        "valid": [
            "waste"
        ],
        "difficulty": "easy",
        "definition": "Any materials unused and rejected as worthless or unwanted.",
        "sentence": "If the effort brings no compensating gain it is a waste.",
        "partOfSpeech": "noun"
    },
    {
        "word": "minute",
        "valid": [
            "minute"
        ],
        "difficulty": "medium",
        "definition": "A unit of time equal to 60 seconds or 1/60th of an hour.",
        "sentence": "He ran a 4 minute mile.",
        "partOfSpeech": "noun"
    },
    {
        "word": "provider",
        "valid": [
            "provider"
        ],
        "difficulty": "hard",
        "definition": "Someone whose business is to supply a particular service or commodity.",
        "sentence": "My husband isn't quite the provider he should be.",
        "partOfSpeech": "noun"
    },
    {
        "word": "optional",
        "valid": [
            "optional"
        ],
        "difficulty": "hard",
        "definition": "Possible but not necessary; left to personal choice.",
        "sentence": "An air conditioner is available as an optional extra.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "dictionary",
        "valid": [
            "dictionary"
        ],
        "difficulty": "expert",
        "definition": "A reference book containing an alphabetical list of words with information about them.",
        "sentence": "In a dictionary like this one there should be at least two sentences with \"fridge\".",
        "partOfSpeech": "noun"
    },
    {
        "word": "cold",
        "valid": [
            "cold"
        ],
        "difficulty": "easy",
        "definition": "A mild viral infection involving the nose and respiratory passages (but not the lungs).",
        "sentence": "Come in out of the cold.",
        "partOfSpeech": "noun"
    },
    {
        "word": "accounting",
        "valid": [
            "accounting"
        ],
        "difficulty": "expert",
        "definition": "A convincing explanation that reveals basic causes.",
        "sentence": "He was unable to give a clear accounting for his actions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "manufacturing",
        "valid": [
            "manufacturing"
        ],
        "difficulty": "expert",
        "definition": "The act of making something (a product) from raw materials.",
        "sentence": "Manufacturing is vital to Great Britain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sections",
        "valid": [
            "sections"
        ],
        "difficulty": "hard",
        "definition": "Form of section: a self-contained part of a larger composition (written or musical).",
        "sentence": "The committee divided into five sections.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chair",
        "valid": [
            "chair"
        ],
        "difficulty": "easy",
        "definition": "A seat for one person, with a support for the back.",
        "sentence": "He was awarded an endowed chair in economics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fishing",
        "valid": [
            "fishing"
        ],
        "difficulty": "medium",
        "definition": "The act of someone who fishes as a diversion.",
        "sentence": "Fishing is one of the most popular hobbies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "effort",
        "valid": [
            "effort"
        ],
        "difficulty": "medium",
        "definition": "Earnest and conscientious activity intended to do or accomplish something.",
        "sentence": "The book was her finest effort.",
        "partOfSpeech": "noun"
    },
    {
        "word": "phase",
        "valid": [
            "phase"
        ],
        "difficulty": "easy",
        "definition": "Any distinct time period in a sequence of events.",
        "sentence": "The full phase of the moon.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fields",
        "valid": [
            "fields"
        ],
        "difficulty": "medium",
        "definition": "United States comedian and film actor (1880-1946).",
        "sentence": "A small road ran across the bridge, through the fields, and over a hill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fantasy",
        "valid": [
            "fantasy"
        ],
        "difficulty": "medium",
        "definition": "Imagination unrestricted by reality.",
        "sentence": "A schoolgirl fantasy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "letters",
        "valid": [
            "letters"
        ],
        "difficulty": "medium",
        "definition": "The literary culture.",
        "sentence": "This book shows American letters at its best.",
        "partOfSpeech": "noun"
    },
    {
        "word": "motor",
        "valid": [
            "motor"
        ],
        "difficulty": "easy",
        "definition": "Machine that converts other forms of energy into mechanical energy and so imparts motion.",
        "sentence": "Happiness is the aim of all men and the motor of all action.",
        "partOfSpeech": "noun"
    },
    {
        "word": "professor",
        "valid": [
            "professor"
        ],
        "difficulty": "hard",
        "definition": "Someone who is a member of the faculty at a college or university.",
        "sentence": "The professor seemed to be lost in thought.",
        "partOfSpeech": "noun"
    },
    {
        "word": "context",
        "valid": [
            "context"
        ],
        "difficulty": "medium",
        "definition": "Discourse that surrounds a language unit and helps to determine its interpretation.",
        "sentence": "The historical context.",
        "partOfSpeech": "noun"
    },
    {
        "word": "install",
        "valid": [
            "install"
        ],
        "difficulty": "medium",
        "definition": "Set up for use.",
        "sentence": "Install the washer and dryer.",
        "partOfSpeech": "verb"
    },
    {
        "word": "shirt",
        "valid": [
            "shirt"
        ],
        "difficulty": "easy",
        "definition": "A garment worn on the upper half of the body.",
        "sentence": "You look smart in the shirt.",
        "partOfSpeech": "noun"
    },
    {
        "word": "apparel",
        "valid": [
            "apparel"
        ],
        "difficulty": "medium",
        "definition": "Clothing in general.",
        "sentence": "She was refined in her choice of apparel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "generally",
        "valid": [
            "generally"
        ],
        "difficulty": "hard",
        "definition": "Usually; as a rule.",
        "sentence": "Generally, who visits their parents more, sons or daughters?",
        "partOfSpeech": "adverb"
    },
    {
        "word": "continued",
        "valid": [
            "continued"
        ],
        "difficulty": "hard",
        "definition": "Without stop or interruption.",
        "sentence": "To insure the continued success of the war.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "foot",
        "valid": [
            "foot"
        ],
        "difficulty": "easy",
        "definition": "The part of the leg of a human being below the ankle joint.",
        "sentence": "He followed on foot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mass",
        "valid": [
            "mass"
        ],
        "difficulty": "easy",
        "definition": "The property of a body that causes it to have weight in a gravitational field.",
        "sentence": "He received a mass of correspondence.",
        "partOfSpeech": "noun"
    },
    {
        "word": "crime",
        "valid": [
            "crime"
        ],
        "difficulty": "easy",
        "definition": "An act punishable by law; usually considered an evil act.",
        "sentence": "So what if I am gay? Is it a crime?",
        "partOfSpeech": "noun"
    },
    {
        "word": "count",
        "valid": [
            "count"
        ],
        "difficulty": "easy",
        "definition": "The total number counted.",
        "sentence": "A blood count.",
        "partOfSpeech": "noun"
    },
    {
        "word": "breast",
        "valid": [
            "breast"
        ],
        "difficulty": "medium",
        "definition": "The front of the trunk from the neck to the abdomen.",
        "sentence": "He beat his breast in anger.",
        "partOfSpeech": "noun"
    },
    {
        "word": "techniques",
        "valid": [
            "techniques"
        ],
        "difficulty": "expert",
        "definition": "Form of technique: a practical method or art applied to some particular task.",
        "sentence": "To reduce misunderstandings we should learn the techniques for communicating successfully.",
        "partOfSpeech": "noun"
    },
    {
        "word": "quickly",
        "valid": [
            "quickly"
        ],
        "difficulty": "medium",
        "definition": "With speed.",
        "sentence": "He works quickly.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "dollars",
        "valid": [
            "dollars"
        ],
        "difficulty": "medium",
        "definition": "Form of dollar: the basic monetary unit in many countries; equal to 100 cents.",
        "sentence": "I owe you ten dollars.",
        "partOfSpeech": "noun"
    },
    {
        "word": "websites",
        "valid": [
            "websites"
        ],
        "difficulty": "hard",
        "definition": "Form of website: a computer connected to the internet that maintains a series of web pages on the World Wide Web.",
        "sentence": "There are very few websites in native Tartar online.",
        "partOfSpeech": "noun"
    },
    {
        "word": "religion",
        "valid": [
            "religion"
        ],
        "difficulty": "hard",
        "definition": "A strong belief in a supernatural power or powers that control human destiny.",
        "sentence": "He was raised in the Baptist religion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "claim",
        "valid": [
            "claim"
        ],
        "difficulty": "easy",
        "definition": "An assertion of a right (as to money or property).",
        "sentence": "They struck in support of their claim for a shorter work day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "driving",
        "valid": [
            "driving"
        ],
        "difficulty": "medium",
        "definition": "Hitting a golf ball off of a tee with a driver.",
        "sentence": "A driving personal ambition.",
        "partOfSpeech": "noun"
    },
    {
        "word": "permission",
        "valid": [
            "permission"
        ],
        "difficulty": "expert",
        "definition": "Approval to do something.",
        "sentence": "He asked permission to leave.",
        "partOfSpeech": "noun"
    },
    {
        "word": "surgery",
        "valid": [
            "surgery"
        ],
        "difficulty": "medium",
        "definition": "The branch of medical science that treats disease or injury by operative procedures.",
        "sentence": "He died while undergoing surgery.",
        "partOfSpeech": "noun"
    },
    {
        "word": "patch",
        "valid": [
            "patch"
        ],
        "difficulty": "easy",
        "definition": "A small contrasting part of something.",
        "sentence": "A patch of clouds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "heat",
        "valid": [
            "heat"
        ],
        "difficulty": "easy",
        "definition": "A form of energy that is transferred by a difference in temperature.",
        "sentence": "Heat the water on the stove.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wild",
        "valid": [
            "wild"
        ],
        "difficulty": "easy",
        "definition": "A wild primitive state untouched by civilization.",
        "sentence": "He lived in the wild.",
        "partOfSpeech": "noun"
    },
    {
        "word": "measures",
        "valid": [
            "measures"
        ],
        "difficulty": "hard",
        "definition": "Form of measure: any maneuver made as part of progress toward a goal.",
        "sentence": "Fire cannot be prevented by half measures.",
        "partOfSpeech": "noun"
    },
    {
        "word": "generation",
        "valid": [
            "generation"
        ],
        "difficulty": "expert",
        "definition": "All the people living at the same time or of approximately the same age.",
        "sentence": "Dams were built for the generation of electricity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kansas",
        "valid": [
            "kansas"
        ],
        "difficulty": "medium",
        "definition": "A state in midwestern United States.",
        "sentence": "We have just received an inquiry from Kansas concerning your brother.",
        "partOfSpeech": "noun"
    },
    {
        "word": "miss",
        "valid": [
            "miss"
        ],
        "difficulty": "easy",
        "definition": "A young female.",
        "sentence": "How could I miss that typo?",
        "partOfSpeech": "noun"
    },
    {
        "word": "chemical",
        "valid": [
            "chemical"
        ],
        "difficulty": "hard",
        "definition": "Material produced by or used in a reaction involving changes in atoms or molecules.",
        "sentence": "Chemical engineer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "doctor",
        "valid": [
            "doctor"
        ],
        "difficulty": "medium",
        "definition": "A licensed medical practitioner.",
        "sentence": "The children explored each other's bodies by playing the game of doctor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "task",
        "valid": [
            "task"
        ],
        "difficulty": "easy",
        "definition": "Any piece of work that is undertaken or attempted.",
        "sentence": "The endless task of classifying the samples.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reduce",
        "valid": [
            "reduce"
        ],
        "difficulty": "medium",
        "definition": "Cut down on; make a reduction in.",
        "sentence": "Reduce the influx of foreigners.",
        "partOfSpeech": "verb"
    },
    {
        "word": "brought",
        "valid": [
            "brought"
        ],
        "difficulty": "medium",
        "definition": "Form of bring: take something or somebody with oneself somewhere.",
        "sentence": "The bottles of beer that I brought to the party were redundant; the host's family owned a brewery.",
        "partOfSpeech": "verb"
    },
    {
        "word": "himself",
        "valid": [
            "himself"
        ],
        "difficulty": "medium",
        "definition": "An emphasized form of the third person masculine pronoun; -- used as a subject usually with he; as, he himself will bear the blame; used alone in the predicate, either in the no.",
        "sentence": "Johnson is a recluse; he prefers to isolate himself from the rest of the students in our class.",
        "partOfSpeech": "noun"
    },
    {
        "word": "component",
        "valid": [
            "component"
        ],
        "difficulty": "hard",
        "definition": "An abstract part of something.",
        "sentence": "A component or constituent element of a system.",
        "partOfSpeech": "noun"
    },
    {
        "word": "enable",
        "valid": [
            "enable"
        ],
        "difficulty": "medium",
        "definition": "Render capable or able for some task.",
        "sentence": "This skill will enable you to find a job on Wall Street.",
        "partOfSpeech": "verb"
    },
    {
        "word": "exercise",
        "valid": [
            "exercise"
        ],
        "difficulty": "hard",
        "definition": "The activity of exerting your muscles in various ways to keep fit.",
        "sentence": "An exercise in futility.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guarantee",
        "valid": [
            "guarantee"
        ],
        "difficulty": "hard",
        "definition": "A written assurance that some product or service will be provided or will meet certain specifications.",
        "sentence": "There is no guarantee that they are not lying.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leader",
        "valid": [
            "leader"
        ],
        "difficulty": "medium",
        "definition": "A person who rules or guides or inspires others.",
        "sentence": "Even people who don't believe in the Catholic church venerate the Pope as a symbolic leader.",
        "partOfSpeech": "noun"
    },
    {
        "word": "diamond",
        "valid": [
            "diamond"
        ],
        "difficulty": "medium",
        "definition": "A transparent piece of diamond that has been cut and polished and is valued as a precious gem.",
        "sentence": "He led a small diamond.",
        "partOfSpeech": "noun"
    },
    {
        "word": "processes",
        "valid": [
            "processes"
        ],
        "difficulty": "hard",
        "definition": "Form of process: a particular course of action intended to achieve a result.",
        "sentence": "All the same, we still need a scientific account of how exactly pains are caused by brain processes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "soft",
        "valid": [
            "soft"
        ],
        "difficulty": "easy",
        "definition": "Yielding readily to pressure or weight.",
        "sentence": "The moon cast soft shadows.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "servers",
        "valid": [
            "servers"
        ],
        "difficulty": "medium",
        "definition": "Form of server: a person whose occupation is to serve at table (as in a restaurant).",
        "sentence": "Our servers are currently experiencing heavy load.",
        "partOfSpeech": "noun"
    },
    {
        "word": "alone",
        "valid": [
            "alone"
        ],
        "difficulty": "easy",
        "definition": "Isolated from others.",
        "sentence": "The burden of proof rests on the prosecution alone.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "meetings",
        "valid": [
            "meetings"
        ],
        "difficulty": "hard",
        "definition": "Form of meeting: a formally arranged gathering.",
        "sentence": "Meetings are held every other week.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seconds",
        "valid": [
            "seconds"
        ],
        "difficulty": "medium",
        "definition": "Form of second: 1/60 of a minute; the basic unit of time adopted under the Systeme International d'Unites.",
        "sentence": "A minute has sixty seconds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "keyword",
        "valid": [
            "keyword"
        ],
        "difficulty": "medium",
        "definition": "A significant or informative word used for indexing, coding, or searching.",
        "sentence": "Tom sorted through his email messages using keyword searches.",
        "partOfSpeech": "noun"
    },
    {
        "word": "interests",
        "valid": [
            "interests"
        ],
        "difficulty": "hard",
        "definition": "Form of interest: a sense of concern with and curiosity about someone or something.",
        "sentence": "You can read any book that interests you.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flight",
        "valid": [
            "flight"
        ],
        "difficulty": "medium",
        "definition": "A formation of aircraft in flight.",
        "sentence": "His flight was an indication of his guilt.",
        "partOfSpeech": "noun"
    },
    {
        "word": "congress",
        "valid": [
            "congress"
        ],
        "difficulty": "hard",
        "definition": "The legislature of the United States government.",
        "sentence": "The lovers met discreetly for the purposes of sexual congress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fuel",
        "valid": [
            "fuel"
        ],
        "difficulty": "easy",
        "definition": "A substance that can be consumed to produce energy.",
        "sentence": "More fuel is needed during the winter months.",
        "partOfSpeech": "noun"
    },
    {
        "word": "username",
        "valid": [
            "username"
        ],
        "difficulty": "hard",
        "definition": "A unique name identifying an individual user on a computer system or network.",
        "sentence": "Check that your username and password are written correctly.",
        "partOfSpeech": "noun"
    },
    {
        "word": "walk",
        "valid": [
            "walk"
        ],
        "difficulty": "easy",
        "definition": "The act of traveling by foot.",
        "sentence": "He took a walk after lunch.",
        "partOfSpeech": "noun"
    },
    {
        "word": "produced",
        "valid": [
            "produced"
        ],
        "difficulty": "hard",
        "definition": "Form of produce: fresh fruits and vegetable grown for the market.",
        "sentence": "The discussion produced a great deal of noise, but no forward motion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "paperback",
        "valid": [
            "paperback"
        ],
        "difficulty": "hard",
        "definition": "A book with paper covers.",
        "sentence": "Is there a paperback edition of this book?",
        "partOfSpeech": "noun"
    },
    {
        "word": "classifieds",
        "valid": [
            "classifieds"
        ],
        "difficulty": "expert",
        "definition": "Form of classified: a short ad in a newspaper or magazine (usually in small print) and appearing along with other ads of the same type.",
        "sentence": "We found them in the classifieds section, next to the ones with the exotic birds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wait",
        "valid": [
            "wait"
        ],
        "difficulty": "easy",
        "definition": "Time during which some action is awaited.",
        "sentence": "The wait was an ordeal for him.",
        "partOfSpeech": "noun"
    },
    {
        "word": "supported",
        "valid": [
            "supported"
        ],
        "difficulty": "hard",
        "definition": "Sustained or maintained by aid (as distinct from physical support).",
        "sentence": "Supported joints in a railroad track have ties directly under the rail ends.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "pocket",
        "valid": [
            "pocket"
        ],
        "difficulty": "medium",
        "definition": "A small pouch inside a garment for carrying small articles.",
        "sentence": "The ball hit the pocket and gave him a perfect strike.",
        "partOfSpeech": "noun"
    },
    {
        "word": "saint",
        "valid": [
            "saint"
        ],
        "difficulty": "easy",
        "definition": "A person who has died and has been declared a saint by canonization.",
        "sentence": "It would provoke a saint.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rose",
        "valid": [
            "rose"
        ],
        "difficulty": "easy",
        "definition": "Any of many shrubs of the genus Rosa that bear roses.",
        "sentence": "The plane rose sharply before leveling off as it left the coast.",
        "partOfSpeech": "noun"
    },
    {
        "word": "freedom",
        "valid": [
            "freedom"
        ],
        "difficulty": "medium",
        "definition": "The condition of being free; the power to act or speak or think without externally imposed restraints.",
        "sentence": "You wanted to tell me about freedom?",
        "partOfSpeech": "noun"
    },
    {
        "word": "argument",
        "valid": [
            "argument"
        ],
        "difficulty": "hard",
        "definition": "A fact or assertion offered as evidence that something is true.",
        "sentence": "The editor added the argument to the poem.",
        "partOfSpeech": "noun"
    },
    {
        "word": "competition",
        "valid": [
            "competition"
        ],
        "difficulty": "expert",
        "definition": "A business relation in which two parties compete to gain customers.",
        "sentence": "He wanted to know what the competition was doing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "creating",
        "valid": [
            "creating"
        ],
        "difficulty": "hard",
        "definition": "Form of create: make or cause to be or to become.",
        "sentence": "Your behavior is creating a lot of problems.",
        "partOfSpeech": "verb"
    },
    {
        "word": "drugs",
        "valid": [
            "drugs"
        ],
        "difficulty": "easy",
        "definition": "Form of drug: a substance that is used as a medicine or narcotic.",
        "sentence": "She's selling drugs at concerts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "joint",
        "valid": [
            "joint"
        ],
        "difficulty": "easy",
        "definition": "The point of connection between two bones or elements of a skeleton (especially if it allows motion).",
        "sentence": "A joint session of Congress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "premium",
        "valid": [
            "premium"
        ],
        "difficulty": "medium",
        "definition": "Payment for insurance.",
        "sentence": "They encouraged customers with a premium for loyal patronage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "providers",
        "valid": [
            "providers"
        ],
        "difficulty": "hard",
        "definition": "Form of provider: someone whose business is to supply a particular service or commodity.",
        "sentence": "God is the best of providers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fresh",
        "valid": [
            "fresh"
        ],
        "difficulty": "easy",
        "definition": "Recently made, produced, or harvested.",
        "sentence": "Don't be fresh with me.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "characters",
        "valid": [
            "characters"
        ],
        "difficulty": "expert",
        "definition": "Form of character: an imaginary person represented in a work of fiction (play or film or story).",
        "sentence": "I always liked mysterious characters more.",
        "partOfSpeech": "noun"
    },
    {
        "word": "attorney",
        "valid": [
            "attorney"
        ],
        "difficulty": "hard",
        "definition": "A professional person authorized to practice law; conducts lawsuits or gives legal advice.",
        "sentence": "You should confer with your attorney on this matter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "upgrade",
        "valid": [
            "upgrade"
        ],
        "difficulty": "medium",
        "definition": "An upward slope or grade (as in a road).",
        "sentence": "The power plant received a new upgrade.",
        "partOfSpeech": "noun"
    },
    {
        "word": "factor",
        "valid": [
            "factor"
        ],
        "difficulty": "medium",
        "definition": "Anything that contributes causally to a result.",
        "sentence": "A key factor in her success.",
        "partOfSpeech": "noun"
    },
    {
        "word": "growing",
        "valid": [
            "growing"
        ],
        "difficulty": "medium",
        "definition": "The process of an individual organism growing organically; a purely biological unfolding of events involved in an organism changing gradually from a simple to a more complex level.",
        "sentence": "The growing season for corn.",
        "partOfSpeech": "noun"
    },
    {
        "word": "thousands",
        "valid": [
            "thousands"
        ],
        "difficulty": "hard",
        "definition": "Form of thousand: the cardinal number that is the product of 10 and 100.",
        "sentence": "We can see thousands of stars in the sky.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stream",
        "valid": [
            "stream"
        ],
        "difficulty": "medium",
        "definition": "A natural body of running water flowing on or under the earth.",
        "sentence": "He felt a stream of air.",
        "partOfSpeech": "noun"
    },
    {
        "word": "apartments",
        "valid": [
            "apartments"
        ],
        "difficulty": "expert",
        "definition": "Form of apartment: a suite of rooms usually on one floor of an apartment house.",
        "sentence": "They were vacant apartments or homes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pick",
        "valid": [
            "pick"
        ],
        "difficulty": "easy",
        "definition": "The person or thing chosen or selected.",
        "sentence": "You can take your pick.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hearing",
        "valid": [
            "hearing"
        ],
        "difficulty": "medium",
        "definition": "A proceeding (usually by a court) where evidence is taken for the purpose of determining an issue of fact and reaching a decision based on that evidence.",
        "sentence": "They make good music--you should give them a hearing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "eastern",
        "valid": [
            "eastern"
        ],
        "difficulty": "medium",
        "definition": "Lying toward or situated in the east.",
        "sentence": "An eastern wind.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "auctions",
        "valid": [
            "auctions"
        ],
        "difficulty": "hard",
        "definition": "Form of auction: a variety of bridge in which tricks made in excess of the contract are scored toward game; now generally superseded by contract bridge.",
        "sentence": "Auctions are annoying, so I bought it instantly with a buyout.",
        "partOfSpeech": "noun"
    },
    {
        "word": "therapy",
        "valid": [
            "therapy"
        ],
        "difficulty": "medium",
        "definition": "The act of caring for someone (as by medication or remedial training etc.).",
        "sentence": "Heat therapy gave the best relief.",
        "partOfSpeech": "noun"
    },
    {
        "word": "entries",
        "valid": [
            "entries"
        ],
        "difficulty": "medium",
        "definition": "Form of entry: an item inserted in a written record.",
        "sentence": "There were fifty entries for the race.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dates",
        "valid": [
            "dates"
        ],
        "difficulty": "easy",
        "definition": "Form of dat: a digital tape recording of sound.",
        "sentence": "The old church on the hill dates back to the twelfth century.",
        "partOfSpeech": "noun"
    },
    {
        "word": "generated",
        "valid": [
            "generated"
        ],
        "difficulty": "hard",
        "definition": "Form of generate: bring into existence.",
        "sentence": "Tourism generated many new jobs.",
        "partOfSpeech": "verb"
    },
    {
        "word": "signed",
        "valid": [
            "signed"
        ],
        "difficulty": "medium",
        "definition": "Having a handwritten signature.",
        "sentence": "A signed letter.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "upper",
        "valid": [
            "upper"
        ],
        "difficulty": "easy",
        "definition": "The higher of two berths.",
        "sentence": "The upper bunk.",
        "partOfSpeech": "noun"
    },
    {
        "word": "administrative",
        "valid": [
            "administrative"
        ],
        "difficulty": "expert",
        "definition": "Of or relating to or responsible for administration.",
        "sentence": "Please forward the document to the administrative office for review.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "serious",
        "valid": [
            "serious"
        ],
        "difficulty": "medium",
        "definition": "Concerned with work or important matters rather than play or trivialities.",
        "sentence": "A serious wound.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "prime",
        "valid": [
            "prime"
        ],
        "difficulty": "easy",
        "definition": "A natural number that has exactly two distinct natural number divisors: 1 and itself.",
        "sentence": "Prime a cannon.",
        "partOfSpeech": "noun"
    },
    {
        "word": "limit",
        "valid": [
            "limit"
        ],
        "difficulty": "easy",
        "definition": "The greatest possible degree of something.",
        "sentence": "To the limit of his ability.",
        "partOfSpeech": "noun"
    },
    {
        "word": "began",
        "valid": [
            "began"
        ],
        "difficulty": "easy",
        "definition": "Form of begin: Israeli statesman (born in Russia) who (as prime minister of Israel) negotiated a peace treaty with Anwar Sadat (then the president of Egypt) (1913-1992).",
        "sentence": "The bear began tearing at the tent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "steps",
        "valid": [
            "steps"
        ],
        "difficulty": "easy",
        "definition": "A flight of stairs or a flight of steps.",
        "sentence": "I followed in his steps.",
        "partOfSpeech": "noun"
    },
    {
        "word": "errors",
        "valid": [
            "errors"
        ],
        "difficulty": "medium",
        "definition": "Form of error: a wrong action attributable to bad judgment or ignorance or inattention.",
        "sentence": "Excuse me; allow me to point out three errors in the above article.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shops",
        "valid": [
            "shops"
        ],
        "difficulty": "easy",
        "definition": "Form of shop: a mercantile establishment for the retail sale of goods or services.",
        "sentence": "Local shops do good business with tourists.",
        "partOfSpeech": "noun"
    },
    {
        "word": "efforts",
        "valid": [
            "efforts"
        ],
        "difficulty": "medium",
        "definition": "Form of effort: earnest and conscientious activity intended to do or accomplish something.",
        "sentence": "Your efforts will soon pay off.",
        "partOfSpeech": "noun"
    },
    {
        "word": "informed",
        "valid": [
            "informed"
        ],
        "difficulty": "hard",
        "definition": "Having much knowledge or education.",
        "sentence": "An informed public.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "thoughts",
        "valid": [
            "thoughts"
        ],
        "difficulty": "hard",
        "definition": "Form of thought: the content of cognition; the main thing you are thinking about.",
        "sentence": "I look forward to hearing your thoughts on this matter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "creek",
        "valid": [
            "creek"
        ],
        "difficulty": "easy",
        "definition": "A natural stream of water smaller than a river (and often a tributary of a river).",
        "sentence": "The creek dried up every summer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "worked",
        "valid": [
            "worked"
        ],
        "difficulty": "medium",
        "definition": "Form of work: activity directed toward making or doing something.",
        "sentence": "You worked a lot this week.",
        "partOfSpeech": "noun"
    },
    {
        "word": "quantity",
        "valid": [
            "quantity"
        ],
        "difficulty": "hard",
        "definition": "How much there is or how many there are of something that you can quantify.",
        "sentence": "He had a quantity of ammunition.",
        "partOfSpeech": "noun"
    },
    {
        "word": "urban",
        "valid": [
            "urban"
        ],
        "difficulty": "easy",
        "definition": "Relating to or concerned with a city or densely populated area.",
        "sentence": "Urban property owners.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "practices",
        "valid": [
            "practices"
        ],
        "difficulty": "hard",
        "definition": "Form of practice: a customary way of operation or behavior.",
        "sentence": "The company didn't make any effort to improve its business practices.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sorted",
        "valid": [
            "sorted"
        ],
        "difficulty": "medium",
        "definition": "Arranged according to size.",
        "sentence": "Initially we had some problems with our computer system, but they've been sorted out now.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "reporting",
        "valid": [
            "reporting"
        ],
        "difficulty": "hard",
        "definition": "The news as presented by reporters for newspapers or radio or television.",
        "sentence": "Not a day seems to pass without newspapers reporting the war.",
        "partOfSpeech": "noun"
    },
    {
        "word": "essential",
        "valid": [
            "essential"
        ],
        "difficulty": "hard",
        "definition": "Anything indispensable.",
        "sentence": "The essential feature.",
        "partOfSpeech": "noun"
    },
    {
        "word": "myself",
        "valid": [
            "myself"
        ],
        "difficulty": "medium",
        "definition": "I or me in person; -- used for emphasis, my own self or person; as I myself will do it; I have done it myself; -- used also instead of me, as the object of the first person of a re.",
        "sentence": "I'd be unhappy, but I wouldn't kill myself.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tours",
        "valid": [
            "tours"
        ],
        "difficulty": "easy",
        "definition": "An industrial city in western France on the Loire River.",
        "sentence": "Do you offer any all-day tours?",
        "partOfSpeech": "noun"
    },
    {
        "word": "platform",
        "valid": [
            "platform"
        ],
        "difficulty": "hard",
        "definition": "A raised horizontal surface.",
        "sentence": "The speaker mounted the platform.",
        "partOfSpeech": "noun"
    },
    {
        "word": "load",
        "valid": [
            "load"
        ],
        "difficulty": "easy",
        "definition": "Weight to be borne or conveyed.",
        "sentence": "That's a load off my mind.",
        "partOfSpeech": "noun"
    },
    {
        "word": "affiliate",
        "valid": [
            "affiliate"
        ],
        "difficulty": "hard",
        "definition": "A subordinate or subsidiary associate; a person who is affiliated with another or with an organization.",
        "sentence": "Why did you decide to affiliate yourself with Company A?",
        "partOfSpeech": "noun"
    },
    {
        "word": "labor",
        "valid": [
            "labor"
        ],
        "difficulty": "easy",
        "definition": "A social class comprising those who do manual labor or work for wages.",
        "sentence": "His labor did not require a great deal of skill.",
        "partOfSpeech": "noun"
    },
    {
        "word": "immediately",
        "valid": [
            "immediately"
        ],
        "difficulty": "expert",
        "definition": "Without delay or hesitation; with no time intervening.",
        "sentence": "He answered immediately.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "admin",
        "valid": [
            "admin"
        ],
        "difficulty": "easy",
        "definition": "An administrator or supervisor of a system, website, or organization.",
        "sentence": "You do not have admin privileges.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nursing",
        "valid": [
            "nursing"
        ],
        "difficulty": "medium",
        "definition": "The work of caring for the sick or injured or infirm.",
        "sentence": "Florence Nightingale is famous as the woman who began professional nursing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "defense",
        "valid": [
            "defense"
        ],
        "difficulty": "medium",
        "definition": "Military action or resources protecting a country against potential enemies.",
        "sentence": "A good boxer needs a good defense.",
        "partOfSpeech": "noun"
    },
    {
        "word": "machines",
        "valid": [
            "machines"
        ],
        "difficulty": "hard",
        "definition": "Form of machine: any mechanical or electrical device that transmits or modifies energy to perform or assist in the performance of human tasks.",
        "sentence": "My mother prefers the arbitrary selection of the lottery machines over my lucky numbers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "designated",
        "valid": [
            "designated"
        ],
        "difficulty": "expert",
        "definition": "Form of designate: assign a name or title to.",
        "sentence": "Churches are designated on the map with crosses.",
        "partOfSpeech": "verb"
    },
    {
        "word": "tags",
        "valid": [
            "tags"
        ],
        "difficulty": "easy",
        "definition": "Form of tag: a label written or printed on paper, cardboard, or plastic that is attached to something to indicate its owner, nature, price, etc.",
        "sentence": "May I see your claim tags?",
        "partOfSpeech": "noun"
    },
    {
        "word": "heavy",
        "valid": [
            "heavy"
        ],
        "difficulty": "easy",
        "definition": "An actor who plays villainous roles.",
        "sentence": "A heavy sky.",
        "partOfSpeech": "noun"
    },
    {
        "word": "covered",
        "valid": [
            "covered"
        ],
        "difficulty": "medium",
        "definition": "Overlaid or spread or topped with or enclosed within something; sometimes used as a combining form.",
        "sentence": "Women with covered faces.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "recovery",
        "valid": [
            "recovery"
        ],
        "difficulty": "hard",
        "definition": "Return to an original state.",
        "sentence": "The recovery of the forest after the fire was surprisingly rapid.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guys",
        "valid": [
            "guys"
        ],
        "difficulty": "easy",
        "definition": "Form of guy: an informal term for a youth or man.",
        "sentence": "Who are those guys?",
        "partOfSpeech": "noun"
    },
    {
        "word": "integrated",
        "valid": [
            "integrated"
        ],
        "difficulty": "expert",
        "definition": "Formed or united into a whole.",
        "sentence": "Integrated schools.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "configuration",
        "valid": [
            "configuration"
        ],
        "difficulty": "expert",
        "definition": "An arrangement of parts or elements.",
        "sentence": "The outcome depends on the configuration of influences at the time.",
        "partOfSpeech": "noun"
    },
    {
        "word": "merchant",
        "valid": [
            "merchant"
        ],
        "difficulty": "hard",
        "definition": "A businessperson engaged in retail trade.",
        "sentence": "The rich merchant adopted the boy and made him his heir.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comprehensive",
        "valid": [
            "comprehensive"
        ],
        "difficulty": "expert",
        "definition": "An intensive examination testing a student's proficiency in some special field of knowledge.",
        "sentence": "Comprehensive coverage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "expert",
        "valid": [
            "expert"
        ],
        "difficulty": "medium",
        "definition": "A person with special knowledge or ability who performs skillfully.",
        "sentence": "An expert job.",
        "partOfSpeech": "noun"
    },
    {
        "word": "universal",
        "valid": [
            "universal"
        ],
        "difficulty": "hard",
        "definition": "A grammatical rule (or other linguistic feature) that is found in all languages.",
        "sentence": "In motor vehicles a universal joint allows the driveshaft to move up and down as the vehicle passes over bumps.",
        "partOfSpeech": "noun"
    },
    {
        "word": "protect",
        "valid": [
            "protect"
        ],
        "difficulty": "medium",
        "definition": "Shield from danger, injury, destruction, or damage.",
        "sentence": "In the days of the knights, they wore shields to protect themselves from sword-fight wounds.",
        "partOfSpeech": "verb"
    },
    {
        "word": "drop",
        "valid": [
            "drop"
        ],
        "difficulty": "easy",
        "definition": "A shape that is spherical and small.",
        "sentence": "They expected the drop would be successful.",
        "partOfSpeech": "noun"
    },
    {
        "word": "solid",
        "valid": [
            "solid"
        ],
        "difficulty": "easy",
        "definition": "Matter that is solid at room temperature and pressure.",
        "sentence": "A solid line across the page.",
        "partOfSpeech": "noun"
    },
    {
        "word": "presentation",
        "valid": [
            "presentation"
        ],
        "difficulty": "expert",
        "definition": "The activity of formally presenting something (as a prize or reward).",
        "sentence": "The presentation of new data.",
        "partOfSpeech": "noun"
    },
    {
        "word": "languages",
        "valid": [
            "languages"
        ],
        "difficulty": "hard",
        "definition": "Form of language: a systematic means of communicating by the use of sounds or conventional symbols.",
        "sentence": "It would be so cool if I could speak ten languages!",
        "partOfSpeech": "noun"
    },
    {
        "word": "became",
        "valid": [
            "became"
        ],
        "difficulty": "medium",
        "definition": "Form of become: enter or assume a certain state or condition.",
        "sentence": "With so many people around he naturally became a bit nervous.",
        "partOfSpeech": "verb"
    },
    {
        "word": "orange",
        "valid": [
            "orange"
        ],
        "difficulty": "medium",
        "definition": "Round yellow to orange fruit of any of several citrus trees.",
        "sentence": "\"Yes, orange juice please,\" says Mike.",
        "partOfSpeech": "noun"
    },
    {
        "word": "compliance",
        "valid": [
            "compliance"
        ],
        "difficulty": "expert",
        "definition": "Acting according to certain accepted standards.",
        "sentence": "We are building your house in compliance with your wishes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vehicles",
        "valid": [
            "vehicles"
        ],
        "difficulty": "hard",
        "definition": "Form of vehicle: a conveyance that transports people or objects.",
        "sentence": "Car production in that year reached a record 10 million vehicles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "prevent",
        "valid": [
            "prevent"
        ],
        "difficulty": "medium",
        "definition": "Keep from happening or arising; make impossible.",
        "sentence": "We must prevent the cancer from spreading.",
        "partOfSpeech": "verb"
    },
    {
        "word": "theme",
        "valid": [
            "theme"
        ],
        "difficulty": "easy",
        "definition": "The subject matter of a conversation or discussion.",
        "sentence": "It was the usual `boy gets girl' theme.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rich",
        "valid": [
            "rich"
        ],
        "difficulty": "easy",
        "definition": "People who have possessions and wealth (considered as a group).",
        "sentence": "Only the very rich benefit from this legislation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "campaign",
        "valid": [
            "campaign"
        ],
        "difficulty": "hard",
        "definition": "A race between candidates for elective office.",
        "sentence": "I managed his campaign for governor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "marine",
        "valid": [
            "marine"
        ],
        "difficulty": "medium",
        "definition": "A member of the United States Marine Corps.",
        "sentence": "Marine plants and animals such as seaweed and whales.",
        "partOfSpeech": "noun"
    },
    {
        "word": "improvement",
        "valid": [
            "improvement"
        ],
        "difficulty": "expert",
        "definition": "A change for the better; progress in development.",
        "sentence": "The new school represents a great improvement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guitar",
        "valid": [
            "guitar"
        ],
        "difficulty": "medium",
        "definition": "A stringed instrument usually having six strings; played by strumming or plucking.",
        "sentence": "You play the guitar quite like a professional, don't you?",
        "partOfSpeech": "noun"
    },
    {
        "word": "finding",
        "valid": [
            "finding"
        ],
        "difficulty": "medium",
        "definition": "The act of determining the properties of something, usually by research or calculation.",
        "sentence": "You're always finding fault with me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "examples",
        "valid": [
            "examples"
        ],
        "difficulty": "hard",
        "definition": "Form of example: an item of information that is typical of a class or group.",
        "sentence": "As to onomatopoetic expressions, we find interesting examples in Hopi.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ipod",
        "valid": [
            "ipod"
        ],
        "difficulty": "easy",
        "definition": "A pocket-sized device used to play music files.",
        "sentence": "Apparently the iPod nano has good sound.",
        "partOfSpeech": "noun"
    },
    {
        "word": "saying",
        "valid": [
            "saying"
        ],
        "difficulty": "medium",
        "definition": "A word or phrase that particular people use in particular situations.",
        "sentence": "I'm just saying!",
        "partOfSpeech": "noun"
    },
    {
        "word": "spirit",
        "valid": [
            "spirit"
        ],
        "difficulty": "medium",
        "definition": "The vital principle or animating force within living things.",
        "sentence": "His spirit rose.",
        "partOfSpeech": "noun"
    },
    {
        "word": "claims",
        "valid": [
            "claims"
        ],
        "difficulty": "medium",
        "definition": "Form of claim: an assertion of a right (as to money or property).",
        "sentence": "Prosecutors in court have to substantiate their claims in order to prove a suspect is guilty.",
        "partOfSpeech": "noun"
    },
    {
        "word": "challenge",
        "valid": [
            "challenge"
        ],
        "difficulty": "hard",
        "definition": "A demanding or stimulating situation.",
        "sentence": "His challenge of the assumption that Japan is still our enemy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "acceptance",
        "valid": [
            "acceptance"
        ],
        "difficulty": "expert",
        "definition": "The mental attitude that something is believable and should be accepted as true.",
        "sentence": "Her acceptance of the gift encouraged him.",
        "partOfSpeech": "noun"
    },
    {
        "word": "strategies",
        "valid": [
            "strategies"
        ],
        "difficulty": "expert",
        "definition": "Form of strategy: an elaborate and systematic plan of action.",
        "sentence": "Their hypothesis is that these strategies may come into conflict with Emmet's theory.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seem",
        "valid": [
            "seem"
        ],
        "difficulty": "easy",
        "definition": "Give a certain impression or have a certain outward aspect.",
        "sentence": "I seem to be misunderstood by everyone.",
        "partOfSpeech": "verb"
    },
    {
        "word": "affairs",
        "valid": [
            "affairs"
        ],
        "difficulty": "medium",
        "definition": "Matters of personal concern.",
        "sentence": "News of current affairs.",
        "partOfSpeech": "noun"
    },
    {
        "word": "touch",
        "valid": [
            "touch"
        ],
        "difficulty": "easy",
        "definition": "The event of something coming in contact with the body.",
        "sentence": "At his touch the room filled with lights.",
        "partOfSpeech": "noun"
    },
    {
        "word": "intended",
        "valid": [
            "intended"
        ],
        "difficulty": "hard",
        "definition": "Resulting from one's intentions.",
        "sentence": "His intended bride.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "towards",
        "valid": [
            "towards"
        ],
        "difficulty": "medium",
        "definition": "In the direction of; to. He set his face toward the wilderness. Num. xxiv. 1. The waves make towards'' the pebbled shore. Shak. 2. With direction to, in a moral sense; with resp.",
        "sentence": "What do you make of his attitude towards us these days?",
        "partOfSpeech": "noun"
    },
    {
        "word": "goals",
        "valid": [
            "goals"
        ],
        "difficulty": "easy",
        "definition": "Form of goal: the state of affairs that a plan is intended to achieve and that (when achieved) terminates behavior intended to achieve it.",
        "sentence": "More than ever do we need goals or leading ideas that will give purpose to whatever we are doing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hire",
        "valid": [
            "hire"
        ],
        "difficulty": "easy",
        "definition": "A newly hired employee.",
        "sentence": "He signed up for a week's car hire.",
        "partOfSpeech": "noun"
    },
    {
        "word": "election",
        "valid": [
            "election"
        ],
        "difficulty": "hard",
        "definition": "A vote to select the winner of a position or political office.",
        "sentence": "Her election of medicine as a profession.",
        "partOfSpeech": "noun"
    },
    {
        "word": "suggest",
        "valid": [
            "suggest"
        ],
        "difficulty": "medium",
        "definition": "Make a proposal, declare a plan for something.",
        "sentence": "The data suggest that the optimum length of a lecture may be 30 instead of 60 minutes.",
        "partOfSpeech": "verb"
    },
    {
        "word": "branch",
        "valid": [
            "branch"
        ],
        "difficulty": "medium",
        "definition": "A division of some larger or more complex organization.",
        "sentence": "A branch of the sewer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "charges",
        "valid": [
            "charges"
        ],
        "difficulty": "medium",
        "definition": "Form of charge: an impetuous rush toward someone or something.",
        "sentence": "What are the charges in this hotel?",
        "partOfSpeech": "noun"
    },
    {
        "word": "serve",
        "valid": [
            "serve"
        ],
        "difficulty": "easy",
        "definition": "A stroke that puts the ball in play.",
        "sentence": "It was Agassi's turn to serve.",
        "partOfSpeech": "noun"
    },
    {
        "word": "affiliates",
        "valid": [
            "affiliates"
        ],
        "difficulty": "expert",
        "definition": "Form of affiliate: a subordinate or subsidiary associate; a person who is affiliated with another or with an organization.",
        "sentence": "Our company may share your personal information with its affiliates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reasons",
        "valid": [
            "reasons"
        ],
        "difficulty": "medium",
        "definition": "Form of reason: a rational motive for a belief or action.",
        "sentence": "There are a good many reasons why you shouldn't do it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "magic",
        "valid": [
            "magic"
        ],
        "difficulty": "easy",
        "definition": "Any art that invokes supernatural powers.",
        "sentence": "Magic signs that protect against adverse influence.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mount",
        "valid": [
            "mount"
        ],
        "difficulty": "easy",
        "definition": "A lightweight horse kept for riding only.",
        "sentence": "The diamond was in a plain gold mount.",
        "partOfSpeech": "noun"
    },
    {
        "word": "smart",
        "valid": [
            "smart"
        ],
        "difficulty": "easy",
        "definition": "A kind of pain such as that caused by a wound or a burn or a sore.",
        "sentence": "Smart weapons.",
        "partOfSpeech": "noun"
    },
    {
        "word": "talking",
        "valid": [
            "talking"
        ],
        "difficulty": "medium",
        "definition": "An exchange of ideas via conversation.",
        "sentence": "Who am I talking with?",
        "partOfSpeech": "noun"
    },
    {
        "word": "gave",
        "valid": [
            "gave"
        ],
        "difficulty": "easy",
        "definition": "Form of give: the elasticity of something that can be stretched and returns to its original length.",
        "sentence": "What if you gave a speech and nobody came?",
        "partOfSpeech": "noun"
    },
    {
        "word": "ones",
        "valid": [
            "ones"
        ],
        "difficulty": "easy",
        "definition": "Form of on: in operation or operational.",
        "sentence": "My shoes are too small. I need new ones.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "multimedia",
        "valid": [
            "multimedia"
        ],
        "difficulty": "expert",
        "definition": "Transmission that combine media of communication (text and graphics and sound etc.).",
        "sentence": "A lot of software is available for making multimedia presentations.",
        "partOfSpeech": "noun"
    },
    {
        "word": "avoid",
        "valid": [
            "avoid"
        ],
        "difficulty": "easy",
        "definition": "Stay clear from; keep away from; keep out of the way of someone or something.",
        "sentence": "Her former friends now avoid her.",
        "partOfSpeech": "verb"
    },
    {
        "word": "certified",
        "valid": [
            "certified"
        ],
        "difficulty": "hard",
        "definition": "Endorsed authoritatively as having met certain requirements.",
        "sentence": "A certified public accountant.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "manage",
        "valid": [
            "manage"
        ],
        "difficulty": "medium",
        "definition": "Be successful; achieve a goal.",
        "sentence": "The young violinist didn't manage her bow very well.",
        "partOfSpeech": "verb"
    },
    {
        "word": "corner",
        "valid": [
            "corner"
        ],
        "difficulty": "medium",
        "definition": "A place off to the side of an area.",
        "sentence": "Standing on the corner watching all the girls go by.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rank",
        "valid": [
            "rank"
        ],
        "difficulty": "easy",
        "definition": "A row or line of people (especially soldiers or police) standing abreast of one another.",
        "sentence": "The strike was supported by the union rank and file.",
        "partOfSpeech": "noun"
    },
    {
        "word": "computing",
        "valid": [
            "computing"
        ],
        "difficulty": "hard",
        "definition": "The branch of engineering science that studies (with the aid of computers) computable processes and structures.",
        "sentence": "It's possible to branch out from computing to jobs in banking, accountancy and so on.",
        "partOfSpeech": "noun"
    },
    {
        "word": "oregon",
        "valid": [
            "oregon"
        ],
        "difficulty": "medium",
        "definition": "A state in northwestern United States on the Pacific.",
        "sentence": "Mr. Brown, a friend from Oregon, will visit us tomorrow.",
        "partOfSpeech": "noun"
    },
    {
        "word": "element",
        "valid": [
            "element"
        ],
        "difficulty": "medium",
        "definition": "An abstract part of something.",
        "sentence": "A component or constituent element of a system.",
        "partOfSpeech": "noun"
    },
    {
        "word": "birth",
        "valid": [
            "birth"
        ],
        "difficulty": "easy",
        "definition": "The time when something begins (especially life).",
        "sentence": "They celebrated the birth of their first child.",
        "partOfSpeech": "noun"
    },
    {
        "word": "virus",
        "valid": [
            "virus"
        ],
        "difficulty": "easy",
        "definition": "Ultramicroscopic infectious agent that replicates itself only within cells of living hosts; many are pathogenic; a piece of nucleic acid (DNA or RNA) wrapped in a thin coat of protein.",
        "sentence": "A true virus cannot spread to another computer without human assistance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "abuse",
        "valid": [
            "abuse"
        ],
        "difficulty": "easy",
        "definition": "Cruel or inhumane treatment.",
        "sentence": "The child showed signs of physical abuse.",
        "partOfSpeech": "noun"
    },
    {
        "word": "interactive",
        "valid": [
            "interactive"
        ],
        "difficulty": "expert",
        "definition": "Used especially of drugs or muscles that work together so the total effect is greater than the sum of the two (or more).",
        "sentence": "More and more people are rushing to make use of the interactive nature of the medium.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "requests",
        "valid": [
            "requests"
        ],
        "difficulty": "hard",
        "definition": "Form of request: a formal message requesting something that is submitted to an authority.",
        "sentence": "The mayor of this city was blamed for turning a deaf ear to the people's requests.",
        "partOfSpeech": "noun"
    },
    {
        "word": "separate",
        "valid": [
            "separate"
        ],
        "difficulty": "hard",
        "definition": "A separately printed article that originally appeared in a larger publication.",
        "sentence": "Separate the wheat from the chaff.",
        "partOfSpeech": "noun"
    },
    {
        "word": "quarter",
        "valid": [
            "quarter"
        ],
        "difficulty": "medium",
        "definition": "One of four equal parts.",
        "sentence": "He surrendered but asked for quarter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "procedure",
        "valid": [
            "procedure"
        ],
        "difficulty": "hard",
        "definition": "A particular course of action intended to achieve a result.",
        "sentence": "The procedure of obtaining a driver's license.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leadership",
        "valid": [
            "leadership"
        ],
        "difficulty": "expert",
        "definition": "The activity of leading.",
        "sentence": "His leadership inspired the team.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tables",
        "valid": [
            "tables"
        ],
        "difficulty": "medium",
        "definition": "Form of table: a set of data arranged in rows and columns.",
        "sentence": "Put the tables end to end.",
        "partOfSpeech": "noun"
    },
    {
        "word": "define",
        "valid": [
            "define"
        ],
        "difficulty": "medium",
        "definition": "Determine the essential quality of.",
        "sentence": "Define `sadness.",
        "partOfSpeech": "verb"
    },
    {
        "word": "racing",
        "valid": [
            "racing"
        ],
        "difficulty": "medium",
        "definition": "The sport of engaging in contests of speed.",
        "sentence": "Racing car drivers aren't just in it for the prize money but also for the thrill of racing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "religious",
        "valid": [
            "religious"
        ],
        "difficulty": "hard",
        "definition": "A member of a religious order who is bound by vows of poverty and chastity and obedience.",
        "sentence": "The religious or regular clergy conducts the service.",
        "partOfSpeech": "noun"
    },
    {
        "word": "facts",
        "valid": [
            "facts"
        ],
        "difficulty": "easy",
        "definition": "Form of fact: a piece of information about circumstances that exist or events that have occurred.",
        "sentence": "I take it that you are fully acquainted with the facts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "breakfast",
        "valid": [
            "breakfast"
        ],
        "difficulty": "hard",
        "definition": "The first meal of the day (usually in the morning).",
        "sentence": "We breakfast at seven.",
        "partOfSpeech": "noun"
    },
    {
        "word": "column",
        "valid": [
            "column"
        ],
        "difficulty": "medium",
        "definition": "A line of units following one after another.",
        "sentence": "He added a column of numbers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "plants",
        "valid": [
            "plants"
        ],
        "difficulty": "medium",
        "definition": "Form of plant: buildings for carrying on industrial labor.",
        "sentence": "The climate affected the growth of trees and plants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "faith",
        "valid": [
            "faith"
        ],
        "difficulty": "easy",
        "definition": "A strong belief in a supernatural power or powers that control human destiny.",
        "sentence": "Keep the faith.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chain",
        "valid": [
            "chain"
        ],
        "difficulty": "easy",
        "definition": "A series of things depending on each other as if linked together.",
        "sentence": "A chain of daisies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "developer",
        "valid": [
            "developer"
        ],
        "difficulty": "hard",
        "definition": "Someone who develops real estate (especially someone who prepares a site for residential or commercial use).",
        "sentence": "He's a late developer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "identify",
        "valid": [
            "identify"
        ],
        "difficulty": "hard",
        "definition": "Recognize as being; establish the identity of someone or something.",
        "sentence": "Some people identify success with having much money.",
        "partOfSpeech": "verb"
    },
    {
        "word": "avenue",
        "valid": [
            "avenue"
        ],
        "difficulty": "medium",
        "definition": "A line of approach.",
        "sentence": "They explored every avenue they could think of.",
        "partOfSpeech": "noun"
    },
    {
        "word": "missing",
        "valid": [
            "missing"
        ],
        "difficulty": "medium",
        "definition": "Not able to be found.",
        "sentence": "Missing in action.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "died",
        "valid": [
            "died"
        ],
        "difficulty": "easy",
        "definition": "Form of die: a small cube with 1 to 6 spots on the six faces; used in gambling to generate random numbers.",
        "sentence": "It's lonely in the saddle since the horse died.",
        "partOfSpeech": "noun"
    },
    {
        "word": "approximately",
        "valid": [
            "approximately"
        ],
        "difficulty": "expert",
        "definition": "Imprecise but fairly close to correct.",
        "sentence": "Lasted approximately an hour.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "domestic",
        "valid": [
            "domestic"
        ],
        "difficulty": "hard",
        "definition": "A servant who is paid to perform menial tasks around the household.",
        "sentence": "Domestic wine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recommendations",
        "valid": [
            "recommendations"
        ],
        "difficulty": "expert",
        "definition": "Form of recommendation: something (as a course of action) that is recommended as advisable.",
        "sentence": "I've added my recommendations to improve the situation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "moved",
        "valid": [
            "moved"
        ],
        "difficulty": "easy",
        "definition": "Being excited or provoked to the expression of an emotion.",
        "sentence": "In recent years, they have often moved.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "houston",
        "valid": [
            "houston"
        ],
        "difficulty": "medium",
        "definition": "The largest city in Texas; located in southeastern Texas near the Gulf of Mexico; site of the National Aeronautics and Space Administration.",
        "sentence": "Houston, we've had a problem here.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reach",
        "valid": [
            "reach"
        ],
        "difficulty": "easy",
        "definition": "The limits within which something can be effective.",
        "sentence": "Outside the reach of the law.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comparison",
        "valid": [
            "comparison"
        ],
        "difficulty": "expert",
        "definition": "The act of examining resemblances.",
        "sentence": "They made a comparison of noise levels.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mental",
        "valid": [
            "mental"
        ],
        "difficulty": "medium",
        "definition": "Involving the mind or an intellectual process.",
        "sentence": "A mental patient.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "viewed",
        "valid": [
            "viewed"
        ],
        "difficulty": "medium",
        "definition": "Form of view: a way of regarding situations or topics etc.",
        "sentence": "Viewed from a distance, the island looked like a cloud.",
        "partOfSpeech": "noun"
    },
    {
        "word": "moment",
        "valid": [
            "moment"
        ],
        "difficulty": "medium",
        "definition": "A particular point in time.",
        "sentence": "Virtue is of more moment than security.",
        "partOfSpeech": "noun"
    },
    {
        "word": "extended",
        "valid": [
            "extended"
        ],
        "difficulty": "hard",
        "definition": "Relatively long in duration; tediously protracted.",
        "sentence": "Extended farm lands.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "sequence",
        "valid": [
            "sequence"
        ],
        "difficulty": "hard",
        "definition": "Serial arrangement in which things follow in logical order or a recurrent pattern.",
        "sentence": "He played the trumps in sequence.",
        "partOfSpeech": "noun"
    },
    {
        "word": "inch",
        "valid": [
            "inch"
        ],
        "difficulty": "easy",
        "definition": "A unit of length equal to one twelfth of a foot.",
        "sentence": "Give him an inch and he'll take a yard.",
        "partOfSpeech": "noun"
    },
    {
        "word": "attack",
        "valid": [
            "attack"
        ],
        "difficulty": "medium",
        "definition": "An offensive against an enemy (using weapons).",
        "sentence": "They won the game with a 10-hit attack in the 9th inning.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sorry",
        "valid": [
            "sorry"
        ],
        "difficulty": "easy",
        "definition": "Feeling or expressing regret or sorrow or a sense of loss over something done or undone.",
        "sentence": "A sorry state of affairs.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "centers",
        "valid": [
            "centers"
        ],
        "difficulty": "medium",
        "definition": "Form of center: an area that is approximately central within some larger region.",
        "sentence": "Tokyo, as you know, is one of the financial centers of the world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "opening",
        "valid": [
            "opening"
        ],
        "difficulty": "medium",
        "definition": "An open or empty space in or between things.",
        "sentence": "The ray of light revealed his cautious opening of the door.",
        "partOfSpeech": "noun"
    },
    {
        "word": "damage",
        "valid": [
            "damage"
        ],
        "difficulty": "medium",
        "definition": "The occurrence of a change for the worse.",
        "sentence": "How much is the damage?",
        "partOfSpeech": "noun"
    },
    {
        "word": "reserve",
        "valid": [
            "reserve"
        ],
        "difficulty": "medium",
        "definition": "Formality and propriety of manner.",
        "sentence": "We managed to reserve a table at Maxim's.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recipes",
        "valid": [
            "recipes"
        ],
        "difficulty": "medium",
        "definition": "Form of recipe: directions for making something.",
        "sentence": "I found a cache of my grandmother's recipes stuffed away in the back of a drawer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gamma",
        "valid": [
            "gamma"
        ],
        "difficulty": "easy",
        "definition": "The 3rd letter of the Greek alphabet.",
        "sentence": "Our sales organization for Gamma is not strong.",
        "partOfSpeech": "noun"
    },
    {
        "word": "plastic",
        "valid": [
            "plastic"
        ],
        "difficulty": "medium",
        "definition": "Generic name for certain synthetic or semisynthetic materials that can be molded or extruded into objects or films or filaments or used for making e.g. coatings and adhesives.",
        "sentence": "Do you take plastic?",
        "partOfSpeech": "noun"
    },
    {
        "word": "produce",
        "valid": [
            "produce"
        ],
        "difficulty": "medium",
        "definition": "Fresh fruits and vegetable grown for the market.",
        "sentence": "We produce more cars than we can sell.",
        "partOfSpeech": "noun"
    },
    {
        "word": "snow",
        "valid": [
            "snow"
        ],
        "difficulty": "easy",
        "definition": "Precipitation falling from clouds in the form of ice crystals.",
        "sentence": "Judging from the look of the sky, we may have snow tomorrow.",
        "partOfSpeech": "noun"
    },
    {
        "word": "placed",
        "valid": [
            "placed"
        ],
        "difficulty": "medium",
        "definition": "Situated in a particular spot or position.",
        "sentence": "End tables placed conveniently.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "truth",
        "valid": [
            "truth"
        ],
        "difficulty": "easy",
        "definition": "A fact that has been verified.",
        "sentence": "The lawyer questioned the truth of my account.",
        "partOfSpeech": "noun"
    },
    {
        "word": "counter",
        "valid": [
            "counter"
        ],
        "difficulty": "medium",
        "definition": "Table consisting of a horizontal surface over which business is transacted.",
        "sentence": "A counter may be used to stiffen the material around the heel and to give support to the foot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "failure",
        "valid": [
            "failure"
        ],
        "difficulty": "medium",
        "definition": "An act that fails.",
        "sentence": "He resented my failure to return his call.",
        "partOfSpeech": "noun"
    },
    {
        "word": "follows",
        "valid": [
            "follows"
        ],
        "difficulty": "medium",
        "definition": "Form of follow: to travel behind, go after, come after.",
        "sentence": "If your answer is correct, it follows that mine is wrong.",
        "partOfSpeech": "verb"
    },
    {
        "word": "weekend",
        "valid": [
            "weekend"
        ],
        "difficulty": "medium",
        "definition": "A time period usually extending from Friday night through Sunday; more loosely defined as any period of successive days including one and only one Sunday.",
        "sentence": "She got sick this weekend.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dollar",
        "valid": [
            "dollar"
        ],
        "difficulty": "medium",
        "definition": "The basic monetary unit in many countries; equal to 100 cents.",
        "sentence": "He worships the almighty dollar.",
        "partOfSpeech": "noun"
    },
    {
        "word": "camp",
        "valid": [
            "camp"
        ],
        "difficulty": "easy",
        "definition": "Temporary living quarters specially built by the army for soldiers.",
        "sentence": "Wherever he went in the camp the men were grumbling.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ontario",
        "valid": [
            "ontario"
        ],
        "difficulty": "medium",
        "definition": "The smallest of the Great Lakes.",
        "sentence": "This river runs into Lake Ontario.",
        "partOfSpeech": "noun"
    },
    {
        "word": "automatically",
        "valid": [
            "automatically"
        ],
        "difficulty": "expert",
        "definition": "In a reflex manner.",
        "sentence": "He answered automatically.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "minnesota",
        "valid": [
            "minnesota"
        ],
        "difficulty": "hard",
        "definition": "A midwestern state.",
        "sentence": "Mosquitoes in Minnesota are as big as storks.",
        "partOfSpeech": "noun"
    },
    {
        "word": "films",
        "valid": [
            "films"
        ],
        "difficulty": "easy",
        "definition": "Form of film: a form of entertainment that enacts a story by sound and a sequence of images giving the illusion of continuous movement.",
        "sentence": "Do you enjoy plays, films and such?",
        "partOfSpeech": "noun"
    },
    {
        "word": "bridge",
        "valid": [
            "bridge"
        ],
        "difficulty": "medium",
        "definition": "A structure that allows people or vehicles to cross an obstacle such as a river or canal or railway etc.",
        "sentence": "Her glasses left marks on the bridge of her nose.",
        "partOfSpeech": "noun"
    },
    {
        "word": "native",
        "valid": [
            "native"
        ],
        "difficulty": "medium",
        "definition": "An indigenous person who was born in a particular place.",
        "sentence": "He is a native of Brazil.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fill",
        "valid": [
            "fill"
        ],
        "difficulty": "easy",
        "definition": "A quantity sufficient to satisfy.",
        "sentence": "He ate his fill of potatoes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "movement",
        "valid": [
            "movement"
        ],
        "difficulty": "hard",
        "definition": "A change of position that does not entail a change of location.",
        "sentence": "The movement of people from the farms to the cities.",
        "partOfSpeech": "noun"
    },
    {
        "word": "printing",
        "valid": [
            "printing"
        ],
        "difficulty": "hard",
        "definition": "Text handwritten in the style of printed matter.",
        "sentence": "They ran off an initial printing of 2000 copies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "baseball",
        "valid": [
            "baseball"
        ],
        "difficulty": "hard",
        "definition": "A ball game played with a bat and ball between two teams of nine players; teams take turns at bat trying to score runs.",
        "sentence": "He played baseball in high school.",
        "partOfSpeech": "noun"
    },
    {
        "word": "owned",
        "valid": [
            "owned"
        ],
        "difficulty": "easy",
        "definition": "Having an owner; often used in combination.",
        "sentence": "State-owned railways.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "approval",
        "valid": [
            "approval"
        ],
        "difficulty": "hard",
        "definition": "The formal act of approving.",
        "sentence": "His decision merited the approval of any sensible person.",
        "partOfSpeech": "noun"
    },
    {
        "word": "draft",
        "valid": [
            "draft"
        ],
        "difficulty": "easy",
        "definition": "A document ordering the payment of money; drawn by one person or bank on another.",
        "sentence": "He took a sleeping draft.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chart",
        "valid": [
            "chart"
        ],
        "difficulty": "easy",
        "definition": "A visual display of information.",
        "sentence": "Chart the territory.",
        "partOfSpeech": "noun"
    },
    {
        "word": "played",
        "valid": [
            "played"
        ],
        "difficulty": "medium",
        "definition": "Engaged in.",
        "sentence": "The loosely played game.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "contacts",
        "valid": [
            "contacts"
        ],
        "difficulty": "hard",
        "definition": "Form of contact: close interaction.",
        "sentence": "I fell asleep with my contacts in.",
        "partOfSpeech": "noun"
    },
    {
        "word": "readers",
        "valid": [
            "readers"
        ],
        "difficulty": "medium",
        "definition": "Form of reader: a person who enjoys reading.",
        "sentence": "This book is suitable for general readers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "clubs",
        "valid": [
            "clubs"
        ],
        "difficulty": "easy",
        "definition": "Form of club: a team of professional baseball players who play and travel together.",
        "sentence": "Do you belong to any clubs?",
        "partOfSpeech": "noun"
    },
    {
        "word": "equal",
        "valid": [
            "equal"
        ],
        "difficulty": "easy",
        "definition": "A person who is of equal standing with another in a group.",
        "sentence": "He was equal to the task.",
        "partOfSpeech": "noun"
    },
    {
        "word": "adventure",
        "valid": [
            "adventure"
        ],
        "difficulty": "hard",
        "definition": "A wild and exciting undertaking (not necessarily lawful).",
        "sentence": "Dangers give relish to an adventure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "matching",
        "valid": [
            "matching"
        ],
        "difficulty": "hard",
        "definition": "Being two identical.",
        "sentence": "Did you see that couple in matching outfits just now? How tasteless!",
        "partOfSpeech": "adjective"
    },
    {
        "word": "offering",
        "valid": [
            "offering"
        ],
        "difficulty": "hard",
        "definition": "Something offered (as a proposal or bid).",
        "sentence": "Management tried to appease labor by offering them a bonus.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shirts",
        "valid": [
            "shirts"
        ],
        "difficulty": "medium",
        "definition": "Form of shirt: a garment worn on the upper half of the body.",
        "sentence": "He's a pretty unique guy, wearing bell bottoms and Hawaiian shirts to the office.",
        "partOfSpeech": "noun"
    },
    {
        "word": "profit",
        "valid": [
            "profit"
        ],
        "difficulty": "medium",
        "definition": "The excess of revenues over outlays in a given period of time (including depreciation and other non-cash expenses).",
        "sentence": "Stock investments do not always yield profit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leaders",
        "valid": [
            "leaders"
        ],
        "difficulty": "medium",
        "definition": "The body of people who lead a group.",
        "sentence": "Our public leaders are imaginative and often come up with new ideas.",
        "partOfSpeech": "noun"
    },
    {
        "word": "posters",
        "valid": [
            "posters"
        ],
        "difficulty": "medium",
        "definition": "Form of poster: a sign posted in a public place as an advertisement.",
        "sentence": "The posters were immediately removed from the wall.",
        "partOfSpeech": "noun"
    },
    {
        "word": "institutions",
        "valid": [
            "institutions"
        ],
        "difficulty": "expert",
        "definition": "Form of institution: an organization founded and united for a specific purpose.",
        "sentence": "People want more money to expand educational institutions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "assistant",
        "valid": [
            "assistant"
        ],
        "difficulty": "hard",
        "definition": "A person who contributes to the fulfillment of a need or furtherance of an effort or purpose.",
        "sentence": "My invaluable assistant.",
        "partOfSpeech": "noun"
    },
    {
        "word": "variable",
        "valid": [
            "variable"
        ],
        "difficulty": "hard",
        "definition": "Something that is likely to vary; something that is subject to variation.",
        "sentence": "The weather is one variable to be considered.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advertisement",
        "valid": [
            "advertisement"
        ],
        "difficulty": "expert",
        "definition": "A public promotion of some product or service.",
        "sentence": "The job advertisement specifically requested females.",
        "partOfSpeech": "noun"
    },
    {
        "word": "expect",
        "valid": [
            "expect"
        ],
        "difficulty": "medium",
        "definition": "Regard something as probable or likely.",
        "sentence": "I expect my students to arrive in time for their lessons.",
        "partOfSpeech": "verb"
    },
    {
        "word": "parking",
        "valid": [
            "parking"
        ],
        "difficulty": "medium",
        "definition": "Space in which vehicles can be parked.",
        "sentence": "There is plenty of parking behind the store.",
        "partOfSpeech": "noun"
    },
    {
        "word": "headlines",
        "valid": [
            "headlines"
        ],
        "difficulty": "hard",
        "definition": "Form of headline: the heading or caption of a newspaper article.",
        "sentence": "The actor's death made big headlines in all the papers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "yesterday",
        "valid": [
            "yesterday"
        ],
        "difficulty": "hard",
        "definition": "The day immediately before today.",
        "sentence": "It was in yesterday's newspapers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "compared",
        "valid": [
            "compared"
        ],
        "difficulty": "hard",
        "definition": "Form of compare: qualities that are comparable.",
        "sentence": "Compared with yours, my car is small.",
        "partOfSpeech": "noun"
    },
    {
        "word": "determined",
        "valid": [
            "determined"
        ],
        "difficulty": "expert",
        "definition": "Characterized by great determination.",
        "sentence": "A struggle against a determined enemy.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "wholesale",
        "valid": [
            "wholesale"
        ],
        "difficulty": "hard",
        "definition": "The selling of goods to merchants; usually in large quantities for resale to consumers.",
        "sentence": "Wholesale destruction.",
        "partOfSpeech": "noun"
    },
    {
        "word": "workshop",
        "valid": [
            "workshop"
        ],
        "difficulty": "hard",
        "definition": "Small workplace where handcrafts or manufacturing are done.",
        "sentence": "Please give us a call now if you want to participate in the workshop.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gone",
        "valid": [
            "gone"
        ],
        "difficulty": "easy",
        "definition": "Destroyed or killed.",
        "sentence": "Sweet memories of gone summers.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "codes",
        "valid": [
            "codes"
        ],
        "difficulty": "easy",
        "definition": "Form of cod: the vessel that contains the seeds of a plant (not the seeds themselves).",
        "sentence": "This violates about a million penal codes and every holy book there is.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kinds",
        "valid": [
            "kinds"
        ],
        "difficulty": "easy",
        "definition": "Form of kind: a category of things distinguished by some common characteristic or quality.",
        "sentence": "What kinds of sports do you go in for these days?",
        "partOfSpeech": "noun"
    },
    {
        "word": "extension",
        "valid": [
            "extension"
        ],
        "difficulty": "hard",
        "definition": "A mutually agreed delay in the date set for the completion of a job or payment of a debt.",
        "sentence": "Extension of the program to all in need.",
        "partOfSpeech": "noun"
    },
    {
        "word": "statements",
        "valid": [
            "statements"
        ],
        "difficulty": "expert",
        "definition": "Form of statement: a message that is stated or declared; a communication (oral or written) setting forth particulars or facts etc.",
        "sentence": "Kathleen's statements turned out to be true.",
        "partOfSpeech": "noun"
    },
    {
        "word": "golden",
        "valid": [
            "golden"
        ],
        "difficulty": "medium",
        "definition": "Having the deep slightly brownish color of gold.",
        "sentence": "A golden voice.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "completely",
        "valid": [
            "completely"
        ],
        "difficulty": "expert",
        "definition": "To a complete degree or to the full or entire extent (`whole' is often used informally for `wholly').",
        "sentence": "It was completely different from what we expected.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "teams",
        "valid": [
            "teams"
        ],
        "difficulty": "easy",
        "definition": "Form of team: a cooperative unit (especially in sports).",
        "sentence": "We've been matched up with some strong teams this year.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fort",
        "valid": [
            "fort"
        ],
        "difficulty": "easy",
        "definition": "A fortified military post where troops are stationed.",
        "sentence": "The fort was attacked by surprise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lighting",
        "valid": [
            "lighting"
        ],
        "difficulty": "hard",
        "definition": "Having abundant light or illumination.",
        "sentence": "An interior decorator must understand lighting.",
        "partOfSpeech": "noun"
    },
    {
        "word": "senate",
        "valid": [
            "senate"
        ],
        "difficulty": "medium",
        "definition": "Assembly possessing high legislative powers.",
        "sentence": "He was elected to the Senate in the last election.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forces",
        "valid": [
            "forces"
        ],
        "difficulty": "medium",
        "definition": "Form of force: a powerful effect or influence.",
        "sentence": "The President says we must beef up our military forces.",
        "partOfSpeech": "noun"
    },
    {
        "word": "funny",
        "valid": [
            "funny"
        ],
        "difficulty": "easy",
        "definition": "An account of an amusing incident (usually with a punch line).",
        "sentence": "She told a funny story.",
        "partOfSpeech": "noun"
    },
    {
        "word": "brother",
        "valid": [
            "brother"
        ],
        "difficulty": "medium",
        "definition": "A male with the same parents as someone else.",
        "sentence": "My brother still lives with our parents.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gene",
        "valid": [
            "gene"
        ],
        "difficulty": "easy",
        "definition": "A segment of DNA that is involved in producing a polypeptide chain; it can include regions preceding and following the coding DNA as well as introns between the exons; it is considered a unit of heredity.",
        "sentence": "DNA is a complex chemical that makes up a gene.",
        "partOfSpeech": "noun"
    },
    {
        "word": "turned",
        "valid": [
            "turned"
        ],
        "difficulty": "medium",
        "definition": "Moved around an axis or center.",
        "sentence": "Have you turned in your report?",
        "partOfSpeech": "adjective"
    },
    {
        "word": "portable",
        "valid": [
            "portable"
        ],
        "difficulty": "hard",
        "definition": "A small light typewriter; usually with a case in which it can be carried.",
        "sentence": "A portable outboard motor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tried",
        "valid": [
            "tried"
        ],
        "difficulty": "easy",
        "definition": "Tested and proved useful or correct.",
        "sentence": "Democracy is the worst form of government, except all the others that have been tried.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "electrical",
        "valid": [
            "electrical"
        ],
        "difficulty": "expert",
        "definition": "Relating to or concerned with electricity.",
        "sentence": "An electrical engineer.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "applicable",
        "valid": [
            "applicable"
        ],
        "difficulty": "expert",
        "definition": "Capable of being applied; having relevance.",
        "sentence": "Gave applicable examples to support her argument.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "disc",
        "valid": [
            "disc"
        ],
        "difficulty": "easy",
        "definition": "Sound recording consisting of a disk with a continuous groove; used to reproduce music by rotating while a phonograph needle tracks in the groove.",
        "sentence": "The watch on the compact disc is mine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "returned",
        "valid": [
            "returned"
        ],
        "difficulty": "hard",
        "definition": "Form of return: document giving the tax collector information about the taxpayer's tax liability.",
        "sentence": "I am glad that you have returned safe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pattern",
        "valid": [
            "pattern"
        ],
        "difficulty": "medium",
        "definition": "A perceptual structure.",
        "sentence": "They changed their dietary pattern.",
        "partOfSpeech": "noun"
    },
    {
        "word": "boat",
        "valid": [
            "boat"
        ],
        "difficulty": "easy",
        "definition": "A small vessel for travel on water.",
        "sentence": "I want a boat that will take me far away from here.",
        "partOfSpeech": "noun"
    },
    {
        "word": "named",
        "valid": [
            "named"
        ],
        "difficulty": "easy",
        "definition": "Form of name: a language unit by which a person or thing is known.",
        "sentence": "We named my son after my grandfather.",
        "partOfSpeech": "noun"
    },
    {
        "word": "theatre",
        "valid": [
            "theatre"
        ],
        "difficulty": "medium",
        "definition": "A building where theatrical performances or motion-picture shows can be presented.",
        "sentence": "I showed my ticket to the doorman and went into the theatre.",
        "partOfSpeech": "noun"
    },
    {
        "word": "laser",
        "valid": [
            "laser"
        ],
        "difficulty": "easy",
        "definition": "An acronym for light amplification by stimulated emission of radiation; an optical device that produces an intense monochromatic beam of coherent light.",
        "sentence": "Laser rays are used in the restoration of ancient works.",
        "partOfSpeech": "noun"
    },
    {
        "word": "earlier",
        "valid": [
            "earlier"
        ],
        "difficulty": "medium",
        "definition": "(comparative and superlative of `early') more early than; most early.",
        "sentence": "A fashion popular in earlier times.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "manufacturers",
        "valid": [
            "manufacturers"
        ],
        "difficulty": "expert",
        "definition": "Form of manufacturer: a business engaged in manufacturing some product.",
        "sentence": "So from then on, manufacturers had to pay real cash.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sponsor",
        "valid": [
            "sponsor"
        ],
        "difficulty": "medium",
        "definition": "Someone who supports or champions something.",
        "sentence": "The senator announced that he would sponsor the health care plan.",
        "partOfSpeech": "noun"
    },
    {
        "word": "classical",
        "valid": [
            "classical"
        ],
        "difficulty": "hard",
        "definition": "Traditional genre of music conforming to an established form and appealing to critical interest and developed musical taste.",
        "sentence": "Classical Marxism.",
        "partOfSpeech": "noun"
    },
    {
        "word": "icon",
        "valid": [
            "icon"
        ],
        "difficulty": "easy",
        "definition": "A graphic symbol (usually a simple picture) that denotes a program or a command or a data file or a concept in a graphical user interface.",
        "sentence": "Double-click on the icon.",
        "partOfSpeech": "noun"
    },
    {
        "word": "warranty",
        "valid": [
            "warranty"
        ],
        "difficulty": "hard",
        "definition": "A written assurance that some product or service will be provided or will meet certain specifications.",
        "sentence": "The warranty doesn't cover normal wear and tear.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dedicated",
        "valid": [
            "dedicated"
        ],
        "difficulty": "hard",
        "definition": "Devoted to a cause or ideal or purpose; \"dedicated to the proposition that all men are created equal\"- A.Lincoln.",
        "sentence": "A dedicated dancer.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "direction",
        "valid": [
            "direction"
        ],
        "difficulty": "hard",
        "definition": "A line leading to a place or point.",
        "sentence": "A new council was installed under the direction of the king.",
        "partOfSpeech": "noun"
    },
    {
        "word": "harry",
        "valid": [
            "harry"
        ],
        "difficulty": "easy",
        "definition": "Annoy continually or chronically.",
        "sentence": "He is known to harry his staff when he is overworked.",
        "partOfSpeech": "verb"
    },
    {
        "word": "basketball",
        "valid": [
            "basketball"
        ],
        "difficulty": "expert",
        "definition": "A game played on a court by two opposing teams of 5 players; points are scored by throwing the ball through an elevated horizontal hoop.",
        "sentence": "Mike doesn't practice basketball on Monday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "objects",
        "valid": [
            "objects"
        ],
        "difficulty": "medium",
        "definition": "Form of object: a tangible and visible entity; an entity that can cast a shadow.",
        "sentence": "Blind people sometimes develop a compensatory ability to sense the proximity of objects around them.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ends",
        "valid": [
            "ends"
        ],
        "difficulty": "easy",
        "definition": "Form of end: either extremity of something that has length.",
        "sentence": "No money, no job, no friends. He was truly at loose ends.",
        "partOfSpeech": "noun"
    },
    {
        "word": "delete",
        "valid": [
            "delete"
        ],
        "difficulty": "medium",
        "definition": "Remove or make invisible.",
        "sentence": "Please delete my name from your list.",
        "partOfSpeech": "verb"
    },
    {
        "word": "evening",
        "valid": [
            "evening"
        ],
        "difficulty": "medium",
        "definition": "The latter part of the day (the period of decreasing daylight from late afternoon until nightfall).",
        "sentence": "He enjoyed the evening light across the lake.",
        "partOfSpeech": "noun"
    },
    {
        "word": "assembly",
        "valid": [
            "assembly"
        ],
        "difficulty": "hard",
        "definition": "A group of machine parts that fit together to form a self-contained unit.",
        "sentence": "They demanded the right of assembly.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nuclear",
        "valid": [
            "nuclear"
        ],
        "difficulty": "medium",
        "definition": "Deriving destructive energy from the release of atomic energy.",
        "sentence": "Annexation of the suburban fringe by the nuclear metropolis.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "taxes",
        "valid": [
            "taxes"
        ],
        "difficulty": "easy",
        "definition": "Form of tax: charge against a citizen's person or property or activity for the support of government.",
        "sentence": "Life begins when you pay taxes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mouse",
        "valid": [
            "mouse"
        ],
        "difficulty": "easy",
        "definition": "Any of numerous small rodents typically resembling diminutive rats having pointed snouts and small ears on elongated bodies with slender usually hairless tails.",
        "sentence": "A mouse takes much more room than a trackball.",
        "partOfSpeech": "noun"
    },
    {
        "word": "signal",
        "valid": [
            "signal"
        ],
        "difficulty": "medium",
        "definition": "Any nonverbal action or gesture that encodes a message.",
        "sentence": "He awaited the signal to start.",
        "partOfSpeech": "noun"
    },
    {
        "word": "criminal",
        "valid": [
            "criminal"
        ],
        "difficulty": "hard",
        "definition": "Someone who has committed a crime or has been legally convicted of a crime.",
        "sentence": "Criminal in the sight of God and man.",
        "partOfSpeech": "noun"
    },
    {
        "word": "issued",
        "valid": [
            "issued"
        ],
        "difficulty": "medium",
        "definition": "Form of issue: an important question that is in dispute and must be settled.",
        "sentence": "The magazine is issued twice a month.",
        "partOfSpeech": "noun"
    },
    {
        "word": "brain",
        "valid": [
            "brain"
        ],
        "difficulty": "easy",
        "definition": "That part of the central nervous system that includes all the higher nervous centers; enclosed within the skull; continuous with the spinal cord.",
        "sentence": "There are days where I feel like my brain wants to abandon me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sexual",
        "valid": [
            "sexual"
        ],
        "difficulty": "medium",
        "definition": "Of or relating to or characterized by sexuality.",
        "sentence": "The intimate (or sexual) relations between husband and wife.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "wisconsin",
        "valid": [
            "wisconsin"
        ],
        "difficulty": "hard",
        "definition": "A tributary of the Mississippi River in Wisconsin.",
        "sentence": "Many children in Wisconsin play hockey in the winter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "powerful",
        "valid": [
            "powerful"
        ],
        "difficulty": "hard",
        "definition": "Having great power or force or potency or effect.",
        "sentence": "The most powerful government in western Europe.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "dream",
        "valid": [
            "dream"
        ],
        "difficulty": "easy",
        "definition": "A series of mental images and emotions occurring during sleep.",
        "sentence": "I have this pipe dream about being emperor of the universe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "obtained",
        "valid": [
            "obtained"
        ],
        "difficulty": "hard",
        "definition": "Form of obtain: come into possession of.",
        "sentence": "I obtained the painting at an auction.",
        "partOfSpeech": "verb"
    },
    {
        "word": "false",
        "valid": [
            "false"
        ],
        "difficulty": "easy",
        "definition": "Not in accordance with the fact or reality or actuality.",
        "sentence": "A false friend.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "cast",
        "valid": [
            "cast"
        ],
        "difficulty": "easy",
        "definition": "The actors in a play.",
        "sentence": "The delicate cast of his features.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flower",
        "valid": [
            "flower"
        ],
        "difficulty": "medium",
        "definition": "A plant cultivated for its blooms or blossoms.",
        "sentence": "There is a flower shop near by.",
        "partOfSpeech": "noun"
    },
    {
        "word": "felt",
        "valid": [
            "felt"
        ],
        "difficulty": "easy",
        "definition": "A fabric made of compressed matted animal fibers.",
        "sentence": "Felt a cap.",
        "partOfSpeech": "noun"
    },
    {
        "word": "personnel",
        "valid": [
            "personnel"
        ],
        "difficulty": "hard",
        "definition": "Group of people willing to obey orders.",
        "sentence": "I will not be dictated to by some idiot in the personnel department.",
        "partOfSpeech": "noun"
    },
    {
        "word": "passed",
        "valid": [
            "passed"
        ],
        "difficulty": "medium",
        "definition": "Form of pass: (baseball) an advance to first base by a batter who receives four balls.",
        "sentence": "Time has passed very fast.",
        "partOfSpeech": "noun"
    },
    {
        "word": "supplied",
        "valid": [
            "supplied"
        ],
        "difficulty": "hard",
        "definition": "Form of supply: an amount of something available for use.",
        "sentence": "Any goods can be supplied at a day's notice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "identified",
        "valid": [
            "identified"
        ],
        "difficulty": "expert",
        "definition": "Having the identity known or established.",
        "sentence": "The identified bodies were released for burial.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "falls",
        "valid": [
            "falls"
        ],
        "difficulty": "easy",
        "definition": "The petals or sepals of a flower that bend downward (especially the outer perianth of an iris).",
        "sentence": "He who wears armor falls with a big crash!",
        "partOfSpeech": "noun"
    },
    {
        "word": "soul",
        "valid": [
            "soul"
        ],
        "difficulty": "easy",
        "definition": "The immaterial part of a person; the actuating cause of an individual life.",
        "sentence": "The soul of honor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "aids",
        "valid": [
            "aids"
        ],
        "difficulty": "easy",
        "definition": "A serious (often fatal) disease of the immune system transmitted through blood products especially by sexual contact or contaminated needles.",
        "sentence": "In the near future, we will be able to put an end to AIDS.",
        "partOfSpeech": "noun"
    },
    {
        "word": "opinions",
        "valid": [
            "opinions"
        ],
        "difficulty": "hard",
        "definition": "Form of opinion: a personal belief or judgment that is not founded on proof or certainty.",
        "sentence": "Don't press your opinions on me.",
        "partOfSpeech": "noun"
    },
    {
        "word": "promote",
        "valid": [
            "promote"
        ],
        "difficulty": "medium",
        "definition": "Contribute to the progress or growth of.",
        "sentence": "We must promote commerce with neighboring countries.",
        "partOfSpeech": "verb"
    },
    {
        "word": "stated",
        "valid": [
            "stated"
        ],
        "difficulty": "medium",
        "definition": "Declared as fact; explicitly stated.",
        "sentence": "You will find it stated a few pages further on.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "stats",
        "valid": [
            "stats"
        ],
        "difficulty": "easy",
        "definition": "Short for statistics; numerical data or information collected for study.",
        "sentence": "Check out these stats.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hawaii",
        "valid": [
            "hawaii"
        ],
        "difficulty": "medium",
        "definition": "A state in the United States in the central Pacific on the Hawaiian Islands.",
        "sentence": "He said he had been to Hawaii before.",
        "partOfSpeech": "noun"
    },
    {
        "word": "professionals",
        "valid": [
            "professionals"
        ],
        "difficulty": "expert",
        "definition": "Form of professional: a person engaged in one of the learned professions.",
        "sentence": "Is it a good idea to hire former hackers to work as security professionals?",
        "partOfSpeech": "noun"
    },
    {
        "word": "appears",
        "valid": [
            "appears"
        ],
        "difficulty": "medium",
        "definition": "Form of appear: give a certain impression or have a certain outward aspect.",
        "sentence": "It appears that you have made a foolish mistake.",
        "partOfSpeech": "verb"
    },
    {
        "word": "carry",
        "valid": [
            "carry"
        ],
        "difficulty": "easy",
        "definition": "The act of carrying something.",
        "sentence": "He cannot carry a tune.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flag",
        "valid": [
            "flag"
        ],
        "difficulty": "easy",
        "definition": "Emblem usually consisting of a rectangular piece of cloth of distinctive design.",
        "sentence": "Flag this file so that I can recognize it immediately.",
        "partOfSpeech": "noun"
    },
    {
        "word": "decided",
        "valid": [
            "decided"
        ],
        "difficulty": "medium",
        "definition": "Recognizable; marked.",
        "sentence": "At a distinct (or decided) disadvantage.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "covers",
        "valid": [
            "covers"
        ],
        "difficulty": "medium",
        "definition": "Form of cover: a covering that serves to conceal or shelter something.",
        "sentence": "The sea covers nearly three-fourths of the earth's surface.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advantage",
        "valid": [
            "advantage"
        ],
        "difficulty": "hard",
        "definition": "The quality of having a superior or more favorable position.",
        "sentence": "It turned out to my advantage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hello",
        "valid": [
            "hello"
        ],
        "difficulty": "easy",
        "definition": "An expression of greeting.",
        "sentence": "Hello? Are you still here?",
        "partOfSpeech": "noun"
    },
    {
        "word": "designs",
        "valid": [
            "designs"
        ],
        "difficulty": "medium",
        "definition": "Form of design: the act of working out the form of something (as by making a sketch or outline or plan).",
        "sentence": "The approaches used in those two designs are exactly alike.",
        "partOfSpeech": "noun"
    },
    {
        "word": "maintain",
        "valid": [
            "maintain"
        ],
        "difficulty": "hard",
        "definition": "Cause to continue in a certain state, position, or activity; e.g., `keep clean'.",
        "sentence": "Maintain a record.",
        "partOfSpeech": "verb"
    },
    {
        "word": "tourism",
        "valid": [
            "tourism"
        ],
        "difficulty": "medium",
        "definition": "The business of providing services to tourists.",
        "sentence": "Tourism is a major business in Bermuda.",
        "partOfSpeech": "noun"
    },
    {
        "word": "priority",
        "valid": [
            "priority"
        ],
        "difficulty": "hard",
        "definition": "Status established in order of importance or urgency.",
        "sentence": "National independence takes priority over class struggle.",
        "partOfSpeech": "noun"
    },
    {
        "word": "newsletters",
        "valid": [
            "newsletters"
        ],
        "difficulty": "expert",
        "definition": "Form of newsletter: report or open letter giving informal or confidential news of interest to a special group.",
        "sentence": "Sign up for Common Voice newsletters, goal reminders and progress updates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "adults",
        "valid": [
            "adults"
        ],
        "difficulty": "medium",
        "definition": "Form of adult: a fully developed person from maturity onward.",
        "sentence": "School children have colds twice as often as adults.",
        "partOfSpeech": "noun"
    },
    {
        "word": "clips",
        "valid": [
            "clips"
        ],
        "difficulty": "easy",
        "definition": "Form of clip: a metal frame or container holding cartridges; can be inserted into an automatic gun.",
        "sentence": "When someone becomes neurotic about pens and paper clips, it's a sure sign they're cracking up.",
        "partOfSpeech": "noun"
    },
    {
        "word": "savings",
        "valid": [
            "savings"
        ],
        "difficulty": "medium",
        "definition": "A fund of money put by as a reserve.",
        "sentence": "Generally speaking, savings are increasing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "graphic",
        "valid": [
            "graphic"
        ],
        "difficulty": "medium",
        "definition": "An image that is generated by a computer.",
        "sentence": "Graphic sexual scenes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "atom",
        "valid": [
            "atom"
        ],
        "difficulty": "easy",
        "definition": "The smallest component of an element having the chemical properties of the element.",
        "sentence": "A water molecule has two hydrogen atoms and one oxygen atom.",
        "partOfSpeech": "noun"
    },
    {
        "word": "payments",
        "valid": [
            "payments"
        ],
        "difficulty": "hard",
        "definition": "Form of payment: a sum of money paid or a claim discharged.",
        "sentence": "To make our house payments, we're going to have to tighten our belts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "estimated",
        "valid": [
            "estimated"
        ],
        "difficulty": "hard",
        "definition": "Form of estimate: an approximate calculation of quantity or degree or worth.",
        "sentence": "It is estimated that there are over half a million words in English.",
        "partOfSpeech": "noun"
    },
    {
        "word": "binding",
        "valid": [
            "binding"
        ],
        "difficulty": "medium",
        "definition": "The capacity to attract and hold something.",
        "sentence": "The book had a leather binding.",
        "partOfSpeech": "noun"
    },
    {
        "word": "brief",
        "valid": [
            "brief"
        ],
        "difficulty": "easy",
        "definition": "A document stating the facts and points of law of a client's case.",
        "sentence": "Covered the matter in a brief statement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ended",
        "valid": [
            "ended"
        ],
        "difficulty": "easy",
        "definition": "Having come or been brought to a conclusion.",
        "sentence": "The affair is over, ended, finished.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "winning",
        "valid": [
            "winning"
        ],
        "difficulty": "medium",
        "definition": "Succeeding with great difficulty.",
        "sentence": "Winning is not everything.",
        "partOfSpeech": "noun"
    },
    {
        "word": "eight",
        "valid": [
            "eight"
        ],
        "difficulty": "easy",
        "definition": "The cardinal number that is the sum of seven and one.",
        "sentence": "Our school begins at eight in the morning.",
        "partOfSpeech": "noun"
    },
    {
        "word": "anonymous",
        "valid": [
            "anonymous"
        ],
        "difficulty": "hard",
        "definition": "Having no known name or identity or known source.",
        "sentence": "Anonymous authors.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "iron",
        "valid": [
            "iron"
        ],
        "difficulty": "easy",
        "definition": "A heavy ductile magnetic metallic element; is silver-white in pure form but readily rusts; used in construction and tools and armament; plays a role in the transport of oxygen by the blood.",
        "sentence": "An iron constitution.",
        "partOfSpeech": "noun"
    },
    {
        "word": "straight",
        "valid": [
            "straight"
        ],
        "difficulty": "hard",
        "definition": "A person having a sexual orientation to persons of the opposite sex.",
        "sentence": "Set the record straight.",
        "partOfSpeech": "noun"
    },
    {
        "word": "script",
        "valid": [
            "script"
        ],
        "difficulty": "medium",
        "definition": "A written version of a play or other dramatic composition; used in preparing for a performance.",
        "sentence": "I can't read Arabic script.",
        "partOfSpeech": "noun"
    },
    {
        "word": "served",
        "valid": [
            "served"
        ],
        "difficulty": "medium",
        "definition": "Form of serve: (sports) a stroke that puts the ball in play.",
        "sentence": "Dinner will be served on board the plane.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wants",
        "valid": [
            "wants"
        ],
        "difficulty": "easy",
        "definition": "Form of want: a state of extreme poverty.",
        "sentence": "Everyone wants to meet you. You're famous!",
        "partOfSpeech": "noun"
    },
    {
        "word": "miscellaneous",
        "valid": [
            "miscellaneous"
        ],
        "difficulty": "expert",
        "definition": "Consisting of a haphazard assortment of different kinds; \"sundry sciences commonly known as social\"- I.A.Richards.",
        "sentence": "Miscellaneous accessories.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "prepared",
        "valid": [
            "prepared"
        ],
        "difficulty": "hard",
        "definition": "Made ready or fit or suitable beforehand.",
        "sentence": "A prepared statement.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "void",
        "valid": [
            "void"
        ],
        "difficulty": "easy",
        "definition": "The state of nonexistence.",
        "sentence": "Void a plea.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dining",
        "valid": [
            "dining"
        ],
        "difficulty": "medium",
        "definition": "The act of eating dinner.",
        "sentence": "The living room adjoins the dining room.",
        "partOfSpeech": "noun"
    },
    {
        "word": "alert",
        "valid": [
            "alert"
        ],
        "difficulty": "easy",
        "definition": "Condition of heightened watchfulness or preparation for action.",
        "sentence": "Bombers were put on alert during the crisis.",
        "partOfSpeech": "noun"
    },
    {
        "word": "integration",
        "valid": [
            "integration"
        ],
        "difficulty": "expert",
        "definition": "The action of incorporating a racial or religious group into a community.",
        "sentence": "In Russian, nouns of foreign origin generally don't succumb to integration.",
        "partOfSpeech": "noun"
    },
    {
        "word": "interview",
        "valid": [
            "interview"
        ],
        "difficulty": "hard",
        "definition": "The questioning of a person (or a conversation in which information is elicited); often conducted by journalists.",
        "sentence": "How did your interview go?",
        "partOfSpeech": "noun"
    },
    {
        "word": "framework",
        "valid": [
            "framework"
        ],
        "difficulty": "hard",
        "definition": "A hypothetical description of a complex entity or process.",
        "sentence": "Providing a factual framework for future research.",
        "partOfSpeech": "noun"
    },
    {
        "word": "disk",
        "valid": [
            "disk"
        ],
        "difficulty": "easy",
        "definition": "Something with a round shape resembling a flat circular plate.",
        "sentence": "The moon's disk hung in a cloudless sky.",
        "partOfSpeech": "noun"
    },
    {
        "word": "installed",
        "valid": [
            "installed"
        ],
        "difficulty": "hard",
        "definition": "Form of instal: set up for use.",
        "sentence": "I want to have a telephone installed.",
        "partOfSpeech": "verb"
    },
    {
        "word": "queen",
        "valid": [
            "queen"
        ],
        "difficulty": "easy",
        "definition": "The only fertile female in a colony of social insects such as bees and ants and termites; its function is to lay eggs.",
        "sentence": "Paris is the queen of cities.",
        "partOfSpeech": "noun"
    },
    {
        "word": "credits",
        "valid": [
            "credits"
        ],
        "difficulty": "medium",
        "definition": "A list of acknowledgements of those who contributed to the creation of a film (usually run at the end of the film).",
        "sentence": "How many credits can I get for this course?",
        "partOfSpeech": "noun"
    },
    {
        "word": "clearly",
        "valid": [
            "clearly"
        ],
        "difficulty": "medium",
        "definition": "Without doubt or question.",
        "sentence": "They were clearly lost.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "handle",
        "valid": [
            "handle"
        ],
        "difficulty": "medium",
        "definition": "The appendage to an object that is designed to be held in order to use or move it.",
        "sentence": "He grabbed the hammer by the handle.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sweet",
        "valid": [
            "sweet"
        ],
        "difficulty": "easy",
        "definition": "English phonetician; one of the founders of modern phonetics (1845-1912).",
        "sentence": "A sweet disposition.",
        "partOfSpeech": "noun"
    },
    {
        "word": "desk",
        "valid": [
            "desk"
        ],
        "difficulty": "easy",
        "definition": "A piece of furniture with a writing surface and usually drawers or other compartments.",
        "sentence": "Clear up your desk a bit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "criteria",
        "valid": [
            "criteria"
        ],
        "difficulty": "hard",
        "definition": "Form of criterion: a basis for comparison; a reference point against which other things can be evaluated.",
        "sentence": "Beauty cannot be determined objectively but depends on personal aesthetic criteria.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vice",
        "valid": [
            "vice"
        ],
        "difficulty": "easy",
        "definition": "Moral weakness.",
        "sentence": "Vice offends the moral standards of the community.",
        "partOfSpeech": "noun"
    },
    {
        "word": "associate",
        "valid": [
            "associate"
        ],
        "difficulty": "hard",
        "definition": "A person who joins with others in some activity or endeavor.",
        "sentence": "First was the lightning and then its thunderous associate.",
        "partOfSpeech": "noun"
    },
    {
        "word": "truck",
        "valid": [
            "truck"
        ],
        "difficulty": "easy",
        "definition": "An automotive vehicle suitable for hauling.",
        "sentence": "Truck fresh vegetables across the mountains.",
        "partOfSpeech": "noun"
    },
    {
        "word": "behavior",
        "valid": [
            "behavior"
        ],
        "difficulty": "hard",
        "definition": "Manner of acting or controlling yourself.",
        "sentence": "The behavior of small particles can be studied in experiments.",
        "partOfSpeech": "noun"
    },
    {
        "word": "enlarge",
        "valid": [
            "enlarge"
        ],
        "difficulty": "medium",
        "definition": "Make larger.",
        "sentence": "Could you enlarge on your new theory?",
        "partOfSpeech": "verb"
    },
    {
        "word": "frequently",
        "valid": [
            "frequently"
        ],
        "difficulty": "expert",
        "definition": "Many times at short intervals.",
        "sentence": "A sailor frequently has no time to get his sea legs after leaving port before a battle starts.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "revenue",
        "valid": [
            "revenue"
        ],
        "difficulty": "medium",
        "definition": "The entire amount of income before any deductions are made.",
        "sentence": "The administration cannot but look for alternative sources of revenue.",
        "partOfSpeech": "noun"
    },
    {
        "word": "measure",
        "valid": [
            "measure"
        ],
        "difficulty": "medium",
        "definition": "Any maneuver made as part of progress toward a goal.",
        "sentence": "They set the measure for all subsequent work.",
        "partOfSpeech": "noun"
    },
    {
        "word": "changing",
        "valid": [
            "changing"
        ],
        "difficulty": "hard",
        "definition": "Marked by continuous change or effective action.",
        "sentence": "People should understand that the world is changing.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "votes",
        "valid": [
            "votes"
        ],
        "difficulty": "easy",
        "definition": "Form of vote: a choice that is made by counting the number of people in favor of each alternative.",
        "sentence": "The bill passed by a small majority of 10 votes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "duty",
        "valid": [
            "duty"
        ],
        "difficulty": "easy",
        "definition": "The social force that binds you to the courses of action demanded by that force; \"every right implies a responsibility; every opportunity, an obligation; every possession, a duty\"- John D.Rockefeller Jr.",
        "sentence": "We must instill a sense of duty in our children.",
        "partOfSpeech": "noun"
    },
    {
        "word": "looked",
        "valid": [
            "looked"
        ],
        "difficulty": "medium",
        "definition": "Form of look: the feelings expressed on a person's face.",
        "sentence": "Your car makes too much noise. You should have it looked at.",
        "partOfSpeech": "noun"
    },
    {
        "word": "discussions",
        "valid": [
            "discussions"
        ],
        "difficulty": "expert",
        "definition": "Form of discussion: an extended communication (often interactive) dealing with some particular topic.",
        "sentence": "The records of our discussions are kept by the secretary.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bear",
        "valid": [
            "bear"
        ],
        "difficulty": "easy",
        "definition": "Massive plantigrade carnivorous or omnivorous mammals with long shaggy coats and strong claws.",
        "sentence": "Bear a scar.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gain",
        "valid": [
            "gain"
        ],
        "difficulty": "easy",
        "definition": "A quantity that is added.",
        "sentence": "They recorded the cattle's gain in weight over a period of weeks.",
        "partOfSpeech": "noun"
    },
    {
        "word": "festival",
        "valid": [
            "festival"
        ],
        "difficulty": "hard",
        "definition": "A day or period of time set aside for feasting and celebration.",
        "sentence": "A drama festival.",
        "partOfSpeech": "noun"
    },
    {
        "word": "laboratory",
        "valid": [
            "laboratory"
        ],
        "difficulty": "expert",
        "definition": "A workplace for the conduct of scientific research.",
        "sentence": "Pakistan is a laboratory for studying the use of American troops to combat terrorism.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ocean",
        "valid": [
            "ocean"
        ],
        "difficulty": "easy",
        "definition": "A large body of water constituting a principal part of the hydrosphere.",
        "sentence": "My eyes are an ocean in which my dreams are reflected.",
        "partOfSpeech": "noun"
    },
    {
        "word": "flights",
        "valid": [
            "flights"
        ],
        "difficulty": "medium",
        "definition": "Form of flight: a formation of aircraft in flight.",
        "sentence": "Smoking is now banned on all domestic plane flights.",
        "partOfSpeech": "noun"
    },
    {
        "word": "experts",
        "valid": [
            "experts"
        ],
        "difficulty": "medium",
        "definition": "Form of expert: a person with special knowledge or ability who performs skillfully.",
        "sentence": "In the past, the old used to be looked upon as experts in solving various problems of life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "signs",
        "valid": [
            "signs"
        ],
        "difficulty": "easy",
        "definition": "Form of sign: a perceptible indication of something not immediately apparent (as a visible clue that something has happened).",
        "sentence": "Please refrain from smoking, while the non-smoking signs are on.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lack",
        "valid": [
            "lack"
        ],
        "difficulty": "easy",
        "definition": "The state of needing something that is absent or unavailable.",
        "sentence": "There is a serious lack of insight into the problem.",
        "partOfSpeech": "noun"
    },
    {
        "word": "depth",
        "valid": [
            "depth"
        ],
        "difficulty": "easy",
        "definition": "The extent downward or backward or inward.",
        "sentence": "The depth of his breathing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "whatever",
        "valid": [
            "whatever"
        ],
        "difficulty": "hard",
        "definition": "One or some or every or all without specification.",
        "sentence": "Give me whatever peaches you don't want.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "logged",
        "valid": [
            "logged"
        ],
        "difficulty": "medium",
        "definition": "Form of log: a segment of the trunk of a tree when stripped of branches.",
        "sentence": "I shouldn't have logged off.",
        "partOfSpeech": "noun"
    },
    {
        "word": "laptop",
        "valid": [
            "laptop"
        ],
        "difficulty": "medium",
        "definition": "A portable computer small enough to use in your lap.",
        "sentence": "It's practical to have a laptop.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vintage",
        "valid": [
            "vintage"
        ],
        "difficulty": "medium",
        "definition": "A season's yield of wine from a vineyard.",
        "sentence": "He is buying a vintage hat.",
        "partOfSpeech": "noun"
    },
    {
        "word": "train",
        "valid": [
            "train"
        ],
        "difficulty": "easy",
        "definition": "Public transport provided by a line of railway cars coupled together and drawn by a locomotive.",
        "sentence": "The bride's train was carried by her two young nephews.",
        "partOfSpeech": "noun"
    },
    {
        "word": "exactly",
        "valid": [
            "exactly"
        ],
        "difficulty": "medium",
        "definition": "Indicating exactness or preciseness; \"Properly speaking, all true work is religion.\"--Thomas Carlyle.",
        "sentence": "He was doing precisely (or exactly) what she had told him to do.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "explore",
        "valid": [
            "explore"
        ],
        "difficulty": "medium",
        "definition": "Inquire into.",
        "sentence": "Explore unknown territory in biology.",
        "partOfSpeech": "verb"
    },
    {
        "word": "concept",
        "valid": [
            "concept"
        ],
        "difficulty": "medium",
        "definition": "An abstract or general idea inferred or derived from specific instances.",
        "sentence": "To him, hunger was an abstract concept; he always had enough to eat.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nearly",
        "valid": [
            "nearly"
        ],
        "difficulty": "medium",
        "definition": "Slightly short of or not quite accomplished; all but.",
        "sentence": "He nearly fainted.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "eligible",
        "valid": [
            "eligible"
        ],
        "difficulty": "hard",
        "definition": "Qualified for or allowed or worthy of being chosen.",
        "sentence": "Eligible to run for office.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "checkout",
        "valid": [
            "checkout"
        ],
        "difficulty": "hard",
        "definition": "The act of inspecting or verifying.",
        "sentence": "The checkout here is 12 noon.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reality",
        "valid": [
            "reality"
        ],
        "difficulty": "medium",
        "definition": "All of your experiences that determine how things appear to you.",
        "sentence": "For them demons were as much a part of reality as trees were.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forgot",
        "valid": [
            "forgot"
        ],
        "difficulty": "medium",
        "definition": "Form of forget: dismiss from the mind; stop remembering.",
        "sentence": "After that, I left, but then I realized that I forgot my backpack at their house.",
        "partOfSpeech": "verb"
    },
    {
        "word": "handling",
        "valid": [
            "handling"
        ],
        "difficulty": "hard",
        "definition": "Manual (or mechanical) carrying or moving or delivering or working with something.",
        "sentence": "The handling of prisoners.",
        "partOfSpeech": "noun"
    },
    {
        "word": "origin",
        "valid": [
            "origin"
        ],
        "difficulty": "medium",
        "definition": "The place where something begins, where it springs into being.",
        "sentence": "Jupiter was the origin of the radiation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "knew",
        "valid": [
            "knew"
        ],
        "difficulty": "easy",
        "definition": "Form of know: the fact of being aware of information that is known to few people.",
        "sentence": "From the moment that I knew that the university existed, I've wanted to go there.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gaming",
        "valid": [
            "gaming"
        ],
        "difficulty": "medium",
        "definition": "The act of playing for stakes in the hope of winning (including the payment of a price for a chance to win a prize).",
        "sentence": "I leave motivated by computer gaming and sleeping with my beloved.",
        "partOfSpeech": "noun"
    },
    {
        "word": "feeds",
        "valid": [
            "feeds"
        ],
        "difficulty": "easy",
        "definition": "Form of feed: food for domestic livestock.",
        "sentence": "Music feeds our imagination.",
        "partOfSpeech": "noun"
    },
    {
        "word": "billion",
        "valid": [
            "billion"
        ],
        "difficulty": "medium",
        "definition": "The number that is represented as a one followed by 12 zeros; in the United Kingdom the usage followed in the United States is frequently seen.",
        "sentence": "The generous dentist contributed some two billion yen to charity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "destination",
        "valid": [
            "destination"
        ],
        "difficulty": "expert",
        "definition": "The place designated as the end (as of a race or journey).",
        "sentence": "He was nearly exhausted as their destination came into view.",
        "partOfSpeech": "noun"
    },
    {
        "word": "scotland",
        "valid": [
            "scotland"
        ],
        "difficulty": "hard",
        "definition": "One of the four countries that make up the United Kingdom of Great Britain and Northern Ireland; located on the northern part of the island of Great Britain; famous for bagpipes and plaids and kilts.",
        "sentence": "What's Scotland like in summer?",
        "partOfSpeech": "noun"
    },
    {
        "word": "faster",
        "valid": [
            "faster"
        ],
        "difficulty": "medium",
        "definition": "More quickly.",
        "sentence": "The express train is an hour faster than the local.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "intelligence",
        "valid": [
            "intelligence"
        ],
        "difficulty": "expert",
        "definition": "The ability to comprehend; to understand and profit from experience.",
        "sentence": "We sent out planes to gather intelligence on their radar coverage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dallas",
        "valid": [
            "dallas"
        ],
        "difficulty": "medium",
        "definition": "A large commercial and industrial city in northeastern Texas located in the heart of the northern Texas oil fields.",
        "sentence": "He drove the truck to Dallas.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bought",
        "valid": [
            "bought"
        ],
        "difficulty": "medium",
        "definition": "Form of buy: an advantageous purchase.",
        "sentence": "My mother bought two bottles of orange juice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nations",
        "valid": [
            "nations"
        ],
        "difficulty": "medium",
        "definition": "Form of nation: a politically organized body of people under a single government.",
        "sentence": "As long as there are sovereign nations possessing great power, war is inevitable.",
        "partOfSpeech": "noun"
    },
    {
        "word": "route",
        "valid": [
            "route"
        ],
        "difficulty": "easy",
        "definition": "An established line of travel or access.",
        "sentence": "The party, therefore, had to take another route.",
        "partOfSpeech": "noun"
    },
    {
        "word": "followed",
        "valid": [
            "followed"
        ],
        "difficulty": "hard",
        "definition": "Form of follow: to travel behind, go after, come after.",
        "sentence": "Each chapter in the textbook is followed by about a dozen comprehension questions.",
        "partOfSpeech": "verb"
    },
    {
        "word": "specifications",
        "valid": [
            "specifications"
        ],
        "difficulty": "expert",
        "definition": "Form of specification: a detailed description of design criteria for a piece of work.",
        "sentence": "Specifications and price are subject to change.",
        "partOfSpeech": "noun"
    },
    {
        "word": "broken",
        "valid": [
            "broken"
        ],
        "difficulty": "medium",
        "definition": "Physically and forcibly separated into pieces or cracked or split.",
        "sentence": "A broken mirror.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "frank",
        "valid": [
            "frank"
        ],
        "difficulty": "easy",
        "definition": "A member of the ancient Germanic peoples who spread from the Rhine into the Roman Empire in the 4th century.",
        "sentence": "Tell me what you think--and you may just as well be frank.",
        "partOfSpeech": "noun"
    },
    {
        "word": "zoom",
        "valid": [
            "zoom"
        ],
        "difficulty": "easy",
        "definition": "A rapid rise.",
        "sentence": "This is the zoom button.",
        "partOfSpeech": "noun"
    },
    {
        "word": "blow",
        "valid": [
            "blow"
        ],
        "difficulty": "easy",
        "definition": "A powerful stroke with the fist or a weapon.",
        "sentence": "He gave his nose a loud blow.",
        "partOfSpeech": "noun"
    },
    {
        "word": "battle",
        "valid": [
            "battle"
        ],
        "difficulty": "medium",
        "definition": "A hostile meeting of opposing military forces in the course of a war.",
        "sentence": "He fought a battle for recognition.",
        "partOfSpeech": "noun"
    },
    {
        "word": "residential",
        "valid": [
            "residential"
        ],
        "difficulty": "expert",
        "definition": "Used or designed for residence or limited to residences.",
        "sentence": "A residential hotel.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "anime",
        "valid": [
            "anime"
        ],
        "difficulty": "easy",
        "definition": "A hard copal derived from an African tree.",
        "sentence": "Well then, does everybody know the anime called Mai Hime?",
        "partOfSpeech": "noun"
    },
    {
        "word": "speak",
        "valid": [
            "speak"
        ],
        "difficulty": "easy",
        "definition": "Express in speech.",
        "sentence": "The prisoner won't speak.",
        "partOfSpeech": "verb"
    },
    {
        "word": "decisions",
        "valid": [
            "decisions"
        ],
        "difficulty": "hard",
        "definition": "Form of decision: the act of making up your mind about something.",
        "sentence": "We should not be influenced in our decisions by our prejudices.",
        "partOfSpeech": "noun"
    },
    {
        "word": "industries",
        "valid": [
            "industries"
        ],
        "difficulty": "expert",
        "definition": "Form of industry: the people or companies engaged in a particular kind of commercial enterprise.",
        "sentence": "A strong yen is acting against Japan's export industries.",
        "partOfSpeech": "noun"
    },
    {
        "word": "protocol",
        "valid": [
            "protocol"
        ],
        "difficulty": "hard",
        "definition": "Rules determining the format and transmission of data.",
        "sentence": "Academic protocol.",
        "partOfSpeech": "noun"
    },
    {
        "word": "query",
        "valid": [
            "query"
        ],
        "difficulty": "easy",
        "definition": "An instance of questioning.",
        "sentence": "In the opening paragraphs I query the validity of so-called supply-side economic strategies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "clip",
        "valid": [
            "clip"
        ],
        "difficulty": "easy",
        "definition": "A metal frame or container holding cartridges; can be inserted into an automatic gun.",
        "sentence": "He gave me a clip on the ear.",
        "partOfSpeech": "noun"
    },
    {
        "word": "partnership",
        "valid": [
            "partnership"
        ],
        "difficulty": "expert",
        "definition": "The members of a business venture created by contract.",
        "sentence": "Effective language learning is a partnership between school, teacher and student.",
        "partOfSpeech": "noun"
    },
    {
        "word": "editorial",
        "valid": [
            "editorial"
        ],
        "difficulty": "hard",
        "definition": "An article giving opinions or perspectives.",
        "sentence": "Editorial column.",
        "partOfSpeech": "noun"
    },
    {
        "word": "expression",
        "valid": [
            "expression"
        ],
        "difficulty": "expert",
        "definition": "The feelings expressed on a person's face.",
        "sentence": "The expression of milk from her breast.",
        "partOfSpeech": "noun"
    },
    {
        "word": "equity",
        "valid": [
            "equity"
        ],
        "difficulty": "medium",
        "definition": "The difference between the market value of a property and the claims held against it.",
        "sentence": "The company is open for equity participation by anybody.",
        "partOfSpeech": "noun"
    },
    {
        "word": "provisions",
        "valid": [
            "provisions"
        ],
        "difficulty": "expert",
        "definition": "A stock or supply of foods.",
        "sentence": "That which was satisfied today becomes tomorrow's provisions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "speech",
        "valid": [
            "speech"
        ],
        "difficulty": "medium",
        "definition": "The act of delivering a formal spoken communication to an audience.",
        "sentence": "The actor forgot his speech.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wire",
        "valid": [
            "wire"
        ],
        "difficulty": "easy",
        "definition": "Ligament made of metal and used to fasten things or make cages or fences etc.",
        "sentence": "Wire beads.",
        "partOfSpeech": "noun"
    },
    {
        "word": "principles",
        "valid": [
            "principles"
        ],
        "difficulty": "expert",
        "definition": "Form of principle: a basic generalization that is accepted as true and that can be used as a basis for reasoning or conduct.",
        "sentence": "You should live up to your principles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "suggestions",
        "valid": [
            "suggestions"
        ],
        "difficulty": "expert",
        "definition": "Form of suggestion: an idea that is suggested.",
        "sentence": "Please feel free to make suggestions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rural",
        "valid": [
            "rural"
        ],
        "difficulty": "easy",
        "definition": "Living in or characteristic of farming or country life.",
        "sentence": "Rural people.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "shared",
        "valid": [
            "shared"
        ],
        "difficulty": "medium",
        "definition": "Have in common; held or experienced in common.",
        "sentence": "Two shared valence electrons forming a bond between adjacent nuclei.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "sounds",
        "valid": [
            "sounds"
        ],
        "difficulty": "medium",
        "definition": "Form of sound: the particular auditory effect produced by a given cause.",
        "sentence": "That sounds interesting. What did you tell her?",
        "partOfSpeech": "noun"
    },
    {
        "word": "replacement",
        "valid": [
            "replacement"
        ],
        "difficulty": "expert",
        "definition": "The act of furnishing an equivalent person or thing in the place of another.",
        "sentence": "The replacement of lost blood by a transfusion of donor blood.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tape",
        "valid": [
            "tape"
        ],
        "difficulty": "easy",
        "definition": "A long thin piece of cloth or paper as used for binding or fastening.",
        "sentence": "He used a piece of tape for a belt.",
        "partOfSpeech": "noun"
    },
    {
        "word": "strategic",
        "valid": [
            "strategic"
        ],
        "difficulty": "hard",
        "definition": "Relating to or concerned with strategy.",
        "sentence": "A strategic chess move.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "judge",
        "valid": [
            "judge"
        ],
        "difficulty": "easy",
        "definition": "A public official authorized to decide questions brought before a court of justice.",
        "sentence": "I cannot judge some works of modern art.",
        "partOfSpeech": "noun"
    },
    {
        "word": "spam",
        "valid": [
            "spam"
        ],
        "difficulty": "easy",
        "definition": "A canned meat made largely from pork.",
        "sentence": "Another spam article hoping for click-throughs?",
        "partOfSpeech": "noun"
    },
    {
        "word": "economics",
        "valid": [
            "economics"
        ],
        "difficulty": "hard",
        "definition": "The branch of social science that deals with the production and distribution and consumption of goods and services and their management.",
        "sentence": "While employed at the bank, he taught economics at college.",
        "partOfSpeech": "noun"
    },
    {
        "word": "acid",
        "valid": [
            "acid"
        ],
        "difficulty": "easy",
        "definition": "Any of various water-soluble compounds having a sour taste and capable of turning litmus red and reacting with a base to form a salt.",
        "sentence": "An acid reaction.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bytes",
        "valid": [
            "bytes"
        ],
        "difficulty": "easy",
        "definition": "Form of byte: a sequence of 8 bits (enough to represent one character of alphanumeric data) processed as a single unit of information.",
        "sentence": "There has been a lot of disagreement about exactly how many bytes are in a kilobyte.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cent",
        "valid": [
            "cent"
        ],
        "difficulty": "easy",
        "definition": "A fractional monetary unit of several countries.",
        "sentence": "Fifty-two per cent of British women prefer chocolate to sex.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forced",
        "valid": [
            "forced"
        ],
        "difficulty": "medium",
        "definition": "Produced by or subjected to forcing.",
        "sentence": "Forced heartiness.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "compatible",
        "valid": [
            "compatible"
        ],
        "difficulty": "expert",
        "definition": "Able to exist and perform in harmonious or agreeable combination.",
        "sentence": "A compatible married couple.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "fight",
        "valid": [
            "fight"
        ],
        "difficulty": "easy",
        "definition": "A hostile meeting of opposing military forces in the course of a war.",
        "sentence": "The fight was on television last night.",
        "partOfSpeech": "noun"
    },
    {
        "word": "apartment",
        "valid": [
            "apartment"
        ],
        "difficulty": "hard",
        "definition": "A suite of rooms usually on one floor of an apartment house.",
        "sentence": "What happened? There's water all over the apartment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "height",
        "valid": [
            "height"
        ],
        "difficulty": "medium",
        "definition": "The vertical dimension of extension; distance from the base of something to the top.",
        "sentence": "At the height of her career.",
        "partOfSpeech": "noun"
    },
    {
        "word": "null",
        "valid": [
            "null"
        ],
        "difficulty": "easy",
        "definition": "A quantity of no importance.",
        "sentence": "Null and void.",
        "partOfSpeech": "noun"
    },
    {
        "word": "zero",
        "valid": [
            "zero"
        ],
        "difficulty": "easy",
        "definition": "A quantity of no importance.",
        "sentence": "A zero score.",
        "partOfSpeech": "noun"
    },
    {
        "word": "speaker",
        "valid": [
            "speaker"
        ],
        "difficulty": "medium",
        "definition": "Someone who expresses in language; someone who talks (especially someone who delivers a public speech or someone especially garrulous).",
        "sentence": "The speaker at commencement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "filed",
        "valid": [
            "filed"
        ],
        "difficulty": "easy",
        "definition": "Form of file: a set of related records (either written or electronic) kept together.",
        "sentence": "How many staff members filed to change departments?",
        "partOfSpeech": "noun"
    },
    {
        "word": "netherlands",
        "valid": [
            "netherlands"
        ],
        "difficulty": "expert",
        "definition": "A constitutional monarchy in western Europe on the North Sea; half the country lies below sea level.",
        "sentence": "Germany adjoins the Netherlands.",
        "partOfSpeech": "noun"
    },
    {
        "word": "obtain",
        "valid": [
            "obtain"
        ],
        "difficulty": "medium",
        "definition": "Come into possession of.",
        "sentence": "How did you obtain the visa?",
        "partOfSpeech": "verb"
    },
    {
        "word": "consulting",
        "valid": [
            "consulting"
        ],
        "difficulty": "expert",
        "definition": "Form of consult: get or ask advice from.",
        "sentence": "He folded his paper, consulting his watch.",
        "partOfSpeech": "verb"
    },
    {
        "word": "recreation",
        "valid": [
            "recreation"
        ],
        "difficulty": "expert",
        "definition": "An activity that diverts or amuses or stimulates.",
        "sentence": "Days of joyous recreation with his friends.",
        "partOfSpeech": "noun"
    },
    {
        "word": "offices",
        "valid": [
            "offices"
        ],
        "difficulty": "medium",
        "definition": "Form of office: place of business where professional or clerical duties are performed.",
        "sentence": "The branch offices of the bank are located all over Japan.",
        "partOfSpeech": "noun"
    },
    {
        "word": "designer",
        "valid": [
            "designer"
        ],
        "difficulty": "hard",
        "definition": "A person who specializes in interior design.",
        "sentence": "He is believed to be the principal designer of the terrorist bombing attack.",
        "partOfSpeech": "noun"
    },
    {
        "word": "remain",
        "valid": [
            "remain"
        ],
        "difficulty": "medium",
        "definition": "Stay the same; remain in a certain state.",
        "sentence": "How many days will you remain in London?",
        "partOfSpeech": "verb"
    },
    {
        "word": "managed",
        "valid": [
            "managed"
        ],
        "difficulty": "medium",
        "definition": "Form of manage: be successful; achieve a goal.",
        "sentence": "I managed to get in.",
        "partOfSpeech": "verb"
    },
    {
        "word": "failed",
        "valid": [
            "failed"
        ],
        "difficulty": "medium",
        "definition": "Form of fail: fail to do something; leave something undone.",
        "sentence": "You worked hard, or you would have failed.",
        "partOfSpeech": "verb"
    },
    {
        "word": "marriage",
        "valid": [
            "marriage"
        ],
        "difficulty": "hard",
        "definition": "The state of being a married couple voluntarily joined for life (or until divorce).",
        "sentence": "Their marriage was conducted in the chapel.",
        "partOfSpeech": "noun"
    },
    {
        "word": "roll",
        "valid": [
            "roll"
        ],
        "difficulty": "easy",
        "definition": "Rotary motion of an object around its own axis.",
        "sentence": "He shot his roll on a bob-tailed nag.",
        "partOfSpeech": "noun"
    },
    {
        "word": "korea",
        "valid": [
            "korea"
        ],
        "difficulty": "easy",
        "definition": "An Asian peninsula (off Manchuria) separating the Yellow Sea and the Sea of Japan; the Korean name is Dae-Han-Min-Gook or Han-Gook.",
        "sentence": "Korea is now up and coming.",
        "partOfSpeech": "noun"
    },
    {
        "word": "banks",
        "valid": [
            "banks"
        ],
        "difficulty": "easy",
        "definition": "English botanist who accompanied Captain Cook on his first voyage to the Pacific Ocean (1743-1820).",
        "sentence": "Banks are cutting lending to industrial borrowers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "participants",
        "valid": [
            "participants"
        ],
        "difficulty": "expert",
        "definition": "Form of participant: someone who takes part in an activity.",
        "sentence": "The air in that room was thick with the enthusiasm of the participants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "secret",
        "valid": [
            "secret"
        ],
        "difficulty": "medium",
        "definition": "Something that should remain hidden from others (especially information that is not to be passed on).",
        "sentence": "The secret of Cajun cooking.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bath",
        "valid": [
            "bath"
        ],
        "difficulty": "easy",
        "definition": "A vessel containing liquid in which something is immersed (as to process it or to maintain it at a constant temperature or to lubricate it).",
        "sentence": "He has a good bath every morning.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kelly",
        "valid": [
            "kelly"
        ],
        "difficulty": "easy",
        "definition": "United States circus clown (1898-1979).",
        "sentence": "Had I arrived earlier, I could have seen Kelly.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leads",
        "valid": [
            "leads"
        ],
        "difficulty": "easy",
        "definition": "Form of lead: an advantage held by a competitor in a race.",
        "sentence": "The answer leads us to a vicious circle.",
        "partOfSpeech": "noun"
    },
    {
        "word": "negative",
        "valid": [
            "negative"
        ],
        "difficulty": "hard",
        "definition": "A reply of denial.",
        "sentence": "He answered in the negative.",
        "partOfSpeech": "noun"
    },
    {
        "word": "favorites",
        "valid": [
            "favorites"
        ],
        "difficulty": "hard",
        "definition": "Form of favorite: something regarded with special favor or liking.",
        "sentence": "The top favorites of each section were gathered together.",
        "partOfSpeech": "noun"
    },
    {
        "word": "toronto",
        "valid": [
            "toronto"
        ],
        "difficulty": "medium",
        "definition": "The provincial capital and largest city in Ontario (and the largest city in Canada).",
        "sentence": "Would you please reserve a room near the Toronto International Airport?",
        "partOfSpeech": "noun"
    },
    {
        "word": "theater",
        "valid": [
            "theater"
        ],
        "difficulty": "medium",
        "definition": "A building where theatrical performances or motion-picture shows can be presented.",
        "sentence": "He served in the Vietnam theater for three years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "springs",
        "valid": [
            "springs"
        ],
        "difficulty": "medium",
        "definition": "Form of spring: the season of growth.",
        "sentence": "Fear always springs from ignorance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "perform",
        "valid": [
            "perform"
        ],
        "difficulty": "medium",
        "definition": "Carry out or perform an action.",
        "sentence": "Who will perform the wedding?",
        "partOfSpeech": "verb"
    },
    {
        "word": "healthy",
        "valid": [
            "healthy"
        ],
        "difficulty": "medium",
        "definition": "Having or indicating good health in body or mind; free from infirmity or disease.",
        "sentence": "A rosy healthy baby.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "translation",
        "valid": [
            "translation"
        ],
        "difficulty": "expert",
        "definition": "A written communication in a second language having the same meaning as the written communication in a first language.",
        "sentence": "A photograph is a translation of a scene onto a two-dimensional surface.",
        "partOfSpeech": "noun"
    },
    {
        "word": "estimates",
        "valid": [
            "estimates"
        ],
        "difficulty": "hard",
        "definition": "Form of estimate: an approximate calculation of quantity or degree or worth.",
        "sentence": "We left a margin for error in our estimates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "font",
        "valid": [
            "font"
        ],
        "difficulty": "easy",
        "definition": "A specific size and style of type within a type family.",
        "sentence": "In the font business you must never trust anybody!",
        "partOfSpeech": "noun"
    },
    {
        "word": "assets",
        "valid": [
            "assets"
        ],
        "difficulty": "medium",
        "definition": "Anything of material value or usefulness that is owned by a person or company.",
        "sentence": "Shareholders voted to liquidate the company's assets.",
        "partOfSpeech": "noun"
    },
    {
        "word": "injury",
        "valid": [
            "injury"
        ],
        "difficulty": "medium",
        "definition": "Any physical damage to the body caused by violence or accident or fracture etc.",
        "sentence": "An injury put the shortstop out of action.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ministry",
        "valid": [
            "ministry"
        ],
        "difficulty": "hard",
        "definition": "Religious ministers collectively (especially Presbyterian).",
        "sentence": "He is studying for the ministry.",
        "partOfSpeech": "noun"
    },
    {
        "word": "drivers",
        "valid": [
            "drivers"
        ],
        "difficulty": "medium",
        "definition": "Form of driver: the operator of a motor vehicle.",
        "sentence": "Some of the drivers were laughing and yelling.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lawyer",
        "valid": [
            "lawyer"
        ],
        "difficulty": "medium",
        "definition": "A professional person authorized to practice law; conducts lawsuits or gives legal advice.",
        "sentence": "I have a feeling you'll be a very good lawyer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "figures",
        "valid": [
            "figures"
        ],
        "difficulty": "medium",
        "definition": "Form of figure: a diagram or picture illustrating textual material.",
        "sentence": "The accountant will go into these figures.",
        "partOfSpeech": "noun"
    },
    {
        "word": "married",
        "valid": [
            "married"
        ],
        "difficulty": "medium",
        "definition": "A person who is married.",
        "sentence": "A married man.",
        "partOfSpeech": "noun"
    },
    {
        "word": "protected",
        "valid": [
            "protected"
        ],
        "difficulty": "hard",
        "definition": "Kept safe or defended from danger or injury or loss.",
        "sentence": "The most protected spot I could find.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "proposal",
        "valid": [
            "proposal"
        ],
        "difficulty": "hard",
        "definition": "Something proposed (such as a plan or assumption).",
        "sentence": "They listened to her proposal.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sharing",
        "valid": [
            "sharing"
        ],
        "difficulty": "medium",
        "definition": "Using or enjoying something jointly with others.",
        "sentence": "The sharing of electrons creates molecules.",
        "partOfSpeech": "noun"
    },
    {
        "word": "philadelphia",
        "valid": [
            "philadelphia"
        ],
        "difficulty": "expert",
        "definition": "The largest city in Pennsylvania; located in the southeastern part of the state on the Delaware river; site of Independence Hall where the Declaration of Independence and the Constitution were signed; site of the University of Pennsylvania.",
        "sentence": "She is a famous Philadelphia lawmaker.",
        "partOfSpeech": "noun"
    },
    {
        "word": "portal",
        "valid": [
            "portal"
        ],
        "difficulty": "medium",
        "definition": "A grand and imposing entrance (often extended metaphorically).",
        "sentence": "A portal typically has search engines and free email and chat rooms etc.",
        "partOfSpeech": "noun"
    },
    {
        "word": "waiting",
        "valid": [
            "waiting"
        ],
        "difficulty": "medium",
        "definition": "The act of waiting (remaining inactive in one place while expecting something).",
        "sentence": "Waiting cars and limousines lined the curb.",
        "partOfSpeech": "noun"
    },
    {
        "word": "birthday",
        "valid": [
            "birthday"
        ],
        "difficulty": "hard",
        "definition": "An anniversary of the day on which a person was born (or the celebration of it).",
        "sentence": "Today is June 18th and it is Muiriel's birthday!",
        "partOfSpeech": "noun"
    },
    {
        "word": "beta",
        "valid": [
            "beta"
        ],
        "difficulty": "easy",
        "definition": "The 2nd letter of the Greek alphabet.",
        "sentence": "A beta version.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fail",
        "valid": [
            "fail"
        ],
        "difficulty": "easy",
        "definition": "Fail to do something; leave something undone.",
        "sentence": "We must not fail his obligation to the victims of the Holocaust.",
        "partOfSpeech": "verb"
    },
    {
        "word": "gratis",
        "valid": [
            "gratis"
        ],
        "difficulty": "medium",
        "definition": "Costing nothing.",
        "sentence": "I'll give you this gratis.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "banking",
        "valid": [
            "banking"
        ],
        "difficulty": "medium",
        "definition": "Engaging in the business of keeping money for savings and checking accounts or for exchange or for issuing loans and credit etc.",
        "sentence": "What are the banking hours?",
        "partOfSpeech": "noun"
    },
    {
        "word": "officials",
        "valid": [
            "officials"
        ],
        "difficulty": "hard",
        "definition": "Form of official: a worker who holds or is invested with an office.",
        "sentence": "The politician pushed for reform by denouncing the corruption of the government officials.",
        "partOfSpeech": "noun"
    },
    {
        "word": "toward",
        "valid": [
            "toward"
        ],
        "difficulty": "medium",
        "definition": "In the direction of; to. He set his face toward the wilderness. Num. xxiv. 1. The waves make towards'' the pebbled shore. Shak. 2. With direction to, in a moral sense; with resp.",
        "sentence": "This advice of yours will go a long way toward solving the problem.",
        "partOfSpeech": "noun"
    },
    {
        "word": "slightly",
        "valid": [
            "slightly"
        ],
        "difficulty": "hard",
        "definition": "To a small degree or extent.",
        "sentence": "The children argued because one slice of cake was slightly larger than the other.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "assist",
        "valid": [
            "assist"
        ],
        "difficulty": "medium",
        "definition": "The activity of contributing to the fulfillment of a need or furtherance of an effort or purpose.",
        "sentence": "He gave me an assist with the housework.",
        "partOfSpeech": "noun"
    },
    {
        "word": "conduct",
        "valid": [
            "conduct"
        ],
        "difficulty": "medium",
        "definition": "Manner of acting or controlling yourself.",
        "sentence": "She cannot conduct modern pieces.",
        "partOfSpeech": "noun"
    },
    {
        "word": "contained",
        "valid": [
            "contained"
        ],
        "difficulty": "hard",
        "definition": "Gotten under control.",
        "sentence": "The oil spill is contained.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "lingerie",
        "valid": [
            "lingerie"
        ],
        "difficulty": "hard",
        "definition": "Women's underwear and nightclothes.",
        "sentence": "Tom tried to convince Mary to put on sexy lingerie.",
        "partOfSpeech": "noun"
    },
    {
        "word": "legislation",
        "valid": [
            "legislation"
        ],
        "difficulty": "expert",
        "definition": "Law enacted by a legislative body.",
        "sentence": "Fortune 500 companies were the hardest hit by recent legislation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "calling",
        "valid": [
            "calling"
        ],
        "difficulty": "medium",
        "definition": "The particular occupation for which you are trained.",
        "sentence": "Sven was so verbose that his friends resorted to calling him a chatterbox.",
        "partOfSpeech": "noun"
    },
    {
        "word": "parameters",
        "valid": [
            "parameters"
        ],
        "difficulty": "expert",
        "definition": "Form of parameter: a constant in the equation of a curve that can be varied to yield a family of similar curves.",
        "sentence": "In the C language, there are two ways to pass parameters to a function: by value and by reference.",
        "partOfSpeech": "noun"
    },
    {
        "word": "jazz",
        "valid": [
            "jazz"
        ],
        "difficulty": "easy",
        "definition": "Empty rhetoric or insincere or exaggerated talk.",
        "sentence": "Don't give me any of that jazz.",
        "partOfSpeech": "noun"
    },
    {
        "word": "serving",
        "valid": [
            "serving"
        ],
        "difficulty": "medium",
        "definition": "An individual quantity of food or drink taken as part of a meal.",
        "sentence": "I'm looking forward to serving your company.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bags",
        "valid": [
            "bags"
        ],
        "difficulty": "easy",
        "definition": "Form of bag: a flexible container with a single opening.",
        "sentence": "Could I check my bags?",
        "partOfSpeech": "noun"
    },
    {
        "word": "profiles",
        "valid": [
            "profiles"
        ],
        "difficulty": "hard",
        "definition": "Form of profile: an analysis (often in graphical form) representing the extent to which something exhibits various characteristics.",
        "sentence": "Not surprisingly, most Lojban contributors indicate no country in their profiles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comics",
        "valid": [
            "comics"
        ],
        "difficulty": "medium",
        "definition": "Form of comic: a professional performer who tells jokes and performs comical acts.",
        "sentence": "Really? My hobby is reading comics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "matters",
        "valid": [
            "matters"
        ],
        "difficulty": "medium",
        "definition": "Form of matter: a vaguely specified concern.",
        "sentence": "It matters little what you do.",
        "partOfSpeech": "noun"
    },
    {
        "word": "houses",
        "valid": [
            "houses"
        ],
        "difficulty": "medium",
        "definition": "Form of house: a dwelling that serves as living quarters for one or more families.",
        "sentence": "Those who live in glass houses should not throw stones.",
        "partOfSpeech": "noun"
    },
    {
        "word": "postal",
        "valid": [
            "postal"
        ],
        "difficulty": "medium",
        "definition": "Of or relating to the system for delivering mail.",
        "sentence": "Postal delivery.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "relationships",
        "valid": [
            "relationships"
        ],
        "difficulty": "expert",
        "definition": "Form of relationship: a relation between people; (`relationship' is often used where `relation' would serve, as in `the relationship between inflation and unemployment', but the preferred usage of `relationship' is for human relations or states of relatedness).",
        "sentence": "We build and maintain relationships with others.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tennessee",
        "valid": [
            "tennessee"
        ],
        "difficulty": "hard",
        "definition": "A state in east central United States.",
        "sentence": "Jack Daniel's is a Tennessee whiskey.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wear",
        "valid": [
            "wear"
        ],
        "difficulty": "easy",
        "definition": "Impairment resulting from long use.",
        "sentence": "She bought it for everyday wear.",
        "partOfSpeech": "noun"
    },
    {
        "word": "controls",
        "valid": [
            "controls"
        ],
        "difficulty": "hard",
        "definition": "Form of control: power to direct or determine.",
        "sentence": "It is the attitude of the subjects that controls the outcome of the experiment.",
        "partOfSpeech": "noun"
    },
    {
        "word": "breaking",
        "valid": [
            "breaking"
        ],
        "difficulty": "hard",
        "definition": "The act of breaking something.",
        "sentence": "You cannot make omelets without breaking eggs.",
        "partOfSpeech": "noun"
    },
    {
        "word": "combined",
        "valid": [
            "combined"
        ],
        "difficulty": "hard",
        "definition": "Made or joined or united into one.",
        "sentence": "We lifted the table with our combined strength.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "ultimate",
        "valid": [
            "ultimate"
        ],
        "difficulty": "hard",
        "definition": "The finest or most superior quality of its kind.",
        "sentence": "The ultimate in luxury.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wales",
        "valid": [
            "wales"
        ],
        "difficulty": "easy",
        "definition": "One of the four countries that make up the United Kingdom of Great Britain and Northern Ireland; during Roman times the region was known as Cambria.",
        "sentence": "England proper does not include Wales.",
        "partOfSpeech": "noun"
    },
    {
        "word": "representative",
        "valid": [
            "representative"
        ],
        "difficulty": "expert",
        "definition": "A person who represents others.",
        "sentence": "Representative government as defined by Abraham Lincoln is government of the people, by the people, for the people.",
        "partOfSpeech": "noun"
    },
    {
        "word": "frequency",
        "valid": [
            "frequency"
        ],
        "difficulty": "hard",
        "definition": "The number of occurrences within a given time period.",
        "sentence": "The frequency of modulation was 40 cycles per second.",
        "partOfSpeech": "noun"
    },
    {
        "word": "introduced",
        "valid": [
            "introduced"
        ],
        "difficulty": "expert",
        "definition": "Form of introduce: cause to come to know personally.",
        "sentence": "You should have introduced yourself.",
        "partOfSpeech": "verb"
    },
    {
        "word": "minor",
        "valid": [
            "minor"
        ],
        "difficulty": "easy",
        "definition": "A young person of either sex.",
        "sentence": "A minor share of the profits.",
        "partOfSpeech": "noun"
    },
    {
        "word": "finish",
        "valid": [
            "finish"
        ],
        "difficulty": "medium",
        "definition": "A decorative texture or appearance of a surface (or the substance that gives it that appearance).",
        "sentence": "His best finish in a major tournament was third.",
        "partOfSpeech": "noun"
    },
    {
        "word": "departments",
        "valid": [
            "departments"
        ],
        "difficulty": "expert",
        "definition": "Form of department: a specialized division of a large organization.",
        "sentence": "How many staff members filed to change departments?",
        "partOfSpeech": "noun"
    },
    {
        "word": "residents",
        "valid": [
            "residents"
        ],
        "difficulty": "hard",
        "definition": "Form of resident: someone who lives at a particular place for a prolonged period or who was born there.",
        "sentence": "They carried on with the construction in the face of strong opposition from the residents.",
        "partOfSpeech": "noun"
    },
    {
        "word": "noted",
        "valid": [
            "noted"
        ],
        "difficulty": "easy",
        "definition": "Widely known and esteemed.",
        "sentence": "To my surprise, the noted psychologist was accused of a kidnapping.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "displayed",
        "valid": [
            "displayed"
        ],
        "difficulty": "hard",
        "definition": "Form of display: something intended to communicate a particular impression.",
        "sentence": "Are they displayed all through the year?",
        "partOfSpeech": "noun"
    },
    {
        "word": "reduced",
        "valid": [
            "reduced"
        ],
        "difficulty": "medium",
        "definition": "Made less in size or amount or degree.",
        "sentence": "His classmates' jeers reduced him to tears.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "physics",
        "valid": [
            "physics"
        ],
        "difficulty": "medium",
        "definition": "The science of matter and energy and their interactions.",
        "sentence": "His favorite subject was physics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rare",
        "valid": [
            "rare"
        ],
        "difficulty": "easy",
        "definition": "Not widely known; especially valued for its uncommonness.",
        "sentence": "Rare herbs.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "spent",
        "valid": [
            "spent"
        ],
        "difficulty": "easy",
        "definition": "Depleted of energy, force, or strength.",
        "sentence": "I spent twelve hours on the train.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "performed",
        "valid": [
            "performed"
        ],
        "difficulty": "hard",
        "definition": "Form of perform: carry out or perform an action.",
        "sentence": "Rituals were performed in churches.",
        "partOfSpeech": "verb"
    },
    {
        "word": "extreme",
        "valid": [
            "extreme"
        ],
        "difficulty": "medium",
        "definition": "The furthest or highest degree of something.",
        "sentence": "The extreme edge of town.",
        "partOfSpeech": "noun"
    },
    {
        "word": "samples",
        "valid": [
            "samples"
        ],
        "difficulty": "medium",
        "definition": "Form of sample: a small part of something intended as representative of the whole.",
        "sentence": "Some hospitals hand out free samples of baby milk.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bars",
        "valid": [
            "bars"
        ],
        "difficulty": "easy",
        "definition": "Gymnastic apparatus consisting of two parallel wooden rods supported on uprights.",
        "sentence": "There go the twelve bars blues.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reviewed",
        "valid": [
            "reviewed"
        ],
        "difficulty": "hard",
        "definition": "Form of review: a new appraisal or evaluation.",
        "sentence": "I need it by the morning of April 5, so it can be reviewed by other members prior to the meeting.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forecast",
        "valid": [
            "forecast"
        ],
        "difficulty": "hard",
        "definition": "A prediction about how something (as the weather) will develop.",
        "sentence": "Unexpectedly the weather forecast came true yesterday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "removed",
        "valid": [
            "removed"
        ],
        "difficulty": "medium",
        "definition": "Separated in relationship by a given degree of descent.",
        "sentence": "The obstacles to our progress have been removed at last.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "helps",
        "valid": [
            "helps"
        ],
        "difficulty": "easy",
        "definition": "Form of help: the activity of contributing to the fulfillment of a need or furtherance of an effort or purpose.",
        "sentence": "When you're trying to prove something, it helps to know it's true.",
        "partOfSpeech": "noun"
    },
    {
        "word": "singles",
        "valid": [
            "singles"
        ],
        "difficulty": "medium",
        "definition": "Badminton played with one person on each side.",
        "sentence": "I'd like to break this 100 dollar bill into four 20 dollar bills and twenty singles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "administrator",
        "valid": [
            "administrator"
        ],
        "difficulty": "expert",
        "definition": "Someone who administers a business.",
        "sentence": "You will receive a confirmation email after your account has been activated by an administrator.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cycle",
        "valid": [
            "cycle"
        ],
        "difficulty": "easy",
        "definition": "An interval during which a recurring sequence of events occurs.",
        "sentence": "A year constitutes a cycle of the seasons.",
        "partOfSpeech": "noun"
    },
    {
        "word": "amounts",
        "valid": [
            "amounts"
        ],
        "difficulty": "medium",
        "definition": "Form of amount: a quantity of money.",
        "sentence": "Your suggestion amounts to an order.",
        "partOfSpeech": "noun"
    },
    {
        "word": "contain",
        "valid": [
            "contain"
        ],
        "difficulty": "medium",
        "definition": "Include or contain; have as a component.",
        "sentence": "Contain the rebel movement.",
        "partOfSpeech": "verb"
    },
    {
        "word": "accuracy",
        "valid": [
            "accuracy"
        ],
        "difficulty": "hard",
        "definition": "The quality of being near to the true value.",
        "sentence": "He was beginning to doubt the accuracy of his compass.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dual",
        "valid": [
            "dual"
        ],
        "difficulty": "easy",
        "definition": "Consisting of or involving two parts or components usually in pairs.",
        "sentence": "Ancient Greek had the dual form but it has merged with the plural form in modern Greek.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "rise",
        "valid": [
            "rise"
        ],
        "difficulty": "easy",
        "definition": "A growth in strength or number or importance.",
        "sentence": "They asked for a 10% rise in rates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sleep",
        "valid": [
            "sleep"
        ],
        "difficulty": "easy",
        "definition": "A natural and periodic state of rest during which consciousness of the world is suspended.",
        "sentence": "They had to put their family pet to sleep.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bird",
        "valid": [
            "bird"
        ],
        "difficulty": "easy",
        "definition": "Warm-blooded egg-laying vertebrates characterized by feathers and forelimbs modified as wings.",
        "sentence": "The early bird catches the worm.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pharmacy",
        "valid": [
            "pharmacy"
        ],
        "difficulty": "hard",
        "definition": "The art and science of preparing and dispensing drugs and medicines,.",
        "sentence": "Where's the nearest pharmacy?",
        "partOfSpeech": "noun"
    },
    {
        "word": "creation",
        "valid": [
            "creation"
        ],
        "difficulty": "hard",
        "definition": "The human act of creating.",
        "sentence": "From its creation the plan was doomed to failure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "static",
        "valid": [
            "static"
        ],
        "difficulty": "medium",
        "definition": "A crackling or hissing noise caused by electrical interference.",
        "sentence": "They will probably give you a lot of static about your editorial.",
        "partOfSpeech": "noun"
    },
    {
        "word": "scene",
        "valid": [
            "scene"
        ],
        "difficulty": "easy",
        "definition": "The place where some action occurs.",
        "sentence": "Their parting was a sad scene.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hunter",
        "valid": [
            "hunter"
        ],
        "difficulty": "medium",
        "definition": "Someone who hunts game.",
        "sentence": "A treasure hunter.",
        "partOfSpeech": "noun"
    },
    {
        "word": "addresses",
        "valid": [
            "addresses"
        ],
        "difficulty": "hard",
        "definition": "Form of address: (computer science) the code that identifies where a piece of information is stored.",
        "sentence": "There was a bug in my Address Book and many addresses including yours were deleted.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lady",
        "valid": [
            "lady"
        ],
        "difficulty": "easy",
        "definition": "A polite name for any woman.",
        "sentence": "A chauffeur opened the door of the limousine for the grand lady.",
        "partOfSpeech": "noun"
    },
    {
        "word": "crystal",
        "valid": [
            "crystal"
        ],
        "difficulty": "medium",
        "definition": "A solid formed by the solidification of a chemical and having a highly regular atomic structure.",
        "sentence": "A crystal chandelier was hanging over the table.",
        "partOfSpeech": "noun"
    },
    {
        "word": "famous",
        "valid": [
            "famous"
        ],
        "difficulty": "medium",
        "definition": "Widely known and esteemed.",
        "sentence": "A famous actor.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "writer",
        "valid": [
            "writer"
        ],
        "difficulty": "medium",
        "definition": "Writes (books or stories or articles or the like) professionally (for pay).",
        "sentence": "My friends say I'm a prolific writer, but I haven't written anything for months.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chairman",
        "valid": [
            "chairman"
        ],
        "difficulty": "hard",
        "definition": "The officer who presides at the meetings of an organization.",
        "sentence": "And I call on the chairman of the Education Committee to support the motion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "violence",
        "valid": [
            "violence"
        ],
        "difficulty": "hard",
        "definition": "An act of aggression (as one against a person who resists).",
        "sentence": "He may accomplish by craft in the long run what he cannot do by force and violence in the short one.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fans",
        "valid": [
            "fans"
        ],
        "difficulty": "easy",
        "definition": "Form of fan: a device for creating a current of air by movement of a surface or surfaces.",
        "sentence": "Pop artists thrive on the adulation of their loyal fans.",
        "partOfSpeech": "noun"
    },
    {
        "word": "speakers",
        "valid": [
            "speakers"
        ],
        "difficulty": "hard",
        "definition": "Form of speaker: someone who expresses in language; someone who talks (especially someone who delivers a public speech or someone especially garrulous).",
        "sentence": "Some people kept interrupting the speakers, and finally broke up the meeting.",
        "partOfSpeech": "noun"
    },
    {
        "word": "drink",
        "valid": [
            "drink"
        ],
        "difficulty": "easy",
        "definition": "A single serving of a beverage.",
        "sentence": "Drink was his downfall.",
        "partOfSpeech": "noun"
    },
    {
        "word": "academy",
        "valid": [
            "academy"
        ],
        "difficulty": "medium",
        "definition": "A secondary school (usually private).",
        "sentence": "His new movie earned him an Academy Award.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dynamic",
        "valid": [
            "dynamic"
        ],
        "difficulty": "medium",
        "definition": "An efficient incentive.",
        "sentence": "They hoped it would act as a spiritual dynamic on all churches.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gender",
        "valid": [
            "gender"
        ],
        "difficulty": "medium",
        "definition": "A grammatical category in inflected languages governing the agreement between nouns and pronouns and adjectives; in some languages it is quite arbitrary but in Indo-European languages it is usually based on sex or animateness.",
        "sentence": "Don't discriminate against people based on nationality, gender, or occupation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "permanent",
        "valid": [
            "permanent"
        ],
        "difficulty": "hard",
        "definition": "A series of waves in the hair made by applying heat and chemicals.",
        "sentence": "Permanent secretary to the president.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agriculture",
        "valid": [
            "agriculture"
        ],
        "difficulty": "expert",
        "definition": "A large-scale farming enterprise.",
        "sentence": "Biotechnology will bring about a revolution in agriculture.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cleaning",
        "valid": [
            "cleaning"
        ],
        "difficulty": "hard",
        "definition": "The act of making something clean.",
        "sentence": "He gave his shoes a good cleaning.",
        "partOfSpeech": "noun"
    },
    {
        "word": "constitutes",
        "valid": [
            "constitutes"
        ],
        "difficulty": "expert",
        "definition": "Form of constitute: form or compose.",
        "sentence": "A severed penis constitutes a solid piece of evidence for rape.",
        "partOfSpeech": "verb"
    },
    {
        "word": "portfolio",
        "valid": [
            "portfolio"
        ],
        "difficulty": "hard",
        "definition": "A large, flat, thin case for carrying loose papers or drawings or maps; usually leather.",
        "sentence": "He holds the portfolio for foreign affairs.",
        "partOfSpeech": "noun"
    },
    {
        "word": "practical",
        "valid": [
            "practical"
        ],
        "difficulty": "hard",
        "definition": "Concerned with actual use or practice.",
        "sentence": "Practical mathematics.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "delivered",
        "valid": [
            "delivered"
        ],
        "difficulty": "hard",
        "definition": "Form of deliver: deliver (a speech, oration, or idea).",
        "sentence": "I delivered my first child last year.",
        "partOfSpeech": "verb"
    },
    {
        "word": "collectibles",
        "valid": [
            "collectibles"
        ],
        "difficulty": "expert",
        "definition": "Form of collectible: things considered to be worth collecting (not necessarily valuable or antique).",
        "sentence": "He keeps his favorite vintage toys and collectibles on the display shelf.",
        "partOfSpeech": "noun"
    },
    {
        "word": "infrastructure",
        "valid": [
            "infrastructure"
        ],
        "difficulty": "expert",
        "definition": "The basic structure or features of a system or organization.",
        "sentence": "This blog covers topics that centre on information infrastructure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "exclusive",
        "valid": [
            "exclusive"
        ],
        "difficulty": "hard",
        "definition": "A news report that is reported first by one news organization.",
        "sentence": "Gained their exclusive attention.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seat",
        "valid": [
            "seat"
        ],
        "difficulty": "easy",
        "definition": "A space reserved for sitting (as in a theater or on a train or airplane).",
        "sentence": "He dusted off the seat before sitting down.",
        "partOfSpeech": "noun"
    },
    {
        "word": "concerns",
        "valid": [
            "concerns"
        ],
        "difficulty": "hard",
        "definition": "Form of concern: something that interests you because it is important or affects you.",
        "sentence": "Where to go and what to see were my primary concerns.",
        "partOfSpeech": "noun"
    },
    {
        "word": "colour",
        "valid": [
            "colour"
        ],
        "difficulty": "medium",
        "definition": "Any material used for its color.",
        "sentence": "In late summer and autumn one can see the leaves change colour.",
        "partOfSpeech": "noun"
    },
    {
        "word": "vendor",
        "valid": [
            "vendor"
        ],
        "difficulty": "medium",
        "definition": "Someone who promotes or exchanges goods or services for money.",
        "sentence": "The ice cream vendor is waiting on customers at his outdoor stand.",
        "partOfSpeech": "noun"
    },
    {
        "word": "originally",
        "valid": [
            "originally"
        ],
        "difficulty": "expert",
        "definition": "In an original manner.",
        "sentence": "Originally the meeting was planned for next Saturday.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "utilities",
        "valid": [
            "utilities"
        ],
        "difficulty": "hard",
        "definition": "Form of utility: a company that performs a public service; subject to government regulation.",
        "sentence": "We expect rapid growth of the utilities sector.",
        "partOfSpeech": "noun"
    },
    {
        "word": "philosophy",
        "valid": [
            "philosophy"
        ],
        "difficulty": "expert",
        "definition": "A belief (or system of beliefs) accepted as authoritative by some group or school.",
        "sentence": "Self-indulgence was his only philosophy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "regulation",
        "valid": [
            "regulation"
        ],
        "difficulty": "expert",
        "definition": "An authoritative rule.",
        "sentence": "Short haircuts were the regulation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "officers",
        "valid": [
            "officers"
        ],
        "difficulty": "hard",
        "definition": "Form of officer: any person in the armed services who holds a position of authority or command.",
        "sentence": "There were ten police officers on the spot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reduction",
        "valid": [
            "reduction"
        ],
        "difficulty": "hard",
        "definition": "The act of decreasing or reducing something.",
        "sentence": "We hope to come to an accord with them about arms reduction.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bids",
        "valid": [
            "bids"
        ],
        "difficulty": "easy",
        "definition": "Form of bid: an authoritative direction or instruction to do something.",
        "sentence": "Bids were solicited for the building of the bridge.",
        "partOfSpeech": "noun"
    },
    {
        "word": "referred",
        "valid": [
            "referred"
        ],
        "difficulty": "hard",
        "definition": "Form of refer: make reference to.",
        "sentence": "The work of Feuerbach is frequently referred to.",
        "partOfSpeech": "verb"
    },
    {
        "word": "supports",
        "valid": [
            "supports"
        ],
        "difficulty": "hard",
        "definition": "Form of support: the activity of providing for or maintaining by supplying with money or necessities.",
        "sentence": "Show me a fact which supports your idea.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nutrition",
        "valid": [
            "nutrition"
        ],
        "difficulty": "hard",
        "definition": "The organic process of nourishing or being nourished; the processes by which an organism assimilates food and uses it for growth and maintenance.",
        "sentence": "Good nutrition is vital for an infant's growth.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recording",
        "valid": [
            "recording"
        ],
        "difficulty": "hard",
        "definition": "A signal that encodes something (e.g., picture or sound) that has been recorded.",
        "sentence": "She watched the recording from a sound-proof booth.",
        "partOfSpeech": "noun"
    },
    {
        "word": "regions",
        "valid": [
            "regions"
        ],
        "difficulty": "medium",
        "definition": "Form of region: the extended spatial location of something.",
        "sentence": "Rice is grown in rainy regions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "junior",
        "valid": [
            "junior"
        ],
        "difficulty": "medium",
        "definition": "Term of address for a disrespectful and annoying male.",
        "sentence": "She is two years my junior.",
        "partOfSpeech": "noun"
    },
    {
        "word": "toll",
        "valid": [
            "toll"
        ],
        "difficulty": "easy",
        "definition": "A fee levied for the use of roads or bridges (used for maintenance).",
        "sentence": "She heard the distant toll of church bells.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cape",
        "valid": [
            "cape"
        ],
        "difficulty": "easy",
        "definition": "A strip of land projecting into a body of water.",
        "sentence": "Cape Dezhnev is 30 miles south of the Arctic Circle.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rings",
        "valid": [
            "rings"
        ],
        "difficulty": "easy",
        "definition": "Gymnastic apparatus consisting of a pair of heavy metal circles (usually covered with leather) suspended by ropes; used for gymnastic exercises.",
        "sentence": "The rings require a strong upper body.",
        "partOfSpeech": "noun"
    },
    {
        "word": "meaning",
        "valid": [
            "meaning"
        ],
        "difficulty": "medium",
        "definition": "The message that is intended or expressed or signified.",
        "sentence": "What is the meaning of this proverb?",
        "partOfSpeech": "noun"
    },
    {
        "word": "secondary",
        "valid": [
            "secondary"
        ],
        "difficulty": "hard",
        "definition": "The defensive football players who line up behind the linemen.",
        "sentence": "Played a secondary role in world events.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wonderful",
        "valid": [
            "wonderful"
        ],
        "difficulty": "hard",
        "definition": "Extraordinarily good or great; used especially as intensifiers.",
        "sentence": "As long as you stick to one style, you can't hit upon a wonderful idea.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "mine",
        "valid": [
            "mine"
        ],
        "difficulty": "easy",
        "definition": "Excavation in the earth from which ores and minerals are extracted.",
        "sentence": "Mine ores and metals.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ladies",
        "valid": [
            "ladies"
        ],
        "difficulty": "medium",
        "definition": "Form of lady: a polite name for any woman.",
        "sentence": "Ladies and gentlemen, please allow me to say a few words of welcome.",
        "partOfSpeech": "noun"
    },
    {
        "word": "henry",
        "valid": [
            "henry"
        ],
        "difficulty": "easy",
        "definition": "A unit of inductance in which an induced electromotive force of one volt is produced when the current is varied at the rate of one ampere per second.",
        "sentence": "In order to keep his original idea from being copied, Henry resorted to reticence.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ticket",
        "valid": [
            "ticket"
        ],
        "difficulty": "medium",
        "definition": "A commercial document showing that the holder is entitled to something (as to ride on public transportation or to enter a public entertainment).",
        "sentence": "This car could be just the ticket for a small family.",
        "partOfSpeech": "noun"
    },
    {
        "word": "announced",
        "valid": [
            "announced"
        ],
        "difficulty": "hard",
        "definition": "Declared publicly; made widely known.",
        "sentence": "Their announced intentions.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "guess",
        "valid": [
            "guess"
        ],
        "difficulty": "easy",
        "definition": "A message expressing an opinion based on incomplete evidence.",
        "sentence": "I guess she is angry at me for standing her up.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agreed",
        "valid": [
            "agreed"
        ],
        "difficulty": "medium",
        "definition": "United by being of the same opinion.",
        "sentence": "Agreed in their distrust of authority.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "prevention",
        "valid": [
            "prevention"
        ],
        "difficulty": "expert",
        "definition": "The act of preventing.",
        "sentence": "Money was allocated to study the cause and prevention of influenza.",
        "partOfSpeech": "noun"
    },
    {
        "word": "whom",
        "valid": [
            "whom"
        ],
        "difficulty": "easy",
        "definition": "The objective case of who. See Who. Note: In Old English, whom was also commonly used as a dative. Cf. Him. And every grass that groweth upon root She shall eke know, and whom it w.",
        "sentence": "You don't marry someone you can live with \u2014 you marry the person whom you cannot live without.",
        "partOfSpeech": "noun"
    },
    {
        "word": "soccer",
        "valid": [
            "soccer"
        ],
        "difficulty": "medium",
        "definition": "A football game in which two teams of 11 players try to kick or head a ball into the opponents' goal.",
        "sentence": "You will be able to play soccer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "math",
        "valid": [
            "math"
        ],
        "difficulty": "easy",
        "definition": "A science (or group of related sciences) dealing with the logic of quantity and shape and arrangement.",
        "sentence": "Theoretically, I'm doing math.",
        "partOfSpeech": "noun"
    },
    {
        "word": "import",
        "valid": [
            "import"
        ],
        "difficulty": "medium",
        "definition": "Commodities (goods or services) bought from a foreign country.",
        "sentence": "The import of his announcement was ambiguous.",
        "partOfSpeech": "noun"
    },
    {
        "word": "posting",
        "valid": [
            "posting"
        ],
        "difficulty": "medium",
        "definition": "A sign posted in a public place as an advertisement.",
        "sentence": "The posting was made in the cash account.",
        "partOfSpeech": "noun"
    },
    {
        "word": "presence",
        "valid": [
            "presence"
        ],
        "difficulty": "hard",
        "definition": "The state of being present; current existence.",
        "sentence": "He felt the presence of an evil force.",
        "partOfSpeech": "noun"
    },
    {
        "word": "instant",
        "valid": [
            "instant"
        ],
        "difficulty": "medium",
        "definition": "A very short time (as the time it takes the eye to blink or the heart to beat).",
        "sentence": "An instant need.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mentioned",
        "valid": [
            "mentioned"
        ],
        "difficulty": "hard",
        "definition": "Form of mention: a remark that calls attention to something or someone.",
        "sentence": "Now that you've mentioned it, you're right.",
        "partOfSpeech": "noun"
    },
    {
        "word": "automatic",
        "valid": [
            "automatic"
        ],
        "difficulty": "hard",
        "definition": "Light machine gun.",
        "sentence": "Automatic transmission.",
        "partOfSpeech": "noun"
    },
    {
        "word": "healthcare",
        "valid": [
            "healthcare"
        ],
        "difficulty": "expert",
        "definition": "The preservation of mental and physical health by preventing or treating illness through services offered by the health profession.",
        "sentence": "Some healthcare workers spend more time doing paperwork than taking care of patients.",
        "partOfSpeech": "noun"
    },
    {
        "word": "viewing",
        "valid": [
            "viewing"
        ],
        "difficulty": "medium",
        "definition": "The display of a motion picture.",
        "sentence": "I'm sorry that I had been viewing you as a liar until just a few minutes ago.",
        "partOfSpeech": "noun"
    },
    {
        "word": "maintained",
        "valid": [
            "maintained"
        ],
        "difficulty": "expert",
        "definition": "Kept in good condition.",
        "sentence": "Is your apartment well maintained?",
        "partOfSpeech": "adjective"
    },
    {
        "word": "increasing",
        "valid": [
            "increasing"
        ],
        "difficulty": "expert",
        "definition": "Becoming greater or larger.",
        "sentence": "Increasing prices.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "majority",
        "valid": [
            "majority"
        ],
        "difficulty": "hard",
        "definition": "The property resulting from being or relating to the greater in number of two parts; the main part.",
        "sentence": "The majority of his customers prefer it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "connected",
        "valid": [
            "connected"
        ],
        "difficulty": "hard",
        "definition": "Being joined in close association.",
        "sentence": "First check to see whether the appliance is connected.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "dogs",
        "valid": [
            "dogs"
        ],
        "difficulty": "easy",
        "definition": "Form of dog: a member of the genus Canis (probably descended from the common wolf) that has been domesticated by man since prehistoric times; occurs in many breeds.",
        "sentence": "Two dogs fight for a bone, and the third runs away with it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "directors",
        "valid": [
            "directors"
        ],
        "difficulty": "hard",
        "definition": "Form of director: someone who controls resources and expenditures.",
        "sentence": "The Board of Directors aim is to make decisions regarding business affairs of the company.",
        "partOfSpeech": "noun"
    },
    {
        "word": "aspects",
        "valid": [
            "aspects"
        ],
        "difficulty": "medium",
        "definition": "Form of aspect: a distinct feature or element in a problem.",
        "sentence": "Education is one of the most essential aspects of life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ahead",
        "valid": [
            "ahead"
        ],
        "difficulty": "easy",
        "definition": "Having the leading position or higher score in a contest.",
        "sentence": "I see the lights of a town ahead.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "moon",
        "valid": [
            "moon"
        ],
        "difficulty": "easy",
        "definition": "The natural satellite of the Earth.",
        "sentence": "The average distance to the Moon is 384,400 kilometers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "participation",
        "valid": [
            "participation"
        ],
        "difficulty": "expert",
        "definition": "The act of sharing in the activities of a group.",
        "sentence": "The company is open for equity participation by anybody.",
        "partOfSpeech": "noun"
    },
    {
        "word": "scheme",
        "valid": [
            "scheme"
        ],
        "difficulty": "medium",
        "definition": "An elaborate and systematic plan of action.",
        "sentence": "Your scheme is like a house built on the sand.",
        "partOfSpeech": "noun"
    },
    {
        "word": "utility",
        "valid": [
            "utility"
        ],
        "difficulty": "medium",
        "definition": "A company that performs a public service; subject to government regulation.",
        "sentence": "A computer system provides utility programs to perform the tasks needed by most users.",
        "partOfSpeech": "noun"
    },
    {
        "word": "preview",
        "valid": [
            "preview"
        ],
        "difficulty": "medium",
        "definition": "An advertisement consisting of short scenes from a motion picture that will appear in the near future.",
        "sentence": "There was a special sneak preview last night.",
        "partOfSpeech": "noun"
    },
    {
        "word": "manner",
        "valid": [
            "manner"
        ],
        "difficulty": "medium",
        "definition": "How something is done or how it happens.",
        "sentence": "Her dignified manner.",
        "partOfSpeech": "noun"
    },
    {
        "word": "matrix",
        "valid": [
            "matrix"
        ],
        "difficulty": "medium",
        "definition": "A rectangular array of quantities or expressions set out by rows and columns; treated as a single element and manipulated according to rules.",
        "sentence": "The problem will be easier to solve if you write the system of equations as a matrix.",
        "partOfSpeech": "noun"
    },
    {
        "word": "containing",
        "valid": [
            "containing"
        ],
        "difficulty": "expert",
        "definition": "Form of contain: include or contain; have as a component.",
        "sentence": "I addressed the envelope containing the invitation.",
        "partOfSpeech": "verb"
    },
    {
        "word": "combination",
        "valid": [
            "combination"
        ],
        "difficulty": "expert",
        "definition": "A collection of things that have been combined; an assemblage of separate parts or qualities.",
        "sentence": "They were a winning combination.",
        "partOfSpeech": "noun"
    },
    {
        "word": "amendment",
        "valid": [
            "amendment"
        ],
        "difficulty": "hard",
        "definition": "The act of amending or correcting.",
        "sentence": "The amendment was first proposed in 1789.",
        "partOfSpeech": "noun"
    },
    {
        "word": "despite",
        "valid": [
            "despite"
        ],
        "difficulty": "medium",
        "definition": "Lack of respect accompanied by a feeling of intense dislike.",
        "sentence": "She wanted neither favor nor despite.",
        "partOfSpeech": "noun"
    },
    {
        "word": "strength",
        "valid": [
            "strength"
        ],
        "difficulty": "hard",
        "definition": "The property of being physically or mentally strong.",
        "sentence": "Fatigue sapped his strength.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guaranteed",
        "valid": [
            "guaranteed"
        ],
        "difficulty": "expert",
        "definition": "Form of guarantee: a written assurance that some product or service will be provided or will meet certain specifications.",
        "sentence": "The manufacturer guaranteed the new machine for 5 years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "turkey",
        "valid": [
            "turkey"
        ],
        "difficulty": "medium",
        "definition": "Large gallinaceous bird with fan-shaped tail; widely domesticated for food.",
        "sentence": "The first experiment was a real turkey.",
        "partOfSpeech": "noun"
    },
    {
        "word": "libraries",
        "valid": [
            "libraries"
        ],
        "difficulty": "hard",
        "definition": "Form of library: a room where books are kept.",
        "sentence": "We consider it the citizens' legitimate right to have public libraries.",
        "partOfSpeech": "noun"
    },
    {
        "word": "proper",
        "valid": [
            "proper"
        ],
        "difficulty": "medium",
        "definition": "Marked by suitability or rightness or appropriateness.",
        "sentence": "Everything in its proper place.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "distributed",
        "valid": [
            "distributed"
        ],
        "difficulty": "expert",
        "definition": "Spread out or scattered about or divided up.",
        "sentence": "The agenda for the meeting has been distributed.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "degrees",
        "valid": [
            "degrees"
        ],
        "difficulty": "medium",
        "definition": "Form of degree: a position on a scale of intensity or amount or quality.",
        "sentence": "Water freezes at zero degrees Celsius, doesn't it?",
        "partOfSpeech": "noun"
    },
    {
        "word": "singapore",
        "valid": [
            "singapore"
        ],
        "difficulty": "hard",
        "definition": "The capital of Singapore; one of the world's biggest ports.",
        "sentence": "Bin lived in Singapore.",
        "partOfSpeech": "noun"
    },
    {
        "word": "enterprises",
        "valid": [
            "enterprises"
        ],
        "difficulty": "expert",
        "definition": "Form of enterprise: a purposeful or industrious undertaking (especially one that requires effort or boldness).",
        "sentence": "The enterprises carried the five-day workweek.",
        "partOfSpeech": "noun"
    },
    {
        "word": "delta",
        "valid": [
            "delta"
        ],
        "difficulty": "easy",
        "definition": "A low triangular area of alluvial deposits where a river divides before entering a larger body of water.",
        "sentence": "The Mississippi River delta.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fear",
        "valid": [
            "fear"
        ],
        "difficulty": "easy",
        "definition": "An emotion experienced in anticipation of some specific pain or danger (usually accompanied by a desire to flee or fight).",
        "sentence": "The fear of God.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seeking",
        "valid": [
            "seeking"
        ],
        "difficulty": "medium",
        "definition": "The act of searching for something.",
        "sentence": "I am seeking the path to the end of the universe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "inches",
        "valid": [
            "inches"
        ],
        "difficulty": "medium",
        "definition": "Form of inch: a unit of length equal to one twelfth of a foot.",
        "sentence": "Tom is three inches taller than his wife is.",
        "partOfSpeech": "noun"
    },
    {
        "word": "phoenix",
        "valid": [
            "phoenix"
        ],
        "difficulty": "medium",
        "definition": "The state capital and largest city located in south central Arizona; situated in a former desert that has become a prosperous agricultural area thanks to irrigation.",
        "sentence": "Phoenix is the capital of Arizona.",
        "partOfSpeech": "noun"
    },
    {
        "word": "convention",
        "valid": [
            "convention"
        ],
        "difficulty": "expert",
        "definition": "A large formal assembly.",
        "sentence": "The convention of not naming the main character.",
        "partOfSpeech": "noun"
    },
    {
        "word": "shares",
        "valid": [
            "shares"
        ],
        "difficulty": "medium",
        "definition": "Form of share: assets belonging to or due to or contributed by an individual person or group.",
        "sentence": "A record number of shares changed hands in busy trading as prices soared to a historic high.",
        "partOfSpeech": "noun"
    },
    {
        "word": "principal",
        "valid": [
            "principal"
        ],
        "difficulty": "hard",
        "definition": "The original amount of a debt on which interest is calculated.",
        "sentence": "She sent unruly pupils to see the principal.",
        "partOfSpeech": "noun"
    },
    {
        "word": "daughter",
        "valid": [
            "daughter"
        ],
        "difficulty": "hard",
        "definition": "A female human offspring.",
        "sentence": "Her daughter cared for her in her old age.",
        "partOfSpeech": "noun"
    },
    {
        "word": "standing",
        "valid": [
            "standing"
        ],
        "difficulty": "hard",
        "definition": "Social or financial or professional status or reputation.",
        "sentence": "Of equal standing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comfort",
        "valid": [
            "comfort"
        ],
        "difficulty": "medium",
        "definition": "A state of being relaxed and feeling no pain.",
        "sentence": "It gave comfort to the enemy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "colors",
        "valid": [
            "colors"
        ],
        "difficulty": "medium",
        "definition": "A flag that shows its nationality.",
        "sentence": "His tie proclaimed his school colors.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wars",
        "valid": [
            "wars"
        ],
        "difficulty": "easy",
        "definition": "Form of war: the waging of armed conflict against an enemy.",
        "sentence": "We have seen three wars.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ordering",
        "valid": [
            "ordering"
        ],
        "difficulty": "hard",
        "definition": "Logical or comprehensible arrangement of separate elements.",
        "sentence": "There were mistakes in the ordering of items on the list.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kept",
        "valid": [
            "kept"
        ],
        "difficulty": "easy",
        "definition": "Not violated or disregarded.",
        "sentence": "Promises kept.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "alpha",
        "valid": [
            "alpha"
        ],
        "difficulty": "easy",
        "definition": "The 1st letter of the Greek alphabet.",
        "sentence": "Alpha version.",
        "partOfSpeech": "noun"
    },
    {
        "word": "appeal",
        "valid": [
            "appeal"
        ],
        "difficulty": "medium",
        "definition": "Earnest or urgent request.",
        "sentence": "Their appeal was denied in the superior court.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cruise",
        "valid": [
            "cruise"
        ],
        "difficulty": "medium",
        "definition": "An ocean trip taken for pleasure.",
        "sentence": "The prize money enabled me to go on a world cruise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bonus",
        "valid": [
            "bonus"
        ],
        "difficulty": "easy",
        "definition": "Anything that tends to arouse.",
        "sentence": "My bonus doesn't come close to covering all the loan payments I have to make.",
        "partOfSpeech": "noun"
    },
    {
        "word": "certification",
        "valid": [
            "certification"
        ],
        "difficulty": "expert",
        "definition": "The act of certifying or bestowing a franchise on.",
        "sentence": "You can skip stage three of the certification process and advance immediately to stage six.",
        "partOfSpeech": "noun"
    },
    {
        "word": "previously",
        "valid": [
            "previously"
        ],
        "difficulty": "expert",
        "definition": "At an earlier time or formerly.",
        "sentence": "She had previously lived in Chicago.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "bookmark",
        "valid": [
            "bookmark"
        ],
        "difficulty": "hard",
        "definition": "A marker (a piece of paper or ribbon) placed between the pages of a book to mark the reader's place.",
        "sentence": "Bookmark this site.",
        "partOfSpeech": "noun"
    },
    {
        "word": "buildings",
        "valid": [
            "buildings"
        ],
        "difficulty": "hard",
        "definition": "Form of building: a structure that has a roof and walls and stands more or less permanently in one place.",
        "sentence": "Tall buildings may sway in a strong wind.",
        "partOfSpeech": "noun"
    },
    {
        "word": "specials",
        "valid": [
            "specials"
        ],
        "difficulty": "hard",
        "definition": "Form of special: a special offering (usually temporary and at a reduced price) that is featured in advertising.",
        "sentence": "What are today's specials?",
        "partOfSpeech": "noun"
    },
    {
        "word": "beat",
        "valid": [
            "beat"
        ],
        "difficulty": "easy",
        "definition": "A regular route for a sentry or policeman.",
        "sentence": "The cox raised the beat.",
        "partOfSpeech": "noun"
    },
    {
        "word": "disney",
        "valid": [
            "disney"
        ],
        "difficulty": "medium",
        "definition": "United States film maker who pioneered animated cartoons and created such characters as Mickey Mouse and Donald Duck; founded Disneyland (1901-1966).",
        "sentence": "He likes Disney.",
        "partOfSpeech": "noun"
    },
    {
        "word": "household",
        "valid": [
            "household"
        ],
        "difficulty": "hard",
        "definition": "A social unit living together.",
        "sentence": "It was a good Christian household.",
        "partOfSpeech": "noun"
    },
    {
        "word": "batteries",
        "valid": [
            "batteries"
        ],
        "difficulty": "hard",
        "definition": "Form of battery: group of guns or missile launchers operated together at one place.",
        "sentence": "I would like batteries for this device.",
        "partOfSpeech": "noun"
    },
    {
        "word": "smoking",
        "valid": [
            "smoking"
        ],
        "difficulty": "medium",
        "definition": "The act of smoking tobacco or other substances.",
        "sentence": "Smoking stinks.",
        "partOfSpeech": "noun"
    },
    {
        "word": "becomes",
        "valid": [
            "becomes"
        ],
        "difficulty": "medium",
        "definition": "Form of become: enter or assume a certain state or condition.",
        "sentence": "Your new dress becomes you very well.",
        "partOfSpeech": "verb"
    },
    {
        "word": "drives",
        "valid": [
            "drives"
        ],
        "difficulty": "medium",
        "definition": "Form of drive: the act of applying force to propel something.",
        "sentence": "Bad money drives out good.",
        "partOfSpeech": "noun"
    },
    {
        "word": "arms",
        "valid": [
            "arms"
        ],
        "difficulty": "easy",
        "definition": "Weapons considered collectively.",
        "sentence": "The manager sat on the bench with his arms folded.",
        "partOfSpeech": "noun"
    },
    {
        "word": "improved",
        "valid": [
            "improved"
        ],
        "difficulty": "hard",
        "definition": "Made more desirable or valuable or profitable; especially made ready for use or marketing.",
        "sentence": "Was proud of his improved grades.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "trees",
        "valid": [
            "trees"
        ],
        "difficulty": "easy",
        "definition": "Form of tree: a tall perennial woody plant having a main trunk and branches forming a distinct elevated crown; includes both gymnosperms and angiosperms.",
        "sentence": "Money does not grow on trees.",
        "partOfSpeech": "noun"
    },
    {
        "word": "achieve",
        "valid": [
            "achieve"
        ],
        "difficulty": "medium",
        "definition": "To gain with effort.",
        "sentence": "You cannot achieve the impossible without attempting the absurd.",
        "partOfSpeech": "verb"
    },
    {
        "word": "positions",
        "valid": [
            "positions"
        ],
        "difficulty": "hard",
        "definition": "Form of position: the particular portion of space occupied by something.",
        "sentence": "There are few high-ranking positions left open for you.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dress",
        "valid": [
            "dress"
        ],
        "difficulty": "easy",
        "definition": "A one-piece garment for a woman; has skirt and bodice.",
        "sentence": "Fastidious about his dress.",
        "partOfSpeech": "noun"
    },
    {
        "word": "subscription",
        "valid": [
            "subscription"
        ],
        "difficulty": "expert",
        "definition": "A payment for consecutive issues of a newspaper or magazine for a given period of time.",
        "sentence": "The deed was attested by the subscription of his signature.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dealer",
        "valid": [
            "dealer"
        ],
        "difficulty": "medium",
        "definition": "Someone who purchases and maintains an inventory of goods to be sold.",
        "sentence": "A dealer in stolen goods.",
        "partOfSpeech": "noun"
    },
    {
        "word": "contemporary",
        "valid": [
            "contemporary"
        ],
        "difficulty": "expert",
        "definition": "A person of nearly the same age as another.",
        "sentence": "Contemporary leaders.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nearby",
        "valid": [
            "nearby"
        ],
        "difficulty": "medium",
        "definition": "Close at hand.",
        "sentence": "The nearby towns.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "carried",
        "valid": [
            "carried"
        ],
        "difficulty": "medium",
        "definition": "Form of carry: the act of carrying something.",
        "sentence": "The bridge was carried away by the flood.",
        "partOfSpeech": "noun"
    },
    {
        "word": "happen",
        "valid": [
            "happen"
        ],
        "difficulty": "medium",
        "definition": "Come to pass.",
        "sentence": "I happen to have just what you need!",
        "partOfSpeech": "verb"
    },
    {
        "word": "exposure",
        "valid": [
            "exposure"
        ],
        "difficulty": "hard",
        "definition": "Vulnerability to the elements; to the action of heat or cold or wind or rain.",
        "sentence": "She denounced the exposure of children to pornography.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hide",
        "valid": [
            "hide"
        ],
        "difficulty": "easy",
        "definition": "The dressed skin of an animal (especially a large animal).",
        "sentence": "Hide the money.",
        "partOfSpeech": "noun"
    },
    {
        "word": "permalink",
        "valid": [
            "permalink"
        ],
        "difficulty": "hard",
        "definition": "A permanent static URL or link to a specific web page or blog post.",
        "sentence": "Click the permalink to copy the permanent address of the article.",
        "partOfSpeech": "noun"
    },
    {
        "word": "signature",
        "valid": [
            "signature"
        ],
        "difficulty": "hard",
        "definition": "Your name written in your own handwriting.",
        "sentence": "Please return one set to us with your signature.",
        "partOfSpeech": "noun"
    },
    {
        "word": "gambling",
        "valid": [
            "gambling"
        ],
        "difficulty": "hard",
        "definition": "The act of playing for stakes in the hope of winning (including the payment of a price for a chance to win a prize).",
        "sentence": "His gambling cost him a fortune.",
        "partOfSpeech": "noun"
    },
    {
        "word": "refer",
        "valid": [
            "refer"
        ],
        "difficulty": "easy",
        "definition": "Make reference to.",
        "sentence": "Refer to your notes.",
        "partOfSpeech": "verb"
    },
    {
        "word": "miller",
        "valid": [
            "miller"
        ],
        "difficulty": "medium",
        "definition": "United States bandleader of a popular big band (1909-1944).",
        "sentence": "Too much water drowned the miller.",
        "partOfSpeech": "noun"
    },
    {
        "word": "provision",
        "valid": [
            "provision"
        ],
        "difficulty": "hard",
        "definition": "A stipulated condition.",
        "sentence": "He accepted subject to one provision.",
        "partOfSpeech": "noun"
    },
    {
        "word": "outdoors",
        "valid": [
            "outdoors"
        ],
        "difficulty": "hard",
        "definition": "Where the air is unconfined.",
        "sentence": "He wanted to get outdoors a little.",
        "partOfSpeech": "noun"
    },
    {
        "word": "clothes",
        "valid": [
            "clothes"
        ],
        "difficulty": "medium",
        "definition": "Clothing in general.",
        "sentence": "He always bought his clothes at the same store.",
        "partOfSpeech": "noun"
    },
    {
        "word": "caused",
        "valid": [
            "caused"
        ],
        "difficulty": "medium",
        "definition": "Form of cause: events that provide the generative force that is the origin of something.",
        "sentence": "What was it that caused you to change your mind?",
        "partOfSpeech": "noun"
    },
    {
        "word": "luxury",
        "valid": [
            "luxury"
        ],
        "difficulty": "medium",
        "definition": "Something that is an indulgence rather than a necessity.",
        "sentence": "A television set used to be a luxury.",
        "partOfSpeech": "noun"
    },
    {
        "word": "babes",
        "valid": [
            "babes"
        ],
        "difficulty": "easy",
        "definition": "Form of babe: a very young child (birth to 1 year) who has not yet begun to walk or talk.",
        "sentence": "He was accompanied by a bevy of buxom babes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "frames",
        "valid": [
            "frames"
        ],
        "difficulty": "medium",
        "definition": "Form of frame: the framework for a pair of eyeglasses.",
        "sentence": "I need to buy new spectacle frames.",
        "partOfSpeech": "noun"
    },
    {
        "word": "certainly",
        "valid": [
            "certainly"
        ],
        "difficulty": "hard",
        "definition": "Definitely or positively (`sure' is sometimes used informally for `surely').",
        "sentence": "She certainly is a hard worker.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "indeed",
        "valid": [
            "indeed"
        ],
        "difficulty": "medium",
        "definition": "In truth (often tends to intensify).",
        "sentence": "Wants to marry the butler? Indeed!",
        "partOfSpeech": "adverb"
    },
    {
        "word": "newspaper",
        "valid": [
            "newspaper"
        ],
        "difficulty": "hard",
        "definition": "A daily or weekly publication on folded sheets; contains news and articles and advertisements.",
        "sentence": "When it began to rain he covered his head with a newspaper.",
        "partOfSpeech": "noun"
    },
    {
        "word": "circuit",
        "valid": [
            "circuit"
        ],
        "difficulty": "medium",
        "definition": "An electrical device that provides a path for electrical current to flow.",
        "sentence": "We took a quick circuit of the park.",
        "partOfSpeech": "noun"
    },
    {
        "word": "layer",
        "valid": [
            "layer"
        ],
        "difficulty": "easy",
        "definition": "Single thickness of usually some homogeneous substance.",
        "sentence": "Layer the different colored sands.",
        "partOfSpeech": "noun"
    },
    {
        "word": "printed",
        "valid": [
            "printed"
        ],
        "difficulty": "medium",
        "definition": "Form of print: the text appearing in a book, newspaper, or other printed publication.",
        "sentence": "As it was printed in haste, the book has many misprints.",
        "partOfSpeech": "noun"
    },
    {
        "word": "slow",
        "valid": [
            "slow"
        ],
        "difficulty": "easy",
        "definition": "Lose velocity; move more slowly.",
        "sentence": "Business is dull (or slow).",
        "partOfSpeech": "verb"
    },
    {
        "word": "removal",
        "valid": [
            "removal"
        ],
        "difficulty": "medium",
        "definition": "The act of removing.",
        "sentence": "He had surgery for the removal of a malignancy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "easier",
        "valid": [
            "easier"
        ],
        "difficulty": "medium",
        "definition": "Form of easy: posing no difficulty; requiring little effort.",
        "sentence": "It is easier to hit on people on the Internet than in the street.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "liability",
        "valid": [
            "liability"
        ],
        "difficulty": "hard",
        "definition": "The state of being legally obliged and responsible.",
        "sentence": "He denies any liability for the damage caused.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trademark",
        "valid": [
            "trademark"
        ],
        "difficulty": "hard",
        "definition": "A distinctive characteristic or attribute.",
        "sentence": "The trademark is very well known.",
        "partOfSpeech": "noun"
    },
    {
        "word": "printers",
        "valid": [
            "printers"
        ],
        "difficulty": "hard",
        "definition": "Form of printer: someone whose occupation is printing.",
        "sentence": "The only time printers don't work is when you need them to.",
        "partOfSpeech": "noun"
    },
    {
        "word": "faqs",
        "valid": [
            "faqs"
        ],
        "difficulty": "easy",
        "definition": "Form of faq: a list of questions that are frequently asked (about a given topic) along with their answers.",
        "sentence": "Please read the faqs section before contacting technical support.",
        "partOfSpeech": "noun"
    },
    {
        "word": "nine",
        "valid": [
            "nine"
        ],
        "difficulty": "easy",
        "definition": "The cardinal number that is the sum of eight and one.",
        "sentence": "You must come back before nine o'clock.",
        "partOfSpeech": "noun"
    },
    {
        "word": "adding",
        "valid": [
            "adding"
        ],
        "difficulty": "medium",
        "definition": "Form of add: a condition (mostly in boys) characterized by behavioral and learning disorders.",
        "sentence": "How about adding a little bit more salt?",
        "partOfSpeech": "noun"
    },
    {
        "word": "mostly",
        "valid": [
            "mostly"
        ],
        "difficulty": "medium",
        "definition": "In large part; mainly or chiefly.",
        "sentence": "A motel is like a hotel only much smaller and is used mostly by people traveling by automobile.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "spot",
        "valid": [
            "spot"
        ],
        "difficulty": "easy",
        "definition": "A point located with respect to surface features of some region.",
        "sentence": "Night spot.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trackback",
        "valid": [
            "trackback"
        ],
        "difficulty": "hard",
        "definition": "A mechanism allowing a blogger to see who linked to their post.",
        "sentence": "The author added a trackback to reference the original blog post.",
        "partOfSpeech": "noun"
    },
    {
        "word": "prints",
        "valid": [
            "prints"
        ],
        "difficulty": "medium",
        "definition": "Form of print: the text appearing in a book, newspaper, or other printed publication.",
        "sentence": "This firm prints a lot of educational books.",
        "partOfSpeech": "noun"
    },
    {
        "word": "spend",
        "valid": [
            "spend"
        ],
        "difficulty": "easy",
        "definition": "Use up a period of time in a specific way.",
        "sentence": "Spend money.",
        "partOfSpeech": "verb"
    },
    {
        "word": "factory",
        "valid": [
            "factory"
        ],
        "difficulty": "medium",
        "definition": "A plant consisting of one or more buildings with facilities for manufacturing.",
        "sentence": "Thanks to the technological innovation, the maximum output of the factory has doubled.",
        "partOfSpeech": "noun"
    },
    {
        "word": "interior",
        "valid": [
            "interior"
        ],
        "difficulty": "hard",
        "definition": "The region that is inside of something.",
        "sentence": "Interior regions of the earth.",
        "partOfSpeech": "noun"
    },
    {
        "word": "revised",
        "valid": [
            "revised"
        ],
        "difficulty": "medium",
        "definition": "Improved or brought up to date.",
        "sentence": "A revised edition.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "grow",
        "valid": [
            "grow"
        ],
        "difficulty": "easy",
        "definition": "Pass into a condition gradually, take on a specific property or attribute; become.",
        "sentence": "Corn doesn't grow here.",
        "partOfSpeech": "verb"
    },
    {
        "word": "americans",
        "valid": [
            "americans"
        ],
        "difficulty": "hard",
        "definition": "Form of american: a native or inhabitant of the United States.",
        "sentence": "It's hard to tell Englishmen from Americans just by the way they look.",
        "partOfSpeech": "noun"
    },
    {
        "word": "optical",
        "valid": [
            "optical"
        ],
        "difficulty": "medium",
        "definition": "Of or relating to or involving light or optics.",
        "sentence": "Optical supplies.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "promotion",
        "valid": [
            "promotion"
        ],
        "difficulty": "hard",
        "definition": "A message issued in behalf of some product or cause or idea or person or institution.",
        "sentence": "You are the next in line for promotion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "relative",
        "valid": [
            "relative"
        ],
        "difficulty": "hard",
        "definition": "A person related by blood or marriage.",
        "sentence": "A relative stranger.",
        "partOfSpeech": "noun"
    },
    {
        "word": "amazing",
        "valid": [
            "amazing"
        ],
        "difficulty": "medium",
        "definition": "Surprising greatly.",
        "sentence": "New York is an amazing city.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "clock",
        "valid": [
            "clock"
        ],
        "difficulty": "easy",
        "definition": "A timepiece that shows the time of day.",
        "sentence": "The clock in the church tower struck nine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "identity",
        "valid": [
            "identity"
        ],
        "difficulty": "hard",
        "definition": "The distinct personality of an individual regarded as a persisting entity.",
        "sentence": "You can lose your identity when you join the army.",
        "partOfSpeech": "noun"
    },
    {
        "word": "suites",
        "valid": [
            "suites"
        ],
        "difficulty": "medium",
        "definition": "Form of suit: a set of garments (usually including a jacket and trousers or skirt) for outerwear all of the same fabric and color.",
        "sentence": "I found the suites capacious, the sofas commodious, the sandwiches copious.",
        "partOfSpeech": "noun"
    },
    {
        "word": "conversion",
        "valid": [
            "conversion"
        ],
        "difficulty": "expert",
        "definition": "An event that results in a transformation.",
        "sentence": "His conversion to the Catholic faith.",
        "partOfSpeech": "noun"
    },
    {
        "word": "feeling",
        "valid": [
            "feeling"
        ],
        "difficulty": "medium",
        "definition": "The experiencing of affective and emotional states.",
        "sentence": "She had a feeling of euphoria.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hidden",
        "valid": [
            "hidden"
        ],
        "difficulty": "medium",
        "definition": "Not accessible to view.",
        "sentence": "Hidden valleys.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "reasonable",
        "valid": [
            "reasonable"
        ],
        "difficulty": "expert",
        "definition": "Showing reason or sound judgment.",
        "sentence": "Reasonable prices.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "serial",
        "valid": [
            "serial"
        ],
        "difficulty": "medium",
        "definition": "A serialized set of programs.",
        "sentence": "Serial concerts.",
        "partOfSpeech": "noun"
    },
    {
        "word": "relief",
        "valid": [
            "relief"
        ],
        "difficulty": "medium",
        "definition": "The feeling that comes when something burdensome is removed or reduced.",
        "sentence": "He asked the nurse for relief from the constant pain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "revision",
        "valid": [
            "revision"
        ],
        "difficulty": "hard",
        "definition": "The act of revising or altering (involving reconsideration and modification).",
        "sentence": "It would require a drastic revision of his opinion.",
        "partOfSpeech": "noun"
    },
    {
        "word": "broadband",
        "valid": [
            "broadband"
        ],
        "difficulty": "hard",
        "definition": "Of or relating to or being a communications network in which the bandwidth can be divided and shared by multiple simultaneous signals (as for voice or data or video).",
        "sentence": "A broadband antenna.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "influence",
        "valid": [
            "influence"
        ],
        "difficulty": "hard",
        "definition": "A power to affect persons or events especially power based on prestige etc.",
        "sentence": "Used her parents' influence to get the job.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ratio",
        "valid": [
            "ratio"
        ],
        "difficulty": "easy",
        "definition": "The relative magnitudes of two quantities (usually expressed as a quotient).",
        "sentence": "The merger was implemented on a 50-50 ratio.",
        "partOfSpeech": "noun"
    },
    {
        "word": "importance",
        "valid": [
            "importance"
        ],
        "difficulty": "expert",
        "definition": "The quality of being important and worthy of note.",
        "sentence": "The importance of a well-balanced diet.",
        "partOfSpeech": "noun"
    },
    {
        "word": "rain",
        "valid": [
            "rain"
        ],
        "difficulty": "easy",
        "definition": "Water falling in drops from vapor condensed in the atmosphere.",
        "sentence": "A rain of bullets.",
        "partOfSpeech": "noun"
    },
    {
        "word": "onto",
        "valid": [
            "onto"
        ],
        "difficulty": "easy",
        "definition": "On the top of; upon; on. See On to, under On, prep.",
        "sentence": "Try as you might, but you cannot force a belief onto someone else, much less your own self.",
        "partOfSpeech": "noun"
    },
    {
        "word": "planet",
        "valid": [
            "planet"
        ],
        "difficulty": "medium",
        "definition": "Any of the nine large celestial bodies in the solar system that revolve around the sun and shine by reflected light; Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto in order of their proximity to the sun; viewed from the constellation Hercules, all the planets rotate around the sun in a counterclockwise direction.",
        "sentence": "When I was your age, Pluto was a planet.",
        "partOfSpeech": "noun"
    },
    {
        "word": "webmaster",
        "valid": [
            "webmaster"
        ],
        "difficulty": "hard",
        "definition": "A technician who designs or maintains a website.",
        "sentence": "He was the webmaster of an anime message board.",
        "partOfSpeech": "noun"
    },
    {
        "word": "copies",
        "valid": [
            "copies"
        ],
        "difficulty": "medium",
        "definition": "Form of copy: a reproduction of a written record (e.g. of a legal or school record).",
        "sentence": "I'm going to make enlarged copies.",
        "partOfSpeech": "noun"
    },
    {
        "word": "recipe",
        "valid": [
            "recipe"
        ],
        "difficulty": "medium",
        "definition": "Directions for making something.",
        "sentence": "Can you give me the recipe?",
        "partOfSpeech": "noun"
    },
    {
        "word": "permit",
        "valid": [
            "permit"
        ],
        "difficulty": "medium",
        "definition": "A legal document giving official permission to do something.",
        "sentence": "This will permit the rain to run off.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seeing",
        "valid": [
            "seeing"
        ],
        "difficulty": "medium",
        "definition": "Perception by means of the eyes.",
        "sentence": "Stop seeing me as a \"normal\" person!",
        "partOfSpeech": "noun"
    },
    {
        "word": "proof",
        "valid": [
            "proof"
        ],
        "difficulty": "easy",
        "definition": "Any factual evidence that helps to establish the truth of something.",
        "sentence": "If you have any proof for what you say, now is the time to produce it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "diff",
        "valid": [
            "diff"
        ],
        "difficulty": "easy",
        "definition": "A difference between files or a tool that displays differences.",
        "sentence": "He ran a diff to check the changes made to the source code.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tennis",
        "valid": [
            "tennis"
        ],
        "difficulty": "medium",
        "definition": "A game played with rackets by two or four players who hit a ball back and forth over a net that divides the court.",
        "sentence": "He's Argentinean and he gives tennis lessons.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bass",
        "valid": [
            "bass"
        ],
        "difficulty": "easy",
        "definition": "The lowest part of the musical range.",
        "sentence": "A bass voice is lower than a baritone voice.",
        "partOfSpeech": "noun"
    },
    {
        "word": "prescription",
        "valid": [
            "prescription"
        ],
        "difficulty": "expert",
        "definition": "Directions prescribed beforehand; the action of prescribing authoritative rules or directions.",
        "sentence": "He told the doctor that he had been taking his prescription regularly.",
        "partOfSpeech": "noun"
    },
    {
        "word": "bedroom",
        "valid": [
            "bedroom"
        ],
        "difficulty": "medium",
        "definition": "A room used primarily for sleeping.",
        "sentence": "What happened to the girl you were sharing the bedroom with?",
        "partOfSpeech": "noun"
    },
    {
        "word": "empty",
        "valid": [
            "empty"
        ],
        "difficulty": "easy",
        "definition": "A container that has been emptied.",
        "sentence": "Empty the box.",
        "partOfSpeech": "noun"
    },
    {
        "word": "instance",
        "valid": [
            "instance"
        ],
        "difficulty": "hard",
        "definition": "An occurrence of something.",
        "sentence": "Another instance occurred yesterday.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hole",
        "valid": [
            "hole"
        ],
        "difficulty": "easy",
        "definition": "An opening into or through something.",
        "sentence": "There is a big hole in your stocking.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pets",
        "valid": [
            "pets"
        ],
        "difficulty": "easy",
        "definition": "Form of pet: a domesticated animal kept for companionship or amusement.",
        "sentence": "Before you leave home, make sure your pets have enough food.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ride",
        "valid": [
            "ride"
        ],
        "difficulty": "easy",
        "definition": "A journey in a vehicle (usually an automobile).",
        "sentence": "Don't ride me so hard over my failure.",
        "partOfSpeech": "noun"
    },
    {
        "word": "licensed",
        "valid": [
            "licensed"
        ],
        "difficulty": "hard",
        "definition": "Given official approval to act.",
        "sentence": "Licensed pharmacist.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "specifically",
        "valid": [
            "specifically"
        ],
        "difficulty": "expert",
        "definition": "In distinction from others.",
        "sentence": "A program specifically for teenagers.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "bureau",
        "valid": [
            "bureau"
        ],
        "difficulty": "medium",
        "definition": "An administrative unit of government.",
        "sentence": "The Census Bureau.",
        "partOfSpeech": "noun"
    },
    {
        "word": "represent",
        "valid": [
            "represent"
        ],
        "difficulty": "hard",
        "definition": "Take the place of or be parallel or equivalent to.",
        "sentence": "We cannot represent this knowledge to our formal reason.",
        "partOfSpeech": "verb"
    },
    {
        "word": "conservation",
        "valid": [
            "conservation"
        ],
        "difficulty": "expert",
        "definition": "An occurrence of improvement by virtue of preventing loss or injury or other change.",
        "sentence": "The organization plays a principal role in wildlife conservation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pair",
        "valid": [
            "pair"
        ],
        "difficulty": "easy",
        "definition": "A set of two similar things considered as a unit.",
        "sentence": "Pair these numbers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ideal",
        "valid": [
            "ideal"
        ],
        "difficulty": "easy",
        "definition": "The idea of something that is perfect; something that one hopes to attain.",
        "sentence": "A poem or essay may be typical of its period in idea or ideal content.",
        "partOfSpeech": "noun"
    },
    {
        "word": "specs",
        "valid": [
            "specs"
        ],
        "difficulty": "easy",
        "definition": "Optical instrument consisting of a frame that holds a pair of lenses for correcting defective vision.",
        "sentence": "Do you write specs before you write code?",
        "partOfSpeech": "noun"
    },
    {
        "word": "recorded",
        "valid": [
            "recorded"
        ],
        "difficulty": "hard",
        "definition": "Set down or registered in a permanent form especially on film or tape for reproduction.",
        "sentence": "Recorded music.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "pieces",
        "valid": [
            "pieces"
        ],
        "difficulty": "medium",
        "definition": "Form of piece: a separate part of a whole.",
        "sentence": "How many pieces of carry-on are you going to take?",
        "partOfSpeech": "noun"
    },
    {
        "word": "finished",
        "valid": [
            "finished"
        ],
        "difficulty": "hard",
        "definition": "Brought to the desired final state.",
        "sentence": "After the revolution the aristocracy was finished.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "parks",
        "valid": [
            "parks"
        ],
        "difficulty": "easy",
        "definition": "United States civil rights leader who refused to give up her seat on a bus to a white man in Montgomery (Alabama) and so triggered the national Civil Rights movement (born in 1913).",
        "sentence": "There are a lot of parks in London.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dinner",
        "valid": [
            "dinner"
        ],
        "difficulty": "medium",
        "definition": "The main meal of the day served in the evening or at midday.",
        "sentence": "Dinner will be at 8.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lawyers",
        "valid": [
            "lawyers"
        ],
        "difficulty": "medium",
        "definition": "Form of lawyer: a professional person authorized to practice law; conducts lawsuits or gives legal advice.",
        "sentence": "One of my brothers is a teacher and the others are lawyers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sydney",
        "valid": [
            "sydney"
        ],
        "difficulty": "medium",
        "definition": "The largest Australian city located in southeastern Australia on the Tasman Sea; state capital of New South Wales; Australia's chief port.",
        "sentence": "Susan and Bob have flown from London to Sydney, Australia.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stress",
        "valid": [
            "stress"
        ],
        "difficulty": "medium",
        "definition": "The relative prominence of a syllable or musical note (especially with regard to stress or pitch).",
        "sentence": "He put the stress on the wrong syllable.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cream",
        "valid": [
            "cream"
        ],
        "difficulty": "easy",
        "definition": "The best people or things in a group.",
        "sentence": "The cream of England's young men were killed in the Great War.",
        "partOfSpeech": "noun"
    },
    {
        "word": "runs",
        "valid": [
            "runs"
        ],
        "difficulty": "easy",
        "definition": "Form of run: a score in baseball made by a runner touching all four bases safely.",
        "sentence": "Two dogs fight for a bone, and the third runs away with it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trends",
        "valid": [
            "trends"
        ],
        "difficulty": "medium",
        "definition": "Form of trend: a general direction in which something tends to move.",
        "sentence": "We would like to report about the latest trends in Japan.",
        "partOfSpeech": "noun"
    },
    {
        "word": "yeah",
        "valid": [
            "yeah"
        ],
        "difficulty": "easy",
        "definition": "Not only so, but.",
        "sentence": "Everybody pulled their socks up, yeah.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "discover",
        "valid": [
            "discover"
        ],
        "difficulty": "hard",
        "definition": "Discover or determine the existence, presence, or fact of.",
        "sentence": "The story is false, so far as I can discover.",
        "partOfSpeech": "verb"
    },
    {
        "word": "patterns",
        "valid": [
            "patterns"
        ],
        "difficulty": "hard",
        "definition": "Form of pattern: a perceptual structure.",
        "sentence": "I can see some intricate patterns in the picture.",
        "partOfSpeech": "noun"
    },
    {
        "word": "boxes",
        "valid": [
            "boxes"
        ],
        "difficulty": "easy",
        "definition": "Form of box: a (usually rectangular) container; may have a lid.",
        "sentence": "Outside the school, she saw people with no homes living in cardboard boxes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hills",
        "valid": [
            "hills"
        ],
        "difficulty": "easy",
        "definition": "Form of hill: a local and well-defined elevation of the land.",
        "sentence": "The hills are bathed in sunlight.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fourth",
        "valid": [
            "fourth"
        ],
        "difficulty": "medium",
        "definition": "Following the third position; number four in a countable series.",
        "sentence": "The fourth period was moved up to the third.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advisor",
        "valid": [
            "advisor"
        ],
        "difficulty": "medium",
        "definition": "An expert who gives advice.",
        "sentence": "The company engaged him as an advisor.",
        "partOfSpeech": "noun"
    },
    {
        "word": "marketplace",
        "valid": [
            "marketplace"
        ],
        "difficulty": "expert",
        "definition": "The world of commercial activity where goods and services are bought and sold.",
        "sentence": "They were driven from the marketplace.",
        "partOfSpeech": "noun"
    },
    {
        "word": "evil",
        "valid": [
            "evil"
        ],
        "difficulty": "easy",
        "definition": "Morally objectionable behavior.",
        "sentence": "Attempts to explain the origin of evil in the world.",
        "partOfSpeech": "noun"
    },
    {
        "word": "aware",
        "valid": [
            "aware"
        ],
        "difficulty": "easy",
        "definition": "(sometimes followed by `of') having or showing knowledge or understanding or realization or perception.",
        "sentence": "If you don't understand something, it's because you aren't aware of its context.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "shape",
        "valid": [
            "shape"
        ],
        "difficulty": "easy",
        "definition": "Any spatial attributes (especially as defined by outline).",
        "sentence": "Geometry is the mathematical science of shape.",
        "partOfSpeech": "noun"
    },
    {
        "word": "evolution",
        "valid": [
            "evolution"
        ],
        "difficulty": "hard",
        "definition": "A process in which something passes by degrees to a different stage (especially a more advanced or mature stage).",
        "sentence": "The evolution of Greek civilization.",
        "partOfSpeech": "noun"
    },
    {
        "word": "certificates",
        "valid": [
            "certificates"
        ],
        "difficulty": "expert",
        "definition": "Form of certificate: a document attesting to the truth of certain stated facts.",
        "sentence": "You have no grounds for accusing Jill of stealing the stock certificates.",
        "partOfSpeech": "noun"
    },
    {
        "word": "objectives",
        "valid": [
            "objectives"
        ],
        "difficulty": "expert",
        "definition": "Form of objective: the goal intended to be attained (and which is believed to be attainable).",
        "sentence": "Endeavor to reach your objectives and do not succumb to failures.",
        "partOfSpeech": "noun"
    },
    {
        "word": "stations",
        "valid": [
            "stations"
        ],
        "difficulty": "hard",
        "definition": "(Roman Catholic Church) a devotion consisting of fourteen prayers said before a series of fourteen pictures or carvings representing successive incidents during Jesus' passage from Pilate's house to his crucifixion at Calvary.",
        "sentence": "Wherever you go, you see a lot of bicycles left on sidewalks near stations.",
        "partOfSpeech": "noun"
    },
    {
        "word": "suggested",
        "valid": [
            "suggested"
        ],
        "difficulty": "hard",
        "definition": "Form of suggest: make a proposal, declare a plan for something.",
        "sentence": "We suggested Kyoritsu Bussan approach you for assistance.",
        "partOfSpeech": "verb"
    },
    {
        "word": "remains",
        "valid": [
            "remains"
        ],
        "difficulty": "medium",
        "definition": "Any object that is left unused or still extant.",
        "sentence": "I threw out the remains of my dinner.",
        "partOfSpeech": "noun"
    },
    {
        "word": "greatest",
        "valid": [
            "greatest"
        ],
        "difficulty": "hard",
        "definition": "Highest in quality.",
        "sentence": "What is your greatest source of inspiration?",
        "partOfSpeech": "adjective"
    },
    {
        "word": "firms",
        "valid": [
            "firms"
        ],
        "difficulty": "easy",
        "definition": "Form of firm: the members of a business organization that owns or operates one or more establishments.",
        "sentence": "There are many commercial firms in New York.",
        "partOfSpeech": "noun"
    },
    {
        "word": "concerned",
        "valid": [
            "concerned"
        ],
        "difficulty": "hard",
        "definition": "Feeling or showing worry or solicitude.",
        "sentence": "Concerned parents of youthful offenders.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "euro",
        "valid": [
            "euro"
        ],
        "difficulty": "easy",
        "definition": "The basic monetary unit of most members of the European Union (introduced in 1999); in 2002 twelve European nations (Germany, France, Belgium, Luxembourg, the Netherlands, Italy, Spain, Portugal, Ireland, Greece, Austria, Finland) adopted the euro as their basic unit of money and abandoned their traditional currencies.",
        "sentence": "Before, when we still had guilders, everything was much cheaper than now with the euro.",
        "partOfSpeech": "noun"
    },
    {
        "word": "operator",
        "valid": [
            "operator"
        ],
        "difficulty": "hard",
        "definition": "A symbol or function representing a mathematical operation.",
        "sentence": "The operator of the switchboard.",
        "partOfSpeech": "noun"
    },
    {
        "word": "structures",
        "valid": [
            "structures"
        ],
        "difficulty": "expert",
        "definition": "Form of structure: a thing constructed; a complex entity constructed of many parts.",
        "sentence": "These structures would rarely, if ever, occur in spoken English.",
        "partOfSpeech": "noun"
    },
    {
        "word": "generic",
        "valid": [
            "generic"
        ],
        "difficulty": "medium",
        "definition": "Wine that does not meet the minimum qualifications and standards for use of a designation by appellation of origin (where the grapes are grown) or by varietal content; may only be labeled by proprietary (made-up) name, by general color (such as `vin rouge', `vino rosso', `rotwein', `red wine', etc.), or by general class (as `vin ordinaire', `vin de table', `vino da tavola', `tafelwein', `table wine', etc.).",
        "sentence": "Is there a generic Asian mind?",
        "partOfSpeech": "noun"
    },
    {
        "word": "encyclopedia",
        "valid": [
            "encyclopedia"
        ],
        "difficulty": "expert",
        "definition": "A reference work (often in several volumes) containing articles on various topics (often arranged in alphabetical order) dealing with the entire range of human knowledge or with some particular specialty.",
        "sentence": "A revised edition of the encyclopedia was published.",
        "partOfSpeech": "noun"
    },
    {
        "word": "usage",
        "valid": [
            "usage"
        ],
        "difficulty": "easy",
        "definition": "The act of using.",
        "sentence": "English usage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "charts",
        "valid": [
            "charts"
        ],
        "difficulty": "medium",
        "definition": "Form of chart: a visual display of information.",
        "sentence": "Someday, dear language learner, you must stop poring over IPA charts and start listening to people.",
        "partOfSpeech": "noun"
    },
    {
        "word": "continuing",
        "valid": [
            "continuing"
        ],
        "difficulty": "expert",
        "definition": "Remaining in force or being carried on without letup.",
        "sentence": "The act provided a continuing annual appropriation.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "mixed",
        "valid": [
            "mixed"
        ],
        "difficulty": "easy",
        "definition": "Consisting of a haphazard assortment of different kinds; \"sundry sciences commonly known as social\"- I.A.Richards.",
        "sentence": "A mixed program of baroque and contemporary music.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "census",
        "valid": [
            "census"
        ],
        "difficulty": "medium",
        "definition": "A periodic count of the population.",
        "sentence": "In the United States, there is a census every ten years.",
        "partOfSpeech": "noun"
    },
    {
        "word": "interracial",
        "valid": [
            "interracial"
        ],
        "difficulty": "expert",
        "definition": "Between races.",
        "sentence": "Interracial schools.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "peak",
        "valid": [
            "peak"
        ],
        "difficulty": "easy",
        "definition": "The most extreme possible amount or value.",
        "sentence": "The view from the peak was magnificent.",
        "partOfSpeech": "noun"
    },
    {
        "word": "competitive",
        "valid": [
            "competitive"
        ],
        "difficulty": "expert",
        "definition": "Involving competition or competitiveness.",
        "sentence": "Highly competitive sales representative.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "exist",
        "valid": [
            "exist"
        ],
        "difficulty": "easy",
        "definition": "Have an existence, be extant.",
        "sentence": "He could barely exist on such a low wage.",
        "partOfSpeech": "verb"
    },
    {
        "word": "wheel",
        "valid": [
            "wheel"
        ],
        "difficulty": "easy",
        "definition": "A simple machine consisting of a circular frame with spokes (or a solid disc) that can rotate on a shaft or axle (as in vehicles or other machines).",
        "sentence": "The driver turned the wheel to the right.",
        "partOfSpeech": "noun"
    },
    {
        "word": "transit",
        "valid": [
            "transit"
        ],
        "difficulty": "medium",
        "definition": "A surveying instrument for measuring horizontal and vertical angles, consisting of a small telescope mounted on a tripod.",
        "sentence": "The canal will transit hundreds of ships every day.",
        "partOfSpeech": "noun"
    },
    {
        "word": "suppliers",
        "valid": [
            "suppliers"
        ],
        "difficulty": "hard",
        "definition": "Form of supplier: someone whose business is to supply a particular service or commodity.",
        "sentence": "We face competition from foreign suppliers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "salt",
        "valid": [
            "salt"
        ],
        "difficulty": "easy",
        "definition": "A compound formed by replacing hydrogen in an acid by a metal (or a radical that acts like a metal).",
        "sentence": "People used to salt meats on ships.",
        "partOfSpeech": "noun"
    },
    {
        "word": "compact",
        "valid": [
            "compact"
        ],
        "difficulty": "medium",
        "definition": "A small cosmetics case with a mirror; to be carried in a woman's purse.",
        "sentence": "Compact soil.",
        "partOfSpeech": "noun"
    },
    {
        "word": "poetry",
        "valid": [
            "poetry"
        ],
        "difficulty": "medium",
        "definition": "Literature in metrical form.",
        "sentence": "Wine is poetry in bottles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lights",
        "valid": [
            "lights"
        ],
        "difficulty": "medium",
        "definition": "Form of light: (physics) electromagnetic radiation that can produce a visual sensation.",
        "sentence": "Please turn out the lights when you leave.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tracking",
        "valid": [
            "tracking"
        ],
        "difficulty": "hard",
        "definition": "The pursuit (of a person or animal) by following tracks or marks they left behind.",
        "sentence": "Send me the tracking number, please.",
        "partOfSpeech": "noun"
    },
    {
        "word": "angel",
        "valid": [
            "angel"
        ],
        "difficulty": "easy",
        "definition": "Spiritual being attendant upon God.",
        "sentence": "You're an angel!",
        "partOfSpeech": "noun"
    },
    {
        "word": "bell",
        "valid": [
            "bell"
        ],
        "difficulty": "easy",
        "definition": "A hollow device made of metal that makes a ringing sound when struck.",
        "sentence": "Saved by the bell.",
        "partOfSpeech": "noun"
    },
    {
        "word": "keeping",
        "valid": [
            "keeping"
        ],
        "difficulty": "medium",
        "definition": "Conformity or harmony.",
        "sentence": "He left his car in my keeping.",
        "partOfSpeech": "noun"
    },
    {
        "word": "preparation",
        "valid": [
            "preparation"
        ],
        "difficulty": "expert",
        "definition": "The activity of putting or setting in order in advance of some act or purpose.",
        "sentence": "He left the preparation of meals to his wife.",
        "partOfSpeech": "noun"
    },
    {
        "word": "attempt",
        "valid": [
            "attempt"
        ],
        "difficulty": "medium",
        "definition": "Earnest and conscientious activity intended to do or accomplish something.",
        "sentence": "They made an attempt on his life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "receiving",
        "valid": [
            "receiving"
        ],
        "difficulty": "hard",
        "definition": "Form of receive: get something; come into possession of.",
        "sentence": "This happened prior to receiving your letter.",
        "partOfSpeech": "verb"
    },
    {
        "word": "matches",
        "valid": [
            "matches"
        ],
        "difficulty": "medium",
        "definition": "Form of match: lighter consisting of a thin piece of wood or cardboard tipped with combustible chemical; ignites with friction.",
        "sentence": "Be careful handling matches!",
        "partOfSpeech": "noun"
    },
    {
        "word": "accordance",
        "valid": [
            "accordance"
        ],
        "difficulty": "expert",
        "definition": "Concurrence of opinion.",
        "sentence": "The accordance to Canada of rights of access.",
        "partOfSpeech": "noun"
    },
    {
        "word": "width",
        "valid": [
            "width"
        ],
        "difficulty": "easy",
        "definition": "The extent of something from side to side.",
        "sentence": "The road is ten feet in width.",
        "partOfSpeech": "noun"
    },
    {
        "word": "noise",
        "valid": [
            "noise"
        ],
        "difficulty": "easy",
        "definition": "Sound of any kind (especially unintelligible or dissonant sound).",
        "sentence": "All the noise in his speech concealed the fact that he didn't have anything to say.",
        "partOfSpeech": "noun"
    },
    {
        "word": "engines",
        "valid": [
            "engines"
        ],
        "difficulty": "medium",
        "definition": "Form of engine: motor that converts thermal energy to mechanical work.",
        "sentence": "More than 90 percent of visits to a web page are from search engines.",
        "partOfSpeech": "noun"
    },
    {
        "word": "forget",
        "valid": [
            "forget"
        ],
        "difficulty": "medium",
        "definition": "Dismiss from the mind; stop remembering.",
        "sentence": "Don't forget to call the chairman of the board to the meeting!",
        "partOfSpeech": "verb"
    },
    {
        "word": "array",
        "valid": [
            "array"
        ],
        "difficulty": "easy",
        "definition": "An orderly arrangement.",
        "sentence": "It was a bewildering array of books.",
        "partOfSpeech": "noun"
    },
    {
        "word": "discussed",
        "valid": [
            "discussed"
        ],
        "difficulty": "hard",
        "definition": "Form of discuss: to consider or examine in speech or writing.",
        "sentence": "Students discussed the problem of brain death for a long time.",
        "partOfSpeech": "verb"
    },
    {
        "word": "accurate",
        "valid": [
            "accurate"
        ],
        "difficulty": "hard",
        "definition": "Conforming exactly or almost exactly to fact or to a standard or performing with total accuracy.",
        "sentence": "An accurate reproduction.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "climate",
        "valid": [
            "climate"
        ],
        "difficulty": "medium",
        "definition": "The weather in some location averaged over some long period of time.",
        "sentence": "The dank climate of southern Wales.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reservations",
        "valid": [
            "reservations"
        ],
        "difficulty": "expert",
        "definition": "Form of reservation: a district that is reserved for particular purpose.",
        "sentence": "We confirmed the hotel reservations by telephone.",
        "partOfSpeech": "noun"
    },
    {
        "word": "alcohol",
        "valid": [
            "alcohol"
        ],
        "difficulty": "medium",
        "definition": "A liquor or brew containing alcohol as the active agent.",
        "sentence": "Alcohol (or drink) ruined him.",
        "partOfSpeech": "noun"
    },
    {
        "word": "instruction",
        "valid": [
            "instruction"
        ],
        "difficulty": "expert",
        "definition": "A message describing how something is to be done.",
        "sentence": "Our instruction was carefully programmed.",
        "partOfSpeech": "noun"
    },
    {
        "word": "managing",
        "valid": [
            "managing"
        ],
        "difficulty": "hard",
        "definition": "Form of manage: be successful; achieve a goal.",
        "sentence": "I'm managing scraping along on a small salary.",
        "partOfSpeech": "verb"
    },
    {
        "word": "annotation",
        "valid": [
            "annotation"
        ],
        "difficulty": "expert",
        "definition": "A comment or instruction (usually added).",
        "sentence": "She wrote a short annotation in the margin of the document.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sister",
        "valid": [
            "sister"
        ],
        "difficulty": "medium",
        "definition": "A female person who has the same parents as another person.",
        "sentence": "My sister married a musician.",
        "partOfSpeech": "noun"
    },
    {
        "word": "differences",
        "valid": [
            "differences"
        ],
        "difficulty": "expert",
        "definition": "Form of difference: the quality of being unlike or dissimilar.",
        "sentence": "A musician can appreciate small differences in sounds.",
        "partOfSpeech": "noun"
    },
    {
        "word": "walking",
        "valid": [
            "walking"
        ],
        "difficulty": "medium",
        "definition": "The act of traveling by foot.",
        "sentence": "Walking is a healthy form of exercise.",
        "partOfSpeech": "noun"
    },
    {
        "word": "explain",
        "valid": [
            "explain"
        ],
        "difficulty": "medium",
        "definition": "Make plain and comprehensible.",
        "sentence": "Her recent divorce may explain her reluctance to date again.",
        "partOfSpeech": "verb"
    },
    {
        "word": "smaller",
        "valid": [
            "smaller"
        ],
        "difficulty": "medium",
        "definition": "Small or little relative to something else.",
        "sentence": "The number of students who were late for school was much smaller than I had expected.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "newest",
        "valid": [
            "newest"
        ],
        "difficulty": "medium",
        "definition": "Most recent in origin, creation, discovery, or arrival.",
        "sentence": "The newest staff members get all the donkey work when they're at the bottom of the ladder.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "establish",
        "valid": [
            "establish"
        ],
        "difficulty": "hard",
        "definition": "Set up or found.",
        "sentence": "Establish a new department.",
        "partOfSpeech": "verb"
    },
    {
        "word": "happened",
        "valid": [
            "happened"
        ],
        "difficulty": "hard",
        "definition": "Form of happen: come to pass.",
        "sentence": "What happened? There's water all over the apartment.",
        "partOfSpeech": "verb"
    },
    {
        "word": "expressed",
        "valid": [
            "expressed"
        ],
        "difficulty": "hard",
        "definition": "Communicated in words.",
        "sentence": "There are things in this world which simply cannot be expressed in the form of words.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "extent",
        "valid": [
            "extent"
        ],
        "difficulty": "medium",
        "definition": "The point or degree to which something extends.",
        "sentence": "The vast extent of the desert.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sharp",
        "valid": [
            "sharp"
        ],
        "difficulty": "easy",
        "definition": "A musical notation indicating one half step higher than the note named.",
        "sentence": "A sharp photographic image.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lesbians",
        "valid": [
            "lesbians"
        ],
        "difficulty": "hard",
        "definition": "Form of lesbian: a female homosexual.",
        "sentence": "Why are Japanese so prejudiced against lesbians and bisexuals?",
        "partOfSpeech": "noun"
    },
    {
        "word": "lane",
        "valid": [
            "lane"
        ],
        "difficulty": "easy",
        "definition": "A narrow way or road.",
        "sentence": "The rightmost lane is now under construction.",
        "partOfSpeech": "noun"
    },
    {
        "word": "paragraph",
        "valid": [
            "paragraph"
        ],
        "difficulty": "hard",
        "definition": "One of several distinct subdivisions of a text intended to separate ideas; the beginning is usually marked by a new indented line.",
        "sentence": "The paragraph emphasises the message.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kill",
        "valid": [
            "kill"
        ],
        "difficulty": "easy",
        "definition": "The act of terminating a life.",
        "sentence": "Kill the engine.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mathematics",
        "valid": [
            "mathematics"
        ],
        "difficulty": "expert",
        "definition": "A science (or group of related sciences) dealing with the logic of quantity and shape and arrangement.",
        "sentence": "Mathematics is not just the memorization of formulas.",
        "partOfSpeech": "noun"
    },
    {
        "word": "compensation",
        "valid": [
            "compensation"
        ],
        "difficulty": "expert",
        "definition": "Something (such as money) given or received as payment or reparation (as for a service or loss or injury).",
        "sentence": "I promise you every possible compensation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "export",
        "valid": [
            "export"
        ],
        "difficulty": "medium",
        "definition": "Commodities (goods or services) sold to a foreign country.",
        "sentence": "We export less than we import and have a negative trade balance.",
        "partOfSpeech": "noun"
    },
    {
        "word": "managers",
        "valid": [
            "managers"
        ],
        "difficulty": "hard",
        "definition": "Form of manager: someone who controls resources and expenditures.",
        "sentence": "Some managers murmured at his appointment as president.",
        "partOfSpeech": "noun"
    },
    {
        "word": "aircraft",
        "valid": [
            "aircraft"
        ],
        "difficulty": "hard",
        "definition": "A vehicle that can fly.",
        "sentence": "The newspaper company has ten aircraft.",
        "partOfSpeech": "noun"
    },
    {
        "word": "modules",
        "valid": [
            "modules"
        ],
        "difficulty": "medium",
        "definition": "Form of module: one of the inherent cognitive or perceptual powers of the mind.",
        "sentence": "We consider now pairwise non-isomorphic factor modules of this faithful module.",
        "partOfSpeech": "noun"
    },
    {
        "word": "sweden",
        "valid": [
            "sweden"
        ],
        "difficulty": "medium",
        "definition": "A Scandinavian kingdom in the eastern part of the Scandinavian Peninsula.",
        "sentence": "The population of Sweden is on the increase.",
        "partOfSpeech": "noun"
    },
    {
        "word": "conflict",
        "valid": [
            "conflict"
        ],
        "difficulty": "hard",
        "definition": "An open clash between two opposing groups (or individuals); \"the harder the conflict the more glorious the triumph\"--Thomas Paine.",
        "sentence": "He noticed a conflict in the dates of the two meetings.",
        "partOfSpeech": "noun"
    },
    {
        "word": "conducted",
        "valid": [
            "conducted"
        ],
        "difficulty": "hard",
        "definition": "Form of conduct: manner of acting or controlling yourself.",
        "sentence": "Of course, I'm young, and politics is conducted by grown-ups.",
        "partOfSpeech": "noun"
    },
    {
        "word": "versions",
        "valid": [
            "versions"
        ],
        "difficulty": "hard",
        "definition": "Form of version: an interpretation of a matter from a particular viewpoint.",
        "sentence": "The difference between the two versions isn't clear.",
        "partOfSpeech": "noun"
    },
    {
        "word": "employer",
        "valid": [
            "employer"
        ],
        "difficulty": "hard",
        "definition": "A person or firm that employs workers.",
        "sentence": "Mary was given a raise by her employer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "occur",
        "valid": [
            "occur"
        ],
        "difficulty": "easy",
        "definition": "Come to pass.",
        "sentence": "Precious stones occur in a large area in Brazil.",
        "partOfSpeech": "verb"
    },
    {
        "word": "percentage",
        "valid": [
            "percentage"
        ],
        "difficulty": "expert",
        "definition": "A proportion in relation to a whole (which is usually the amount per hundred).",
        "sentence": "What is the percentage of overseas markets for your products?",
        "partOfSpeech": "noun"
    },
    {
        "word": "knows",
        "valid": [
            "knows"
        ],
        "difficulty": "easy",
        "definition": "Form of know: the fact of being aware of information that is known to few people.",
        "sentence": "Hunger knows no law.",
        "partOfSpeech": "noun"
    },
    {
        "word": "describe",
        "valid": [
            "describe"
        ],
        "difficulty": "hard",
        "definition": "Give a description of.",
        "sentence": "Can you describe the object?",
        "partOfSpeech": "verb"
    },
    {
        "word": "concern",
        "valid": [
            "concern"
        ],
        "difficulty": "medium",
        "definition": "Something that interests you because it is important or affects you.",
        "sentence": "The safety of the ship is the captain's concern.",
        "partOfSpeech": "noun"
    },
    {
        "word": "backup",
        "valid": [
            "backup"
        ],
        "difficulty": "medium",
        "definition": "An accumulation caused by clogging or a stoppage.",
        "sentence": "He made a backup in case the original was accidentally damaged or erased.",
        "partOfSpeech": "noun"
    },
    {
        "word": "requested",
        "valid": [
            "requested"
        ],
        "difficulty": "hard",
        "definition": "Asked for.",
        "sentence": "The requested aid is forthcoming.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "citizens",
        "valid": [
            "citizens"
        ],
        "difficulty": "hard",
        "definition": "Form of citizen: a native or naturalized member of a state or other political community.",
        "sentence": "Of course, many senior citizens are happy with retirement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "connecticut",
        "valid": [
            "connecticut"
        ],
        "difficulty": "expert",
        "definition": "A New England state; one of the original 13 colonies.",
        "sentence": "They settled near the Connecticut River.",
        "partOfSpeech": "noun"
    },
    {
        "word": "heritage",
        "valid": [
            "heritage"
        ],
        "difficulty": "hard",
        "definition": "Practices that are handed down from the past by tradition.",
        "sentence": "The world's heritage of knowledge.",
        "partOfSpeech": "noun"
    },
    {
        "word": "personals",
        "valid": [
            "personals"
        ],
        "difficulty": "hard",
        "definition": "Form of personal: a short newspaper article about a particular person or group.",
        "sentence": "You can't trust some random person off a personals site.",
        "partOfSpeech": "noun"
    },
    {
        "word": "immediate",
        "valid": [
            "immediate"
        ],
        "difficulty": "hard",
        "definition": "Of the present time and place.",
        "sentence": "Immediate contact.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "holding",
        "valid": [
            "holding"
        ],
        "difficulty": "medium",
        "definition": "The act of retaining something.",
        "sentence": "On top of the statue, Sadako is holding a golden crane over her head.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trouble",
        "valid": [
            "trouble"
        ],
        "difficulty": "medium",
        "definition": "A source of difficulty.",
        "sentence": "I went to a lot of trouble.",
        "partOfSpeech": "noun"
    },
    {
        "word": "spread",
        "valid": [
            "spread"
        ],
        "difficulty": "medium",
        "definition": "Process or result of distributing or extending over a wide expanse of space.",
        "sentence": "The spread between lending and borrowing costs.",
        "partOfSpeech": "noun"
    },
    {
        "word": "coach",
        "valid": [
            "coach"
        ],
        "difficulty": "easy",
        "definition": "Someone in charge of training an athlete or a team.",
        "sentence": "A fanatic threw a bomb at the king's coach.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agricultural",
        "valid": [
            "agricultural"
        ],
        "difficulty": "expert",
        "definition": "Relating to or used in or promoting agriculture or farming.",
        "sentence": "An agrarian (or agricultural) society.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "expand",
        "valid": [
            "expand"
        ],
        "difficulty": "medium",
        "definition": "Extend in one or more directions.",
        "sentence": "Expand the house by adding another wing.",
        "partOfSpeech": "verb"
    },
    {
        "word": "supporting",
        "valid": [
            "supporting"
        ],
        "difficulty": "expert",
        "definition": "The act of bearing the weight of or strengthening.",
        "sentence": "The anxious child needs supporting and accepting treatment from the teacher.",
        "partOfSpeech": "noun"
    },
    {
        "word": "audience",
        "valid": [
            "audience"
        ],
        "difficulty": "hard",
        "definition": "A gathering of spectators or listeners at a (usually public) performance.",
        "sentence": "He requested an audience with the king.",
        "partOfSpeech": "noun"
    },
    {
        "word": "assigned",
        "valid": [
            "assigned"
        ],
        "difficulty": "hard",
        "definition": "Appointed to a post or duty.",
        "sentence": "Assigned personnel.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "jordan",
        "valid": [
            "jordan"
        ],
        "difficulty": "medium",
        "definition": "A river in Palestine that empties into the Dead Sea; John the Baptist baptized Jesus in the Jordan.",
        "sentence": "We elected Mr Jordan chairperson.",
        "partOfSpeech": "noun"
    },
    {
        "word": "collections",
        "valid": [
            "collections"
        ],
        "difficulty": "expert",
        "definition": "Form of collection: several things grouped together or considered as a whole.",
        "sentence": "I afterward sold them to enable me to buy R. Burton's Historical Collections.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ages",
        "valid": [
            "ages"
        ],
        "difficulty": "easy",
        "definition": "Form of ag: a soft white precious univalent metallic element having the highest electrical and thermal conductivity of any metal; occurs in argentite and in free form; used in coins and jewelry and tableware and photography.",
        "sentence": "A heavy snow fell in Kyoto for the first time in ages.",
        "partOfSpeech": "noun"
    },
    {
        "word": "participate",
        "valid": [
            "participate"
        ],
        "difficulty": "expert",
        "definition": "Share in something.",
        "sentence": "Anyone can participate in the game, no matter what nationality they are.",
        "partOfSpeech": "verb"
    },
    {
        "word": "plug",
        "valid": [
            "plug"
        ],
        "difficulty": "easy",
        "definition": "Blockage consisting of an object designed to fill a hole tightly.",
        "sentence": "Plug the wall.",
        "partOfSpeech": "noun"
    },
    {
        "word": "specialist",
        "valid": [
            "specialist"
        ],
        "difficulty": "expert",
        "definition": "An expert who is devoted to one occupation or branch of learning.",
        "sentence": "The specialist predicts international tension will build up.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cook",
        "valid": [
            "cook"
        ],
        "difficulty": "easy",
        "definition": "Someone who cooks food.",
        "sentence": "These potatoes have to cook for 20 minutes.",
        "partOfSpeech": "noun"
    },
    {
        "word": "affect",
        "valid": [
            "affect"
        ],
        "difficulty": "medium",
        "definition": "The conscious subjective aspect of feeling or emotion.",
        "sentence": "Will the new rules affect me?",
        "partOfSpeech": "noun"
    },
    {
        "word": "virgin",
        "valid": [
            "virgin"
        ],
        "difficulty": "medium",
        "definition": "A person who has never had sex.",
        "sentence": "A spinster or virgin lady.",
        "partOfSpeech": "noun"
    },
    {
        "word": "experienced",
        "valid": [
            "experienced"
        ],
        "difficulty": "expert",
        "definition": "Having experience; having knowledge or skill from observation or participation.",
        "sentence": "We have experienced many changes over the last decade.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "investigation",
        "valid": [
            "investigation"
        ],
        "difficulty": "expert",
        "definition": "An inquiry into unfamiliar or questionable activities.",
        "sentence": "The students assisted the professor in the investigation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "raised",
        "valid": [
            "raised"
        ],
        "difficulty": "medium",
        "definition": "Located or moved above the surround or above the normal position.",
        "sentence": "Raised needlework.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "institution",
        "valid": [
            "institution"
        ],
        "difficulty": "expert",
        "definition": "An organization founded and united for a specific purpose.",
        "sentence": "The institution of marriage.",
        "partOfSpeech": "noun"
    },
    {
        "word": "directed",
        "valid": [
            "directed"
        ],
        "difficulty": "hard",
        "definition": "Having a specified direction.",
        "sentence": "A directed program of study.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "dealers",
        "valid": [
            "dealers"
        ],
        "difficulty": "medium",
        "definition": "Form of dealer: someone who purchases and maintains an inventory of goods to be sold.",
        "sentence": "Junk bond dealers left the market riding on a pillow of air.",
        "partOfSpeech": "noun"
    },
    {
        "word": "searching",
        "valid": [
            "searching"
        ],
        "difficulty": "hard",
        "definition": "Diligent and thorough in inquiry or investigation.",
        "sentence": "A searching investigation of their past dealings.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "sporting",
        "valid": [
            "sporting"
        ],
        "difficulty": "hard",
        "definition": "Exhibiting or calling for sportsmanship or fair play.",
        "sentence": "A sporting chance.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "helping",
        "valid": [
            "helping"
        ],
        "difficulty": "medium",
        "definition": "An individual quantity of food or drink taken as part of a meal.",
        "sentence": "How do you expect to weather the financial storm when the bank refuses to extend a helping hand?",
        "partOfSpeech": "noun"
    },
    {
        "word": "affected",
        "valid": [
            "affected"
        ],
        "difficulty": "hard",
        "definition": "Acted upon; influenced.",
        "sentence": "Smoking has affected his lungs.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "bike",
        "valid": [
            "bike"
        ],
        "difficulty": "easy",
        "definition": "A motor vehicle with two wheels and a strong frame.",
        "sentence": "Gonzales offers a bike to all his employees in Europe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "totally",
        "valid": [
            "totally"
        ],
        "difficulty": "medium",
        "definition": "To a complete degree or to the full or entire extent (`whole' is often used informally for `wholly').",
        "sentence": "A totally new situation.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "plate",
        "valid": [
            "plate"
        ],
        "difficulty": "easy",
        "definition": "Base consisting of a rubber slab where the batter stands; it must be touched by a base runner in order to score.",
        "sentence": "A vegetable plate.",
        "partOfSpeech": "noun"
    },
    {
        "word": "expenses",
        "valid": [
            "expenses"
        ],
        "difficulty": "hard",
        "definition": "Form of expense: amounts paid for goods and services that may be currently tax deductible (as opposed to capital expenditures).",
        "sentence": "You must cut down on extra expenses in order to live within your means.",
        "partOfSpeech": "noun"
    },
    {
        "word": "indicate",
        "valid": [
            "indicate"
        ],
        "difficulty": "hard",
        "definition": "Be a signal for or a symptom of.",
        "sentence": "The results indicate the need for more work.",
        "partOfSpeech": "verb"
    },
    {
        "word": "blonde",
        "valid": [
            "blonde"
        ],
        "difficulty": "medium",
        "definition": "A person with fair skin and hair.",
        "sentence": "A blonde is speaking to her psychiatrist.",
        "partOfSpeech": "noun"
    },
    {
        "word": "proceedings",
        "valid": [
            "proceedings"
        ],
        "difficulty": "expert",
        "definition": "The institution of a sequence of steps by which legal judgments are invoked.",
        "sentence": "One of the visitors cried out to obstruct the proceedings.",
        "partOfSpeech": "noun"
    },
    {
        "word": "favourite",
        "valid": [
            "favourite"
        ],
        "difficulty": "hard",
        "definition": "A competitor thought likely to win.",
        "sentence": "I think your favourite actress is in it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "transmission",
        "valid": [
            "transmission"
        ],
        "difficulty": "expert",
        "definition": "The act of sending a message; causing a message to be transmitted.",
        "sentence": "Can you operate a manual transmission?",
        "partOfSpeech": "noun"
    },
    {
        "word": "characteristics",
        "valid": [
            "characteristics"
        ],
        "difficulty": "expert",
        "definition": "Form of characteristic: a prominent attribute or aspect of something.",
        "sentence": "The sense of humor is mysteriously bound up with national characteristics.",
        "partOfSpeech": "noun"
    },
    {
        "word": "lose",
        "valid": [
            "lose"
        ],
        "difficulty": "easy",
        "definition": "Fail to keep or to maintain; cease to have, either physically or in an abstract sense.",
        "sentence": "Lose the crowds by climbing a mountain.",
        "partOfSpeech": "verb"
    },
    {
        "word": "organic",
        "valid": [
            "organic"
        ],
        "difficulty": "medium",
        "definition": "A fertilizer that is derived from animal or vegetable matter.",
        "sentence": "An organic disease.",
        "partOfSpeech": "noun"
    },
    {
        "word": "seek",
        "valid": [
            "seek"
        ],
        "difficulty": "easy",
        "definition": "The movement of a read/write head to a specific data track on a disk.",
        "sentence": "Seek directions from a local.",
        "partOfSpeech": "noun"
    },
    {
        "word": "experiences",
        "valid": [
            "experiences"
        ],
        "difficulty": "expert",
        "definition": "Form of experience: the accumulation of knowledge or skill that results from direct participation in events or activities.",
        "sentence": "Did you have a lot of happy experiences in your childhood?",
        "partOfSpeech": "noun"
    },
    {
        "word": "albums",
        "valid": [
            "albums"
        ],
        "difficulty": "medium",
        "definition": "Form of album: one or more recordings issued together; originally released on 12-inch phonograph records (usually with attractive record covers) and later on cassette audiotape and compact disc.",
        "sentence": "I want some albums. Please show me some.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cheats",
        "valid": [
            "cheats"
        ],
        "difficulty": "medium",
        "definition": "Form of cheat: weedy annual grass often occurs in grainfields and other cultivated land; seeds sometimes considered poisonous.",
        "sentence": "I look down on liars and cheats.",
        "partOfSpeech": "noun"
    },
    {
        "word": "extremely",
        "valid": [
            "extremely"
        ],
        "difficulty": "hard",
        "definition": "To a high degree or extent; favorably or with much respect.",
        "sentence": "Extremely cold.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "contracts",
        "valid": [
            "contracts"
        ],
        "difficulty": "hard",
        "definition": "Form of contract: a binding agreement between two or more persons that is enforceable by law.",
        "sentence": "Metal contracts when cooled.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guests",
        "valid": [
            "guests"
        ],
        "difficulty": "medium",
        "definition": "Form of guest: a visitor to whom hospitality is extended.",
        "sentence": "The guests wished the happy couple a long and prosperous life.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hosted",
        "valid": [
            "hosted"
        ],
        "difficulty": "medium",
        "definition": "Form of host: a person who invites guests to a social event (such as a party in his or her own home) and who is responsible for them while they are there.",
        "sentence": "How many times has Japan hosted the Olympics?",
        "partOfSpeech": "noun"
    },
    {
        "word": "diseases",
        "valid": [
            "diseases"
        ],
        "difficulty": "hard",
        "definition": "Form of disease: an impairment of health or a condition of abnormal functioning.",
        "sentence": "Patients often die simply because they yield to their diseases.",
        "partOfSpeech": "noun"
    },
    {
        "word": "concerning",
        "valid": [
            "concerning"
        ],
        "difficulty": "expert",
        "definition": "Form of concern: something that interests you because it is important or affects you.",
        "sentence": "John testified concerning him.",
        "partOfSpeech": "noun"
    },
    {
        "word": "developers",
        "valid": [
            "developers"
        ],
        "difficulty": "expert",
        "definition": "Form of developer: someone who develops real estate (especially someone who prepares a site for residential or commercial use).",
        "sentence": "They're some developers who aim to make a fast buck!",
        "partOfSpeech": "noun"
    },
    {
        "word": "equivalent",
        "valid": [
            "equivalent"
        ],
        "difficulty": "expert",
        "definition": "A person or thing equal to another in value or measure or force or effect or significance etc.",
        "sentence": "Send two dollars or the equivalent in stamps.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chemistry",
        "valid": [
            "chemistry"
        ],
        "difficulty": "hard",
        "definition": "The science of matter; the branch of the natural sciences dealing with the composition of substances and their properties and reactions.",
        "sentence": "Their chemistry was wrong from the beginning -- they hated each other.",
        "partOfSpeech": "noun"
    },
    {
        "word": "tony",
        "valid": [
            "tony"
        ],
        "difficulty": "easy",
        "definition": "A simpleton. L'Estrange. A pattern and companion fit For all the keeping tonies of the pit. Dryden.",
        "sentence": "\"I don't know,\" said Tony.",
        "partOfSpeech": "noun"
    },
    {
        "word": "neighborhood",
        "valid": [
            "neighborhood"
        ],
        "difficulty": "expert",
        "definition": "A surrounding or nearby region.",
        "sentence": "It is a friendly neighborhood.",
        "partOfSpeech": "noun"
    },
    {
        "word": "kits",
        "valid": [
            "kits"
        ],
        "difficulty": "easy",
        "definition": "Form of kit: a case for containing a set of articles.",
        "sentence": "I just bought three new cross stitch kits.",
        "partOfSpeech": "noun"
    },
    {
        "word": "thailand",
        "valid": [
            "thailand"
        ],
        "difficulty": "hard",
        "definition": "A country of southeastern Asia that extends southward along the Isthmus of Kra to the Malay Peninsula.",
        "sentence": "Thailand is the official name of the former Siam.",
        "partOfSpeech": "noun"
    },
    {
        "word": "variables",
        "valid": [
            "variables"
        ],
        "difficulty": "hard",
        "definition": "Form of variable: something that is likely to vary; something that is subject to variation.",
        "sentence": "Instead, I will turn to a discussion of the two economic variables I defined a moment ago.",
        "partOfSpeech": "noun"
    },
    {
        "word": "agenda",
        "valid": [
            "agenda"
        ],
        "difficulty": "medium",
        "definition": "A temporally organized plan for matters to be attended to.",
        "sentence": "Let's proceed with the items on the agenda.",
        "partOfSpeech": "noun"
    },
    {
        "word": "anyway",
        "valid": [
            "anyway"
        ],
        "difficulty": "medium",
        "definition": "Used to indicate that a statement explains or supports a previous statement; \"I think they're asleep; anyhow, they're quiet\"; \"I don't know what happened to it; anyway, it's gone\"; \"I don't know how it started; in any case, there was a brief scuffle\".",
        "sentence": "Anyway, there is another factor to consider.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "continues",
        "valid": [
            "continues"
        ],
        "difficulty": "hard",
        "definition": "Form of continue: continue a certain state, condition, or activity.",
        "sentence": "The holiday continues to be very boring.",
        "partOfSpeech": "verb"
    },
    {
        "word": "tracks",
        "valid": [
            "tracks"
        ],
        "difficulty": "medium",
        "definition": "Form of track: a line or route along which something travels or moves.",
        "sentence": "Porters often have to walk across the tracks.",
        "partOfSpeech": "noun"
    },
    {
        "word": "advisory",
        "valid": [
            "advisory"
        ],
        "difficulty": "hard",
        "definition": "An announcement that usually advises or warns the public of some threat.",
        "sentence": "A frost advisory.",
        "partOfSpeech": "noun"
    },
    {
        "word": "curriculum",
        "valid": [
            "curriculum"
        ],
        "difficulty": "expert",
        "definition": "An integrated course of academic studies.",
        "sentence": "That university's curriculum covers natural science and social science.",
        "partOfSpeech": "noun"
    },
    {
        "word": "logic",
        "valid": [
            "logic"
        ],
        "difficulty": "easy",
        "definition": "The branch of philosophy that analyzes inference.",
        "sentence": "It made a certain kind of logic.",
        "partOfSpeech": "noun"
    },
    {
        "word": "template",
        "valid": [
            "template"
        ],
        "difficulty": "hard",
        "definition": "A model or standard for making comparisons.",
        "sentence": "There is no simple pattern that can serve as a template.",
        "partOfSpeech": "noun"
    },
    {
        "word": "prince",
        "valid": [
            "prince"
        ],
        "difficulty": "medium",
        "definition": "A male member of a royal family other than the sovereign (especially the son of a sovereign).",
        "sentence": "The prince bowed down to Snow White.",
        "partOfSpeech": "noun"
    },
    {
        "word": "circle",
        "valid": [
            "circle"
        ],
        "difficulty": "medium",
        "definition": "Ellipse in which the two axes are of equal length; a plane curve generated by one point moving at a constant distance from a fixed point.",
        "sentence": "They had excellent seats in the dress circle.",
        "partOfSpeech": "noun"
    },
    {
        "word": "soil",
        "valid": [
            "soil"
        ],
        "difficulty": "easy",
        "definition": "The state of being covered with unclean things.",
        "sentence": "American troops were stationed on Japanese soil.",
        "partOfSpeech": "noun"
    },
    {
        "word": "grants",
        "valid": [
            "grants"
        ],
        "difficulty": "medium",
        "definition": "Form of grant: any monetary aid.",
        "sentence": "His project was funded by grants.",
        "partOfSpeech": "noun"
    },
    {
        "word": "anywhere",
        "valid": [
            "anywhere"
        ],
        "difficulty": "hard",
        "definition": "At or in or to any place; (`anyplace' is used informally for `anywhere').",
        "sentence": "You can find this food anywhere.",
        "partOfSpeech": "adverb"
    },
    {
        "word": "psychology",
        "valid": [
            "psychology"
        ],
        "difficulty": "expert",
        "definition": "The science of mental life.",
        "sentence": "This book deals with psychology.",
        "partOfSpeech": "noun"
    },
    {
        "word": "responses",
        "valid": [
            "responses"
        ],
        "difficulty": "hard",
        "definition": "Form of response: a result.",
        "sentence": "He does not care for any sport involving team work or quick responses to other players.",
        "partOfSpeech": "noun"
    },
    {
        "word": "atlantic",
        "valid": [
            "atlantic"
        ],
        "difficulty": "hard",
        "definition": "The 2nd largest ocean; separates North and South America on the west from Europe and Africa on the east.",
        "sentence": "Atlantic currents.",
        "partOfSpeech": "noun"
    },
    {
        "word": "circumstances",
        "valid": [
            "circumstances"
        ],
        "difficulty": "expert",
        "definition": "Your overall circumstances or condition in life (including everything that happens to you).",
        "sentence": "He found himself in straitened circumstances.",
        "partOfSpeech": "noun"
    },
    {
        "word": "investor",
        "valid": [
            "investor"
        ],
        "difficulty": "hard",
        "definition": "Someone who commits capital in order to gain financial returns.",
        "sentence": "The big investor bought up the stocks.",
        "partOfSpeech": "noun"
    },
    {
        "word": "identification",
        "valid": [
            "identification"
        ],
        "difficulty": "expert",
        "definition": "The act of designating or identifying something.",
        "sentence": "The thief's identification was followed quickly by his arrest.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leaving",
        "valid": [
            "leaving"
        ],
        "difficulty": "medium",
        "definition": "The act of departing.",
        "sentence": "I'm leaving it to you.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wildlife",
        "valid": [
            "wildlife"
        ],
        "difficulty": "hard",
        "definition": "All living things (except people) that are undomesticated.",
        "sentence": "Chemicals could kill all the wildlife.",
        "partOfSpeech": "noun"
    },
    {
        "word": "appliances",
        "valid": [
            "appliances"
        ],
        "difficulty": "expert",
        "definition": "Form of appliance: a device or control that is very useful for a particular job.",
        "sentence": "We tend to use more and more electric appliances in the home.",
        "partOfSpeech": "noun"
    },
    {
        "word": "elementary",
        "valid": [
            "elementary"
        ],
        "difficulty": "expert",
        "definition": "Easy and not involved or complicated.",
        "sentence": "An elementary problem in statistics.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "cooking",
        "valid": [
            "cooking"
        ],
        "difficulty": "medium",
        "definition": "The act of preparing something (as food) by the application of heat.",
        "sentence": "Cooking can be a great art.",
        "partOfSpeech": "noun"
    },
    {
        "word": "speaking",
        "valid": [
            "speaking"
        ],
        "difficulty": "hard",
        "definition": "The utterance of intelligible speech.",
        "sentence": "Whom are you speaking of?",
        "partOfSpeech": "noun"
    },
    {
        "word": "sponsors",
        "valid": [
            "sponsors"
        ],
        "difficulty": "hard",
        "definition": "Form of sponsor: someone who supports or champions something.",
        "sentence": "In order to qualify for the homestay you must have an interview with the sponsors.",
        "partOfSpeech": "noun"
    },
    {
        "word": "unlimited",
        "valid": [
            "unlimited"
        ],
        "difficulty": "hard",
        "definition": "Having no limits in range or scope; \"to start with a theory of unlimited freedom is to end up with unlimited despotism\"- Philip Rahv.",
        "sentence": "No supply is unlimited.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "respond",
        "valid": [
            "respond"
        ],
        "difficulty": "medium",
        "definition": "Show a response or a reaction to something.",
        "sentence": "Our bodies respond to our feelings.",
        "partOfSpeech": "verb"
    },
    {
        "word": "sizes",
        "valid": [
            "sizes"
        ],
        "difficulty": "easy",
        "definition": "Form of size: the physical magnitude of something (how big it is).",
        "sentence": "Do you have any smaller sizes?",
        "partOfSpeech": "noun"
    },
    {
        "word": "plain",
        "valid": [
            "plain"
        ],
        "difficulty": "easy",
        "definition": "Extensive tract of level open land.",
        "sentence": "They emerged from the woods onto a vast open plain.",
        "partOfSpeech": "noun"
    },
    {
        "word": "exit",
        "valid": [
            "exit"
        ],
        "difficulty": "easy",
        "definition": "An opening that permits escape or release.",
        "sentence": "Please use this exit when there is a fire.",
        "partOfSpeech": "noun"
    },
    {
        "word": "entered",
        "valid": [
            "entered"
        ],
        "difficulty": "medium",
        "definition": "Form of enter: to come or go into.",
        "sentence": "As soon as he entered the classroom, our teacher burst into angry speech.",
        "partOfSpeech": "verb"
    },
    {
        "word": "keys",
        "valid": [
            "keys"
        ],
        "difficulty": "easy",
        "definition": "Form of key: metal device shaped in such a way that when it is inserted into the appropriate lock the lock's mechanism can be rotated.",
        "sentence": "Any chance you know where I put my keys?",
        "partOfSpeech": "noun"
    },
    {
        "word": "launch",
        "valid": [
            "launch"
        ],
        "difficulty": "medium",
        "definition": "A motorboat with an open deck or a half deck.",
        "sentence": "Launch plaster.",
        "partOfSpeech": "noun"
    },
    {
        "word": "wave",
        "valid": [
            "wave"
        ],
        "difficulty": "easy",
        "definition": "One of a series of ridges that moves across the surface of a liquid (especially across a large body of water).",
        "sentence": "A wave of settlers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "checking",
        "valid": [
            "checking"
        ],
        "difficulty": "hard",
        "definition": "Form of check: a written order directing a bank to pay money.",
        "sentence": "You must switch off the power before checking the circuit.",
        "partOfSpeech": "noun"
    },
    {
        "word": "costa",
        "valid": [
            "costa"
        ],
        "difficulty": "easy",
        "definition": "A riblike part of a plant or animal (such as a middle rib of a leaf or a thickened vein of an insect wing).",
        "sentence": "Juan was Costa Rican, whilst Pierre and Jack came from R\u00e9union and South Africa respectively.",
        "partOfSpeech": "noun"
    },
    {
        "word": "belgium",
        "valid": [
            "belgium"
        ],
        "difficulty": "medium",
        "definition": "A monarchy in northwestern Europe; headquarters for the European Union and for the North Atlantic Treaty Organization.",
        "sentence": "Do you know the capital of Belgium?",
        "partOfSpeech": "noun"
    },
    {
        "word": "printable",
        "valid": [
            "printable"
        ],
        "difficulty": "hard",
        "definition": "Fit for publication because free of material that is morally or legally objectionable.",
        "sentence": "Printable language.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "holy",
        "valid": [
            "holy"
        ],
        "difficulty": "easy",
        "definition": "A sacred place of pilgrimage.",
        "sentence": "Holy crap, who's the asshole who dares call me in the middle of the night?!",
        "partOfSpeech": "noun"
    },
    {
        "word": "acts",
        "valid": [
            "acts"
        ],
        "difficulty": "easy",
        "definition": "A New Testament book describing the development of the early church from Christ's Ascension to Paul's sojourn at Rome.",
        "sentence": "Gravity acts on everything in the universe.",
        "partOfSpeech": "noun"
    },
    {
        "word": "guidance",
        "valid": [
            "guidance"
        ],
        "difficulty": "hard",
        "definition": "Something that provides direction or advice as to a decision or course of action.",
        "sentence": "What little guidance I had I owe to a young man.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mesh",
        "valid": [
            "mesh"
        ],
        "difficulty": "easy",
        "definition": "The number of openings per linear inch of a screen; measures size of particles.",
        "sentence": "A 100 mesh screen.",
        "partOfSpeech": "noun"
    },
    {
        "word": "trail",
        "valid": [
            "trail"
        ],
        "difficulty": "easy",
        "definition": "A track or mark left by something that has passed.",
        "sentence": "The trail led straight to the perpetrator.",
        "partOfSpeech": "noun"
    },
    {
        "word": "enforcement",
        "valid": [
            "enforcement"
        ],
        "difficulty": "expert",
        "definition": "The act of enforcing; ensuring observance of or obedience to.",
        "sentence": "They say everything's bigger in Texas, and that includes absurdity in law enforcement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "symbol",
        "valid": [
            "symbol"
        ],
        "difficulty": "medium",
        "definition": "An arbitrary sign (written or printed) that has acquired a conventional significance.",
        "sentence": "The eagle is a symbol of the United States.",
        "partOfSpeech": "noun"
    },
    {
        "word": "crafts",
        "valid": [
            "crafts"
        ],
        "difficulty": "medium",
        "definition": "Form of craft: the skilled practice of a practical occupation.",
        "sentence": "He teaches arts and crafts in a school.",
        "partOfSpeech": "noun"
    },
    {
        "word": "highway",
        "valid": [
            "highway"
        ],
        "difficulty": "medium",
        "definition": "A major road for any form of motor transport.",
        "sentence": "The holiday traffic crawled along the highway.",
        "partOfSpeech": "noun"
    },
    {
        "word": "buddy",
        "valid": [
            "buddy"
        ],
        "difficulty": "easy",
        "definition": "A close friend who accompanies his buddies in their activities.",
        "sentence": "Tom is my buddy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "hardcover",
        "valid": [
            "hardcover"
        ],
        "difficulty": "hard",
        "definition": "A book with cardboard or cloth or leather covers.",
        "sentence": "I bought the novel in paperback because it was cheaper than the hardcover.",
        "partOfSpeech": "noun"
    },
    {
        "word": "observed",
        "valid": [
            "observed"
        ],
        "difficulty": "hard",
        "definition": "Discovered or determined by scientific observation.",
        "sentence": "No explanation for the observed phenomena.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "dean",
        "valid": [
            "dean"
        ],
        "difficulty": "easy",
        "definition": "An administrator in charge of a division of a university or college.",
        "sentence": "He is the dean of foreign correspondents.",
        "partOfSpeech": "noun"
    },
    {
        "word": "setup",
        "valid": [
            "setup"
        ],
        "difficulty": "easy",
        "definition": "Equipment designed to serve a specific function.",
        "sentence": "It takes time to learn the setup around here.",
        "partOfSpeech": "noun"
    },
    {
        "word": "poll",
        "valid": [
            "poll"
        ],
        "difficulty": "easy",
        "definition": "An inquiry into public opinion conducted by interviewing a random sample of people.",
        "sentence": "The opinion poll was based on a random sample of adults.",
        "partOfSpeech": "noun"
    },
    {
        "word": "booking",
        "valid": [
            "booking"
        ],
        "difficulty": "medium",
        "definition": "Employment for performers or performing groups that lasts for a limited period of time.",
        "sentence": "Wondered who had made the booking.",
        "partOfSpeech": "noun"
    },
    {
        "word": "glossary",
        "valid": [
            "glossary"
        ],
        "difficulty": "hard",
        "definition": "An alphabetical list of technical terms in some specialized field of knowledge; usually published as an appendix to a text on that field.",
        "sentence": "The key words are defined in the book's glossary.",
        "partOfSpeech": "noun"
    },
    {
        "word": "fiscal",
        "valid": [
            "fiscal"
        ],
        "difficulty": "medium",
        "definition": "Involving financial matters.",
        "sentence": "Fiscal responsibility.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "celebrity",
        "valid": [
            "celebrity"
        ],
        "difficulty": "hard",
        "definition": "A widely known person.",
        "sentence": "He was a baseball celebrity.",
        "partOfSpeech": "noun"
    },
    {
        "word": "styles",
        "valid": [
            "styles"
        ],
        "difficulty": "medium",
        "definition": "Form of style: how something is done or how it happens.",
        "sentence": "All great writers have their own personal styles.",
        "partOfSpeech": "noun"
    },
    {
        "word": "denver",
        "valid": [
            "denver"
        ],
        "difficulty": "medium",
        "definition": "The state capital and largest city of Colorado; located in central Colorado on the South Platte river.",
        "sentence": "Which do you like better, Denver or Montreal?",
        "partOfSpeech": "noun"
    },
    {
        "word": "filled",
        "valid": [
            "filled"
        ],
        "difficulty": "medium",
        "definition": "(usually followed by `with' or used as a combining form) generously supplied with.",
        "sentence": "Theirs was a house filled with laughter.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "bond",
        "valid": [
            "bond"
        ],
        "difficulty": "easy",
        "definition": "An electrical force linking atoms.",
        "sentence": "A $10,000 bond was furnished by an alderman.",
        "partOfSpeech": "noun"
    },
    {
        "word": "channels",
        "valid": [
            "channels"
        ],
        "difficulty": "hard",
        "definition": "Official routes of communication.",
        "sentence": "You have to go through channels.",
        "partOfSpeech": "noun"
    },
    {
        "word": "appendix",
        "valid": [
            "appendix"
        ],
        "difficulty": "hard",
        "definition": "Supplementary material that is collected and appended at the back of a book.",
        "sentence": "The surgeon took out his patient's appendix.",
        "partOfSpeech": "noun"
    },
    {
        "word": "notify",
        "valid": [
            "notify"
        ],
        "difficulty": "medium",
        "definition": "Inform (somebody) of something.",
        "sentence": "You should notify the police at once.",
        "partOfSpeech": "verb"
    },
    {
        "word": "blues",
        "valid": [
            "blues"
        ],
        "difficulty": "easy",
        "definition": "A type of folksong that originated among Black Americans at the beginning of the 20th century; has a melancholy sound from repeated use of blue notes.",
        "sentence": "He had a bad case of the blues.",
        "partOfSpeech": "noun"
    },
    {
        "word": "chocolate",
        "valid": [
            "chocolate"
        ],
        "difficulty": "hard",
        "definition": "A beverage made from cocoa powder and milk and sugar; usually drunk hot.",
        "sentence": "Don't you even think of eating my chocolate!",
        "partOfSpeech": "noun"
    },
    {
        "word": "portion",
        "valid": [
            "portion"
        ],
        "difficulty": "medium",
        "definition": "Something determined in relation to something that includes it.",
        "sentence": "His portion was larger than hers.",
        "partOfSpeech": "noun"
    },
    {
        "word": "scope",
        "valid": [
            "scope"
        ],
        "difficulty": "easy",
        "definition": "An area in which something acts or operates or has power or control: \"the range of a supersonic jet\".",
        "sentence": "Within the scope of an investigation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "supplier",
        "valid": [
            "supplier"
        ],
        "difficulty": "hard",
        "definition": "Someone whose business is to supply a particular service or commodity.",
        "sentence": "Needless to say, Norway has become the world's second largest oil supplier.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cables",
        "valid": [
            "cables"
        ],
        "difficulty": "medium",
        "definition": "Form of cable: a telegram sent abroad.",
        "sentence": "Fiber-optic cables are made up of tiny glass fibers which are as thin as human hairs.",
        "partOfSpeech": "noun"
    },
    {
        "word": "cotton",
        "valid": [
            "cotton"
        ],
        "difficulty": "medium",
        "definition": "Soft silky fibers from cotton plants in their raw state.",
        "sentence": "Cotton to something.",
        "partOfSpeech": "noun"
    },
    {
        "word": "controlled",
        "valid": [
            "controlled"
        ],
        "difficulty": "expert",
        "definition": "Restrained or managed or kept within certain bounds.",
        "sentence": "Controlled emotions.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "requirement",
        "valid": [
            "requirement"
        ],
        "difficulty": "expert",
        "definition": "Required activity.",
        "sentence": "I am sorry, but I cannot meet your requirement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "authorities",
        "valid": [
            "authorities"
        ],
        "difficulty": "expert",
        "definition": "The organization that is the governing authority of a political unit.",
        "sentence": "The matter was referred to higher authorities.",
        "partOfSpeech": "noun"
    },
    {
        "word": "biology",
        "valid": [
            "biology"
        ],
        "difficulty": "medium",
        "definition": "The science that studies living organisms.",
        "sentence": "The biology of viruses.",
        "partOfSpeech": "noun"
    },
    {
        "word": "dental",
        "valid": [
            "dental"
        ],
        "difficulty": "medium",
        "definition": "A consonant articulated with the tip of the tongue near the gum ridge.",
        "sentence": "Dental floss.",
        "partOfSpeech": "noun"
    },
    {
        "word": "killed",
        "valid": [
            "killed"
        ],
        "difficulty": "medium",
        "definition": "Form of kill: the act of terminating a life.",
        "sentence": "The archer killed the deer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "border",
        "valid": [
            "border"
        ],
        "difficulty": "medium",
        "definition": "A line that indicates a boundary.",
        "sentence": "The rug had a wide blue border.",
        "partOfSpeech": "noun"
    },
    {
        "word": "ancient",
        "valid": [
            "ancient"
        ],
        "difficulty": "medium",
        "definition": "A very old person.",
        "sentence": "An ancient mariner.",
        "partOfSpeech": "noun"
    },
    {
        "word": "debate",
        "valid": [
            "debate"
        ],
        "difficulty": "medium",
        "definition": "A discussion in which reasons are advanced for and against some proposition or proposal.",
        "sentence": "Your decision is open to some debate.",
        "partOfSpeech": "noun"
    },
    {
        "word": "representatives",
        "valid": [
            "representatives"
        ],
        "difficulty": "expert",
        "definition": "Form of representative: a person who represents others.",
        "sentence": "Kindly address yourself to the chairman, not directly to other representatives at this meeting.",
        "partOfSpeech": "noun"
    },
    {
        "word": "starts",
        "valid": [
            "starts"
        ],
        "difficulty": "medium",
        "definition": "Form of start: the beginning of anything.",
        "sentence": "Life starts when you decide what you are expecting from it.",
        "partOfSpeech": "noun"
    },
    {
        "word": "pregnancy",
        "valid": [
            "pregnancy"
        ],
        "difficulty": "hard",
        "definition": "The state of being pregnant; the period from conception to birth when a woman carries a developing fetus in her uterus.",
        "sentence": "I had an ectopic pregnancy two years ago.",
        "partOfSpeech": "noun"
    },
    {
        "word": "causes",
        "valid": [
            "causes"
        ],
        "difficulty": "medium",
        "definition": "Form of cause: events that provide the generative force that is the origin of something.",
        "sentence": "We must make a close analysis of the causes of the accident.",
        "partOfSpeech": "noun"
    },
    {
        "word": "biography",
        "valid": [
            "biography"
        ],
        "difficulty": "hard",
        "definition": "An account of the series of events making up a person's life.",
        "sentence": "I illustrated his biography with some pictures.",
        "partOfSpeech": "noun"
    },
    {
        "word": "leisure",
        "valid": [
            "leisure"
        ],
        "difficulty": "medium",
        "definition": "Time available for ease and relaxation.",
        "sentence": "He lacked the leisure for golf.",
        "partOfSpeech": "noun"
    },
    {
        "word": "attractions",
        "valid": [
            "attractions"
        ],
        "difficulty": "expert",
        "definition": "Form of attraction: the force by which one object attracts another.",
        "sentence": "He described to his neighbour, who has never gone abroad, the tourist attractions.",
        "partOfSpeech": "noun"
    },
    {
        "word": "learned",
        "valid": [
            "learned"
        ],
        "difficulty": "medium",
        "definition": "Having or showing profound knowledge.",
        "sentence": "A learned jurist.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "transactions",
        "valid": [
            "transactions"
        ],
        "difficulty": "expert",
        "definition": "A written account of what transpired at a meeting.",
        "sentence": "Our transactions with that firm have continued unbroken since my father's generation.",
        "partOfSpeech": "noun"
    },
    {
        "word": "notebook",
        "valid": [
            "notebook"
        ],
        "difficulty": "hard",
        "definition": "A book with blank pages for recording notes or memoranda.",
        "sentence": "Let me put down your new phone number in my notebook.",
        "partOfSpeech": "noun"
    },
    {
        "word": "explorer",
        "valid": [
            "explorer"
        ],
        "difficulty": "hard",
        "definition": "Someone who travels into little known regions (especially for some scientific purpose).",
        "sentence": "The second man was a Spanish explorer.",
        "partOfSpeech": "noun"
    },
    {
        "word": "historic",
        "valid": [
            "historic"
        ],
        "difficulty": "hard",
        "definition": "Belonging to the past; of what is important or famous in the past.",
        "sentence": "The historic first voyage to outer space.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "attached",
        "valid": [
            "attached"
        ],
        "difficulty": "hard",
        "definition": "Being joined in close association.",
        "sentence": "A block of attached houses.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "opened",
        "valid": [
            "opened"
        ],
        "difficulty": "medium",
        "definition": "Used of mouth or eyes.",
        "sentence": "The newly opened road.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "husband",
        "valid": [
            "husband"
        ],
        "difficulty": "medium",
        "definition": "A married man; a woman's partner in marriage.",
        "sentence": "The man in the corner addressed himself to the husband.",
        "partOfSpeech": "noun"
    },
    {
        "word": "disabled",
        "valid": [
            "disabled"
        ],
        "difficulty": "hard",
        "definition": "People collectively who are crippled or otherwise physically handicapped.",
        "sentence": "Technology to help the elderly and the disabled.",
        "partOfSpeech": "noun"
    },
    {
        "word": "authorized",
        "valid": [
            "authorized"
        ],
        "difficulty": "expert",
        "definition": "Endowed with authority.",
        "sentence": "The authorized biography.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "crazy",
        "valid": [
            "crazy"
        ],
        "difficulty": "easy",
        "definition": "Someone deranged and possibly dangerous.",
        "sentence": "Crazy about cars and racing.",
        "partOfSpeech": "noun"
    },
    {
        "word": "upcoming",
        "valid": [
            "upcoming"
        ],
        "difficulty": "hard",
        "definition": "Of the relatively near future.",
        "sentence": "The upcoming spring fashions.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "concert",
        "valid": [
            "concert"
        ],
        "difficulty": "medium",
        "definition": "A performance of music by players or singers not involving theatrical staging.",
        "sentence": "Concert one's differences.",
        "partOfSpeech": "noun"
    },
    {
        "word": "retirement",
        "valid": [
            "retirement"
        ],
        "difficulty": "expert",
        "definition": "The state of being retired from one's business or occupation.",
        "sentence": "Of course, many senior citizens are happy with retirement.",
        "partOfSpeech": "noun"
    },
    {
        "word": "scores",
        "valid": [
            "scores"
        ],
        "difficulty": "medium",
        "definition": "A large number or amount.",
        "sentence": "The scores are low because the task is cognitively demanding.",
        "partOfSpeech": "noun"
    },
    {
        "word": "financing",
        "valid": [
            "financing"
        ],
        "difficulty": "hard",
        "definition": "The act of financing.",
        "sentence": "The cost of financing of the project was very high.",
        "partOfSpeech": "noun"
    },
    {
        "word": "efficiency",
        "valid": [
            "efficiency"
        ],
        "difficulty": "expert",
        "definition": "The ratio of the output to the input of any system.",
        "sentence": "She did the work with great efficiency.",
        "partOfSpeech": "noun"
    },
    {
        "word": "comedy",
        "valid": [
            "comedy"
        ],
        "difficulty": "medium",
        "definition": "Light and humorous drama with a happy ending.",
        "sentence": "Tim is a huge fan of satirical comedy.",
        "partOfSpeech": "noun"
    },
    {
        "word": "adopted",
        "valid": [
            "adopted"
        ],
        "difficulty": "medium",
        "definition": "Acquired as your own by free choice.",
        "sentence": "My adopted state.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "efficient",
        "valid": [
            "efficient"
        ],
        "difficulty": "hard",
        "definition": "Being effective without wasting time or effort or expense.",
        "sentence": "An efficient secretary.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "weblog",
        "valid": [
            "weblog"
        ],
        "difficulty": "medium",
        "definition": "A regularly updated website or online journal; a blog.",
        "sentence": "She updated her weblog every week with stories and photos from her trip.",
        "partOfSpeech": "noun"
    },
    {
        "word": "linear",
        "valid": [
            "linear"
        ],
        "difficulty": "medium",
        "definition": "Designating or involving an equation whose terms are of the first degree.",
        "sentence": "Linear amplifier.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "commitment",
        "valid": [
            "commitment"
        ],
        "difficulty": "expert",
        "definition": "The trait of sincere and steadfast fixity of purpose.",
        "sentence": "His long commitment to public service.",
        "partOfSpeech": "noun"
    },
    {
        "word": "specialty",
        "valid": [
            "specialty"
        ],
        "difficulty": "hard",
        "definition": "An asset of special worth or utility.",
        "sentence": "Do you know a good specialty store dealing in herbs?",
        "partOfSpeech": "noun"
    },
    {
        "word": "bears",
        "valid": [
            "bears"
        ],
        "difficulty": "easy",
        "definition": "Form of bear: massive plantigrade carnivorous or omnivorous mammals with long shaggy coats and strong claws.",
        "sentence": "Your joke bears repeating.",
        "partOfSpeech": "noun"
    },
    {
        "word": "jean",
        "valid": [
            "jean"
        ],
        "difficulty": "easy",
        "definition": "A coarse durable twill-weave cotton fabric.",
        "sentence": "When Peter got up, Jean had already left home.",
        "partOfSpeech": "noun"
    },
    {
        "word": "carrier",
        "valid": [
            "carrier"
        ],
        "difficulty": "medium",
        "definition": "Someone whose employment involves carrying something.",
        "sentence": "The bonds were transmitted by carrier.",
        "partOfSpeech": "noun"
    },
    {
        "word": "edited",
        "valid": [
            "edited"
        ],
        "difficulty": "medium",
        "definition": "Improved or corrected by critical editing.",
        "sentence": "The text has been heavily edited.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "constant",
        "valid": [
            "constant"
        ],
        "difficulty": "hard",
        "definition": "A quantity that does not vary.",
        "sentence": "The velocity of light is a constant.",
        "partOfSpeech": "noun"
    },
    {
        "word": "visa",
        "valid": [
            "visa"
        ],
        "difficulty": "easy",
        "definition": "An endorsement made in a passport that allows the bearer to enter the country issuing it.",
        "sentence": "I want to get a sightseeing visa.",
        "partOfSpeech": "noun"
    },
    {
        "word": "mouth",
        "valid": [
            "mouth"
        ],
        "difficulty": "easy",
        "definition": "The opening through which food is taken in and vocalizations emerge.",
        "sentence": "The jar had a wide mouth.",
        "partOfSpeech": "noun"
    },
    {
        "word": "meter",
        "valid": [
            "meter"
        ],
        "difficulty": "easy",
        "definition": "The basic unit of length adopted under the Systeme International d'Unites (approximately 1.094 yards).",
        "sentence": "Meter the flow of water.",
        "partOfSpeech": "noun"
    },
    {
        "word": "linked",
        "valid": [
            "linked"
        ],
        "difficulty": "medium",
        "definition": "Connected by a link, as railway cars or trailer trucks.",
        "sentence": "We're all linked in friendship.",
        "partOfSpeech": "adjective"
    },
    {
        "word": "portland",
        "valid": [
            "portland"
        ],
        "difficulty": "hard",
        "definition": "Freshwater port and largest city in Oregon; located in northwestern Oregon on the Willamette River which divides the city into east and west sections; renowned for its beautiful natural setting among the mountains.",
        "sentence": "Laurent Weber is the archbishop of Portland.",
        "partOfSpeech": "noun"
    },
    {
        "word": "interviews",
        "valid": [
            "interviews"
        ],
        "difficulty": "expert",
        "definition": "Form of interview: the questioning of a person (or a conversation in which information is elicited); often conducted by journalists.",
        "sentence": "You have to be up-front and candid at interviews.",
        "partOfSpeech": "noun"
    },
    {
        "word": "concepts",
        "valid": [
            "concepts"
        ],
        "difficulty": "hard",
        "definition": "Form of concept: an abstract or general idea inferred or derived from specific instances.",
        "sentence": "This chapter will focus on the concepts of geometry.",
        "partOfSpeech": "noun"
    },
    {
        "word": "reflect",
        "valid": [
            "reflect"
        ],
        "difficulty": "medium",
        "definition": "Manifest or bring back.",
        "sentence": "Please change your database to reflect the new address as follows.",
        "partOfSpeech": "verb"
    }
];
