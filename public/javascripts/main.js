/*
 Author:AmirSaber Sharifi
 Language: JavaScript
 Framework: Nodejs
 Description: Country Controller made by AngularJs to handle country search and country select events
 */
function CountryCtrl($scope, $http){
    $scope.countries = [];//List of countries that start with contains of text input
    $scope.customers = [];//List of customers for that selected country

    //Typing in input text will invoke this function which will call REST API that I made to handle request and get result
    $scope.update = function(){
        $scope.countries=[];
        $scope.customers=[];
        if ($scope.countryName == "") {
            return;
        }
        $http.get('./country/'+$scope.countryName).success(function(data){
            for(i in data){
                $scope.countries.push(data[i]);
            }
           $scope.countries.push = data;
        });
    };

    //Selecting one of countries will send name of the country here and then it will be send to REST API to get JSON object of customers for that country
    $scope.getCustomers = function(country){
        $scope.countryName = country;
        $scope.countries = [];
        $scope.customers=[];
        $http.get('./customer/'+country).success(function(data){
            if(data.length==0){
                $scope.customers.push({string:"No Customer for this country"});
            }
            for(i in data){
                $scope.customers.push({string:data[i].ID + " - " + data[i].name + " (" + data[i].email + ")"});
            }
        });
    };
}