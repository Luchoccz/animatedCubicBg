import React from "react"
import { Box, Divider } from "@mui/material"

const Footer = () => {
  return(
    <footer>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#000',
          width: '100%',
          height: '100px',
          opacity: '0.5',
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginRight: '10px'
          }}
        >
          Copyright &copy;&nbsp;{new Date().getFullYear()}
        </Box>
        <Divider
          orientation="vertical"
          variant="middle" flexItem
          sx={{
            backgroundColor: '#fff',
            marginX: '10px',
            paddingY: '10px',
          }}
        />
        <Box>
          Todos los derechos reservados
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
