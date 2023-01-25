import axios from 'axios';
import {useState} from 'react';

function useFetch(){
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const getData = async (apiUrl) => {
        try {
            setLoading(true);
            const response = await axios.get(apiUrl); // wait until response reach
            setLoading(false);
            setData(response.data);
        }
        catch (err) {
            setLoading(false);
            setError(err);
        }
    };
    return {data,loading,error,getData};
};

export default useFetch;
