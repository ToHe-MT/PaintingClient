import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from "react-router-dom"
import { Create, Update, Delete } from '../../components/Buttons';
import Painting_Card from '../../components/list_card/Painting_Card';
import Delete_Modal from '../delete/modal';

const Dimension = () => {
    const { id } = useParams();

    const [openModal, setOpenModal] = useState(false)
    const [dimension, setDimension] = useState();
    const [paintings, setPaintings] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/dimension/${id}`);
                const data = await response.json();
                setDimension(data.dimension);
                setPaintings(data.paintings)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching dimension:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='DetailContainer'>
            <NavLink to="../dimensions">{"<- All Dimensions"}</NavLink>
            {dimension && (
                <div>
                    <div>
                        <div className="Flex-Detail-Container">
                            <div className="Detail">
                                {/* <div className="Grid-Container">
                                    <h1>{`${dimension.name}`} </h1>
                                </div> */}
                                <div className="Grid">
                                    <h6 className="Label">Name</h6>
                                    <h5 className="value">{`${dimension.name}`}</h5>
                                    <h6 className="Label">Height</h6>
                                    <h5 className="value">{`${dimension.height}`}</h5>
                                    <h6 className="Label">Width</h6>
                                    <h5 className="value">{`${dimension.width}`}</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="Flex-Button">
                <Update link={`${window.location.href}/update`} />
                <span onClick={() => setOpenModal(true)}><Delete /></span>

            </div>
            {paintings.length > 0 ?
                <div className='Paintings'>
                    <h2>Paintings</h2>
                    <Painting_Card data={paintings} />
                </div>
                :
                <h3> No Paintings Available </h3>
                // <Create link={}>
            }
            {

                openModal && <Delete_Modal setOpenModal={setOpenModal} catalog={"dimension"} id={id} />
            }
        </div>
    );
};

export default Dimension;