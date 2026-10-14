// DONE: Apply the new floating ui to the dropdown menu
// DONE: Make a better transition when the menu opens and closes

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
  useTransitionStyles,
} from "@floating-ui/react";
import { ChevronDown } from "lucide-react";

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

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: {
      opacity: 0,
      transform: "scale(0.95) translateY(-4px)",
    },
  });

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
        className="bg-surface outline-1 outline-surface-dim hover:bg-inverse-on-surface transition-colors flex items-center justify-between gap-2 min-w-28 p-2 rounded-md select-none"
      >
        <p className="block text-xs text-on-primary-fixed first-letter:uppercase">
          {currentSelect}
        </p>
        <ChevronDown size={20} className="pointer-events-auto text-slate-400" />
      </div>
      {/* Floating Menu */}
      {isMounted &&
        createPortal(
          <div
            id="drop-down"
            ref={(node) => refs.setFloating(node)}
            style={{
              ...floatingStyles,
              width: buttonWidth ? `${buttonWidth}px` : undefined,
            }}
            {...getFloatingProps()}
            className="z-99"
          >
            <div
              style={transitionStyles}
              className="bg-on-primary-container outline-1 outline-surface-dim rounded-md p-1.5 flex flex-col justify-center shadow-md origin-top"
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
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
