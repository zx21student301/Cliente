function new_div() {
  $(document).ready(function() {
    let test = {
      id: "div",
      class: "divclass",
      css: {
        "color": "Green"
      }
    };
    let divisor = $("<div>", test); //con el objeto creado antes, se utiliza este constructor para añadirle class, id, style, etc al elemento que se crea
    divisor.html("New Division");
    $("body").append(divisor);
  });
}