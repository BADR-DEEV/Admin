
import React from 'react'
import "./sty.css"


 const Pagination = ({postsPerPage, totalPosts , paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage) ; i++){
        pageNumbers.push(i)
    }

    return (
  
      <nav className = "pagination">
            <ul >
        {pageNumbers.map(number => (
            <div className = "pagination-wrapper">
            <li key = {number}> 
            <a onClick = {()=> paginate(number)}  className = "page-selection">
                { number }
            </a>
            </li>
            </div>
        ))}

        </ul>
            
      </nav>
   
    )
}

export default Pagination
