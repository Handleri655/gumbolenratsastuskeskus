# Gumbölen Ratsastuskeskus

Uudet sivut tallille. Staattinen Astro-sivusto, kolme kieltä (suomi, ruotsi, englanti) ja Markdown-tiedotteet.

## Käynnistys

```bash
npm install
npm run dev
```

Sivusto aukeaa osoitteeseen http://localhost:4321. Tuotantoversio:

```bash
npm run build
npm run preview
```

## Uutisen lisääminen

Luo tiedosto joka kielelle:

- `src/content/news/fi/uusi-tiedote.md`
- `src/content/news/sv/uusi-tiedote.md`
- `src/content/news/en/uusi-tiedote.md`

Käytä samaa `slug`- ja `translationKey`-arvoa kaikissa kielissä, jotta kieliversiot löytävät toisensa.

```markdown
---
title: Otsikko
description: Lyhyt ingressi listauksiin.
date: 2026-10-23
lang: fi
slug: uusi-tiedote
tags:
  - notice
alert: false
translationKey: uusi-tiedote
---

Leipäteksti.
```

`tags` voi olla `notice`, `health` tai `work`. Jos `alert` on `true`, tiedote nousee koko sivuston yläreunan palkkiin. Käytä sitä vain voimassa olevaan, tärkeään ilmoitukseen (esimerkiksi karanteeni). Vanhan ilmoituksen `alert` palautetaan arvoon `false`.

## Lomakkeet

Tallipaikka- ja vuokralomakkeet on tehty Netlify Formsia varten (`data-netlify="true"` ja honeypot-kenttä). Ne lähtevät sähköpostiin, kun sivusto on julkaistu Netlifyssä. Paikallisessa kehityspalvelimessa lähetys ei tallennu.

## Julkaisu

`netlify.toml` on valmiina Netlifylle: komento `npm run build`, julkaisukansio `dist`. Vanhojen WordPress-osoitteiden ohjaukset ovat tiedostossa `public/_redirects`. Vastaavat ohjaukset Vercelille ovat tiedostossa `vercel.json`.

Cloudflare Pages käyttää samaa build-komentoa ja `public/_redirects`-tiedostoa.

## Kuvat ja avoimet kohdat

Katso `KUVAT.md` ja `TODO.md`.
