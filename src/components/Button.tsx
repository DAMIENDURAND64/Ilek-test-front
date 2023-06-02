import { ButtonProps } from "../type";

const Button = ({ type, label, onClick, disabled, children }: ButtonProps) => {
  return (
    <button
      type={type}
      className={
        disabled
          ? "border border-gray-700 bg-gray-200 px-2 py-1 rounded-lg w-fit"
          : "border border-green-700 bg-green-200 px-2 py-1 rounded-lg w-fit"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children} {label}
    </button>
  );
};

export default Button;
