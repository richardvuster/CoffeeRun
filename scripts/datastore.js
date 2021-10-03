(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
        console.log(`running the datasstore function`);
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    }

    DataStore.prototype.get = function (key) {
        return this.data[key];
    }

    DataStore.prototype.getAll = function() {
        return this.data;
    }

    DataStore.prototype.remove = function (key) {

        delete this.data[key];      //removes key/value pair from an object 
    }

    App.DataStore = DataStore;
    window.App = App;
}) (window);

/*
var dsOne = new App.Datastore();
dsOne.add('email', 'yyam@gmail.com')
dsOne.add('coffee', 'triple chocolate chip')
ds.getAll();
ds.remove('email')
ds.getAll();
*/