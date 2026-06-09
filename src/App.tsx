import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "./assets/logo_white.png";

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 18);
targetDate.setHours(16, 0, 0, 0);

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function useCountdown(deadline: Date) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, deadline.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(interval);
  }, [deadline]);

  return countdown;
}

const App = () => {
  const countdown = useCountdown(targetDate);

  return (
    <div className="relative min-h-screen overflow-hidden bg-surface text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,0,255,0.18),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(80,33,255,0.16),transparent_20%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=100 height=100 viewBox=0 0 100 100 xmlns=http://www.w3.org/2000/svg%3E%3Ccircle cx=50 cy=50 r=50 fill=%2305020A opacity=0.15/%3E%3C/svg%3E')] opacity-20" />
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-[-4rem] right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 pb-16 pt-4 sm:px-10 lg:px-16">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 flex items-center justify-start px-2 py-2 sm:px-4"
        >
          <img
            src={logo}
            alt="Admetta logo"
            className="h-20 w-auto bg-transparent shadow-soft"
          />
        </motion.header>

        <main className="flex-1">
          <section className="relative flex min-h-[calc(100vh-140px)] flex-col items-center justify-center gap-10 py-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="relative z-20 max-w-3xl"
            >
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/50">
                Creative Marketing Agency
              </p>
              <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                The Next Chapter of{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                  Digital Growth
                </span>{" "}
                Is Almost Here.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Bold campaigns. Strategic storytelling. Creative execution.
                Admetta is preparing something exceptional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid w-full max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { label: "Days", value: pad(countdown.days) },
                { label: "Hours", value: pad(countdown.hours) },
                { label: "Minutes", value: pad(countdown.minutes) },
                { label: "Seconds", value: pad(countdown.seconds) },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl transition"
                >
                  <p className="mb-3 text-sm uppercase tracking-[0.28em] text-white/50">
                    {item.label}
                  </p>
                  <span className="text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
