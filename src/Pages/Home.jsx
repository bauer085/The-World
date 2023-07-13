import CountryCard from "../Components/CountryCard";
import './Home.css';
import { useState, useEffect } from 'react';
import { getAllCountries } from "../Services";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Home() {
    const [countriesList, setCountriesList] = useState([]);
    const [filterCountriesList, setfilterCountriesList] = useState([]);
    const [region, setRegion] = useState('');
    const [countryName, setCountryName] = useState('');

    const handleChange = (event) => {
        setRegion(event.target.value);
    };
    const handleCountryNameChange = (event) => {
        setCountryName(event.target.value);
    };

    useEffect(() => {
        getAllCountries()
            .then(countries => {
                setCountriesList(countries)
                setfilterCountriesList(countries)
                // console.log('countries:', countries)
            })
    }, []);
    useEffect(() => {
        // console.log("Region or country name changed:", region, countryName);

        let filterCountries = countriesList;
        if (region.length) {
            filterCountries = filterCountries.filter(country => {
                if (country.region === region) return true;
                return false;
            });
            setfilterCountriesList(filterCountries);
        } else {
            filterCountries = countriesList
            setfilterCountriesList(filterCountries);
        };
        if (countryName !== '') {
            filterCountries = filterCountries.filter(country => {
                const lowerCaseName = country.name.common.toLowerCase();
                if (lowerCaseName.includes(countryName.toLowerCase())) return true;
                return false;
            })
            setfilterCountriesList(filterCountries)
        };
    }, [region, countryName, countriesList])

    return (
        <div className="Home">
            <div className="filter">
                <TextField
                    id="outlined-basic"
                    label="Filter by here"
                    value={countryName}
                    variant="outlined"
                    onChange={handleCountryNameChange}
                />
                <FormControl fullWidth>
                    <InputLabel id="select-label">Region</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={region}
                        label="Region"
                        onChange={handleChange}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"Africa"}>Africa</MenuItem>
                        <MenuItem value={"Americas"}>Americas</MenuItem>
                        <MenuItem value={"Asia"}>Asia</MenuItem>
                        <MenuItem value={"Europe"}>Europe</MenuItem>
                        <MenuItem value={"Oceania"}>Oceania</MenuItem>
                        <MenuItem value={"Antarctic"}>Antarctic</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="country-card-wrapper">
                {
                    filterCountriesList.map(country => (
                        <Link
                            className="card"
                            to={`/counties/${country.cca3}`}
                            key={country.cca3}
                        >
                            <CountryCard
                                name={country.name.common}
                                capital={country.capital}
                                population={country.population}
                                flagUrl={country.flags.svg}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;