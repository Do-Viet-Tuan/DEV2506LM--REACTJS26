import React, { createContext, useState } from 'react'
import ExampleContent from './ExampleContent';

export const ThemeContext = createContext<string>('')

export default function ExampleContext() {
    const [theme, setTheme] = useState('bg-success'); // Default theme is success
    // ham xu ly su kien thay doi theme
    const handleToggle = () => {
        setTheme(theme === 'bg-success' ? 'bg-light' : 'bg-success'); // Toggle between success and light themes
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h3>thay doi theme: {theme}</h3>
                <button onClick={handleToggle}>Toggle Theme</button>
                <ExampleContent />
            </div>
        </ThemeContext.Provider>
    )
}
