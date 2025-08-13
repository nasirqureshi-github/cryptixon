
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const invoices = [
  { price: 82.3, amount: 0.15, total: "$134.12" },
  { price: 83.9, amount: 0.18, total: "$237.31" },
  { price: 84.2, amount: 0.25, total: "$252.58" },
  { price: 86.2, amount: 0.35, total: "$126.26" },
  { price: 91.6, amount: 0.75, total: "$46.92" },
  { price: 92.6, amount: 0.21, total: "$123.27" },
  { price: 93.9, amount: 0.55, total: "$212.56" },
  { price: 94.2, amount: 0.18, total: "$129.26" }
];

const Ordertable= () => {
  return (
  

    <Table className="border-separate border-spacing-y-4">
      <TableHeader>
        <TableRow className="text-base font-medium hover:bg-[#2258BF]">
          <TableHead className="w-[100px] rounded-l-full px-6 py-2">Price</TableHead>
          <TableHead className="text-center px-6 py-2 ">Amount</TableHead>
          <TableHead className="text-right rounded-r-full px-6 py-2">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.price} className="hover:bg-[#2258BF] hover:text-white border-none font-semibold" >
            <TableCell className=" px-6 py-2 rounded-l-full">{invoice.price}</TableCell>
            <TableCell className="text-center px-6 py-2">{invoice.amount}</TableCell>
            <TableCell className="text-right px-6 py-2 rounded-r-full">{invoice.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
 
  )
}
export default Ordertable