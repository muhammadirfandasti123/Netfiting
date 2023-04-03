import SellerCenterHeader from '@/components/sellerCenterHeader'
import React from 'react'
import { Table } from 'react-bootstrap'
import { Graph } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductListing() {
  return (
    <div>
        <SellerCenterHeader/>
        <div className='bg-light d-flex gap-5 mt-5 p-3 text-black border align-items-center'>
            <h6 className='mb-0'>Todos</h6>
            <h6 className='mb-0'>Pendientes</h6>
            <h6 className='mb-0'>Enviadas</h6>
            <h6 className='mb-0'>Cancelados</h6>
        </div>
        <div className='mt-5 '>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th># de pedido</th>
          <th>Detalle del pedido</th>
          <th>Cliente</th>
          <th>Fecha de pedido</th>
          <th>Fecha maxima de despacho</th>
          <th>Total Venta</th>
          <th>Costo de envio</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Producto: Powertank Bidid, Negro Talla: S Cantidad: 2</td>
          <td>Cristhian Gonzalez</td>
          <td>2/02/2023</td>
          <td>2/03/2023</td>
          <td>S/. 207.00</td>
          <td>S/. 207.00</td>
          <td>Pendiente</td>
          <td>
            <Link href="/productDetail">
            Details
            </Link>
          </td>
        </tr>
        <tr>
          <td>002</td>
          <td>Producto: Powertank Bidid, Negro Talla: S Cantidad: 1</td>
          <td>Omar Gonzalez</td>
          <td>1/13/2023</td>
          <td>2/03/2023</td>
          <td>S/. 207.00</td>
          <td>S/. 207.00</td>
          <td>Enviado</td>
          <td>
          <Link href="/productDetail">
            Details
            </Link>
          </td>
        </tr>
        <tr>
          <td>003</td>
          <td >Producto: Powertank Bidid, Negro Talla: XL Cantidad: 1</td>
          <td>Yane Agip</td>
          <td>1/13/2023</td>
          <td>2/03/2023</td>
          <td>S/. 207.00</td>
          <td>S/. 207.00</td>
          <td>Cancelado</td>
          <td>
          <Link href="/productDetail">
            Details
            </Link>
          </td>
        </tr>
      </tbody>
    </Table>
        </div>
        <div className='d-flex justify-content-around mt-3'>
            <h5># de ventas: 3</h5>
            <h5>Total ventas: S/ 345.00</h5>
        </div>
        <div className='mt-5 text-center'>
       <Image src={Graph} className="w-25 h-25 mb-4"/>
        </div>
    </div>
  )
}
