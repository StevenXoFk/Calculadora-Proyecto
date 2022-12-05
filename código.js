const txtOp1 = document.getElementById('op1');
const txtOp = document.getElementById('operador');
const txtOp2 = document.getElementById('op2');
const BoCal = document.getElementById('cal');
const pTotal = document.getElementById('total');

BoCal.addEventListener('click', calcular);

function calcular(){
  const operador = txtOp.value;
    const op1 = parseFloat(txtOp1.value);
      const op2 = parseFloat(txtOp2.value);
        
          if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op2)){
              let resultado;
                  switch(operador){
                        case "+" :
                                resultado = op1+op2;
                                        break;
                                              case "-" :
                                                      resultado = op1-op2;
                                                              break;
                                                                    case "*" :
                                                                            resultado = op1*op2;
                                                                                    break;
                                                                                          case "/" :
                                                                                                  resultado = op1/op2;
                                                                                                          break
                                                                                                              }
                                                                                                                  
                                                                                                                      
                                                                                                                          pTotal.innerText = resultado;
                                                                                                                            }else{
                                                                                                                                pTotal.innerText = "Eso es imposible";
                                                                                                                                    alert("Ingresa algo posible");
                                                                                                                                      }
                                                                                                                                      }