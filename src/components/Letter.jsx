import { useState } from "react";
import { motion } from "framer-motion";
import "./Letter.css";

const Letter = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="container">
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
          ❤️
        </motion.div>
      </motion.div>

      {isOpened && (
        <motion.div
          className="letter"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -180, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="letter-heading">To My Dearest Jean,</p>

          <p className="letter-content">
            There’s a spark that ignites in my heart, <br />
            The moment you entered my life. <br />
            In just a few days, you’ve changed everything <br />
            And my soul is grateful for it.
          </p>

          <p className="letter-content">
            Your presence brings me peace and joy, <br />
            And in your understanding, I find solace. <br />
            I can speak without words, <br />
            And still, you listen—this rare connection we share.
          </p>

          <p className="letter-content">
            I want to know you more, <br />
            Beyond the laughter, beyond the moments, <br />
            The depth of your heart and the stories you hold, <br />
            Everything that makes you who you are.
          </p>

          <p className="letter-content">
            Know, my love, that I am here, always, <br />
            To listen, to support, to stand by you. <br />
            When life weighs heavy, I will be your strength, <br />
            Ready to help, ready to love, unconditionally.
          </p>

          <p className="letter-signature">
            With all my heart, <br />
            Sai
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Letter;