// composables/useTheme.ts
export const useTheme = () => {
  const theme = useState<'light' | 'dark'>('theme', () => 'light')

  const setTheme = (value: 'light' | 'dark') => {
    theme.value = value

    if (process.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('theme', value)
    }
  }

  const initTheme = () => {
    if (!process.client) return

    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    } else {
      setTheme(theme.value)
    }
  }

  return { theme, setTheme, initTheme }
}

