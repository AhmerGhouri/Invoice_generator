import logo from '../assets/logo.png'
import img from '../assets/img.png'

function Header() {
  return (

    <>
        <div>
            {/* <button onClick={handlePrint}>Print</button> */}
            <div className='flex'>
                <div className='w-1/2 pl-10 flex items-center '>
                    <img className='w-40' src={logo} alt="The Virtual Data Solution" />
                </div>
                <div className='w-1/2 flex justify-center items-start'>
                    <img className='w-88 -mt-6' src={img} alt="Header Image" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header