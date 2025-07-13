import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input, InputProps } from "@/components/ui/input";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle } from "lucide-react";

interface BaseFormFieldProps {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  required?: boolean;
  className?: string;
}

interface InputFormFieldProps extends BaseFormFieldProps {
  type: "input";
  inputProps?: InputProps;
}

interface TextareaFormFieldProps extends BaseFormFieldProps {
  type: "textarea";
  textareaProps?: TextareaProps;
}

interface SelectFormFieldProps extends BaseFormFieldProps {
  type: "select";
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

type FormFieldProps = InputFormFieldProps | TextareaFormFieldProps | SelectFormFieldProps;

const FormField = React.memo((props: FormFieldProps) => {
  const { label, error, success, helperText, required, className } = props;
  const id = React.useId();

  const renderField = () => {
    switch (props.type) {
      case "input":
        return (
          <Input
            id={id}
            error={!!error}
            aria-invalid={!!error}
            aria-describedby={helperText || error ? `${id}-description` : undefined}
            {...props.inputProps}
          />
        );
      
      case "textarea":
        return (
          <Textarea
            id={id}
            error={!!error}
            aria-invalid={!!error}
            aria-describedby={helperText || error ? `${id}-description` : undefined}
            {...props.textareaProps}
          />
        );
      
      case "select":
        return (
          <Select value={props.value} onValueChange={props.onValueChange}>
            <SelectTrigger
              id={id}
              className={cn(error && "border-destructive focus:ring-destructive")}
              aria-invalid={!!error}
              aria-describedby={helperText || error ? `${id}-description` : undefined}
            >
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {props.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      
      {renderField()}
      
      {(helperText || error) && (
        <div
          id={`${id}-description`}
          className={cn(
            "text-sm flex items-start gap-1.5",
            error ? "text-destructive" : success ? "text-success" : "text-muted-foreground"
          )}
        >
          {error && <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
          {success && !error && <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />}
          <span>{error || helperText}</span>
        </div>
      )}
    </div>
  );
});

FormField.displayName = "FormField";

export { FormField };
export type { FormFieldProps };