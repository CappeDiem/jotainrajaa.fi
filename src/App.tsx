import Footer from "./components/Footer"

function App() {

  return (
    <div className={"flex flex-col min-h-screen"}>
      <div className='flex flex-col flex-grow items-center justify-center'>
        <img src="/rajaa.png" className="h-32 my-8" />

        <h1 className='text-6xl'>Hei, Nyt jotain rajaa!</h1>

        <div className="flex flex-row my-2">
          <a className="m-2 py-2 px-4 bg-sky-900 rounded-md drop-shadow-lg hover:bg-sky-800" href="https://www.maanmittauslaitos.fi/">Mittaa Rajasi</a>
          <a className="m-2 py-2 px-4 bg-sky-900 rounded-md drop-shadow-lg hover:bg-sky-800" href="https://raja.fi/">Ilmoita rajojen ylittämisestä</a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default App
