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
          💛
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

          {/* Image Above Name */}
          <img
            src="/aly.png"  // ✅ This is the correct path for public files
            alt="Aly"
            style={{
              display: "block",
              margin: "0 auto",
              width: "120px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
            }}
          />

          <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "10px" }}>
            Aly
          </p>
          <br />

          <p style={{ textAlign: "justify" }}>
            Happy Birthday, <strong>Pretty Aly</strong>, today’s your day,  
            A time to laugh, to dance, to play.
            But more than that, I want to say,
            You brighten my day like our favorite games do.
          </p>

          <p style={{ textAlign: "justify" }}>
            When we play games, you make me smile,
            With every joke, each fun-filled while.
            Your laughter feels like sunshine near,
            A sound my heart is glad to hear.
          </p>

          <p style={{ textAlign: "justify" }}>
            In every talk, both deep and small,
            You lift me up, you calm it all.
            You make the quiet moments glow,
            With warmth you may not even know.
          </p>
          
          <br />

          <p style={{ textAlign: "right", marginTop: "20px" }}>
            Yours truly,<br />
            xxx
          </p>

          <div className="floating-hearts"></div>
        </motion.div>
      )}
    </div>
  );
};

export default Letter;
