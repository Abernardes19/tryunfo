import Card from "../Card";
import { IDeckProps } from "./deck.structure";

export default function Deck(props: IDeckProps) {
  const renderDeck = () => {
    return props.allCards.map((e) => {
      return (
        <Card info={e} />
      )
    })
  }

  return (
    <div className="flex flex-col items-center mb-10">
      <p className=" my-10 text-2xl">Suas Cartas</p>
      <div className=" flex gap-8 max-w-[1300px] flex-wrap">
        { renderDeck() }
      </div>
    </div>
  )
}