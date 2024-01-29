import footer from '../assets/footer.png'

function Footer({Bankdetail}: any) {
  return (
    <>
        <div>
        
            <div className='flex justify-between pt-24'>

                <div>
                   <h2>Payment Information</h2>
                   <p>{Bankdetail.payeeName}</p> 
                   <p>Bank Name: {Bankdetail.bankName}</p> 
                   <p>Account No: {Bankdetail.accNo}</p> 
                   <p>Pay By: {Bankdetail.payDate}</p> 
                   <p>TID: {Bankdetail.tid}</p> 
                </div>
                <div>
                    <img src={footer} className='w-40' alt='footer image' />
                </div>

            </div>
        
        </div>
    </>
  )
}

export default Footer