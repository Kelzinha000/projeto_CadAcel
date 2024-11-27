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

export const HeaderNav = styled.header`
background-color: ${Cores.AzulMedio};
width: 60px;
height: 100vh;
transition: .5s;
position: fixed;
z-index: 99999;
padding-top: 20px;
box-shadow: 10px 5px 10px ${Cores.sombra};
&:hover{
    width: 300px;
}
@media screen and (max-width:500px){
display: none;
   } 
`

export const NavBar = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
 overflow: hidden;  
`

export const Divisao = styled.hr`
border: 1px solid ${Cores.Branco};
border-radius: 50%;
width: 75%;
margin: 5px;
`

export const NavLinksBox = styled.div`
width: 100%;
display: flex;
align-items: center;
transition: .5s;
border-radius: 15px 0px 15px 0px;
padding: 10px;
gap: 25px;
&:hover{
    background-color: ${Cores.AzulEscuro};
 }
`

export const IconsNav = styled.img`
width: 33px;
height: 33px;
padding-left: 13px;
`

export const IconPerfil = styled.img`
width: 33px;
height: 33px;
background-color: ${Cores.Ciano};
border-radius: 50%;
padding: 5px;
`

