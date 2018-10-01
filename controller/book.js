"use strict";
var bookDB = require("../model/book");

exports.getListBooks = function (req, res) {
    // res.send("books list")

    bookDB.listBooks(function (err, data) {
        if(err){
            res.json(err)
        } else{
            res.json(data)
        }
    });
    // res.json("get")
};

exports.createNewBook = function (req, res) {
    res.json("post")
};

exports.deleteMultiBooks = function (req, res) {
    res.json("delete")
};

exports.updateMultiBooks = function (req, res) {
    res.json("update")
};