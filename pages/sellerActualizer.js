import React from "react";
import { useState } from "react";
import SellerCenterHeader from "@/components/sellerCenterHeader";
import Link from "next/link";

export default function SellerActualizer() {
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
      <div className="w-100 d-flex justify-content-center mt-5 mb-5">
        <div className="form-bg w-75">
          <h5 className="text-center fs-3 mt-2">Actualizar contraseña</h5>
          <div className="mt-4">
            <div className="d-flex gap-4 align-items-center justify-content-center w-100 mt-5">
              <p className="w-25 fs-4">Correo electronico:</p>
              <input
                type="text"
                className="w-25 ms-4"
                style={{
                  border: "1px solid darkblue",
                  padding: "8px",
                  background: "#fff",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="d-flex gap-4 align-items-center justify-content-center w-100 mt-3">
              <p className="w-25 fs-4">Contraseña antigua:</p>
              <input
                type="text"
                className="w-25 ms-4"
                style={{
                  border: "1px solid darkblue",
                  padding: "8px",
                  background: "#fff",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="d-flex gap-4 align-items-center justify-content-center w-100 mt-3">
              <p className="w-25 fs-4">Contraseña nueva:</p>
              <input
                type="text"
                className="w-25 ms-4"
                style={{
                  border: "1px solid darkblue",
                  padding: "8px",
                  background: "#fff",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="d-flex gap-4 align-items-center justify-content-center w-100 mt-3">
              <p className="w-25 fs-4">Repetir contraseña nueva:</p>
              <input
                type="text"
                className="w-25 ms-4"
                style={{
                  border: "1px solid darkblue",
                  padding: "8px",
                  background: "#fff",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="d-flex justify-content-center mt-4 mb-3">
              <Link href="/agregarProductListing">
                <button
                  style={{
                    width: "250px",
                    padding: "10px",
                    background: "rgba(27, 54, 93, 1)",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  Actualizar contraseña
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
