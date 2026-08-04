import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const letters = [
  { char: "I", blue: false },
  { char: "m", blue: false },
  { char: "a", blue: false },
  { char: "G", blue: true },
  { char: "i", blue: false },
  { char: "n", blue: false },
  { char: "g", blue: false },
  { char: ".", blue: false },
  { char: ".", blue: false },
  { char: ".", blue: false },
];

const Loading_animation = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20">
      <div className="flex flex-col items-center gap-8">


        {/* Animated Text */}
        <div className="flex text-4xl font-bold tracking-wide">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={letter.blue ? "text-blue-500" : "text-white"}
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.8,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [15, 0, 0, -8],
                scale: letter.blue
                  ? [0.8, 1.35, 1, 0.9]
                  : [0.8, 1, 1, 0.9],
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.12,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeInOut",
              }}
            >
              {letter.char}
            </motion.span>
          ))}
        </div>

        {/* Modern Spinner */}
        <div className="relative h-14 w-14">
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-blue-500/20"
          />

          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-blue-400"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute inset-3 rounded-full bg-blue-500/20"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Loading_animation;