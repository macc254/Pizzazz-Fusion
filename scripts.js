$(document).ready(function() {
            $(".result").hide()
            $(".purchase").click(function() {
                        var size = $("#size  option:selected").val();
                        var crust = $("#crust  option:selected").val();
                        var topping = $("#topping  option:selected").val()
                        var quantity = $(".quantity").val();
                        var location = $("#location option:selected").val()
                        var price = $("input[type='checkbox']").val();