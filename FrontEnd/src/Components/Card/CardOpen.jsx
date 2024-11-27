import { ContainerCard, TituloCard, IconCard, ContainerCardOPen,ConteudoCard } from "../../styled/Card.js";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const CardOpen = ({ tituloCard, active , text}) => {
    const fecharCard = () => {
        active(false)
    }
    return (
        <ContainerCardOPen card={active}>
            <ConteudoCard>{text}</ConteudoCard>
        </ContainerCardOPen>
    )
}

export default CardOpen;