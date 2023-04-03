import React from "react";
import { useState } from "react";
import SellerCenterHeader from "@/components/sellerCenterHeader";
import { colorListing, sizeListing } from "@/constants";
import DropdownSelect from "@/components/dropdownSelect";
import { Upload } from "@/utils/image";
import { ImageOne } from "@/utils/image";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Link from "next/link";

export default function EditProduct() {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo producto:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="">
                Nombre
                <input type="text" className="form-control mt-2" />
              </label>
              <label htmlFor="">
              Descripcion: (opcional)
              <textarea name="" id="" cols="30" rows="10" className="form-control mt-2"></textarea>
              </label>
              <div className="text-center">
                <h5 className="mt-2">MEDIDAS PAQUETE:</h5>
               <div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-center">
                      <p className="mb-0">alex:</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col">
                  <div className="d-flex align-items-center">
                      <p className="mb-0">alex:</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  
                </div>
                <div className="row mt-2">
                  <div className="col">
                  <div className="d-flex align-items-center">
                      <p className="mb-0">alex:</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col">
                  <div className="d-flex align-items-center">
                      <p className="mb-0">alex:</p>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  
                </div>
               </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="mt-5">
                <label htmlFor="" className="w-100">
                  Marca:
                  <DropdownSelect
              name="color"
              handleChange={handleChange}
              options={sizeListing}
            />
                </label>
            
              </div>
              <div className="mt-5">
                <label htmlFor="" className="w-100">
                Categoria principal:
                <DropdownSelect
              name="color"
              handleChange={handleChange}
              options={sizeListing}
            />
                </label>
            
              </div>
              <div className="mt-5">
                <label htmlFor="" className="w-100">
                  categorias sucandaris
                  <DropdownSelect
              name="color"
              handleChange={handleChange}
              options={sizeListing}
            />
                </label>
            
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
         <div className="d-flex justify-content-center w-100">
          <button  style={{
                  border: "none",
                  background: "rgba(27, 54, 93, 1)",
                  color: "#fff",
                  padding: "8px 15px",
                  borderRadius: "8px",
                }}>Guardar</button>
         </div>
        </Modal.Footer>
      </Modal>
      <SellerCenterHeader handleChange={handleChange} />
      <div className="px-4 py-4">
        <div className="row text-center">
          <div className="col-lg-4 col-sm-12">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">PRODUCTO:</p>
              <button
                style={{
                  border: "none",
                  background: "rgba(27, 54, 93, 1)",
                  color: "#fff",
                  padding: "8px 15px",
                  borderRadius: "8px",
                }}
                onClick={handleShow}
              >
                Crear nuevo producto
              </button>
            </div>
            <div className="text-start">
              <input type="text" value="product name" className="form-control mt-2 border-dark" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <p className="mb-0">PRECIO:</p>
            <input type="text" value={500} className="form-control mt-2 border-dark" />
          </div>
          <div className="col-lg-4 col-sm-12">
            <p className="mb-0">PRECIO EN OFERTA (Opcional):</p>
            <input type="text" value="OFERTA" className="form-control mt-2 border-dark" />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3 ">
          <div className="d-flex gap-2">
            <div className="d-flex gap-1">
              <p className="mb-0">Desde:</p>
              <input type="text" value="desde" className="border-normal" />
            </div>
            <div className="d-flex gap-1">
              <p className="mb-0">Hasta:</p>
              <input type="text" value="hasta" className="border-normal" />
            </div>
          </div>
        </div>
        <div className="row d-flex gap-2 text-center justify-content-center mt-4">
          <div className="col-lg-5">
            <p className="mb-0 d-flex justify-content-center ">TALLAS:</p>
            <div className="row">
              <div className="col">
                <p className="mb-0">TALLA:</p>
                <div className="w-100" style={{marginTop:"-5px"}}>
                <DropdownSelect
              name="color"
              handleChange={handleChange}
              options={sizeListing}
            />
                </div>
                
              </div>
              <div className="col">
                <p className="mb-0">INVENTARIO:</p>
                <input type="text" value="INVENTARIO" className="w-100 border-normal p-1" />
                <div></div>
              
              </div>
            </div>
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
              Agregar nueva talla
            </button>
          </div>
          <div className="col-lg-5">
            <p className="mb-0 d-flex justify-content-center">COLOR:</p>
          <div style={{marginTop:"30px"}}>

          <DropdownSelect
              name="color"
              handleChange={handleChange}
              options={colorListing}
            />
          </div>
          </div>
        </div>
        <h4 className="text-center mt-2">IMAGEN PRINCIPAL:</h4>
        <div className="d-flex justify-content-center">
        <div className="row mt-4 w-75">
          <div className="col-lg-4 col-sm-12 mt-2">
            <div style={{width:"100%" , border:"2px solid #1B365D" , borderRadius:"10px" , height:"500px" }}>
            <Image src={ImageOne} style={{width:"100%" , height:"100%"}} />  
            </div>
            <div className="d-flex justify-content-end">
             <div className="d-flex gap-2">
               <p>Subir image</p>
               <input type="file" name="" id="upload" style={{display:"none"}} />
               <label htmlFor="upload">
                 <Image src={Upload} style={{width:"50px",height:"50px"}}/></label>
             </div>
            </div> 
          </div>
          <div className="col-lg-4 col-sm-12 text-center">
            <p className="d-flex justify-content-center mb-0">Tipo de prenda:</p>
            <DropdownSelect
              name="color"
              handleChange={handleChange}
              options={sizeListing}
            />
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
              Generar prenda IA
            </button>
            <p>Recomendaciones:</p>
            <div style={{width:"100%" , border:"2px solid #1B365D" , padding:'5px'  ,borderRadius: "8px"}}>
              <p>1.Imagen persona vistiendo prenda.</p>
              <p>2. No tapar prenda con la mano.</p>
              <p>3. Posicion recta.</p>
              <p>4. Prenda entera.</p>
              <p>5. Lo mas cercano posible.</p>
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
            Ver video tutorial
            </button>
            </div>
          
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div style={{width:"100%" , border:"2px solid #1B365D" , borderRadius:"10px" , height:"500px"}}>
            <Image src={ImageOne} style={{width:"100%" , height:"100%"}} />  
            </div>
          <div className="text-center">
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
           Volver a generar
            </button>
            </div>
          </div>
        </div>
        </div>
        <h4 className="text-center mt-2">IMAGEN SECUNDARIAS:</h4>
        <div className="d-flex justify-content-center">
        <div className="row mt-4 w-75">
          <div className="col-lg-4 col-sm-12 mt-2">
            <div style={{width:"100%" , border:"2px solid #1B365D" , borderRadius:"10px" , height:"500px" }}>
            <Image src={ImageOne} style={{width:"100%" , height:"100%"}} />  
            </div>
            <div className="d-flex justify-content-end">
             <div className="d-flex gap-2">
               <p>Subir image</p>
               <input type="file" name="" id="upload" style={{display:"none"}} />
               <label htmlFor="upload">
                 <Image src={Upload} style={{width:"50px",height:"50px"}}/></label>
             </div>
            </div> 
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div style={{width:"100%" , border:"2px solid #1B365D" , borderRadius:"10px" , height:"500px"}}>
            <Image src={ImageOne} style={{width:"100%" , height:"100%"}} />  
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div style={{width:"100%" , border:"2px solid #1B365D" , borderRadius:"10px" , height:"500px"}}>
            <Image src={ImageOne} style={{width:"100%" , height:"100%"}} />           
            </div>
          </div>
        </div>
        </div>
        <div className="text-center">
          <Link href="/productListing">
        <button
                style={{
                  border: "none",
                  background: "rgba(27, 54, 93, 1)",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "8px",
                }}
              >
                GUARDAR PRODUCTO
              </button>
              </Link>
        </div>
      </div>
    </div>
  );
}