import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Table from './Tables';

const Medium_Card = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/mediums`);
                const data = await response.json();
                setData(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = ["paper.gsm", "paper.type", "paper.isFullCotton", "tools", "brand"]
    const header = ["GSM", "Type", "Full Cotton", "Tools", "Brand"]

    return (
        <div className='cards'>
            {loading && <h3>Fetching Data...</h3>}
            {!loading &&
                !data.length ?
                (<h3> No Mediums Data Available. </h3>) :
                (<Table columns={columns} data={data} header={header} category={"medium"}/>)
            }
        </div>
    );
}

export default Medium_Card