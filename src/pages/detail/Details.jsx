import React from 'react'

const normal = ({ ele, upper }) => {
    return (
        upper ?
            <div className='normal'>
                <h5 className='label'>{ele.label}</h5>
                <h5 className='value'>{data[upper][ele.value]}</h5>
            </div>
            :
            <div className='normal'>
                <h5 className='label'>{ele.label}</h5>
                <h5 className='value'>{data[ele.value]}</h5>
            </div>
    )
}

const boolean = ({ data, ele, upper }) => {
    return (
        upper ?
            <div className='boolean'>
                < h5 className='label' > {ele.label}</h5 >
                {data[upper][ele.value] && <h5 className='value'>{data[ele.value]}</h5>}
                {!data[upper][ele.value] && <h5 className='value'>{data[ele.value]}</h5>}
            </div >
            :
            <div className='boolean'>
                <h5 className='label'>{ele.label}</h5>
                {data[ele.value] && <h5 className='value'>{data[ele.value]}</h5>}
                {!data[ele.value] && <h5 className='value'>{data[ele.value]}</h5>}
            </div>
    )
}

const upper = ({ ele }) => {
    return (
        <div className='upper'>
            {ele[child].map((e, idx) => {
                { e.type === "normal" && <normal ele={e} upper={ele.value} /> }
                { e.type === "boolean" && <boolean ele={e} upper={ele.value} /> }
            })
            }
        </div>
    )
}

const Details = ({ config, data }) => {
    return (
        config.map((ele,idx)=>{
            {ele.type===upper&&</upper>}
        })
    )
}

export default Details
