import { motion } from "framer-motion";

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }); // Number of particles

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {particles.map((_, index) => {
        const size = Math.random() * 4 + 2; // Random size
        const duration = Math.random() * 5 + 3; // Random duration
        const startX = Math.random() * 100; // Random starting X position

        return (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full opacity-40"
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              center: "-10px",
            }}
            animate={{
              y: ["100vh", "-10vh"], // Move from bottom to top
              x: [`${startX}%`, `${startX + Math.random() * 10 - 5}%`], // Slight horizontal drift
              opacity: [0, 1, 1, 0], // Fade in and out
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;
