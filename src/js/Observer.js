/*----------------------------------------*\
  #Observer
\*----------------------------------------*/
export default class Observer {
    constructor(){
        this.observers = new Set();
    }

    subscribe(observer){
        if(typeof(observer.update) === "function"){
            this.observers.add(observer);

        }else{
          throw new Error(" oberver.update is not defined");  
        }
    }

    unsubscribe(observer){
        this.observers.delete(observer);
    }

    notify(state){
        this.observers.forEach( observer => observer.update(state))
    }



}

