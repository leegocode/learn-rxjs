import { Observable } from "rxjs";
import { tap, mapTo, share } from 'rxjs/operators';



//producer
var observable = Observable.create((a:any) => {
  try{
    a.next('heyyy guys')
    a.next("how's going")
    a.next("haaa")
    setInterval(() => {
      a.next('ok')}, 2000
    )
  }catch(err) {
    a.error(err)
  }
}).pipe(share());

//流程
var observer = observable.subscribe(
  (x:any) =>  addItem(x), //ok
  (error:any) => addItem(error), //error
  () => addItem('complete!!!!!!!')
)

setTimeout(()=> {
  var observer2 = observable.subscribe(
    (x:any) =>  addItem("subscribe2:"+ x), //ok
  )
}, 1000)

function addItem(val:any){
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
