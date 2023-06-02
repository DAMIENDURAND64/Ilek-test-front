import { ButtonProps } from "../type";

const Button = ({ type, label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      className={
        disabled
          ? "border border-gray-700 bg-gray-200 p-3 rounded-full w-fit"
          : "border border-green-700 bg-green-200 p-3 rounded-full w-fit"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
