import ExperienceInputs from "./ExperienceInputs";
import TemplateCard from "./TemplateCard";
import { useState } from "react";

export default function Experience() {
  const [fields, addField] = useState([{ id: crypto.randomUUID() }]);

  const handleAdd = () => {
    addField((prev) => [...prev, { id: crypto.randomUUID() }]);
  };

  const handleRemove = (idToRemove) => {
    addField((prev) => prev.filter((items) => items.id !== idToRemove));
  };

  return (
    <TemplateCard
      icon={"work"}
      title={"Experience"}
      addPos={true}
      onAdd={handleAdd}
    >
      {fields.map((field) => (
        <ExperienceInputs
          key={field.id}
          onRemove={() => handleRemove(field.id)}
        />
      ))}
    </TemplateCard>
  );
}
