import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f8f8f5] py-32"
    >
      <Container>

        <SectionTitle
          subtitle="FEATURED WORK"
          title="Selected Projects"
        />

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            number={`PROJECT 0${project.id}`}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            reverse={index % 2 === 1}
          />
        ))}

      </Container>
    </section>
  );
}