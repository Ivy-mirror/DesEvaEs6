class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual
    this.deducciones = deducciones
  }

  //Get Set Monto Bruto Anual
  get montoBrutoAnual() {
    return this.montoBrutoAnual
  }

  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    this._montoBrutoAnual.push(nuevoMontoBrutoAnual)
  }
  //Get Set Monto Deducciones
  get deducciones() {
    return this.deducciones
  }

  set deducciones(nuevaDeduccion) {
    this.deducciones.push(nuevaDeduccion)
  }

  
  calcularImpuestos() {
    return (this.montoBrutoAnual - this.deducciones) * 0.21
  }
}

let Impuestos = new Impuestos(2500,120)