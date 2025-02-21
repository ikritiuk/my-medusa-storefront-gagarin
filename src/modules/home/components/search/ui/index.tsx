import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  minWidth?: string;
}

const Input = ({ icon, minWidth, className, ...props }: InputProps) => {
  return (
    <div className={`relative flex items-center ${minWidth || ""}`}>
      {icon && <span className="absolute left-3">{icon}</span>}
      <input
        {...props}
        className={`pl-8 pr-3 py-2 border rounded-md w-full ${className}`}
      />
    </div>
  );
};

export default Input;
