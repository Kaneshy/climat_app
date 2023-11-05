
import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import './styles/ClimaScreen.css'

export const ClimaScreen = () => {

  const API_URL = '3ff851d55c1ba401900bdff5ded86999'
  const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather'

  const [city, setcity] = useState('')
  const [dataClimate, setdataClimate] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch(`${URL_BASE}?q=${city}&appid=${API_URL}`)
      const data = await response.json()
      setdataClimate(data)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const toggleCity = (e) => {
    setcity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.length > 2) fetchData()

  }

  return (
    <>
      <NavBar></NavBar>
      <section className='headerA' >
        <div className="container">
          <img width={75} src="https://i.postimg.cc/rpTL6c3B/pngwing-com.png" alt="" />
          <h1>CLIMATE WORD</h1>
          <form onSubmit={handleSubmit} className="form-inline" >
            <input
              className="form-control"
              type="text"
              value={city}
              onChange={toggleCity}
              placeholder='Name City'
            />
            <button type='submit' className='btn btn-primary' >Search</button>
          </form>

        </div>
      </section>
      {
        dataClimate ? (
          <div className="containerA">
            <div className="main-show">
              <div className="main-show-tarjet">{dataClimate.name}</div>
              <div className="main-show-tarjet">{(dataClimate.main.temp - 273.15).toFixed(2)}°C</div>
              <div className="main-show-tarjet">{dataClimate.weather[0].description}</div>
              <div className='main-show-tarjet' >
                <img src={`https://openweathermap.org/img/wn/${dataClimate.weather[0].icon}@2x.png`} alt="" />
              </div>
            </div>
            <div className="container-hs">
              <section className='table-data-Kd' >
                <div className="texttable">
                  <p>Country:</p>
                  <p>City:</p>
                  <p>temperature: </p>
                  <p>temperature:</p>
                  <p>Climate:</p>
                  <p>Climate:</p>
                  <p>Sea level:</p>
                </div>
                <div className="datatable">
                  <p>{dataClimate.sys.country}</p>
                  <p>{dataClimate.name}</p>
                  <p>{(dataClimate.main.temp - 273.15).toFixed(2)}°C</p>
                  <p> {dataClimate.main.temp}°K</p>
                  <p>{dataClimate.weather[0].description}</p>
                  <p>{dataClimate.weather[0].main}</p>
                  <p>{dataClimate.main.sea_level ? dataClimate.main.sea_level : 'none'}</p>
                </div>
              </section>
              <section className='table-data-Kd' >
                <div className="texttable">
                  <p>Max temperature:</p>
                  <p>Min temperature:</p>
                  <p>latitud: </p>
                  <p>longitud:</p>
                  <p>Humidity:</p>
                  <p>Pressure:</p>
                </div>
                <div className="datatable">
                  <p>{dataClimate.main.temp_max}</p>
                  <p> {dataClimate.main.temp_min}</p>
                  <p>{dataClimate.coord.lat}</p>
                  <p> {dataClimate.coord.lon}</p>
                  <p> {dataClimate.main.humidity}</p>
                  <p> {dataClimate.main.pressure}</p>
                </div>
              </section>
              <section className='table-data-Kd' >
                <div className="texttable">
                  <p>Wind:</p>
                  <p>deg:</p>
                  <p>gust:</p>
                  <p>speed:</p>
                </div>
                <div className="datatable">
                  <p>{dataClimate.name}</p>
                  <p> {dataClimate.wind.deg}</p>
                  <p>{dataClimate.wind.gust}</p>
                  <p>{dataClimate.wind.speed}</p>
                </div>
              </section>
            </div>
            <div className='img-table-kd' >
              <img src={`https://openweathermap.org/img/wn/${dataClimate.weather[0].icon}@2x.png`} alt="" />
            </div>
          </div>
        ) : (
          <div className="imgbody">
            <img width={400} src='https://i.postimg.cc/bJnjtJ7F/worldgreen.png' alt="" />
          </div>
        )
      }
    </>
  )
}





