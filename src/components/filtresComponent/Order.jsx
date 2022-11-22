import { useDispatch, useSelector } from "react-redux";
import { searchFiltresOrder } from "../../store/searchFiltres";

function OrderFiltres() {

    const orderValue = useSelector(state => state.searchFiltres.searchFiltreItem.order)

    const dispatch = useDispatch();

    const orderType = [
        {
            type: 'RATING',
            discription: 'Рейтинг'
        },
        {
            type: 'NUM_VOTE',
            discription: 'По числу голосов'
        },
        {
            type:'YEAR',
            discription:'Году'
        }
    ];


    return (
        <div className="filtres-order">
            <div className="filtres-order-title filtre-title-second">Сортировка</div>
            <select className="order-items select-items" value={orderValue} onChange={(e) => dispatch(searchFiltresOrder(e.target.value))}>
               {
                orderType.map((el) => (
                    <option key={el.type} value={el.type}>{el.discription}</option>
                ))
               }
            </select>
        </div>
    )
}

export default OrderFiltres