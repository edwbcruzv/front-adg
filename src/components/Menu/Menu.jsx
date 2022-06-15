import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import FemaleIcon from '@mui/icons-material/Female';


const Menu = () => {
    
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box sx={{
                marginLeft:1,
                marginRight:3}}>
        <FemaleIcon sx={{ fontSize: 50 }}/>
        </Box>
        
        <MenuItem>
          <LinkRouter
              to="/" 
              >
                Inicio 
          </LinkRouter>
        </MenuItem>

        <MenuItem>
          <LinkRouter
              to="/mapas" 
              >
                Mapas
          </LinkRouter>
        </MenuItem>

        <MenuItem>
          <LinkRouter
              to="/estadisticas" 
              >
                Estadisticas
          </LinkRouter>
        </MenuItem>

        <MenuItem>
          <LinkRouter
              to="/resultados" 
              >
                Resultados
          </LinkRouter>
        </MenuItem>
          {/* <Box sx={{display:'flex',
                    flexDirection:'row',
                    }} >
            <Typography variant="h5">CIC</Typography>
          </Box> */}
      </Toolbar>
    </AppBar>
  )
}

export default Menu