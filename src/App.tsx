import { useState , useRef} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SlipBody from './components/SlipBody';
import TaskTable from './components/TaskTable';
import ReactToPrint from 'react-to-print';


function App() {

  const componentRef = useRef<any>()

  const [showInvoice, setShowInvoice] = useState<boolean>(false)
  const [slipNo, setSlipNo] = useState<number>()
  const dateformat = new Date().getDate().toString()
  const [date, setDate] = useState<string>(dateformat)
  const [payeeName, setPayeeName] = useState<string>('')
  const [bankName, setBankName] = useState<string>('')
  const [accNo, setAccNo] = useState<number>()
  const [payDate, setPayDate] = useState<string>(dateformat)
  const [tid, setTid] = useState<number>()
  const [taxPer, setTaxPer] = useState<number>()
  const [subTotal, setsubTotal] = useState<number>()
  const [totalAmt, setTotalAmt] = useState<number>()
  const [inputArr, setInputArr] = useState<any>([])
  const [data, setData] = useState<any>({
    tasks: "",
    hrs_evt: "",
    unit_price: "",
    total: ""
  })


  console.log("slip", slipNo);
  console.log("date", date);

  console.log("payeeName", payeeName);
  console.log("bankName", bankName);
  console.log("accNo", accNo);
  console.log("payDate", payDate);
  console.log("tid", tid);
  console.log("taxPer", taxPer);
  console.log("totalAmt", totalAmt);

  const Bankdetail = { bankName: bankName, payeeName: payeeName, accNo: accNo, payDate: payDate, tid: tid }



  const handlePrint = () => {
    window.print();
  }

  let name, value;

  const updateData = (e: any) => {

    name = e.target.name;
    value = e.target.value;

    setData({
      ...data, [name]: value
    })

  }

  let { tasks, hrs_evt, unit_price, total} = data;
  const handleSubmit = () => {

    setInputArr([...inputArr, { tasks, hrs_evt, unit_price, total }])
    console.log(inputArr,"input arr")
    console.log(data, " input data")
    setData({ tasks: "", hrs_evt: "", unit_price: "", total: "" })

  }







  return (
    <>
      <main className='m-5 p-5 lg:mx-auto rounded shadow'>
        <ReactToPrint trigger={() => <button>Print</button>} 
        content={() => componentRef.current!}/>
        {showInvoice ?
          <>
          <div ref={componentRef} className='m-5'>

            <Header handlePrint={handlePrint} />
            <SlipBody slipNo={slipNo} date={date} />
            <TaskTable inputArr={inputArr} totalAmt={totalAmt} taxPer={taxPer} subTotal={subTotal}/>
            <Footer Bankdetail={Bankdetail} />


          </div>
          <div>

            <button onClick={() => setShowInvoice(false)}>Edit Form</button>
          </div> 
          </>
          :
          <div className='flex flex-col justify-center items-center'>


            <input
              type='number'
              name='SlipNo'
              id='SlipNo'
              value={slipNo}
              onChange={(e) => setSlipNo(+e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Slip No'
            />
            <input
              type='date'
              name='Date'
              id='Date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Date'
            />
            <input
              type='text'
              name='PayeeName'
              id='PayeeName'
              value={payeeName}
              onChange={(e) => setPayeeName(e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Payee Name'
            />
            <input
              type='text'
              name='BankName'
              id='BankName'
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Bank Name'
            />
            <input
              type='number'
              name='AccNo'
              id='AccNo'
              value={accNo}
              onChange={(e) => setAccNo(+e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Account Number'
            />
            <input
              type='date'
              name='PayDate'
              id='PayDate'
              value={payDate}
              onChange={(e) => setPayDate(e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Payment Date'
            />
            <input
              type='number'
              name='Tid'
              id='Tid'
              value={tid}
              onChange={(e) => setTid(+e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter TID'
            />
            <input
              type='number'
              name='SubTotal'
              id='SubTotal'
              maxLength={2}
              value={subTotal}
              onChange={(e) => setsubTotal(+e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter SubTotal'
            />
            <input
              type='number'
              name='TaxPer'
              id='TaxPer'
              maxLength={2}
              value={taxPer}
              onChange={(e) => setTaxPer(+e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Tax Percentage'
            />
            <input
              type='number'
              name='TotalAmt'
              id='TotalAmt'
              value={totalAmt}
              onChange={(e) => setTotalAmt(+e.target.value)}
              className='border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
              placeholder='Enter Total Amount'
            />



            <div className='flex flex-row justify-center items-center gap-4'>

              <div>
                <p>Task</p>
                <input
                  type="text"
                  name='tasks'
                  id='tasks'
                  value={data.tasks}
                  onChange={updateData}
                  className='w-[130px] border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2'
                />
              </div>

              <div>
                <p>Hrs/Ent</p>
                <input
                  type="text"
                  name="hrs_evt"
                  id="hrs_evt"
                  value={data.hrs_evt}
                  onChange={updateData}
                  className='w-[130px] border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2' />
              </div>
              <div>
                <p>Unit Price</p>

                <input
                  type="number"
                  name='unit_price'
                  id='unit_price'
                  value={data.unit_price}
                  onChange={updateData}
                  className='w-[130px] border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2' />

              </div>

              <div>
                <p>Total</p>
                <input
                  type="number"
                  name='total'
                  id='total'
                  value={data.total}
                  onChange={updateData}
                  className='w-[130px] border-2 rounded p-2 border-blue-300 w-1/2 shadow-md m-2' />
              </div>


            </div>

            <button onClick={handleSubmit}> Add</button>




            <button onClick={() => setShowInvoice(true)}>Show Invoice</button>

          </div>
        }
      </main>
    </>
  );
}

export default App;
