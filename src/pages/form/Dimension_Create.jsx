import React from 'react'
import Dimension_Form from './Dimension_Form'

const Dimension_Create = () => {
    return (
        <div>
            <Dimension_Form url={`${import.meta.env.VITE_SERVER}/dimension/create`}/>
        </div>
    )
}

export default Dimension_Create