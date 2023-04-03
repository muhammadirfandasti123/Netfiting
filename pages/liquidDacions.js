import SellerCenterHeader from '@/components/sellerCenterHeader'
import React from 'react'
import { Table } from 'react-bootstrap'
import Link from 'next/link'

export default function LiquidDacions() {
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
          <th># de padido</th>
          <th>Fetcha Padidio</th>
          <th>Fetcha Envio</th>
          <th>Total Venta</th>
          <th>Comision CObrada</th>
          <th>Total con COmision</th>
          <th>Total Envio</th>
          <th>Total a CObrar</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>001</td>
          <td>2/02/2023</td>
          <td>S</td>
          <td>S/. 59.00</td>
          <td>S/. 118.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
          <td>
            <Link href="/productDetail">Details</Link>
          </td>
        </tr>
        <tr>
        <td>002</td>
          <td>2/02/2023</td>
          <td>M</td>
          <td>1</td>
          <td>S/. 59.00</td>
          <td>S/. 118.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
          <td>
            <Link href="/productDetail">Details</Link>
          </td>
         
        </tr>
        <tr>
        <td>003</td>
          <td>2/02/2023</td>
          <td>M</td>
          <td>1</td>
          <td>S/. 59.00</td>
          <td>S/. 118.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
          <td>
            <Link href="/productDetail">Details</Link>
          </td>
         
        </tr>
      </tbody>
    </Table>
        </div>
        <div className='d-flex justify-content-center'>
        <div className='mt-4 d-flex gap-3 p-3'>
        <div className='text-center p-5 border bg-light rounded-2'>
            <h3>LIQUIDACIONES PENDIENTES:</h3>
            <p className='mb-0 d-flex justify-content-center'>S/345</p>
        </div>
        <div className='text-center p-5 border bg-light rounded-2'>
            <h3>LIQUIDACIONES PAGADAS:</h3>
            <p className='mb-0 d-flex justify-content-center'>S/0</p>
        </div>
        </div>
        </div>

        <div className='mt-5'>
            <h5 className='text-center mb-3'>PAGOS</h5>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th># de liquidacion</th>
          <th>Vendedor</th>
          <th>Monto total</th>
          <th># Numero de pago</th>
          <th># Fecha de pago</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Dubbie Tech</td>
          <td>S/ 175.85</td>
          <td>001</td>
          <td>18/02/2023</td>
          <td>
            <Link href="/adminLiquidDacions">Details</Link>
          </td>
        </tr>
       
      </tbody>
    </Table>
        </div>
    </div>
  )
}
