let count = 1;
let newProductPrice = 0;
function addItem(target) {
  const productName = target.childNodes[13].innerText;
  const productPrice = parseFloat(target.childNodes[15].innerText);
  newProductPrice += productPrice;

  const itemsAdded = document.getElementById("items-added");
  const ul = document.createElement("ul");
  ul.innerHTML = `<li>${count++}. ${productName}</li>`;
  itemsAdded.appendChild(ul);

  const totalPrice = document.getElementById("total-price");
  totalPrice.innerHTML = `
    <hr class="my-5">
    <p>Total Price: <span class="text-[#11111180]">${newProductPrice}</span></p>
    `;

  if(newProductPrice > 0){
    document.getElementById("btn-purchase").removeAttribute("disabled")
    document.getElementById("btn-purchase").style.marginTop = "50px"
  }

  const btnApply = document.getElementById("btn-apply");
  if (newProductPrice >= 200) {
    btnApply.removeAttribute("disabled");

    const couponFeild = document.getElementById("coupon-feild");
    btnApply.addEventListener("click", function () {
      if (couponFeild.value === "SELL200") {
        const totalDiscount = document.getElementById("total-discount");
        let discountedAmount = ((newProductPrice * 20) / 100).toFixed(2);
        let afterDiscount = newProductPrice - discountedAmount
        console.log(afterDiscount)
        totalDiscount.innerHTML = `
          <p>Discount: <span class="text-[#11111180]">${discountedAmount}</span></p>
          <p>Total: <span class="text-[#11111180]">${afterDiscount}</span></p>
        `;
      } else {
        alert("Wrong Coupon Code.");
      }
    });
  } else {
    btnApply.setAttribute("disabled", true);
  }
}

document.getElementById("btn-goHome").addEventListener("click", function(){
  const itemsAdded = document.getElementById("items-added");
  const totalPrice = document.getElementById("total-price");
  const totalDiscount = document.getElementById("total-discount");
  const couponFeild = document.getElementById("coupon-feild");
  itemsAdded.innerText = ''
  totalPrice.innerText = ''
  totalDiscount.innerHTML = ''
  couponFeild.value = ''
  document.getElementById("btn-apply").setAttribute("disabled", true);
  document.getElementById("btn-purchase").setAttribute("disabled", true)
  document.getElementById("btn-purchase").style.marginTop = "0px"
  count = 1  
})