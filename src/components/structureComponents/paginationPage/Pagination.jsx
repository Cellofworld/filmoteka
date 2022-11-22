import { useDispatch } from "react-redux";
import "./pagination.css"



function Pagination(data) {

    const dispatch = useDispatch();
    if (data.dataPage === undefined) return <div></div>
    const paginationList = Array.from(Array(data.dataPage).keys());

    const paginationSetNumber = data.paginationNumber;


    return (
                <div className="pagination-page">
                    {
                        paginationList.map((el,i) => (
                            
                            <div className={paginationSetNumber === el+1 ? "pagination-list-active" : "pagination-list"} 
                            key={i} 
                            onClick={() => dispatch(data.dispatchPagination(el+1))}>
                                {el+1}</div>
                           ))
                    }
                </div>
                
    )

}

export default Pagination
