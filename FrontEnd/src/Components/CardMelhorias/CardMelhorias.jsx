import { ContainerCardMelhoria, ConteudoCard, NameUsuario, TipoDeficiencia, ContainerInfoUsuario, TituloPostagem, InfoPostagem, Local, InfoUsuario, DescricaoPostagem, DataPostagem, IconPerfil } from "../../styled/CardMelhorias.js";

import iconPerfil from "../../public/Group.svg"

const CardMelhorias = ({nameUser, deficiencia, local, titulopostagem, datapostagem, descricaopostagem}) => {
    return (
        <ContainerCardMelhoria>
            <ConteudoCard>
                <ContainerInfoUsuario>
                    <IconPerfil src={iconPerfil} alt="Foto de perfi do Usuario" />
                    <NameUsuario>{nameUser}</NameUsuario>
                </ContainerInfoUsuario>
                <InfoUsuario>
                    <TipoDeficiencia>{deficiencia}</TipoDeficiencia>
                    <Local>{local}</Local>
                </InfoUsuario>
                <InfoPostagem>
                    <TituloPostagem>{titulopostagem}</TituloPostagem>
                    <DataPostagem>{datapostagem}</DataPostagem>
                    <DescricaoPostagem>{descricaopostagem}</DescricaoPostagem>
                </InfoPostagem>
            </ConteudoCard>
        </ContainerCardMelhoria>
    )
}

export default CardMelhorias;