import { useEffect, useState } from "react";
import { TextFormInput } from "./FormInput";
import { DimensionConfig } from "./FormConfig";
import { useNavigate } from 'react-router-dom';

const Dimension_Form = ({ initialValues, url }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    // Match with Data
    name: "",
    height: "",
    width: "",
  });

  // Check submission through console.log, will be expanded to the functional one after the format is cleared
  const handleSubmit = (e) => {
    console.log("Uploading..");
    e.preventDefault();
    const sent = { ...values };
    console.log(JSON.stringify(sent));
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
          navigate(`/dimension/${data}`);
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

  // For changing values before submission
  const onChangeValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (initialValues) {
      const { name, height, width } = initialValues.dimension;
      setValues({
        name: name,
        height: height,
        width: width,
      })
    }
  }, [initialValues]);

  return (
    <div className="Form">
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <h1>
          {initialValues ? "Update Dimension" : "New Dimension"}
        </h1>
        {DimensionConfig.map((input) => (
          <TextFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChangeValues}
          />
        ))}
        <div className="button-container">
          <button>
            {initialValues ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Dimension_Form;
