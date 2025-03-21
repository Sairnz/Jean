  import { useState } from "react";
  import { motion } from "framer-motion";
  import "./Letter.css";

  const Letter = () => {
    const [isOpened, setIsOpened] = useState(false);

    return (
      <div className="container">
        {/* Envelope */}
        <motion.div
          className={`envelope ${isOpened ? "opened" : ""}`}
          animate={isOpened ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flap"></div>
          <div className="body"></div>
          <motion.div
            className="seal"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpened(true)}
          >
            🤍
          </motion.div>
        </motion.div>

        {/* Letter */}
        {isOpened && (
          <motion.div
            className="letter"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -180, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <br />
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Abish</p><br />

            <p style={{ textAlign: "justify" }}>
              You can have bad days so you can adore the good days even more.
            </p>

            <p style={{ textAlign: "justify" }}>
              Through every storm, through wind and rain,  
              I would choose to adore you just the same.  
              For even in the darkest skies,  
              your eyes still shine, your light still thrives.
            </p>

            <p style={{ textAlign: "justify" }}>
              The world may shift, the seasons turn,  
              yet for your warmth, my heart will yearn.  
              Through highs and lows, through joy and pain,  
              I will hold you close, time and again.
            </p>

            <p style={{ textAlign: "justify" }}>
              No fleeting days, no passing years—  
              nothing can take the affection I cherish so deeply.  
              For you are my heart, my sweetest song,  
              the place where I have always belonged.
            </p>
            <br />

            <p style={{ textAlign: "right", marginTop: "20px" }}>
              Yours truly,<br />
              Sai
            </p>

            <div className="floating-hearts"></div>
          </motion.div>
        )}
      </div>
    );
  };

  export default Letter;
