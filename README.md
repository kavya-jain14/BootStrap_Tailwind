# Bootstrap and Tailwind framework lab

The same responsive study desk implemented twice: `index.html` uses Bootstrap 5.3.8 and `tailwind.html` uses locally built Tailwind 3.4.17 CSS. Separate pages keep their global CSS from interfering with one another. Both include mobile layouts, labelled search, keyboard focus, and live filter feedback.

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. Switch frameworks using the page navigation. Test at 375 px and 1280 px, and search for `layout`, `controls`, or an unmatched word.

The Tailwind page works offline using the committed `tailwind.css`; it does not depend on the development CDN or generate styles in the browser. After changing Tailwind utility classes, rebuild and commit the stylesheet:

```sh
npm ci
npm run build:css
```

Bootstrap still requires internet access to load its CDN stylesheet. There is no backend, account, or data collection.
