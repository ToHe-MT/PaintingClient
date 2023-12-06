import { useState, useEffect } from "react";
import { MasterInput } from "./FormInput";
import { paintingConfig } from "./FormConfig";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Painting_Create2 = ({ initialValues, url }) => {
    //For Form
    const formatDate = (date) => {
        const dateObj = new Date(date);
        var month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
        var day = ('0' + (dateObj.getDate())).slice(-2)
        const year = dateObj.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate
    }
    const [mediums, setMediums] = useState([])
    const [dimensions, setDimensions] = useState([])
    const [buyers, setBuyers] = useState([])

    const Config = paintingConfig(dimensions, mediums, buyers)

    //Picture Related
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [error, setError] = useState("")
    const [uploadPic, setUploadPic] = useState(false)

    const [upload, setUpload] = useState(false)
    const [canCreate, setCanCreate] = useState(false)
    const [picturesID, setPicturesID] = useState([])
    const [values, setValues] = useState({
        //Match with Data
        No: "",
        title: "",
        author: "Stephanie May",
        medium: "",
        dimension: "",
        price: "",
        status: "Sold",
        buyer: "",
        info: "",
        dateCreated: "",
        datePurchased: ""
    });

    const handleSubmit = (e) => {
        setUpload(true)
        e.preventDefault();
        let sent;
        if (values.buyer === "") {
            sent = {
                ...values,
                pictures: picturesID
            };
            delete sent.buyer;
        } else {
            sent = {
                ...values,
                pictures: picturesID
            };
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(sent),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error)
                } else
                    navigate(`/painting/${data}`);
            })
            .catch((err) => {
                console.error(err);
                if (err.response && err.response.headers.get('content-type') === 'application/json') {
                    err.response.json().then((data) => {
                        console.log('Server error message:', data.message);
                        setError(data.message);
                    });
                } else {
                    setError('An error occurred while processing your request.');
                }
            });
    };

    //for changing values before submission
    const onChangeValues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleFile = (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile);
    }
    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', file, file.name);
        axios
            .post(`${import.meta.env.VITE_SERVER}/api/image/upload`, fd)
            .then(({ data }) => {
                setPicturesID([...picturesID, data])
                setUploadPic(false)
            })
            .catch((err) => {
                console.log(err);
                if (err.response.status === 400) {
                    const errMsg = err.response.data;
                    if (errMsg) {
                        console.log(errMsg);
                        alert(errMsg);
                    }
                } else if (err.response.status === 500) {
                    console.log('db error');
                    alert('db error');
                } else {
                    console.log('other error: ', err);
                }
                setFile(null)
            });
    };

    const deletePicture = (e) => {
        const target = e.target.getAttribute('value');
        console.log(target)
        fetch(`${import.meta.env.VITE_SERVER}/api/image/${target}/delete`, {
            method: 'POST'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log("fail");
                } else {
                    console.log("success");
                    setPicturesID(picturesID.filter(item => item !== target))
                }
            });
    };
    useEffect(() => {
        if (file) {
            setUploadPic(true);
            fileUploadHandler();
        }
    }, [file]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Define the URLs you want to fetch
                const urls = [
                        `${import.meta.env.VITE_SERVER}/mediums`,
                        `${import.meta.env.VITE_SERVER}/buyers`,
                        `${import.meta.env.VITE_SERVER}/dimensions`,
                ];

                // Fetch data from all URLs using Promise.all
                const responses = await Promise.all(urls.map(url => fetch(url)));

                // Parse the JSON responses
                const data = await Promise.all(responses.map(response => response.json()));
                const newItem = { id: 0, value: "", label: "No Buyer" };
                const newArray = data[1].concat(newItem);
                // Update the state for each data type
                if (data[0].length && data[2].length) {

                    setMediums(data[0]);
                    setBuyers(newArray);
                    setDimensions(data[2]);
                    setValues(prevValues => ({
                        ...prevValues,
                        medium: data[0][0]._id,
                        dimension: data[2][0]._id,
                    }));
                    setCanCreate(true)
                } else {
                    setError("Please Create DIMENSIONS and MEDIUMS First")
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(initialValues)
        if (initialValues) {
            const { No, title, author, medium, dimension, price, status, buyer, info, pictures, datePurchased, dateCreated } = initialValues;
            let formattedPurchased;
            let formattedCreated;
            if (datePurchased) {
                formattedPurchased = formatDate(datePurchased)
            }
            if (dateCreated) {
                formattedCreated = formatDate(dateCreated)
            }
            if (initialValues) {
                setValues({
                    No: No,
                    title: title,
                    author: author,
                    medium: medium,
                    dimension: dimension,
                    price: price,
                    status: status,
                    buyer: buyer,
                    info: info,
                    dateCreated: formattedCreated,
                    datePurchased: formattedPurchased
                });
                setPicturesID(pictures)
            }
        }
    }, [initialValues]);
    return (
        <div className="Form">
            {error && <div className="error">{error}</div>}
            {canCreate &&

                <form onSubmit={handleSubmit}>
                    <h1>
                        {initialValues ? "Update Painting" : "New Painting"}
                    </h1>
                    {Config.map((input) => (
                        <MasterInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChangeValues}
                        />
                    ))}
                    <input
                        className='file-input'
                        onChange={handleFile}
                        type='file'
                        name='file'
                        id='file'
                    />
                    <label
                        className={`inputlabel ${file && 'file-selected'}`}
                        htmlFor='file'
                    >
                    </label>
                    {picturesID.length ?
                        <div className="Image-Preview">
                            {picturesID.map((ele, idx) => (
                                <div className="images" key={idx}>
                                    <img

                                        className='image'
                                        src={`${import.meta.env.VITE_SERVER}/api/image/${ele}?width=400&height=400`}
                                        alt={`Picture ID ${ele}`}
                                    />
                                    <p className="closeBtn"
                                        onClick={deletePicture}
                                        value={ele}
                                    >
                                        X
                                    </p>
                                </div>
                            ))}
                        </div>
                        :

                        (<div>No Pictured Uploaded</div>)}
                    {uploadPic ?
                        <>
                            <button>Uploading Pic...</button>
                        </> :

                        <button onClick={handleSubmit}>
                            {upload ? <>Uploading</> :
                                <>
                                    {initialValues ? "Update" : "Create"}
                                </>
                            }
                        </button>
                    }
                </form>
            }
        </div>
    )
}
export default Painting_Create2