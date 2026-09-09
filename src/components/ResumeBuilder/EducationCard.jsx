import { Reorder } from "framer-motion";
import EducationInputs from "./EducationInputs";
import TemplateCard from "./TemplateCard";

export default function EducationCard({
  educations,
  handleAdd,
  handleRemove,
  onInputChange,
  setEducations,
}) {
  return (
    <TemplateCard
      icon={"school"}
      title={"Education"}
      addPos={true}
      onAdd={handleAdd}
    >
      <Reorder.Group axis="y" values={educations} onReorder={setEducations}>
        {educations.map((edu) => (
          <EducationInputs
            key={edu.id}
            edu={edu}
            id={edu.id}
            school={edu.school}
            degree={edu.degree}
            date={edu.date}
            description={edu.description}
            onInputChange={onInputChange}
            onRemove={() => handleRemove(edu.id)}
          />
        ))}
      </Reorder.Group>
    </TemplateCard>
  );
}
