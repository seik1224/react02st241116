import React, {  useEffect, useState } from 'react'

/*
    [ useEffect ]
    컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록
    할 수 있는 HOOK
    함수와 비슷한데, 함수는 실행되는 시점이 정해져있지만
    useEffect는 컴포넌트가 렌더링될 때마다 실행

    useEffect사용법 1. 컴포넌트 렌더링 될때마다 작업 수행
*/

const Step05 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        // 컴포넌트가 렌더링 될때마다 실행
        console.log('컴포넌트가 렌더링됨');

        /*
            return에 클린업함수를 반환하면
            컴포넌트가 언마운트(제거)되기 전이나
            업데이트되기 전에 실행
        */
        return ()=>{
            console.log('클린업 : 컴포넌트가 언마운트되거나 업데이트 전에 실행');
        }
    });

  return (
    <>
        <p>카운트 : {count}</p>
        <button onClick={()=>setCount(count+1)}>CLICK</button>
    </>
  )
}

export default Step05