'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeInitializer() {
  const { setTheme } = useTheme()

  useEffect(() => {
    // Only set to dark if no theme is stored
    const storedTheme = localStorage.getItem('speaklab-theme')
    if (!storedTheme) {
      setTheme('dark')
    }
  }, [setTheme])

  return null
}
