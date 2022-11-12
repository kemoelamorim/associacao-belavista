export class DateHelper{
  
  constructor(){
    throw new Error('DateHelper não pode ser instanciada')
  }
  
  static dataPataTexto(data: Date){
    const dia = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
    const mes = data.getMonth() + 1 < 10 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`
  }
  static textoParaDate(texto: string): Date{
    if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
      throw new Error("Deve ser usado o formato aaaa-mm-dd")
    }
    const exp = /-/g;
    const data = new Date(texto.replace(exp, ','));
    return data;
  }
}