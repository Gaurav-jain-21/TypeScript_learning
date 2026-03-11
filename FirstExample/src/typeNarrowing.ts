function getGreet(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}
function serveGreet(msg?: string | number) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default bolg`;
}
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai`;
  }
  if (size === "medium") {
    return `make extra chai`;
  }
  return `chai order #${size}`;
}
class KulhadChai {
  serve() {
    return "serving kulhad chai";
  }
}
class Cutting {
  serve() {
    return "serving cutting chai";
  }
}
function serve(chai:KulhadChai|Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    else{
        return chai
    }
}


type ChaiOrder={
  type: string
  suger: number
}

function isChaiOrder(obj:any): obj is ChaiOrder{
  return (
    typeof obj === "object" && obj !== null && typeof obj.type==="string" && typeof obj.suger==="number"
  )
}

function serverOrder(item: ChaiOrder | string){
  if(isChaiOrder(item)){
    return `Serving ${item.type} chai with ${item.suger}`
  }
  return `Serving custom Chai : ${item}`
}