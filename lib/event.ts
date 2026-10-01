export const EVENT = {
  honoree: "Raymund & Vanessa",
  groom: "Raymund Gumba",
  bride: "Vanessa Navera",
  initials: "R & V",
  dateLong: "Sunday, December 21, 2025",
  dateShort: "12 · 21 · 2025",
  time: "1:30 PM",
  theme: "Minimalist",
  color: "Dusty Blue",
  dressCode: "Semi-formal",
  ceremony: { label: "Ceremony", name: "Sacred Heart Church", address: "Tacloban City" }, // TODO: add street address
  reception: { label: "Reception", name: "Hotel Alejandro Roof Deck", address: "Tacloban City" }, // TODO: add street address
};

// Media + map settings — swap these for the real assets.
export const MEDIA = {
  tagline: "Two hearts, one beautiful beginning. Join us as we say “I do.”",
  hero: "/hero.jpg",
  music: { src: "/music/background_music.mp3", volume: 0.5 },
  gallery: Array.from({ length: 8 }, (_, i) => `/gallery/${String(i + 1).padStart(2, "0")}.jpg`),
};

// Gift section — edit the copy, and replace public/gift-qr.png with the couple's real QR code.
export const GIFT = {
  title: "Gift Policy",
  message: "Your presence at our wedding is the greatest gift of all. Should you wish to bless us further, a monetary gift would be warmly appreciated as we begin our life together.",
  qr: "/gift-qr.png",
  qrLabel: "Scan to send a gift",
};
