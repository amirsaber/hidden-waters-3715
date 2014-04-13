/**
 * Created by amirsaber on 4/12/14.
 */
function CountryCtrl($scope, $http){
    $scope.countries = [];
    $scope.customers = [];

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