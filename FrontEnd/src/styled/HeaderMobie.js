import styled from "styled-components"


export const Cores = {
    Ciano: "#84bfc3",
    AzulClaro: "#6e8db9",
    AzulMedio: "#445b86",
    AzulEscuro: "#132c6c",
    Branco: "#ffffff",
    Preto: "#262626",
    cinza: "dddddd",
    sombra: "rgba(0, 0, 0, 0.25)"
}

export const NavHeader = styled.header`
position: fixed; 
left: 0;
right: 0;
bottom: 0;
background-color: ${Cores.AzulMedio};
height: 80px;
display: none;
justify-content: space-evenly;
align-items: center;
box-shadow: 0px 4px 10px ${Cores.sombra};
z-index: 9999;
@media screen and (max-width:500px){
display: flex;
   } 
`

export const NavBar = styled.div`
display: flex;
gap: 10px;
`