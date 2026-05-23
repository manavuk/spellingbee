import urllib.request
import json

url = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-no-swears.txt"
try:
    req = urllib.request.Request(url)
    response = urllib.request.urlopen(req)
    # Get top 3000 distinct words with len >= 3
    words = []
    seen = set()
    for i, line in enumerate(response.read().decode('utf-8').splitlines()):
        w = line.strip().lower()
        is_common_short = len(w) == 3 and i < 1000
        if w.isalpha() and (len(w) >= 4 or is_common_short) and w not in seen:
            words.append(w)
            seen.add(w)
        if len(words) >= 3000:
            break

    word_list = []
    for w in words:
        length = len(w)
        difficulty = "easy"
        if 6 <= length <= 7:
            difficulty = "medium"
        elif 8 <= length <= 9:
            difficulty = "hard"
        elif length >= 10:
            difficulty = "expert"
            
        word_list.append({
            "word": w,
            "valid": [w],
            "difficulty": difficulty
        })

    js_content = f"const WORD_LIST = {json.dumps(word_list, indent=4)};\n"

    with open('words.js', 'w') as f:
        f.write(js_content)
    print(f"Generated words.js with {len(words)} words.")
except Exception as e:
    print(f"Error: {e}")
