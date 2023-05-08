import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import { defaultForm, IFromCard } from './components/Form/form.structure'
import Header from './components/Header'

export default function App() {
  const [allCards, setAllCards] = useState([] as IFromCard[])
  const [formCard, setFormCard] = useState(defaultForm as IFromCard)

  return (
    <div>
      <Header />
      <div className="flex gap-10">
        <Form setCards={setAllCards} info={formCard} setInfo={setFormCard} />
        <Card info={formCard} />
      </div>
    </div>
  )
}
