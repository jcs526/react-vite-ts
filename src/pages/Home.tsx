import { useState } from "react"

const Home = () => {
  const [count, setCount] = useState(0)

  return (<><h1>Home</h1>
    <div className="card">
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setCount(0)}>
        reset
      </button>
    </div></>)
}

export default Home