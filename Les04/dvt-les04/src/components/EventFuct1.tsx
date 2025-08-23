import React from 'react'

export default function EventFuct1() {
    const eventHandleClick1 = (content:string) => {
        alert(content);
    }
  return (
    <div>
        <button>Click me</button>
        <button onClick={() => eventHandleClick1('Hello World')}>Click Me</button>
    </div>
  )
}
