import { FieldErrors } from "react-hook-form";

interface FormErrorProps {
  errors: FieldErrors;
}

export function FormError({ errors }: FormErrorProps) {
  return (
    <div className="text-red-500">
      {Object.keys(errors).length > 0 && (
        <p>Please correct the errors below:</p>
      )}
      {/* You can add more specific error handling here */}
    </div>
  );
}
