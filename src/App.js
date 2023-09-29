import Diena from "./Diena"

function App() {
  const pirmdienasStundas = [
    "sports",
    "dabaszinibas",
    "Socialas zinibas un vesture",
    "Krievu valoda"
];
const otrdienasStundas = [
  "stunda",
  "atkal stunda",
  "stunda ja",
  "yes"
];
  return (  
    <>
  <div> stundu saraksts jau tagad</div>
  <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
  <Diena diena="Otrdiena" stundas={otrdienasStundas}/>
  </>
  )
}


export default App;