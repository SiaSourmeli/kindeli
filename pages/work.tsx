import Layout from "../components/layout";
import ArchiveGrid from "../components/archive-grid/archive-Grid";
import { getEntries, Props } from "../components/lib/contentful";

export async function getStaticProps() {
  const projects = await getEntries("project", {
    content_type: "project",
    order: ["fields.order"],
  });
  return {
    props: {
      projects,
    },
  };
}

export default function Work({ projects }: Props) {
  return (
    <Layout>
      {(!projects || projects.length === 0) && <p>Content coming soon...</p>}
      <ArchiveGrid projects={projects} />
    </Layout>
  );
}
