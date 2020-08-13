function addProduct() {
  document.getElementById("addProduct").insertAdjacentHTML("afterend",
    "<div class=\"row\">\n" +
    "    <div class=\"form-group col-md-4\">\n" +
    "      <label for=\"product-name\">Produto</label>\n" +
    "      <select class=\"custom-select\">\n" +
    "        <option class=\"quant\" id=\"product-name\" *ngFor=\"let products of products\" value=\"product.id\"> {{products.name + \" \" +  \"(R$ \" + products.price + \")\"}}</option>\n" +
    "      </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group col-md-4\">\n" +
    "      <label for=\"product-quantity\">Quantidade</label>\n" +
    "      <input type=\"number\" class=\"form-control quant\" id=\"product-quantity\" placeholder=\"Quantidade\" name=\"price\" min=\"0\" [(ngModel)]=\"quantity\">\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group col-md-4\">\n" +
    "      <label for=\"product-amount\">Valor total</label>\n" +
    "      <input type=\"number\" class=\"form-control\" id=\"product-amount\" placeholder=\"Valor total\" name=\"amount\" disabled>\n" +
    "    </div>\n" +
    "  </div>");
}
