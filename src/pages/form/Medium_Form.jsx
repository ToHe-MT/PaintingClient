import { useState, useEffect } from "react";
import { MasterInput } from "./FormInput";
import { MediumDataConfig, MediumPaperConfig, MediumCottonConfig } from "./FormConfig";
import { useNavigate } from 'react-router-dom';

const Medium_Create = ({ initialValues, url }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("")
  const [values, setValues] = useState({
    //Match with Data
    tools: "Gouache",
    brand: "",
    info: "",
  });
  const [paper, setPaper] = useState({
    gsm: "",
    type: "watercolor",
    isFullCotton: "no"
  });

  //Check submission through console.log, will expanded to the functional one after the format cleared
  const handleSubmit = (e) => {
    console.log("Uploading..")
    e.preventDefault();
    const sent = {
      ...values,
      paper: {
        ...paper,
        isFullCotton: paper.isFullCotton === "yes" ? true : false,
      },
    };
    console.log(JSON.stringify(sent))
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
          navigate(`/medium/${data}`);
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

  const onChangePaper = (e) => {
    setPaper({ ...paper, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (initialValues) {
      const { tools, brand, info, paper } = initialValues.medium;
      const { gsm, type, isFullCotton } = paper;
      if (initialValues) {
        setValues({
          tools: tools,
          brand: brand,
          info: info,
        })
        {
          isFullCotton ?
            setPaper({
              gsm: gsm,
              type: type,
              isFullCotton: "yes"
            }) :
            setPaper({
              gsm: gsm,
              type: type,
              isFullCotton: "no"
            })
        }
      }
    }
  }, [initialValues]);

  return (
    <div className="Form">
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <h1>
          {initialValues ? "Update Medium" : "New Medium"}
        </h1>
        {MediumDataConfig.map((input) => (
          <MasterInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChangeValues}
          />
        ))}
        <h2>Paper</h2>
        {MediumPaperConfig.map((input) => (
          <MasterInput
            key={input.id}
            {...input}
            value={paper[input.name]}
            onChange={onChangePaper}
          />
        ))}
        {MediumCottonConfig.map((input) => (
          <MasterInput
            key={input.id}
            {...input}
            onChange={onChangePaper}
            value={paper[input.name]}
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
export default Medium_Create