'use client'
import './globals.css'
import { darkTheme, lightTheme } from './theme/theme'
import { CssBaseline, FormControlLabel, Switch, ThemeProvider } from '@mui/material'
import { ChangeEvent, useState } from 'react'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  let [useDarkTheme, setUseDarkTheme] = useState(false)
  let [theme, setTheme] = useState(useDarkTheme ? darkTheme : lightTheme)

  const changeThemeHandler = (target: ChangeEvent, currentValue: boolean) => {
    setUseDarkTheme(currentValue)
    setTheme(currentValue ? darkTheme : lightTheme)
  }

  return (
    <html lang='ko-kr'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <body id='__next'>
      <FormControlLabel
        control={
          <Switch
            checked={useDarkTheme}
            inputProps={{ 'aria-label': 'Dark Mode' }}
            onChange={(target, value) => changeThemeHandler(target, value)}
          ></Switch>
        }
        label='Dark Mode'
        labelPlacement='start'
      />
      <div id='children'>
        {children}
      </div>
      </body>
    </ThemeProvider>
    </html>
  )
}
