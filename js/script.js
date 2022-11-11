function test() {
    alert("Le formulaire a été soumis avec succès!");
}

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    test();
});