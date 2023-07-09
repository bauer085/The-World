const COUNTRY_API_ENDPOINT = 'https://restcountries.com/v3.1';

export function getAllCountries() {
    // call API & get result
    return fetch(`${COUNTRY_API_ENDPOINT}/all`).then(response => {
        if (response.ok) {
            return response.json(); // 解析响应的 JSON 数据
        } else {
            throw new Error('Request failed');
        }
    })
}

export function getCountryData(countryCode) {
    // call API & get country result
    return fetch(`${COUNTRY_API_ENDPOINT}/alpha/${countryCode}`).then(response => {
        if (response.ok) {
            return response.json(); // 解析响应的 JSON 数据
        } else {
            throw new Error('Request failed');
        }
    })
}