import Link from "next/link";
import Image from "next/image";
import projectsGrid from "../../data/projects.json";
import styles from "./workGrid.module.css";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  images: string[];
}

const projects: Project[] = projectsGrid.projects;

export default function WorkGrid() {
  return (
    <div className={styles.workGrid}>
      {projects.map((project) => (
        <Link key={project.id} href={`work/${project.title}`}>
          <div>
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={400}
              height={300}
              className={styles.workGridImg}
            />
            <p className={styles.title}> {project.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
