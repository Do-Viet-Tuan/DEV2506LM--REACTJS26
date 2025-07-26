import React, { createContext, useContext, useState } from 'react'

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

interface Props {
    children: any;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function Ex07ThemeComponent() {
    const context = useContext(ThemeContext);
    if (!context) {
        return <div>ThemeContext không tồn tại</div>;
    }
    const { theme, toggleTheme } = context;
    return (
        <div style={{ padding: "20px", backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <h2>Che do hien tai {theme}</h2>
            <button onClick={toggleTheme}>
                Chuyen doi theme
            </button>
            <p>Click vao nut de chuyen doi giua che do sang toi</p>
        </div>
    )
}

export default function Ex07ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<"light" | "dark">("light"); // Khởi tạo theme mặc định là "light"

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <div className='alert alert-dark'>
            <p>Example 07</p>
            <p>Mo ta:</p>
            <p>Su dung useContext de tao theme sang toi</p>
            <p>cho phep nguoi dung chuyen doi giua cac theme bang nut bam</p>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className={theme}>{children}</div>
            </ThemeContext.Provider>
            <p>Theme hien tai: {theme}</p>
            <p>Click vao nut de chuyen doi giua che do sang toi</p>
        </div>
    )

}
