const cicloDasQuintas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const cicloDasQuartas = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

function escalaMaior(acidente, tom){
  
  let notasDaEscala = [];
  
   //primeiro grau:
   notasDaEscala.push(tom);
  
   //segunda maior
   tom += 2;
   if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
   }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
   }else{
    notasDaEscala.push(tom);
   }
   //terça maior
   tom += 2;
   if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
   }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
   }else{
    notasDaEscala.push(tom);
   }
  //quarta justa
  tom ++;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //quinta justa
  tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //sexta maior
  tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //sétima maior
   tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }

  
  const escalaMaior = `${acidente[notasDaEscala[0]]} ${acidente[notasDaEscala[1]]} ${acidente[notasDaEscala[2]]} ${acidente[notasDaEscala[3]]} ${acidente[notasDaEscala[4]]} ${acidente[notasDaEscala[5]]} ${acidente[notasDaEscala[6]]}`
  
  console.log(escalaMaior);
}

function escalaMenorHarmonica(acidente, tom){
  let notasDaEscala = [];

 //primeiro grau:
  notasDaEscala.push(tom);
 //segundo grau:
  tom += 2;
   if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
   }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
   }else{
    notasDaEscala.push(tom);
   }
 //terceiro grau:
  tom ++;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //quarto grau:
  tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //quinto grau:
  tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //sexto grau:
  tom ++;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //sétimo grau:
  tom += 3;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else if(tom === 14){
    tom = 2;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }

  const escalaMaior = `${acidente[notasDaEscala[0]]} ${acidente[notasDaEscala[1]]} ${acidente[notasDaEscala[2]]} ${acidente[notasDaEscala[3]]} ${acidente[notasDaEscala[4]]} ${acidente[notasDaEscala[5]]} ${acidente[notasDaEscala[6]]}`
  
  console.log(escalaMaior);
} 

function escalaMenorMelodica(acidente, tom){
  
  let notasDaEscala = [];
  
   //primeiro grau:
   notasDaEscala.push(tom);
  
   //segunda maior
   tom += 2;
   if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
   }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
   }else{
    notasDaEscala.push(tom);
   }
   //terça menor
   tom ++;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //quarta justa
  tom += 2;
   if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
   }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
   }else{
    notasDaEscala.push(tom);
   }
  //quinta justa
  tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //sexta maior
  tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }
  //sétima maior
   tom += 2;
  if(tom === 12){
    tom = 0;
    notasDaEscala.push(tom);
  }else if(tom === 13){
    tom = 1;
    notasDaEscala.push(tom);
  }else{
    notasDaEscala.push(tom);
  }

  
  const escalaMaior = `${acidente[notasDaEscala[0]]} ${acidente[notasDaEscala[1]]} ${acidente[notasDaEscala[2]]} ${acidente[notasDaEscala[3]]} ${acidente[notasDaEscala[4]]} ${acidente[notasDaEscala[5]]} ${acidente[notasDaEscala[6]]}`
  
  console.log(escalaMaior);
}