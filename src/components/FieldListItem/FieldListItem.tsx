import ListItemWithUserKey from "./ListItemWithUserKey/ListItemWithUserKey";
import { StyledDiv } from "./fieldListItem.styles";
import { useDrop } from "react-dnd";

type Props = {
  userItemList: Array<Record<string,any>>
  setUserItemList: (item: any) => void
}
const FieldListItem = ({userItemList, setUserItemList}: Props) => {
  const addData = (item: Record<string, any>) => {
    item.userKey = "";
    setUserItemList((prevUserItemList: any) => [...prevUserItemList, item]);
  };
  const removeData = (index: number) => {
    setUserItemList((currentList: any) => {
      const temp = [...currentList];
      temp.splice(index, 1);
      return temp;
    })
  }
  const editUserKey = (index: number, newKey: string) => {
    setUserItemList((prevList: any) => {
      const temp = [...prevList];
      temp[index].userKey = newKey
      return temp;
    })
  }
  const [, drop] = useDrop(
    () => ({
      accept: 'OptionListItem',
      drop: (item: Record<string, any>) => addData(item),
    }),
  )
  return ( 
    <StyledDiv ref={drop}>
      {userItemList.map((item, index) => (
        <ListItemWithUserKey
          key={index}
          item={item}
          removeData={removeData}
          editUserKey={editUserKey}
          index={index}
        />
      ))}
    </StyledDiv>
  )
}

export default FieldListItem;
