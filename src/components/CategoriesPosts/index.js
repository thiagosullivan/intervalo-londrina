import { CategoriesPostsContainer, LinkText } from './style';
import { useRouter } from 'next/router';
import Link from 'next/link';


function CategoriesPosts() {

  const router = useRouter();

  return (
    <CategoriesPostsContainer>
      <Link href="/blog/cinema" passHref>
        <LinkText pathName={router.pathname}>Cinema</LinkText>
      </Link>
      <Link href="/blog/danca" passHref>
        <LinkText pathName={router.pathname}>Dança</LinkText>
      </Link>
      <Link href="/blog/literatura" passHref>
        <LinkText pathName={router.pathname}>Literatura</LinkText>
      </Link>
      <Link href="/blog/musica" passHref>
        <LinkText pathName={router.pathname}>Música</LinkText>
      </Link>
      <Link href="/blog/teatro" passHref>
        <LinkText pathName={router.pathname}>Teatro</LinkText>
      </Link>
      {/* <Link href="/blog/perifericos" passHref>
        <LinkText pathName={router.pathname}>#Perifericos</LinkText>
      </Link> */}
    </CategoriesPostsContainer>
  )
}

export default CategoriesPosts;