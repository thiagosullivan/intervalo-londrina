import Link from 'next/link';
import { NoPostsYetContainer } from "./style";

function NoPostYet() {
  return (
    <NoPostsYetContainer>
      <p>Ainda não existem textos publicados nesta categoria, você tem uma sugestão?</p>
      <Link href='/contato'>Mande pra gente!</Link>
    </NoPostsYetContainer>
  )
};

export default NoPostYet;