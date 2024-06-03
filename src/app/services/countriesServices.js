import Axios from 'axios';

export const countryServices = async () => {
    try {
        const response = await Axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json')
        return response.data;
    } catch (error) {
        console.log(error);
    }

}