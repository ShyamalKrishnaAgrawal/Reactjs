import React, { useState, useEffect } from 'react'

function ClassCounterOne() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title=`Count is ${count}`;
    })

    return (
    <div>
        <input type='text' value={name} onchange={e => setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Count = {count}</button>
    </div>
    )
}

export default ClassCounterOne
