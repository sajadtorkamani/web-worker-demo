onmessage = (event) => {
  const sum = +event.data.num1 + +event.data.num2

  postMessage(sum)
}
