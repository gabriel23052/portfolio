import classes from "./ProjectGallery.module.css";

type Props = {
  projectTitle: string;
  imagesUrl: string[];
};

const ProjectGallery = ({ projectTitle, imagesUrl }: Props) => {
  return (
    <ul className={classes.container} aria-label="Imagens do projeto">
      {imagesUrl.map((img, i) => (
        <li className={classes.item} key={`${img}-${i}`}>
          <img
            className={classes.image}
            src={img}
            alt={`Imagem ${i + 1} do projeto: ${projectTitle}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectGallery;
