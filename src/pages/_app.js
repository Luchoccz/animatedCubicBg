import "@/styles/globals.css"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";
import Kinet from 'kinet'
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [circle, setCircle] = useState(null)
  const router = useRouter()
  var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  })

  useEffect(() => {
    if(typeof window !== 'undefined'){
      setCircle(document.getElementById('circle'))
    }
  }, [])

  useEffect(() => {
    kinet.on('tick', function(instances) {
      if(circle !== null){
        circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`
      }
    })
  }, [circle])

  if (typeof document !== 'undefined') {
    document.addEventListener('mousemove', function (event) {
      kinet.animate('x', event.clientX - window.innerWidth/2)
      kinet.animate('y', event.clientY - window.innerHeight/2)
  })}
  return(
    <AnimatePresence mode='wait'>
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
      </motion.div>
      {/* <Box className={styles.wrapper} />
      <Box id="circle" className={styles.circle} /> */}
    </AnimatePresence>
  ) 
}
