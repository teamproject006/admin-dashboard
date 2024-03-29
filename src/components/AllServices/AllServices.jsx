import React from 'react'
import OneService from '../OneService/OneService'
import './AllServices.css'

function AllServices({data,deleteOne,getOne,oneData,refresh,setRefresh}) {

  return (
    <div className='all scroll'>
      {data.map((e)=>(
        <OneService key={e.id} el={e}
         deleteOne={deleteOne}
          getOne={getOne}
           oneData={oneData}
           refresh={refresh}
           setRefresh={setRefresh} />
      ))}
    </div>
  )
}

export default AllServices
