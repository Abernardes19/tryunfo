import { IFormProps } from "./form.structure";
import { validadeBtn, validateAllAttr, validateAttr } from "./validations";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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

  console.log(props.info);
  

  const trunfoClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const boolean = !props.info.trunfo
    props.setInfo({...props.info, trunfo: boolean})
  }

  return (
    <form className=" border p-10 flex flex-col items-center bg-beige w-screen sm:w-[475px] h-[650px]">
      <h3 className=" mb-5 text-2xl">Crie sua carta!</h3>
      <div className=" w-full flex flex-col items-center">
        <div className="w-full mb-4">
          <p className=" mb-1">Nome da Carta:</p>
          <label htmlFor="name">
            <input
              className="bg-beige border rounded w-full p-1"
              name="name"
              id="name"
              type="text"
              value={ props.info.name }
              onChange={ handleChange }
            />
          </label>
        </div>

        <div className="w-full mb-2">
          <p className=" mb-1">Descrção:</p>
          <label htmlFor="description">
            <textarea
              className="bg-beige border rounded w-full p-1"
              id="description"
              name="description"
              value={ props.info.description }
              onChange={ handleChange }
              maxLength={90}
            />
          </label>
        </div>

        <div className=" w-[200px] mb-2">
          <div className=" flex items-center mb-2 justify-between">
            <p className=" mr-2">Velocidade:</p>
            <label htmlFor="attr1">
              <input
                className="bg-beige border rounded p-1 w-14"
                id="attr1"
                name="attr1"
                type="number"
                value={ props.info.attr1 }
                onChange={ attrChange }
              />
            </label>
          </div>

          <div className=" flex items-center mb-2 justify-between">
            <p>Força:</p>
            <label htmlFor="attr2">
              <input
                className="bg-beige border rounded p-1 w-14"
                id="attr2"
                name="attr2"
                type="number"
                value={ props.info.attr2 }
                onChange={ attrChange }
              />
            </label>
          </div>

          <div className=" flex items-center justify-between mb-2">
            <p>Resistencia:</p>
            <label htmlFor="attr3">
              <input
                className="bg-beige border rounded p-1 w-14"
                id="attr3"
                name="attr3"
                type="number"
                value={ props.info.attr3 }
                onChange={ attrChange }
              />
            </label>
          </div>
          <div className=" flex items-center justify-between">
            <p>Raridade da Carta:</p>
            <label htmlFor="rarity">
              <select
                id="rarity"
                name="rarity"
                value={ props.info.rarity }
                onChange={ handleChange }
                className="bg-beige border rounded"
              >
                <option>Normal</option>
                <option>Raro</option>
                <option>Muito raro</option>
              </select>
            </label>
          </div>
          { !props.trunfo && (
            <div className=" flex items-center justify-between">
              <p>Trunfo</p>
              <button className=" bg-beige" onClick={(e) => trunfoClick(e)}>
                { !props.info.trunfo ? <AiOutlineStar /> : <AiFillStar /> }
              </button>
            </div>
          )}
        </div>

        <div className="w-full mb-6">
          <p className=" mb-1">Url da Imagem:</p>
          <label htmlFor="img">
            <input
              className="bg-beige border rounded w-full p-1"
              id="img"
              name="image"
              type="string"
              value={ props.info.image }
              onChange={ handleChange }
            />
          </label>
        </div>
      </div>
      <button
        type="button"
        disabled={validadeBtn(props.info)}
        className="bg-gray-1 hover:bg-new-blue "
        onClick={props.saveCard}
      >
        Criar Carta
      </button>
    </form>
  )
}