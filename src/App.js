import useFetch from './Hooks/useFetch';
import ListPosts from './components/ListPosts/ListPosts';

import { mergeObjects } from './utils/functions';
import { SContainer } from './styles/App.styled';

const url = 'https://itacuruba.pe.gov.br/wp-json/wp/v2/posts';
const url_img = 'https://itacuruba.pe.gov.br/wp-json/wp/v2/posts?_embed';

function App() {
  const arrPosts = useFetch([url, url_img]);
  const posts = mergeObjects(arrPosts);

  return (
    <div>
      <main>
        <SContainer>
          <ListPosts posts={posts} />
        </SContainer>
      </main>
    </div>
  );
}

export default App;
