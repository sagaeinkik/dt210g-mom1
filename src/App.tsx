import './App.scss'
import Header from "./components/Header";
import ListCollection from "./components/ListCollection";

function App() {

  return (
    <>
      <Header title="Alpint" />
      <div className="text-content">
        <h1>Lista över utvalda backar i Åres skidsystem</h1>
        <p>Fun fact: Långsvängen har en sammanslagen längd på 6.5km eftersom den sicksackar sig hela vägen från liftarnas högsta punkt ner till byn. </p>
        <p>Fun fact 2: Bortsett från Långsvängens längd och Störtloppets fallhöjdsmeter, finns varken längd eller fallhöjdsmeter uppskrivet för resterande pister någonstans.</p>
        <ListCollection />
      </div>
    </>
  )
}

export default App
