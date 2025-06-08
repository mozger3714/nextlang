'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ColorModeToggler() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative w-16 h-8 rounded-full bg-gray-700">
        <div className="absolute top-1 left-1 w-6 h-6 rounded-full translate-x-8 bg-gray-800"></div>
      </div>
    )
  }

  return (
    <>
      <label htmlFor="theme-toggle" className="sr-only">
        Przełącznik trybu kolorów
      </label>
      <button
        id="theme-toggle"
        onClick={() => {
          const newTheme = theme === 'dark' ? 'light' : 'dark'
          setTheme(newTheme)
        }}
        className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {/* Track with sun/moon trails */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {/* Sun trail (yellow) */}
          <div
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-yellow-200 transition-opacity duration-500 ${
              theme === 'light' ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>

          {/* Moon trail (blue) */}
          <div
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-200 to-transparent transition-opacity duration-500 ${
              theme === 'dark' ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
        </div>

        {/* Toggle handle with sun/moon */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-500 transform ${
            theme === 'dark'
              ? 'translate-x-8 bg-gray-800'
              : 'translate-x-0 bg-yellow-400'
          }`}
        >
          {/* Sun rays (visible in light mode) */}
          {/* <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                theme === 'light' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-2 bg-yellow-500 rounded-full"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-8px)`,
                  }}
                />
              ))}
            </div> */}

          {/* Moon craters (visible in dark mode) */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              theme === 'dark' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </button>
    </>
  )
}
