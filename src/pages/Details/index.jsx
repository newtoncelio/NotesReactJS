import { Container, Links, Content } from "./styles";
import { Fragment } from 'react';
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"



export function Details () {

  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="Excluir Nota"/>
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt architecto vel accusamus, ullam distinctio odit quaerat optio atque exercitationem suscipit aspernatur reprehenderit id ea. Harum aperiam ea explicabo quidem!
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
              <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>

          </Section>      

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="node"/>
          </Section>
          <Button title="Voltar"/>
      </Content>
      </main>
    </Container>
  )
}