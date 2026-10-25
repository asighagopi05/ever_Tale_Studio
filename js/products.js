// Edit this file to change categories, prices, descriptions and photos.
// price: a number (shown as ₹) or a text like "Ask us". Use image: null for "photo coming soon".
window.CATEGORIES = [
  {
    id: "bookmarks",
    name: "Bookmarks",
    description: "Verse-inspired, anime and fantasy bookmarks, made to be tucked into your favourite pages.",
    items: [
      { name: "Personalised bookmarks", price: 25 },
      { name: "Theme-based bookmarks", price: 20 },
      { name: "Mini bookmarks", price: 10 }
    ],
    images: [
      { src: "images/bookmarks-fairy.jpg", alt: "Four lavender fairy bookmarks with iris flowers, laid out with dried lavender, ink bottles and a quill" },
      { src: "images/bookmarks-anime.jpg", alt: "Four anime bookmarks fanned out on embroidered cloth" },
      { src: "images/bookmarks-faith.jpg", alt: "Two bookmarks with Bible verses, a sunset cross and daisies, with silky tassels" },
      { src: "images/bookmarks-verses-ad.png", alt: "Four verse bookmarks on kraft paper with dried flowers" },
      { src: "images/bookmarks-verses.jpg", alt: "Four floral bookmarks with verses about love, faith and hope", caption: "Design preview" },
      { src: "images/bookmarks-anime-design.jpg", alt: "Three tall anime bookmark designs: Your Name, Jujutsu Kaisen and Crayon Shin-chan", caption: "Design preview" }
    ]
  },
  {
    id: "keychains",
    name: "Book Keychains",
    description: "Tiny books with your favourite covers, carried on a keyring.",
    items: [
      { name: "Two-book keychain", price: 40 },
      { name: "Three-book keychain", price: 60 }
    ],
    images: [
      { src: "images/keychains-collection.jpg", alt: "Collection of mini book keychains with popular novel covers" },
      { src: "images/keychains-custom.jpg", alt: "Custom three-book keychain beside loose mini books in a glass jar" },
      { src: "images/keychain-iron-onyx-fourth.png", alt: "Three-book keychain with Iron Flame, Onyx Storm and Fourth Wing covers" }
    ]
  },
  {
    id: "stickers",
    name: "Sticker Sheets",
    description: "Aesthetic sticker sheets in matte or glossy, with an optional cut-out finish.",
    items: [
      { name: "Matte sticker sheet", price: 20 },
      { name: "Glossy sticker sheet", price: 35 },
      { name: "Matte sticker sheet with cut-out option", price: 25 },
      { name: "Glossy sticker sheet with cut-out option", price: 40 }
    ],
    images: [
      { src: "images/stickers-sheet.png", alt: "Pink and black aesthetic phone cover sticker sheet with quotes, butterfly, cherries and hearts" }
    ]
  },
  {
    id: "posters",
    name: "Posters",
    description: "Posters in two sizes for your walls and desks.",
    items: [
      { name: "A4 poster", price: 40 },
      { name: "A5 poster", price: 20 }
    ],
    images: [{ src: "images/posters-wall.jpg", alt: "Wall of printed posters and photo prints hung with wooden clips, including a Harry Potter collage and a cricketer portrait" }]
  },
  {
    id: "prints",
    name: "Photo Prints",
    description: "Polaroid-style prints and normal photo prints of your favourite memories.",
    items: [
      { name: "Polaroid-style prints", price: "Ask us" },
      { name: "Normal photo prints", price: "Ask us" }
    ],
    images: [{ src: null, alt: "Photo print photos coming soon" }]
  }
];

window.TEAM = [
  { name: "Bava Vardhini J", photo: "images/team-bhava.jpg" },
  { name: "Giftlin Meribah J S", photo: "images/team-giftlin.jpg" },
  { name: "Harshiya", photo: "images/team-harshiya.jpg" },
  { name: "Sandhya", photo: "images/team-sadhiya.jpg" },
  { name: "Priyanka", photo: "images/team-priyanga.jpg" }
];
