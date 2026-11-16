# Water Dragon

A phone-first site that turns a date of birth into:

- **Glynis Has Your Number** — Pythagorean blueprint: Soul (vowels), Personality (consonants), Power Name (all letters of the name you go by), Birth Day, Life Path (every digit of the date added straight across), Attitude (month + day). Destiny from the birth-certificate name, Maturity = Life Path + Destiny. Personal Year = World Year + Attitude; Personal Month = Personal Year + this month; Personal Day = Personal Month + this day. Master numbers 11, 22, 33 are kept on the blueprint and also read as 11/2, 22/4, 33/6. Y is a vowel when it is not next to A, E, I, O, or U. Z is 8.
- **Chinese astrology animal** — lunar year, with a painted portrait, plus this year’s animal and how it hits the person’s sign (own year, friend triad, or enemy sign).
- **Feed** — topics you add stay in this phone’s `localStorage`. Each topic posts today’s numerology, a chart when it matches a saved name or ticker, a card-derived month, and a card reading.

Save several people by name. Each name and date of birth is stored in this phone’s `localStorage`. Nothing is sent to a server. After the first visit, a service worker keeps the app usable offline. Add it to the home screen from the browser share menu for a full-screen app icon.

## Run it

From this folder:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` on this computer, or `http://YOUR-LAN-IP:8000` on a phone on the same Wi-Fi.

Chinese New Year cutoffs cover 1900–2099.
