export async function getAllCountries() {
    try {
        const response = await fetch("https://restcountries.com/v2/all");
        const countries = await response.json();

        return countries;
    } catch (error) {
        // console.log(error);
    }
}

export async function getCountryInfo(countryName: string) {
    try {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}`
        );
        const country = await response.json();

        return country[0];
    } catch (error) {
        // console.log(error);
    }
}
