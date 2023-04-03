// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "../assets/styles/Home.module.css";
import Image from "next/image";
import Navbar from "@/components/navbar";

import { Persons, Register } from "@/utils/image";
import { beneficiousListing, porqueListing } from "@/constants";
console.log(beneficiousListing, "beneficiousListing");
export default function Home() {
  return (
    <>
      <div className="position-relative">
        <Navbar idd="1" />
        <div className="position-absolute top-0 w-100">
          <section className="section_One">
            <div className="row container">
              <div className="col-lg-7 col-sm-12 ">
                <Image
                  src={Persons}
                  style={{ width: "100%", height: "auto", marginTop: "40px" }}
                ></Image>
              </div>
              <div className="col-lg-5 col-sm-12">
                <h3 className={styles.title}>
                  ¿Quieres ser parte de la nueva revolución del comercio
                  electronico de la moda ?
                </h3>
                <button className="vender_Fitting">
                  Sí, quiero vender en Netfiting
                </button>
              </div>
            </div>
          </section>
          <section className="">
            <h4 className={styles.subtitle} style={{ textAlign: "center" }}>
              Por que vender en Netfiting?
            </h4>

            <p className={styles.description}>
              Con NETFITING podras maximizar tus ventajas en el mercado con una
              experiencia de compra superior: Podras ofrecer la opción de
              probarse la ropa virtualmente antes de comprarla
            </p>

            <div className="row container-fluid">
              {porqueListing.map((item, i) => (
                <div className="col-lg-4 col-sm-12">
                  <div className="text-center">
                    <Image
                      src={item.image}
                      alt="image"
                      style={{ width: "50%", height: "50%" }}
                    ></Image>
                    <h4>{item.heading}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className={styles.subtitle} style={{ textAlign: "center" }}>
              ¿Qué beneficios obtienes al vender en NETFITING?
            </h4>
            <div className="row w-100 mt-5">
              {beneficiousListing.map((item, i) => (
                <div
                  className="col-lg-2 col-sm-12 text-center d-flex align-items-center justify-content-center text-white position-relative"
                  style={{
                    height: "200px",
                  }}
                >
                  <div className="card-bg-wrapper">
                    <Image src={item.image}></Image>
                  </div>
                  <div className="card-content">
                    <Image src={item.logo}></Image>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h4 className={styles.subtitle}>
              Conoce como funciona nuestro marketplace
            </h4>

            <video
              className="pb-2 mt-5"
              src="https://www.youtube.com/watch?v=KWXjv95Bdww"
              width="40%"
              height="340"
              controls
            ></video>
          </section>

          <section>
            <div className="row w-100 text-center mt-5">
              <div className="col-lg-7">
                <h4 className={styles.subtitle}>
                  Empieza a vender en Netfiting ahora y se parte de la
                  revolución del comercio electrónico de la moda
                </h4>
                <button className={styles.register}>REGISTRARME AHORA</button>
              </div>
              <div className="col-lg-5">
                <Image src={Register}></Image>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
