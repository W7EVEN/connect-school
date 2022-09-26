import { useState } from "react";
import "./SumBox.scss";

export const SumBox = () => {
  const initialArray = new Array(5).fill("");
  const [arrayOfInputs, setArrayOfInputs] = useState(initialArray);
  const [finalGrade, setFinalGrade] = useState("");

  return (
    <div className="gradesSum__student">
      <input
        placeholder="Nome do aluno"
        type="text"
        className="student__input student__nameInput"
      />

      {arrayOfInputs.map((item, index) => {
        return (
          <input
            placeholder={`Nota ${index + 1}`}
            key={index}
            type="number"
            className="student__input student__gradeBox"
            value={arrayOfInputs[index]}
            onChange={(e) => {
              const newArrayOfInputs = arrayOfInputs;
              newArrayOfInputs[index] = e.target.value;
              setArrayOfInputs([...newArrayOfInputs]);

              setFinalGrade(
                newArrayOfInputs.reduce((accumulator, item) => {
                  return accumulator + Number(item);
                }, 0)
              );
            }}
          />
        );
      })}

      <input
        placeholder="Nota final"
        type="number"
        className="student__input student__finalGrade"
        value={finalGrade}
        readOnly
      />
    </div>
  );
};
