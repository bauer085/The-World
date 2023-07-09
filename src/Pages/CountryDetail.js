import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import { getCountryData } from "../Services";
import './CountryDetail.css';

export default function CountryDetail(props) {
    const { countryCode } = useParams();
    const [countryData, setCountryData] = useState({});

    useEffect(() => {
        getCountryData(countryCode)
            .then(country => {
                setCountryData(country[0])
            })
    }, [countryCode]);

    console.log('countryDetail:', countryData)
    return (
        // { countryData!== {} && (

        // )}
        <div className="country-detail-wrapper">
            <div>
                <img
                    src={countryData.flags?.png}
                    alt={countryData.name?.common}
                />
            </div>
            <div >
                <div>Name: {countryData.name?.official}</div>
                <div>Capital: {countryData.capital}</div>
                <div>Psopulation: {countryData.population}</div>
                <div>Area: {countryData.area}</div>
                <div>Region: {countryData.region}</div>
                <div>Subregion: {countryData.subregion}</div>
                {/* <div>Status: {countryData.status}</div> */}
                {/* <div>Independent: {countryData.independent}</div> */}
                {/* <div>borders: {countryData.borders}</div> */}
            </div>
        </div>
    )
}