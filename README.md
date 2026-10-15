# Bootstrap and Tailwind framework lab

The same responsive study desk implemented twice: `index.html` uses Bootstrap 5.3.8 and `tailwind.html` uses the Tailwind 3.4.17 development CDN. Separate pages keep their global CSS from interfering with one another. Both include mobile layouts, labelled search, keyboard focus, and live filter feedback.

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. Switch frameworks using the page navigation. Test at 375 px and 1280 px, and search for `layout`, `controls`, or an unmatched word.

Internet access is required to load the framework CDNs. These are learning pages; production work should install the dependencies and build CSS locally. There is no backend, account, or data collection.
