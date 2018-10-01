"use restrict";

var express = require("express");
var router = express.Router();
var bookController = require("../controller/book");

// router.get("/books",bookController.getListBooks);
// router.post("/books",bookController.createNewBook);
// router.delete("/books",bookController.deleteMultiBooks);
// router.put("/books",bookController.updateMultiBooks);

router.route("/books")
    .get(bookController.getListBooks)
    .post(bookController.createNewBook)
    .delete(bookController.deleteMultiBooks)
    .put(bookController.updateMultiBooks)

module.exports = router;