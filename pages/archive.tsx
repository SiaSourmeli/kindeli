import Link from "next/link";
import Image from "next/image";
import projectsGrid from "../data/projects.json";
import Layout from "../components/layout";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  images: { url: string; width: number; height: number }[];
}

const projects: Project[] = projectsGrid.projects;

export default function Archive() {
  return (
    <Layout>
      <div className="container archive-container">
        <div className="workGrid">
          {projects.map((project) => (
            <Link key={project.id} href={`work/${project.title}`}>
              <div>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="workGridImg"
                />
                <p className="title"> {project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
