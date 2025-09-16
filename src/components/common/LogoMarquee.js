import React from "react";

const LogoMarquee = () => {
  // We only have 2 logos, so we'll repeat them
  const logos = [
    "/images/icons/marquee-logo-1.png",
    "/images/icons/marquee-logo-2.png",
  ];

  const styles = {
    container: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      paddingTop: "3rem",
    },
    heading: {
      textAlign: "center",
      fontSize: "3.5rem",
      // marginBottom: "2.5rem",
      fontWeight: "bold",
      color: "#333",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
    },
    marquee: {
      width: "100%",
      overflow: "hidden",
      position: "relative",
      padding: "1rem 0",
    },
    marqueeContent: {
      display: "flex",
      animation: "marquee 30s linear infinite",
      width: "max-content",
    },
    logoGroup: {
      display: "flex",
      width: "100vw",
      justifyContent: "space-between",
    },
    logoWrapper: {
      width: "calc(100% / 4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 1rem",
      transition: "all 0.3s ease",
    },
    logo: {
      height: "19rem",
      objectFit: "contain",
      filter: "grayscale(30%)",
      transition: "filter 0.3s ease, transform 0.3s ease",
    },
  };

  // Add keyframes to document head
  React.useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");

    // Add the keyframes rule
    styleElement.innerHTML = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      
      .logo-wrapper:hover {
        transform: scale(1.1);
      }
      
      .logo-wrapper:hover img {
        filter: grayscale(0%);
        transform: translateY(-5px);
      }
      
      @media (max-width: 768px) {
        .marquee-heading {
          font-size: 1.8rem !important;
          margin-bottom: 1.5rem !important;
        }
        
        .marquee-logo {
          height: 7rem !important;
        }
      }
    `;

    // Append the style element to the head
    document.head.appendChild(styleElement);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Create an array of 6 logos by repeating the 2 we have
  const displayLogos = Array(3).fill(logos).flat();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading} className="marquee-heading">
        The future is MAMA BOBS!!
      </h2>
      <div style={styles.marquee}>
        <div style={styles.marqueeContent}>
          {/* Create two groups of logos for seamless looping */}
          {[1, 2].map((group) => (
            <div key={group} style={styles.logoGroup}>
              {displayLogos.map((logo, index) => (
                <div
                  key={`${group}-${index}`}
                  style={styles.logoWrapper}
                  className="logo-wrapper"
                >
                  <img
                    src={logo}
                    alt={`Mama Bob's Logo ${(index % 2) + 1}`}
                    style={styles.logo}
                    className="marquee-logo"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
