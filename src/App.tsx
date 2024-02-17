import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css'
import Home from './views/Home/Home'
import axios from 'axios';
import { API } from './constants';

function App() {
  const [seedData, setSeedData] = useState<Array<Record<string, any>>>([]);
  useEffect(() => {
    (async () => {
      try {
        axios.get(`${API}seed`)
          .then(({data}) => {
            const temp: Array<Record<string, any>> = [];
            for(const top of Object.values(data)){
              for (const item of Object.values(top as object)){
                temp.push(item)
              }
            }
            setSeedData(temp)
          })
          .catch((err) => console.log(err));
      } catch (ex) {
        console.log(ex);
      }
    })();
  },[]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Home seedData={seedData} />
    </DndProvider>
  )
}

export default App
