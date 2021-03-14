import './App.css';
import Header from './components/header';
import SideBar from './components/sidebar';
import FilesView from './components/filesView/FilesView';
function App() {
  // authentication
  return (
    <div className="App">
      {/* header */}
      <Header/>
      <div className="app__main">
        <SideBar/>
        <FilesView/>
      </div>
      {/* if auth: true
        sidebar
        files view
        sideIcons
      */} 
      {/* if auth: false
        log in
      */}
    </div>
  );
}

export default App;
