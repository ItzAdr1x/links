# Mein Linktree

Eine kleine, komplett selbst konfigurierbare Link-Seite ohne Build-Schritt, ohne Abhängigkeiten.

## Dateien

| Datei | Zweck |
|---|---|
| `config.js` | **Hier änderst du alles**: Name, Bio, Avatar, Farben, Links |
| `index.html`, `style.css`, `app.js` | Die Seite selbst (musst du nicht anfassen) |
| `qr.html` | QR-Generator mit SVG-/PNG-Export für den 3D-Druck |

## Lokal ansehen

`index.html` einfach im Browser öffnen.

## Auf GitHub veröffentlichen (GitHub Pages)

1. Auf github.com ein neues **öffentliches** Repository anlegen, z. B. `linktree`.
2. Alle Dateien aus diesem Ordner hochladen (*Add file → Upload files*) und committen.
3. Im Repo: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main`, Ordner `/ (root)` → **Save**
4. Nach ca. 1 Minute ist die Seite erreichbar unter:
   `https://DEINNAME.github.io/linktree/`

Tipp: Ein Repo mit dem Namen `DEINNAME.github.io` liefert eine kürzere URL (`https://DEINNAME.github.io/`) – das ergibt einen einfacheren QR-Code.

## QR-Code erstellen

1. `qr.html` öffnen (lokal oder unter `https://DEINNAME.github.io/linktree/qr.html`).
2. Deine echte Seiten-URL eintragen.
3. Fehlerkorrektur **L** oder **M** wählen (weniger Module = leichter zu drucken).
4. **SVG herunterladen**.

## 3D-Druck

1. SVG in Tinkercad (*Import*) oder Fusion/Blender/OpenSCAD laden.
2. Auf ca. 40–50 mm Kantenlänge skalieren. Ein Modul sollte mindestens ~0,8 mm groß sein.
3. Den schwarzen Teil (die Module) ca. 1 mm hoch extrudieren, auf einer weißen Grundplatte (z. B. 2 mm).
4. **Zwei Farben drucken**: Platte weiß, Module schwarz (Filamentwechsel auf Höhe 2 mm oder Multicolor-Drucker).
   Kontrast ist entscheidend, sonst scannt der Code nicht.
5. Vor dem Aufhängen mit dem Handy testen.

## Wichtig

Die URL im QR-Code ist **fest im Objekt**. Ändere also später nie die Adresse der Seite. Inhalte (Links, Farben) kannst du dagegen jederzeit in `config.js` ändern, ohne dass sich der QR-Code ändert.