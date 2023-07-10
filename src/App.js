import { Routes, Route } from 'react-router';

import StyledApp from './styles/App-styled';
import Main from './pages/main/Index';
import Create from './pages/main/post/Create';
import Detail from './pages/main/post/Detail';

const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/search?' element={<Main />} />
        </Route>
        <Route path='/create' element={<Create />} />
        <Route path='/post/:postId' element={<Detail />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
