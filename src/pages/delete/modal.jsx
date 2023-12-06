import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../style/modal.css"
import KeyValueList from "./KeyValueList";


function Delete_Modal({ setOpenModal, catalog, id }) {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [message, setMessage] = useState("Do you want to DELETE this data?")
    const [buttonMessage, setButtonMessage] = useState("Delete")
    const [navigate, setNavigate] = useState(`${catalog}s`)
    const [isFail, setFail] = useState(false)
    const nav = useNavigate()
    const url = `${import.meta.env.VITE_SERVER}/${catalog}/${id}`

    const handleSubmit = () => {
        fetch(`${url}/delete`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setMessage(data.error)
                    setButtonMessage(`to ${catalog} details`)
                    setNavigate(data.navigate)
                    setFail(true)
                    console.log(data.navigate)
                } else {
                    setMessage(data.success)
                    setButtonMessage("Continue")
                    setNavigate(data.navigate)
                }
                sameURL()
            })
    }

    const sameURL = () => {
        const currentRoute = window.location.href.replace(window.location.origin, '');
        console.log(navigate, currentRoute)
        if (navigate === currentRoute || navigate==="reload") {
            window.location.reload();
        } else {
            nav(`../${navigate}`)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/simple`);
                const data = await response.json();
                setData(data)
                setLoading(false)
                console.log(data)
            } catch (error) {
                console.error(`Error fetching ${catalog}:`, error);
                setLoading(false);
            }
        };

        fetchData();
}, []);

const test = () => {
    console.log(data)
}
return (
    <div className="modalBackground"
        onClick={test}>
        <div className="modalContent">
            <div className="titleCloseBtn">
                <p className="closeBtn"
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >
                    X
                </p>
            </div>
            {isLoading ?
                <>Fetching Data ...</>
                :
                <div>
                    <div className="title">
                        <h1>{message}</h1>
                    </div>
                    <div className="body">
                        <KeyValueList data={data}/>
                    </div>
                    <div className="footer">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            id="cancelBtn"
                        >
                            Cancel
                        </button>
                        {!isFail && <button onClick={handleSubmit}>{buttonMessage} </button>}
                        {isFail && <NavLink to={navigate} onClick={sameURL}>{buttonMessage}</NavLink>}
                    </div>
                </div>
            }

        </div>
    </div>
);
}

export default Delete_Modal;