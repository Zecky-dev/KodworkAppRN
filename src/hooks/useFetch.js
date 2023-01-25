/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useEffect, useState} from 'react';

function useFetch(apiUrl){
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(
        () => {
            const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(apiUrl); // wait until response reach
                setLoading(false);
                setData(response.data.results);
            }
            catch (err) {
                setLoading(false);
                setError(err);
            }
        }
        getData();
    }, []
    );
    return {data,loading,error};
};

export default useFetch;
