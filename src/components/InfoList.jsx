import React from 'react'

const InfoList = () => {
  const [totalP, totalS, totalD, totalM] = [1, 2, 3, 4] // nanti diganti

  return (
    <div className="info">
      <div className="info-value">
        <p>Available Paintings</p>
        <p className='value'>: {totalP} </p>
      </div>
      <div className="info-value">
        <p>Sizes</p>
        <p className='value'>: {totalS} </p>
      </div>
      <div className="info-value">
        <p>Total Dimensions</p>
        <p className='value'>: {totalD} </p>
      </div>
      <div className="info-value">
        <p>Total Mediums</p>
        <p className='value'>: {totalM} </p>
      </div>
    </div>
  )
}

export default InfoList