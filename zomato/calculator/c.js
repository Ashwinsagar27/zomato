var display = document.getElementById("display")
var buttons = Array.from(document.querySelectorAll("button"))

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "=": display.innerText = eval(display.innerText)
                break
            case "BS": display.innerText = display.innerText.slice(0, -1)
                break
            case "C": display.innerText = ""
                break
            default: display.innerText += e.target.innerText
        }
    })
})









