import Diena from "./Diena"

function App() {
  const PirmdienasStundas = [
    "sports",
    "dabaszinibas",
    "Socialas zinibas un vesture",
    "Krievu valoda"
];
const OtrdienasStundas = [
  "stunda",
  "atkal stunda",
  "stunda ja",
  "yes"
];
const visasStundas = {
  Pirmdiena: [
    "sports",
    "dabaszinibas",
    "Socialas zinibas un vesture",
    "Krievu valoda"
  ]
}
  return (  
    <>
  <div> stundu saraksts jau tagad</div>
  <Diena diena="Pirmdiena" stundas={PirmdienasStundas}/>
  <Diena diena="Otrdiena" stundas={OtrdienasStundas}/>
  </>
  )
}


export default App;

//.forEach() ir masīva metode, kura apskata ikkatru masīva elementu, bet neko neatgriež(nav return)
//.map() ir masīvu metode, kura apskata ikkatru masīva elementu un atgriež jaunu masīvu(return Array)