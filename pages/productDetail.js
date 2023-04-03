import SellerCenterHeader from '@/components/sellerCenterHeader'
import React from 'react'
import { Table } from 'react-bootstrap'
import { ImageOne , ImageTwo, Upload } from '@/utils/image'
import Image from 'next/image'
import { paisListing } from '@/constants'
import DropdownSelect from '@/components/dropdownSelect'
import { useState } from 'react'
import Link from 'next/link'

export default function ProductDetail() {

  const initialValues = {
    pais: "",
    departmento: "",
    provincia: "",
    distrito: "",
    number: null,
  };

  const [formValues, setFormValues] = useState({ initialValues });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div>
        <SellerCenterHeader/>
        <div className='bg-light d-flex gap-5 mt-5 p-3 text-black border align-items-center'>
            <h6 className='mb-0'>Todos</h6>
            <h6 className='mb-0'>Pendientes</h6>
            <h6 className='mb-0'>Enviadas</h6>
            <h6 className='mb-0'>Cancelados</h6>
        </div>
        <div className='mt-4 p-2'>
            <h3>Detales del pedido 001:</h3>
            <p className='mb-0'>Nombre: Cristhian Gonzalez Aip</p>
            <p className='mb-0'>DNI/RUC: 73416946</p>
            <p className='mb-0'># Celular: 917009499</p>
            <p className='mb-0'>País: Perú</p>
            <p className='mb-0'>Depatamento: Cajamarca</p>
            <p className='mb-0'>Provincia: Chota</p>
            <p className='mb-0'>Distrito: Chota</p>
            <p className='mb-0'>Dirección de envio : Tuapac amaru # 140</p>
        </div>
        <div className='mt-5 '>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Imagen de producto</th>
          <th>Producto a enviar</th>
          <th>Talla</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Precio Total.</th>
          <th>Precio envio total</th>
     
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-center'>
            <Image src={ImageOne} />
          </td>
          <td>Powertank Bidid, Negro</td>
          <td>S</td>
          <td>S/. 59.00</td>
          <td>S/. 118.00</td>
          <td>S/. 00.00</td>
          <td>S/. 00.00</td>
         
        </tr>
        <tr>
        <td className='text-center'>
            <Image src={ImageTwo} />
          </td>
          <td>Producto: Powertank Bidid, Negro</td>
          <td>M</td>
          <td>1</td>
          <td>S/. 59.00</td>
          <td>S/. 118.00</td>
          <td>S/. 00.00</td>
         
        </tr>
      </tbody>
    </Table>
        </div>
        <div className='mt-3 d-flex justify-content-end'>
          <div className='d-flex gap-3 p-3'>
            <div>
              <p className='mb-0'>Total Vanta:</p>
              <p className='mb-0'>% COmision</p>
              <p className='mb-0'>COmision Cobrada</p>
              <p className='mb-0'>Total COn COmision</p>
              <p className='mb-0'>TOtal ENvio</p>
              <p className='mb-0'>TOtal a Cobrar:</p>
            </div>
            <div>
              <p className='mb-0'> S/207</p>
              <p className='mb-0'> S/207</p>
              <p className='mb-0'> S/207</p>
              <p className='mb-0'> S/207</p>
              <p className='mb-0'> S/207</p>
              <p className='mb-0'> S/207</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
        <div className='row mt-3 p-4 container'>
          <div className='col-lg-6 col-sm-12'>
            <div>
            <DropdownSelect
              name="pais"
              handleChange={handleChange}
              options={paisListing}
            />
            <div className='d-flex gap-2 mt-4'>
              <p className='mb-0'>Fetcha de envio:</p>
              <input type="text" className='w-50'/>
            </div>
            <div className='d-flex gap-2 mt-4'>
              <p className='mb-0'>Fetcha de envio:</p>
              <input type="text" className='w-50'/>
            </div>
            <div className='d-flex gap-2 mt-4'>
              <p className='mb-0'>Subir imagen de envio</p>
              <input type="file" id='upload' style={{display:"none"}}/>
              <label htmlFor="upload">
                <Image src={Upload} className="w-100" />
              </label>
            </div>
            <Link href="/liquidDacions">
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
             Guardar datos
            </button>
            </Link>
            </div>
          </div>
          <div className='col-lg-6 col-sm-12'>
          <div className='d-flex gap-2 mt-4'>
              <p className='mb-0'>Fetcha de envio:</p>
              <input type="text" className='w-50'/>
            </div>
            <div className='d-flex gap-2 mt-4'>
              <p className='mb-0'>Fetcha de envio:</p>
              <input type="text" className='w-50'/>
            </div>
            <div className='d-flex gap-2 mt-4'>
              <p className='mb-0'>Fetcha de envio:</p>
              <input type="text" className='w-50'/>
            </div>
            <div className='d-flex gap-2 mt-4'>
              <p className='mb-0'>Subir imagen de envio</p>
              <input type="file" id='upload' style={{display:"none"}}/>
              <label htmlFor="upload">
                <Image src={Upload} className="w-100" />
              </label>
            </div>
            <Link href="/liquidDacions">
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
             Guardar datos
            </button>
            </Link>
          </div>
        </div>
        </div>
    </div>
  )
}
