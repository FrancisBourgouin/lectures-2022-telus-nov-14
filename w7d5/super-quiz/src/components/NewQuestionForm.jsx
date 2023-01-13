import useFormData from "../hooks/useFormData";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;
  const initialValues = { question: "", answer: "" };

  const { formData, handleSubmit, handleChange } = useFormData(initialValues, onSubmit);

  return (
    <section className="NewQuestionForm">
      <h1>Add a question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          onChange={handleChange}
          value={formData.question}
          placeholder="Enter your question"
        />
        <input
          type="text"
          name="answer"
          onChange={handleChange}
          value={formData.answer}
          placeholder="Enter your answer"
        />
        <button type="submit">Add a question</button>
      </form>
    </section>
  );
}
