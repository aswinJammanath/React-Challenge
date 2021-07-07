import React from 'react'
import { useEffect } from 'react'

function Counter(props) {
    useEffect(()=>{
        console.log('Mounting....');
        return()=>{
        console.log('Unmounting....');
        }
    })
    const {title,count }= props //Destructuring
    return (
        <div>
            <h1 className='count'>{title}: {count}</h1>
        </div>
    )
}

export default Counter
