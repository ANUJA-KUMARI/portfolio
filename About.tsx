import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";
import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="py-36 bg-white"
    >
      <Container>

        <FadeUp>

          <p className="text-neutral-500 uppercase tracking-[0.2em] text-sm">
            About
          </p>

          <h2 className="mt-4 text-6xl font-black tracking-tight">
            {about.title}
          </h2>

        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-600">
            {about.intro}
          </p>
        </FadeUp>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <FadeUp delay={0.2}>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">

              <p className="text-sm uppercase tracking-wider text-neutral-500">
                Education
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {about.education.degree}
              </h3>

              <p className="mt-2 text-neutral-600">
                {about.education.college}
              </p>

            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">

              <p className="text-sm uppercase tracking-wider text-neutral-500">
                Focus
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {about.experience}
              </h3>

            </div>
          </FadeUp>

        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

          {about.stats.map((item) => (
            <FadeUp key={item.label}>

              <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

                <h3 className="text-5xl font-black">
                  {item.number}
                </h3>

                <p className="mt-3 text-neutral-500">
                  {item.label}
                </p>

              </div>

            </FadeUp>
          ))}

        </div>

      </Container>
    </section>
  );
}