import './App.css';
import Header from "./header"
import Home from "./Home"
import Projects from "./Projects"
import Games from "./Games"
import AboutMe from "./AboutMe"
import Context from './context/context';
import { Route, Routes } from 'react-router-dom';
import ContentPage from './ContentPage';
import ProjectList from './ProjectList';
import Modal from './modal';
import { useStateContext } from './context/context';

function App() {

  

  return (
    <Context>
      <div id="app">
        <Header></Header>
        <div id="content">
          <Routes>
            <Route path='/' element={<ContentPage/>}/>
            <Route path="/projectlist" element={<ProjectList/>}/>
          </Routes>
        </div>
      </div>
    </Context>

  );
}

export default App;
