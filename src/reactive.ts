let iamCallee : any;

export function createSignal(val : any) {

    const subscription = new Set<any>()
    const read = () => {
        subscription.add(iamCallee as any)
        return val ;
    }
    const write = (newval : any) => { 
        val = newval 
        subscription.forEach((v1,v2) => v1())
    }
    return {read, write}
    // return [read, write] ;
}


export function createEffect(fn : () => any) {
    iamCallee = fn
    fn()    
}