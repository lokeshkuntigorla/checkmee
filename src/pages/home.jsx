import React, { useState, useEffect } from "react";
import { Calendar, Clock, Hourglass, Timer, Mail, Send, Globe } from "lucide-react";
import "./home.css";

// ================= CUSTOM VECTOR SVG COMPONENTS =================



const RocketIllustration = () => (
  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="rocket-svg">
    {/* Floating Orange orbit/halo in background */}
    <circle cx="170" cy="150" r="95" fill="url(#rocketGlowHalo)" filter="url(#glowFilter)" />

    <g filter="url(#rocketShadowEffect)">
      {/* Thrust Flames */}
      <path d="M112 212C100 234 68 255 78 233C88 211 100 200 112 212Z" fill="url(#thrustGrad)" opacity="0.95" />
      <path d="M117 207C109 223 83 238 90 224C97 210 109 200 117 207Z" fill="#ff7b00" />
      <path d="M122 202C117 212 98 222 103 214C108 206 117 196 122 202Z" fill="#ffcc00" />

      {/* Fins (Orange 3D gradient) */}
      {/* Left wing fin */}
      <path d="M125 190C108 196 85 208 80 202C80 191 92 163 108 158C117 169 121 179 125 190Z" fill="url(#finsGradient)" />
      {/* Right wing fin */}
      <path d="M162 153C168 136 195 114 206 114C200 120 195 142 195 158C184 158 173 156 162 153Z" fill="url(#finsGradient)" />
      {/* Back center fin */}
      <path d="M112 212C101 223 90 234 84 228C80 222 90 200 101 195C105 201 109 206 112 212Z" fill="url(#finsGradient)" />

      {/* Main Rocket body (White metal cylindrical capsule) */}
      <path d="M112 212C128 178 188 118 218 102C202 118 142 178 112 212Z" fill="url(#bodyMetallicGrad)" />
      
      {/* Light highlights for 3D metallic curvature */}
      <path d="M112 212C132 196 163 170 193 129C201 119 211 108 218 102C202 118 142 178 112 212Z" fill="url(#bodyHighlightGrad)" />
      
      {/* Curved shadows on the opposite side of body */}
      <path d="M112 212C122 202 132 191 142 170C173 139 198 129 218 102C211 108 201 119 193 129C163 170 132 196 112 212Z" fill="url(#bodyShadowGrad)" />

      {/* Orange Nose Cone */}
      <path d="M218 102C207 113 197 123 192 128C208 133 224 128 232 115C225 109 221 105 218 102Z" fill="url(#coneGrad)" />
      <path d="M218 102C210 110 202 118 199 121C205 124 213 122 221 116C219 111 219 106 218 102Z" fill="url(#coneHighlight)" />

      {/* Circular Porthole Window */}
      <circle cx="162" cy="153" r="23" fill="#0b0f19" />
      <circle cx="162" cy="153" r="19" fill="url(#glassGrad)" />
      {/* Window shine */}
      <path d="M149 146C153 141 160 139 167 141C160 143 155 147 151 154C149 150 149 148 149 146Z" fill="#ffffff" opacity="0.6" />
      <circle cx="170" cy="146" r="3.5" fill="#ffffff" opacity="0.8" />
    </g>

    {/* Fluffy puffy white thrust clouds */}
    <g className="smoke-puffs" opacity="0.9">
      <circle cx="95" cy="238" r="21" fill="url(#smokeCloudGrad)" />
      <circle cx="73" cy="249" r="16" fill="url(#smokeCloudGrad)" />
      <circle cx="116" cy="227" r="19" fill="url(#smokeCloudGrad)" />
      <circle cx="58" cy="258" r="13" fill="url(#smokeCloudGrad)" />
      <circle cx="83" cy="254" r="17" fill="url(#smokeCloudGrad)" opacity="0.6" />
      <circle cx="106" cy="243" r="15" fill="url(#smokeCloudGrad)" opacity="0.6" />
    </g>

    <defs>
      <radialGradient id="rocketGlowHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff5a00" stopOpacity="0.4" />
        <stop offset="55%" stopColor="#ff7b00" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#ff7b00" stopOpacity="0" />
      </radialGradient>
      
      <linearGradient id="bodyMetallicGrad" x1="112" y1="212" x2="218" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="35%" stopColor="#f1f5f9" />
        <stop offset="70%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      
      <linearGradient id="bodyHighlightGrad" x1="112" y1="212" x2="218" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0" />
        <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
      </linearGradient>

      <linearGradient id="bodyShadowGrad" x1="112" y1="212" x2="218" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0" />
      </linearGradient>

      <linearGradient id="coneGrad" x1="192" y1="128" x2="218" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff5a00" />
        <stop offset="100%" stopColor="#ff3300" />
      </linearGradient>
      <linearGradient id="coneHighlight" x1="192" y1="128" x2="218" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff8a44" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#ff5a00" stopOpacity="0" />
      </linearGradient>

      <linearGradient id="finsGradient" x1="80" y1="202" x2="206" y2="114" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff7b00" />
        <stop offset="50%" stopColor="#ff5a00" />
        <stop offset="100%" stopColor="#e24a00" />
      </linearGradient>

      <linearGradient id="thrustGrad" x1="112" y1="212" x2="78" y2="233" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffcc00" />
        <stop offset="45%" stopColor="#ff5a00" />
        <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
      </linearGradient>

      <radialGradient id="glassGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#a5f3fc" />
        <stop offset="40%" stopColor="#0891b2" />
        <stop offset="100%" stopColor="#0e7490" />
      </radialGradient>

      <radialGradient id="smokeCloudGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="85%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.25" />
      </radialGradient>

      <filter id="glowFilter" x="15" y="-5" width="310" height="310" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="16" />
      </filter>
      
      <filter id="rocketShadowEffect" x="48" y="72" width="220" height="202" filterUnits="userSpaceOnUse">
        <feDropShadow dx="-4" dy="10" stdDeviation="6" floodColor="#0c101d" floodOpacity="0.14" />
      </filter>
    </defs>
  </svg>
);

const Platform3D = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="platform-svg">
    {/* Orange Neon Light glow underneath the platform */}
    <ellipse cx="80" cy="118" rx="60" ry="14" fill="#ff5a00" opacity="0.65" filter="url(#pedestalGlow)" />
    
    {/* Pedestal Bottom Base Side (metallic navy-black cylindrical thickness) */}
    <path d="M20 102C20 102 20 114 80 114C140 114 140 102 140 102V110C140 116 120 122 80 122C40 122 20 116 20 110V102Z" fill="url(#pedestalSideGrad)" />
    
    {/* Pedestal Top Rim Highlight depth */}
    <path d="M20 102C20 108 40 114 80 114C120 114 140 108 140 102V104C140 110 120 116 80 116C40 116 20 110 20 104V102Z" fill="url(#pedestalRimGrad)" />

    {/* Pedestal Top Face (flat silver metallic ellipse) */}
    <ellipse cx="80" cy="102" rx="60" ry="14" fill="url(#pedestalTopGrad)" stroke="#ffffff" strokeWidth="1" />

    {/* Pedestal Inner Glowing Accent Orange Ring */}
    <ellipse cx="80" cy="102" rx="54" ry="11" stroke="url(#pedestalGlowRing)" strokeWidth="2" fill="none" opacity="0.85" />

    <defs>
      <filter id="pedestalGlow" x="10" y="96" width="140" height="44" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="5" />
      </filter>

      <linearGradient id="pedestalSideGrad" x1="80" y1="102" x2="80" y2="122" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0b0f19" />
      </linearGradient>

      <linearGradient id="pedestalRimGrad" x1="20" y1="102" x2="140" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>

      <radialGradient id="pedestalTopGrad" cx="80" cy="102" r="60" fx="80" fy="98" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="72%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </radialGradient>

      <linearGradient id="pedestalGlowRing" x1="26" y1="102" x2="134" y2="102" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff5a00" />
        <stop offset="50%" stopColor="#ff9900" />
        <stop offset="100%" stopColor="#ff5a00" />
      </linearGradient>
    </defs>
  </svg>
);

const DotGrid = ({ className = "" }) => (
  <svg width="60" height="72" viewBox="0 0 60 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {Array.from({ length: 6 }).map((_, r) =>
      Array.from({ length: 5 }).map((_, c) => (
        <circle key={`${r}-${c}`} cx={6 + c * 12} cy={6 + r * 12} r="1.5" fill="#94a3b8" opacity="0.45" />
      ))
    )}
  </svg>
);

const FadedQRBackground = () => (
  <svg width="450" height="450" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="faded-qr">
    {/* Finder Top Left */}
    <rect x="5" y="5" width="24" height="24" stroke="#94a3b8" strokeWidth="1.8" rx="2" />
    <rect x="9" y="9" width="16" height="16" fill="#94a3b8" rx="1" />
    <rect x="12" y="12" width="10" height="10" fill="#f8fafc" rx="0.5" />
    <rect x="14" y="14" width="6" height="6" fill="#94a3b8" rx="0.2" />
    
    {/* Finder Bottom Left */}
    <rect x="5" y="71" width="24" height="24" stroke="#94a3b8" strokeWidth="1.8" rx="2" />
    <rect x="9" y="75" width="16" height="16" fill="#94a3b8" rx="1" />
    <rect x="12" y="78" width="10" height="10" fill="#f8fafc" rx="0.5" />
    <rect x="14" y="80" width="6" height="6" fill="#94a3b8" rx="0.2" />

    {/* Finder Top Right */}
    <rect x="71" y="5" width="24" height="24" stroke="#94a3b8" strokeWidth="1.8" rx="2" />
    <rect x="75" y="9" width="16" height="16" fill="#94a3b8" rx="1" />
    <rect x="78" y="12" width="10" height="10" fill="#f8fafc" rx="0.5" />
    <rect x="80" y="14" width="6" height="6" fill="#94a3b8" rx="0.2" />

    {/* Center alignment and scattered data dots */}
    <rect x="40" y="12" width="6" height="6" rx="1" fill="#94a3b8" />
    <rect x="52" y="8" width="10" height="4" rx="0.5" fill="#94a3b8" />
    <rect x="48" y="18" width="4" height="10" rx="1" fill="#94a3b8" />
    <rect x="36" y="24" width="8" height="6" rx="0.5" fill="#94a3b8" />

    <rect x="72" y="38" width="6" height="6" rx="1" fill="#94a3b8" />
    <rect x="84" y="46" width="10" height="4" rx="0.5" fill="#94a3b8" />
    <rect x="78" y="58" width="4" height="10" rx="1" fill="#94a3b8" />

    <rect x="44" y="44" width="12" height="12" rx="1.5" fill="#94a3b8" />
    <rect x="38" y="68" width="8" height="8" rx="1" fill="#94a3b8" />
    <rect x="52" y="80" width="14" height="6" rx="0.5" fill="#94a3b8" />
    <rect x="76" y="76" width="12" height="12" rx="2" fill="#94a3b8" />
    
    <rect x="52" y="58" width="8" height="8" rx="1" fill="#94a3b8" />
    <rect x="34" y="82" width="8" height="4" fill="#94a3b8" />
    <rect x="82" y="32" width="6" height="6" rx="1" fill="#94a3b8" />
  </svg>
);


// ================= MAIN COMPONENT =================

export default function Home() {
  // Timer calculations starting from Mockup Countdown: 25d 12h 45m 30s
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 25);
    date.setHours(date.getHours() + 12);
    date.setMinutes(date.getMinutes() + 45);
    date.setSeconds(date.getSeconds() + 30);
    return date;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeftData = {};

      if (difference > 0) {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeftData = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return timeLeftData;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      showToast('error', 'Please enter your email address.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      showToast('error', 'Please enter a valid email format.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Open mailto link to send notification to kuntigorlalokesh@gmail.com
      const subject = encodeURIComponent('New Subscriber - Check-Mee Landing Page');
      const body = encodeURIComponent(`New subscriber email: ${trimmedEmail}\n\nThis notification was sent from the Check-Mee coming soon page.`);
      window.location.href = `mailto:kuntigorlalokesh@gmail.com?subject=${subject}&body=${body}`;
      
      showToast('success', 'Email client opened! Please send the email to complete.');
      setEmail("");
    } catch (err) {
      showToast('error', 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="page-container">
        
        {/* Glassmorphic Toast Notification */}
        <div className={`toast-notification ${toast.show ? 'show' : ''} ${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' ? '✓' : '✗'}
          </div>
          <span className="toast-message">{toast.message}</span>
        </div>
        
        {/* BACKGROUND DECORATIONS */}
        <div className="background-decorations">
          {/* Subtle Grain Texture Overlay */}
          <div className="noise-overlay"></div>
          
          <FadedQRBackground />
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
          <div className="bg-circle-orange"></div>
          <div className="bg-cross bg-cross-1"></div>
          <div className="bg-cross bg-cross-2 bg-cross-orange"></div>
          <div className="bg-cross bg-cross-3"></div>
          <div className="bg-cross bg-cross-4 bg-cross-dark"></div>
          <DotGrid className="bg-dot-grid-1" />
          <DotGrid className="bg-dot-grid-2" />
        </div>

        {/* FLOW CONTAINER */}
        <div className="main-content-flow">
          
          {/* 1. TOP LEFT LOGO AREA */}
            <header className="header">
              <div className="logo-text-group">
                <h1 className="logo-title">
                  Check<span className="orange">-mee</span>
                </h1>
                <div className="logo-tagline">
                  Simplify <span className="pipe">|</span> Verify <span className="pipe">|</span> Trust
                </div>
              </div>
            </header>

          {/* 2. HERO CENTER COMPONENT */}
          <div className="hero-center-flow">
            <div className="hero-left">
              {/* Badge */}
              <div className="badge-pill">
                <span className="badge-icon">⚠️</span>
                <span className="badge-text">We’re working on something awesome!</span>
              </div>

              {/* Title */}
              <h2 className="main-heading">
                Coming <span className="gradient-soon">Soon</span>
              </h2>

              {/* Subtitles */}
              <p className="subtitle-large">
                Something <span className="amazing-highlight">amazing</span> is on the way!
              </p>
              <div className="subtitle-decorative-dash"></div>
              
              <p className="subtitle-desc">
                We’re working hard to bring you a better, faster and smarter experience.
              </p>

              {/* 5. COUNTDOWN SECTION */}
              <div className="countdown-row-container">
                <div className="countdown-card">
                  <Calendar size={18} className="countdown-icon" />
                  <span className="countdown-number">{String(timeLeft.days).padStart(2, "0")}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-colon-separator">:</div>
                
                <div className="countdown-card">
                  <Clock size={18} className="countdown-icon" />
                  <span className="countdown-number">{String(timeLeft.hours).padStart(2, "0")}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-colon-separator">:</div>

                <div className="countdown-card">
                  <Hourglass size={18} className="countdown-icon" />
                  <span className="countdown-number">{String(timeLeft.minutes).padStart(2, "0")}</span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-colon-separator">:</div>

                <div className="countdown-card">
                  <Timer size={18} className="countdown-icon" />
                  <span className="countdown-number">{String(timeLeft.seconds).padStart(2, "0")}</span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>

              {/* SUBSCRIPTION SECTION - inside hero-left for desktop alignment */}
              <section className="subscription-section">
                <div className="subscription-block">
                  <div className="subscription-title-bar">
                    <div className="subscription-mail-badge">
                      <Mail size={16} />
                    </div>
                    <h3 className="subscription-title">Stay updated with our latest news!</h3>
                  </div>
                  <form className="subscription-form-row" onSubmit={handleSubscribe}>
                    <input 
                      type="email" 
                      className="subscription-input" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                    <button type="submit" className={`notify-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          Sending... <span className="btn-spinner"></span>
                        </>
                      ) : (
                        <>
                          Notify Me <Send size={14} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </section>
            </div>


          </div>

        </div>

        {/* 8. BOTTOM CORNERS & BRANDING */}
        <div className="footer-corners-bar">
          
          {/* Left Wave & Email */}
          <div className="bottom-left-wave-area">
            <svg width="220" height="150" viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-svg-box" preserveAspectRatio="none">
              <path d="M0 150V30C50 15 90 60 140 40C180 25 200 0 220 0V150H0Z" fill="url(#waveNavyGrad)" />
              <defs>
                <linearGradient id="waveNavyGrad" x1="0" y1="0" x2="220" y2="150" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0b0f19" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <a href="mailto:vandana.hr.cfo@check-mee.com" className="bottom-left-email-link">
            <Mail size={15} className="email-icon" /> vandana.hr.cfo@check-mee.com
          </a>

          {/* Center Social Follow row (Centered absolutely in CSS at bottom) */}
          <div className="social-follow-wrapper">
            <span className="social-label">Follow us on</span>
            <div className="social-links-row">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right 3D Platform Pedestal & Domain */}
          <div className="bottom-right-brand-pedestal">
            {/* Standing 3D hologram logo */}

            

            <a href="https://www.check-mee.com" target="_blank" rel="noreferrer" className="bottom-right-domain-link">
              <Globe size={15} className="domain-icon" /> www.check-mee.com
            </a>
          </div>

        </div>

      </div>
    </>
  );
}
