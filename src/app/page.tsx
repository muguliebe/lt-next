'use client'

import { Button, Grid, Stack } from '@mui/material'

export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1 className="text-blue-500">lt-next</h1>
      <h4 className="text-red-500">mui, mdx</h4>
      <Stack direction="row" columnGap={1}>
        <Button variant="contained">Contained</Button>
      </Stack>
    </Grid>
  )
}
