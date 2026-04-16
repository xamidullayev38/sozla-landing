import React from "react";

export default function Button({
  bg = "#65B741",
  borderColor = "#519234",
  children,
}) {
  return (
    <button
      style={{
        backgroundColor: bg,
        "--border-color": borderColor, // 🔥 MUHIM
      }}
      className="
        px-5 py-2
        rounded-full
        text-white font-medium
        
        shadow-[0_4px_0_0_var(--border-color)]
        active:shadow-[0_1px_0_0_var(--border-color)]
        
        active:translate-y-[3px]
        
        transition-all duration-150
      "
    >
      {children}
    </button>
  );
}