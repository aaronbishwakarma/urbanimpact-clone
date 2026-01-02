mistakes to for best practices 

1. fixed lalrge padding breaks responsiveness $paddinginline=300px
2. absolute positioning hurts responsiveness 
    -> Absolute + Fixed heights = layout breaks on small screens
    -> use flex/grid and auto height on smaller devices
3. while making responsive website make sure;
    -> there is breakpoints 
    -> mobile navigation
    -> stacking behavior

    Note: never miss this things 
4. in number link anchor tag herf="tel:XXXXX"
    in maile mailto: xx@mail.com

5. _layout methods 

    scss/
│
├── base/
│   ├── _reset.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│
├── layout/
│   ├── _layout.scss
│   ├── _header.scss
│   ├── _footer.scss
│
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│
├── pages/
│   └── _home.scss
│
└── style.scss   // main file

<nav class="main-nav">
  <div class="logo">
    <a href="">
      <img src="./img/logo.webp" height="90px" />
    </a>
  </div>

  <!-- Hamburger -->
  <button class="hamburger" aria-label="Open menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <!-- Menu -->
  <div class="menu">
    <ul>
      <li><a href="#services">SERVICES</a></li>
      <li><a href="#industries">INDUSTRIES SERVED</a></li>
      <li><a href="#blog">BLOG</a></li>
      <li><a href="#people">PEOPLE</a></li>
      <li><a href="#portal">CUSTOMER PORTAL</a></li>
      <li><input type="search" placeholder="SEARCH" /></li>
      <li><button>GET A FREE QUOTE</button></li>
    </ul>
  </div>
</nav>


/* =========================
   HAMBURGER MENU
   ========================= */

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  span {
    display: block;
    width: 28px;
    height: 3px;
    background: #000;
    margin: 6px 0;
    transition: 0.3s;
  }
}

/* MOBILE NAV */
@media (max-width: 768px) {

  .hamburger {
    display: block;
  }

  .menu {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 280px;
    background: #fff;
    padding: 80px 20px;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0,0,0,0.15);
    z-index: 1000;
  }

  .menu ul {
    flex-direction: column;
    gap: 20px;
  }

  .menu.active {
    right: 0;
  }

  /* Animate hamburger */
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
}

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
