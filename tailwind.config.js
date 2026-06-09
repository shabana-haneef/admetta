module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#05020A",
        glow: "#9F3DFF",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(159, 61, 255, 0.24)",
        soft: "0 24px 120px rgba(4, 4, 16, 0.45)",
      },
      backgroundImage: {
        "magenta-radial":
          "radial-gradient(circle at top, rgba(248, 0, 255, 0.2), transparent 36%)",
        "purple-radial":
          "radial-gradient(circle at 20% 20%, rgba(106, 20, 255, 0.24), transparent 28%)",
      },
    },
  },
  plugins: [],
};
