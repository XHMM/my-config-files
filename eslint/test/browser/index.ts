const x = document.querySelector("a");
const str = "aa";

// error
x.innerHTML = `<div>${str}</div>`;
// ok
x.innerHTML = `<div>22</div>`;

//error
interface People {
  name: string;
  age: number;
}
// warn
interface IApple {
  name: string;
  age: number;
}

const y = 1;
function xxx(x: number, y: number): number {
  const a = 1;
  return x;
}
