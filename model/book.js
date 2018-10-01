"use strict"

var books = [
    {
        ID: 1167030458,
        Title: "Node.js for PHP Developers",
        SubTitle: "Porting PHP to Node.js",
        Description: "If you're an experienced PHP developer, you already have a head start on learning how to write Node.js code. In this book, author Daniel Howard demonstrates the remarkable similarities between the two languages, and shows you how to port your entire ...",
        Image: "http://s.it-ebooks-api.info/3/node.js_for_php_developers.jpg",
        isbn: "9781449333607"
    },
    {
        ID: 3717703148,
        Title: "Node.js Design Patterns",
        SubTitle: "Get the best out of Node.js by mastering a series of patterns and techniques to create modular, scalable, and efficient applications",
        Description: "Node.js is a massively popular software platform that lets you use JavaScript to easily create scalable server-side applications. It allows you to create efficient code, enabling a more sustainable way of writing software made of only one language ac ...",
        Image: "http://s.it-ebooks-api.info/14/node.js_design_patterns.jpg",
        isbn: "9781783287314"
    },
    {
        ID: 3289186304,
        Title: "Node.js By Example",
        SubTitle: "Learn to use Node.js by creating a fully functional social network",
        Description: "Node.js is a JavaScript - driven technology, which means that developers can use the same language to write backend code. Its growing community and the large amount of available modules make Node.js one of the most attractive development environments ...",
        Image: "http://s.it-ebooks-api.info/14/node.js_by_example.jpg",
        isbn: "9781784395711"
    },
    {
        ID: 199244225,
        Title: "Node.js in Action",
        Description: "JavaScript on the server? You bet. Node.js is a JavaScript server capable of supporting scalable, high-performance web applications. Using asynchronous I/O, the server can do more than one thing at a time, a key requirement for real-time apps like ch ...",
        Image: "http://s.it-ebooks-api.info/5/node.js_in_action.jpg",
        isbn: "9781617290572"
    },
    {
        ID: 605782292,
        Title: "Node Cookbook",
        SubTitle: "Over 50 recipes to master the art of asynchronous server-side JavaScript using Node",
        Description: "A hands on approach to learning Node to equip and guide you in the art of asynchronous server side JavaScript.nnPacked with practical recipes taking you from the basics to extending Node with your own modules. Create your own web server to see Node ...",
        Image: "http://s.it-ebooks-api.info/14/node_cookbook.jpg",
        isbn: "9781849517188"
    },
    {
        ID: 2390923335,
        Title: "Using Node.js for UI Testing",
        SubTitle: "Learn how to easily automate testing of your web apps using Node.js, Zombie.js, and Mocha",
        Description: "Automating tests for your user interfaces has always been the holy grail of programming. Now, using Zombie.js and Mocha you can create and quickly run your tests, allowing you to test even small changes. Increase your confidence in the code and minim ...",
        Image: "http://s.it-ebooks-api.info/14/using_node.js_for_ui_testing.jpg",
        isbn: "9781782160526"
    },
    {
        ID: 3389563314,
        Title: "Node.js Recipes",
        SubTitle: "A Problem-Solution Approach",
        Description: "Node.js Recipes is your one-stop reference for solving Node.js problems. Filled with useful recipes that follow a problem/solution format, you can look up recipes for many situations that you may come across in your day-to-day server-side development ...",
        Image: "http://s.it-ebooks-api.info/6/node.js_recipes.jpg",
        isbn: "9781430260585"
    },
    {
        ID: 164760705,
        Title: "RESTful Web API Design with Node.js",
        SubTitle: "Design and implement comprehensive RESTful solutions in Node.js",
        Description: "In this era of cloud computing, every data provisioning solution is built in a scalable and fail-safe way. Thus, when building RESTful services, the right choice of the underlying platform is vital. Node.js, with its asynchronous, event-driven archit ...",
        Image: "http://s.it-ebooks-api.info/14/restful_web_api_design_with_node.js.jpg",
        isbn: "9781783985869"
    },
    {
        ID: 2890884706,
        Title: "Node.js in Practice",
        Description: "You've decided to use Node.js for your next project and you need the skills to implement Node in production. It would be great to have Node experts Alex Young and Marc Harter at your side to help you tackle those day-to-day challenges. With this book ...",
        Image: "http://s.it-ebooks-api.info/5/node.js_in_practice.jpg",
        isbn: "9781617290930"
    },
    {
        ID: 3177615156,
        Title: "Learning Node.js for Mobile Application Development",
        SubTitle: "Make use of Node.js to learn the development of a simple yet scalable cross-platform mobile application",
        Description: "This book takes a step-wise and incremental approach toward developing cross-platform mobile technologies using existing web technologies. This will allow you to truly understand and become proficient in developing cross-platform mobile applications ...",
        Image: "http://s.it-ebooks-api.info/14/learning_node.js_for_mobile_application_development.jpg",
        isbn: "9781785280498"
    }
];

// Tim sach
function findIndex(id){
    return books.map(function (book) {
        return book.ID
    }).indexOf(id)
}

// Tao 1 cuon sach
exports.createBook = function (data,cb) {
    var bookIndex = findIndex(data.id)
    if(bookIndex >-1){
        cb("Book existed")
    } else {
        books.push(data);
        cb(null,books)
    }
};

// Liet ke sach
exports.listBooks = function (cb) {
    cb(null,books)
};

// Cap nhat nhieu cuon sach
exports.updateMultiBooks = function () {

};

// Xoa nhieu cuon sach
exports.deleteMultiBooks = function (id,cb) {

};

// Lay 1 cuon sach
exports.getBook = function (id,cb) {
    var bookIndex = findIndex(ID)
    if(bookIndex > -1){
        cb(null, books[bookIndex])
    } else {
        cb("Book not exist")
    }
};

// Cap nhat 1 cuon sach
exports.updateBook = function (data,cb){
    var bookIndex = findIndex(data.id);
    if(bookIndex > -1){
        books[bookIndex] = data;
        cb(null, books[bookIndex]);
    } else {
        cb("Book not exist");
    }
};

// Xoa 1 cuon sach
exports.deleteBook = function (id,cb) {
    var bookIndex = findIndex(id);
    if(bookIndex > -1){
        books.splice(bookIndex,1);
        cb(null,books[bookIndex])
    } else {
        cb("Book not exist")
    }
};
