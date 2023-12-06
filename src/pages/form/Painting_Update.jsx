import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Painting_Form from './Painting_Form';

const Painting_Update = () => {
    const { id } = useParams();
    const [painting, setPainting] = useState({});
    const [loading, setLoading] = useState(true)

    const url = `${import.meta.env.VITE_SERVER}/painting/${id}`
    const posturl = `${import.meta.env.VITE_SERVER}/painting/${id}/update`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json();
                setPainting(data)
                setLoading(false)
            } catch (error) {
                console.error("error Fetching Painting", error);
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
                <Painting_Form initialValues={painting} url={posturl} />
            }
        </div>
    )
}

export default Painting_Update