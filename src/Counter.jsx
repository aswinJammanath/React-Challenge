import React from 'react'

function Counter(props) {
    const {title,count }= props //Destructuring
    return (
        <div>
            <h1 className='count'>{title}: {count}</h1>
        </div>
    )
}

export default Counter
