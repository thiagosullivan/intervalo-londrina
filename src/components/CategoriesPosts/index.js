import ButtonCategories from './ButtonCategories';
import { CategoriesPostsContainer } from './style';

function CategoriesPosts() {
  return (
    <CategoriesPostsContainer>
      <ButtonCategories name="Cinema" path="cinema" />
      <ButtonCategories name="Dança" path="danca" />
      <ButtonCategories name="Literatura" path="literatura" />
      <ButtonCategories name="Música" path="musica" />
      <ButtonCategories name="Teatro" path="teatro" />
      <ButtonCategories name="#Periféricos" path="perifericos" />
    </CategoriesPostsContainer>
  )
}

export default CategoriesPosts;