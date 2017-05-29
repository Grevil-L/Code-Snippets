/**
 * Created by grevi on 5/29/2017.
 */
function input() {
    var name = document.getElementById("name").value;
    var results = document.getElementById("results");
    var First = name.substring(0, name.indexOf(" "));
    var Last = name.substring(name.lastIndexOf(" ")+1, name.length);
    console.log(First);
    results.innerHTML = "FirstName is <b>" + First + "</b>";
    results.innerHTML += "<br> LastName is <b>" + Last + "</b>";
}
