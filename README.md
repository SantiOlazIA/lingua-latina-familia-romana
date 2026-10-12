# Lingua Latina per sē Illustrata — Familia Rōmāna

Aplicación web (HTML5 + CSS3 + ES Modules, **sin build**) para leer y practicar el libro de Ørberg.
Despliegue: https://lingua-latina-familia-romana.vercel.app

## Ejecutar en local

```
npx serve .          # o: python -m http.server 8000
```

Los módulos ES requieren servir por HTTP (no funciona abriendo `index.html` con `file://`).

## Tests

```
npm test             # node --test (Node >= 20, sin dependencias)
```

- `tests/datos.test.js`: estructura de capítulos, tokens, vocabulario, ausencia de `undefined`/mojibake.
- `tests/pensa.test.js`: Pensa A/B/C y comparación de macrones (`lib/comparatio.js`).
- `tests/integritas.test.js`: coherencia entre `index.html`, `app.js` y los `data_capitulumN.js`.

## Agregar un capítulo

1. Extraer con la skill `.agents/skills/extract-capitulum` → `data_capitulumN.js`.
2. Registrarlo en `CAPITULA_MODULI` (`app.js`) y en `index.html` (`<select>` y `data-cap`).
3. `npm test` debe pasar al 100 % antes de hacer commit.

## Estructura

- `app.js`: interfaz y lógica. Los capítulos se cargan **bajo demanda** (`import()`).
- `lib/comparatio.js`: lógica pura de comparación de respuestas.
- `fuentes/`: textos crudos de extracción (ignorada por git); `familia_romana.pdf` tampoco se versiona.
