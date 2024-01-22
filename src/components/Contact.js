import React, { useEffect } from 'react'

const Contact = () => {
    return (
        <div>
            <h1 className='text-center'>Contact Us</h1>
            <input placeholder='name' className='border border-black rounded p-2 m-2' />
            <input placeholder='email' className='border border-black rounded p-2 m-2' />
            <button className='border border-black rounded p-2 m-2'>Send</button>
        </div>
    )
}

export default Contact
