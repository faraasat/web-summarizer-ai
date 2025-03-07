import { FC, ReactNode } from "react";

const WordGlower: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500 animate-pulse px-1">
      {children}
    </span>
  );
};

export default WordGlower;
