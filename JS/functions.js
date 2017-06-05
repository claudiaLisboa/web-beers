function calculateCart()
{
	var total = 0;

    for (var i = 0; i < gArrProduct.length; i++)
    {
    	total = total + (gArrQuantity[i] * gArrPrice[i]);
    }

    return total;
}
//-------------------------------------------------------------//
function addToCart(product, quantity)
{
    for (var i = 0; i < gArrProduct.length; i++)
    {
    	if (gArrProduct[i] == product)
    	{
    		gArrQuantity[i] = gArrQuantity[i] + quantity;
    		
    		setCookie(gArrProduct[i], gArrQuantity[i]);

    		break;
    	}
    }
}
//-------------------------------------------------------------//
function loadCartInfo()
{
    var cookies = getCookie();

    var arrCookies = document.cookie.split(';');
    for(var i = 0; i < arrCookies.length; i++)
    {
        var sProduct = regexpTrim(arrCookies[i].split('=')[0]);
        var sQuantity = parseFloat(regexpTrim(arrCookies[i].split('=')[1]));

        addToCart(sProduct, sQuantity);
    }
}
//-------------------------------------------------------------//
function isCartEmpty()
{
	var total = calculateCart();

	if (total == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//-------------------------------------------------------------//
function calculateTotal(amount)
{
	var v_total = 0;

	v_total = amount + calculateTaxes(amount);

	return v_total;
}
//-------------------------------------------------------------//
function calculateTaxes(amount)
{
	var v_taxes = 0;

	v_taxes = calculateQST(amount) + calculateGST(amount);

	return v_taxes;
}
//-------------------------------------------------------------//
function calculateGST(amount)
{
	var v_GST = 0.05;

	var v_taxes_GST = amount * v_GST;

	return v_taxes_GST;
}
//-------------------------------------------------------------//
function calculateQST(amount)
{
	var v_QST = 0.09975;

	var v_taxes_QST = amount * v_QST;

	return v_taxes_QST;
}
