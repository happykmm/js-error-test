(function() {


    function loadXMLDoc(url)
    {
        var xmlhttp=null;
        if (window.XMLHttpRequest)
        {// code for all new browsers
            xmlhttp=new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        {// code for IE5 and IE6
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlhttp!=null)
        {
            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4)
                {// 4 = "loaded"
                    if (xmlhttp.status==200)
                    {// 200 = OK
                        console.log(xmlhttp.responseXML);
                    }
                    else
                    {
                        console.error("XMLHttpRequest failed: " + xmlhttp.status);
                    }
                }
            };
            xmlhttp.open("GET",url,true);
            xmlhttp.send(null);
        }
        else
        {
            console.error("Your browser does not support XMLHTTP.");
        }
    }



    loadXMLDoc('/api/401');
    loadXMLDoc('/api/404');

})();