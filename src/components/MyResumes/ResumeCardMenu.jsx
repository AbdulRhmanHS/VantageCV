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
import { EllipsisVertical, Trash } from "lucide-react";

export default function ResumeCardMenu({ deleteFunc }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
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

  const onDelete = () => {
    deleteFunc();
    setIsOpen(false);
  };

  return (
    <>
      <button
        ref={(node) => refs.setReference(node)}
        {...getReferenceProps({
          onClick: () => setIsOpen(!isOpen),
        })}
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded hover:bg-surface-container flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <EllipsisVertical size={18} />
      </button>
      {isMounted &&
        createPortal(
          <div
            ref={(node) => refs.setFloating(node)}
            style={{ ...floatingStyles }}
            {...getFloatingProps()}
            className="z-99"
          >
            <div
              style={transitionStyles}
              className="bg-on-primary-container outline-1 outline-surface-dim rounded-md p-1.5 flex flex-col justify-center shadow-md origin-top"
            >
              <button
                onClick={onDelete}
                className="flex hover:bg-inverse-on-surface rounded-lg py-1.5 px-3.5 select-none transition-colors ease-in-out text-xs w-full text-error"
              >
                <Trash size={12} className="mr-1.5" />
                Delete
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
