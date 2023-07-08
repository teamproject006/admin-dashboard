import React from 'react'
import OneService from '../OneService/OneService'

function AllServices({data,deleteOne}) {

  return (
    <div>
      {data.map((e)=>(
        <OneService key={e.id} el={e} deleteOne={deleteOne} />
      ))}
    </div>
  )
}

export default AllServices
