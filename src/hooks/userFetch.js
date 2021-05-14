import { useState, useEffect } from 'react';
import API from '../api-services';
import { useCookies } from 'react-cookie';
function useFetch() {

    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState();
    const [token] = useCookies(['mr-token']);

    useEffect(() => {
        async function fetchData() {
            setLoding(true);
            setError();
            const data = await API.getMovies(token['mr-token']).catch(err => setError(err))
            setData(data)
            setLoding(false);

        }
        fetchData();
    }, []);
    return [data, loading, error]
}

export { useFetch };