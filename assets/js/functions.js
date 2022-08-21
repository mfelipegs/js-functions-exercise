function promptCarManufacturer() {
    
    let carsKoenigsegg = {
        one: "one",
        agera: "agera r",
        ccx: "ccx",
    };

    let carsFerrari = {
        laferrari: "laferrari",
        f12: "f12",
        f458Italia: "458 italia"
    };

    let carsPagani = {
        huayra: "huayra",
        zondaC12: "zonda c12",
        zondaCinque: "zonda cinque"
    };

    let manufacturers = { 
        koenigsegg: "koenigsegg",
        pagani: "pagani",
        bugatti: "bugatti"
    };

    function choice(img, icon, manufacturer, car) {
        return document.write(img +
        icon + "<p>" + manufacturer.toUpperCase() + " " + car.toUpperCase() + "</p>");
    }

    let manufacturer = prompt("Choose one of the manufacturers below.").toLowerCase();

    if (manufacturer == manufacturers.koenigsegg) {
        let icon = "<div class='logo'><img class='icon' src='assets/img/koenigsegg/koenigsegg_logo.png'></div>";
        let car = prompt("Choose one of the Koenigsegg cars below.").toLowerCase(); 

        if (car == carsKoenigsegg.one) {
            choice("<img src='assets/img/koenigsegg/one_1.jpg'>", icon, manufacturer, car);
        }
        else if (car == carsKoenigsegg.agera) {
            choice("<img src='assets/img/koenigsegg/agera_r.jpg'>", icon, manufacturer, car);
        }
        else if (car == carsKoenigsegg.ccx) {
            choice("<img src='assets/img/koenigsegg/ccx.jpg'>", icon, manufacturer, car);
        }
        else {
            document.write("<p> Invalid vehicle from Koenigsegg. </p>");
        }
    }
        
    else if (manufacturer == manufacturers.pagani) {
        let icon = "<div class='logo'><img class='icon' src='assets/img/pagani_automobili/pagani_logo.png'></div>";
        let car = prompt("Choose one of the Pagani cars below.").toLowerCase(); 

        if (car == carsPagani.zondaC12) {
            choice("<img src='assets/img/pagani_automobili/zonda_c12.jpg'>", icon, manufacturer, car);
        }
        else if (car == carsPagani.zondaCinque) {
            choice("<img src='assets/img/pagani_automobili/zonda_cinque.jpg'>", icon, manufacturer, car);
        }
        else if (car == carsPagani.huayra) {
            choice("<img src='assets/img/pagani_automobili/huayra.jpg'>", icon, manufacturer, car);
        }
        else {
            document.write("<p> Invalid vehicle from Pagani. </p>");
        }
    }

    else if (manufacturer == manufacturers.ferrari) {

    }

    else {
        promptCarManufacturer();
    }
}

promptCarManufacturer();