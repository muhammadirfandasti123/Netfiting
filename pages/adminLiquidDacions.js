import SellerCenterHeader from '@/components/sellerCenterHeader'
import React from 'react'
import { Table } from 'react-bootstrap'
import Link from 'next/link'

export default function AdminLiquidDacions() {
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
        <div className='mt-5'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th># de pedido</th>
          <th>Vendedor</th>
          <th>Monto total</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Dubbie Tech</td>
          <td>S/ 207.00</td>
        
        </tr>
        <tr>
          <td>002</td>
          <td>Dubbie Tech</td>
          <td>S/ 207.00</td>
        
        </tr>
        <tr>
          <td>003</td>
          <td>Dubbie Tech</td>
          <td>S/ 207.00</td>
          
        </tr>
      </tbody>
    </Table>
        </div>
        <div className='text-center'>
            <Link href="/pendiente">
        <button
              style={{
                border: "none",
                background: "rgba(27, 54, 93, 1)",
                color: "#fff",
                padding: "8px 15px",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
             Confirmar Pago
            </button>
            </Link>
        </div>

        <div className='mt-5'>
            
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
