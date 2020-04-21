import React from 'react'

const Card = ({name, email, id}) => {
    return (
        <section className='bg-light-grey dib br3 pa3 ma2 grow white'>
            <img alt='Robot' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </section>
    )
}

export default Card