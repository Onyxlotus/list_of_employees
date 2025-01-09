const Pagination = ({totalPost, postsPerPage}) => {

    let pages = [];

    for(let i = 1; i<=Math.ceil(totalPost/postsPerPage); i++){
        pages.push(i)
    }

    return ( 
        <div>
            {
                pages.map((page, index) => {
                    return <button key={index}>{page}</button>
                })
            }
        </div>
     );
}

export default Pagination;