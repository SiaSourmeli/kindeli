import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/layout";
import projectsGrid from "../../data/projects.json";
// import styles from "../../styles/globals.css";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  images: string[];
}

const projects: Project[] = projectsGrid.projects;

export default function ProjectPage() {
  const router = useRouter();
  const { title } = router.query;

  const project = projects.find((proj) => proj.title === title);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <div className="projectGrid">
        {project.images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={500}
              height={350}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
