import ListComposite from "./ListComposite"
import { StyledRowDiv } from "./home.styles"

type Props = {
  seedData: Array<Record<string, any>>
}
const Home = ({seedData}: Props) => {

  return (
    <StyledRowDiv>
      <ListComposite seedData={seedData} />
    </StyledRowDiv>
    
  )

}

export default Home;
