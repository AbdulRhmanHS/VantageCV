import ExperienceInputs from "./ExperienceInputs";
import TemplateCard from "./TemplateCard";

export default function ExperienceCard({
  experiences,
  handleAdd,
  handleRemove,
  onInputChange,
}) {
  return (
    <TemplateCard
      icon={"work"}
      title={"Experience"}
      addPos={true}
      onAdd={handleAdd}
    >
      {experiences.map((exp) => (
        <ExperienceInputs
          key={exp.id}
          id={exp.id}
          title={exp.title}
          date={exp.date}
          company={exp.company}
          description={exp.description}
          onInputChange={onInputChange}
          onRemove={() => handleRemove(exp.id)}
        />
      ))}
    </TemplateCard>
  );
}
