import React, { useRef } from 'react'

/*
    useRef사용법 3. focus 제어
*/
const Step03 = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        // 안정성체크 : 현재 참조하고 있는 요소가 있는지 확인
        // Typescript 사용 시에 Error방지
        if(inputRef.current){
            inputRef.current.focus();
        }
    }
  return (
    <>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>입력란으로 이동</button>
    </>
  )
}

export default Step03