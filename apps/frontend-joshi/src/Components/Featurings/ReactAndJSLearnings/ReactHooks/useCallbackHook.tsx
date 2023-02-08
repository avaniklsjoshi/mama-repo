import React, { useCallback, useState } from "react";

interface AgeProps {
  clickHandler: () => void;
  age: number;
}

export const AgeButton = ({ clickHandler, age }: AgeProps) => {
  console.log("Age Button Rendered Age = " + age);
  return <button onClick={clickHandler}>Increment Age</button>;
};

interface SalaryProps {
  clickHandler: () => void;
  salary: number;
}

export const SalaryButton = ({ clickHandler, salary }: SalaryProps) => {
  console.log("Salary Button Rendered Salary = " + salary);
  return <button onClick={clickHandler}>Increment Salary</button>;
};

React.memo(SalaryButton);

const AdvancedHooksComponent: React.FC = () => {
  const [age, setAge] = useState(12);
  const [salary, setSalary] = useState(5000);

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryHandler = useCallback(() => {
    setSalary(salary + 500);
  }, [salary]);

  return (
    <div>
      <h1>UseCallBack Example</h1>
      <AgeButton clickHandler={ageHandler} age={age} />
      <SalaryButton clickHandler={salaryHandler} salary={salary} />
    </div>
  );
};

export default AdvancedHooksComponent;
