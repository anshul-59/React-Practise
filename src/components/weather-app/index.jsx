import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function WeatherCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "d18071baae8a468faf3102710240410";
  const LOCATION = "kochi";

  const WEATHER_API = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${LOCATION}&aqi=no`;

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData(WEATHER_API);
  }, []);

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#f5f6f" }}>
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10" lg="8" xl="6">
              <MDBCard
                className="bg-dark text-white"
                style={{ borderRadius: "40px" }}
              >
                <div className="bg-image" style={{ borderRadius: "35px" }}>
                  <MDBCardImage
                    // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                    className="card-img"
                    alt="weather"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                  ></div>
                </div>
                <div className="card-img-overlay text-dark p-5">
                  <MDBTypography tag="h4" className="mb-0">
                    {data.location.name}, {data.location.region},{" "}
                    {data.location.country}
                  </MDBTypography>
                  {/* <p className="display-2 my-3">1.28°C</p> */}
                  <p className="mb-2">
                    Feels Like: {data.current.feelslike_c}{" "}
                  </p>
                  <MDBTypography tag="h5">
                    {data.current.condition.text}
                  </MDBTypography>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default WeatherCard;
