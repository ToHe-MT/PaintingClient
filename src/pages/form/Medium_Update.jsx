import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Medium_Form from './Medium_Form';

const Medium_Update = () => {
    const { id } = useParams();
    const [medium, setMedium] = useState({});
    const [loading, setLoading] = useState(true)

    const url = `${import.meta.env.VITE_SERVER}/medium/${id}`
    const posturl = `${import.meta.env.VITE_SERVER}/medium/${id}/update`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json();
                setMedium(data)
                setLoading(false)
            } catch (error) {
                console.error("error Fetching Medium", error);
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
                <Medium_Form initialValues={medium} url={posturl} />
            }
        </div>
    )
}

export default Medium_Update