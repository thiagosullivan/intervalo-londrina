import { FormContainer, Input, TextArea } from "./style";

function FormContact() {
  return (
    <FormContainer>
      <h1>Fale conosco</h1>
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Assunto" />
      <TextArea placeholder="Mensagem" />
      <button type="submit">Enviar</button>
    </FormContainer>
  )
};

export default FormContact;