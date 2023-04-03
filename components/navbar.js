import {
  AppStore,
  GooglePlayStore,
  Logo,
  RegisterFormImage,
} from "@/utils/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar({ idd }) {
  const changeNavBg = () => {
    var element = document.getElementById("mynav");
    window.scrollY >= 100
      ? element.classList.add("mystyle")
      : element.classList.remove("mystyle");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div>
      <nav
        id="mynav"
        class={`${
          idd === "2"
            ? "navbar navbar-expand-lg nav-gradiant position-fixed w-100"
            : "navbar navbar-expand-lg position-fixed   w-100"
        }`}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Image src={Logo} className="logo"></Image>
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="links">
                <Link href="/" className="a">
                  Inicio
                </Link>
                <Link href="/register" className="a">
                  !Registrate Ahora!
                </Link>
                <Link href="/session" className="a">
                  Iniciar sesion
                </Link>
              </div>
            </ul>
            {idd === "1" ? (
              <div className="d-flex gap-2">
                <Image src={GooglePlayStore}></Image>
                <Image src={AppStore}></Image>
              </div>
            ) : idd === "2" ? (
              <Image
                src={RegisterFormImage}
                style={{
                  width: "230px",
                  height: "150px",
                  marginRight: "-25px",
                }}
              ></Image>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
