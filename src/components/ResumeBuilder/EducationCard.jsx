import EducationInputs from "./EducationInputs";
import TemplateCard from "./TemplateCard";
import { useState } from "react";

export default function Education() {
  const [fields, addField] = useState([{ id: crypto.randomUUID() }]);

  const handleAdd = () => {
    addField((prev) => [...prev, { id: crypto.randomUUID() }]);
  };

  const handleRemove = (idToRemove) => {
    addField((prev) => prev.filter((item) => item.id !== idToRemove));
  };

  return (
    <TemplateCard
      icon={"school"}
      title={"Education"}
      addPos={true}
      onAdd={handleAdd}
    >
      {fields.map((field) => (
        <EducationInputs
          key={field.id}
          onRemove={() => handleRemove(field.id)}
        />
      ))}
    </TemplateCard>
  );
}
