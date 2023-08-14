const table = document.getElementById("data-table");

for (var i = 0; i < 7; i++) {
     let rowHtmlContent = `<tr>`;

      for (var j =0; j < 3; j++){
        let indexKey = "key"+(i*3+j+1);
        let cell = server_data[indexKey];
        let cellHtmlContent = `<td>Row ${i}, Cell ${cell}</td>`;
        rowHtmlContent += cellHtmlContent;
      }

      rowHtmlContent += `</tr>`;

      // some code
      table.innerHTML += rowHtmlContent;
}

