//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

const numberOne = 30
const numberTwo = 27

const sum = numberOne + numberTwo

alert(sum)

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 30


if(typeof isNumber == 'number') {
  alert("É um número")
} 
else {
  alert("Não é um número")
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = 'isso é uma string'

if(typeof isString == 'string') {
  alert('É uma string')
}
else {
  alert("Não é uma string")
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = true

if(typeof isBoolean == 'boolean') {
  alert("É um booleano")
}
else {
  alert("Não é um booleano")
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = numberOne - numberTwo

alert(sub)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const multi = numberOne * numberTwo

alert(multi)

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = numberOne / numberTwo

alert(div)

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const n1 = 6
const n2 = 4

const sumSecond = n1 + n2

if(sumSecond % 2 != 0) {
  alert("É um número ímpar")
}
else {
  alert("Não é um número ímpar")
}