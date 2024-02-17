import { FormEvent } from "react";
import { StyledButton, StyledInput, StyledLi, StyledP } from "./listItemWithUserKey.styles"
type Props = { 
  item: Record<string, any>
  removeData: (index: number) => void
  editUserKey: (index: number, newKey: string) => void;
  index: number
}
const ListItemWithUserKey = ({item, removeData, editUserKey, index}: Props) => {
  const handleDelete = () => removeData(index);
  const handleEdit = (event: FormEvent<HTMLInputElement>) => {editUserKey(index, event.currentTarget.value)};
  return (
    <StyledLi>
      <StyledInput type="text" placeholder="Object Key" value={item.userKey} onChange={handleEdit} />
      <StyledP>{item.label}</StyledP>
      <StyledButton onClick={handleDelete}>🗑️</StyledButton>  
    </StyledLi>
  )
}

export default ListItemWithUserKey;
