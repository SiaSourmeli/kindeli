import Layout from "../../components/layout";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { getEntries, ProjectSkeleton } from "../../components/lib/contentful";
import { AssetDetails } from "contentful";

export async function getStaticPaths() {
  const items = await getEntries("project", {
    content_type: "project",
    include: 0,
    limit: 1000,
  });
  const paths = items
    .map((p) => p.fields.slug)
    .filter(Boolean)
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params,
}: {
  params?: { slug?: string };
}) {
  const slug = params?.slug || "";
  const items = await getEntries("project", {
    content_type: "project",
    "fields.slug": slug,
    include: 2,
    limit: 1,
  });

  const project = items[0] ?? null;

  if (!project) {
    return { notFound: true, revalidate: 60 };
  }

  return {
    props: { project },
    revalidate: 60,
  };
}

export default function ProjectPage({ project }: { project: ProjectSkeleton }) {
  if (!project) return <Layout>Project not found</Layout>;

  type Photo = { src: string; width: number; height: number; alt: string };

  const title = project.fields.title;

  const photos: Photo[] = project.fields.gallery
  ? project.fields.gallery
      .map((asset) => {
        const file = asset?.fields?.file;
        const url = file?.url;
        const fileDetails = file?.details as AssetDetails | undefined;
        const width = fileDetails?.image?.width;
        const height = fileDetails?.image?.height;

        if (!url || !width || !height || !fileDetails?.image) return null;
   
        return {
          src: url,
          alt: asset.fields?.title ?? "image",
          width,
          height
        };
      })
      .filter((photo): photo is Photo => photo !== null)
  : [];

  return (
    <Layout>
      <div className="project-container ">
        <MasonryPhotoAlbum
          photos={photos}
          spacing={5}
          columns={(containerWidth) => {
            if (containerWidth < 900) {
              return 1;
            } else {
              return 2;
            }
          }}
        />
      </div>

      <div className="title-container">
        <h1>{title}</h1>
      </div>
    </Layout>
  );
}
