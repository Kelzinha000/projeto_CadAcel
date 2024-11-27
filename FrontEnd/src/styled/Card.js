import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra: "rgba(0, 0, 0, 0.25)",
    sombraEscura: "rgba(6, 1, 39, 0.585)"
}

export const ContainerCard = styled.div`
position: relative;
background-color: ${Cores.Branco};
box-shadow: 0 4px 4px ${Cores.sombra};
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 0 20px 0 20px;
height: 110px;
width: 500px;
transition: 0.5s;
&:hover{
    box-shadow: 0 4px 20px ${Cores.sombraEscura};
}
@media screen and (max-width:780px){
    width: 300px;
   }
`
export const ContainerCardOPen = styled.div`
position: absolute;
z-index: 999;
top: 106px;
background-color: ${Cores.Branco};
box-shadow: 0 4px 4px ${Cores.sombra};
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 0 0px 0 20px;
height: 250px;
width: 500px;
animation: opencard .4s;
@keyframes opencard {
    0% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media screen and (max-width:780px){
    width: 300px;
   }
`

export const TituloCard = styled.h2`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
font-size: 30px;
@media screen and (max-width:780px){
    font-size: 20px;
   }
`

export const IconCard = styled.img`
width: 70px;
height: 70px;
@media screen and (max-width:780px){
    width: 50px;
    height: 50px;
   }
`
export const ConteudoCard = styled.p`
color: ${Cores.AzulEscuro};
padding: 30px;
font-size: 23px;
@media screen and (max-width:780px){
   font-size: 18px;
   }
`
