export type ColorOption = { label: string; hex: string; image?: string };
export type StorageOption = { label: string; price: number; oldPrice?: number };
export type SimOption = "eSIM" | "nano-SIM + eSIM";

export type ProductItem = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  badge?: "hot" | "new" | "used";
  image?: string;
  images?: string[];
  cat: string;
  description?: string;
  specs?: { label: string; value: string }[];
  colors?: ColorOption[];
  storages?: StorageOption[];
  simTypes?: SimOption[];
};

export const ALL_PRODUCTS: ProductItem[] = [
  // iPhone
  {
    id: "ip17pm-1", name: "iPhone 17 Pro Max", subtitle: "256 GB · Black Titanium",
    price: 139900, oldPrice: 169990, badge: "hot", cat: "iPhone",
    image: "/products/iphone17pm/86269338.png",
    images: ["/products/iphone17pm/86269338.png", "/products/iphone17pm/86384385.png", "/products/iphone17pm/66111634.png", "/products/iphone17pm/88598247.png"],
    description: "Самый мощный iPhone с титановым корпусом. Камера 48 Мп с тройной оптической системой, чип A18 Pro, экран 6.9\".",
    specs: [
      { label: "Экран", value: "6.9\" Super Retina XDR, 120 Гц" },
      { label: "Чип", value: "Apple A18 Pro" },
      { label: "Камера", value: "48 Мп + 48 Мп + 12 Мп" },
      { label: "Память", value: "256 GB" },
      { label: "Аккумулятор", value: "до 33 ч видео" },
    ],
    colors: [
      { label: "Black Titanium", hex: "#2d2926", image: "/products/iphone17pm/86269338.png" },
      { label: "White Titanium", hex: "#e8e4df", image: "/products/iphone17pm/86384385.png" },
      { label: "Desert Titanium", hex: "#c8a882", image: "/products/iphone17pm/66111634.png" },
      { label: "Natural Titanium", hex: "#b5a99a", image: "/products/iphone17pm/88598247.png" },
    ],
    storages: [
      { label: "256 GB", price: 139900, oldPrice: 169990 },
      { label: "512 GB", price: 159900, oldPrice: 189990 },
      { label: "1 TB",   price: 189900, oldPrice: 219990 },
    ],
    simTypes: ["nano-SIM + eSIM", "eSIM"],
  },
  {
    id: "ip17pro-1", name: "iPhone 17 Pro", subtitle: "128 GB · Desert Titanium",
    price: 119900, oldPrice: 149990, badge: "new", cat: "iPhone",
    image: "/products/iphone17pro/82253206.png",
    images: ["/products/iphone17pro/82253206.png", "/products/iphone17pro/65232426.png", "/products/iphone17pro/78775858.png"],
    description: "iPhone 17 Pro с чипом A18 Pro и профессиональной камерой. Титановый корпус, Dynamic Island, ProMotion 120 Гц.",
    specs: [
      { label: "Экран", value: "6.3\" Super Retina XDR, 120 Гц" },
      { label: "Чип", value: "Apple A18 Pro" },
      { label: "Камера", value: "48 Мп + 48 Мп + 12 Мп" },
      { label: "Память", value: "128 GB" },
      { label: "Аккумулятор", value: "до 27 ч видео" },
    ],
    colors: [
      { label: "Desert Titanium", hex: "#c8a882", image: "/products/iphone17pro/82253206.png" },
      { label: "Black Titanium",  hex: "#2d2926", image: "/products/iphone17pro/65232426.png" },
      { label: "White Titanium",  hex: "#e8e4df", image: "/products/iphone17pro/78775858.png" },
    ],
    storages: [
      { label: "128 GB", price: 119900, oldPrice: 149990 },
      { label: "256 GB", price: 134900, oldPrice: 164990 },
      { label: "512 GB", price: 154900, oldPrice: 184990 },
      { label: "1 TB",   price: 179900, oldPrice: 209990 },
    ],
    simTypes: ["nano-SIM + eSIM", "eSIM"],
  },
  {
    id: "ip17-1", name: "iPhone 17", subtitle: "128 GB · Teal",
    price: 89900, oldPrice: 109990, badge: "new", cat: "iPhone",
    image: "/products/iphone17/52064781.png",
    images: ["/products/iphone17/52064781.png", "/products/iphone17/13306181.png", "/products/iphone17/51277940.png", "/products/iphone17/56024466.png"],
    description: "iPhone 17 — стильный, быстрый и доступный. Чип A18, улучшенная камера 48 Мп, алюминиевый корпус.",
    specs: [
      { label: "Экран", value: "6.1\" Super Retina XDR, 60 Гц" },
      { label: "Чип", value: "Apple A18" },
      { label: "Камера", value: "48 Мп + 12 Мп" },
      { label: "Память", value: "128 GB" },
      { label: "Аккумулятор", value: "до 22 ч видео" },
    ],
    colors: [
      { label: "Teal",    hex: "#5b8f8a", image: "/products/iphone17/52064781.png" },
      { label: "Black",   hex: "#1c1c1e", image: "/products/iphone17/13306181.png" },
      { label: "White",   hex: "#f5f5f0", image: "/products/iphone17/51277940.png" },
      { label: "Pink",    hex: "#e8b4c0", image: "/products/iphone17/56024466.png" },
    ],
    storages: [
      { label: "128 GB", price: 89900,  oldPrice: 109990 },
      { label: "256 GB", price: 104900, oldPrice: 124990 },
      { label: "512 GB", price: 129900, oldPrice: 149990 },
    ],
    simTypes: ["nano-SIM + eSIM", "eSIM"],
  },
  {
    id: "ip17e-1", name: "iPhone 16e", subtitle: "128 GB · Black",
    price: 59900, oldPrice: 79990, badge: "new", cat: "iPhone",
    image: "/products/iphone17e/13 black.jpg",
    images: ["/products/iphone17e/13 black.jpg", "/products/iphone17e/13 dawn.jpg"],
    description: "Доступный iPhone с мощным чипом A16 Bionic. Компактный, быстрый, с поддержкой Apple Intelligence.",
    specs: [
      { label: "Экран", value: "6.1\" Super Retina XDR, 60 Гц" },
      { label: "Чип", value: "Apple A16 Bionic" },
      { label: "Камера", value: "48 Мп" },
      { label: "Память", value: "128 GB" },
      { label: "Аккумулятор", value: "до 26 ч видео" },
    ],
    colors: [
      { label: "Black", hex: "#1c1c1e", image: "/products/iphone17e/13 black.jpg" },
      { label: "Dawn",  hex: "#e8e0d5", image: "/products/iphone17e/13 dawn.jpg" },
    ],
    storages: [
      { label: "128 GB", price: 59900, oldPrice: 79990 },
      { label: "256 GB", price: 74900, oldPrice: 94990 },
    ],
    simTypes: ["nano-SIM + eSIM", "eSIM"],
  },
  // Samsung
  { id: "ss-a35", name: "Samsung Galaxy A35", subtitle: "128 GB · Ice Blue", price: 34900, oldPrice: 44990, badge: "new", cat: "Samsung", image: "/products/samsung/samsung-galaxy-a35-awesome-ice-blue.jpg", description: "Samsung Galaxy A35 с AMOLED-экраном 6.6\", тройной камерой 50 Мп и аккумулятором 5000 мАч.", specs: [{ label: "Экран", value: "6.6\" AMOLED, 120 Гц" }, { label: "Камера", value: "50 + 8 + 5 Мп" }, { label: "Память", value: "128 GB" }, { label: "Аккумулятор", value: "5000 мАч" }] },
  { id: "ss-s25", name: "Samsung Galaxy S25", subtitle: "128 GB · Phantom Black", price: 79900, oldPrice: 99990, badge: "new", cat: "Samsung", description: "Galaxy S25 на чипе Snapdragon 8 Elite. Камера 50 Мп, Dynamic AMOLED 2X, AI-функции.", specs: [{ label: "Экран", value: "6.2\" Dynamic AMOLED, 120 Гц" }, { label: "Чип", value: "Snapdragon 8 Elite" }, { label: "Камера", value: "50 + 12 + 10 Мп" }, { label: "Память", value: "128 GB" }] },
  { id: "ss-s25u", name: "Samsung Galaxy S25 Ultra", subtitle: "256 GB · Titanium", price: 119900, oldPrice: 149990, badge: "hot", cat: "Samsung", description: "Флагман с встроенным S Pen, камерой 200 Мп и экраном 6.9\".", specs: [{ label: "Экран", value: "6.9\" Dynamic AMOLED, 120 Гц" }, { label: "Камера", value: "200 + 50 + 10 + 10 Мп" }, { label: "Память", value: "256 GB" }, { label: "S Pen", value: "Встроенный" }] },
  { id: "ss-fold", name: "Samsung Galaxy Z Fold 6", subtitle: "256 GB · Black", price: 139900, oldPrice: 179990, badge: "new", cat: "Samsung", description: "Складной смартфон с экраном 7.6\" внутри. Мощный, стильный, уникальный.", specs: [{ label: "Внешний экран", value: "6.3\" AMOLED" }, { label: "Внутренний экран", value: "7.6\" AMOLED" }, { label: "Чип", value: "Snapdragon 8 Gen 3" }, { label: "Память", value: "256 GB" }] },
  // Apple Watch
  { id: "aw-s10-1", name: "Apple Watch Series 10", subtitle: "42mm · Black", price: 39900, oldPrice: 54990, badge: "new", cat: "Apple Watch", description: "Самые тонкие Apple Watch. AMOLED-дисплей, датчик сна, отслеживание здоровья.", specs: [{ label: "Размер", value: "42mm" }, { label: "Экран", value: "LTPO OLED" }, { label: "Чип", value: "S10" }, { label: "Водозащита", value: "WR50" }] },
  { id: "aw-s10-2", name: "Apple Watch Series 10", subtitle: "46mm · Silver", price: 42900, oldPrice: 57990, badge: "new", cat: "Apple Watch", description: "Большая версия Apple Watch Series 10 с увеличенным экраном.", specs: [{ label: "Размер", value: "46mm" }, { label: "Экран", value: "LTPO OLED" }, { label: "Чип", value: "S10" }, { label: "Водозащита", value: "WR50" }] },
  { id: "aw-ultra", name: "Apple Watch Ultra 2", subtitle: "49mm · Titanium", price: 79900, oldPrice: 99990, badge: "hot", cat: "Apple Watch", description: "Экстремальные часы для спорта. Яркость 3000 нит, батарея до 60 ч, точный GPS.", specs: [{ label: "Размер", value: "49mm" }, { label: "Корпус", value: "Титан" }, { label: "Батарея", value: "до 60 ч" }, { label: "Яркость", value: "3000 нит" }] },
  { id: "aw-se", name: "Apple Watch SE", subtitle: "40mm · Midnight", price: 24900, oldPrice: 34990, badge: "new", cat: "Apple Watch", description: "Доступные Apple Watch с основными функциями здоровья и фитнеса.", specs: [{ label: "Размер", value: "40mm" }, { label: "Чип", value: "S9" }, { label: "GPS", value: "Да" }, { label: "Водозащита", value: "WR50" }] },
  // Mac
  { id: "mac-air13", name: "MacBook Air 13", subtitle: "M4 · 16GB · 256GB", price: 109900, oldPrice: 139990, badge: "new", cat: "Mac", description: "Ультратонкий MacBook Air на чипе M4. Тихий, лёгкий, мощный. Идеален для работы и учёбы.", specs: [{ label: "Чип", value: "Apple M4" }, { label: "RAM", value: "16 GB" }, { label: "SSD", value: "256 GB" }, { label: "Экран", value: "13.6\" Liquid Retina" }, { label: "Вес", value: "1.24 кг" }] },
  { id: "mac-air15", name: "MacBook Air 15", subtitle: "M4 · 16GB · 512GB", price: 129900, oldPrice: 159990, badge: "new", cat: "Mac", description: "Большой MacBook Air с экраном 15.3\" и чипом M4. Много пространства, тихий и быстрый.", specs: [{ label: "Чип", value: "Apple M4" }, { label: "RAM", value: "16 GB" }, { label: "SSD", value: "512 GB" }, { label: "Экран", value: "15.3\" Liquid Retina" }, { label: "Вес", value: "1.51 кг" }] },
  { id: "mac-pro14", name: "MacBook Pro 14", subtitle: "M4 Pro · 24GB · 512GB", price: 189900, oldPrice: 229990, badge: "hot", cat: "Mac", description: "Профессиональный MacBook Pro с чипом M4 Pro. Для видеомонтажа, разработки и творчества.", specs: [{ label: "Чип", value: "Apple M4 Pro" }, { label: "RAM", value: "24 GB" }, { label: "SSD", value: "512 GB" }, { label: "Экран", value: "14.2\" Liquid Retina XDR" }, { label: "Вес", value: "1.62 кг" }] },
  { id: "mac-mini", name: "Mac mini", subtitle: "M4 · 16GB · 256GB", price: 69900, oldPrice: 89990, badge: "new", cat: "Mac", description: "Компактный и мощный Mac mini на чипе M4. Подключи свой монитор и работай.", specs: [{ label: "Чип", value: "Apple M4" }, { label: "RAM", value: "16 GB" }, { label: "SSD", value: "256 GB" }, { label: "Порты", value: "3× USB-C, 2× USB-A, HDMI" }] },
  // AirPods
  { id: "ap4", name: "AirPods 4", subtitle: "Active Noise Cancellation", price: 19900, oldPrice: 27990, badge: "new", cat: "AirPods", description: "AirPods 4 с активным шумоподавлением. Персонализированный звук, чип H2.", specs: [{ label: "Чип", value: "Apple H2" }, { label: "ANC", value: "Да" }, { label: "Батарея", value: "до 30 ч (с кейсом)" }] },
  { id: "ap-pro2", name: "AirPods Pro 2", subtitle: "USB-C · MagSafe", price: 24900, oldPrice: 34990, badge: "hot", cat: "AirPods", description: "Лучшие AirPods с адаптивным шумоподавлением, прозрачностью и Lossless Audio.", specs: [{ label: "Чип", value: "Apple H2" }, { label: "ANC", value: "Адаптивное" }, { label: "Батарея", value: "до 36 ч (с кейсом)" }, { label: "Зарядка", value: "USB-C / MagSafe" }] },
  { id: "ap-max", name: "AirPods Max", subtitle: "USB-C · Midnight", price: 59900, oldPrice: 79990, badge: "new", cat: "AirPods", description: "Накладные наушники с превосходным звуком, активным шумоподавлением и металлическим корпусом.", specs: [{ label: "Тип", value: "Накладные" }, { label: "ANC", value: "Да" }, { label: "Батарея", value: "до 20 ч" }, { label: "Цвет", value: "Midnight" }] },
  { id: "ap-max-st", name: "AirPods Max", subtitle: "USB-C · Starlight", price: 59900, oldPrice: 79990, badge: "new", cat: "AirPods", description: "Накладные наушники с превосходным звуком, активным шумоподавлением и металлическим корпусом.", specs: [{ label: "Тип", value: "Накладные" }, { label: "ANC", value: "Да" }, { label: "Батарея", value: "до 20 ч" }, { label: "Цвет", value: "Starlight" }] },
  // Re:Set
  { id: "ip15blue", name: "iPhone 15", subtitle: "128 GB · Blue", price: 59900, oldPrice: 84990, badge: "used", cat: "Re:Set", image: "/products/iphones/15 blue.jpg", description: "iPhone 15 в отличном состоянии. Проверен, восстановлен, с гарантией 3 месяца.", specs: [{ label: "Состояние", value: "Отличное (A)" }, { label: "Память", value: "128 GB" }, { label: "Гарантия", value: "3 месяца" }] },
  { id: "rs-ip14", name: "iPhone 14", subtitle: "128 GB · Purple", price: 44900, oldPrice: 69990, badge: "used", cat: "Re:Set", description: "iPhone 14 в хорошем состоянии. Аккумулятор от 85%. Гарантия 3 месяца.", specs: [{ label: "Состояние", value: "Хорошее (B)" }, { label: "Память", value: "128 GB" }, { label: "Аккумулятор", value: "от 85%" }, { label: "Гарантия", value: "3 месяца" }] },
  { id: "rs-ip13", name: "iPhone 13", subtitle: "128 GB · Midnight", price: 34900, oldPrice: 54990, badge: "used", cat: "Re:Set", description: "iPhone 13 в хорошем состоянии. Аккумулятор от 85%. Гарантия 3 месяца.", specs: [{ label: "Состояние", value: "Хорошее (B)" }, { label: "Память", value: "128 GB" }, { label: "Аккумулятор", value: "от 85%" }, { label: "Гарантия", value: "3 месяца" }] },
  { id: "rs-ss", name: "Samsung Galaxy S23", subtitle: "128 GB · Phantom Black", price: 29900, oldPrice: 49990, badge: "used", cat: "Re:Set", description: "Samsung Galaxy S23 в хорошем состоянии. Проверен, с гарантией 3 месяца.", specs: [{ label: "Состояние", value: "Хорошее (B)" }, { label: "Память", value: "128 GB" }, { label: "Гарантия", value: "3 месяца" }] },
  // Dyson
  { id: "airwrap", name: "Dyson Airwrap", subtitle: "Multi-styler Complete", price: 49900, oldPrice: 69990, badge: "new", cat: "Dyson", description: "Многофункциональный стайлер Dyson Airwrap. Укладка без экстремального жара, несколько насадок.", specs: [{ label: "Технология", value: "Coanda" }, { label: "Насадки", value: "6 шт." }, { label: "Питание", value: "1300 Вт" }] },
  { id: "v15", name: "Dyson V15 Detect", subtitle: "Absolute · Gold/Iron", price: 59900, oldPrice: 84990, badge: "hot", cat: "Dyson", description: "Мощный беспроводной пылесос с лазерной подсветкой и датчиком частиц.", specs: [{ label: "Мощность всасывания", value: "230 AW" }, { label: "Батарея", value: "до 60 мин" }, { label: "Фильтр", value: "HEPA" }] },
  { id: "supersonic", name: "Dyson Supersonic", subtitle: "HD15 · Vinca Blue/Rose", price: 32900, oldPrice: 44990, badge: "new", cat: "Dyson", description: "Фен Dyson Supersonic с интеллектуальным контролем температуры и магнитными насадками.", specs: [{ label: "Мощность", value: "1600 Вт" }, { label: "Технология", value: "Air Multiplier" }, { label: "Насадки", value: "5 шт." }] },
  { id: "purifier", name: "Dyson Purifier Cool", subtitle: "TP07 · White/Silver", price: 44900, oldPrice: 59990, badge: "new", cat: "Dyson", description: "Очиститель воздуха и вентилятор в одном. Фильтр HEPA H13, мониторинг качества воздуха.", specs: [{ label: "Фильтр", value: "HEPA H13 + Activated Carbon" }, { label: "Покрытие", value: "до 81 м²" }, { label: "Уровень шума", value: "от 37 дБ" }] },
];
