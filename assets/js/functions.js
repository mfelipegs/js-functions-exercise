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

    function printCar(imgCar) {
        let carPicture = document.createElement('img');
        let br = document.createElement('br');
        document.body.append(br);
        carPicture.src = imgCar;
        console.log(carPicture);
        document.body.append(carPicture);
        console.log(imgCar);
        //tester.innerHTML = img + "<br>";
    }

    function verifyManufacturer(icon, car) {
        let iconImgManufacturer = document.createElement('img');
        iconImgManufacturer.src = icon;
        console.log(iconImgManufacturer);
        document.body.append(iconImgManufacturer);
        console.log(icon);

        const result = document.getElementById('result');
        result.innerHTML = car.toUpperCase().split("_").join(" ");
        
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

        //Koenigsegg cars
        for (const k of Object.keys(carsKoenigsegg)) {
            if(car == carsKoenigsegg[k]) {
                cleanChoose();
                let icon = "assets/img/koenigsegg/koenigsegg_logo.png";
                verifyManufacturer(icon, car);
                
                for(var i = 1; i <= n; i++) {
                    if(car == carsKoenigsegg.agera) {
                        let imgCar = "assets/img/koenigsegg/agera_r.jpg";
                        printCar(imgCar);
                    }

                    if(car == carsKoenigsegg.one) {
                        let imgCar = "assets/img/koenigsegg/one_1.jpg";
                        printCar(imgCar);
                    }

                    if(car == carsKoenigsegg.ccx) {
                        let imgCar = "assets/img/koenigsegg/ccx.jpg";
                        printCar(imgCar);
                    }
                }
            }
        }

        //Ferrari cars
        for (const k of Object.keys(carsFerrari)) {
            if(car == carsFerrari[k]) {
                cleanChoose();
                let icon = "assets/img/ferrari/ferrari_logo.png";
                verifyManufacturer(icon, car);

                for(var i = 1; i <= n; i++) {
                    if(car == carsFerrari.f12) {
                        let imgCar = "assets/img/ferrari/f12.jpg";
                        printCar(imgCar);
                    }

                    if(car == carsFerrari.laFerrari) {
                        let imgCar = "assets/img/ferrari/laferrari.jpg";
                        printCar(imgCar);
                    }

                    if(car == carsFerrari.f458Italia) {
                        let imgCar = "assets/img/ferrari/458_italia.jpg";
                        printCar(imgCar);
                    }
                }
            }
        }

        //Pagani cars
        for (const k of Object.keys(carsPagani)) {
            if(car == carsPagani[k]) {
                cleanChoose();
                let icon = "assets/img/pagani_automobili/pagani_logo.png";
                verifyManufacturer(icon, car);

                for(var i = 1; i <= n; i++) {
                    if(car == carsPagani.huayra) {
                        let imgCar = "assets/img/pagani_automobili/huayra.jpg";
                        printCar(imgCar);
                    }

                    if(car == carsPagani.zondaC12) {
                        let imgCar = "assets/img/pagani_automobili/zonda_c12.jpg";
                        printCar(imgCar);
                    }

                    if(car == carsPagani.zondaCinque) {
                        let imgCar = "assets/img/pagani_automobili/zonda_cinque.jpg";
                        printCar(imgCar);
                    }
                }
            }
        }

        /*for(var i = 1; i <= n; i++) {
            if (car == carsKoenigsegg.agera) {
                cleanChoose();
                //let icon = "assets/img/koenigsegg/koenigsegg_logo.png";
                let img = "<img src='assets/img/koenigsegg/agera_r.jpg'>";
                printCar(img);
                //document.write("<img src='assets/img/koenigsegg/agera_r.jpg'>" + "<br>");
                //console.log(typeof n);
                
            }

            else if (car == carsKoenigsegg.ccx) {
                cleanChoose();
                let icon = "assets/img/koenigsegg/koenigsegg_logo.png";
                choice(car, icon);
                //document.write("<img src='assets/img/koenigsegg/agera_r.jpg'>" + "<br>");
            }
        }*/
        
    }
    chooseCar();
}
mainCar();