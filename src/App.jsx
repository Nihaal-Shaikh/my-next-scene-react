import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';

function App() {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/example');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Main />
      <div>
        {/* Display data from the API */}
        {apiData && <p>{apiData.message}</p>}
      </div>
    </>
  )
}

export default App
