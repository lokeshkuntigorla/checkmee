
import React from "react";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        :root{
          --orange:#ff8a00;
          --green:#00ff99;
          --white:#ffffff;
          --text:#d7d7d7;
          --dark:#050505;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          font-family:'Poppins',sans-serif;
          background:var(--dark);
          overflow-x:hidden;
        }

        .home-container{
          min-height:100vh;
          width:100%;
          position:relative;
          overflow:hidden;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:40px 20px;

          background:
            radial-gradient(circle at top left, rgba(255,138,0,0.16), transparent 28%),
            radial-gradient(circle at bottom right, rgba(0,255,153,0.12), transparent 30%),
            linear-gradient(135deg,#040404,#090909,#050505);
        }

        /* ================= PREMIUM GLOW ================= */

        .orange-glow,
        .green-glow,
        .purple-glow{
          position:absolute;
          border-radius:50%;
          filter:blur(140px);
          animation:floatGlow 12s ease-in-out infinite;
          pointer-events:none;
        }

        .orange-glow{
          width:420px;
          height:420px;
          background:rgba(255,138,0,0.28);
          top:-140px;
          left:-140px;
        }

        .green-glow{
          width:420px;
          height:420px;
          background:rgba(0,255,153,0.18);
          bottom:-140px;
          right:-140px;
          animation-duration:15s;
        }

        .purple-glow{
          width:320px;
          height:320px;
          background:rgba(130,80,255,0.15);
          top:40%;
          left:45%;
          animation-duration:18s;
        }

        @keyframes floatGlow{
          0%{
            transform:translateY(0px) translateX(0px) scale(1);
          }

          50%{
            transform:translateY(20px) translateX(12px) scale(1.08);
          }

          100%{
            transform:translateY(0px) translateX(0px) scale(1);
          }
        }

        /* ================= PARTICLES ================= */

        .particle{
          position:absolute;
          width:5px;
          height:5px;
          border-radius:50%;
          background:rgba(255,255,255,0.35);
          animation:particles 15s linear infinite;
        }

        .particle:nth-child(1){
          top:12%;
          left:15%;
        }

        .particle:nth-child(2){
          top:70%;
          left:80%;
          animation-duration:17s;
        }

        .particle:nth-child(3){
          top:55%;
          left:10%;
          animation-duration:13s;
        }

        .particle:nth-child(4){
          top:85%;
          left:45%;
          animation-duration:19s;
        }

        .particle:nth-child(5){
          top:20%;
          left:70%;
          animation-duration:14s;
        }

        @keyframes particles{
          0%{
            transform:translateY(0px) scale(1);
            opacity:0;
          }

          50%{
            opacity:1;
          }

          100%{
            transform:translateY(-90px) scale(1.6);
            opacity:0;
          }
        }

        /* ================= MAIN CARD ================= */

        .main-card{
          position:relative;
          z-index:10;

          width:100%;
          max-width:1020px;

          padding:80px 55px;

          border-radius:42px;

          text-align:center;

          overflow:hidden;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.08),
              rgba(255,255,255,0.03)
            );

          backdrop-filter:blur(24px);

          border:1px solid rgba(255,255,255,0.08);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.65),
            inset 0 1px 0 rgba(255,255,255,0.08);

          animation:cardReveal 1.4s cubic-bezier(.16,1,.3,1);
        }

        .main-card::before{
          content:"";
          position:absolute;
          inset:0;
          border-radius:42px;
          padding:1px;

          background:linear-gradient(
            135deg,
            rgba(255,138,0,0.45),
            rgba(0,255,153,0.22),
            transparent
          );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite:xor;
          mask-composite:exclude;

          pointer-events:none;
        }

        @keyframes cardReveal{
          from{
            opacity:0;
            transform:translateY(40px) scale(0.96);
          }

          to{
            opacity:1;
            transform:translateY(0px) scale(1);
          }
        }

        /* ================= COMING SOON ================= */

        .coming{
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:8px;
          margin-bottom:35px;
        }

        .coming span{
          font-size:24px;
          font-weight:700;
          letter-spacing:5px;

          color:var(--orange);

          opacity:0;

          transform:translateY(35px);

          animation:letterReveal 0.8s forwards;

          text-shadow:
            0 0 18px rgba(255,138,0,0.35);
        }

        .coming span:nth-child(1){animation-delay:0.1s;}
        .coming span:nth-child(2){animation-delay:0.18s;}
        .coming span:nth-child(3){animation-delay:0.26s;}
        .coming span:nth-child(4){animation-delay:0.34s;}
        .coming span:nth-child(5){animation-delay:0.42s;}
        .coming span:nth-child(6){animation-delay:0.50s;}
        .coming span:nth-child(7){animation-delay:0.58s;}
        .coming span:nth-child(8){animation-delay:0.66s;}
        .coming span:nth-child(9){animation-delay:0.74s;}
        .coming span:nth-child(10){animation-delay:0.82s;}
        .coming span:nth-child(11){animation-delay:0.90s;}

        @keyframes letterReveal{
          to{
            opacity:1;
            transform:translateY(0px);
          }
        }

        /* ================= PREMIUM LOGO ================= */

        .logo-wrapper{
          display:flex;
          justify-content:center;
          align-items:flex-end;
          margin-bottom:30px;
        }

        .logo{
          position:relative;
          display:flex;
          align-items:flex-end;
          cursor:pointer;
          transition:0.5s ease;
        }

        .logo-main{
          font-size:120px;
          font-weight:900;
          line-height:1;

          letter-spacing:4px;

          color:#ffffff;

          text-transform:uppercase;

          text-shadow:
            0 0 30px rgba(255,255,255,0.08),
            0 0 60px rgba(255,138,0,0.08);

          transition:0.5s ease;
        }

        .logo-sub{
          font-size:52px;
          font-weight:700;

          margin-left:5px;
          margin-bottom:12px;

          letter-spacing:2px;

          background:linear-gradient(
            135deg,
            var(--orange),
            var(--green)
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;

          text-shadow:
            0 0 25px rgba(255,138,0,0.3);

          transition:0.5s ease;
        }

        .logo::before{
          content:"";
          position:absolute;

          width:180px;
          height:180px;

          background:radial-gradient(
            circle,
            rgba(255,138,0,0.18),
            transparent 70%
          );

          filter:blur(35px);

          z-index:-1;

          opacity:0;

          transition:0.5s ease;
        }

        .logo:hover{
          transform:translateY(-3px) scale(1.02);
        }

        .logo:hover::before{
          opacity:1;
        }

        .logo:hover .logo-sub{
          transform:translateY(-2px);
          filter:brightness(1.1);
        }

        /* ================= DESCRIPTION ================= */

        .desc{
          max-width:760px;

          margin:auto;

          color:var(--text);

          font-size:20px;

          line-height:2;

          font-weight:400;

          letter-spacing:0.3px;

          margin-bottom:50px;

          animation:fadeSoft 1.8s ease;
        }

        @keyframes fadeSoft{
          from{
            opacity:0;
          }

          to{
            opacity:1;
          }
        }

        /* ================= BUTTON ================= */

        .btn{
          position:relative;

          overflow:hidden;

          padding:18px 52px;

          border:none;
          outline:none;

          border-radius:70px;

          cursor:pointer;

          font-size:16px;
          font-weight:700;

          letter-spacing:0.5px;

          color:#000;

          background:linear-gradient(
            135deg,
            var(--orange),
            var(--green)
          );

          transition:all 0.45s cubic-bezier(.16,1,.3,1);

          box-shadow:
            0 15px 40px rgba(255,138,0,0.25),
            0 5px 25px rgba(0,255,153,0.12);
        }

        .btn::before{
          content:"";
          position:absolute;

          top:0;
          left:-100%;

          width:100%;
          height:100%;

          background:linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,0.55),
            transparent
          );

          transition:0.7s;
        }

        .btn:hover::before{
          left:100%;
        }

        .btn:hover{
          transform:translateY(-6px) scale(1.04);

          box-shadow:
            0 20px 55px rgba(255,138,0,0.4),
            0 10px 35px rgba(0,255,153,0.18);
        }

        /* ================= CONTACT ================= */

        .contact-box{
          margin-top:75px;

          padding:40px;

          border-radius:32px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.04),
              rgba(255,255,255,0.02)
            );

          border:1px solid rgba(255,255,255,0.06);

          backdrop-filter:blur(14px);
        }

        .contact-title{
          font-size:36px;
          font-weight:700;

          margin-bottom:30px;

          color:var(--white);
        }

        .contact-list{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .contact-item{
          position:relative;

          overflow:hidden;

          padding:18px 24px;

          border-radius:18px;

          background:rgba(255,255,255,0.03);

          color:#d9d9d9;

          font-size:17px;
          font-weight:500;

          border:1px solid rgba(255,255,255,0.05);

          transition:all 0.4s cubic-bezier(.16,1,.3,1);
        }

        .contact-item::before{
          content:"";

          position:absolute;

          inset:0;

          background:linear-gradient(
            90deg,
            rgba(255,138,0,0.08),
            rgba(0,255,153,0.08)
          );

          opacity:0;

          transition:0.4s;
        }

        .contact-item:hover::before{
          opacity:1;
        }

        .contact-item:hover{
          transform:translateY(-4px);

          border-color:rgba(255,255,255,0.1);

          box-shadow:
            0 12px 25px rgba(0,0,0,0.25);
        }

        /* ================= EMAILS ================= */

        .contact-emails{
          margin-top:10px;

          display:flex;
          flex-direction:column;
          gap:16px;
        }

        .premium-mail{
          position:relative;

          overflow:hidden;

          padding:18px 24px;

          border-radius:18px;

          background:rgba(255,255,255,0.03);

          border:1px solid rgba(255,255,255,0.06);

          color:#d7d7d7;

          font-size:15px;
          font-weight:500;

          letter-spacing:0.3px;

          transition:all 0.4s cubic-bezier(.16,1,.3,1);
        }

        .premium-mail::before{
          content:"";

          position:absolute;

          inset:0;

          background:linear-gradient(
            90deg,
            rgba(255,138,0,0.08),
            rgba(0,255,153,0.08)
          );

          opacity:0;

          transition:0.4s;
        }

        .premium-mail:hover::before{
          opacity:1;
        }

        .premium-mail:hover{
          transform:translateY(-4px);

          border-color:rgba(255,255,255,0.1);

          box-shadow:
            0 12px 30px rgba(0,0,0,0.25);
        }

        /* ================= FOOTER ================= */

        .footer{
          margin-top:45px;

          color:#8f8f8f;

          font-size:14px;

          letter-spacing:1px;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:992px){

          .main-card{
            padding:60px 35px;
          }

          .logo-main{
            font-size:88px;
          }

          .logo-sub{
            font-size:40px;
          }

          .desc{
            font-size:18px;
          }
        }

        @media(max-width:768px){

          .logo-main{
            font-size:66px;
          }

          .logo-sub{
            font-size:30px;
            margin-bottom:8px;
          }

          .coming span{
            font-size:18px;
            letter-spacing:2px;
          }

          .desc{
            font-size:16px;
            line-height:1.9;
          }

          .contact-title{
            font-size:28px;
          }

          .contact-item,
          .premium-mail{
            font-size:15px;
          }
        }

        @media(max-width:480px){

          .main-card{
            padding:45px 20px;
            border-radius:28px;
          }

          .logo-main{
            font-size:48px;
          }

          .logo-sub{
            font-size:24px;
            margin-left:3px;
            margin-bottom:5px;
          }

          .btn{
            width:100%;
          }

          .desc{
            font-size:15px;
          }

          .contact-box{
            padding:24px 18px;
          }
        }

      `}</style>

      <div className="home-container">

        <div className="orange-glow"></div>
        <div className="green-glow"></div>
        <div className="purple-glow"></div>

        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        <div className="main-card">

          {/* COMING SOON */}

          <div className="coming">
            {"COMING SOON".split("").map((letter, index) => (
              <span key={index}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </div>

          {/* PREMIUM LOGO */}

          <div className="logo-wrapper">

            <div className="logo">

              <span className="logo-main">
                ChecK
              </span>

              <span className="logo-sub">
                mee
              </span>

            </div>

          </div>

          {/* DESCRIPTION */}

          <p className="desc">
            We’re building a smarter, faster, and premium future shopping
            experience with next-generation billing and seamless digital
            innovation.
          </p>

          {/* BUTTON */}

          <button className="btn">
            Launching Soon
          </button>

          {/* CONTACT */}

          <div className="contact-box">

            <h2 className="contact-title">
              Contact Us
            </h2>

            <div className="contact-list">

              <div className="contact-item">
                📍 Visakhapatnam, Andhra Pradesh, India
              </div>

            </div>

            {/* EMAILS */}

            <div className="contact-emails">

              <div className="premium-mail">
                ✉️ support@checkmee.com
              </div>

              <div className="premium-mail">
                ✉️ vandana.hr.cfo@check-mee.com
              </div>

            </div>

          </div>

          {/* FOOTER */}

          <div className="footer">
            © 2026 CheckMe. All rights reserved.
          </div>

        </div>

      </div>
    </>
  );
}
