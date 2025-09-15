interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="my-1 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-2xl transition"
    >
      {label}
    </button>
  );
}
