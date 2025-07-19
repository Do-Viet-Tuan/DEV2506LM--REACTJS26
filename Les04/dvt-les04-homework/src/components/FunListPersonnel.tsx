import React from 'react'
import IPersonnel from './IPersonnel';

type FunListPersonnelProps = {
    personnels: IPersonnel[];
}

export default function FunListPersonnel({ personnels }: FunListPersonnelProps) {
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {personnels.map((personnel, index) => {
                return (
                <tr key={index}>
                    <td>{personnel.id}</td>
                    <td>{personnel.name}</td>
                    <td>{personnel.age !== undefined ? personnel.age : ''}</td>
    
                    <td>
                    <button className='btn btn-primary btn-sm me-2'>View</button>
                    <button className='btn btn-danger btn-sm me-2'>Delete</button>
                    <button className='btn btn-warning btn-sm me-2'>Edit</button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}
