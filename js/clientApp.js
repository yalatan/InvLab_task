var clientApp = angular.module('clientApp', []);
clientApp.controller('clientsBaseCtrl', function($scope, $http) {
    $scope.radiocheck = {
        type: 'Cancelled'
    };
    /*получаем данные из файла для отображения в базе*/
    $http.get('php/clientsBase.json').then(function(res) {
        $scope.clients = res.data;

    }).catch(function(err) {
        $scope.reqStatus = err.status;
        $scope.reqStatusText = err.statusText;
    });
    ///////////////////////////////

    /*добавление нового клиента*/
    $scope.opennewclientcard = function() { //открываем карточку нового клиента
        $scope.opennewclient = true;
    }


    $scope.savenewclient = function(event) { //сохраним нового клиента
        console.log("save new client");
        let ind = false;


        $scope.clients.forEach(function(item) {
            if (item.firstname == $scope.newclientfirstname && item.lastname == $scope.newclientlastname) { //проверим нет ли такого в базе
                ind = true; //если есть, то индекс true
                console.log(ind);
                $scope.alreadyiInBase = true; // показываем сообщение о том, что такой клиент существует  и не сохраняем в файл
            }
        });
        console.log(ind);
        if (!ind) { //если такого клиента в базе нет

            let newclient = {}; //создаем объект нового клиента
            newclient.id = $scope.clients.length; //*присвоим ему все значения
            newclient.firstname = $scope.newclientfirstname;
            newclient.lastname = $scope.newclientlastname;
            newclient.dateOfBirth = $scope.newclientdateOfBirth;
            newclient.adress = $scope.newclientadress;
            newclient.phone = $scope.newclientphone;
            newclient.email = $scope.newclientemail;

            let clientcar = {
                "make": $scope.newclientcarmake || "no ", // и машину присвоим
                "model": $scope.newclientcarmodel || " ",
                "year": $scope.newclientcaryear || " ",
                "vin": $scope.newclientcarvin || " "
            }
            newclient.cars = [];
            newclient.cars.push(clientcar); //добавим новую машину к клиенту
            $scope.clients.push(newclient); //добавим нового клиента в переменную
            console.log(newclient);

            console.log($scope.clients);

        }
        $scope.alreadyiInBase = false; //закрываем карточку

    }



    $scope.closenewclientcard = function() { //закрываем карточку нового клиента
        $scope.opennewclient = false;
        $("#newclientCard .discription_client_name input").each(function() {
            $(this).val(" ");
        });

    };



    //////////////////////////////////////////////////////////
    /*клиентская карточка*/

    $scope.open = false; //закрыто окно

    /*открываем клиентскую карточку при клике*/
    $scope.clientCardOpen = function(firstname, lastname) {
        for (let i = 0; i < $scope.clients.length; i++) { //выводим только кликнутого клиента
            if ($scope.clients[i].firstname == firstname && $scope.clients[i].lastname == lastname) {
                $scope.clientforcardopen = $scope.clients[i];
            }
        }
        /*  $scope.clientforcardopencar = $scope.clients[i].cars*/
        $scope.open = true; // открываем окно клиентской карточки
    };

    $scope.disabled = true; //данные  недоступны для изменений

    $scope.makechange = function() { //делаем данные машины доступными для изменения
        $scope.disabled = false;
    };
    $scope.closepage = function() {
        $scope.disabled = true; //данные  недоступны для изменений
        $scope.open = false; //закрываем окно карточки клиента
        /*$("#clientCard .list_cars .discription_client").remove(newDivbutton);
        $("#clientCard .list_cars .discription_client").remove(newDiv);*/

        /* let xmlhttp; //отправляем данные с изменениями в файл
         if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
             xmlhttp = new XMLHttpRequest();
         } else { // code for IE6, IE5
             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         }
         var myJsonString = JSON.stringify($scope.clients);
         xmlhttp.onreadystatechange = respond;
         xmlhttp.open("POST", "php/file.php", true);
         xmlhttp.send(myJsonString);*/
    };


    /* function respond() {
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {} else {}
     }*/





    /*добавление нового автомобиля*/


    $scope.addcar = function() {
        $scope.clickaddnewcar = true; //открываем карточку нового авто

    }
    $scope.closeaddcar = function() {
        $scope.clickaddnewcar = false; //открываем карточку нового авто
    }
    $scope.savenewcar = function() { //сохраним нового клиента
        /* console.log($("#clientCard .list_cars .discription_client input"));
         $("#clientCard .list_cars .discription_client input").attr("ng-disabled", "disabled");*/
        /*  console.log($scope.clientforcardopen);*/
        let i = $scope.clients.indexOf($scope.clientforcardopen);

        let newcar = {
            "make": $scope.addnewcar_newclientcarmake || "no ",
            "model": $scope.addnewcar_newclientcarmodel || " ",
            "year": $scope.addnewcar_newclientcaryear || " ",
            "vin": $scope.addnewcar_newclientcarvin || " ",
            "order": []
        }

        $scope.clients[i].cars.push(newcar);
        console.log($scope.clients);

    }

    $scope.deletecar = function(ind) {
        let i = $scope.clients.indexOf($scope.clientforcardopen);
        if (!$scope.clients[i].cars[ind].order) {
            $scope.clients[i].cars.splice(ind, 1);
        }
    };









    /*$scope.showopencarCard = false;*/
    $scope.opencarCard = function(ind) {
        $scope.showopencarCard = true;
        $scope.carforcarcard = $scope.clientforcardopen.cars[ind];
    };
    $scope.closepagecarcard = function(ind) {
        $scope.showopencarCard = false;
    };

    /*new order*/
    $scope.openneworder = function() {
        $scope.openaddOrder = true;
    };
    $scope.closenewOrder = function() {
        $scope.openaddOrder = false;
    };

    $scope.savenewOrder = function(radiocheck) {
        let i = $scope.clients.indexOf($scope.clientforcardopen);
        let r = $scope.clients[i].cars.indexOf($scope.carforcarcard);
        let orderscurrentcar = $scope.clients[i].cars[r].order;


        if (!orderscurrentcar[orderscurrentcar.length - 1]) {
            num = 0;
        } else {
            num = orderscurrentcar[orderscurrentcar.length - 1].numberOrder;
        }

        let neworder = {
            "numberOrder": +num + 1,
            "dateOrder": $scope.neworderdate || " ",
            "orderAmount": $scope.orderamount || " ",
            "orderStatus": radiocheck || " "
        }
        console.log($scope.clients[i].cars[r]);
        $scope.clients[i].cars[r].order.push(neworder);


    };
    let xmlhttp;
    $scope.closeall = function() { //сохраним нового клиента


        //отправка контента на сервер в json  
        /* console.log($scope.clients);*/

        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var myJsonString = JSON.stringify($scope.clients);
        xmlhttp.onreadystatechange = respond;
        xmlhttp.open("POST", "php/file.php", true);
        xmlhttp.send(myJsonString);



    }

    function respond() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {} else {}
    }




});