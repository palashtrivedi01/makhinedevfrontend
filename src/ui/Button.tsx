interface ButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-fit px-8 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-2xl transition ${className}`}
    >
      {label}
    </button>
  );
}
