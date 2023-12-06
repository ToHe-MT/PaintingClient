import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Table from './Tables';

const Painting_Card = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/paintings`);
                const data = await response.json();
                setData(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = ["No", "title", "status"]
    const header = ["No", "Title", "Status", ""]

    return (
        <div className='cards'>
            {loading && <h3>Fetching Data...</h3>}
            {!loading &&
                !data.length ?
                (<h3> No Paintings Data Available. </h3>) :
                (<Table columns={columns} data={data} header={header} category={"painting"}
                />
            )}
        </div>
    );

}

export default Painting_Card