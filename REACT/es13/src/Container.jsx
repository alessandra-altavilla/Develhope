/*Crea un componente Container che renderizza i suoi figli all'interno di un tag div. 
La div deve avere uno sfondo bianco e un bordo rosso. 
Aggiungi una proprietà title che conterrà il titolo da visualizzare prima dei figli. 
Rendi il contenitore collassabile, in modo che quando il titolo viene cliccato, 
i figli siano nascosti o mostrati di nuovo. Utilizza useState per gestire lo stato di visibilità del contenuto. */

import React, { useState } from "react";

const Container = ({ title = "Titolo del Contenitore", children = "Figli del contenitore" }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div style={{ backgroundColor: "white", border: "2px solid red", padding: "10px", borderRadius: "5px" }}>
      {/* Titolo con stile migliorato e funzionalità di collasso */}
      <h2 
        style={{ 
          cursor: "pointer", 
          margin: 0, 
          padding: "10px", 
          textAlign: "center", 
          borderRadius: "3px"
        }} 
        onClick={toggleCollapse}
      >
        {title}
      </h2>

      {/* Contenuto visibile solo se collapsed è false */}
      {!collapsed && (
        <div style={{ marginTop: "10px", padding: "10px",  textAlign: "center"}}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Container;


