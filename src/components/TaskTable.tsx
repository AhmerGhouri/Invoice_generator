import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function TaskTable({ inputArr , totalAmt , taxPer , subTotal}: any) {

console.log(inputArr)




  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {/* <TableHead className="text-center">S #</TableHead> */}
          <TableHead className="text-center font-bold text-lg">Tasks</TableHead>
          <TableHead className="text-center font-bold text-lg">Hrs/Ent</TableHead>
          <TableHead className="text-center font-bold text-lg">Unit Price</TableHead>
          <TableHead className="text-right font-bold text-lg">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inputArr.map((invoice: any) => (

          < TableRow  >
            {/* <TableCell className="font-medium">{invoice.invoice}</TableCell> */}
            <TableCell className="text-black" > {invoice.tasks}</TableCell>
            <TableCell>{invoice.hrs_evt}</TableCell>
            <TableCell className="text-center">Rs. {invoice.unit_price}</TableCell>
            <TableCell className="text-right">Rs. {invoice.total}</TableCell>
          </TableRow>
        ))
        }
      </TableBody >
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2} rowSpan={2} className="text-3xl pt-24">Thank You!</TableCell>
          <TableCell colSpan={1}>Subtotal</TableCell>
          <TableCell className="text-right">Rs.  {subTotal}</TableCell>
        </TableRow>
        <TableRow className="border-b-8   border-black">
          {/* <TableCell colSpan={2} rowSpan={2} className="text-3xl">Thank You!</TableCell> */}
          <TableCell colSpan={1}>Tax ({taxPer}%)</TableCell>
          <TableCell className="text-right ">0</TableCell>
        </TableRow>
        <TableRow>

          <TableCell colSpan={3} className="text-right text-2xl font-bold">Total</TableCell>
          <TableCell colSpan={4} className="text-right text-xl font-bold">Rs. {totalAmt}</TableCell>

        </TableRow>

      </TableFooter>
    </Table >
  )
}






