import { ABOUT_DATA } from "@/data/about";
import ColorfulTitle from "../../../components/ColorfulTitle";

const Sobre = () => {
  return (
    <div className="flex flex-col justify-center p-32 text-white">
      <ColorfulTitle colors={["#FF4D4F", "#DB2B39"]} text={ABOUT_DATA.title} />
      {ABOUT_DATA.description}
      {ABOUT_DATA.projects.map((project) => (
        <div key={project.title}>
          <h2 className="text-2xl font-bold text-left mt-8">{project.title}</h2>
          <p>{project.description}</p>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sobre;
