import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Dimension_Form from './Dimension_Form';

const Dimension_Update = () => {
    const { id } = useParams();
    const [dimension, setDimension] = useState({});
    const [loading, setLoading] = useState(true)

    const url = `${import.meta.env.VITE_SERVER}/dimension/${id}`
    const posturl = `${import.meta.env.VITE_SERVER}/dimension/${id}/update`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json();
                setDimension(data)
                setLoading(false)
            } catch (error) {
                console.error("error Fetching Dimension", error);
                setLoading(false)
            }
        }
        fetchData();
    }, [id])

    return (
        <div>
            {loading ?
                <>Filling Previous Data</>
                :
                <Dimension_Form initialValues={dimension} url={posturl} />
            }
        </div>
    )
}

export default Dimension_Update