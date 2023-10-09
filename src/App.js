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

const visasStundas = [
  {
    diena: "Pirmdiena",
stundas: [
  "sports",
    "dabaszinibas",
    "Socialas zinibas un vesture",
    "Krievu valoda"
  ]
},
{
  diena: "Otrdiena",
stundas: [
  "sgds",
    "dabasdgdsgdsbas",
    "Socialgsdgdsun vesture",
    "Krigsdgsd valoda"
  ]
},
{
  diena: "Tresdiena",
stundas: [
  "sgdsgsdrts",
    "dabasgsdgdsnibas",
    "gdsgsdbas un vesture",
    "Krievu valoda"
  ]
},
{
  diena: "Ceturdiena",
stundas: [
  "spgsdgsdgts",
    "dabgdsgdsnibas",
    "Socidsgdsgsds un vesture",
    "gsdgdsgsdgsd valoda"
  ]
},

{
  diena: "Piektdiena",
stundas: [
  "shdshdsgsdts", 
    "dabrrefbfbhrdfbhdbas",
    "Ssdhrfdgbdgeesdvesture",
    "Krievu valoda"
  ]
},
]
const DienasJSX = visasStundas.map((diena, indekss) => {
  return <Diena key={indekss} diena = {diena.diena} stundas={diena.stundas}/>
})
  return (  
    <>
    
  <div> stundu saraksts jau tagad</div>
  <Diena diena="Pirmdiena" stundas={PirmdienasStundas}/>
  <Diena diena="Otrdiena" stundas={OtrdienasStundas}/>
    {DienasJSX}
  </>
  )
}
export default App;

//.forEach() ir masīva metode, kura apskata ikkatru masīva elementu, bet neko neatgriež(nav return)
//.map() ir masīvu metode, kura apskata ikkatru masīva elementu un atgriež jaunu masīvu(return Array)