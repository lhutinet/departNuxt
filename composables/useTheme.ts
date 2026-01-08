// composables/useTheme.ts
export const useTheme = () => {
  const theme = useState<'light' | 'dark'>('theme', () => 'light')

  const setTheme = (value: 'light' | 'dark') => {
    theme.value = value
    if (process.client) {
      document.documentElement.setAttribute('data-theme', value)
    }
  }

  return { theme, setTheme }
}
