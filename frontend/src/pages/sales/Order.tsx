import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue
} from '@nextui-org/react'

type Row = {
  key: number
  producto: string
  cantidad: number
  precio: string
}

let rows: Row[] = []
for (let i = 0; i < 9; i++) {
  rows[i] = {
    key: i,
    producto: 'ariel',
    cantidad: 1000,
    precio: '34 Bs'
  }
}

const columns = [
  {
    key: 'producto',
    label: 'PRODUCTO'
  },
  {
    key: 'cantidad',
    label: 'CANTIDAD'
  },
  {
    key: 'precio',
    label: 'PRECIO'
  }
]

export default function Order() {
  return (
    <Table removeWrapper aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={'Vacio'} items={rows}>
        {rows.length > 0
          ? item => (
              <TableRow key={item.key}>
                {columnKey => (
                  <TableCell className="capitalize font-medium text-slate-600 text-sm">
                    {getKeyValue(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )
          : []}
      </TableBody>
    </Table>
  )
}
