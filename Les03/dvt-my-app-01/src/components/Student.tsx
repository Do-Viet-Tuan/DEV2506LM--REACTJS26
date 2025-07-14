import React from 'react'

interface StudentProps {
    id: number;
    name: string;
    age: number;
}

export default function Student(props: StudentProps) {
  return (
    <div>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
        </tr>

    </div>
  )
}
