import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/utils/image";
import DropdownSelect from "./dropdownSelect";
import {
  dempartmentoListing,
  distritoListing,
  paisListing,
  provinciaListing,
} from "@/constants";

export default function SellerCenterHeader({ handleChange }) {
  return (
    <div className=" seller_center">
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <Image src={Logo} className="logo"></Image>
        </Link>
        <h3 className="text-center">SELLER CENTER</h3>
        <button className="dubbie_tech">DUBBIE TECH</button>
      </div>
      <div className=" px-5 mt-5">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <DropdownSelect
              name="pais"
              handleChange={handleChange}
              options={paisListing}
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <DropdownSelect
              name="pais"
              handleChange={handleChange}
              options={paisListing}
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <DropdownSelect
              name="pais"
              handleChange={handleChange}
              options={paisListing}
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <DropdownSelect
              name="pais"
              handleChange={handleChange}
              options={paisListing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
