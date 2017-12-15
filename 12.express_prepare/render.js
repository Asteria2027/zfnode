
function render(str,data){
    var tpl = str.replace(/<%=([\s\S]+?)%>/g, function (match, group) {
        console.log('match',match);
        console.log('group',group);
       return "'+obj." + group + "+' "
    });
    tpl = "var tpl = '" + tpl + "'; return tpl";
    console.log(tpl);
    var compile = new Function('obj',tpl);
    return compile(data);
}

var obj = {
    username:'zzxx',
    age:6
}

var result = render("hello <%=username%><%=age%>", obj);
console.log(result);

/*
var tpl = "hello " + obj.username + " " + obj.age;
console.log(tpl);*/
