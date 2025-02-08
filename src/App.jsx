import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import MovieDetailsView from './views/MovieDetailsView';

function App() {

  return (
    <Routes>
      <Route index element= {<HomeView />}/>
      <Route path='movieDetails/:id' element = {<MovieDetailsView />}/>
    </Routes>
  );
}

export default App;
