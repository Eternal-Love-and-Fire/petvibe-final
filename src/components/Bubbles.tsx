"use client";

export const Bubbles = () => {
  return (
    <>
      <style>
        {`
    .bubbles {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      top: 0;
      left: 0;
    }
    .bubble {
      position: absolute;
      bottom: -100vh;
      background: #f1f1f1;
      border-radius: 50%;
      opacity: 1;
      animation: rise 10s infinite ease-in;
    }
    .bubble:nth-child(1) { width: 40px; height: 40px; right: 10%; animation-duration: 8s; }
    .bubble:nth-child(2) { width: 20px; height: 20px; right: 20%; animation-duration: 5s; }
    .bubble:nth-child(3) { width: 50px; height: 50px; right: 35%; animation-duration: 7s; }
    .bubble:nth-child(4) { width: 80px; height: 80px; right: 50%; animation-duration: 11s; }
    .bubble:nth-child(5) { width: 35px; height: 35px; right: 55%; animation-duration: 6s; }
    .bubble:nth-child(6) { width: 45px; height: 45px; right: 65%; animation-duration: 8s;  }
    .bubble:nth-child(7) { width: 90px; height: 90px; right: 70%; animation-duration: 12s; }
    .bubble:nth-child(8) { width: 25px; height: 25px; right: 80%; animation-duration: 6s; }
    .bubble:nth-child(9) { width: 15px; height: 15px; right: 70%; animation-duration: 5s; }
    .bubble:nth-child(10) { width: 90px; height: 90px; right: 25%; animation-duration: 10s;  }
    .bubble:nth-child(11) { width: 30px; height: 30px; right: 15%; animation-duration: 9s; }
    .bubble:nth-child(12) { width: 25px; height: 25px; right: 40%; animation-duration: 7s; }
    .bubble:nth-child(13) { width: 60px; height: 60px; right: 60%; animation-duration: 12s;  }
    .bubble:nth-child(14) { width: 70px; height: 70px; right: 75%; animation-duration: 8s; }
    .bubble:nth-child(15) { width: 20px; height: 20px; right: 5%; animation-duration: 6s; }
    .bubble:nth-child(16) { width: 50px; height: 50px; right: 30%; animation-duration: 10s;  }
    .bubble:nth-child(17) { width: 65px; height: 65px; right: 55%; animation-duration: 9s; }
    .bubble:nth-child(18) { width: 40px; height: 40px; right: 20%; animation-duration: 7s;  }
    .bubble:nth-child(19) { width: 75px; height: 75px; right: 45%; animation-duration: 11s; }
    @keyframes rise {
      0% { bottom: -110vh; transform: translateX(0);opacity: 0; }
      50% { transform: translateX(100px);}
      100% { bottom: 1080px; transform: translateX(-200px);}
    }
  `}
      </style>
      <section className="sticky">
        <div className="bubbles">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="bubble z-40"></div>
          ))}
        </div>
      </section>
    </>
  );
};
