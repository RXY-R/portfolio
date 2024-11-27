"use client";
import { useState } from "react";
import "./education.css";

export default function Education({ img, name, more_info, date }) {
  const [InHovering, setInHovering] = useState(false);
  
  return (
    <div
      className="cursor-pointer max-[420px]w-[624px] h-[48px] flex"
      onMouseEnter={() => setInHovering(true)}
      onMouseLeave={() => setInHovering(false)}
    >
      <div className="edu_info_container">
        <img src={img} />
        <div className="edu_details_container">
          <div className="flex items-center text-base">
            <h1>{name}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#FFF"
              stroke="#000"
              className={`edu_svg ${InHovering ? "hovered" : ""}`}
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>
          <p>{more_info}</p>
        </div>
      </div>

      <div className="date_container">
        <h1>{date}</h1>
      </div>
    </div>
  );
}
