let count = 0;
console.log(count);

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else if (styles.contains("reset")) {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "#657a00";
        }
        else if (count < 0) {
            value.style.color = "#ff0028"
        }
        else {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})