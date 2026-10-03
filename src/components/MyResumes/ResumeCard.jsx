import ResumeCardMenu from "./ResumeCardMenu";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeCard({
  data,
  removeCard,
  modifyCardTitle,
  handleActiveCV,
  activeCV,
}) {
  const navigate = useNavigate();
  const initialTitle = data.resumeName;
  const [newTitle, setNewTitle] = useState(initialTitle);
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef(null);

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
      className={`flex flex-col bg-surface-container-lowest rounded-xl  shadow-sm overflow-hidden h-full relative ${
        activeCV && activeCV.id === data.id
          ? "border-2 border-secondary/80"
          : "border border-outline-variant/80 hover:border-outline-variant"
      }`}
    >
      <div className="p-5 flex flex-col grow">
        <div className="flex items-start justify-between gap-2 mb-2">
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
                <span className="material-symbols-outlined text-[16px]! text-secondary">
                  check
                </span>
              </button>
              <button
                className="p-1 hover:bg-surface-container transition-colors"
                onClick={cancelTitleEdit}
              >
                <span className="material-symbols-outlined text-[16px]! text-error">
                  close
                </span>
              </button>
            </div>
          ) : (
            <button
              className="text-on-surface-variant hover:text-secondary transition-colors p-1 -mr-1"
              onClick={() => setIsEditable(true)}
            >
              <span className="material-symbols-outlined text-[16px]!">
                edit
              </span>
            </button>
          )}
        </div>
        <div className="flex flex-col xs:flex-row gap-4 xs:gap-2 text-xs text-on-surface-variant mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]!">
                calendar_today
              </span>
              Updated {data.lastEdit}
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
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm text-on-surface truncate">
              {data.fullName}
            </span>
          </div>
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
              <span className="material-symbols-outlined text-[14px]!">
                edit_note
              </span>
              Build
            </button>
            <button
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs rounded-lg border border-outline-variant/60 transition-colors flex-1 font-medium"
              href="#"
            >
              <span className="material-symbols-outlined text-[14px]!">
                download
              </span>
              Export
            </button>
          </div>
          <ResumeCardMenu deleteFunc={() => removeCard(data.id)} />
        </div>
      </div>
    </div>
  );
}
