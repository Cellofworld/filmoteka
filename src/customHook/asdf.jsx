// `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=24&order=YEAR&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1950&yearTo=2022&page=${paginationPage}`
// `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=18&order=NUM_VOTE&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1980&yearTo=2022&page=${paginationPage}`
// `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genre}&order=${order}&type=${type}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=${year}&page=1`
// `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2021&yearTo=2022&page=${paginationPage}`
// `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=2022&page=${paginationPage}`
// `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchValue}&page=1`









// function PaginationPageCartoons({dataPage}) {

//     const dispatch = useDispatch();
//     const paginationList = Array.from(Array(dataPage).keys())

//     if (dataPage === undefined) return <div>loading</div>

//     return (
//         <div className="pagination-page">
//             {
//                paginationList.map((el,i) => (
//                 <div className="pagination-list" key={i} onClick={() => dispatch(paginationPageCartoons(el+1))}>{el+1}</div>
//                ))
//             }
//         </div>
//     )
// }

// export default PaginationPageCartoons


