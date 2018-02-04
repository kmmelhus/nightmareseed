var Nightmare = require('nightmare');

var google = new Nightmare({ show: true })
    .viewport(1500, 1000)
    .goto('https://www.jula.no/catalog/klar-og-verneutstyr/sko/fritidssko/')
    .wait()

    .wait()
    .wait(1000)
    .click(".nav-price")
    .wait(1000)
    .select("#pageSizeDd", "100")
    .evaluate(function () {
        console.log("Funksjon 1");
        const products = document.getElementsByClassName("b-product-card__content");
        const produkt = products.item(0);


        return {

            produkter: produkt
        };
    })
    .end()
    .then(result => {
        console.log("Resultat " + JSON.stringify(result))
    })
    .catch(error => console.error(error))

