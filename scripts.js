$(document).ready(function() {
    $(".result").hide()
    $(".purchase").click(function() {
        var size = $("#size  option:selected").val();
        var crust = $("#crust  option:selected").val();
        var topping = $("#topping  option:selected").val()
        var quantity = $(".quantity").val();
        var location = $("#location option:selected").val()
        var price = $("input[type='checkbox']").val();

        function quantityChanged() {

            if (isNaN(quantity) || quantity <= 0) {
                quantity = 1
            }
        }

        quantityChanged();
        var crustPrice;
        if (topping === 'mushroom') {
            crustPrice = 100
        } else if (topping === 'beef') {
            crustPrice = 150
        } else if (topping === 'chicken') {

            crustPrice = 200;
        }

        var price;
        if (size === 'Large') {
            price = 1000
        } else if (size === 'Medium') {
            price = 900
        } else if (size === 'Small') {
            price = 850
        } else if (size === 'You') {
            alert("Please select your size!")
            price = 0;
        }

        var totalCost = quantity * (price + crustPrice);
        var overalCost = parseInt(totalCost)

        $(".cart").append(
            `
                            <tr>
                                <td>${size}</td>
                                <td>${topping}</td>
                                <td>${crust}</td>
                                <td>${location}</td>
                                <td>${quantity}</td>
                                <td>${overalCost}</td>
                                <td><button class="btn remove">remove</button></td>
                            </tr>
                            `
        )

        var value;
        var theTotal = 0;

        $(".checkout").click(function() {
            $("td:nth-child(6)").each(function() {
                value = $(this).html();

                theTotal += parseInt(value);
                $(".result").text(' Thank you for shopping with us. ' + ' Your payable order is: ' + theTotal + `.`).show();
            });

        })
    })
    var deletebtn = $(".remove");
    deletebtn.addClass('Remove')
    deletebtn.click(function(e) {
        const btn = e.target;
        btn.closest('tr').remove();
    })

})