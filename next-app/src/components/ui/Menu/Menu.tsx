"use client";

import React, { useState, useContext } from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";
import { useMenu } from "@/store/hooks";

const Menu = () => {
  const { showMenu, setShowMenu } = useMenu();

  const handleItemClick = () => {
    setShowMenu(false);
  };

  const data = [
    {
      title: "Tablas",
      path: "/tables",
      subTitle: [
        { title: "canal", path: "/canal" },
        { title: "caja", path: "/caja" },
        { title: "combinacioncanal", path: "/combinacioncanal" },
        { title: "combinacion", path: "/combinacion" },
        { title: "etapa", path: "/etapa" },
        { title: "estado", path: "/estado" },
        { title: "combinacionformatamano", path: "/combinacionformatamano" },
        { title: "combinaciones", path: "/combinaciones" },
        { title: "camioneta", path: "/camioneta" },
        { title: "crema", path: "/crema" },
        { title: "guiadespachocab", path: "/guiadespachocab" },
        { title: "facturacab", path: "/facturacab" },
        { title: "integraciontipo", path: "/integraciontipo" },
        {
          title: "integracionplataformadiccionario",
          path: "/integracionplataformadiccionario",
        },
        { title: "integraciondiccionario", path: "/integraciondiccionario" },
        { title: "horarioatencion", path: "/horarioatencion" },
        { title: "masatipo", path: "/masatipo" },
        { title: "masaespecialinventario", path: "/masaespecialinventario" },
        { title: "mensaje", path: "/mensaje" },
        { title: "opcionmovil", path: "/opcionmovil" },
        { title: "guiadespachodet", path: "/guiadespachodet" },
        { title: "facturadet", path: "/facturadet" },
        {
          title: "integracionplataformaorder",
          path: "/integracionplataformaorder",
        },
        { title: "horarioextendido", path: "/horarioextendido" },
        { title: "masaespecial", path: "/masaespecial" },
        { title: "integracionpedidotemp", path: "/integracionpedidotemp" },
        { title: "masatiposabor", path: "/masatiposabor" },
        { title: "masasabor", path: "/masasabor" },
        { title: "opcionmovilperfilmovil", path: "/opcionmovilperfilmovil" },
        { title: "opcion", path: "/opcion" },
        { title: "pedidoespecial", path: "/pedidoespecial" },
        { title: "opcionperfil", path: "/opcionperfil" },
        { title: "preciopublico", path: "/preciopublico" },
        { title: "productoprogramado", path: "/productoprogramado" },
        { title: "programaciondiariacab", path: "/programaciondiariacab" },
        { title: "perfilmovil", path: "/perfilmovil" },
        { title: "programaciondiariatot", path: "/programaciondiariatot" },
        { title: "sabor", path: "/sabor" },
        { title: "semanadet", path: "/semanadet" },
        { title: "seccion", path: "/seccion" },
        { title: "pedidomensaje", path: "/pedidomensaje" },
        { title: "pedido", path: "/pedido" },
        { title: "producto", path: "/producto" },
        { title: "productotipo", path: "/productotipo" },
        { title: "programaciondiariadet", path: "/programaciondiariadet" },
        { title: "precio", path: "/precio" },
        { title: "relleno", path: "/relleno" },
        { title: "sale_type", path: "/sale_type" },
        { title: "shape", path: "/shape" },
        { title: "semanacab", path: "/semanacab" },
        { title: "stock", path: "/stock" },
        { title: "usuario", path: "/usuario" },
        { title: "sobrantecab", path: "/sobrantecab" },
        { title: "sucursallimite", path: "/sucursallimite" },
        { title: "torta", path: "/torta" },
        { title: "_guiadespachocab", path: "/_guiadespachocab" },
        { title: "sucursal", path: "/sucursal" },
        { title: "sobrantedet", path: "/sobrantedet" },
        { title: "usuarioopcion", path: "/usuarioopcion" },
        { title: "tamano", path: "/tamano" },
        { title: "user", path: "/user" },
      ],
    },
  ];

  return (
    <div className={styles.menu} style={{ left: showMenu ? "50px" : "-250px" }}>
      {data.map((item, index) => (
        <>
          <div key={index} className={styles.item}>
            {item.title}
          </div>

          {item.subTitle.map((subItem, subIndex) => (
            <>
              <Link
                key={subIndex}
                className={styles.linkMenu}
                href={item.path + subItem.path}
              >
                <div className={styles.subItem} onClick={handleItemClick}>
                  {subItem.title}
                </div>
              </Link>
            </>
          ))}
        </>
      ))}
    </div>
  );
};

export default Menu;
