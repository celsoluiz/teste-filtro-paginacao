import { useEffect, useState } from "react";
import PropType from 'prop-types';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const resData = await res.json();
                setData(resData);
            } catch(err) {
                console.log('useFetch error: ', err);
            }
        }

        fetchData();
    }, [url]);

    return data;
}

useFetch.propTypes = {
    url: PropType.string.isRequired
}

export default useFetch