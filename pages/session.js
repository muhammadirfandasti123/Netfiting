import React from "react";
import { Logo, SessionImage } from "@/utils/image";
import Image from "next/image";
import styles from "../assets/styles/Session.module.css";
import Link from "next/link";

export default function Session() {
  return (
    <div className="d-flex justify-content-center">
      <div className="row w-100 container align-items-center p-4">
        <div className="col-lg-6 col-sm-12 text-center">
          <Image src={Logo}></Image>
        </div>
        <div className="col-lg-6 col-sm-12 text-center">
          <p className="fs-3 d-flex justify-content-center">SELLER CENTER</p>
        </div>
        <div className="col-lg-6 text-center">
          <p className="fs-4 mt-2 d-flex justify-content-center">
            El markeplace de moda inteligente
          </p>
          <Image src={SessionImage}></Image>
        </div>
        <div className="col-lg-6 bg-light shadow py-5 px-4">
          <h5 className="text-center">
            INICIAR SECIÓN COMO VENDEDOR EN NETFITING
          </h5>
          <div className="d-flex gap-3 mt-5">
            <p style={{ width: "200px" }}>CORREO ELECTRONICO:</p>
            <input type="text" className={styles.input} />
          </div>
          <div className="d-flex gap-3 mt-5">
            <p style={{ width: "200px" }}>CONTRASEÑA:</p>
            <input type="text" className={styles.input} />
          </div>
          <div className="text-center mt-2">
            <div>
              <Link href="/sellerCenter">
                <button className={styles.ingresarbtn}>INGRESAR</button>
              </Link>

              <p className="d-flex justify-content-center mt-2 ms-3">
                Olvidé mi contraseña
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
