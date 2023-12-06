import { useState, useEffect } from "react";
import { MasterInput } from "./FormInput";
import { buyerAddressConfig, buyerDataConfig, buyerPreferredConfig, buyerWishlistConfig } from "./FormConfig";
import { useNavigate } from 'react-router-dom';

const Buyer_Form = ({ initialValues, url }) => {
  const [error, setError] = useState("")
  const navigate = useNavigate()
  //paintings data for buyer wishlist
  const [paintings, setPaintings] = useState([]);
  const [fetching, SetFetching] = useState(true)

  const [address, setAddress] = useState({
    country: "",
    city: "",
    street: "",
    postalCode: "",
  })
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
    currency: "USD",
    length: "Centimeters"
  });
  const [wishlist, Setwishlist] = useState([])
  //Check submission through console.log, will expanded to the functional one after the format cleared
  const handleSubmit = (e) => {
    e.preventDefault();
    const sent = {
      ...values,
      address: address,
      wishlist: wishlist
    }
    console.log(sent)
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
          navigate(`/buyer/${data}`);
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

  const onChangeAdress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const onChangeCheckBox = (e) => {
    if (e.target.checked) {
      // If checkbox is checked, add the value to wishlist
      Setwishlist([...wishlist, e.target.value]);
    } else {
      // If checkbox is unchecked, remove the value from wishlist
      Setwishlist(wishlist.filter(item => item !== e.target.value));
    }
  }


  //for options in the config, give paintings to map wishlist  
  const wishlistConfig = buyerWishlistConfig(paintings);
  const formatDate = (date) => {
    const dateObj = new Date(date);
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
    var day = ('0' + (dateObj.getDate())).slice(-2)
    const year = dateObj.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
  }
  //fetching data when first rendered, and give the values to the wishlist
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/paintings');
        const data = await response.json();
        console.log(data)
        setPaintings(data);
        SetFetching(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()
  }, []);

  useEffect(() => {
    if (initialValues) {
      const { _id, name, email, phoneNumber, dateOfBirth, currency, lengthPreferences, address, wishlist } = initialValues;
      const { country, city, street, postalCode } = address;
      let formattedDate;
      if (dateOfBirth) {
        formattedDate = formatDate(dateOfBirth)
        console.log(formattedDate)
      }
      if (initialValues) {
        setValues({
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          dob: formattedDate,
          currency: currency,
          length: lengthPreferences,
          _id: _id
        })
        setAddress({
          country: country,
          city: city,
          street: street,
          postalCode: postalCode,
        })
        Setwishlist(
          wishlist.map((ele) => {
            return ele._id
          })
        )
      }
    }
  }, [initialValues]);

  useEffect(() => {

  }, [wishlist])
  return (
    <div className="Form">
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <h1>
          {initialValues ? "Update Buyer" : "New Buyer"}
        </h1>
        {fetching ?
          <h2>Fetching Data</h2>
          :
          <div>
            {buyerDataConfig.map((input) => (
              <MasterInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChangeValues}
              />
            ))}
            {buyerAddressConfig.map((input) => (
              <MasterInput
                key={input.id}
                {...input}
                value={address[input.name]}
                onChange={onChangeAdress}
              />
            ))}
            {wishlistConfig.map((input) => (
              <MasterInput
                key={input.id}
                {...input}
                wishlist={wishlist}
                onChange={onChangeCheckBox}
              />
            ))}
            <div className="button-container">
              <button>
                {initialValues ? "Update" : "Create"}
              </button>
            </div>
          </div>
        }
      </form>

    </div>
  )
}
export default Buyer_Form