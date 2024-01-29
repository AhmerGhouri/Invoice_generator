
function SlipBody({slipNo , date } : any) {
  return (
    <>
        <div>
        
            <div className='flex flex-col justify-end items-end py-16'>

                <h2>Slip No. {slipNo}</h2>
                <p> {date}</p>

            </div>    
                
            
        </div>
    </>
  )
}

export default SlipBody