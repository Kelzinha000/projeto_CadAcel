import {InputStyle,InputFields, Label, ImgIcon} from "../../styled/Input.js"
import "../../index.css"
import iconEmail from "../../public/Email.svg"

const Input = ({TipoInput, NomeInput, PlaceholderInput, NameLabel, IconImg, tipoDeUseState, Index}) => {
    return(
        <InputFields className="input-fields">
        <InputStyle tabIndex={Index} type={TipoInput} name={NomeInput} placeholder="" onChange={(event) => tipoDeUseState(event.target.value)} required/>
        <Label> <ImgIcon src={IconImg} alt="" className="imgIConEmail" />{NameLabel}</Label>
        </InputFields>
    )
}

export default Input;