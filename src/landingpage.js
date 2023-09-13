import React, { useEffect, useState } from "react";
import "./index.css";

const Landingpage = () => {
  const [flag, setFlag] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const submitButtonClick = () => {
    if (!formData.name || !formData.phoneNumber || !formData.email) {
      setErrorMessage("Please fill in all fields.");
    } else {
      setFlag(false);
    }
  };

  useEffect(() => {
    setErrorMessage(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    setFlag(flag);
  }, [flag]);

  return (
    <>
      <div className="mainwrap">
        <div className="heading">
          <div className="logo"></div>
        </div>

        {flag ? (
          <>
            <div className="form">
              <div>
                <div>
                  {" "}
                  <strong> Fill the Form to Enter the Quiz </strong>{" "}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  className="inputbutton"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => {
                    let tempObject = { ...formData };
                    tempObject.name = e.target.value;
                    setFormData(tempObject);
                  }}
                  required
                />
              </div>
              <div>
                <input
                  className="inputbutton"
                  type="number"
                  placeholder="Phone"
                  // pattern="[0-9]*"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    let tempObject = { ...formData };
                    tempObject.phoneNumber = e.target.value;
                    setFormData(tempObject);
                  }}
                  required
                />
              </div>
              <div>
                <input
                  className="inputbutton"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => {
                    let tempObject = { ...formData };
                    tempObject.email = e.target.value;
                    setFormData(tempObject);
                  }}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  id="submitButton"
                  onClick={() => submitButtonClick()}
                  // disabled={formData.name && formData.phoneNumber && formData.email ? false : true}
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
            {errorMessage ? <div className="errorMessage">{errorMessage}</div> :  <div className="errorMessage"></div> }
          </>
        ) : (
          <>
            <div className="submitted">Form Submitted</div>
          </>
        )}

        <div className="calcutta"></div>
        <div className="footer"> </div>
      </div>
    </>
  );
};

export default Landingpage;
