import { useState } from "react";
import { createPortal } from "react-dom";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";

export default function ResumeCardMenu({ deleteFunc }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [offset(6), flip(), shift()],
  });

  const onDelete = () => {
    deleteFunc();
    setIsOpen(false);
  };

  return (
    <>
      <button
        ref={(node) => refs.setReference(node)}
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded hover:bg-surface-container flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-[18px]!">
          more_vert
        </span>
      </button>
      {isOpen &&
        createPortal(
          <div
            ref={(node) => refs.setFloating(node)}
            style={{ ...floatingStyles }}
            className="bg-surface-container-high rounded-md min-w-24 p-1.5 z-99 flex justify-center"
          >
            <button
              onClick={onDelete}
              className="flex items-center hover:bg-surface-dim rounded-lg py-1.5 px-3.5 select-none transition-colors ease-in-out text-error text-[12px]"
            >
              <span className="material-symbols-outlined text-[12px]! mr-1.5">
                delete
              </span>
              Delete
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
