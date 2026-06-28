"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { navigation } from "@/data/navigation";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <Container>
        <motion.nav
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`
            mt-6
            flex
            h-16
            items-center
            justify-between
            rounded-full
            px-6
            transition-all
            duration-300

            ${
              scrolled
                ? "border border-white/40 bg-white/70 shadow-xl backdrop-blur-xl"
                : "bg-transparent"
            }
          `}
        >
          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
              AK
            </div>

            <span className="hidden text-lg font-semibold md:block">
              Anuja Kumari
            </span>

          </div>

          {/* Navigation */}

          <ul className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-neutral-700 transition hover:text-black"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}

          <Button href="/resume.pdf">
            Resume
          </Button>

        </motion.nav>
      </Container>
    </header>
  );
}