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


    const h1_chooseManufacturers = document.getElementById('chooseManufacturers');
    h1_chooseManufacturers.innerHTML = "Choose one of the manufacturers below:";
    const h1_chooseCars = document.getElementById('chooseCars');
    const buttonchoose = document.getElementById('btnChooseM');
    buttonchoose.addEventListener("click", chooseManufacturer);

    /* function chooseCars() {
        
    }*/

    function chooseManufacturer() {
        let cbo_manufacturer = document.getElementById("cboManufacturers");
        let manufacturer = cbo_manufacturer.options[cbo_manufacturer.selectedIndex].value;
        let cbo_car = document.getElementById("cboCars");
        let car = cbo_car.options[cbo_car.selectedIndex].value;

        function cleanChooseManufacturers() {
            h1_chooseManufacturers.outerHTML = "";
            cbo_manufacturer.outerHTML = "";
            buttonchoose.outerHTML = "";
        }
    
        function cleanChooseCars() {
            
        }

        if (manufacturer == manufacturers.koenigsegg) {
            let icon = "assets/img/koenigsegg/koenigsegg_logo.png";
            cleanChooseManufacturers();
            h1_chooseCars.innerHTML = "Choose one of the Koenigsegg cars below:";

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
        else if(manufacturer == manufacturers.pagani) {
            console.log("pagani selecionado");
        }
        else {
            console.log("nada selecionado");
        }
    }
    chooseManufacturer();
}

promptCarManufacturer();