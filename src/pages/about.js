import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLoad } from "react-router-dom-animation";
import { motion } from "framer-motion";
// import { ReactComponent as PeaceSymbol } from './peace.svg';

const Body = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Page = (routerLocation, isAnimation) => {
  const [isLoad, setLoad] = useLoad();
  const [style, setStyle] = useState({});

  useEffect(() => {
    setLoad(true);
    function handleResize() {
      // Set the style to central 400px if the screen width is more than 500px
      if (window.innerWidth > 500) {
        setStyle({
          margin: '0 auto',
          maxWidth: '400px',
          textAlign: 'justify',
          padding: '2em'
        });
      } else {
        // Otherwise, make it full width with padding
        setStyle({
          margin: '0 10px',
          textAlign: 'justify',
          padding: '2em'
        });
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Body
      style={{ background: "#1bbc9b", zIndex: 111 }}
      initial={{ scale: isLoad ? 1 : 1 }}
      animate={{ scale: isAnimation ? 1 : isLoad ? 1 : 1 }}
      exit={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      to="/2"
    >
      <div>
        <Link style={{ textDecoration: "none" }} to="/2" animate="next">
          <div
            style={{
              color: "#fff",
              height: "99vh",
              width: "95vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              paddingLeft: "2em",
              paddingRight: "2em",
              textAlign: "center",
            }}
          >
            <div style={{ textAlign: 'center', width: '100%' }}>
              <h1 style={{ margin: '0' }}>Symptoms Of Psychopathy:</h1>
              <br />
              <br />
              <div style={style}>
                <h4>1. Behave in ways that cause other people physical, social, emotional, or financial harm.</h4><br />
                <h4>2. Not concerned when others are in distress.</h4><br />
                <h4>3. Lie to, use, or manipulate other persons in order to get what they want.</h4><br />
                <h4>4. Not keep real friends.</h4><br />
                <h4>5. Insincere or superficial.</h4>
              </div>
            </div>
            {/* <PeaceSymbol width={100} height={100} fill="white" /> */}
          </div>
        </Link>
      </div>
    </Body>
  );
};

export default Page;
