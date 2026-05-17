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
          padding:24px;

          background:
            radial-gradient(circle at 10% 10%, rgba(255,138,0,0.12), transparent 30%),
            radial-gradient(circle at 90% 90%, rgba(0,255,153,0.08), transparent 35%),
            linear-gradient(135deg,#030303,#080808,#040404);
        }

        /* ================= PREMIUM GLOW ================= */

        .orange-glow,
        .green-glow,
        .purple-glow{
          position:absolute;
          border-radius:50%;
          filter:blur(130px);
          animation:floatGlow 14s ease-in-out infinite;
          pointer-events:none;
        }

        .orange-glow{
          width:380px;
          height:380px;
          background:rgba(255,138,0,0.22);
          top:-100px;
          left:-100px;
        }

        .green-glow{
          width:380px;
          height:380px;
          background:rgba(0,255,153,0.14);
          bottom:-100px;
          right:-100px;
          animation-duration:17s;
        }

        .purple-glow{
          width:280px;
          height:280px;
          background:rgba(130,80,255,0.1);
          top:35%;
          left:40%;
          animation-duration:20s;
        }

        @keyframes floatGlow{
          0%{
            transform:translateY(0px) translateX(0px) scale(1);
          }

          50%{
            transform:translateY(15px) translateX(10px) scale(1.05);
          }

          100%{
            transform:translateY(0px) translateX(0px) scale(1);
          }
        }

        /* ================= PARTICLES ================= */

        .particle{
          position:absolute;
          width:4px;
          height:4px;
          border-radius:50%;
          background:rgba(255,255,255,0.25);
          animation:particles 16s linear infinite;
        }

        .particle:nth-child(1){
          top:15%;
          left:20%;
        }

        .particle:nth-child(2){
          top:75%;
          left:85%;
          animation-duration:18s;
        }

        .particle:nth-child(3){
          top:60%;
          left:12%;
          animation-duration:14s;
        }

        .particle:nth-child(4){
          top:88%;
          left:50%;
          animation-duration:20s;
        }

        .particle:nth-child(5){
          top:25%;
          left:75%;
          animation-duration:15s;
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
            transform:translateY(-80px) scale(1.4);
            opacity:0;
          }
        }

        /* ================= MAIN CARD ================= */

        .main-card{
          position:relative;
          z-index:10;

          width:100%;
          max-width:920px;

          padding:36px 48px;

          border-radius:24px;

          text-align:center;

          overflow:hidden;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.01)
            );

          backdrop-filter:blur(32px);
          -webkit-backdrop-filter:blur(32px);

          border:1px solid rgba(255,255,255,0.06);

          box-shadow:
            0 30px 70px rgba(0,0,0,0.75),
            inset 0 1px 0 rgba(255,255,255,0.08);

          animation:cardReveal 1.2s cubic-bezier(.16,1,.3,1);
        }

        .main-card::before{
          content:"";
          position:absolute;
          inset:0;
          border-radius:24px;
          padding:1px;

          background:linear-gradient(
            135deg,
            rgba(255,138,0,0.35),
            rgba(0,255,153,0.15),
            transparent 60%
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
            transform:translateY(30px) scale(0.97);
          }

          to{
            opacity:1;
            transform:translateY(0px) scale(1);
          }
        }

        /* ================= COMING SOON ================= */

        .coming{
          display:inline-flex;
          justify-content:center;
          align-items:center;
          gap:4px;
          margin-bottom:18px;
          padding: 6px 16px;
          background: rgba(255,138,0,0.06);
          border: 1px solid rgba(255,138,0,0.15);
          border-radius: 30px;
        }

        .coming span{
          font-size:11px;
          font-weight:700;
          letter-spacing:2px;
          text-transform:uppercase;

          color:var(--orange);

          opacity:0;

          transform:translateY(10px);

          animation:letterReveal 0.6s cubic-bezier(.16,1,.3,1) forwards;

          text-shadow:
            0 0 10px rgba(255,138,0,0.2);
        }

        .coming span:nth-child(1){animation-delay:0.05s;}
        .coming span:nth-child(2){animation-delay:0.09s;}
        .coming span:nth-child(3){animation-delay:0.13s;}
        .coming span:nth-child(4){animation-delay:0.17s;}
        .coming span:nth-child(5){animation-delay:0.21s;}
        .coming span:nth-child(6){animation-delay:0.25s;}
        .coming span:nth-child(7){animation-delay:0.29s;}
        .coming span:nth-child(8){animation-delay:0.33s;}
        .coming span:nth-child(9){animation-delay:0.37s;}
        .coming span:nth-child(10){animation-delay:0.41s;}
        .coming span:nth-child(11){animation-delay:0.45s;}

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
          align-items:baseline;
          margin-bottom:16px;
        }

        .logo{
          position:relative;
          display:flex;
          align-items:baseline;
          cursor:pointer;
          transition:transform 0.4s cubic-bezier(.16,1,.3,1);
        }

        .logo-main{
          font-size:64px;
          font-weight:800;
          line-height:1;

          letter-spacing:-1.5px;

          color:#ffffff;

          text-transform:uppercase;

          background: linear-gradient(to bottom, #ffffff 60%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          text-shadow:
            0 0 30px rgba(255,255,255,0.05);

          transition:0.4s ease;
        }

        .logo-sub{
          font-size:28px;
          font-weight:800;
          line-height:1;

          margin-left:2px;

          letter-spacing:-0.5px;

          background:linear-gradient(
            135deg,
            var(--orange),
            var(--green)
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;

          filter: drop-shadow(0 2px 8px rgba(255,138,0,0.3));

          transition:0.4s ease;
        }

        .logo::before{
          content:"";
          position:absolute;

          width:100px;
          height:100px;

          background:radial-gradient(
            circle,
            rgba(255,138,0,0.15),
            transparent 70%
          );

          filter:blur(20px);

          z-index:-1;

          opacity:0;

          transition:opacity 0.4s ease;
        }

        .logo:hover{
          transform:translateY(-2px) scale(1.01);
        }

        .logo:hover::before{
          opacity:1;
        }

        .logo:hover .logo-sub{
          filter: brightness(1.1) drop-shadow(0 2px 10px rgba(255,138,0,0.4));
        }

        /* ================= DESCRIPTION ================= */

        .desc{
          max-width:560px;

          margin:0 auto 20px auto;

          color:rgba(255,255,255,0.7);

          font-size:14px;

          line-height:1.6;

          font-weight:400;

          letter-spacing:0.1px;

          animation:fadeSoft 1.5s ease;
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

          padding:12px 32px;

          border:none;
          outline:none;

          border-radius:30px;

          cursor:pointer;

          font-size:13.5px;
          font-weight:600;

          letter-spacing:0.2px;

          color:#000000;

          background:linear-gradient(
            135deg,
            var(--orange),
            var(--green)
          );

          transition:all 0.4s cubic-bezier(.16,1,.3,1);

          box-shadow:
            0 8px 24px rgba(255,138,0,0.2),
            inset 0 1px 0 rgba(255,255,255,0.4);
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
            rgba(255,255,255,0.45),
            transparent
          );

          transition:0.6s;
          z-index: 1;
        }

        .btn span {
          position: relative;
          z-index: 2;
        }

        .btn:hover::before{
          left:100%;
        }

        .btn:hover{
          transform:translateY(-2px);

          box-shadow:
            0 12px 30px rgba(255,138,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.5);
        }

        /* ================= CONTACT ================= */

        .contact-box{
          margin-top:28px;

          padding:18px 24px;

          border-radius:16px;

          background:rgba(255, 255, 255, 0.02);

          border:1px solid rgba(255,255,255,0.04);

          backdrop-filter:blur(20px);
          -webkit-backdrop-filter:blur(20px);
        }

        .contact-title{
          font-size:11px;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:1.5px;

          margin-bottom:12px;

          color:rgba(255,255,255,0.4);
        }

        .contact-content{
          display:flex;
          flex-direction:row;
          justify-content:center;
          align-items:stretch;
          flex-wrap:wrap;
          gap:12px;
        }

        .contact-item{
          position:relative;

          overflow:hidden;

          padding:10px 16px;

          border-radius:12px;

          background:rgba(255,255,255,0.015);

          color:rgba(255,255,255,0.85);

          font-size:13px;
          font-weight:500;
          letter-spacing:0.1px;

          border:1px solid rgba(255,255,255,0.03);

          transition:all 0.3s cubic-bezier(.16,1,.3,1);

          display:flex;
          align-items:center;
          gap:8px;
        }

        .contact-icon{
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .contact-item::before{
          content:"";

          position:absolute;

          inset:0;

          background:linear-gradient(
            135deg,
            rgba(255,138,0,0.04),
            rgba(0,255,153,0.04)
          );

          opacity:0;

          transition:opacity 0.3s ease;
        }

        .contact-item:hover::before{
          opacity:1;
        }

        .contact-item:hover{
          transform:translateY(-2px);

          border-color:rgba(255,255,255,0.1);
          background:rgba(255,255,255,0.03);
          color:#ffffff;

          box-shadow:
            0 8px 20px rgba(0,0,0,0.35);
        }

        /* ================= FOOTER ================= */

        .footer{
          margin-top:20px;

          color:rgba(255,255,255,0.3);

          font-size:11px;

          letter-spacing:0.5px;
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:992px){

          .main-card{
            padding:30px 32px;
          }

          .logo-main{
            font-size:56px;
          }

          .logo-sub{
            font-size:24px;
          }

          .desc{
            font-size:13.5px;
          }
        }

        @media(max-width:768px){

          .logo-main{
            font-size:48px;
          }

          .logo-sub{
            font-size:20px;
          }

          .coming{
            padding:4px 12px;
          }

          .coming span{
            font-size:10px;
            letter-spacing:1.5px;
          }

          .desc{
            font-size:13px;
            line-height:1.5;
          }

          .contact-title{
            font-size:10px;
          }

          .contact-item{
            font-size:12px;
            padding: 8px 12px;
          }
        }

        @media(max-width:480px){

          .home-container{
            padding:12px;
          }

          .main-card{
            padding:20px 16px;
            border-radius:18px;
          }

          .main-card::before{
            border-radius:18px;
          }

          .logo-main{
            font-size:36px;
          }

          .logo-sub{
            font-size:16px;
            margin-left:2px;
          }

          .btn{
            width:100%;
            padding: 10px 24px;
          }

          .desc{
            font-size:12.5px;
          }

          .contact-box{
            padding:14px 12px;
            border-radius:14px;
          }

          .contact-content{
            flex-direction:column;
            align-items:stretch;
          }

          .contact-item{
            justify-content:center;
            border-radius:10px;
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
            We provide software services.
          </p>

          {/* BUTTON */}

          <button className="btn">
            <span>Launching Soon</span>
          </button>

          {/* CONTACT */}

          <div className="contact-box">

            <h2 className="contact-title">
              Contact Us
            </h2>

            <div className="contact-content">

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>support@checkmee.com</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>vandana.hr.cfo@check-mee.com</span>
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
