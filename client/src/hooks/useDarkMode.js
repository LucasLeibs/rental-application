import { useEffect, useState} from 'react'

export default function useDarkMode() {
  const root = window.document.documentElement
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme;
  const opposite = theme === "light" ? "dark" : "light"
  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    root.classList.add(theme);

  } else {
    root.classList.add(lightTheme)
  }
// const [theme, setTheme] = useState('light');
// const colorTheme = theme === 'light' ? 'dark' : 'light'
// const localTheme = localStorage.getItem("theme")
// localStorage.setItem("theme", theme)
// useEffect(() => {
  
//   const root = window.document.documentElement
//   localStorage.setItem("dark", colorTheme)
//     root.classList.add(theme)
//     root.classList.remove(colorTheme)
 
//   if (localTheme === 'light') {
//     root.classList.add('dark')
//     root.classList.remove('light')
//   } else {
//     root.classList.add('light')
//     root.classList.remove('dark')
//   }
  
  
// }, [theme], colorTheme)
//     return [colorTheme, setTheme];
}