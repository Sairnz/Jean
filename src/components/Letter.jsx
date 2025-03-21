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
            I never knew silence could feel so loud,
            until the days without you came around.
            Through every storm, through wind and rain,
            I ache to hear your voice again.  
          </p>

          <p style={{ textAlign: "justify" }}>
            The world may shift, the seasons turn,
            yet for your presence, my heart will yearn.
            Through empty nights and endless days,
            I miss you more than words can say. 
          </p>

          <p style={{ textAlign: "justify" }}>
            Though time has passed, my heart still beats,  
            waiting for the day we meet.  
            No distance wide, no hours apart,  
            could ever steal you from my heart.  
          </p>

          <p style={{ textAlign: "justify" }}>
            So here I stand, through dusk and dawn,  
            longing for where we belong.  
            For though the silence kept us far,  
            my love still lingers where you are.  
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
