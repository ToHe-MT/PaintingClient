import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import { Create, Update, Delete } from '../../components/Buttons';
import Delete_Modal from '../delete/modal';

const Painting = () => {
    const { id } = useParams();

    const [openModal, setOpenModal] = useState(false)

    const [painting, setPainting] = useState();
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/painting/${id}`);
                const data = await response.json();
                setPainting(data);
                setLoading(false)
                console.log(data)
            } catch (error) {
                console.error('Error fetching painting:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='DetailContainer'>
            {painting && (
                <div>
                    <div>

                        {painting.pictures.length ?
                            <div className="Image-Preview">
                                {painting.pictures.map((ele, idx) => (
                                    <div className="images" key={idx}>
                                        <img

                                            className='image'
                                            src={`${import.meta.env.VITE_SERVER}/api/image/${ele}?width=400&height=400`}
                                            alt={`Picture ID ${ele}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            :

                            (<div>No Pictured Uploaded</div>)}
                        <div className="Detail">
                            <div className="Grid-Container">
                                <h1>{`[${painting.No}]`} </h1>
                            </div>
                            <h2>{`${painting.title}`}</h2>
                            <p>by Stephanie May</p>
                            <div className="Grid">
                                <h6 className="label">Date Created</h6>
                                <h5 className="Value">Date Created</h5>

                                <h6 className="label">Artist</h6>
                                <h5 className="Value">Artist</h5>

                                <h6 className="Label">Dimensions</h6>
                                <h5 className="value">{`${painting.dimension.height}x${painting.dimension.width}mm`}</h5>

                                <h6 className="Label">Medium</h6>
                                {painting.medium.paper.isFullCotton ? (
                                    <h5 className="value">{`${painting.medium.tools} on 100% Cotton ${painting.medium.paper.gsm
                                        } gsm ${painting.medium.paper.type
                                            .charAt(0)
                                            .toUpperCase()}${painting.medium.paper.type.slice(1)}`}</h5>
                                ) : (
                                    <h5 className="value">{`${painting.medium.tools} ${painting.medium.paper.gsm
                                        } GSM ${painting.medium.paper.type
                                            .charAt(0)
                                            .toUpperCase()}${painting.medium.paper.type.slice(1)}`}</h5>
                                )}

                                <h6 className="Label">Price</h6>
                                <h5 className="value">Price also will be updated </h5>

                                <h6 className="Label">Status</h6>
                                <h5 className="value">{`${painting.status}`}</h5>

                                <h6 className="Label">Purchaser</h6>
                                <h5 className="value">Purchaser Will be Updated</h5>

                                <h6 className="Label">Date Purchased </h6>
                                <h5 className="value">Date Purchased </h5>
                            </div>
                        </div>

                    </div>
                </div>
            )}
            <div className="Flex-Button">
                <Update link={`${window.location.href}/update`} />
                <span onClick={() => setOpenModal(true)}><Delete /></span>

            </div>
            {openModal && <Delete_Modal setOpenModal={setOpenModal} catalog={"painting"} id={id} />}
        </div>
    );
};

export default Painting;