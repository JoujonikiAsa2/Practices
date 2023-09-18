let total = 0;
function handleCLikBtn(data) {
    const itemContainer = document.getElementById('item-container');
    const itemName = data.parentNode.childNodes[1].innerText;

    const li = document.createElement('li');
    li.innerText = itemName;
    itemContainer.appendChild(li);

    const itemPriceString = data.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseFloat(total) + parseFloat(itemPriceString);

    document.getElementById('total').innerText = total.toFixed(2);

    const discountPrice = data.parentNode.childNodes[5].innerText.split(" ")[1];
}

document.getElementById('input-field').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const applyButton = document.getElementById('btn-apply')
    if (text == 'hero' && total >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true)
    }
})
document.getElementById('btn-apply').addEventListener('click', function () {
    const discount = (total * 20) / 100;
    const discountAmount = document.getElementById('discount-price');
    discountAmount.innerText = discount.toFixed(2);
    document.getElementById('total-price').innerText = (total - discount).toFixed(2);
})

