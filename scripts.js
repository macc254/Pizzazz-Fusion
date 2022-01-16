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
                        } else if (size === 'Not selected') {
                            alert("Please select your size!")
                            price = 0;
                        }