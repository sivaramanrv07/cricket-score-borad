const addbutton=document.getElementById("addButton");
addbutton.addEventListener("click",function(){
    const name=document.getElementById("name").value;
    const balls=parseFloat(document.getElementById("balls").value);
    const runs=parseFloat(document.getElementById("runs").value);
    let strikerate=0;
    if(balls>0){
        strikerate=(runs*100)/balls;
        const tablerow=document.createElement("tr");
    tablerow.innerHTML=`
                <td>${name}</td>
                <td>${balls}</td>
                <td>${runs}</td>
                <td>${strikerate.toFixed(2)}</td>
            `;
            document.querySelector('#output tbody').appendChild(tablerow);
    }
    else {
            alert('Batsman duck out.');
        }     

});
const remove = document.getElementById("removeButton");
remove.addEventListener("click", function() {
    const tbody = document.querySelector('#output tbody');
    const lastRow = tbody.lastElementChild; 
    if (lastRow) {
        tbody.removeChild(lastRow); 
    } else {
        alert('No batsman.');
    }
});