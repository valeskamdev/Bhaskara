function calcular() {
    var valueA = Number(window.prompt("Qual é o valor de a ?"))
    var valueB = Number(window.prompt("Qual é o valor de b ?"))
    var valueC = Number(window.prompt("Qual é o valor de c ?"))
    var res = window.document.querySelector("section.result")
    var formula = Math.pow(valueB, 2) - 4 * valueA * valueC
    res.innerHTML = "<p><strong>Resolvendo Bhaskara</strong></p>"
    res.innerHTML += `<p>A equação atual é ${valueA}x<sup>2</sup> + ${valueB}x + ${valueC} = 0</p>`
    res.innerHTML += `<p>O cálculo realizado séra &Delta; = ${valueB}<sup>2</sup> - 4 . ${valueA} . ${valueC}</p>`
    res.innerHTML += `<p>O valor calculado foi <mark>Δ = ${formula}</mark></p>`
}