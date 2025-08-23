import React, { useContext } from 'react'
import { ThemeContext } from './ExampleContext'

export default function ExampleInfo() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h2>ExampleInfo</h2>
            <div className={theme}>
                <p>This component is used to demonstrate how to create a simple React component.</p>
            </div>
        </div>
    )
}
