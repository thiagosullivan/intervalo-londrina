import { SquareContactContainer } from "./style";
import { IoIosMail } from 'react-icons/io';
import { ImPhone } from 'react-icons/im';

function SquareContact() {
  return (
    <SquareContactContainer>
      <h1>Contato</h1>
      {/* <div className="square_contact_infos">
        
      </div> */}
      <div className="contact_mail">
        <IoIosMail />
        <p>contato@intervalolondrina.com.br</p>
      </div>
      <div className="contact_phone">
        <ImPhone />
        <p>contato@intervalolondrina.com.br</p>
      </div>
    </SquareContactContainer>
  )
};

export default SquareContact;