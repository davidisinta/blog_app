import './App.css';
import React, {useState,useEffect} from "react";




function App() {

     const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/tester')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
      <div className="App">
          heyy theree

          <div>
              { JSON.stringify(data) }
          </div>

      </div>


  );
}

    export default App;
