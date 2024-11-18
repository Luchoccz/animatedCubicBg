import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Box, Divider, Typography } from "@mui/material";
import Kinet from 'kinet'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });

  if (typeof document !== 'undefined') {
    var circle = document.getElementById('circle');
  }

  kinet.on('tick', function(instances) {
    circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
  });

  if (typeof document !== 'undefined') {
  document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth/2);
    kinet.animate('y', event.clientY - window.innerHeight/2);
  })};

  return (
    <>
      <Head>
        <title>Animated background box</title>
        <meta name="Animated background for a page" content="Animated background box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className={styles.bannerText}>
          <Box
            sx={{
              height: 50,
              float: 'right',
              display: 'flex',
              padding: '40px 15px',
              texTransform: 'uppercase',
              color: '#fff',
              fontSize: '20px',
            }}
          >
            {
              ['Inicio', 'Nosotros', 'Contactanos'].map((item, index) => {
                return (
                  <Typography
                    key={index}
                    sx={{
                      paddingX: '10px',
                      fontSize: '25px',
                      position: 'relative',
                      zIndex: '1',
                      cursor: 'pointer',
                      '&:hover': {
                        fontWeight: 'bolder',
                        transition: 'all 0.5s',
                        transform: 'scale(1.05)',
                      }
                    }}>{item}</Typography>
                )
              })
            }
          </Box>

          <h2>Bienvenido a mi página</h2>

          <div className="animation-area">
            <ul className={styles.boxArea}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
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
            <div className={styles.wrapper} />
            <div id="circle" className={styles.circle}></div>
        </main>
      </div>
    </>
  );
}
