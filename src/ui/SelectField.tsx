import { ChevronDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

interface SelectFieldProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  renderPrefix?: React.ReactNode;
}

export default function SelectField({
  label,
  value,
  options,
  onChange,
  renderPrefix,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-64">
      <label className="text-md font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-yellow-400 rounded-md px-3 py-2 pr-8 focus:outline-none"
        >
          <option value="">{`Select ${label}`}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        {renderPrefix && (
          <span className="absolute left-2 top-1/2 -translate-y-1/2">
            {renderPrefix}
          </span>
        )}
      </div>
    </div>
  );
}
