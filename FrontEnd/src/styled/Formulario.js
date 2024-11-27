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
    vermelhoError: '#cc1818'
}

export const TituloForm = styled.h2`
font-size: 40px;
padding: 20px;
color: ${Cores.AzulEscuro};
`

export const Form = styled.form`
border-radius: 15px;
padding: 25px 35px;
background-color: ${Cores.Branco};
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
min-width: 450px;
height: 400px;
box-shadow: 0 4px 10px ${Cores.sombra};
@media screen and (max-width:680px){
min-width: 300px;
   } 
`

 
export const LinkForm = styled.h5`
color: ${Cores.AzulEscuro};
font-weight: 400;
font-size: 15px;
`

export const BOxTitulo = styled.div`
text-align: center;
gap: 10px;
`

export const LinkCadastro = styled.a`
font-family: Arial, Helvetica, sans-serif;
color: ${Cores.AzulEscuro};
font-weight:bold;
transition: 0.5s;
&:hover{
    color: ${Cores.AzulMedio};
}
`

export const SelectFields = styled.div`
background-color: ${Cores.AzulEscuro};
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Select = styled.select`
   width: 105%;
    outline: 1.4px solid black;
    border: none;
    border-radius:8px;
    padding: 13px 25px;
    font-size: 18px;
    outline: 1.4px solid black;

    &:focus{
    outline: 2px solid #1f3040;
  }
`

export const Label = styled.label`
    position: absolute;
    top:-10px;
    left: 5px;
    font-size: 18px;
    padding: 0 5px;
    pointer-events: none;
    background-color: ${Cores.Branco};
    color: ${Cores.Preto};
    display: flex;
    gap: 5px;
    align-items: center;
    `

export const ImgIcon = styled.img`
height: 18px;
width: 18px;
`

export const SubTituloForm = styled.h5`
font-size: 12px;
color: ${Cores.AzulEscuro};
font-family: Arial, Helvetica, sans-serif;
font-weight: 400;
`
export const Option = styled.option`
color: ${Cores.AzulEscuro};
`

export const Error = styled.p`
color: ${Cores.vermelhoError};
font-family: Arial, Helvetica, sans-serif;
font-weight: 500;
display: flex;
gap: 10px;
`
