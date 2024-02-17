import { FormEvent, useState } from "react";
import OptionListItem from "./OptionListItem/OptionListItem";
import { StyledInput, StyledOptionDiv, StyledUl } from './apiOptionsList.styles'; 

type Props = {
  seedData: Array<Record<string, any>>
}
const APIOptionsList = ({seedData}: Props) => {
  const [filter, setFilter] = useState<string>("");
  const filteredItems = seedData.filter((item) => new RegExp(filter, 'i').test(item.label))
  const handleFilter = (evt: FormEvent<HTMLInputElement>) => setFilter(evt.currentTarget.value);
  return (
    <StyledOptionDiv>
      <StyledInput type="text" value={filter} onChange={handleFilter} placeholder="Filter..." />
      <StyledUl>
        {filteredItems.map((item, index) => <OptionListItem item={item} key={index} />)}
      </StyledUl>
    </StyledOptionDiv>
  )
}

export default APIOptionsList;
