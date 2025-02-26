import { useEffect, useState } from "react";
import Banner from './componentes/Banner/Banner';
import News from './componentes/News';

function App() {
   const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fiap")
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);
  return (
    <div className="App">
      <Banner/>
      <News title="Últimas Notícias" newsData={newsData}/>
    </div>
  );
}

export default App;
