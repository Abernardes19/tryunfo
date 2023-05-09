import { ICardProps } from "./card.structure";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Card({info}: ICardProps) {
  return (
    <div className=" flex flex-col w-screen sm:w-[400px] border h-[650px] bg-beige p-10 items-center">
      <p className="text-2xl mb-4">{ info.name }</p>

      <img
        className=" h-[200px] w-[200px] bg-white rounded-full mb-4"
        src={ info.image }
        alt={ info.name }
      />

      <div className=" w-[300px] h-[96px] mb-4">
        <p>Descrção:</p>
        <p className=" break-words">{ info.description }</p>
      </div>

      <div className=" w-[300px] mb-4">
        <div className=" flex w-full justify-between mb-4">
          <p>Velocidade:</p>
          <p>{ info.attr1 }</p>
        </div>

        <div className=" flex w-full justify-between mb-4">
          <p>Força:</p>
          <p>{ info.attr2 }</p>
        </div>

        <div className=" flex w-full justify-between mb-4">
          <p>Resistencia:</p>
          <p>{ info.attr3 }</p>
        </div>

        <div className=" flex w-full justify-between mb-4">
          <p>Raridade da carta:</p>
          <p>{ info.rarity }</p>
        </div>
      </div>
      { info.trunfo ? <AiFillStar size={25} /> : <AiOutlineStar size={25}  /> }
    </div>
  )
}