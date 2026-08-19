/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Shield, 
  Key, 
  Car, 
  Wrench, 
  Lock, 
  Unlock, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  Award,
  Sparkles,
  Bike,
  AlertTriangle,
  UserCheck,
  Zap
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'oto' | 'cilingir'>('all');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Oto Anahtar',
    description: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Merhaba Ömer Usta, web siteniz üzerinden ulaşıyorum.\n\nAd Soyad: ${formData.name}\nTelefon: ${formData.phone}\nHizmet: ${formData.service}\nAçıklama: ${formData.description}\n\nYardımcı olabilir misiniz?`
    );
    window.open(`https://wa.me/905324356523?text=${message}`, '_blank');
  };

  const reviews = [
    {
      name: "Şamil Cumhur Nazlı",
      rating: 5,
      text: "Temiz ve kaliteli işçiliği ile aldığının hakkını veriyor, Gerçekten tecrübesi çok, Araç kapsındaki sorunumuzu kısa sürede halletti Ömer hocam."
    },
    {
      name: "Hıdır Pak",
      rating: 5,
      text: "Ömer ustaya teşekkür ederim bir telefonla sorunumu halletti işinin ehli herkese tavsiye ederim."
    },
    {
      name: "Emre Türesinler",
      rating: 5,
      text: "Ömer usta sağ olsun sabah erken saatlerde telefonumu açan tek kişi oldu. Söz verdiği saatte geldi 1 dakikadan kısa sürede kapıyı açtı."
    },
    {
      name: "Melike Akyüz",
      rating: 5,
      text: "Telefon ile aradık 20dk içinde geldi sağolsun 5dk da halletti. İşinin ehli bi usta. Teşekkürler."
    },
    {
      name: "Yeliz Özbilən",
      rating: 5,
      text: "Çok memnun kaldım. Hızlı, güvenilir ve profesyonel bir hizmet sundular. Kısa sürede geldiler, kapıyı hiçbir zarar vermeden açtılar. Güler yüzlü ve uygun fiyatlı bir hizmetti. Güvenle tavsiye ederim, emeğinize teşekkür ederim."
    },
    {
      name: "Ethem Böke",
      rating: 5,
      text: "Ömer bey sagolsun 5 dakikada Togg aracimizi acTI. Cok iyi ve profesyonel hizmet 👍🏼"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-slate-950 pb-20 md:pb-0">
      
      {/* TOP TRUST BANNER */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-b border-cyan-500/20 py-2 px-4 text-xs md:text-sm text-cyan-300 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 w-full md:w-auto">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>1995'ten beri hizmet • 24 Saat Açık • Bahçelievler ve Yakınları</span>
          </div>
          <div className="flex items-center justify-center gap-4 w-full md:w-auto text-slate-300">
            <a href="tel:+905324356523" className="hover:text-cyan-400 transition flex items-center gap-1 font-semibold text-white">
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> 0532 435 65 23
            </a>
            <span className="text-cyan-500/40">|</span>
            <span className="text-amber-400 font-semibold">★ 4.5 / 5 (103 Google Yorumu)</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition">
              <Key className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                KISMET <span className="text-cyan-400 text-sm md:text-base font-semibold">ANAHTAR & ÇİLİNGİR</span>
              </div>
              <div className="text-xs text-cyan-300/80 tracking-widest uppercase font-medium">
                Bahçelievler • 1995'ten Beri
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-300">
            <a href="#anasayfa" className="hover:text-cyan-400 transition">Ana Sayfa</a>
            <a href="#hizmetler" className="hover:text-cyan-400 transition">Hizmetler</a>
            <a href="#oto-anahtar" className="hover:text-cyan-400 transition">Oto Anahtar</a>
            <a href="#cilingir" className="hover:text-cyan-400 transition">Çilingir</a>
            <a href="#omer-usta" className="hover:text-cyan-400 transition">Hakkımızda</a>
            <a href="#yorumlar" className="hover:text-cyan-400 transition">Yorumlar</a>
            <a href="#iletisim" className="hover:text-cyan-400 transition">İletişim</a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://wa.me/905324356523?text=Merhaba,%20web%20sitenizden%20ulaşıyorum.%20Bilgi%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 transition shadow-sm"
              title="WhatsApp Destek"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a 
              href="tel:+905324356523"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>0532 435 65 23</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
            <a 
              href="#anasayfa" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium border-b border-slate-800/60"
            >
              Ana Sayfa
            </a>
            <a 
              href="#hizmetler" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium border-b border-slate-800/60"
            >
              Hizmetler
            </a>
            <a 
              href="#oto-anahtar" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium border-b border-slate-800/60"
            >
              Oto Anahtar
            </a>
            <a 
              href="#cilingir" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium border-b border-slate-800/60"
            >
              Çilingir
            </a>
            <a 
              href="#omer-usta" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium border-b border-slate-800/60"
            >
              Hakkımızda
            </a>
            <a 
              href="#yorumlar" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium border-b border-slate-800/60"
            >
              Yorumlar
            </a>
            <a 
              href="#iletisim" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-cyan-400 font-medium"
            >
              İletişim
            </a>
            <div className="pt-2 flex gap-3">
              <a 
                href="tel:+905324356523"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" /> Hemen Ara
              </a>
              <a 
                href="https://wa.me/905324356523?text=Merhaba,%20web%20sitenizden%20ulaşıyorum." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="anasayfa" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Google Rating Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-sm font-bold text-white">4.5 / 5</span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-300 font-medium">103 Google Yorumu</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Bahçelievler'de <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Çilingir & Oto Anahtar</span> Hizmeti
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                <span className="text-white font-semibold">1995 yılından bu yana</span> anahtar, çilingir, oto anahtar, kumanda, merkezi kilit ve kilit hizmetlerinde hızlı, güvenilir ve profesyonel çözümler sunuyoruz.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="tel:+905324356523"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-5 h-5" />
                  <span>HEMEN ARA: 0532 435 65 23</span>
                </a>
                <a 
                  href="https://wa.me/905324356523?text=Merhaba,%20kapıda%20kaldım%20/%20anahtar%20işlemim%20var.%20Yardımcı%20olabilir%20misiniz?" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WHATSAPP'TAN ULAŞ</span>
                </a>
              </div>

              {/* Trust Checkmarks */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm border-t border-slate-800/80">
                <div className="flex items-center gap-2 justify-center lg:justify-start text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>1995'ten Beri</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>24 Saat Açık</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Hızlı Müdahale</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Profesyonel İşçilik</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-lg opacity-30"></div>
                <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-8 shadow-2xl space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Bahçelievler Usta Hizmeti</div>
                        <div className="text-xs text-slate-400">Siyavuşpaşa & Çevresi</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                      ● 7/24 AÇIK
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Lock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">Acil Çilingir & Kapı Açma</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Kapıda mı kaldınız? Ev ve iş yeri kapılarınız zarar görmeden açılır.</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Car className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">Oto Anahtar & Kumanda</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Kaybolan araç anahtarları, kumanda kopyalama ve kontak tamiri.</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                        <Bike className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">Motor & Sepet Anahtarı</h3>
                        <p className="text-xs text-slate-400 mt-0.5">Honda, Yamaha, Suzuki ve diğer motor/sepet kilit çözümleri.</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href="tel:+905324356523"
                    className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 border border-slate-700 transition"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Hemen Usta Çağır: 0532 435 65 23</span>
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1995 VURGUSU & GÜVEN ÖZETİ */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">1995'ten</div>
              <div className="text-sm font-bold text-white mb-1">Beri Hizmet</div>
              <p className="text-xs text-slate-400">Uzun yıllara dayanan tecrübe ve güven</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">24 Saat</div>
              <div className="text-sm font-bold text-white mb-1">Kesintisiz Açık</div>
              <p className="text-xs text-slate-400">Günün her saatinde acil destek</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">Hızlı</div>
              <div className="text-sm font-bold text-white mb-1">Müdahale</div>
              <p className="text-xs text-slate-400">Müşteri yorumlarında övülen hız</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">Profesyonel</div>
              <div className="text-sm font-bold text-white mb-1">İşçilik</div>
              <p className="text-xs text-slate-400">Zarar vermeyen özenli teknik çözümler</p>
            </div>

          </div>
        </div>
      </section>

      {/* HİZMETLER BÖLÜMÜ */}
      <section id="hizmetler" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Kapsamlı Çözümler</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              İhtiyacınız Olan Anahtar ve Çilingir Hizmetleri
            </h3>
            <p className="text-slate-400 text-sm md:text-base">
              Evden araca, anahtardan kilide kadar hızlı ve profesyonel çözümler. Aşağıdan kategori seçerek inceleyebilirsiniz.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition ${activeTab === 'all' ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                Tüm Hizmetler
              </button>
              <button 
                onClick={() => setActiveTab('oto')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition ${activeTab === 'oto' ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                🚗 Oto Anahtar & Araç
              </button>
              <button 
                onClick={() => setActiveTab('cilingir')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition ${activeTab === 'cilingir' ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'}`}
              >
                🔑 Çilingir & Kilit
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. 7/24 Çilingir */}
            {(activeTab === 'all' || activeTab === 'cilingir') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Lock className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-semibold">Çilingir</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">7/24 Çilingir Hizmeti</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Kapıda kaldığınızda, anahtarınızı kaybettiğinizde veya kilit problemlerinde hızlı destek.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Hızlı Adrese Teslim</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Ustayı Ara <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* 2. Oto Anahtar */}
            {(activeTab === 'all' || activeTab === 'oto') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Key className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-semibold">Oto Anahtar</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Oto Anahtar</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Kaybolan, bozulan veya yedeklenmesi gereken araç anahtarları için profesyonel çözümler.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Tüm Markalar</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Oto Anahtar İçin Ulaş <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* 3. Araç Kapı Açma */}
            {(activeTab === 'all' || activeTab === 'oto') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Car className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-semibold">Araç Kapısı</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Araç Kapı Açma</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Araç kapısı ve kilit problemlerinde hızlı ve mümkün olduğunca zarar vermeden müdahale.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Zararsız Açılış</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Destek Al <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* 4. Merkezi Kilit */}
            {(activeTab === 'all' || activeTab === 'oto') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-semibold">Kilit Sistemi</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Merkezi Kilit</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Merkezi kilit ve araç kilit sistemleriyle ilgili sorunlarda destek.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Uzman Bakım</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Bilgi Al <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* 5. Motor Anahtarı */}
            {(activeTab === 'all' || activeTab === 'oto') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Bike className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 font-semibold">Motor & Sepet</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Motor Anahtarı</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Motor anahtarı ve sepet anahtarı hizmetleri. (Honda, Yamaha, Suzuki vb. modeller için).
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Motosiklet Uzmanı</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Hemen Ara <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* 6. Kumanda ve Anahtar */}
            {(activeTab === 'all' || activeTab === 'oto') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Key className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-semibold">Kumanda</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Kumanda ve Anahtar</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Araç kumandası, bariyer kumandası ve anahtar kopyalama çözümleri.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Kodlama & Yedek</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Ulaş <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* 7. Kilit Değişimi */}
            {(activeTab === 'all' || activeTab === 'cilingir') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-semibold">Kilit Değişimi</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Kilit Değişimi</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Ev, iş yeri ve çeşitli mekanlar için güvenli kilit değişimi ve yükseltme.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Kaliteli Markalar</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Bilgi Al <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* 8. Kilit Tamiri */}
            {(activeTab === 'all' || activeTab === 'cilingir') && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition">
                      <Unlock className="w-6 h-6" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-semibold">Tamir</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Kilit Tamiri</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Değiştirmek yerine tamir edilebilen kilitlerde ekonomik ve uygun çözümler.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ekonomik Çözüm</span>
                  <a href="tel:+905324356523" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    Ustayı Ara <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* OTO ANAHTAR ÖZEL BÖLÜMÜ */}
      <section id="oto-anahtar" className="py-20 bg-gradient-to-b from-slate-900/40 to-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                <Car className="w-4 h-4" /> Uzmanlık Alanı
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Oto Anahtar ve Araç Kilit Hizmetleri
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Araç anahtarınızı kaybettiyseniz, anahtarınız çalışmıyorsa veya aracınızın kapısını açamıyorsanız hızlıca iletişime geçin. Bahçelievler genelinde en donanımlı araç anahtar ve kilit çözümlerini sunuyoruz.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Oto Anahtar Yapımı ve Yedekleme</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Araç Kapısı Açma (Farklı marka ve modellerde deneyim)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Motosiklet & Sepet Anahtarları (Honda, Yamaha, Suzuki vb.)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Merkezi Kilit ve Kumanda Problemleri</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-sm text-cyan-200 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Müşteri Deneyimi:</strong> Müşteri yorumlarımız arasında yer aldığı üzere; Togg gibi modern elektrikli araçlar dahil olmak üzere pek çok araç kapısı titizlikle ve kısa sürede açılabilmektedir.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="tel:+905324356523"
                  className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition"
                >
                  <Phone className="w-4 h-4" /> Oto Anahtar İçin Ara
                </a>
                <a 
                  href="https://wa.me/905324356523?text=Merhaba,%20oto%20anahtar%20/%20araç%20kapı%20açma%20hizmeti%20için%20ulaşıyorum." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 border border-slate-700 transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp'tan Bilgi Al
                </a>
              </div>

            </div>

            {/* Right Graphic / Feature List */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-1">Oto Anahtar Yapımı</h3>
                <p className="text-xs text-slate-400">Kaybolan anahtarlarınız yerine yenisi hızlıca kodlanır.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-1">Yedek Araç Anahtarı</h3>
                <p className="text-xs text-slate-400">Yedek anahtarınız yoksa hemen yaptırın, riske girmeyin.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                  <Bike className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-1">Motor Anahtarı</h3>
                <p className="text-xs text-slate-400">Honda, Yamaha, Suzuki ve diğer motorlar için özel anahtar.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-1">Merkezi Kilit</h3>
                <p className="text-xs text-slate-400">Araç kilit arızaları ve kumanda sorunlarına profesyonel çözüm.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ÇİLİNGİR BÖLÜMÜ */}
      <section id="cilingir" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
              <Lock className="w-4 h-4" /> Acil Müdahale
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Kapıda Kaldığınızda Yanınızdayız
            </h2>
            <p className="text-slate-300 text-base">
              Anahtarınız içeride kaldıysa, kilidiniz arızalandıysa veya kapınızı açamıyorsanız hızlıca bizimle iletişime geçin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">24 Saat Kesintisiz</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Günün hangi saati olursa olsun, gece veya gündüz bir telefonla kapınızdayız.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Hızlı Ulaşım</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Bahçelievler ve yakın bölgelere en kısa sürede ulaşarak mağduriyetinizi gideriyoruz.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Deneyimli Usta</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                1995'ten beri gelen tecrübe ile kapı ve kilitlerinize asla zarar vermeden çözüm.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a 
              href="tel:+905324356523"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-base shadow-xl shadow-cyan-500/25 transition"
            >
              <Phone className="w-5 h-5" />
              <span>HEMEN USTAYI ARA: 0532 435 65 23</span>
            </a>
          </div>

        </div>
      </section>

      {/* ÖMER USTA BÖLÜMÜ */}
      <section id="omer-usta" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 text-center md:text-left space-y-4">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center mx-auto md:mx-0 shadow-lg shadow-cyan-500/20">
                  <Wrench className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">Ömer Usta</h3>
                  <p className="text-cyan-400 font-medium text-sm">Kısmet Anahtar Kurucusu & Usta</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
                  <Award className="w-3.5 h-3.5 text-amber-400" /> 1995'ten Bu Yana
                </div>
              </div>

              <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  Tecrübe, Hız ve Güven
                </h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Yıllardır Bahçelievler ve çevresinde anahtar, çilingir ve oto anahtar hizmetleri sunan <strong className="text-white">Ömer Usta</strong>; müşterilerinin yorumlarında özellikle hızlı müdahalesi, işinin ehli olması, güler yüzlü yaklaşımı ve uygun fiyat anlayışıyla öne çıkıyor.
                </p>
                <p className="text-slate-400 text-sm">
                  Günün her saatinde kapıda kalan veya anahtar problemi yaşayan komşularına güvenilir çözüm üretmeyi misyon edinmiştir.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <a 
                    href="tel:+905324356523"
                    className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-md transition"
                  >
                    <Phone className="w-4 h-4" /> Ömer Usta'yı Ara
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* YORUMLAR BÖLÜMÜ */}
      <section id="yorumlar" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Müşteri Deneyimleri</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Müşteriler Ne Diyor?
            </h3>
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="flex text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <span className="text-base font-bold text-white">4,5 / 5</span>
              <span className="text-slate-500">•</span>
              <span className="text-sm text-slate-300 font-medium">103 Google değerlendirme</span>
            </div>
            <p className="text-xs text-slate-400 pt-1">Google yorumları doğrulanmamıştır.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-lg hover:border-cyan-500/30 transition">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full">Google Yorumu</span>
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">{rev.name}</h5>
                    <span className="text-xs text-slate-400">Bahçelievler Müşterisi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NASIL ÇALIŞIYOR? */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Kolay Süreç</h2>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Nasıl Çalışıyor?</h3>
            <p className="text-slate-400 text-sm">Acil durum veya randevu taleplerinizde 3 kolay adımda yanınızdayız.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative shadow-lg">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-cyan-500 text-slate-950 font-black text-lg flex items-center justify-center shadow-md">
                01
              </div>
              <div className="pt-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Bizi Arayın</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  İhtiyacınızı kısaca anlatın. Gece veya gündüz fark etmeksizin telefonumuz açık.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative shadow-lg">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-indigo-500 text-white font-black text-lg flex items-center justify-center shadow-md">
                02
              </div>
              <div className="pt-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Konum ve Sorun Bilgisi</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Ustanın size en hızlı şekilde yardımcı olabilmesi için gerekli konum ve sorun detayını iletin.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative shadow-lg">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 font-black text-lg flex items-center justify-center shadow-md">
                03
              </div>
              <div className="pt-4 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Çözümünüzü Alın</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  İhtiyacınıza uygun anahtar veya çilingir hizmeti için hızlıca destek alın, kapınız açılın.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ACIL DURUM BANNER CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)]"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20">
            <AlertTriangle className="w-4 h-4" /> Acil Destek Hattı
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Kapıda mı Kaldınız?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Beklemeyin. Hemen arayın veya WhatsApp üzerinden kolayca ulaşın. Ömer Usta en kısa sürede adresinizde.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="tel:+905324356523"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/30 transition transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>0532 435 65 23</span>
            </a>
            <a 
              href="https://wa.me/905324356523?text=Merhaba,%20acil%20desteğe%20ihtiyacım%20var.%20Yardımcı%20olabilir%20misiniz?" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp'tan Ulaş</span>
            </a>
          </div>
        </div>
      </section>

      {/* İLETİŞİM & WHATSAPP TALEP FORMU & HARİTA */}
      <section id="iletisim" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Hızlı İletişim</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Bahçelievler'de Bizi Bulun & Ulaşın
            </h3>
            <p className="text-slate-400 text-sm md:text-base">
              İster hemen telefonla arayın, ister formu doldurarak WhatsApp üzerinden doğrudan talep oluşturun.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Map */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                <h4 className="text-xl font-bold text-white border-b border-slate-800 pb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" /> İşletme Bilgileri
                </h4>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Adres:</strong>
                      <span>Siyavuşpaşa, Mustafa Kemal Paşa Cd. No:35, 34182 Bahçelievler / İstanbul</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <strong className="text-white block">Telefon:</strong>
                      <a href="tel:+905324356523" className="text-cyan-400 font-bold hover:underline">0532 435 65 23</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <strong className="text-white block">Çalışma Saatleri:</strong>
                      <span className="text-emerald-400 font-semibold">24 Saat Açık (7/24 Kesintisiz)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-slate-300">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Hizmet Bölgesi:</strong>
                      <span>Bahçelievler ve yakın çevre ilçeler / semtler</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://maps.google.com/?q=Siyavushpasha+Mustafa+Kemal+Pasa+Cd.+No:35+Bahcelievler+Istanbul" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-center text-sm flex items-center justify-center gap-2 border border-slate-700 transition"
                  >
                    <MapPin className="w-4 h-4 text-cyan-400" /> Yol Tarifi Al
                  </a>
                  <a 
                    href="tel:+905324356523"
                    className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-center text-sm flex items-center justify-center gap-2 transition"
                  >
                    <Phone className="w-4 h-4" /> Hemen Ara
                  </a>
                </div>
              </div>

              {/* Map embed simulation card */}
              <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl p-4">
                <div className="w-full h-64 rounded-2xl bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center text-center p-6 border border-slate-800">
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-base">Kısmet Anahtar & Çilingir</h5>
                      <p className="text-xs text-slate-400 mt-1">Siyavuşpaşa, Mustafa Kemal Paşa Cd. No:35, Bahçelievler</p>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=Siyavushpasha+Mustafa+Kemal+Pasa+Cd.+No:35+Bahcelievler+Istanbul" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md hover:bg-cyan-400 transition"
                    >
                      Google Maps'te Aç
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: WhatsApp Talep Formu */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
                <div className="space-y-2 mb-6">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-400" /> WhatsApp Hizmet Talep Formu
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Formu doldurarak doğrudan Ömer Usta'ya WhatsApp üzerinden hızlıca bilgi iletebilirsiniz.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Ad Soyad</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Adınız ve Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Telefon Numarası</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Hizmet Türü</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                    >
                      <option value="Ev Çilingir">Ev Çilingir</option>
                      <option value="Oto Anahtar">Oto Anahtar</option>
                      <option value="Araç Kapı Açma">Araç Kapı Açma</option>
                      <option value="Araç Anahtarı">Araç Anahtarı</option>
                      <option value="Merkezi Kilit">Merkezi Kilit</option>
                      <option value="Motor Anahtarı">Motor Anahtarı</option>
                      <option value="Kumanda">Kumanda</option>
                      <option value="Kilit Değişimi">Kilit Değişimi</option>
                      <option value="Kilit Tamiri">Kilit Tamiri</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">Kısa Açıklama / Sorun</label>
                    <textarea 
                      rows={3}
                      placeholder="Örn: Kapıda kaldım, anahtarım içeride kilitlendi..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp İle Gönder</span>
                  </button>

                  <p className="text-center text-xs text-slate-400 pt-2">
                    Formu gönderdiğinizde WhatsApp üzerinden doğrudan iletişime geçebilirsiniz.
                  </p>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">
                    KISMET <span className="text-cyan-400 font-semibold text-sm">ANAHTAR & ÇİLİNGİR</span>
                  </div>
                  <div className="text-xs text-slate-400">1995'ten Beri Bahçelievler</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                1995 yılından bu yana Bahçelievler ve yakın çevresinde anahtar, çilingir, oto anahtar ve kilit çözümleri sunuyoruz. 24 saat kesintisiz hizmet.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                ● 24 Saat Açık
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-white text-sm uppercase tracking-wider">Hızlı Linkler</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#anasayfa" className="hover:text-cyan-400 transition">Ana Sayfa</a></li>
                <li><a href="#hizmetler" className="hover:text-cyan-400 transition">Hizmetler</a></li>
                <li><a href="#oto-anahtar" className="hover:text-cyan-400 transition">Oto Anahtar</a></li>
                <li><a href="#cilingir" className="hover:text-cyan-400 transition">Çilingir</a></li>
                <li><a href="#yorumlar" className="hover:text-cyan-400 transition">Yorumlar</a></li>
                <li><a href="#iletisim" className="hover:text-cyan-400 transition">İletişim</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="font-bold text-white text-sm uppercase tracking-wider">İletişim Bilgileri</h5>
              <div className="space-y-2 text-xs">
                <p className="text-slate-300">
                  <strong className="text-white block">Adres:</strong>
                  Siyavuşpaşa, Mustafa Kemal Paşa Cd. No:35, Bahçelievler / İstanbul
                </p>
                <p className="text-slate-300">
                  <strong className="text-white block">Telefon:</strong>
                  <a href="tel:+905324356523" className="text-cyan-400 font-bold">0532 435 65 23</a>
                </p>
                <p className="text-slate-300">
                  <strong className="text-white block">Çalışma:</strong>
                  24 Saat Açık
                </p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Bahçelievler Kısmet Anahtar & Çilingir. Tüm hakları saklıdır.</p>
            <p className="text-slate-400">1995'ten Beri Güvenilir Usta Eli</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 flex gap-3 shadow-2xl">
        <a 
          href="tel:+905324356523"
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition"
        >
          <Phone className="w-4 h-4" />
          <span>HEMEN ARA</span>
        </a>
        <a 
          href="https://wa.me/905324356523?text=Merhaba,%20web%20sitenizden%20ulaşıyorum.%20Yardımcı%20olabilir%20misiniz?" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>
      </div>

    </div>
  );
}
