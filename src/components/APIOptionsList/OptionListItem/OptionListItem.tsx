import { useDrag } from 'react-dnd';
import { StyledLi, StyledP } from './optionListItem.styles';

type Props = {
  item: Record<string, any>
}
const OptionListItem = ({item}: Props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
      type: 'OptionListItem',
      item,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      })
    }),
  )
  return (
  <StyledLi
    ref={drag}
    style={{
      opacity: isDragging? 0.5: 1,
      fontSize: 15,
      fontWeight: 'bold',
      cursor: 'move',
    }}
  >
    <StyledP>{item.label}</StyledP>
  </StyledLi>)
}

export default OptionListItem;
