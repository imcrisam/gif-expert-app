import React from 'react'

const GifItem = ({title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={ title}></img>
            <p>{title }</p>
        </div>
    )
}

GifItem.propTypes = {

}

export default GifItem
