import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra:"rgba(0, 0, 0, 0.25)"
}

export const BackgroundFooter =  styled.div`
background-color: ${Cores.AzulMedio};
height: 250px;
width: 100%;
padding-top: 15px;
display: flex;
flex-direction: column;
margin-top: 100px;
`
export const ConteudoFooter = styled.div`
position: relative;
background-color: ${Cores.AzulClaro};
height: 200px;
border-radius: 15px;
padding-left: 70px;
padding-top: 20px;
display: flex;
align-items:start;
`
export const ContainerLinks = styled.div`
position: absolute;
display: flex;
align-items: center;
gap: 10px;
bottom: 30px;
right: 50px;
`

export const IconsSocialMedia = styled.img`

`

export const Logo = styled.img`
@media screen and (max-width:680px){
width: 250px;
   }
`

export const TodosDireitos = styled.h5`
color: ${Cores.Branco} ;
text-align: center;
padding-top: 20px;
`