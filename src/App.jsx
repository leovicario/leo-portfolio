import './css/main.css'
import './css/responsive.css'
import Home from './pages/Home.jsx';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'



function App() {

  const lenis = useLenis(({ scroll}) => {
    // called every scroll 
  })

  return (
    <>
    <ReactLenis root options={{
      lerp: 0.05,
      syncTouch: true,
      touchInertiaMultiplier: 100,
      infinite: false,
    }}>
        <Home />
    </ReactLenis>
    </>
  )
}

export default App
