import React, { useEffect } from 'react'

const Contact = () => {


    useEffect(() => {
        console.log("UseEffect");
    }, [])

    console.log("render");
    return (
        <div>
            Contact
        </div>
    )
}

export default Contact
