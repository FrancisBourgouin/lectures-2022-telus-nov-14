// CityForm (state: formData props: fetchWeatherForCity )

import useFormData from "../hooks/useForm";

export default function CityForm(props) {
  const initialValues = {
    name: "",
  };
  const { formData, handleSubmit, handleChange } = useFormData(
    initialValues,
    props.onSubmit
  );

  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Enter a city name"
        value={formData.name}
        onChange={handleChange}
      />
      <button>Fetch Weather</button>
    </form>
  );
}
