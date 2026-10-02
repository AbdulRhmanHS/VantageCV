import { useState, useRef, useEffect } from "react";
import ResumeCardMenu from "./ResumeCardMenu";
import { useNavigate } from "react-router-dom";

export default function ResumeCard({
  data,
  removeCard,
  modifyCardTitle,
  handleActiveCV,
  activeCV,
}) {
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState(data.resumeName);
  const [isEditable, setIsEditable] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditable]);

  const editTitle = (e) => {
    setNewTitle(e.target.value);
    modifyCardTitle(data.id, e.target.value);
  };

  return (
    <div
      className={`flex flex-col bg-surface-container-lowest rounded-xl  shadow-sm overflow-hidden h-full transition-all hover:shadow-md relative ${
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
              value={newTitle}
              onChange={(e) => editTitle(e)}
              onBlur={() => setIsEditable(false)}
            />
          ) : (
            <h3 className="font-semibold text-base text-on-surface tracking-tight truncate flex-1">
              {data.resumeName}
            </h3>
          )}
          {/* TODO: Add buttons to accept the edit or cancel it */}
          <button
            className="text-on-surface-variant hover:text-secondary transition-colors p-1 -mr-1"
            onClick={() => setIsEditable(true)}
          >
            <span className="material-symbols-outlined text-[16px]!">edit</span>
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-xs text-on-surface-variant mb-4">
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]!">
              calendar_today
            </span>
            Updated {data.lastEdit}
          </span>
          <span className="text-outline-variant">•</span>
          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-surface-container text-[11px] font-medium text-on-surface-variant">
            {data.lang}
            <span className="material-symbols-outlined text-[12px]!">
              expand_more
            </span>
          </span>
          {activeCV && activeCV.id === data.id && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-[11px] font-semibold ml-auto">
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
