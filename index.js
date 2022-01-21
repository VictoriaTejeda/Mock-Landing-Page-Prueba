let montoDeseado = document.getElementById("montoDeseado");
let tasaAnual = document.getElementById("tasaAnual");
let plazoEnMEses = 12;
const comisionApertura = 348;
btn12Meses = document.getElementById("btn12");
btn12Meses.classList.add("active");
btn24Meses = document.getElementById("btn24");
btn36Meses = document.getElementById("btn36");

const calcPagoMensual = () => {
  const pagoMensual = montoDeseado.value / plazoEnMEses;
  const tasaMensual = montoDeseado.value * (tasaAnual.value / 100 / 12);
  return pagoMensual + tasaMensual;
};

const calc12Meses = () => {
  btn24Meses.classList.remove("active");
  btn36Meses.classList.remove("active");
  btn12Meses.classList.add("active");
  plazoEnMEses = 12;
  printCalculation();
};

const calc24Meses = () => {
  btn12Meses.classList.remove("active");
  btn36Meses.classList.remove("active");
  btn24Meses.classList.add("active");
  plazoEnMEses = 24;
  printCalculation();
};

const calc36Meses = () => {
  btn12Meses.classList.remove("active");
  btn24Meses.classList.remove("active");
  btn36Meses.classList.add("active");
  plazoEnMEses = 36;
  printCalculation();
};

const printCalculation = () => {
  tasaAnual = document.getElementById("tasaAnual");

  let inPagoMensual = document.getElementById("tx-pago-mensual");
  inPagoMensual.setAttribute("placeholder", calcPagoMensual());

  let inMontoNetoDep = document.getElementById("tx-monto-neto-dep");
  inMontoNetoDep.setAttribute("placeholder", calMontoNetoDepositado());

  let inTotalPagado = document.getElementById("tx-total-pagado");
  inTotalPagado.setAttribute("placeholder", calTotalPagado());
};

const calMontoNetoDepositado = () => {
  return montoDeseado.value - comisionApertura;
};

const calTotalPagado = () => {
  const interesesTotales =
    parseFloat(plazoEnMEses / 12) * (tasaAnual.value / 100);
  const suma =
    parseFloat(montoDeseado.value) +
    comisionApertura +
    parseFloat(montoDeseado.value * interesesTotales);
  return suma;
};
