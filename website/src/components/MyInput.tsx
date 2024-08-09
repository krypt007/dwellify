import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;   

}

export function MyInput({ error, className, ...props }: InputProps) {
  return (
    <div className="relative">
      <Input
        className={cn(
          "border-gray-300 focus:border-primary",
          error ? "border-red-500" : null,
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-500 absolute bottom-full left-0 text-xs">
          {error.message}
        </p>
      )}
    </div>
  );
}