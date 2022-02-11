import React from 'react'
import Data from '../json/Data.json'

const RenderedCard = () => {
 let card =
    <div>
        {/* The contents of this div are trivial. The purpose is to experiment with returning elements from the map function  */}
        These are the data points:
        {Data.map((datum => <p>{datum.point}-{datum.point}</p>))}
        The above constitues a full list of the data points.
    </div>
  return card
}

export default RenderedCard