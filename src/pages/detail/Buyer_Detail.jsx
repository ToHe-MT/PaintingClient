import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom"
import { Create, Update, Delete } from '../../components/Buttons';
import Delete_Modal from '../delete/modal';

const Buyer = () => {
    const { id } = useParams();

    const [openModal, setOpenModal] = useState(false)

    const [buyer, setBuyer] = useState();
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}/buyer/${id}`);
                const data = await response.json();
                setBuyer(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching buyer:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='DetailContainer'>
            <NavLink to="../Buyers">{"<- All Buyers"}</NavLink>
            {buyer && (
                <div>
                    <div>
                        <div className="Flex-Detail-Container">
                            <div className="Detail">
                                <div className="Grid-Container">
                                    <h1>{`${buyer.name}`} </h1>
                                </div>
                                <div className="Grid">
                                    <h4 className="Label">Address</h4>
                                    <h6 className="Label">Country</h6>
                                    <h5 className="value">{`${buyer.address.country}`}</h5>
                                    <h6 className="Label">City</h6>
                                    <h5 className="value">{`${buyer.address.city}`}</h5>
                                    <h6 className="Label">Street</h6>
                                    <h5 className="value">{`${buyer.address.street}`}</h5>
                                    <h6 className="Label">Postal Code</h6>
                                    <h5 className="value">{`${buyer.address.postalCode}`}</h5>

                                    <h6 className="Label">Email</h6>
                                    <h5 className="value">{`${buyer.email}`}</h5>
                                    <h6 className="Label">PhoneNumber</h6>
                                    <h5 className="value">{`${buyer.phoneNumber}`}</h5>
                                    <h6 className="Label">WishList</h6>
                                    {buyer.wishlist.length ===0  && <h5 className="value">No Paintings Wishlisted</h5>}
                                    {buyer.wishlist &&
                                        buyer.wishlist.map((ele) => {
                                            return <h5>{ele.No} - {ele.title}</h5>
                                        }
                                    )
                                    }

                                    <h4 className="Label">Preferences</h4>
                                    <h6 className="Label">Currency</h6>
                                    <h5 className="value">{`${buyer.currency}`}</h5>
                                    <h6 className="Label">Length</h6>
                                    <h5 className="value">{`${buyer.lengthPreferences}`}</h5>

                                    {/* <h6 className="Label">Orders</h6>
                                    <h5 className="value">{`${buyer.orders}`}</h5> */}
                                    {/* {buyer.medium.paper.isFullCotton ? (
                                        <h5 className="value">{`${buyer.medium.tools} on 100% Cotton ${buyer.medium.paper.gsm
                                            } gsm ${buyer.medium.paper.type
                                                .charAt(0)
                                                .toUpperCase()}${buyer.medium.paper.type.slice(1)}`}</h5>
                                    ) : (
                                        <h5 className="value">{`${buyer.medium.tools} ${buyer.medium.paper.gsm
                                            } GSM ${buyer.medium.paper.type
                                                .charAt(0)
                                                .toUpperCase()}${buyer.medium.paper.type.slice(1)}`}</h5>
                                    )}
                                     */}
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
            {openModal && <Delete_Modal setOpenModal={setOpenModal} catalog={"buyer"} id={id} />}

        </div>
    );
};

export default Buyer;