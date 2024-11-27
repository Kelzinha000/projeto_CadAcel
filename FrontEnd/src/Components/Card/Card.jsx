import { ContainerCard, TituloCard, IconCard } from "../../styled/Card.js";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CardOpen from "./CardOpen.jsx";
const Card = ({tituloCard, iconCard, text, conteudo})=>{
    const [card, setcard] = useState(false)

    const abrirCard = () =>{ 
        setcard(!card)
     }

     const handleKeyPress = (evento) => {
      if(evento.key=== "Enter"){
        abrirCard()
      }
     }
    return(
      <ContainerCard>
        <IconCard src={iconCard} alt="Icone de cérebro" />
        <TituloCard>{tituloCard}</TituloCard>
        <IoIosArrowDown className="svg-abrir" tabIndex={6}  onClick={abrirCard} onKeyPress={handleKeyPress}/>
        {card && <CardOpen  text={conteudo} active={setcard} />}
      </ContainerCard>
    )
}

export default Card;