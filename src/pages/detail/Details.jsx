import React from 'react';

const Normal = ({ ele, data, upper }) => {
    return (
        <div className='normal'>
            <h5 className='label'>{ele.label}</h5>
            <h5 className='value'>{upper ? data[upper][ele.value] : data[ele.value]}</h5>
        </div>
    );
};

const Boolean = ({ ele, data, upper }) => {
    return (
        <div className='boolean'>
            <h5 className='label'>{ele.label}</h5>
            <h5 className='value'>{(upper ? data[upper][ele.value] : data[ele.value]) ? 'True' : 'False'}</h5>
        </div>
    );
};

const Upper = ({ ele, data }) => {
    return (
        <div className='upper'>
            {ele.child.map((e, idx) => {
                return (
                    <div key={idx}>
                        {e.type === 'normal' && <Normal ele={e} data={data} upper={ele.value} />}
                        {e.type === 'boolean' && <Boolean ele={e} data={data} upper={ele.value} />}
                    </div>
                );
            })}
        </div>
    );
};

const Details = ({ config, data }) => {
    return (
        <div>
            {config.map((ele, idx) => {
                if (ele.type === 'upper') {
                    return <Upper key={idx} ele={ele} data={data} />;
                }
                return null;
            })}
        </div>
    );
};

export default Details;
