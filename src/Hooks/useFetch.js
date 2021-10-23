import { useEffect, useState } from "react";
import axios from "axios";
import PropType from 'prop-types';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
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