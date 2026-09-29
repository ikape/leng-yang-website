const BUBBLES = [
  { left: "6%", size: 14, duration: 9, delay: 0 },
  { left: "18%", size: 22, duration: 12, delay: 1.5 },
  { left: "32%", size: 10, duration: 8, delay: 3 },
  { left: "48%", size: 18, duration: 11, delay: 0.8 },
  { left: "63%", size: 12, duration: 9.5, delay: 2.2 },
  { left: "78%", size: 24, duration: 13, delay: 1 },
  { left: "90%", size: 16, duration: 10, delay: 3.6 },
];

export default function FloatingBubbles({ className = "", variant = "default" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={`floating-bubble ${variant === "light" ? "floating-bubble--light" : ""}`}
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
