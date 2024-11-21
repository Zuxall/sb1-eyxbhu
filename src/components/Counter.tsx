import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}