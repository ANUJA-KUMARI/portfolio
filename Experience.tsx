import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";
import TimelineItem from "../ui/TimelineItem";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-32"
    >
      <Container>

        <FadeUp>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            My Journey
          </h2>
        </FadeUp>

        <div className="mt-20 space-y-20">
          {experiences.map((item) => (
            <TimelineItem
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}