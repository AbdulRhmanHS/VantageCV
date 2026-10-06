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

export default function FloatingMenu({ children, menuButtons }) {
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

  const triggerProps = getReferenceProps({
    ref: refs.setReference,
    onClick: (e) => {
      e?.stopPropagation();
      setIsOpen(!isOpen);
    },
  });

  const buttonWidth = refs.domReference.current?.getBoundingClientRect().width;

  return (
    <>
      {typeof children === "function" ? children(triggerProps) : null}

      {isOpen &&
        createPortal(
          <div
            ref={(node) => refs.setFloating(node)}
            style={{
              ...floatingStyles,
              width: buttonWidth ? `${buttonWidth}px` : undefined,
            }}
            {...getFloatingProps()}
            className={`bg-surface rounded-md p-1.5 z-99 flex flex-col justify-center shadow-md outline-1 outline-surface-dim`}
          >
            {menuButtons.map((btn, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  btn.clickEvent();
                }}
                className="flex hover:bg-surface-container rounded-lg py-1.5 px-3.5 select-none transition-colors ease-in-out text-[12px] w-full"
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
