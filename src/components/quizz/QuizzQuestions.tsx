import { QuizzQuestionsProps } from "../../type";

const QuizzQuestions = ({ question, register }: QuizzQuestionsProps) => {
  return (
    <div key={question.id} className="border border-black mb-4 p-4 rounded-md">
      <h2 className="font-semibold mb-2">{question.question}</h2>
      <table>
        <tbody>
          {question.answers?.map((answer) => (
            <tr key={answer.id}>
              <td className="pr-8">
                <label>{answer.answer}</label>
              </td>
              <td>
                <input
                  {...register(`${question.id}`)}
                  type="radio"
                  value={answer.answer}
                  name={`${question.id}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizzQuestions;
