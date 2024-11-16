import React, { useRef } from 'react'

/*
    [ HOOK ]
    클래스 컴포넌트를 작성하지 않아도
    상태(state)와 다른 React 기능들을 사용할 수 있게
    해주는 특별한 함수

    [ useRef ]
    컴포넌트 내부에서 특정 DOM 요소에 접근하기 위해
    사용되는 HOOK
    document.querySelector와 비슷하지만
    React방식으로 DOM요소에 접근하는 더 좋은 방법

    useRef사용법 1. DOM요소 접근
    useRef(초기값);
*/

const Step01 = () => {
    const buttonRef = useRef(null);
  return (
    <>
        <button ref={buttonRef} onClick={()=>{
            console.log(buttonRef.current);
        }}>CLICK</button>
    </>
  )
}

export default Step01