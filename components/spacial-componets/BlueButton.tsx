import React from "react";

interface BlueButtonProps {
  children?: React.ReactNode;
}

const BlueButton = ({ children }: BlueButtonProps) => {
  return (
    <div className="bg-gradient-to-b from-blue-800/40 to-transparent p-[4px] rounded-[16px]">
      <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-blue-700 to-blue-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-[8px] px-3 py-2">
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-white">
              {children ? children : "Get Started"}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default BlueButton;
