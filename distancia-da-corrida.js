function quantasVoltasNaCorrida(distanciaDaVolta, distaciaTotal){
 
    let numeroDeVoltas = 0;
    let distanciaPercorrida = 0;
   
    while(distanciaPercorrida <= distaciaTotal){
      distanciaPercorrida += distanciaDaVolta;
      numeroDeVoltas++;
    }
    console.log(distanciaPercorrida);
    console.log("A corrida terá " + numeroDeVoltas + " voltas.");
   }