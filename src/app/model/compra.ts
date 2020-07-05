import { callbackify } from "util";

export class compra {
    constructor(
        public _id: string,
        public cliente: string,
        public proyecto: string,
        public nombre: string,
        public estado: string
    ) { }
}