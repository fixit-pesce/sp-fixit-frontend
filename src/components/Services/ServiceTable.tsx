import {
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  TableCaption
} from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper
} from "@tanstack/react-table"

import { useNavigate } from "react-router-dom"
import { getServices } from "../../api/servicesApi"

type Service = {
  name: string,
  serviceProvider: string,
  price: number,
  avg_rating: number,
  total_bookings: number,
}

const columnHelper = createColumnHelper<Service>()

const columns = [
  columnHelper.accessor("name", {
    header: () => <span>Service Name</span>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor("serviceProvider", {
    header: () => <span>Service Provider</span>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor("price",{
    header: () => <span>Price</span>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor("avg_rating", {
    header: () => <span>Average Rating</span>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor("total_bookings", {
    header: () => <span>Total Bookings</span>,
    cell: info => info.getValue()
  })
]

export default function ServiceTable() {
  const navigate = useNavigate()

  const sp_username: string = localStorage.getItem("sp_username") ?? "" as string

  const {data} = useQuery({
    queryKey: ["services", sp_username],
    queryFn: () => getServices(sp_username)
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableContainer bg = "foreground" rounded = "lg" boxShadow = "lg">
      <Table variant = "striped" colorScheme="blue">
        <TableCaption>Services Provided by {sp_username}</TableCaption>
        <Thead>
          {data && table.getHeaderGroups().map(headerGroup => (
            <Tr key = {headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Th key = {header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  }
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {data && table.getRowModel().rows.map(row => (
            <Tr key = {row.id} _hover = {{cursor: "pointer"}} onClick = {() => navigate(`/services/${row.getVisibleCells()[0].row.original.name}`)}>
              {row.getVisibleCells().map(cell => (
                <Td key = {cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
