import { useState } from "react"
import { StyledRowDiv } from "./home.styles"
import APIOptionsList from "../../components/APIOptionsList/APIOptionsList"
import FieldListItem from "../../components/FieldListItem/FieldListItem"

type Props = {
  seedData: Array<Record<string, any>>
}
const ListComposite = ({seedData}: Props) => {
  const [userItemList, setUserItemList] = useState<Array<Record<string, any>>>([]); 
  return (
    <StyledRowDiv>
      <FieldListItem userItemList={userItemList} setUserItemList={setUserItemList} />
      <APIOptionsList seedData={seedData} />
    </StyledRowDiv>
    
  )
}

export default ListComposite;
