import React from 'react'
import OneService from '../OneService/OneService'

function AllServices({data,deleteOne,getOne}) {

  return (
    <div>
      {data.map((e)=>(
        <OneService key={e.id} el={e} deleteOne={deleteOne} getOne={getOne} />
      ))}
    </div>
  )
}

export default AllServices
