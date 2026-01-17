# Boostin Consultancy - Migratie Checklist

Dit document bevat alle openstaande punten voor de nieuwe website.

---

## 1. Responsive & Mobile

### Mobile Navigation
- [x] Hamburger menu werkt
- [x] Menu opent/sluit correct
- [x] Dropdown submenu's werken op mobile (klik ipv hover)
- [x] Menu heeft correcte z-index (boven content)
- [x] Menu positie correct (onder header)
- [ ] Menu sluit bij klikken buiten menu
- [ ] Menu sluit bij navigeren naar pagina

### Responsive Design
- [x] Viewport meta tag aanwezig
- [x] Geen horizontal scroll op mobile
- [x] Touch-friendly buttons (min 44x44px)
- [ ] Alle pagina's getest op iPhone
- [ ] Alle pagina's getest op Android
- [ ] Alle pagina's getest op tablet

### Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

---

## 2. SEO Optimalisatie

### Technische SEO (Afgerond)
- [x] Meta tags per pagina (title, description)
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org Organization markup
- [x] Apple Touch Icon
- [x] Robots.txt
- [x] Sitemap.xml (automatisch gegenereerd)

### Content SEO
- [x] Alt-texts op afbeeldingen
- [x] H1 per pagina
- [x] Heading structuur (H1 > H2 > H3)
- [ ] Interne links tussen pagina's
- [ ] Unieke meta descriptions per pagina controleren

### Nog te doen
- [ ] OG image maken (1200x630px `boostin-og-image.jpg`)
- [ ] Seobility baseline scan
- [ ] Keywords bepalen per pagina

---

## 3. Domein & Hosting

### Huidige status
- Site gehost op: GitHub Pages (staging)
- URL: https://tobiasboog-boop.github.io/boostin_site/

### Productie
- [ ] Domein: boostin-consultancy.nl configureren
- [ ] DNS records aanpassen
- [ ] SSL certificaat (automatisch bij Cloudflare)
- [ ] WWW vs non-WWW redirect instellen
- [ ] pathPrefix verwijderen in .eleventy.js voor productie

---

## 4. Formulieren & Integraties

### Pipedrive
- [x] Pipedrive popup script aanwezig
- [ ] Contact formulier testen
- [ ] Leads komen correct binnen in Pipedrive

### Social Media
- [x] LinkedIn link in footer
- [ ] LinkedIn link correct

---

## 5. Content Verificatie

### Homepage
- [x] Hero tekst correct (originele website)
- [x] Methode sectie teksten correct
- [x] Klanten logo's zichtbaar
- [x] Testimonial aanwezig

### Subpagina's
- [ ] Wat is Boostin - content controleren
- [ ] Consultancy - content controleren
- [ ] Power BI Producten - content controleren
- [ ] Trainingen - content controleren
- [ ] Dynamics 365 - content controleren
- [ ] Contact - formulier werkt

---

## 6. Pre-Livegang Checklist

### Code & Build
- [x] Site bouwt zonder errors
- [x] Alle templates correct
- [ ] Finale build testen

### Laatste controles
- [x] Homepage laadt correct
- [x] Menu navigatie werkt (desktop)
- [x] Menu navigatie werkt (mobile)
- [ ] Alle links werken
- [ ] Footer links werken
- [ ] Contact buttons werken
- [ ] Geen console errors

---

## 7. Post-Livegang

### Dag 1
- [ ] Alle pagina's handmatig checken
- [ ] Google Search Console eigenaarschap verifiëren
- [ ] Sitemap.xml indienen
- [ ] Contact formulier testen (testbericht)

### Week 1
- [ ] Search Console: indexeringsstatus monitoren
- [ ] Check op 404 errors
- [ ] Google Analytics controleren

---

*Laatste update: 17 januari 2026*
