// Data for the "HTML Lists" Page



var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos"];

var directory = 
[
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}

];


window.onload = function()
{

    var listContainer = document.querySelector("#Mycontainer");
    for(var i=0;i<fruits.length;i++)
    {   
        listContainer.innerHTML += "<p>" + (i + 1) +  ". " + fruits[i] + "</p>";
    }


    var listContainer2 = document.querySelector("#container");
    var contain = "<ul>";   
    for(var j = 0 ; j < directory.length; j++)
    {
        contain  += "<li>" +  directory[j].name + "</li>";
        if (directory[j].files) 
        {           
           for(var k = 0; k < directory[j].files.length; k++)
            {
                contain += "<ul>" + "<li>" + directory[j].files[k].name + "</li>" + "</ul>";
            }   
        }        
    }
    contain += "</ul>"; 
    listContainer2.innerHTML = contain;      
};
 