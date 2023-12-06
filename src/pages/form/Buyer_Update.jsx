import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Buyer_Form from './Buyer_Form';

const Buyer_Update = () => {
    const { id } = useParams();
    const [buyer, setBuyer] = useState({});
    const [loading, setLoading] = useState(true)

    const url = `${import.meta.env.VITE_SERVER}/buyer/${id}`
    const posturl = `${import.meta.env.VITE_SERVER}/buyer/${id}/update`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json();
                console.log(data)
                setBuyer(data)
                setLoading(false)
            } catch (error) {
                console.error("error Fetching Buyer", error);
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
                <Buyer_Form initialValues={buyer} url={posturl} />
            }
        </div>
    )
}

export default Buyer_Update