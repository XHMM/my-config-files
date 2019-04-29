const x = document.querySelector('a')
const str = 'aa'
// error
x.innerHTML = `<div>${str}</div>`
// ok
x.innerHTML = `<div>22</div>`
//error
interface People {
  name: string
  age: number
}
// ok
interface IApple {
  name: string
  age: number
}
