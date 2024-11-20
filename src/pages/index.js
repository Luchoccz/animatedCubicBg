import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import AnimatedBox from "@/components/animatedBox";
import { Box } from "@mui/material";

export default function Home() {

  return (
    <>
      <Head>
        <title>Animated background box</title>
        <meta name="Animated background for a page" content="Animated background box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.bannerText}>
        <Menu />
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
          Bienvenido a mi página
        </Box>
        <AnimatedBox />
        <Footer />
      </main>
    </>
  )
}
