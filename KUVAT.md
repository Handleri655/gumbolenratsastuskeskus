# Kuvat

Sivuston kuvat ovat Gumbölen Ratsastuskeskuksen vanhan sivuston mediakirjastosta. Ne on optimoitu buildin yhteydessä. Moni otos on vuosilta 2014–2016, joten ne kannattaa korvata uusilla, kun tallilta saadaan tuore kuvasarja.

Tiedostot ovat kansiossa `src/assets/`.

| Tiedosto | Käyttö | Huomio |
| --- | --- | --- |
| `img-6843.jpg` | Etusivun hero | Auringonlasku, empirepääty ja kuusiaita. Pystykuva, rajautuu alareunaan. |
| `syksy.jpg` | Ilmakuva, galleria | Talli, punainen maneesi ja maisema. |
| `kentta.jpg` | Galleria | Ulkokenttä ja kolme ratsukkoa. |
| `dsc-0838.jpg` | Galleria ja jakokuva `public/og.jpg` | Punainen maneesirakennus ja kaksi ratsukkoa. |
| `maneesi-ratsukot.jpg` | Talli-sivu ja galleria | Maneesi sisältä. |
| `iso-talli.jpg` | Talli-sivu ja galleria | Ison tallin karsinakäytävä. |
| `karsina.jpg` | Galleria | Karsinan ovi. |
| `maasto.jpg` | Talli-sivu ja galleria | Niitty ja metsä. |
| `satulahuone.jpg` | Galleria | Satula satulahuoneessa. |
| `betty.jpg` | Historia | Hevonen pylväikön edessä, vaalea tausta. |

## Kannattaa kuvata seuraavaksi

- Talli kesällä, talvella ja syksyllä, vaakakuvana heroa varten.
- Hevosia tarhassa, ilman vanhaa kuvankäsittelyn reunusta.
- Kentän kastelu ja lanaus.
- Maneesi käytössä, nykyisellä pohjalla.
- Sosiaalitilat, pesukarsina ja loimien kuivatus vain jos ne halutaan näyttää.
- Henkilökunta, jos nimet ja kuvat julkaistaan.

Kun uusi kuva korvaa vanhan, pidä tiedostonimi samana tai päivitä tuonti tiedostossa `src/lib/images.ts`. Kirjoita kuvalle alt-teksti kaikkiin kolmeen kielitiedostoon (`src/i18n/fi.ts`, `sv.ts`, `en.ts`), gallerian listaan `home.gallery`.
