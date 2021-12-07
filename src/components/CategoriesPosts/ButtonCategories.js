import Link from 'next/link';
import { ButtonContegoryContainer } from './style';

function ButtonCategories({ name, path }) {
  return (
    <Link href={`/blog/${path}`}>
      <a>
        <ButtonContegoryContainer>
          <span>{name}</span>
        </ButtonContegoryContainer>
      </a>
    </Link>
  )
}

export default ButtonCategories;