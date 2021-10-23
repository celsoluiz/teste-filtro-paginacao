import { useEffect, useState } from "react";
import axios from "axios";
import PropType from 'prop-types';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            try {
                axios.all([axios.get(url[0]), axios.get(url[1])]).then(
                    axios.spread((posts, postImages) =>{
                        const res = [posts.data, postImages.data];
                        setData(res);
                    })
                );
            } catch(err) {
                console.log('useFetch error: ', err);
            }
        }

        fetchData();
    }, []);

    return data;
}

useFetch.propTypes = {
    url: PropType.arrayOf(PropType.string).isRequired
}

export default useFetch