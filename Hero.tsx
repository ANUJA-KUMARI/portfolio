 import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import FadeUp from "../ui/FadeUp";
import FloatingCard from "../ui/FloatingCard";
import RotatingSkills from "../ui/RotatingSkills";
import TiltCard from "../ui/TiltCard";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8f5]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-20 top-32 h-[520px] w-[520px] rounded-full bg-blue-200/30 blur-[160px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-100/30 blur-[150px]" />

      </div>

      <Container className="relative z-10">

        <div className="grid min-h-screen items-center gap-32 py-28 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <FadeUp>
              <p className="mb-8 text-lg font-medium text-neutral-500">
                Hello, I&apos;m
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-7xl font-black leading-[0.9] tracking-[-0.06em] lg:text-[8.5rem]">
                Anuja
                <br />
                Kumari
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="mt-8 text-3xl font-semibold text-neutral-800">
                Computer Engineering Student
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-8 max-w-lg text-xl leading-9 text-neutral-600">
                Building AI-powered applications,
                conducting ML research,
                and crafting modern digital experiences.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-5">

                <Button href="#projects">
                  View Projects
                </Button>

                <Button
                  href="/resume.pdf"
                  variant="secondary"
                >
                  Download Resume
                </Button>

              </div>
            </FadeUp>

          </div>

          {/* RIGHT SIDE */}

          <FadeUp delay={0.5}>

            <div className="flex justify-center lg:-ml-16">

              <div className="relative h-[620px] w-[470px]">

                {/* Rotating Skills */}
                <div className="absolute inset-0 z-30 pointer-events-none overflow-visible">
                  <RotatingSkills />
                </div>

                {/* Floating + 3D Tilt Card */}

                <FloatingCard>

                  <TiltCard>

                    <div className="relative z-10 h-[620px] w-[470px] overflow-hidden rounded-[40px] border border-neutral-200 bg-white shadow-2xl">

                      <Image
                        src="/images/profile.jpg"
                        alt="Anuja Kumari"
                        fill
                        priority
                        className="object-cover transition duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    </div>

                  </TiltCard>

                </FloatingCard>

              </div>

            </div>

          </FadeUp>

        </div>

      </Container>
    </section>
  );
}