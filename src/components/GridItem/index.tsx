import { GridItemType } from '../../types/GridItemType';
import * as C from './style';
import b7 from '../../svgs/b7.svg';
import { items } from '../../data/items';

type Props = {
    item: GridItemType;
    onClick: () => void;
}

export const GridItem = ({ item, onClick}: Props) => {
    return (
        //Props showBg para ir ao styled component
        <C.Container onClick={onClick} showBg={item.permanentShown || item.shown} >
            {!item.permanentShown && !item.shown && 
                <C.Icon src={b7} alt="" opacity={0.4} />
            }
            {(item.permanentShown || item.shown) && item.item !== null && 
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    );
}