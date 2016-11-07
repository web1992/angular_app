/**
 * Created by web1992 on 2016/11/4.
 */

$(function () {

    console.log('init');
    $('#demoBtn').click(function () {
        alert(5);
    });
});

var app = angular.module('myApp', []);


app.run(function () {
        console.log('angular app run');
    }).config(function () {
    console.log('angular  config');
});
