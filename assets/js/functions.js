function mainCar() {
    
    let carsKoenigsegg = {
        one: "one",
        agera: "agera_r",
        ccx: "ccx"
    };

    let carsFerrari = {
        laFerrari: "laferrari",
        f12: "f12",
        f458Italia: "f458_italia"
    };

    let carsPagani = {
        huayra: "huayra",
        zondaC12: "zonda_c12",
        zondaCinque: "zonda_cinque"
    };      

    let manufacturers = { 
        koenigsegg: "koenigsegg",
        pagani: "pagani",
        ferrari: "ferrari"
    };

    function choice(img, icon) {
        //const icon_manufacturer = document.getElementById('iconManufacturers');
        //const result = document.getElementById('result');

        //console.log(icon_manufacturer);
        //icon_manufacturer.src = icon; 

        //result.innerHTML = car.toUpperCase();
        //var iconImgManufacturer = `<img src='${icon}'/>`;
        let iconImgManufacturer = document.createElement('img');
        iconImgManufacturer.src = icon;
        console.log(iconImgManufacturer);
        document.body.append(iconImgManufacturer);
        console.log(icon);

        write_img = document.write(img + "<br>");

        
    }

    const h1_chooseCars = document.getElementById('chooseCars');
    h1_chooseCars.innerHTML = "Choose one of the manufacturers below:";
    const h1_chooseN = document.getElementById('chooseN');
    h1_chooseN.innerHTML = "How many times do you want it to appear?";
    const buttonchoose = document.getElementById('btnChoose');
    buttonchoose.addEventListener("click", chooseCar);
    

    function chooseCar() {
        let cbo_car = document.getElementById("cboCars");
        let car = cbo_car.options[cbo_car.selectedIndex].value;
        let textbox_n = document.getElementById("ntimes");
        let n = parseInt(document.getElementById("ntimes").value);

        function cleanChoose() {
            h1_chooseCars.remove();
            h1_chooseN.remove();
            cbo_car.remove();
            textbox_n.remove();
            buttonchoose.remove();
        }
        
        for(var i = 1; i <= n; i++) {
            if (car == carsKoenigsegg.agera) {
                cleanChoose();
                let icon = "assets/img/koenigsegg/koenigsegg_logo.png";
                let img = "<img src='assets/img/koenigsegg/agera_r.jpg'>";
                choice(img, icon);
                //document.write("<img src='assets/img/koenigsegg/agera_r.jpg'>" + "<br>");
                console.log(typeof n);
                
            }

            else if (car == carsKoenigsegg.ccx) {
                cleanChoose();
                let icon = "assets/img/koenigsegg/koenigsegg_logo.png";
                choice(car, icon);
                //document.write("<img src='assets/img/koenigsegg/agera_r.jpg'>" + "<br>");
            }
        }
        
    }
    chooseCar();
}
mainCar();