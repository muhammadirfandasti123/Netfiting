import SellerCenterHeader from "@/components/sellerCenterHeader";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Search } from "@/utils/image";
import { Table } from "react-bootstrap";
import { ImageOne, ImageTwo } from "@/utils/image";
import Link from "next/link";

export default function AgregarProductListing() {
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
      <SellerCenterHeader handleChange={handleChange} />
      <div className="d-flex justify-content-evenly gap-2 px-2 mt-4">
        <Link href="/productForm">
          <button className="AgregarBtn">Agregar nuevo producto</button>
        </Link>

        <div className="search">
          <Image src={Search}></Image>
          <input type="text" placeholder="Buscar producto" />
        </div>
      </div>
      <div className="p-2">
        <button className="border-1">Section 1</button>
        <div className="responsive">
          <Table className=" mt-3 bg-light" bordered>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Producto</th>
                <th>Imagen Producto</th>
                <th>Precio</th>
                <th>Precio de oferta</th>
                <th>Inventario</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>567856</td>
                <td>Powertank Bidid, Negro</td>
                <td className="d-flex justify-content-center">
                  <Image src={ImageOne}></Image>
                </td>
                <td>@S/. 79.00</td>
                <td>@S/. 59.00</td>
                <td>
                  <div
                    className=" border-1"
                    style={{
                      background: "#fff",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="d-flex justify-content-around">
                      <p className="mb-0">S:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-around  ">
                      <p className="mb-0">M:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-around  ">
                      <p className="mb-0">L:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-around ">
                      <p className="mb-0">XL:</p>
                      <p className="mb-0">2</p>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <input type="checkbox" id="switch" class="checkbox" />
                  <label for="switch" class="toggle text-center">
                    <p className="para-toggle">
                      <span>OFF</span> <span>ON</span>
                    </p>
                  </label>
                </td>
                <td>
                  <div
                    className=" border-1 text-center d-flex flex-column gap-2 p-2"
                    style={{
                      background: "#fff",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <h6>Duplicar</h6>
                    <h6>Eliminar</h6>
                    <Link href="/editProduct">
                    <h6>Editar</h6>
                    </Link>
               
                  </div>
                </td>
              </tr>
              <tr>
                <td>567857</td>
                <td>Workou Tee II Polo Deportivo, Blanco</td>
                <td className="d-flex justify-content-center">
                  <Image src={ImageTwo}></Image>
                </td>
                <td>@S/. 150.00</td>
                <td>@S/. 150.00</td>
                <td>
                  <div
                    className=" border-1"
                    style={{
                      background: "#fff",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <div className="d-flex justify-content-around  ">
                      <p className="mb-0">S:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-around  ">
                      <p className="mb-0">M:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-around  ">
                      <p className="mb-0">L:</p>
                      <p className="mb-0">2</p>
                    </div>
                    <div className="d-flex justify-content-around ">
                      <p className="mb-0">XL:</p>
                      <p className="mb-0">2</p>
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <input type="checkbox" id="switch2" class="checkbox" />
                  <label for="switch2" class="toggle text-center">
                    <p className="para-toggle">
                      <span>OFF</span> <span>ON</span>
                    </p>
                  </label>
                </td>
                <td>
                  <div
                    className=" border-1 text-center d-flex flex-column gap-2 p-2"
                    style={{
                      background: "#fff",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  >
                    <h6>Duplicar</h6>
                    <h6>Eliminar</h6>
                    <Link href="/editProduct">
                    <h6>Editar</h6>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
