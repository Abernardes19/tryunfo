import { useState } from "react";
import { defaultForm, IFormProps, IFromCard } from "./form.structure";
import { validadeBtn, validateAllAttr, validateAttr } from "./validations";

export default function Form(props: IFormProps) {
  const [info, setInfos] = useState(defaultForm as IFromCard);

  const handleChange = ( event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const {target: {value, name}} = event;
    setInfos({ ...info, [name]: value });
  }

  const attrChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {target: {value, name}} = event;
    
    if (validateAttr(Number(value)) && validateAllAttr(info, name, Number(value))) {
      setInfos({ ...info, [name]: Number(value) });
    }
  }

  return (
    <form>
      <h3>Crie sua carta!</h3>
        <div>
          <p>Nome da Carta:</p>
          <label htmlFor="nomeDaCarta">
            <input
              data-testid="name-input"
              name="name"
              type="text"
              value={ info.name }
              onChange={ handleChange }
            />
          </label>
        </div>

        <div>
          <p>Descrção:</p>
          <label htmlFor="descricao">
            <textarea
              data-testid="description-input"
              name="description"
              value={ info.description }
              onChange={ handleChange }
              maxLength={90}
            />
          </label>
        </div>

        <div>
          <p>Velocidade:</p>
          <label htmlFor="primeiroAtributo">
            <input
              data-testid="attr1-input"
              name="attr1"
              type="number"
              value={ info.attr1 }
              onChange={ attrChange }
            />
          </label>
        </div>

        <div>
          <p>Força:</p>
          <label htmlFor="segundoAtributo">
            <input
              data-testid="attr2-input"
              name="attr2"
              type="number"
              value={ info.attr2 }
              onChange={ attrChange }
            />
          </label>
        </div>

        <div>
          <p>Resistencia:</p>
          <label htmlFor="terceiroAtributo">
            <input
              data-testid="attr3-input"
              name="attr3"
              type="number"
              value={ info.attr3 }
              onChange={ attrChange }
            />
          </label>
        </div>

        <div>
          <p>Url da Imagem:</p>
          <label htmlFor="img">
            <input
              data-testid="image-input"
              name="image"
              type="string"
              value={ info.image }
              onChange={ handleChange }
            />
          </label>
        </div>

        <div>
          <p>Raridade da Carta:</p>
          <label htmlFor="raridade">
            <select
              data-testid="rare-input"
              name="rarity"
              value={ info.rarity }
              onChange={ handleChange }
            >
              <option>Normal</option>
              <option>Raro</option>
              <option>Muito raro</option>
            </select>
          </label>
        </div>
        <button type="button" disabled={validadeBtn(info)} >Criar Carta</button>
    </form>
  )
}