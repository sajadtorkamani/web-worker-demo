const addWorker = new Worker('/src/addWorker.js')

document.querySelector('#add-btn').addEventListener('click', () => {
  const num1 = document.querySelector('#num1').value
  const num2 = document.querySelector('#num2').value

  addWorker.postMessage({ num1, num2 })
})

addWorker.onmessage = (event) => {
  document.querySelector('#result').textContent = `The sum is ${event.data}.`
}
