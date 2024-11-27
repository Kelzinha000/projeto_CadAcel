import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra:"rgba(0, 0, 0, 0.25)",
    sombraEscura: "rgba(6, 1, 39, 0.585)"
}

export const SectionSobre= styled.section`
display: flex;
flex-direction: row;
flex-wrap:wrap;
gap: 100px;
justify-content: space-around;
align-items: center;
padding-top: 100px;
padding-bottom: 100px;

`



export const SobreContainer  = styled.div`
background-color: ${Cores.Branco};
border-radius: 30px 0px 30px 0;
box-shadow: 0 4px 20px ${Cores.sombra};
display: flex;
flex-direction: column;
align-items: center;
gap: 60px;
height: 400px;
width: 550px;
padding: 20px;
transition: .5s;
&:hover{
   box-shadow:0px 4px 20px ${Cores.sombraEscura};
}
@media screen and (max-width:780px){
width:300px;
height: 600px;
   } 
`

export const Conteudo = styled.p`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
text-align: justify;
font-size: 20px;
@media screen and (max-width:780px){
font-size: 18px;
width: 300px;
   } 
`

export const TituloContainer = styled.h2`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
text-align: center;
font-size: 48px;
`

export const Img = styled.img`
height: 400px;
width: 400px;
transition:0.5s;
filter: drop-shadow(0px 4px 10px ${Cores.sombra});
&:hover{
   filter: drop-shadow(0px 4px 20px ${Cores.sombraEscura});
}
@media screen and (max-width:680px){
width: 300px;
height: 300px;
   } 
`