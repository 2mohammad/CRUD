//$('#begin-here').add("form").attr('id', 'movie-form');
class Form{
    constructor(array, object, htmlElement, elementId){
        this.array = array,
        this.object = object;
        this.htmlElement = this.htmlElement;
        this.elementId = elementId;
    }
    formMaker(array){
        const formObject = {};
        for (let element of array){
            const valueAdd = $(document.createElement(element.type)).attr('id',element.id).text(element.label);
            valueAdd.addClass(element.class);
            Object.assign(formObject, {[element.id]: valueAdd});
        }
        return formObject;
        }
    appender(object, htmlElement, elementId){
        const appendedSubElement = Object.values(object);
        const parentElement = $(document.createElement(htmlElement)).attr('id', elementId);
        parentElement.append(appendedSubElement);
        return $('body').append(parentElement);
    }

}


const form2 = [
    {type: "label",
    label: "Movie Title",
    id: "titleLabel"},
    {type: "input",
    id: "titleInput",
    class: "colorUpdate"},
    {type: "label",
    label: "Movie Rating",
    id: "ratingLabel"},
    {type: "input",
    id: "ratingInput",
    class: "colorUpdate"},
    {type: "button",
    label: "Submit",
    id: "submit1"}
]
const gm = new Form();
const ds = gm.formMaker(form2);
gm.appender(ds, "form", "$movieForm");


const cs = new Form();

$($movieForm).submit(function(event){
    const movieRating = parseInt($("#ratingInput").val());
    const movieTitleLength = $("#titleInput").val().length;
    if (movieTitleLength <= 2 ){
        return alert("Please provide a movie title");
        
    }
    if (movieRating < 0 || movieRating > 10 || isNaN(movieRating)){ //|| typeof(parseInt($("#ratingInput").val())) === typeof(NaN)){
        return alert("Please provide a movie rating between 1-10");
        
    }
    const form3 = [
        {
        type: "tr",
        label: $("#titleInput").val(),
        id: $("#titleInput").val(),
        class: "movieInfo"
    },
    {
        type: "tr",
        label: $("#ratingInput").val(),
        id: $("#ratingInput").val(),
        class: "movieInfo"
    },
    {
        type: "button",
        label: "Remove",
        removeValue1: $("#titleInput"),
        removeValue2: $("#ratingInput"),
        id: "removeBtn",
        class: "delete"
    }
    ]
    event.preventDefault();
    $("#titleInput").val('');    
    $("#ratingInput").val('');

    const csa = cs.formMaker(form3);
    cs.appender(csa, "table", "movieList");
    console.log($("#movieList"));

    
});

$(document).on("click", '.delete', function(){
    $(this).parent().remove();
});


