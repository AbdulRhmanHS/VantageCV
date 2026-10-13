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

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: {
      opacity: 0,
      transform: "scale(0.95) translateY(-4px)",
    },
  });

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

      {isMounted &&
        createPortal(
          <div
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
