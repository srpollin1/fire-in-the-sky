import { ScrollControls, Scroll, Sparkles } from "@react-three/drei"
import { Scene } from "./components/Scene"





function App() {

  return (
    <>
      <color attach={'background'} args={['#000000']} />
      <directionalLight color="black" position={[0, 0, 5]} />
      <ScrollControls pages={4} damping={0.5}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
        <Sparkles size={2} color={"#fff"} scale={[20, 10, 10]} />
        {/*AQUI VA EL MODELO 3D - no se mueve*/}

        <Scene position={[0, -0.5, 3]} scale={1} />
        <Scroll>
          {/* Canvas contents in here will scroll along */}
          {/*AQUI VA EL MODELO 3D - SE MUEVE*/}


        </Scroll>
        <Scroll html style={{ width: '100%' }}>
          <h1 className='title' style={{ color: '#cdcbca', position: 'absolute', top: `65vh`, left: '50%', fontSize: '4em', transform: `translate(-50%,-50%)` }}>Fire in the sky</h1>

          <div className='row' style={{ position: 'absolute', top: `132vh` }}>
            <h2>En el reino etéreo</h2>
            <p style={{ maxWidth: '336px' }}>de Fire in the Sky, la realidad y
              la imaginación se entrelazan de manera asombrosa. Aquí, las casas flotantes adornan
              el cielo, las nubes esconden enigmas por resolver y la aventura te espera en cada
              esquina del firmamento. Sumérgete en este mundo celestial, donde las posibilidades
              son infinitas y cada día es una nueva odisea. Embárcate en un viaje sin igual con
              Fire in the Sky y descubre un rincón del universo donde tus sueños toman vuelo.</p>
            <button>Leer mas</button>
          </div>


          <div className='row' style={{ position: 'absolute', top: `230vh` }}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
              <div className="rol">
                <h2 style={{ maxWidth: "440px" }}>En lo alto del cielo,</h2>
                <p style={{ maxWidth: '440px' }}>en un lugar llamado Fire in the Sky,
                  se despliega un mundo de maravillas y asombro. Aquí, las casas flotantes danzan entre las nubes,
                  los enigmas se ocultan en los rayos del sol y la emoción te espera en cada esquina.
                  Adéntrate en este reino celeste, donde las posibilidades son infinitas y la aventura
                  es tu compañera constante. Descubre los secretos que aguardan en las alturas con Fire in the Sky
                  y experimenta una realidad fuera de este mundo</p>
                <button>Leer mas</button>
              </div>
            </div>
          </div>

          <button className="jugarAhora" style={{ position: 'absolute',  left: '50%', transform: `translate(-50%,-50%)` }}>JUGAR AHORA</button>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default App
