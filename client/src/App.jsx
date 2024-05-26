import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setdata] = useState([{}])
  useEffect(() => {

    const response = axios.get('http://localhost:3000/api');
    const userData = response.data
    setdata(userData)

    },[])

  return (
    <>
      <div>
        {data.map((d,i) => <li key={i}>d</li>)}
      </div>
    </>
  )
}

export default App
