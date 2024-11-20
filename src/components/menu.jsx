import React from "react"
import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import styles from "@/styles/Home.module.css";

const Menu = () => {
  const { push } = useRouter()
  return (
    <>
      <Box
        sx={{
          height: 50,
          float: 'right',
          display: 'flex',
          padding: '40px 15px',
          texTransform: 'uppercase',
          color: '#fff',
        }}
      >
        {
          ['Inicio', 'Nosotros', 'Contactanos'].map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  paddingX: '10px',
                  fontSize: 'clamp(15px , 5vw, 30px)',
                  position: 'relative',
                  zIndex: '1',
                  cursor: 'pointer',
                  '&:hover': {
                    fontWeight: 'bolder',
                    transition: 'all 0.5s',
                    transform: 'scale(1.05)',
                  }
                }}
                onClick={() => {push(`/${item == 'Inicio' ? '/' : item.toLowerCase()}`)}}
              >{item}</Box>
            )
          })
        }
      </Box>
      <motion.div
        style={{
          zIndex: 10000
        }}
        className={styles.slideIn}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        style={{
          zIndex: 10000
        }}
        className={styles.slideOut}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  )
}
export default Menu
