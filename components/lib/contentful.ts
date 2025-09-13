import { Asset, createClient, EntryCollection, EntrySkeletonType } from 'contentful';

export type CfAsset = Asset<any, any>;

export type Props = { projects: ProjectSkeleton[] };

export type ProjectFields = {
  order: number;
  title: string;
  slug: string;
  thumbnail: CfAsset;     
  gallery?: CfAsset[];
};

export type ProjectSkeleton = EntrySkeletonType & {
  contentTypeId: "project";
  fields: ProjectFields;
};

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("Contentful environment variables are not set");
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getEntries<T extends EntrySkeletonType>(
  contentType: string,
  query: Record<string, any> = {}
): Promise<EntryCollection<T>["items"]> {
  const entries = await client.getEntries<T>({
    content_type: contentType,
    ...query,
  });
  return entries.items;
}
