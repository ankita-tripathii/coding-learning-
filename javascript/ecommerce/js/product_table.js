// var selectedProductIndex = -1;
 const getdata = server_data;
 console.log(selectedIndex);

    console.log(getdata);
    const table = document.getElementById("data-table");
    console.log(getdata["data"][0]["name"]);

      function clickProductRow(event){
        //console.log(event.srcElement.id);
        const index = event.srcElement.id.split("_")[1];
        console.log(index);
        //selectedIndex = index;
        selectedProductIndex = index;
        window.location.href= "./product_detail.html?item="+selectedProductIndex+"&name="+getdata["data"][selectedProductIndex]["name"];

      }

//add product list-------------------------------------------------------------------- 

      let ecommerce_product_list = getdata["data"]; // pagination number use to array splice
      for (let i = 0; i < ecommerce_product_list.length; i++) {
        let product_info = ecommerce_product_list[i];
        let cellId = "item_" + (i+1) ;
        let cellHtmlContent = `
      <tr>
      <td class="productName" id=${cellId}>${getdata["data"][i]["name"]}</td>
      <td>${getdata["data"][i]["description"]} </td>
      <td> \u20B9 ${getdata["data"][i]["price"]}</td>
      <td>
<img src=${getdata["data"][i]["image"]} alt="Girl in a jacket" width="50" height="50"> </td>
      </tr>
      `;

        table.innerHTML += cellHtmlContent
      }

// pagination-------------------------------------------------
      var pageSize = 10;
    var currentPage = 1;
    // const myArray = JSON.stringify(server_data);
    var totalPages = Math.ceil(server_data.length / pageSize);

  // Function to retrieve a specific page of data
   function getDataByPage(pageNumber){
  var startIndex = (pageNumber - 1) * pageSize;
  var endIndex = startIndex + pageSize;
  return server_data.slice(startIndex, endIndex);
 }
 
    

//click on product row-----------------------------------------------------

      let product_elements = document.getElementsByClassName("productName");
      for (var i = 0; i < product_elements.length; i++) {
        product_elements[i].addEventListener("click", clickProductRow);
      }

//search prodect name-------------------------------------------------------

      function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("data-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

  