import React from 'react'

let SearchBox = ({searchValue, searchChange}) => {
    return (
        <div className='tc ttu code search'>
            <input  type='search' 
                    placeholder='Search Your Friend' 
                    className='pa2 br-pill b--yellow grow'
                    onChange={searchChange} />
        </div>        
    )
}

export default SearchBox