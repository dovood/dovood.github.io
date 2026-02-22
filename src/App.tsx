/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  Image as ImageIcon, 
  Rocket, 
  ExternalLink, 
  Github, 
  Instagram,
  Send,
  Mail,
  Youtube,
  ChevronRight,
  Play,
  X
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<'en' | 'ru'>('en');
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  const t = {
    en: {
      navApps: "Apps",
      navAbout: "About",
      navContact: "Contact",
      playMarket: "Play Market",
      heroTitle: "4K",
      heroSubtitle: "WALLPAPERS.",
      heroDesc: "HD & Live Wallpapers for your device. Discover a vast collection of stunning backgrounds provided by Pixabay and Pexels.",
      viewApps: "View Collection",
      aboutUs: "About Us",
      ourApps: "Our Features",
      appsDesc: "Explore what our app offers to make your device look amazing.",
      ready: "Available",
      soon: "Coming Soon",
      viewOnPlay: "Get it on Google Play",
      statsApps: "Wallpapers",
      statsNew: "Live Backgrounds",
      statsQuality: "4K Quality",
      aboutDesc: "We provide high-quality visual content through powerful APIs. Our app is designed for speed, beauty, and user convenience.",
      feature1: "Daily Updates",
      feature2: "Live Wallpapers",
      feature3: "Easy to Use",
      feature4: "Battery Friendly",
      feature5: "4K Resolution",
      feature6: "Auto Changer",
      reviewsTitle: "What Users Say",
      review1: "The best wallpaper app I've ever used. The quality is insane!",
      review2: "Live wallpapers are so smooth. My phone looks brand new.",
      review3: "Simple and fast. Exactly what I was looking for.",
      howItWorks: "How it Works",
      step1Title: "Browse",
      step1Desc: "Explore thousands of 4K wallpapers across various categories.",
      step2Title: "Preview",
      step2Desc: "See how the wallpaper looks on your home and lock screen.",
      step3Title: "Apply",
      step3Desc: "Set your favorite background with just one tap.",
      faqTitle: "FAQ",
      faq1Q: "Is the app free?",
      faq1A: "Yes, the app is free to download and use with ads. We also offer a premium subscription for an ad-free experience.",
      faq2Q: "Where do the wallpapers come from?",
      faq2A: "Our wallpapers are provided by Pixabay and Pexels APIs, ensuring a vast and high-quality collection.",
      faq3Q: "Do you have live wallpapers?",
      faq3A: "Yes! We have a dedicated section for dynamic video backgrounds.",
      contactTitle: "GET IN",
      contactSubtitle: "TOUCH.",
      contactDesc: "Have questions or suggestions? Contact our support team.",
      footerDesc: "High-quality wallpapers and live backgrounds for your mobile device.",
      footerAbout: "About",
      footerEditorial: "Editorial",
      footerAdvertising: "Advertising",
      footerApps: "Apps",
      footerIOS: "iOS",
      footerAppleTV: "Apple TV",
      footerAndroid: "Android",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      rights: "All rights reserved.",
      understand: "Got it",
      privacyContent: "Welcome to 4K Wallpapers. We are committed to protecting your privacy. This policy explains how we handle your data.",
      termsContent: "By using 4K Wallpapers, you agree to these terms. Please read them carefully.",
      wallpaperTitle: "4K Wallpapers",
      wallpaperDesc: "Thousands of high-definition images for your home and lock screen.",
      app2Title: "Live Video",
      app2Desc: "Dynamic video backgrounds that bring your phone to life.",
      app3Title: "Premium",
      app3Desc: "Ad-free experience with exclusive high-resolution content."
    },
    ru: {
      navApps: "Приложения",
      navAbout: "О нас",
      navContact: "Контакты",
      playMarket: "Play Market",
      heroTitle: "4K",
      heroSubtitle: "ОБОИ.",
      heroDesc: "HD и живые обои для вашего устройства. Откройте для себя огромную коллекцию потрясающих фонов от Pixabay и Pexels.",
      viewApps: "Посмотреть коллекцию",
      aboutUs: "О нас",
      ourApps: "Наши возможности",
      appsDesc: "Узнайте, что предлагает наше приложение, чтобы ваш девайс выглядел потрясающе.",
      ready: "Доступно",
      soon: "Скоро",
      viewOnPlay: "Скачать в Google Play",
      statsApps: "Обои",
      statsNew: "Живые фоны",
      statsQuality: "4K Качество",
      aboutDesc: "Мы предоставляем высококачественный визуальный контент через мощные API. Наше приложение создано для скорости, красоты и удобства.",
      feature1: "Ежедневные обновления",
      feature2: "Живые обои",
      feature3: "Легко использовать",
      feature4: "Экономия заряда",
      feature5: "4K Разрешение",
      feature6: "Автосмена",
      reviewsTitle: "Что говорят пользователи",
      review1: "Лучшее приложение для обоев. Качество просто безумное!",
      review2: "Живые обои очень плавные. Телефон выглядит как новый.",
      review3: "Просто и быстро. Именно то, что я искал.",
      howItWorks: "Как это работает",
      step1Title: "Просмотр",
      step1Desc: "Исследуйте тысячи 4K обоев в различных категориях.",
      step2Title: "Предпросмотр",
      step2Desc: "Посмотрите, как обои выглядят на вашем экране.",
      step3Title: "Применить",
      step3Desc: "Установите любимый фон одним нажатием.",
      faqTitle: "Частые вопросы",
      faq1Q: "Приложение бесплатное?",
      faq1A: "Да, приложение можно скачать бесплатно. Мы также предлагаем премиум-подписку без рекламы.",
      faq2Q: "Откуда берутся обои?",
      faq2A: "Наши обои предоставляются через Pixabay и Pexels API, что гарантирует качество.",
      faq3Q: "Есть ли живые обои?",
      faq3A: "Да! У нас есть специальный раздел для динамических видео-фонов.",
      contactTitle: "СВЯЖИТЕСЬ",
      contactSubtitle: "С НАМИ.",
      contactDesc: "Есть вопросы или предложения? Свяжитесь с нашей службой поддержки.",
      footerDesc: "Высококачественные обои и живые фоны для вашего мобильного устройства.",
      footerAbout: "О проекте",
      footerEditorial: "Редакция",
      footerAdvertising: "Реклама",
      footerApps: "Приложения",
      footerIOS: "iOS",
      footerAppleTV: "Apple TV",
      footerAndroid: "Android",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      rights: "Все права защищены.",
      understand: "Понятно",
      privacyContent: "Добро пожаловать в 4K Wallpapers. Мы стремимся защищать вашу конфиденциальность. Эта политика объясняет, как мы обрабатываем ваши данные.",
      termsContent: "Используя 4K Wallpapers, вы соглашаетесь с этими условиями. Пожалуйста, прочтите их внимательно.",
      wallpaperTitle: "4K Обои",
      wallpaperDesc: "Тысячи изображений высокой четкости для вашего экрана.",
      app2Title: "Живое видео",
      app2Desc: "Динамические видео-фоны, которые оживляют ваш телефон.",
      app3Title: "Премиум",
      app3Desc: "Без рекламы и с эксклюзивным контентом высокого разрешения."
    }
  };

  const apps = [
    {
      id: "wallpaper",
      title: t[lang].wallpaperTitle,
      description: t[lang].wallpaperDesc,
      status: t[lang].ready,
      icon: <ImageIcon className="w-6 h-6" />,
      link: "#",
      color: "blue"
    },
    {
      id: "app2",
      title: t[lang].app2Title,
      description: t[lang].app2Desc,
      status: t[lang].soon,
      icon: <Rocket className="w-6 h-6" />,
      link: null,
      color: "black"
    },
    {
      id: "app3",
      title: t[lang].app3Title,
      description: t[lang].app3Desc,
      status: t[lang].soon,
      icon: <Smartphone className="w-6 h-6" />,
      link: null,
      color: "black"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-black">DD</span>
            </div>
            dovdov<span className="text-blue-600">.dev</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#apps" className="hover:text-blue-600 transition-colors">{t[lang].navApps}</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">{t[lang].navAbout}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">{t[lang].navContact}</a>
            
            <div className="flex items-center gap-2 border-l border-black/10 pl-8">
              {(['en', 'ru'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`uppercase text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    lang === l ? 'bg-blue-600 text-white' : 'hover:bg-zinc-100'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
          >
            {t[lang].playMarket}
          </motion.button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 relative overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
                  {t[lang].heroTitle} <br />
                  <span className="text-blue-600">{t[lang].heroSubtitle}</span>
                </h1>
                <p className="text-xl text-zinc-500 max-w-lg mb-10 leading-relaxed">
                  {t[lang].heroDesc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                    {t[lang].viewApps} <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition-all">
                    {t[lang].aboutUs}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square bg-zinc-50 rounded-[4rem] overflow-hidden border border-black/5 flex items-center justify-center p-12">
                  <div className="relative w-full h-full">
                    {/* Abstract Phone Mockup */}
                    <div className="absolute inset-0 bg-white rounded-[3rem] border-[8px] border-black shadow-2xl flex flex-col overflow-hidden">
                      <div className="h-8 bg-black w-1/3 mx-auto rounded-b-2xl mb-4" />
                      <div className="px-6 py-4 flex-1">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl mb-4" />
                        <div className="h-4 bg-zinc-100 w-3/4 rounded-full mb-2" />
                        <div className="h-4 bg-zinc-100 w-1/2 rounded-full mb-8" />
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="aspect-square bg-zinc-50 rounded-2xl border border-black/5" />
                          <div className="aspect-square bg-zinc-50 rounded-2xl border border-black/5" />
                          <div className="aspect-square bg-zinc-50 rounded-2xl border border-black/5" />
                          <div className="aspect-square bg-zinc-50 rounded-2xl border border-black/5" />
                        </div>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">{t[lang].ourApps}</h2>
                <p className="text-zinc-500 max-w-md">{t[lang].appsDesc}</p>
              </div>
              <div className="flex gap-2">
                <div className="h-1 w-12 bg-blue-600 rounded-full" />
                <div className="h-1 w-4 bg-black rounded-full" />
                <div className="h-1 w-4 bg-black rounded-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {apps.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-[2.5rem] border border-black/5 hover:border-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${
                    app.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-black text-white'
                  }`}>
                    {app.icon}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                      app.status === 'Tayyor' ? 'bg-blue-100 text-blue-600' : 'bg-zinc-100 text-zinc-500'
                    }`}>
                      {app.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed">
                    {app.description}
                  </p>

                  {app.link ? (
                    <a 
                      href={app.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all"
                    >
                      {t[lang].viewOnPlay} <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-400">
                      <Play className="w-4 h-4" /> {t[lang].soon}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Bento Grid Features */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
              <div>
                <h2 className="text-4xl font-black tracking-tight mb-8 uppercase">{t[lang].aboutUs}</h2>
                <p className="text-xl text-zinc-500 leading-relaxed">
                  {t[lang].aboutDesc}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-zinc-50 rounded-3xl border border-black/5">
                  <div className="text-4xl font-black mb-2">1+</div>
                  <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{t[lang].statsApps}</div>
                </div>
                <div className="p-8 bg-blue-600 text-white rounded-3xl">
                  <div className="text-4xl font-black mb-2">2</div>
                  <div className="text-sm text-blue-100 font-bold uppercase tracking-wider">{t[lang].statsNew}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: t[lang].feature1, icon: "✨", color: "bg-blue-50" },
                { title: t[lang].feature2, icon: "🎥", color: "bg-purple-50" },
                { title: t[lang].feature3, icon: "⚡", color: "bg-amber-50" },
                { title: t[lang].feature4, icon: "🔋", color: "bg-emerald-50" },
                { title: t[lang].feature5, icon: "💎", color: "bg-rose-50" },
                { title: t[lang].feature6, icon: "🔄", color: "bg-indigo-50" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${feature.color} p-8 rounded-[2rem] border border-black/5 flex flex-col items-center text-center`}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-black tracking-tight mb-16 text-center uppercase">{t[lang].reviewsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { text: t[lang].review1, author: "Alex M." },
                { text: t[lang].review2, author: "Sarah K." },
                { text: t[lang].review3, author: "Dmitry P." }
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 backdrop-blur-lg p-8 rounded-[2rem] border border-white/10"
                >
                  <div className="text-blue-400 text-4xl mb-4 font-serif">"</div>
                  <p className="text-zinc-300 italic mb-6 leading-relaxed">{review.text}</p>
                  <div className="font-bold text-white">— {review.author}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">{t[lang].howItWorks}</h2>
              <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", title: t[lang].step1Title, desc: t[lang].step1Desc },
                { step: "02", title: t[lang].step2Title, desc: t[lang].step2Desc },
                { step: "03", title: t[lang].step3Title, desc: t[lang].step3Desc }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative p-8 bg-zinc-50 rounded-[2.5rem] border border-black/5"
                >
                  <div className="text-6xl font-black text-blue-600/10 absolute top-6 right-8 select-none">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-12 text-center uppercase">{t[lang].faqTitle}</h2>
            <div className="space-y-6">
              {[
                { q: t[lang].faq1Q, a: t[lang].faq1A },
                { q: t[lang].faq2Q, a: t[lang].faq2A },
                { q: t[lang].faq3Q, a: t[lang].faq3A }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm"
                >
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {item.q}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed pl-5">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 bg-white border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Brand & Socials */}
            <div className="lg:col-span-4 space-y-6">
              <div className="text-3xl font-black tracking-tighter">
                dovdov<span className="text-blue-600">.dev</span>
              </div>
              <p className="text-zinc-500 max-w-xs leading-relaxed text-sm">
                {t[lang].footerDesc}
              </p>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com/dovdov.dev" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://t.me/dovdovdev" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-black transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{t[lang].footerAbout}</h4>
              <ul className="space-y-3 text-sm font-black">
                <li><a href="#" className="hover:text-blue-600 transition-colors">{t[lang].footerEditorial}</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">{t[lang].footerAdvertising}</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">{t[lang].footerApps}</h4>
              <ul className="space-y-3 text-sm font-black">
                <li><a href="#" className="hover:text-blue-600 transition-colors">{t[lang].footerIOS}</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">{t[lang].footerAppleTV}</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">{t[lang].footerAndroid}</a></li>
                <li className="pt-4 border-t border-black/5">
                  <button onClick={() => setCurrentPage('privacy')} className="hover:text-blue-600 transition-colors block text-zinc-400 font-bold text-xs uppercase tracking-tighter">
                    {t[lang].privacy}
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('terms')} className="hover:text-blue-600 transition-colors block text-zinc-400 font-bold text-xs uppercase tracking-tighter">
                    {t[lang].terms}
                  </button>
                </li>
              </ul>
            </div>

            {/* Phone Mockup */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="absolute top-0 right-0 w-64 h-[500px] bg-white rounded-[2.5rem] border-[8px] border-black shadow-2xl overflow-hidden transition-all duration-700">
                <div className="px-6 pt-4 flex justify-between items-center text-[10px] font-bold">
                  <span>21:44</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-2 bg-black/20 rounded-sm" />
                    <div className="w-2 h-2 bg-black/20 rounded-full" />
                  </div>
                </div>
                <div className="h-6 bg-black w-1/3 mx-auto rounded-b-xl mb-6" />
                <div className="px-5 space-y-6">
                  <h3 className="text-xl font-black tracking-tighter">Лента</h3>
                  <div className="relative aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden group">
                    <img 
                      src="https://picsum.photos/seed/wallpaper/400/600" 
                      alt="Mockup" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                      <div className="text-[8px] text-white/70 font-bold uppercase mb-1">Игры, Новости • 4 часа назад</div>
                      <div className="text-[10px] text-white font-bold leading-tight">
                        Игровая неделя: Фил Спенсер покидает Xbox...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-black/5 text-sm text-zinc-400 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} dovdov.dev. {t[lang].rights}</div>
            <div className="flex gap-6">
              <span className="text-[10px] uppercase tracking-widest font-black text-zinc-300">v1.0.4</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Full Screen Pages */}
      <AnimatePresence mode="wait">
        {currentPage !== 'home' && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="max-w-3xl mx-auto px-6 py-24 relative z-10">
              <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent -z-10" />
              
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-2 text-blue-600 font-bold mb-12 hover:gap-3 transition-all"
              >
                <ChevronRight className="w-5 h-5 rotate-180" /> {lang === 'en' ? 'Back' : 'Назад'}
              </button>
              
              <h1 className="text-5xl font-black tracking-tight mb-12 uppercase">
                {currentPage === 'privacy' ? t[lang].privacy : t[lang].terms}
              </h1>
              
              <div className="space-y-12">
                {currentPage === 'privacy' ? (
                  <div className="space-y-10">
                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Introduction
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        Welcome to <strong>4K Wallpapers</strong>. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application. By using our app, you agree to the collection and use of information in accordance with this policy.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Information We Collect
                      </h2>
                      <ul className="space-y-3 text-zinc-500">
                        <li className="flex gap-3">
                          <span className="font-bold text-black">•</span>
                          <span><strong>Device information:</strong> Device type, operating system version, unique device identifiers</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-black">•</span>
                          <span><strong>Usage data:</strong> App interactions, features used, time spent in the app</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-black">•</span>
                          <span><strong>Push notification token:</strong> Used to send relevant notifications (via OneSignal)</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-bold text-black">•</span>
                          <span><strong>Purchase information:</strong> Subscription status via Google Play Billing (we do not store payment card details)</span>
                        </li>
                      </ul>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Third-Party Services
                      </h2>
                      <p className="text-zinc-500 mb-4">Our app uses the following third-party services that may collect information:</p>
                      <ul className="space-y-3 text-zinc-500">
                        <li>• <strong>Pixabay API</strong> – Provides wallpaper and image content</li>
                        <li>• <strong>Pexels API</strong> – Provides wallpaper and video content</li>
                        <li>• <strong>Google AdMob</strong> – Displays advertisements</li>
                        <li>• <strong>OneSignal</strong> – Push notification service</li>
                        <li>• <strong>Firebase (Google)</strong> – Analytics and messaging</li>
                        <li>• <strong>Google Play Billing</strong> – In-app subscription management</li>
                      </ul>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Advertising
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        Our app uses Google AdMob to display advertisements. AdMob may use your device's advertising ID to show personalized ads based on your interests. You can opt out of personalized advertising in your device settings.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Push Notifications
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        With your permission, we may send push notifications to inform you about new wallpapers, updates, or re-engagement messages. You can disable notifications at any time in your device settings or within the app.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Subscriptions & Purchases
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        Our app offers optional premium subscriptions (monthly and yearly) through Google Play. All transactions are securely processed by Google Play. We do not have access to your credit card or payment information. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Data Retention
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        We retain your data only as long as necessary to provide the service. You can request deletion of your data by contacting us at the email below.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Children's Privacy
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        Our app is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Contact Us
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at <strong>dovdov.apps@gmail.com</strong>.
                      </p>
                    </section>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Acceptance of Terms
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        By downloading, installing, or using the <strong>4K Wallpapers</strong> application, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the app.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Use of the App
                      </h2>
                      <p className="text-zinc-500 mb-4">You may use this app for personal, non-commercial purposes only. You agree not to:</p>
                      <ul className="space-y-3 text-zinc-500">
                        <li>• Use the app for any unlawful purpose</li>
                        <li>• Attempt to reverse engineer or modify the app</li>
                        <li>• Distribute, sell, or sublicense the app or its content</li>
                        <li>• Use the app to infringe on any third-party intellectual property rights</li>
                      </ul>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Content & Intellectual Property
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        All wallpapers, videos, and media content displayed in the app are provided by third-party platforms (Pixabay and Pexels) and are subject to their respective licenses. We do not claim ownership of any third-party content.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Premium Subscriptions
                      </h2>
                      <ul className="space-y-3 text-zinc-500">
                        <li>• Subscriptions are billed through Google Play</li>
                        <li>• Subscriptions automatically renew unless cancelled 24h before renewal</li>
                        <li>• You can manage subscriptions in your Google Play account settings</li>
                        <li>• No refunds are provided for unused portions of a subscription period</li>
                      </ul>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Advertisements
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        The free version of the app displays advertisements powered by Google AdMob. By using the free version, you consent to the display of ads. Premium subscribers enjoy an ad-free experience.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Disclaimer of Warranties
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        The app is provided "as is" without warranties of any kind. We do not warrant that the app will be uninterrupted or error-free, or that content provided by third-party APIs will always be available.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Termination
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        We reserve the right to terminate or suspend your access to the app at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Governing Law
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through good-faith negotiation.
                      </p>
                    </section>

                    <section className="space-y-4">
                      <h2 className="text-xl font-bold text-blue-600 flex items-center gap-3">
                        <div className="w-1 h-6 bg-blue-600 rounded-full" />
                        Contact Us
                      </h2>
                      <p className="text-zinc-500 leading-relaxed">
                        If you have any questions about these Terms of Use, please contact us at <strong>dovdov.apps@gmail.com</strong>.
                      </p>
                    </section>
                  </div>
                )}
              </div>

              <div className="mt-20 pt-12 border-t border-black/5 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter">
                  dovdov<span className="text-blue-600">.dev</span>
                </div>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-colors"
                >
                  {t[lang].understand}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
