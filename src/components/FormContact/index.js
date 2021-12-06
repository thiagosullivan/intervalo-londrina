import FormContact from "./FormContact";
import SquareContact from "./SquareContact";
import { ContactContainer } from "./style";

function ContactContent() {
  return (
    <ContactContainer>
      <FormContact />
      <SquareContact />
    </ContactContainer>
  )
};

export default ContactContent;