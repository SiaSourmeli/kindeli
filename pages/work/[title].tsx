import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/layout";
import projectsGrid from "../../data/projects.json";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

interface Project {
  id: number;
  title: string;
  thumbnail: string;
  images: { url: string; width: number; height: number }[];
}

const projects: Project[] = projectsGrid.projects;

export default function ProjectPage() {
  const router = useRouter();
  const { title } = router.query;
  const project = projects.find((proj) => proj.title === title);

  if (!project) {
    return <div>Project not found</div>;
  }

  const photos = project.images.map((image) => ({
    src: image.url,
    width: image.width,
    height: image.height,
  }));

  return (
    <Layout>
      <div className="projectWrap">
        <MasonryPhotoAlbum
        photos={photos}
        spacing={80}
        columns={(containerWidth) => {
          if (containerWidth < 900) {
            return 1;
          } else {
            return 2;
          }
        }}
      />
      </div>
      
    </Layout>
  );
}
