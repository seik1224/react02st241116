import React, { useRef, useState } from 'react'

/*
    useRef사용법 4. 토글상태관리
*/
const Step04 = () => {
    const toggleRef = useRef(false);
    const [isVi, setIsVi] = useState(false);

    const toggleVi = () => {
        toggleRef.current = !toggleRef.current;
        setIsVi(toggleRef.current);
    }
  return (
    <>
        <button onClick={toggleVi}>토글</button>
        {isVi && <div>표시됨</div>}
    </>
  )
}

export default Step04