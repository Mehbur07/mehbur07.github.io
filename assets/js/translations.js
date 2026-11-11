/* =========================================================
   Çeviriler (TR / EN)

   Nasıl çalışır?
   - Sayfa içeriklerinin Türkçesi doğrudan HTML'de yazılıdır.
     HTML'de data-i18n="anahtar" olan bir yazının İngilizcesi
     aşağıdaki "en" bölümüne aynı anahtarla eklenir.
   - Görsel açıklaması (alt) gibi etiket özellikleri için HTML'de
     data-i18n-attr="alt:anahtar" kullanılır.
   - İngilizcesi yazılmamış bir yazı, İngilizce seçiliyken de
     Türkçe görünür (sayfa bozulmaz).
   - Menü ve alt bilgi gibi JavaScript'in oluşturduğu ortak yazıların
     Türkçesi HTML'de olmadığı için "tr" bölümünde durur.

   Yeni bir yazı eklerken: HTML'ye data-i18n="bolum.ad" ekle,
   İngilizcesini "en" bölümünde ilgili sayfanın altına yaz.
   ========================================================= */
window.M07_TRANSLATIONS = {
  tr: {
    'skip': 'İçeriğe geç',
    'nav.label': 'Ana menü',
    'nav.menu': 'Menüyü aç/kapat',
    'nav.home': 'Ana Sayfa',
    'nav.projects': 'Projelerim',
    'nav.about': 'Hakkımda',
    'nav.social': 'Sosyal Medya',
    'nav.contact': 'İletişim',
    'lang.label': 'Dil seçimi',
    'theme.toLight': 'Açık temaya geç',
    'theme.toDark': 'Koyu temaya geç',
    'footer.tagline': 'Gamer, yayıncı, elektronikçi ve yazılımcı. Oyun ve teknoloji tutkusuyla her gün yeni bir şey üretiyorum.',
    'footer.social': 'Sosyal medya',
    'footer.rights': 'Tüm hakları saklıdır.',

    /* İletişim formunun durum mesajları (JavaScript yazar) */
    'form.notReady': 'Mesaj formu henüz aktif değil. Şimdilik yukarıdaki e-posta adresinden bana yazabilirsin.',
    'form.sending': 'Gönderiliyor…',
    'form.success': 'Mesajın gönderildi, teşekkürler! En kısa sürede dönüş yaparım.',
    'form.error': 'Mesaj gönderilemedi. Lütfen biraz sonra tekrar dene ya da doğrudan e-posta at.',
    'form.network': 'Bağlantı kurulamadı. İnternetini kontrol edip tekrar dene.'
  },
  en: {
    /* --- Ortak (menü, alt bilgi) --- */
    'skip': 'Skip to content',
    'nav.label': 'Main menu',
    'nav.menu': 'Toggle menu',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.social': 'Social Media',
    'nav.contact': 'Contact',
    'lang.label': 'Language',
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'footer.tagline': 'Gamer, streamer, electronics hobbyist and developer. Driven by games and tech, I build something new every day.',
    'footer.social': 'Social media',
    'footer.rights': 'All rights reserved.',

    /* --- Sekme başlıkları --- */
    'title.home': 'Mehbur07 — Mehmet Burak ŞAHİN | Gamer, Streamer, Developer',
    'title.projects': 'Projects — Mehbur07',
    'title.about': 'About — Mehbur07',
    'title.social': 'Social Media — Mehbur07',
    'title.contact': 'Contact — Mehbur07',
    'title.notfound': 'Page Not Found — Mehbur07',

    /* --- Görsel açıklamaları (alt) --- */
    'alt.mehpix': 'MehPiX logo',
    'alt.mmc': 'MehburMC Launcher logo',
    'alt.mmcl': 'MehburMC Launcher Linux logo',
    'alt.dn': 'Death Note mod logo',
    'alt.igt': 'Iron Golem Troll mod logo',
    'alt.gs': 'Garip Şeyler MC mod logo',
    'alt.mty': 'Mehburity mod logo',
    'alt.w11': 'Win11 Web logo',
    'alt.ai': 'MehburAI logo',
    'alt.os': 'MehburOS logo',
    'alt.browser': 'MehBrowser logo',
    'alt.minimap': "Mehbur's Mini Map logo",
    'alt.avatar': 'Mehbur07 mascot logo',

    /* --- Ana sayfa --- */
    'home.eyebrow': 'Gamer · Streamer · Developer',
    'home.lead': 'Kick and Twitch streamer, electronics hobbyist and software developer. Driven by my passion for games and tech, I build something new every day.',
    'home.ctaProjects': 'My Projects',
    'home.ctaSocial': 'Social Media',
    'home.exploreTitle': 'Explore',
    'home.mehpixBadge': 'Live',
    'home.mehpixText': 'The website of MehPiX, my software studio. Explore and download our projects like the PyAI chatbot and the Arduino-powered Quiz.',
    'home.mehpixCta': 'Visit Site',
    'home.projectsCount': '7 ready · 5 in development',
    'home.projectsText': "My Minecraft launcher, my mods and the software I'm working on.",
    'home.go': 'Explore',
    'home.aboutEyebrow': "I'm Burak",
    'home.aboutText': "Gamer, streamer, electronics hobbyist and developer. Who I am and what I'm aiming for.",
    'home.socialText': 'Watch my streams, follow me and join the Discord community.',
    'home.contactEyebrow': 'Get in Touch',
    'home.contactText': 'Questions, collaborations or just want to say hi? Write to me.',

    /* --- 404 sayfası --- */
    'notfound.eyebrow': 'Error 404',
    'notfound.title': 'Page not found',
    'notfound.text': "The page you're looking for may have been moved, deleted or never existed.",
    'notfound.home': 'Back to Home',

    /* --- Projelerim --- */
    'projects.eyebrow': 'Software',
    'projects.lead': "Software I've built and my Minecraft mods. Download the ready ones and follow the ones I'm still working on.",
    'projects.readyTitle': 'Ready Projects',
    'projects.readyText': "Ready-to-use, downloadable projects. Files are hosted on GitHub; each project's release notes include installation steps (in Turkish).",
    'projects.typeLauncher': 'Minecraft Launcher',
    'projects.typeMod': 'Minecraft Mod',
    'projects.typeAI': 'Hybrid AI',
    'projects.download': 'Download',
    'projects.releaseNotes': 'Release Notes',
    'projects.source': 'Source Code',
    'projects.serverSide': 'Server-side',
    'projects.mmc.subtitle': 'A lightweight, fast Minecraft launcher',
    'projects.mmc.text': 'An ultra-lightweight Windows Minecraft launcher I built myself with Tauri. It installs Vanilla, Forge, Fabric and OptiFine versions in one click and easily imports mods and modpacks from CurseForge and Modrinth. It downloads and sets up the right Java Runtime on its own. Low RAM usage, theme and RAM settings, and automatic updates, all in one.',
    'projects.mmcl.subtitle': '.deb package for Ubuntu 26.04 and MehburOS',
    'projects.mmcl.text': "The Linux version of MehburMC Launcher. Open a terminal in the folder with the file and install it with the single command below; required packages are installed automatically. Future versions update from inside the launcher.",
    'projects.mmcl.size': '8.3 MB',
    'projects.dn.text': "Adds Death Note magic to feathers and books. Write a player's name and take them down.",
    'projects.igt.text': "Hit an iron golem and get caught with it in a never-ending levitation loop. Runs server-side only; installing it on players' computers won't cause any problems.",
    'projects.gs.size': '1.4 MB',
    'projects.gs.text': 'Welcome to the Upside Down. The Nether turns red, Demogorgons hunt and Vecna waits.',
    'projects.typeWeb': 'Web App',
    'projects.visit': 'Visit Site',
    'projects.w11.meta': 'Runs in the browser',
    'projects.w11.subtitle': 'A Windows 11 simulation that runs in your browser',
    'projects.w11.text': 'A Windows 11-style desktop that opens right in your browser, no installation needed. It has draggable, resizable windows, a Start menu, a taskbar and apps like File Explorer, Notepad, Calculator, Paint and Terminal. Your notes and drawings are saved to a "Win11 Web" folder created on your device.',
    'projects.mty.text': 'A floating, neon-cyan AI companion inspired by Verity. It chats with you through Gemini, fights for you, mines, builds houses and, when angered, turns into an 18-block-tall demon. Pitch-black nights, a flashlight and things watching from the dark await you.',
    'projects.wipTitle': "What I'm Working On",
    'projects.wipText': "Projects still in development. Once they're ready, you'll be able to download them here.",
    'projects.tape': 'NOT STABLE ⚠ NOT STABLE ⚠ NOT STABLE ⚠ NOT STABLE ⚠ NOT STABLE ⚠ NOT STABLE ⚠ NOT STABLE',
    'projects.unstable': 'Not stable · Not downloadable',
    'projects.ai.subtitle': 'A hybrid desktop AI',
    'projects.ai.text': 'A neon-cyan and black themed Windows desktop AI. When online, it researches with Google Gemini and Wikipedia and saves what it learns to its local memory; when offline, it recalls that knowledge with its Turkish semantic engine. Features include a voice assistant ("Hey Mehbur"), full-screen JARVIS conversations, seeing through the camera, drawing images and remote control via Telegram.',
    'projects.voice': 'Voice Assistant',
    'projects.inDev': 'In development',
    'projects.os.text': 'My own operating system project. Details coming very soon!',
    'projects.browser.text': 'My own web browser project. Details coming very soon!',
    'projects.maio.text': 'My automatic inventory organizer project. Details coming very soon!',
    'projects.minimap.text': 'My own mini map project. Details coming very soon!',

    /* --- Hakkımda --- */
    'about.eyebrow': 'Gamer · Streamer · Electronics · Developer',
    'about.hello': "👋 I'm Burak.",
    'about.text': "I'm a young gamer, streamer, electronics hobbyist and developer. My passion for technology and games led me to grow in these fields. Every day, I keep learning and making something new.",
    'about.openSource': 'My projects are open source.',
    'about.goalsTitle': 'My Goals',
    'about.goal1': 'To entertain you in my streams and videos, and never bore you.',
    'about.goal2': "To become more successful in the fields I've mentioned.",
    'about.goal3': 'To be a source of inspiration for people.',
    'about.goal4': "To prove wrong everyone who thinks I'll never succeed. 🔥",
    'about.ctaProjects': 'Check Out My Projects',
    'about.ctaSocial': 'Follow Me',

    /* --- Sosyal Medya --- */
    'social.eyebrow': 'Streams · Videos · Community',
    'social.lead': 'Follow me and join the community!',
    'social.watch': 'Watch',
    'social.subscribe': 'Subscribe',
    'social.follow': 'Follow',
    'social.join': 'Join',
    'social.discordText': 'Mehbur07 server',

    /* --- İletişim --- */
    'contact.eyebrow': 'Get in Touch',
    'contact.lead': "Don't hesitate to reach out! For questions, collaborations or just to say hi, write to me through any of the channels below.",
    'contact.email': 'Email',
    'contact.write': 'Write',
    'contact.discordText': 'Join my server',
    'contact.dm': 'Send a DM',
    'contact.formTitle': 'Send a Message',
    'contact.formText': "Fill out the form and your message lands straight in my inbox. I'll get back to you as soon as I can.",
    'contact.nameLabel': 'Your name',
    'contact.namePh': 'Alex',
    'contact.emailLabel': 'Your email',
    'contact.emailPh': 'you@example.com',
    'contact.messageLabel': 'Your message',
    'contact.messagePh': 'Hi Burak, ...',
    'contact.send': 'Send',
    'contact.privacy': 'Your message is delivered via Web3Forms; your email address is only used to reply to you.',

    /* --- İletişim formu durum mesajları --- */
    'form.notReady': "The contact form isn't active yet. For now, you can write to me at the email address above.",
    'form.sending': 'Sending…',
    'form.success': "Your message has been sent, thanks! I'll get back to you as soon as I can.",
    'form.error': "Your message couldn't be sent. Please try again a bit later or email me directly.",
    'form.network': "Couldn't connect. Check your internet connection and try again."
  }
};
