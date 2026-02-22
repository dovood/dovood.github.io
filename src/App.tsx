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
  Twitter, 
  Mail,
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
      heroTitle: "PROJECT",
      heroSubtitle: "ZONE.",
      heroDesc: "dovdov.dev is a small studio creating modern and useful mobile applications. Our goal is to provide the best experience for users.",
      viewApps: "View Apps",
      aboutUs: "About Us",
      ourApps: "Our Apps",
      appsDesc: "Check out our current and upcoming projects.",
      ready: "Ready",
      soon: "Soon",
      viewOnPlay: "View on Play Market",
      statsApps: "Apps",
      statsNew: "New projects",
      statsQuality: "Quality guarantee",
      aboutDesc: "We approach every app like a work of art. The perfect harmony of design and functionality is our core principle.",
      feature1: "Minimalist design",
      feature2: "High performance",
      feature3: "User convenience",
      contactTitle: "GET IN",
      contactSubtitle: "TOUCH.",
      contactDesc: "Have questions or suggestions? We are always ready for communication.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
      understand: "Got it",
      privacyContent: "dovdov.dev respects user privacy. We do not sell or share your personal information with unauthorized third parties. Our apps only collect minimal data necessary to improve service quality.",
      termsContent: "By using dovdov.dev services, you agree to these terms. Our apps are provided 'as is' and we are not responsible for any damage resulting from their use.",
      wallpaperTitle: "Wallpaper App",
      wallpaperDesc: "A collection of high-quality and beautiful wallpapers. Refresh your device.",
      app2Title: "Coming Soon",
      app2Desc: "We are working on a new innovative app. Coming soon to Play Market.",
      app3Title: "Coming Soon",
      app3Desc: "Another great project that will make your daily life easier."
    },
    ru: {
      navApps: "Приложения",
      navAbout: "О нас",
      navContact: "Контакты",
      playMarket: "Play Market",
      heroTitle: "СФЕРА",
      heroSubtitle: "ПРОЕКТОВ.",
      heroDesc: "dovdov.dev — это небольшая студия, создающая современные и полезные мобильные приложения. Наша цель — предоставить пользователям лучший опыт.",
      viewApps: "Посмотреть приложения",
      aboutUs: "О нас",
      ourApps: "Наши приложения",
      appsDesc: "Ознакомьтесь с нашими текущими и предстоящими проектами.",
      ready: "Готово",
      soon: "Скоро",
      viewOnPlay: "Смотреть в Play Market",
      statsApps: "Приложения",
      statsNew: "Новых проекта",
      statsQuality: "Гарантия качества",
      aboutDesc: "Мы подходим к каждому приложению как к произведению искусства. Идеальная гармония дизайна и функциональности — наш основной принцип.",
      feature1: "Минималистичный дизайн",
      feature2: "Быстрая работа",
      feature3: "Удобство пользователя",
      contactTitle: "СВЯЖИТЕСЬ",
      contactSubtitle: "С НАМИ.",
      contactDesc: "Есть вопросы или предложения? Мы всегда готовы к общению.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      rights: "Все права защищены.",
      understand: "Понятно",
      privacyContent: "dovdov.dev уважает конфиденциальность пользователей. Мы не продаем и не передаем вашу личную информацию неавторизованным третьим лицам. Наши приложения собирают только минимальные данные, необходимые для улучшения качества обслуживания.",
      termsContent: "Используя услуги dovdov.dev, вы соглашаетесь с этими условиями. Наши приложения предоставляются 'как есть', и мы не несем ответственности за любой ущерб, возникший в результате их использования.",
      wallpaperTitle: "Wallpaper App",
      wallpaperDesc: "Коллекция высококачественных и красивых обоев. Обновите свое устройство.",
      app2Title: "Скоро",
      app2Desc: "Мы работаем над новым инновационным приложением. Скоро в Play Market.",
      app3Title: "Скоро",
      app3Desc: "Еще один отличный проект, который облегчит вашу повседневную жизнь."
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
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
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

        {/* About / Stats */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-zinc-50 rounded-3xl border border-black/5">
                    <div className="text-4xl font-black mb-2">1+</div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{t[lang].statsApps}</div>
                  </div>
                  <div className="p-8 bg-blue-600 text-white rounded-3xl">
                    <div className="text-4xl font-black mb-2">2</div>
                    <div className="text-sm text-blue-100 font-bold uppercase tracking-wider">{t[lang].statsNew}</div>
                  </div>
                  <div className="p-8 bg-black text-white rounded-3xl col-span-2">
                    <div className="text-4xl font-black mb-2">100%</div>
                    <div className="text-sm text-zinc-400 font-bold uppercase tracking-wider">{t[lang].statsQuality}</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-black tracking-tight mb-8 uppercase">{t[lang].aboutUs}</h2>
                <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                  {t[lang].aboutDesc}
                </p>
                <ul className="space-y-4">
                  {[t[lang].feature1, t[lang].feature2, t[lang].feature3].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-black text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-zinc-900/50 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] border border-white/10">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">{t[lang].contactTitle} <br /> {t[lang].contactSubtitle}</h2>
                <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                  {t[lang].contactDesc}
                </p>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <a href="mailto:info@dovdov.dev" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Email</div>
                      <div className="font-bold">info@dovdov.dev</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Twitter</div>
                      <div className="font-bold">@dovdovdev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-xl font-bold tracking-tighter">
              dovdov<span className="text-blue-600">.dev</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
              <button 
                onClick={() => {
                  setCurrentPage('privacy');
                  window.scrollTo(0, 0);
                }}
                className="hover:text-black transition-colors"
              >
                {t[lang].privacy}
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('terms');
                  window.scrollTo(0, 0);
                }}
                className="hover:text-black transition-colors"
              >
                {t[lang].terms}
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="text-sm text-zinc-400 font-medium text-center md:text-left border-t border-black/5 pt-8">
            © {new Date().getFullYear()} dovdov.dev. {t[lang].rights}
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
            <div className="max-w-3xl mx-auto px-6 py-24">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-2 text-blue-600 font-bold mb-12 hover:gap-3 transition-all"
              >
                <ChevronRight className="w-5 h-5 rotate-180" /> {lang === 'en' ? 'Back' : 'Назад'}
              </button>
              
              <h1 className="text-5xl font-black tracking-tight mb-12 uppercase">
                {currentPage === 'privacy' ? t[lang].privacy : t[lang].terms}
              </h1>
              
              <div className="prose prose-lg text-zinc-500 leading-relaxed space-y-6">
                <p>
                  {currentPage === 'privacy' ? t[lang].privacyContent : t[lang].termsContent}
                </p>
                <p>
                  {lang === 'en'
                    ? "This document was developed by the dovdov.dev team to ensure user safety. If you have any additional questions, please contact us."
                    : "Этот документ разработан командой dovdov.dev для обеспечения безопасности пользователей. Если у вас есть дополнительные вопросы, свяжитесь с нами."
                  }
                </p>
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
