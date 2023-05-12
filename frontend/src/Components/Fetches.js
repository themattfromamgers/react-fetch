import logo from './logo.svg';
import axios from 'axios'
import { useEffect, useState } from 'react';
function Fetches(){
const initial = {username: '',name: '',email: ''}

  const [date, setDate] = useState(initial)
  const [datas, setDatas] = useState([])

  const inputChange  = (e)=>{
    setDate({...date, [e.target.name]: e.target.value})
  }

  const formSubmit = ()=>{
    axios.post('http://localhost:80/user', date)
  } 

  useEffect(()=>{
    const getFunc = async () =>{
      const getData = await axios.get('http://localhost:80/users')
      setDatas(getData.data)

    }
    getFunc()
  })

  return(
    <div className="App">
      username: {date.username} <br />
      name: {date.name} <br />
      email: {date.email} <br />
      <form onSubmit={formSubmit}>
        <input type="text" name='username' value={date.username} onChange={inputChange} />
        <input type="text" name='name' value={date.name} onChange={inputChange} />
        <input type="email" name='email' value={date.email} onChange={inputChange} />
        <button type="submit">GMÖDNER</button>
      </form>

      {JSON.stringify(datas)}

    </div>
  )

}

export default Fetches