

function App() {
  return (
    <div className="main-container">
      <div className="search-container">
        <input type="text" id='search-input' className="search-input" placeholder='Symbol'/>
      </div>
      <div className="results-container">
        <span id="results">Results</span>
      </div>
    </div>
  );
}

export default App;
