import { ICardProps } from "./card.structure";

export default function Card({info}: ICardProps) {
  console.log(info);
  
  return (
    <div>
      <p>{ info.name }</p>

      <div>
        <img
          src={ info.image }
          alt={ info.name }
        />
      </div>

      <p>
        Descrção:
        {' '}
        { info.description }
      </p>

      <div>
        <p>Velocidade:</p>
        <p>{ info.attr1 }</p>
      </div>

      <div>
        <p>Força:</p>
        <p>{ info.attr2 }</p>
      </div>

      <div>
        <p>Resistencia:</p>
        <p>{ info.attr3 }</p>
      </div>

      <div>
        <p>Raridade da carta:</p>
        <p>{ info.rarity }</p>
      </div>
    </div>
  )
}