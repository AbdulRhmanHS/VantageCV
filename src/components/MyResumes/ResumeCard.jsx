import ResumeCardMenu from "./ResumeCardMenu";
import FloatingMenu from "../Layout/FloatingMenu";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarCog,
  Check,
  Download,
  FilePenLine,
  Pencil,
  X,
} from "lucide-react";

export default function ResumeCard({
  data,
  removeCard,
  modifyCardTitle,
  PDFExport,
  JSONExport,
  handleActiveCV,
  activeCV,
}) {
  const navigate = useNavigate();
  const initialTitle = data.resumeName;
  const [newTitle, setNewTitle] = useState(initialTitle);
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef(null);
  const exportMenuButtons = [
    { name: "PDF", clickEvent: () => PDFExport(data) },
    { name: "JSON", clickEvent: () => JSONExport(data) },
  ];

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditable]);

  const applyTitleEdit = () => {
    newTitle ? modifyCardTitle(data.id, newTitle) : setNewTitle(initialTitle);
    setIsEditable(false);
  };

  const cancelTitleEdit = () => {
    setNewTitle(initialTitle);
    setIsEditable(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") applyTitleEdit();
    if (e.key === "Escape") cancelTitleEdit();
  };

  return (
    <div
      className={`flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden h-full relative ${
        activeCV && activeCV.id === data.id
          ? "outline-2 outline-secondary/80"
          : "border border-outline-variant/80"
      }`}
    >
      <div className="p-5 flex flex-col grow">
        <div className="flex items-start justify-between gap-2 mb-4">
          {isEditable ? (
            <input
              ref={inputRef}
              type="text"
              className="outline-secondary/80 font-semibold text-base text-on-surface tracking-tight flex-1 min-w-0"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <h3 className="font-semibold text-base text-on-surface tracking-tight truncate flex-1">
              {data.resumeName}
            </h3>
          )}
          {/* DONE: Add buttons to accept the edit or cancel it */}
          {isEditable ? (
            <div className="flex items-center gap-0.5 xs:gap-2">
              <button
                className="p-1 hover:bg-surface-container transition-colors"
                onClick={applyTitleEdit}
              >
                <Check size={16} className="text-secondary" />
              </button>
              <button
                className="p-1 hover:bg-surface-container transition-colors"
                onClick={cancelTitleEdit}
              >
                <X size={16} className="text-error" />
              </button>
            </div>
          ) : (
            <button
              className="text-on-surface-variant hover:text-secondary transition-colors p-1 -mr-1"
              onClick={() => setIsEditable(true)}
            >
              <Pencil size={16} />
            </button>
          )}
        </div>
        <div className="flex flex-col xs:flex-row gap-4 xs:gap-2 text-xs text-on-surface-variant mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <CalendarCog size={14} />
              {data.lastEdit}
            </span>
            <span className="text-outline-variant">•</span>
            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-surface-container text-[11px] font-medium text-on-surface-variant">
              {data.lang}
            </span>
          </div>
          {activeCV && activeCV.id === data.id && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[11px] font-semibold mr-auto xs:ml-auto xs:mr-0">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Active
            </span>
          )}
        </div>
        <div className="bg-surface-container-low/60 rounded p-3 mb-3 border border-outline-variant/30">
          <div className="flex flex-col-reverse items-start xs:flex-row xs:items-center xs:justify-between gap-2">
            <span className="font-semibold text-sm text-on-surface truncate text-wrap">
              {data.fullName}
            </span>
            <span className="text-[11px] px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant">
              {data.sections} sections
            </span>
          </div>
          <p className="text-xs text-on-surface-variant truncate">{data.job}</p>
        </div>
        <div className="mt-auto pt-3 border-t border-outline-variant/40 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1">
            <button
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-primary text-on-primary hover:bg-on-surface font-label-md text-xs rounded-lg transition-colors shadow-sm flex-1 font-medium"
              onClick={() => {
                handleActiveCV(data.id);
                navigate("/builder");
              }}
            >
              <FilePenLine size={14} />
              Build
            </button>
            <FloatingMenu menuButtons={exportMenuButtons}>
              {(triggerProps) => (
                <button
                  {...triggerProps}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs rounded-lg border border-outline-variant/60 transition-colors flex-1 font-medium"
                >
                  <Download size={14} />
                  Export
                </button>
              )}
            </FloatingMenu>
          </div>
          <ResumeCardMenu deleteFunc={() => removeCard(data.id)} />
        </div>
      </div>
    </div>
  );
}
