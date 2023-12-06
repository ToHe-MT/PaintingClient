import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom"
import { Create, Update, Delete } from '../../components/Buttons';
import Painting_Card from '../../components/list_card/Painting_Card';
import Delete_Modal from '../delete/modal';
const Medium = () => {
    const { id } = useParams();

    const [openModal, setOpenModal] = useState(false)
    
    const [medium, setMedium] = useState();
    const [paintings, setPaintings] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/medium/${id}`);
                const data = await response.json();
                setMedium(data.medium);
                setPaintings(data.paintings)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching medium:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='DetailContainer'>
            <NavLink to="../Mediums">{"<- All Mediums"}</NavLink>
            {medium && (
                <div>
                    <div>
                        <div className="Flex-Detail-Container">
                            <div className="Detail">
                                {/* <div className="Grid-Container">
                                    <h1>{`${medium.name}`} </h1>
                                </div> */}
                                <div className="Grid">
                                    <h4 className="Label">Paper</h4>
                                    <h6 className="Label">gsm</h6>
                                    <h5 className="value">{`${medium.paper.gsm}`}</h5>
                                    <h6 className="Label">type</h6>
                                    <h5 className="value">{`${medium.paper.type}`}</h5>
                                    <h6 className="Label">Cotton</h6>
                                    {medium.paper.isFullCotton ?
                                        <h5 className="value">{`100% Cotton`}</h5>
                                        :
                                        <h5 className="value">{`Not 100%`}</h5>
                                    }

                                    <h6 className="Label">tools</h6>
                                    <h5 className="value">{`${medium.tools}`}</h5>
                                    <h6 className="Label">brand</h6>
                                    <h5 className="value">{`${medium.brand}`}</h5>
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
            {openModal && <Delete_Modal setOpenModal={setOpenModal} catalog={"medium"} id={id} />}
        </div>
    );
};

export default Medium;