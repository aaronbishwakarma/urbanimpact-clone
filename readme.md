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
