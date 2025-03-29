import Link from "next/link";
import Image from "next/image";
import projectsGrid from "../../data/projects.json";
import styles from "./archive-grid.module.css";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  images: { url: string; width: number; height: number }[];
}

const projects: Project[] = projectsGrid.projects;

export default function ArchiveGrid() {
  return (
    <div className={`${styles.workGrid} container`}>
      {projects.map((project) => (
        <Link
          className={styles.workGridItem}
          key={project.id}
          href={`work/${project.title}`}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={400}
            height={300}
            className={styles.workGridImg}
          />
          <p className={styles.title}> {project.title}</p>
        </Link>
      ))}
    </div>
  );
}
