function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
//    document.cookie = cname + "=" + cvalue + "; " + expires;
    document.cookie = cname + "=" + cvalue + "; path=/";
}

function getCookie(cname)
{
    if (cname != "")
    {
        cname = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++)
        {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(cname) == 0) return c.substring(cname.length, c.length);
        }
	}
	else
	{
		return document.cookie;
	}
    return "";
}
