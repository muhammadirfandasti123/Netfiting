import SellerCenterHeader from '@/components/sellerCenterHeader'
import React from 'react'
import { Table } from 'react-bootstrap'
import Link from 'next/link'

export default function Pendiente() {
  return (
    <div>
        <SellerCenterHeader/>
        <div className='bg-light d-flex gap-5 mt-5 p-3 text-black border align-items-center'>
           
            <h6 className='mb-0'>Pendientes</h6>
            <h6 className='mb-0'>Activo</h6>
            <h6 className='mb-0'>No Activo</h6>
        </div>
        <div className='mt-5'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>DNI/ RUC</th>
          <th>Nombre del representante</th>
          <th>Nombre de la tienda</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>73416946</td>
          <td>Cristhian Gonzalez</td>
          <td>Dubbie tech</td>
          <td>Pendiente</td>
          <td>
           <Link href="/vendedor">Administrar</Link> </td>
        </tr>
        <tr>
          <td>73416946</td>
          <td>Cristhian Gonzalez</td>
          <td>Dubbie tech</td>
          <td>Pendiente</td>
          <td>
           <Link href="/vendedor">Administrar</Link> </td>
        </tr>
        <tr>
          <td>73416946</td>
          <td> Cristhian Gonzalez</td>
          <td>Dubbie tech</td>
          <td>Pendiente</td>
          <td>
           <Link href="/vendedor">Administrar</Link> </td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  )
}
