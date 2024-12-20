"use client";

import React, { useEffect, useRef, useState } from "react";
import { GrCommand } from "react-icons/gr";

const SearchInput = ({
  query,
  placeholder,
}: {
  query?: string;
  placeholder: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input field
  const [os, setOs] = useState<string>(""); // State to store the user's OS

  useEffect(() => {
    // Check if the user is on a Mac or Windows
    if (navigator.platform.indexOf("Mac") !== -1) {
      setOs("mac");
    } else if (navigator.platform.indexOf("Win") !== -1) {
      setOs("windows");
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows)
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Check for Escape key press to blur the input field
      if (e.key === "Escape") {
        e.preventDefault();
        inputRef.current?.blur();
      }
    };

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <input
        ref={inputRef}
        defaultValue={query}
        name="query"
        placeholder={placeholder}
        className="search-input focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
      />

      <div className="search-icon">
        {os === "mac" ? (
          <>
            <GrCommand size={15} className="mr-1" />
            {" + K"}
          </>
        ) : os === "windows" ? (
          <>{"Ctrl + K"}</>
        ) : null}
      </div>
    </>
  );
};

export default SearchInput;
