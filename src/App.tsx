import { useState } from 'react'
import Form from './components/Form'
import { IFromCard } from './components/Form/form.structure'
import Header from './components/Header'

export default function App() {
  const [allCards, setAllCards] = useState([] as IFromCard[])

  return (
    <div>
      <Header />
      <Form setInfos={setAllCards} />
    </div>
  )
}
