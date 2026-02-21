import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#00838F] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl mb-4">Innovate 2026</h3>
            <p className="text-white/80 mb-6 max-w-md">
              {t.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4">{t.quickLinksTitle}</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">{t.link1}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.link2}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.link3}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.link4}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.link5}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl mb-4">{t.contactTitle}</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@innovate2026.it" className="hover:text-white transition-colors">
                  info@innovate2026.it
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+390212345678" className="hover:text-white transition-colors">
                  +39 02 1234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>{t.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.cookie}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
