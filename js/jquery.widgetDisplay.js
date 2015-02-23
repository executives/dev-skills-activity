var widgetDisplay = function(widgetName) {

  var newWidget = {
    'content':'',
    'style':''
  };
  
  newWidget.style = '<link href="widgets/' + widgetName + '.css" rel="stylesheet">';

  var loadNewWidget = function() {
    console.log('loading body');
    $("body").append(newWidget.content);
    console.log('appending new style');
    $("head").append(newWidget.style);
  }  
  
  $.get("widgets/" + widgetName + ".html", function(data) {
    console.log("Data found");
    console.log(data);
    newWidget.content = data;
    loadNewWidget();
    $(".widgetClose").click(function(){
      $("#newWidget").remove();
    })
  });
  
  

  //setTimeout(loadNewWidget(), 1000);
  

};