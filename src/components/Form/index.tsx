import { defaultForm, IFormProps, IFromCard } from "./form.structure";
import { validadeBtn, validateAllAttr, validateAttr } from "./validations";

export default function Form(props: IFormProps) {
  const handleChange = ( event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const {target: {value, name}} = event;
    props.setInfo({ ...props.info, [name]: value });
  }

  const attrChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {target: {value, name}} = event;
    
    if (validateAttr(Number(value)) && validateAllAttr(props.info, name, Number(value))) {
      props.setInfo({ ...props.info, [name]: Number(value) });
    }
  }

  return (
    <form className=" border p-10 flex flex-col items-center">
      <h3>Crie sua carta!</h3>
      <div>
      <div>
        <p>Nome da Carta:</p>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            type="text"
            value={ props.info.name }
            onChange={ handleChange }
          />
        </label>
      </div>

      <div>
        <p>Descrção:</p>
        <label htmlFor="description">
          <textarea
            id="description"
            name="description"
            value={ props.info.description }
            onChange={ handleChange }
            maxLength={90}
          />
        </label>
      </div>

      <div>
        <p>Velocidade:</p>
        <label htmlFor="attr1">
          <input
            id="attr1"
            name="attr1"
            type="number"
            value={ props.info.attr1 }
            onChange={ attrChange }
          />
        </label>
      </div>

      <div>
        <p>Força:</p>
        <label htmlFor="attr2">
          <input
            id="attr2"
            name="attr2"
            type="number"
            value={ props.info.attr2 }
            onChange={ attrChange }
          />
        </label>
      </div>

      <div>
        <p>Resistencia:</p>
        <label htmlFor="attr3">
          <input
            id="attr3"
            name="attr3"
            type="number"
            value={ props.info.attr3 }
            onChange={ attrChange }
          />
        </label>
      </div>

      <div>
        <p>Url da Imagem:</p>
        <label htmlFor="img">
          <input
            id="img"
            name="image"
            type="string"
            value={ props.info.image }
            onChange={ handleChange }
          />
        </label>
      </div>

      <div>
        <p>Raridade da Carta:</p>
        <label htmlFor="rarity">
          <select
            id="rarity"
            name="rarity"
            value={ props.info.rarity }
            onChange={ handleChange }
          >
            <option>Normal</option>
            <option>Raro</option>
            <option>Muito raro</option>
          </select>
        </label>
      </div>
      </div>
      <button
        type="button"
        disabled={validadeBtn(props.info)}
        className="bg-[#a5a790]"
      >
        Criar Carta
      </button>
    </form>
  )
}