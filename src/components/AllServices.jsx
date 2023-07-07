import React from 'react'
import OneService from './OneService/OneService.jsx'

function AllServices({data}) {
  return (
    <div>
      {data.map((e)=>(
        <OneService key={e.id} el={e}/>
      ))}
    </div>
  )
}

export default AllServices
