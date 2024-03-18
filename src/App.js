import './App.css';
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Sidebar from './components/SideBar/Sidebar';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Project/>
    </div>
  );
}

export default App;
