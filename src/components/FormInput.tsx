import { FC } from "react";

interface IFormInput {
    id: string,
    name: string,
    label: string,
    type: 'text' | 'email'
    value: string,
    placeholder: string,
    onChange: any,
    error: undefined | boolean,
    helperText: string | undefined | boolean,
}

export const FormInput: FC<IFormInput> = ({
  id, name, label, type, value, placeholder, onChange, error, helperText,
}) => {
  return (
    <>
      <label
        htmlFor={id} className="mb-2 text-caption1 font-inter text-grey-300"
      >
        {label}
      </label>
      <input 
        type={type} 
        id={id} 
        value={value} 
        name={name}
        onChange={onChange}
        placeholder={placeholder} 
        className="p-4 rounded-lg border-gray-300 text-[#6B7280] mb-7" 
      />
      {error && <div>{helperText}</div>}
    </>
  );
};