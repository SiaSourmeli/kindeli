import Link from "next/link";
import Image from "next/image";
import styles from "./archive-grid.module.css";
import { Props } from "../lib/contentful";

export default function ArchiveGrid({ projects }: Props) {
  return (
     <div className={`${styles.workGrid} container`}>
      {projects.map((project, i) => {

      const thumbUrl =
          project.fields.thumbnail.fields?.file?.url
            ? `https:${project.fields.thumbnail.fields.file.url}`
            : null;

        return (
          <Link
            className={styles.workGridItem}
            key={i}               
            href={`/work/${project.fields.slug}`}              
          >
            {thumbUrl && (
              <Image
                src={thumbUrl}                
                alt={project.fields.title}
                width={400}
                height={300}
                priority={i === 0}
                className={styles.workGridImg}
              />
            )}
    
            <p className={styles.title}>{project.fields.title}</p> 
          </Link>
        );
      })}
    </div>
  );
}
