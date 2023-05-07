import {createSignal, createEffect} from './reactive'

// const [val, setVal] = createSignal(1)
const {read, write} = createSignal(1)

createEffect(() => {
    console.log(read());
}) 

// console.log(read());

write(5)

// console.log(read());

