'use client'

import { useState } from "react";
import { CgChevronUpO } from "react-icons/cg";
import { CgChevronDownO } from "react-icons/cg";

type QuestionProps = {
  title: string,
  content: string,
}

function Question({ title, content}: QuestionProps) {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? 'display' : 'hidden';
  const ansClass = `${expandClass} p-4`

  return (
    <>
      <div className="shadow rounded border border-gray-100" onClick={() => setExpand(!expand)}>
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">
            {title}
          </div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? 
              <CgChevronUpO />
              :
              <CgChevronDownO />
            }
          </button>
        </div>
        <div className={ansClass}>
          {content}
        </div>
      </div>
    </>
  )
}

export default Question;