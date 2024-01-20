import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

export interface OptionProps {
  value: string | number | readonly string[] | undefined;
  label: string;
}

export interface InputProps {
  name: string;
  type?: string;
  attributes?: any;
  label?: string;
  placeholder?: string;
  className?: string;
  container?: string;
  options?: OptionProps[];
  columns?: InputProps[];
}

export interface FieldProps {
  item: InputProps;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  hideError?: boolean;
}

const Field = ({
  item,
  register,
  errors,
  hideError,
}: FieldProps) => {
  function accessNestedField(obj: any, path: string) {
    const keys = path.match(/\w+/g); // Match words and ignore brackets
    let currentObj: any = obj;

    if (keys)
      for (const key of keys) {
        if (currentObj?.hasOwnProperty(key) || Array.isArray(currentObj)) {
          currentObj = currentObj[key];
        } else {
          return undefined;
        }
      }

    return currentObj;
  }

  const errorObject = accessNestedField(errors, item.name);
  const error = errorObject?.message?.toString();
  const border = error && hideError ? "border-red-300" : "border-border";

  return (
    <div className={item.container ? item.container : "w-full"}>
      {item.label && (
        <label htmlFor={item.name} className="text-[13px]">
          {item.label}
        </label>
      )}
      <div
        className={`inputContainer ${border} mb-0`}
      >
        <input
          type={item.type}
          id={item.name}
          placeholder={item.placeholder}
          {...register(item.name)}
          {...item.attributes}
          className={`formInput ${item.className} bg-transparent`}
        />
      </div>
      {error && !hideError && <span className={`formError`}>{error}</span>}
    </div>
  );
};

export default Field;
