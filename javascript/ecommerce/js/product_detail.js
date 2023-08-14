function GetURLParameter(sParam)
{
    let sPageURL = window.location.search.substring(1);
    let sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++) 
    {
        let sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

///C:/Users/hp/Desktop/coding-learning/javascript/ecommerce/product_detail.html?item=2&name=Mirror

    let itemIndex = GetURLParameter("item");
    console.log(itemIndex);
     console.log(server_data["data"][itemIndex]["name"]);

     


    

//when user click on readmore button...

function ReadmoreFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

 
