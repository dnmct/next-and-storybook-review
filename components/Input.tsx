import { HTMLAttributes } from "react";

type SelectProps =
  | {
      type: "select";
      options: string[];
    }
  | {
      type: "text" | "checkbox" | "radio";
      options?: never;
    };

type Props = {
  title: string;
} & HTMLAttributes<HTMLInputElement> &
  SelectProps;

export const Input = ({ title, id, type, options, ...props }: Props) => {
  if (type !== "select") {
    return (
      <label
        htmlFor={id}
        style={{ display: "flex", gap: "1rem", alignItems: "center" }}
      >
        {title}
        <input {...props} id={id} type={type} style={{ padding: "0.5rem" }} />
      </label>
    );
  } else {
    return (
      <select name={id} id={id} placeholder={title}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    );
  }
};
