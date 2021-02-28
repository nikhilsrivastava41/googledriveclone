import './App.css';
import Header from './components/header';
import SideBar from './components/sidebar';
function App() {
  // authentication
  return (
    <div className="App">
      {/* header */}
      <Header/>
      <SideBar/>
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
