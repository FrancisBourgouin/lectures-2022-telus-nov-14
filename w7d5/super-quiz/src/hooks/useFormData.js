import { useState } from "react";

export default function useFormData(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
    setFormData(initialValues);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    // const updatedFormData = {...formData}
    // updatedFormData[name] = value

    // setFormData(updatedFormData)

    setFormData({ ...formData, [name]: value });
  };

  return { formData, handleSubmit, handleChange };
}
