import './App.css';
import Header from './components/header';
function App() {
  // authentication
  return (
    <div className="App">
      {/* header */}
      <Header/>
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
