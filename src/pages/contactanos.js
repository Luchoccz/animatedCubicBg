import React from "react";
import Menu from "@/components/menu";
import AnimatedBox from "@/components/animatedBox";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
import Head from "next/head";

const Contactanos = () => {
  return(
    <>
      <Head>
        <title>Animated background box</title>
        <meta name="Animated background for a page" content="Animated background box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <AnimatedBox />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '67vh',
          fontSize: 'clamp(25px , 5vw, 60px)',
          color: '#fff',
          fontWeight: 'bolder'
        }}
      >
        Contactanos
      </Box>
      <Footer />
    </>
  )
}

export default Contactanos
