
(function (window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log(`Adding order for ${order.emailAddress}`);
        this.db.add(order.emailAddress, order);     //key: emailAddress, value- order
    }

    //when order is delivered, truck instance should remove the order from the db.
    Truck.prototype.deliverOrder = function (customerId){
        console.log(`Delivering order for ${customerId}`);
        this.db.remove(customerId);
    }

    Truck.prototype.printOrders = function () {
        var customerArray = Object.keys(this.db.getAll());
        console.log(`Truck #${this.truckId} has pending orders: `);
        customerArray.forEach(function (id) {
            console.log(this.db.get(id));
        }, this);
    }
    App.Truck = Truck;
    window.App = App;
})(window);

/*
var myTruck = new App.Truck('007', new App.DataStore());
myTruck.createOrder({emailAddress:'drwho@gmail.com', coffee: 'early-gray'})
myTruck.createOrder({emailAddress:'missblue@gmail.com', coffee: 'kappa-gray'})
myTruck.createOrder({emailAddress:'orangeSoda@gmail.com', coffee: 'borange-gray'})

myTruck.deliverOrder('drwho@gmail.com');
myTruck.deliverOrder('orangeSoda@gmail.com')
*/