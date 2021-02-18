// We can also make our own helpers.
// The idea behind it is that we create a file like this one.  You create a function.  You pass in any options.  In this case, the options being passed in are whatever is inside of the opening and closing bold custom helper tags.  It does not matter if it's HTML tags or regular text.  Whatever is inside of those tags will be passed down through the function.  And now you have access to whatever was inside those tags by doing options.fn(this).

module.exports = function(options) {
    // var bolder = "<strong>" + options.fn(this) + "</strong>";
    // This is the ES6 way.  Joe prefers the ES6 way.
    var bolder = `<strong> ${options.fn(this)} </strong>`;
    
    return bolder;
}