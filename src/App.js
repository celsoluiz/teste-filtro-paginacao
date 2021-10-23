import { useEffect, useState } from 'react';
import Filter from './components/Filter/Filter';
import Pagination from './components/Pagination/Pagination';
import Post from './components/Post/Post';
import useFetch from './Hooks/useFetch';
import { SContainer } from './styles/App.styled';

import { POST_PER_PAGE } from './utils/constants'
import { distinct, sortNumber } from './utils/functions'

const url = 'https://itacuruba.pe.gov.br/wp-json/wp/v2/posts';

function App() {
  const posts = useFetch(url);
  
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
    <div>
      <main>
        <SContainer>
          <Filter initialVal={category} selectVals={categories} handleChange={handleFilter} />
          {
            currentPosts.map( post => (
              <Post key={post.id} title={post.title.rendered} pubDate={post.date} description={post.excerpt.rendered} />
            ))
          }
          <Pagination totalPages={totalPages} currentPage={currentPage} handleClick={handleClickPagination} />
        </SContainer>
      </main>
    </div>
  );
}

export default App;
