import { Reorder } from "framer-motion";
import ExperienceInputs from "./ExperienceInputs";
import TemplateCard from "./TemplateCard";

export default function ExperienceCard({
  experiences,
  handleAdd,
  handleRemove,
  onInputChange,
  setExperiences,
}) {
  return (
    <TemplateCard
      icon={"work"}
      title={"Experience"}
      addPos={true}
      onAdd={handleAdd}
    >
      <Reorder.Group axis="y" values={experiences} onReorder={setExperiences}>
        {experiences.map((exp) => (
          <ExperienceInputs
            key={exp.id}
            exp={exp}
            id={exp.id}
            title={exp.title}
            date={exp.date}
            company={exp.company}
            description={exp.description}
            onInputChange={onInputChange}
            onRemove={() => handleRemove(exp.id)}
          />
        ))}
      </Reorder.Group>
    </TemplateCard>
  );
}
