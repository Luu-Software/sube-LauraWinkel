/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let reg;
  let km;
  let precio;
  let lug;

  
  reg = registrada.value;
  km = distancia.value;
  lug = lugar.value

  if (lug === "CABA"){
  if (reg === "si"){
    if (km <=3){
      precio = 715.24
    }  
    else if (km <= 6){
      precio = 794.74
    }
    else if (km <= 12){
      precio = 855.97
    }
    else if (km <= 27){
      precio = 917.24
    }
  }
  if (reg === "no"){
    if (km <= 3){
      precio = 1137.23
    }
    else if (km <= 6){
      precio =  1263.64
    }
    else if (km <= 12){
      precio = 1360.99
    }
    else if (km <= 27){
      precio = 1458.41
    }
  }
  if (reg === "tarifa social"){
    if (km <= 3){
      precio = 339.18
    }
    else if (km <= 6){
      precio = 376.88
    }
    else if (km <= 12){
      precio = 405.91
    }
    else if (km <= 27){
      precio = 434.97
    }
  }
}


if (lug === "Provincia de Buenos Aires"){
  if (reg === "si"){
    if (km <=3){
      precio = 968.57
    }  
    else if (km <= 6){
      precio = 1089.64
    }
    else if (km <= 12){
      precio = 1210.71
    }
    else if (km <= 27){
      precio = 1452.85
    }
    else if (km > 27){
      precio = 1708.07	
    }

  }
  if (reg === "no"){
    if (km <= 3){
      precio =  1937.14
    }
    else if (km <= 6){
      precio =  2179.28
    }
    else if (km <= 12){
      precio = 2421.42
    }
    else if (km <= 27){
      precio = 2905.70
    }
    else if (km > 27){
      precio = 3416.14	
    }
  }
  if (reg === "tarifa social"){
    if (km <= 3){
      precio =  435.85
    }
    else if (km <= 6){
      precio = 490.33
    }
    else if (km <= 12){
      precio = 544.81
    }
    else if (km <= 27){
      precio = 653.78
    }
    else if (km > 27){
      precio = 768.63	
    }}
  }
  tarifa.innerText = precio;
});
