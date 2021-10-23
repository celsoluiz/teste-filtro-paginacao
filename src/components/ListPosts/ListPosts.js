import { useEffect, useState } from "react";
import PropType from 'prop-types'

import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import Post from "../Post/Post"

import { POST_PER_PAGE } from '../../utils/constants'
import { distinct, sortNumber } from '../../utils/functions'

const ListPosts = ({posts}) => {
    const [currentPosts, setCurrentPosts] = useState([]);
    const [category, setCategory] = useState('todos');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const page = (currentPage - 1) * POST_PER_PAGE;
    const categories = posts.map(post => post.categories[0]).filter(distinct).sort(sortNumber);

    useEffect(() => {
        let totalPosts = posts;

        if(category !== "todos") {
          totalPosts = posts.filter( post => post.categories[0].toString() === category)
          setCurrentPage(1);
        }

        setTotalPages(Math.ceil(totalPosts.length / POST_PER_PAGE));
        setCurrentPosts(totalPosts.slice(page, page + POST_PER_PAGE));
    }, [posts, category, page]);

    const handleFilter = (val) => {
        setCategory(val);
    }

    const handleClickPagination = (numPage) => {
        setCurrentPage(numPage);
    }
    return (
        <>
          <Filter initialVal={category} selectVals={categories} handleChange={handleFilter} />
            {
                currentPosts.map( post => {
                    const id = post.id;
                    let postData = {
                        title: post.title.rendered,
                        pubDate: post.date,
                        description: post.excerpt.rendered,
                        image: post['_embedded']['wp:featuredmedia'][0].source_url
                    }                   

                    return <Post key={id} {...postData} />
                })
            }
          <Pagination totalPages={totalPages} currentPage={currentPage} handleClick={handleClickPagination} />
        </>
    )
}

ListPosts.propTypes = {
    posts: PropType.array.isRequired,
}

export default ListPosts