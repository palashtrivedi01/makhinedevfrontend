import React from "react";
import type { LucideIcon } from "lucide-react";
import Button from "./Button";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count?: number;
  buttonText?: string;
  onButtonClick?: () => void;
  classes?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  count,
  buttonText,
  onButtonClick,
  classes,
}) => {
  return (
    <div className={` shadow-md rounded-xl p-4 flex flex-col flex-start gap-4 w-76  hover:shadow-lg transition ${classes}`}>
      
      <div className="flex flex-col items-start gap-3">
        
        <div className="flex flex-col gap-2">
          
          <div className="w-full flex flex-row items-center justify-between gap-2 mr-auto">

            <div className="p-2 bg-orange-400 rounded-lg">
              <Icon className="w-8 h-8 text-white" />
            </div>

            {count !== undefined && (
              <span className="text-xl font-bold text-gray-600">{count}</span>
            )}
          
          </div>
          <h3 className="text-md font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        
        </div>
      
      </div>

      {buttonText && (
        <Button
          onClick={onButtonClick ?? (() => {})}
          label={buttonText}
        />
      )}
      
    </div>
  );
};

export default Card;
