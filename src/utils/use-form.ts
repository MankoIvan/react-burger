import { useState } from "react";

export const useForm = <T extends Record<string, string>>(defaultValues: T) => {
  const [values, setValues] = useState<T>(defaultValues);

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return { values, handleValues, setValues };
};
