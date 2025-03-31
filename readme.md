src/
├── assets/
│   ├── styles/
│   │   ├── abstracts/     # Змінні, міксіни, функції
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _functions.scss
│   │   ├── base/          # Глобальні стилі, типографіка, базові стилі тегів
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   ├── _global.scss
│   │   ├── components/    # UI-компоненти (кнопки, карточки, форми)
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _forms.scss
│   │   ├── layout/        # Сітки, хедер, футер, бокові панелі
│   │   │   ├── _grid.scss
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   ├── pages/         # Стилі для конкретних сторінок
│   │   │   ├── _home.scss
│   │   │   ├── _about.scss
│   │   │   ├── _contact.scss
│   │   ├── themes/        # Світла/темна тема (опціонально)
│   │   │   ├── _light.scss
│   │   │   ├── _dark.scss
│   │   ├── vendors/       # Стилі сторонніх бібліотек (Swiper, Bootstrap)
│   │   │   ├── _swiper.scss
│   │   │   ├── _bootstrap.scss
│   │   ├── main.scss       # Головний SCSS-файл, що імпортує всі інші





project-root/
├── src/                    # Всі робочі файли всередині `src/`
│   ├── assets/             # Статичні ресурси
│   │   ├── images/        # Зображення
│   │   ├── fonts/         # Шрифти
│   │   ├── styles/        # SCSS/CSS файли
│   │   │   ├── abstracts/    # SCSS: змінні, міксіни, функції
│   │   │   ├── base/         # SCSS: типографіка, скидання стилів
│   │   │   ├── components/   # SCSS: стилі компонентів (кнопки, карточки)
│   │   │   ├── layout/       # SCSS: сітка, хедер, футер
│   │   │   ├── pages/        # SCSS: стилі сторінок
│   │   │   ├── themes/       # SCSS: теми (темна/світла)
│   │   │   ├── vendors/      # SCSS: сторонні бібліотеки (Swiper, Bootstrap)
│   │   │   ├── main.scss     # Головний SCSS файл
│   ├── components/    # JS: Модулі (UI-компоненти)
│   │   ├── button.js
│   │   ├── modal.js
│   │   ├── swiperLoader.js
│   ├── pages/         # JS: Скрипти для різних сторінок
│   │   ├── home.js
│   │   ├── about.js
│   │   ├── product.js
│   ├── utils/         # JS: Допоміжні функції
│   │   ├── helpers.js
│   │   ├── api.js
│   │   ├── debounce.js
│   ├── main.js        # Головний вхідний файл JS
├── index.html          # Головна сторінка в корені!
├── about.html          # Друга сторінка в корені
├── contact.html        # Третя сторінка в корені
├── vite.config.js      # Конфігурація Vite
├── package.json
├── .gitignore