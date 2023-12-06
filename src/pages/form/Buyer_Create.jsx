import React from 'react'
import Buyer_Form from './Buyer_Form'

const Buyer_Create = () => {
    return (
        <div>
            <Buyer_Form url={`${import.meta.env.VITE_SERVER}/buyer/create`}/>
        </div>
    )
}

export default Buyer_Create