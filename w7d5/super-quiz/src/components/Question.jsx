import useFormData from "../hooks/useFormData";

export default function Question(props) {
  const { question } = props;

  const initialValues = { answer: "" };
  const { formData, handleSubmit, handleChange } = useFormData(
    initialValues,
    props.onSubmit
  );
  return (
    <form className="Question" onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        type="text"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
        placeholder="enter your answer"
      />
      <button type="submit">Answer question</button>
    </form>
  );
}
