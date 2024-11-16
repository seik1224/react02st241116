import React, { useEffect, useState } from 'react'

/*
    [ 스크롤 이벤트 ]
*/
const Event04 = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div style={{height:'2000px'}}>
        <div style={{position:'fixed',top:0,left:0}}>
            <p>{scrollY}px</p>
        </div>
    </div>
  )
}

export default Event04