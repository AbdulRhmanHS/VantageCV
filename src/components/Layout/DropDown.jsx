// DONE: Apply the new floating ui to the dropdown menu

import { useState } from "react";
import { createPortal } from "react-dom";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useDismiss,
  useInteractions,
} from "@floating-ui/react";

export default function DropDown({ label, currentSelect, menuButtons }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom",
    whileElementsMounted: autoUpdate,
    middleware: [offset(6), flip(), shift()],
  });

  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const buttonWidth = refs.domReference.current?.getBoundingClientRect().width;

  return (
    <>
      {/* Reference */}
      <label
        htmlFor="drop-down"
        className="block text-xs font-semibold text-on-primary-fixed uppercase tracking-wide"
      >
        {label}
      </label>
      <div
        ref={(node) => refs.setReference(node)}
        onClick={(e) => {
          e?.stopPropagation();
          setIsOpen(!isOpen);
        }}
        {...getReferenceProps()}
        className="bg-surface outline-1 outline-surface-dim hover:bg-inverse-on-surface transition-colors flex items-center justify-between gap-2 min-w-28 p-2 rounded-md"
      >
        <p className="block text-xs text-on-primary-fixed first-letter:uppercase select-none">
          {currentSelect}
        </p>
        <span className="material-symbols-outlined  pointer-events-none text-slate-400 text-[20px]!">
          expand_more
        </span>
      </div>
      {/* Floating Menu */}
      {isOpen &&
        createPortal(
          <div
            id="drop-down"
            ref={(node) => refs.setFloating(node)}
            style={{
              ...floatingStyles,
              width: buttonWidth ? `${buttonWidth}px` : undefined,
            }}
            {...getFloatingProps()}
            className="bg-on-primary-container outline-1 outline-surface-dim rounded-md p-1.5 z-99 flex flex-col justify-center shadow-md"
          >
            {menuButtons.map((btn, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  btn.clickEvent();
                }}
                className="flex hover:bg-inverse-on-surface rounded-lg py-1.5 px-3.5 select-none transition-colors ease-in-out text-xs w-full"
              >
                {btn.name}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}
