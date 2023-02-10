import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    const oddEven=useMemo(()=>{
        let i=0;
        console.log("Odd Even function render")
        while(i<2000000000) i++;

        return count1%2===0?"Even":"Odd"
    }, [count1])

// console.log("first")
    // const oddEven=()=>{
    //     let i=0;
    //     console.log("Odd Even function render")
    //     while(i<2000000000) i++;

    //     return count1%2===0?"Even":"Odd"
    // }
  return (
    <div>
        <button onClick={()=> setcount1(p=> p+1)}>Count 1 {count1}</button>
        <h3>{oddEven}</h3>
        <button onClick={()=> setcount2(p=> p+1)}>Count 2: {count2}</button>
    </div>
  )
}

export default Memo