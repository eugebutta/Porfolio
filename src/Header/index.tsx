import React from "react";
import FotoPerfil from "../img/perfil.png";
import "./style.css";

export default function Header() {
  return (
    <div className="ContainerHeader">
      <div className="ContentHeader">
        <img src={FotoPerfil} alt="FotoPerfil" />
        <div
          style={{
            width: "244px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div className="Nombre">
            <a style={{ color: "black" }} href="/Home">
              Euge Butta <div style={{ color: "blue" }}>.</div>
            </a>
          </div>
          <div className="MenuHeader">
            <a  tabIndex={-1} href="/Projects">
              Projects
            </a>
            <a  tabIndex={-1} href="/Contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
