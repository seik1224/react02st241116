import React, { useMemo, useState } from "react";

/*
  [ useMemo ]
  컴포넌트 내부에서 특정 값을 기억하고 있다가 필요할 때 재사용할 수 있도록 해주는 Hook
*/
const Step08 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]); 

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "새로운 할 일"]);
  };


  const expensiveCalculation = (num) => {
    console.log("복잡한 계산 실행 중...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1; 
    }
    return num;
  };


  const calculation = useMemo(() => expensiveCalculation(count), [count]);
// const calculation = expensiveCalculation(count);
  return (
    <div>
     
      <div>
        <h2>할 일 목록</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>CLICK</button>
      </div>

      <hr />

      <div>
        <p>카운트: {count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          CLICK
        </button>
        <h2>복잡한 계산 결과</h2>
        <p>{calculation}</p>
      </div>


    </div>
  );
};

export default Step08;
