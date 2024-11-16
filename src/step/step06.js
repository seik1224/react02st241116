import React, { useEffect, useState } from 'react'

/*
    useEffect사용법 2. 의존성 배열[Dependency Array]을 사용하는 예제
*/
const Step06 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`카운트가 ${count}로 변경됨`)
    }, [count]); // count값이 변경될 때만 실행
  return (
    <>
        <p>카운트 : {count}</p>
        <button onClick={()=>setCount(count+1)}>CLICK</button>
    </>
  )
}

export default Step06