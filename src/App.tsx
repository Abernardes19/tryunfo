import { useState } from 'react'
import Card from './components/Card'
import Deck from './components/Deck'
import Form from './components/Form'
import { defaultForm, IFromCard } from './components/Form/form.structure'
import Header from './components/Header'

export default function App() {
  const [allCards, setAllCards] = useState([] as IFromCard[]);
  const [formCard, setFormCard] = useState(defaultForm as IFromCard);
  const [trunfo, setTrunfo] = useState(false as boolean);

  const saveCard = () => {
    if (formCard.trunfo === true) {
      setTrunfo(true)
    }
    setAllCards(oldCards => [...oldCards, formCard]);
    setFormCard(defaultForm)
  }

  return (
    <div>
      <Header />
      <div className="flex gap-10 w-screen items-center justify-center mb-5 mt-[200px]">
        <Form setCards={setAllCards} info={formCard} setInfo={setFormCard} saveCard={saveCard} trunfo={trunfo} />
        <Card info={formCard} />
      </div>
      <div className="flex gap-10 w-screen items-center justify-center">
        <Deck allCards={allCards} />
      </div>
    </div>
  )
}
