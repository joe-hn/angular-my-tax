export class factura {
    constructor(
        public _id: string,
        public cliente: string,
        public proyecto: string,
        public fechafactura: string,
        public empresa: string,
        public rtn: string,
        public cai: string,
        public numerofactura: string,
        public importeexonerado: string,
        public importeexento: string,
        public descuentorebaja: string,
        public retencion12: string,
        public retencion1: string,
        public montograbado15: string,
        public montograbado18: string,
        public totalimpuesto15: string,
        public totalimpuesto18: string,
        public totalgrabado: string,
        public montototalfactura: string,
        public honorario: string,
        public totalnetorecibido: string,
        public estado: string,
        public tipofactura: string
    ){}
}
