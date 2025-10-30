import { Activity, useState } from "react"

function App() {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      <Activity mode={isVisible ? 'visible' : 'hidden'} >
        <div>Hello</div>
      </Activity>
    </div>
  )
}

export default App
