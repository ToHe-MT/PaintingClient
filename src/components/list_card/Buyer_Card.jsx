import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Table from './Tables';

const Buyer_Card = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/buyers`);
                const data = await response.json();
                setData(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        
    }, []);
    const columns = ["name", "address.country", "address.city"]
    const header = ["Name", "Country", "City", ""]
    
    return (
        <div className='cards'>
            {loading && <h3>Fetching Data...</h3>}
            {!loading &&
                !data.length ?
                (<h3> No Dimensions Data Available. </h3>) :
                (<Table columns={columns} data={data} header={header} category={"buyer"}
                />
            )}
        </div>
    );

}

export default Buyer_Card