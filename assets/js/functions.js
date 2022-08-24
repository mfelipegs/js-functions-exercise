function promptCarManufacturer() {
    
    let carsKoenigsegg = {
        one: "one",
        agera: "agera r",
        ccx: "ccx"
    };

    let carsFerrari = {
        laFerrari: "laferrari",
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
        ferrari: "ferrari"
    };

    function choice(img, icon, car) {
        const iconManufacturers = document.getElementById('iconManufacturers');
        const imgCar = document.getElementById('carSelected');
        const result = document.getElementById('result');

        iconManufacturers.src = icon; 
        imgCar.src = img;
        result.innerHTML = car.toUpperCase();
    }

    function changeCaseFirstLetter(params) {
        if(typeof params === 'string') {
                return params.charAt(0).toUpperCase() + params.slice(1);
        }
        return null;
    }
    

    function invalid() {
        const invalidResult = document.getElementById('invalid_result');
        invalidResult.innerHTML = "Invalid vehicle from " + 
        changeCaseFirstLetter(manufacturer) + ".";
    }

    let manufacturer = prompt("Choose one of the manufacturers below:\n Koenigsegg\n Pagani\n Ferrari").toLowerCase();

    if (manufacturer == manufacturers.koenigsegg) {
        let icon = "assets/img/koenigsegg/koenigsegg_logo.png";
        let car = prompt("Choose one of the Koenigsegg cars below:\n One\n Agera R\n CCX").toLowerCase(); 

        if (car == carsKoenigsegg.one) {
            img = "assets/img/koenigsegg/one_1.jpg";
            choice(img, icon, car);
        }
        else if (car == carsKoenigsegg.agera) {
            img = "assets/img/koenigsegg/agera_r.jpg";
            choice(img, icon, car);
        }
        else if (car == carsKoenigsegg.ccx) {
            img = "assets/img/koenigsegg/ccx.jpg";
            choice(img, icon, car);
        }
        else {
            invalid();
        }
    }
        
    else if (manufacturer == manufacturers.pagani) {
        let icon = "assets/img/pagani_automobili/pagani_logo.png";
        let car = prompt("Choose one of the Pagani cars below:\nZonda C12\n Zonda Cinque\n Huayra").toLowerCase(); 

        if (car == carsPagani.zondaC12) {
            img = "assets/img/pagani_automobili/zonda_c12.jpg";
            choice(img, icon, car);
        }
        else if (car == carsPagani.zondaCinque) {
            img = "assets/img/pagani_automobili/zonda_cinque.jpg";
            choice(img, icon, car);
        }
        else if (car == carsPagani.huayra) {
            img = "assets/img/pagani_automobili/huayra.jpg";
            choice(img, icon, car);
        }
        else {
            invalid();
        }
    }

    else if (manufacturer == manufacturers.ferrari) {
        let icon = "assets/img/ferrari/ferrari_logo.png";
        let car = prompt("Choose one of the Ferrari cars below:\nLaFerrari \nF12 \n458 Italia").toLowerCase(); 

        if (car == carsFerrari.laFerrari) {
            img = "assets/img/ferrari/laferrari.jpg";
            choice(img, icon, car);
        }
        else if (car == carsFerrari.f12) {
            img = "assets/img/ferrari/f12.jpg";
            choice(img, icon, car);
        }
        else if (car == carsFerrari.f458Italia) {
            img = "assets/img/ferrari/458_italia.jpg";
            choice(img, icon, car);
        }
        else {
            invalid();
        }
    }

    else {
        promptCarManufacturer();
    }
}

promptCarManufacturer();