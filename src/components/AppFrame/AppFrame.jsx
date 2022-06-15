import React from 'react'
import {Grid,Box} from '@mui/material'
import Menu from '../Menu'

const AppFrame = ({children}) => {
  return (
    <Box sx={{border:1}}>
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="strech"
    >
      <Grid item spacing={1}>
            <Menu/>
      </Grid>
      <Grid item spacing={1}>
      <Box sx={{border:1}}>
            {children}
      </Box>
      </Grid>
    </Grid>
    </Box>
  )
}

export default AppFrame