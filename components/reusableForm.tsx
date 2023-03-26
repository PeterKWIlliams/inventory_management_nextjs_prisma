import React, { useState } from "react";
type FormValue = string | number | Date;
interface InputField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

interface ReusableFormProps {
  fields: InputField[];
  onSubmit: (data: Record<string, FormValue>) => void;
}

const ReusableForm: React.FC<ReusableFormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, FormValue>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={field.name}
            className="mb-1 block text-sm font-medium"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            className="w-full rounded border p-2"
            onChange={handleChange}
          />
        </div>
      ))}
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default ReusableForm;
