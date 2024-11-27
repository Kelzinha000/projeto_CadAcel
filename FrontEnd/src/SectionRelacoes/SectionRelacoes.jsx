import { SectionRElacoes, TituloSection, ContainerCards } from "../styled/SectionRelacoes.js";
import CardMelhorias from "../Components/CardMelhorias/CardMelhorias.jsx";

const SectionRelacoes = ({ nameUser, deficiencia, local, titulopostagem, datapostagem, descricaopostagem }) => {
    return (
        <SectionRElacoes>
            <TituloSection>Sugestões e melhorias</TituloSection>
            <ContainerCards>
                <CardMelhorias nameUser="Fulsno de tal" deficiencia="deficiênte Fisico" local="Bairro tal" titulopostagem="Postagem 01" datapostagem="04/12/2023" descricaopostagem="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?" />

                <CardMelhorias nameUser="Fulsno de tal" deficiencia="deficiênte Fisico" local="Bairro tal" titulopostagem="Postagem 01" datapostagem="04/12/2023" descricaopostagem="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?" />
                
                <CardMelhorias nameUser="Fulsno de tal" deficiencia="deficiênte Fisico" local="Bairro tal" titulopostagem="Postagem 01" datapostagem="04/12/2023" descricaopostagem="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?" />

                <CardMelhorias nameUser="Fulsno de tal" deficiencia="deficiênte Fisico" local="Bairro tal" titulopostagem="Postagem 01" datapostagem="04/12/2023" descricaopostagem="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, expedita ut eligendi quos quibusdam vitae laborum, doloremque cupiditate aut quam dolorum! Dolor magni sequi rem? Explicabo similique error deleniti necessitatibus?" />
            </ContainerCards>
        </SectionRElacoes>
    )
}


export default SectionRelacoes;