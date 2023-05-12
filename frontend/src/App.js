import Zation from './Components/Zation';
import {useMemo, useState} from 'react'

function App() {

  const [name, setName] = useState('');
  
  const data = useMemo(()=>{

    console.log('name değeri değiiyor:', name)
    return [{ad: name}]
  }, [name])
  return (
    <>
    <Zation data={data} />
    {name}
    <input type="text" value={name} onChange={e=> setName(e.target.value)} />


    </>
  );
}

export default App;
