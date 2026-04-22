import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Button} from 'bootstrap'

function App() {
  
  const [count, setCount] = useState(0);

return (
<>
  <p>count:{count}</p>
  <button onClick={()=> setCount(count+1)}>Increment</button>
  <button onClick={()=> setCount(count-1)}>Decrement</button>

</>
)

}
 export default App