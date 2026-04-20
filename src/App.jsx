import { useState, useEffect, useRef } from 'react'

/* ─── HOOKS ────────────────────────────────────────────── */

function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [threshold])
  return scrolled
}

function useFadeIn(direction = 'up', delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (direction === 'left') el.classList.add('fade-in-left')
    else if (direction === 'right') el.classList.add('fade-in-right')
    else el.classList.add('fade-in')
    obs.observe(el)
    return () => obs.disconnect()
  }, [direction, delay])
  return ref
}

/* ─── LOGOS ────────────────────────────────────────────── */

function MIJLogoMark({ size = 48 }) {
  return (
    <svg width={size} height={Math.round(size * 0.9)} viewBox="0 0 130 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="65" cy="57" rx="62" ry="52" stroke="#0A6EBD" strokeWidth="3" fill="white" />
      <text x="6" y="88" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="72" fill="#0D1F3C">M</text>
      <text x="72" y="87" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="68" fill="#16a34a">i</text>
      <text x="90" y="92" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="68" fill="#dc2626">j</text>
    </svg>
  )
}

function PertaminaLogoMark({ size = 40 }) {
  const s = size
  return (
    <svg width={s * 2.8} height={s} viewBox="0 0 168 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,0 52,0 36,22 14,22" fill="#E31E2E" />
      <polygon points="0,28 22,28 38,52 16,52" fill="#0052A5" />
      <polygon points="16,28 38,28 54,52 32,52" fill="#6AB023" />
      <text x="62" y="44" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" fill="#1a3a1a" letterSpacing="1">PERTAMINA</text>
    </svg>
  )
}

/* ─── ICONS ────────────────────────────────────────────── */

const Icon = {
  Clock: () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Truck: () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Shield: () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  MapPin: () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  DollarSign: () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 12 19.79 19.79 0 011 3.38 2 2 0 013 1.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16z" />
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Location: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  WhatsApp: () => (
    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Menu: ({ open }) => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  ),
  Fuel: () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <line x1="3" y1="22" x2="15" y2="22" />
      <line x1="4" y1="9" x2="14" y2="9" />
      <path d="M14 22V4a2 2 0 00-2-2H6a2 2 0 00-2 2v18" />
      <path d="M14 13h2a2 2 0 012 2v2a2 2 0 002 2h0a2 2 0 002-2V9l-3-4" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
}

/* ─── NAVBAR ────────────────────────────────────────────── */

function Navbar() {
  const scrolled = useScrolled(60)
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Produk', href: '#produk' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Wilayah', href: '#wilayah' },
    { label: 'Armada', href: '#armada' },
    { label: 'Kontak', href: '#kontak' },
  ]

  const handleLink = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#beranda" className="flex items-center gap-2 flex-shrink-0">
              <MIJLogoMark size={42} />
              <div className="hidden sm:block leading-tight">
                <div className={`font-bold text-sm tracking-wide ${scrolled ? 'text-navy' : 'text-white'}`}>PT. Migas Indonesia Jaya</div>
                <div className={`text-xs ${scrolled ? 'text-brand' : 'text-blue-200'}`}>Agen Resmi Pertamina Patra Niaga</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {links.map((l) => (
                <button key={l.href} onClick={() => handleLink(l.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => handleLink('#kontak')}
                className="ml-2 px-5 py-2 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-dark transition-colors shadow-sm">
                Hubungi Kami
              </button>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-navy' : 'text-white'}`} aria-label="Toggle menu">
              <Icon.Menu open={mobileOpen} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-navy/95 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-navy border-t border-white/10 transition-transform duration-300 ${mobileOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <button key={l.href} onClick={() => handleLink(l.href)}
                className="text-left text-white text-base font-medium py-2 border-b border-white/10 hover:text-sky-accent transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => handleLink('#kontak')}
              className="mt-2 w-full py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

/* ─── HERO ──────────────────────────────────────────────── */

function StatBadge({ icon, value, label, delay }) {
  const ref = useFadeIn('up', delay)
  return (
    <div ref={ref} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/15 transition-all duration-300">
      <div className="text-sky-accent flex-shrink-0">{icon}</div>
      <div>
        <div className="text-white font-bold text-base leading-tight">{value}</div>
        <div className="text-blue-200 text-xs">{label}</div>
      </div>
    </div>
  )
}

function Hero() {
  const titleRef = useFadeIn('up', 0)
  const subRef = useFadeIn('up', 150)
  const ctaRef = useFadeIn('up', 300)

  return (
    <section id="beranda" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-brand" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-0 right-0 h-full w-1/3 opacity-5" style={{
        background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)'
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-xs font-medium tracking-wide uppercase">Agen & Transportir Resmi PT. Pertamina Patra Niaga</span>
        </div>

        <div ref={titleRef}>
          <div className="flex justify-center mb-6">
            <MIJLogoMark size={80} />
          </div>
          <h1 className="font-display text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', lineHeight: 1.1, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            PT. Migas Indonesia Jaya
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-accent to-brand-light mx-auto mb-6 rounded-full" />
        </div>

        <div ref={subRef}>
          <p className="text-blue-100 text-xl sm:text-2xl font-body font-light max-w-2xl mx-auto mb-4 leading-relaxed">
            Mitra Terpercaya BBM Non-Subsidi
            <span className="block text-white font-semibold">Industri Anda</span>
          </p>
          <p className="text-blue-200/80 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Distributor resmi Biosolar B35 & Pertamina Dex untuk industri di Jawa Timur, Bali, dan Nusa Tenggara. Layanan 24 jam, armada Hino berkapasitas hingga 16.000 liter.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#kontak" onClick={e => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-navy font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base">
            Hubungi Kami <Icon.ArrowRight />
          </a>
          <a href="#produk" onClick={e => { e.preventDefault(); document.querySelector('#produk')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 text-base">
            Produk Kami
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <StatBadge icon={<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>} value="Berdiri 2017" label="7+ Tahun Pengalaman" delay={400} />
          <StatBadge icon={<Icon.Clock />} value="Layanan 24 Jam" label="7 Hari Seminggu" delay={500} />
          <StatBadge icon={<Icon.Truck />} value="Kapasitas 16.000L" label="Armada Hino Resmi" delay={600} />
          <StatBadge icon={<Icon.Shield />} value="Mitra Pertamina" label="Sumber Terjamin" delay={700} />
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 text-blue-300/70">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-blue-300/50 to-transparent" />
          <div className="animate-bounce"><Icon.ChevronDown /></div>
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION HEADER ────────────────────────────────────── */

function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  const ref = useFadeIn('up', 0)
  return (
    <div ref={ref} className={`mb-12 ${center ? 'text-center' : ''}`}>
      <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${light ? 'bg-white/20 text-white' : 'bg-brand-xlight text-brand'}`}>
        {eyebrow}
      </span>
      <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`} style={{ lineHeight: 1.15 }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''} leading-relaxed ${light ? 'text-blue-200' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ─── TENTANG KAMI ──────────────────────────────────────── */

function TentangKami() {
  const leftRef = useFadeIn('left', 0)
  const rightRef = useFadeIn('right', 150)

  return (
    <section id="tentang" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Tentang Kami" title="Siapa PT. Migas Indonesia Jaya?"
          subtitle="Mitra distribusi BBM Non-Subsidi terpercaya untuk industri di kawasan Jawa Timur, Bali, dan Nusa Tenggara." />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div ref={leftRef}>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>PT. Migas Indonesia Jaya (MIJ) adalah perusahaan distribusi Bahan Bakar Minyak (BBM) Non-Subsidi yang berdiri sejak tahun 2017, berkedudukan di Sidoarjo, Jawa Timur. Kami beroperasi sebagai <strong className="text-navy">Agen dan Transportir Resmi PT. Pertamina Patra Niaga</strong>, dengan cakupan distribusi meliputi seluruh wilayah Jawa Timur, Bali, NTB, dan NTT.</p>
              <p>Dengan armada tanker Hino berkapasitas 8.000 liter hingga 16.000 liter, kami melayani kebutuhan BBM industri untuk sektor manufaktur, konstruksi, perkebunan, pertambangan, pelabuhan, pembangkit listrik, dan berbagai sektor industri strategis lainnya — secara <strong className="text-navy">24 jam sehari, 7 hari seminggu</strong>.</p>
              <p>Sebagai mitra resmi Pertamina, setiap pengiriman disertai Delivery Order (DO) resmi dan menggunakan flow meter terkalibrasi, menjamin kualitas dan kuantitas bahan bakar yang Anda terima sesuai standar.</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{ value: '2017', label: 'Tahun Berdiri' }, { value: '24/7', label: 'Layanan Penuh' }, { value: '4+', label: 'Provinsi Layanan' }].map((s) => (
                <div key={s.label} className="bg-sky-pale rounded-xl p-4 text-center border border-brand/10">
                  <div className="font-display font-bold text-2xl text-brand mb-1">{s.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-navy rounded-xl border-l-4 border-sky-accent">
              <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-semibold">Visi Perusahaan</p>
              <p className="text-white text-sm leading-relaxed italic">"Menjadi perusahaan yang unggul bagi konsumen sebagai mitra dalam penyediaan BBM — baik dalam pelayanan kepuasan konsumen maupun dalam mendukung perekonomian nasional, khususnya Jawa Timur, Bali, dan Nusa Tenggara."</p>
            </div>
          </div>

          <div ref={rightRef} className="space-y-6">
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="text-5xl text-brand/60 font-display leading-none mb-4">"</div>
                <p className="text-blue-100 text-base leading-relaxed italic mb-6">Memberikan kepuasan pelanggan mengharuskan kita memiliki kemampuan dan semangat yang kuat, yang membuat kita mampu mencapai tujuan berharga tanpa kegagalan.</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center font-bold text-white text-lg font-display">Y</div>
                  <div>
                    <div className="font-semibold text-white text-sm">Yuniaida S.</div>
                    <div className="text-blue-300 text-xs">Direktur Utama, PT. Migas Indonesia Jaya</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h4 className="font-display font-semibold text-navy text-lg mb-4">5 Pilar Nilai Perusahaan</h4>
              <div className="space-y-3">
                {[
                  { title: 'Kepedulian & Sikap Tanggap', desc: 'Selalu selangkah lebih maju dalam merespons kebutuhan pelanggan' },
                  { title: 'Komitmen & Kebersamaan', desc: 'Tanggung jawab bersama untuk menjadi mitra yang dipercaya' },
                  { title: 'Kemauan Berkembang', desc: 'Semangat untuk terus berubah dan meningkatkan diri' },
                  { title: 'Kepatuhan & Profesionalitas', desc: 'Taat pada regulasi dan nilai profesional dalam setiap tindakan' },
                  { title: 'Kemampuan Profesional', desc: 'Kemampuan menjalankan fungsi secara profesional' },
                ].map((v, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><Icon.Check /></div>
                    <div>
                      <div className="text-sm font-semibold text-navy">{v.title}</div>
                      <div className="text-xs text-gray-500">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
              <div className="flex-shrink-0"><PertaminaLogoMark size={36} /></div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">Mitra Resmi</div>
                <div className="text-sm text-gray-700 font-medium">PT. Pertamina Patra Niaga</div>
                <div className="text-xs text-gray-400">Berlaku sejak 2017 · Dapat diperbarui</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PRODUK ────────────────────────────────────────────── */

function ProductCard({ product, delay }) {
  const ref = useFadeIn('up', delay)
  return (
    <div ref={ref} className={`relative rounded-2xl overflow-hidden border-2 ${product.borderClass} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white`}>
      <div className={`h-1.5 w-full ${product.accentBg}`} />
      <div className={`${product.headerBg} px-7 py-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-10 rounded-full blur-2xl" style={{ background: product.glowColor }} />
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <div className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${product.badgeBg} ${product.badgeText}`}>{product.type}</div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">{product.name}</h3>
            <p className="text-white/70 text-sm">{product.subtitle}</p>
          </div>
          <div className={`p-3 rounded-xl ${product.iconBg} text-white`}><Icon.Fuel /></div>
        </div>
      </div>
      <div className="px-7 py-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>
        <div className="space-y-3 mb-6">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{spec.label}</span>
              <span className={`text-sm font-semibold ${product.textAccent}`}>{spec.value}</span>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Cocok untuk</p>
          <div className="flex flex-wrap gap-2">
            {product.useCases.map((u) => (
              <span key={u} className={`text-xs px-2.5 py-1 rounded-full ${product.tagBg} ${product.textAccent} font-medium`}>{u}</span>
            ))}
          </div>
        </div>
        <a href="#kontak" onClick={e => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }) }}
          className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${product.btnClass}`}>
          Pesan Sekarang
        </a>
      </div>
    </div>
  )
}

function Produk() {
  const products = [
    {
      type: 'Solar Industri', name: 'Biosolar B35', subtitle: 'BBM Solar Ramah Lingkungan',
      description: 'Biosolar B35 adalah bahan bakar solar yang mengandung 35% biodiesel nabati, dirancang untuk mesin diesel industri dan alat berat. Formula B35 memenuhi standar emisi modern, ramah lingkungan, dan memberikan performa optimal untuk operasional industri skala besar.',
      specs: [{ label: 'Spesifikasi', value: 'Solar + 35% Biodiesel' }, { label: 'Harga', value: 'Rp 10.235/Liter*' }, { label: 'Min. Order', value: '8.000 – 16.000 Liter' }, { label: 'Ketersediaan', value: '24 Jam / 7 Hari' }],
      useCases: ['Pabrik & Manufaktur', 'Konstruksi', 'Perkebunan', 'Transportasi Cargo'],
      headerBg: 'bg-gradient-to-br from-emerald-700 to-emerald-600', accentBg: 'bg-emerald-500', borderClass: 'border-emerald-100 hover:border-emerald-300',
      badgeBg: 'bg-white/20', badgeText: 'text-white', iconBg: 'bg-white/20', glowColor: '#10b981',
      tagBg: 'bg-emerald-50', textAccent: 'text-emerald-700', btnClass: 'bg-emerald-600 text-white hover:bg-emerald-700',
    },
    {
      type: 'Solar Premium', name: 'Pertamina Dex', subtitle: 'Solar High Performance CN 51+',
      description: 'Pertamina Dex adalah solar premium dengan angka cetane 51+ yang dirancang untuk mesin diesel berteknologi tinggi dan kendaraan komersial modern. Memberikan performa mesin lebih optimal, emisi lebih rendah, dan interval perawatan yang lebih panjang.',
      specs: [{ label: 'Spesifikasi', value: 'Solar Premium CN 51+' }, { label: 'Harga', value: 'Rp 17.622/Liter*' }, { label: 'Min. Order', value: '8.000 Liter' }, { label: 'Ketersediaan', value: '24 Jam / 7 Hari' }],
      useCases: ['Mesin Berteknologi Tinggi', 'Pembangkit Listrik', 'Pelabuhan', 'Pertambangan'],
      headerBg: 'bg-gradient-to-br from-brand to-sky-accent', accentBg: 'bg-brand', borderClass: 'border-blue-100 hover:border-brand',
      badgeBg: 'bg-white/20', badgeText: 'text-white', iconBg: 'bg-white/20', glowColor: '#0099E6',
      tagBg: 'bg-blue-50', textAccent: 'text-brand', btnClass: 'bg-brand text-white hover:bg-brand-dark',
    },
  ]

  return (
    <section id="produk" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Produk Kami" title="BBM Non-Subsidi Berkualitas"
          subtitle="Kami mendistribusikan dua produk unggulan Pertamina untuk memenuhi kebutuhan bahan bakar industri Anda." />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {products.map((p, i) => <ProductCard key={p.name} product={p} delay={i * 150} />)}
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">*Harga belum termasuk PPN. Hubungi kami untuk penawaran harga korporat.</p>
        </div>
      </div>
    </section>
  )
}

/* ─── KEUNGGULAN ────────────────────────────────────────── */

function KeunggulanCard({ item, delay }) {
  const ref = useFadeIn('up', delay)
  return (
    <div ref={ref} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
      <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <div className={item.iconColor}>{item.icon}</div>
      </div>
      <h3 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
    </div>
  )
}

function Keunggulan() {
  const items = [
    { icon: <Icon.Clock />, iconBg: 'bg-blue-50', iconColor: 'text-brand', title: 'Layanan 24 Jam Penuh', desc: 'Operasional non-stop 24 jam sehari, 7 hari seminggu, 365 hari setahun. Pengiriman darurat dan reguler tersedia kapan saja, termasuk hari libur nasional.' },
    { icon: <Icon.Truck />, iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', title: 'Armada Resmi Pertamina', desc: 'Armada tanker Hino berkapasitas 8.000L dan 16.000L dengan branding resmi Pertamina Patra Niaga, flow meter terkalibrasi, dan dilengkapi DO resmi setiap pengiriman.' },
    { icon: <Icon.Shield />, iconBg: 'bg-green-50', iconColor: 'text-green-600', title: 'Sumber BBM Terjamin', desc: 'BBM bersumber langsung dari PT. Pertamina Patra Niaga. Kualitas dan kuantitas dijamin sesuai standar, dengan dokumen resmi setiap pengiriman.' },
    { icon: <Icon.MapPin />, iconBg: 'bg-orange-50', iconColor: 'text-orange-600', title: 'Cakupan Wilayah Luas', desc: 'Melayani seluruh Jawa Timur (10+ kota), Bali, Nusa Tenggara Barat, dan Nusa Tenggara Timur. Jangkauan luas dengan pengiriman tepat waktu.' },
    { icon: <Icon.DollarSign />, iconBg: 'bg-yellow-50', iconColor: 'text-yellow-700', title: 'Harga & Pembayaran Fleksibel', desc: 'Skema pembayaran yang fleksibel untuk klien korporat. Harga kompetitif dengan transparansi penuh, sesuai Harga Eceran Tertinggi (HET) Pertamina.' },
  ]

  return (
    <section id="keunggulan" className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Keunggulan Kami" title="Mengapa Memilih MIJ?"
          subtitle="Kami hadir sebagai mitra distribusi BBM yang handal, profesional, dan berkomitmen penuh terhadap kepuasan industri Anda." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => <KeunggulanCard key={item.title} item={item} delay={i * 100} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── WILAYAH LAYANAN ───────────────────────────────────── */

function RegionCard({ region: r, delay }) {
  const ref = useFadeIn('up', delay)
  return (
    <div ref={ref} className={`bg-white/5 backdrop-blur-sm border ${r.borderColor}/40 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{r.flag}</span>
        <h3 className="font-display font-bold text-white text-base">{r.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {r.cities.map((c) => (
          <span key={c} className="text-xs px-2.5 py-1 bg-white/10 text-blue-200 rounded-full border border-white/10">{c}</span>
        ))}
      </div>
    </div>
  )
}

function WilayahLayanan() {
  const regions = [
    { name: 'Jawa Timur', flag: '🗺️', color: 'bg-brand text-white', borderColor: 'border-brand', cities: ['Surabaya', 'Sidoarjo', 'Gresik', 'Mojokerto', 'Pasuruan', 'Probolinggo', 'Situbondo', 'Lamongan', 'Tuban', 'Kediri'] },
    { name: 'Bali', flag: '🏝️', color: 'bg-emerald-600 text-white', borderColor: 'border-emerald-400', cities: ['Denpasar', 'Badung', 'Gianyar', 'Tabanan', 'Buleleng', 'Klungkung'] },
    { name: 'Nusa Tenggara Barat', flag: '🌴', color: 'bg-orange-500 text-white', borderColor: 'border-orange-400', cities: ['Mataram', 'Lombok Barat', 'Lombok Tengah', 'Lombok Timur', 'Sumbawa'] },
    { name: 'Nusa Tenggara Timur', flag: '⛵', color: 'bg-sky-accent text-white', borderColor: 'border-sky-accent', cities: ['Kupang', 'Ende', 'Flores', 'Sumba', 'Manggarai', 'Sikka'] },
  ]

  return (
    <section id="wilayah" className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 20% 50%, #0099E6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #0A6EBD 0%, transparent 50%)` }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Wilayah Layanan" title="Jangkauan Distribusi Kami"
          subtitle="Melayani kebutuhan BBM industri di seluruh kawasan JATIM BALINUS (Jawa Timur, Bali, dan Nusa Tenggara)." light={true} />
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map((r) => (
            <div key={r.name} className={`px-5 py-2.5 rounded-full ${r.color} font-semibold text-sm flex items-center gap-2 shadow-lg`}>
              <span>{r.flag}</span><span>{r.name}</span>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {regions.map((r, i) => <RegionCard key={r.name} region={r} delay={i * 100} />)}
        </div>
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3">
            <Icon.MapPin />
            <span className="text-white text-sm font-medium">Pengiriman ke seluruh wilayah — hubungi kami untuk konfirmasi cakupan area Anda</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ARMADA ────────────────────────────────────────────── */

function ArmadaCard({ truck, delay }) {
  const ref = useFadeIn('up', delay)
  return (
    <div ref={ref} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
      <div className={`${truck.bg} h-48 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 2px, transparent 2px, transparent 20px)' }} />
        <div className="relative z-10 text-center">
          <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 sm:w-56 mx-auto drop-shadow-lg">
            <rect x="0" y="25" width="70" height="50" rx="5" fill="white" opacity="0.9" />
            <rect x="5" y="30" width="30" height="20" rx="2" fill={truck.windowColor} opacity="0.8" />
            <rect x="38" y="30" width="27" height="20" rx="2" fill={truck.windowColor} opacity="0.8" />
            <line x1="35" y1="30" x2="35" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <rect x="70" y="15" width="125" height="60" rx="8" fill="white" opacity="0.85" />
            <rect x="80" y="25" width="105" height="8" fill={truck.stripeColor} opacity="0.3" rx="2" />
            <rect x="80" y="48" width="105" height="8" fill={truck.stripeColor} opacity="0.3" rx="2" />
            <text x="132" y="42" textAnchor="middle" fill={truck.textColor} fontSize="12" fontWeight="bold" fontFamily="Arial">{truck.capacity}</text>
            <circle cx="20" cy="78" r="11" fill="#333" /><circle cx="20" cy="78" r="6" fill="#555" />
            <circle cx="51" cy="78" r="11" fill="#333" /><circle cx="51" cy="78" r="6" fill="#555" />
            <circle cx="140" cy="78" r="11" fill="#333" /><circle cx="140" cy="78" r="6" fill="#555" />
            <circle cx="163" cy="78" r="11" fill="#333" /><circle cx="163" cy="78" r="6" fill="#555" />
            <rect x="70" y="68" width="125" height="6" rx="2" fill={truck.brandStripe} opacity="0.7" />
          </svg>
          <div className="mt-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${truck.badgeBg} text-white`}>{truck.type}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-xl font-bold text-navy mb-1">{truck.name}</h3>
            <p className="text-gray-500 text-sm">{truck.model}</p>
          </div>
          <div className={`px-3 py-1.5 rounded-xl ${truck.capBg} text-center`}>
            <div className={`font-bold text-lg leading-tight ${truck.capText}`}>{truck.capacity}</div>
            <div className="text-xs text-gray-400">Kapasitas</div>
          </div>
        </div>
        <div className="space-y-2">
          {truck.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5">
              <div className="w-4 h-4 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0"><Icon.Check /></div>
              <span className="text-sm text-gray-600">{f}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-gray-500">Tersedia 24 jam · Jawa Timur, Bali, Nusa Tenggara</span>
        </div>
      </div>
    </div>
  )
}

function Armada() {
  const trucks = [
    {
      type: 'Armada Besar', name: 'Tanker Besar', model: 'Hino — Kapasitas Penuh', capacity: '16.000L',
      bg: 'bg-gradient-to-br from-navy to-brand', windowColor: '#93c5fd', stripeColor: '#0A6EBD', textColor: '#0A6EBD', brandStripe: '#dc2626', badgeBg: 'bg-brand', capBg: 'bg-blue-50', capText: 'text-brand',
      features: ['Merek Hino — standar industri Indonesia', 'Kapasitas tangki 16.000 liter', 'Flow meter digital terkalibrasi', 'Dilengkapi grounding & safety kit', 'DO resmi Pertamina setiap pengiriman', 'Ideal untuk pengiriman volume besar'],
    },
    {
      type: 'Armada Medium', name: 'Tanker Medium', model: 'Hino Dutro — Area Perkotaan', capacity: '8.000L',
      bg: 'bg-gradient-to-br from-sky-accent to-emerald-500', windowColor: '#a7f3d0', stripeColor: '#0099E6', textColor: '#0099E6', brandStripe: '#dc2626', badgeBg: 'bg-sky-accent', capBg: 'bg-sky-pale', capText: 'text-sky-accent',
      features: ['Merek Hino Dutro — lincah & andal', 'Kapasitas tangki 8.000 liter', 'Ideal untuk area perkotaan & semi-urban', 'Akses ke lokasi proyek yang terbatas', 'Flow meter terkalibrasi & bersertifikat', 'Cocok untuk UKM & proyek skala menengah'],
    },
  ]

  return (
    <section id="armada" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Armada Kami" title="Armada Tanker Resmi Pertamina"
          subtitle="Dua jenis armada tanker yang siap melayani berbagai kebutuhan pengiriman BBM industri Anda." />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {trucks.map((t, i) => <ArmadaCard key={t.name} truck={t} delay={i * 150} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── KONTAK ────────────────────────────────────────────── */

function Kontak() {
  const [form, setForm] = useState({ nama: '', perusahaan: '', kebutuhan: '', pesan: '' })
  const [status, setStatus] = useState(null)
  const leftRef = useFadeIn('left', 0)
  const rightRef = useFadeIn('right', 150)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(`Halo PT. Migas Indonesia Jaya,\n\nSaya ${form.nama} dari ${form.perusahaan}.\n\nKebutuhan Liter/Bulan: ${form.kebutuhan} liter\n\nPesan:\n${form.pesan}`)
    window.open(`https://wa.me/6281358474001?text=${msg}`, '_blank')
    setStatus('sent')
    setForm({ nama: '', perusahaan: '', kebutuhan: '', pesan: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  const contactInfo = [
    { icon: <Icon.Location />, label: 'Alamat', value: 'Jl. Raya Suko RT.001 RW.001, Desa Suko, Kec. Sukodono, Kab. Sidoarjo, Jawa Timur', href: 'https://maps.google.com/?q=Jl+Raya+Suko+Sukodono+Sidoarjo' },
    { icon: <Icon.Phone />, label: 'Telepon', value: '(031) 7652 1248', href: 'tel:03176521248' },
    { icon: <Icon.Phone />, label: 'WhatsApp', value: '0813-5847-4001', href: 'https://wa.me/6281358474001' },
    { icon: <Icon.Mail />, label: 'Email', value: 'ptmigasindonesiajaya@gmail.com', href: 'mailto:ptmigasindonesiajaya@gmail.com' },
  ]

  return (
    <section id="kontak" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Hubungi Kami" title="Konsultasi Kebutuhan BBM Anda"
          subtitle="Tim kami siap melayani konsultasi dan pemesanan 24 jam. Hubungi kami sekarang untuk penawaran terbaik." />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div ref={leftRef} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
            <h3 className="font-display text-xl font-bold text-navy mb-6">Kirim Pesan</h3>
            {status === 'sent' && (
              <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm flex items-center gap-2">
                <Icon.Check /> Terima kasih! Pesan Anda sedang dibuka di WhatsApp.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Lengkap *</label>
                <input type="text" name="nama" value={form.nama} onChange={handleChange} required placeholder="Nama Anda"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Perusahaan *</label>
                <input type="text" name="perusahaan" value={form.perusahaan} onChange={handleChange} required placeholder="PT. / CV. / UD. Perusahaan Anda"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimasi Kebutuhan (Liter/Bulan)</label>
                <input type="text" name="kebutuhan" value={form.kebutuhan} onChange={handleChange} placeholder="Contoh: 50.000 liter/bulan"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan / Keterangan</label>
                <textarea name="pesan" value={form.pesan} onChange={handleChange} rows={4} placeholder="Ceritakan kebutuhan BBM industri Anda, lokasi pengiriman, produk yang dibutuhkan, dll."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all bg-white resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-colors duration-200 text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                <Icon.WhatsApp /> Kirim via WhatsApp
              </button>
            </form>
          </div>

          <div ref={rightRef} className="space-y-5">
            <h3 className="font-display text-xl font-bold text-navy mb-2">Informasi Kontak</h3>
            {contactInfo.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand/30 hover:bg-sky-pale/50 transition-all duration-200 group">
                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-200">{c.icon}</div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">{c.label}</div>
                  <div className="text-sm text-gray-700 font-medium group-hover:text-brand transition-colors">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="p-5 bg-navy rounded-xl text-white">
              <div className="flex items-center gap-2 mb-3"><Icon.Clock /><span className="font-semibold">Jam Operasional</span></div>
              <div className="space-y-2">
                <div className="flex justify-between items-center"><span className="text-blue-300 text-sm">Senin – Minggu</span><span className="text-white font-bold text-sm">24 Jam Non-Stop</span></div>
                <div className="flex justify-between items-center"><span className="text-blue-300 text-sm">Hari Libur Nasional</span><span className="text-white font-bold text-sm">Tetap Beroperasi</span></div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-300">Tim kami siap melayani Anda sekarang</span>
              </div>
            </div>
            <a href="https://wa.me/6281358474001" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md text-base">
              <Icon.WhatsApp /> Chat WhatsApp Langsung
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ────────────────────────────────────────────── */

function Footer() {
  const links = [
    { label: 'Beranda', href: '#beranda' }, { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Produk', href: '#produk' }, { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Wilayah', href: '#wilayah' }, { label: 'Armada', href: '#armada' }, { label: 'Kontak', href: '#kontak' },
  ]
  return (
    <footer className="bg-navy-dark border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MIJLogoMark size={44} />
              <div>
                <div className="font-bold text-sm text-white">PT. Migas Indonesia Jaya</div>
                <div className="text-xs text-blue-400">Agen Resmi Pertamina</div>
              </div>
            </div>
            <p className="text-blue-300/70 text-sm leading-relaxed max-w-xs">Distributor BBM Non-Subsidi resmi untuk industri di Jawa Timur, Bali, dan Nusa Tenggara. Berdiri sejak 2017.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Navigasi</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="text-sm text-blue-300/70 hover:text-white transition-colors cursor-pointer">{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Kontak</h4>
            <div className="space-y-2.5 text-sm text-blue-300/70">
              <div className="flex items-start gap-2"><Icon.Location /><span>Jl. Raya Suko, Sukodono, Sidoarjo, Jawa Timur</span></div>
              <div className="flex items-center gap-2"><Icon.Phone /><a href="tel:03176521248" className="hover:text-white transition-colors">(031) 7652 1248</a></div>
              <div className="flex items-center gap-2"><Icon.Mail /><a href="mailto:ptmigasindonesiajaya@gmail.com" className="hover:text-white transition-colors text-xs">ptmigasindonesiajaya@gmail.com</a></div>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-400/60 text-xs">© {new Date().getFullYear()} PT. Migas Indonesia Jaya. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2"><PertaminaLogoMark size={24} /></div>
        </div>
      </div>
    </footer>
  )
}

/* ─── WHATSAPP FLOAT ────────────────────────────────────── */

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <a href="https://wa.me/6281358474001" target="_blank" rel="noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      aria-label="Chat WhatsApp">
      <Icon.WhatsApp />
    </a>
  )
}

/* ─── APP ───────────────────────────────────────────────── */

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <TentangKami />
      <Produk />
      <Keunggulan />
      <WilayahLayanan />
      <Armada />
      <Kontak />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
