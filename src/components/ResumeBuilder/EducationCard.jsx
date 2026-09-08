import EducationInputs from "./EducationInputs";
import TemplateCard from "./TemplateCard";

export default function EducationCard({
  educations,
  handleAdd,
  handleRemove,
  onInputChange,
}) {
  return (
    <TemplateCard
      icon={"school"}
      title={"Education"}
      addPos={true}
      onAdd={handleAdd}
    >
      {educations.map((edu) => (
        <EducationInputs
          key={edu.id}
          id={edu.id}
          school={edu.school}
          degree={edu.degree}
          date={edu.date}
          description={edu.description}
          onInputChange={onInputChange}
          onRemove={() => handleRemove(edu.id)}
        />
      ))}
    </TemplateCard>
  );
}
