import { Observable } from "rxjs"

// const observable = new Observable((subscriber) => {
//     subscriber.next("Hello World")
//     subscriber.error("Error")
//     subscriber.next("test")
//     subscriber.complete()
//     subscriber.next("text 2")
// })

const observable = new Observable((subscriber) => {
    // subscriber.next("test")
    const id = setInterval( () => {
        subscriber.next("test")
        console.log("memory leak")
    }, 1000)

    subscriber.complete()

    return () => {
        clearInterval(id)
    }

})

console.log("Before")

observable.subscribe({
    next : (value) => {
        console.log(value)
    },
    complete : () => {
        console.log("completed!")
    },
    error : (err) => {
        console.error(err)
    }
})

console.log("After")