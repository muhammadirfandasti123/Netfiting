import React from "react";
import { useState } from "react";
import DropdownSelect from "@/components/dropdownSelect";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";

import {
  dempartmentoListing,
  distritoListing,
  paisListing,
  provinciaListing,
} from "@/constants";
import SellerCenterHeader from "@/components/sellerCenterHeader";

export default function Vendedor() {
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

  const phoneChange = (value) =>
    setFormValues({ ...formValues, number: value });

  return (
    <div className="mb-3">
      <div>
        <SellerCenterHeader handleChange={handleChange} />

        <div className="container mt-5 pt-4">
          <div>
            <label htmlFor="" className="fw-bold">
              DNI O RUC:
            </label>
            <input type="text" className="form-control mt-1" />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              NOMBRE DEL REPRESENTANTE DE LA EMPRESA:
            </label>
            <input type="text" className="form-control mt-1" />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              NOMBRE DE LA EMPRESA:
            </label>
            <input type="text" className="form-control mt-1" />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              PAIS:
            </label>
            <DropdownSelect
              name="pais"
              handleChange={handleChange}
              options={paisListing}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              DEPARTMENTO:
            </label>
            <DropdownSelect
              name="departmento"
              handleChange={handleChange}
              options={dempartmentoListing}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              PROVINCIA:
            </label>
            <DropdownSelect
              name="provincia"
              handleChange={handleChange}
              options={provinciaListing}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              Distrito:
            </label>
            <DropdownSelect
              name="distrito"
              handleChange={handleChange}
              options={distritoListing}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              DIRECCIÓN DE TIENDA U/O ALMACEN:
            </label>
            <input type="text" className="form-control mt-1" />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              NÚMERO DE CELULAR:
            </label>
            <PhoneInput
              className="form-control mt-1"
              placeholder="Enter phone number"
              value={formValues.number}
              onChange={phoneChange}
            />
          </div>
          <div className="mt-4">
            <div className="mt-1 d-flex justify-content-between gap-4">
              <div className="w-100" style={{ marginTop: "-5px" }}>
                <label htmlFor="" className="fw-bold">
                  BANCO:
                </label>
                <DropdownSelect
                  name="provincia"
                  handleChange={handleChange}
                  options={provinciaListing}
                />
              </div>
              <div className="w-100">
                <label htmlFor="" className="fw-bold">
                  # DE CUENTA:
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="w-100">
                <label htmlFor="" className="fw-bold">
                  # DE CUENTA:
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              LINK PAGINA DE FACEBOOK (OPCIONAL):
            </label>
            <input type="text" className="form-control mt-1" />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="fw-bold">
              LINK PAGINA DE INSTAGRAM (OPCIONAL):
            </label>
            <input type="text" className="form-control mt-1" />
          </div>
          <div className="text-center">
            <Link href="/sellerActualizer">
              <button
                className="mt-4"
                style={{
                  background: "rgba(28, 49, 76, 0.9)",
                  color: "#fff",
                  padding: "8px",
                  borderRadius: "5px",
                  width: "250px",
                  fontSize: "22px",
                }}
              >
                Activar Vendedor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
