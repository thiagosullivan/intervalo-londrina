import ButtonCategories from './ButtonCategories';
import { CategoriesPostsContainer } from './style';

function CategoriesPosts() {
  return (
    <CategoriesPostsContainer>
      <ButtonCategories name="Cinema" />
      <ButtonCategories name="Dança" />
      <ButtonCategories name="Literatura" />
      <ButtonCategories name="Música" />
      <ButtonCategories name="Teatro" />
      <ButtonCategories name="#Periféricos" />
    </CategoriesPostsContainer>
  )
}

export default CategoriesPosts;