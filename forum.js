var posts = [
    {title: "How to use the Pomodoro Timer", author: "coolkid123", text: "Pomodoro timers help you study..."},
    {title: "How I take notes", author: "smartkid56", text: "I divide the page into three sections..."},
    {title: "Three tips to stop procrasinating", author: "thatonekid42", text: "I used to procrasinate a lot until..."},
];

/**
  * @function - searches the table for the value given in the search bar
  * 
  * @returns {number} the values in the chart with the searched value
  */
function searchBar() {
    var key = document.getElementById("key").value.toUpperCase();
    var keyReg = new RegExp(key,'i');
    var dom_table = document.querySelector("#result");
    clearSearch();
    dom_table.innerHTML = "";
    var table = document.createElement("table");
    var header = null, th = null, tr = null, td = null, txt = null;
    var headers = ["Title", "Author", "Post"];
    tr = document.createElement("tr");

    for (let h = 0; h < headers.length; h++) {
        th = document.createElement("th");
        th.style.border = "2px solid";
        header = document.createTextNode(headers[h]);
        th.appendChild(header);
        tr.appendChild(th);
    }
    table.appendChild(tr);

    for (let i = 0; i < posts.length; i++)  {
        tr = document.createElement("tr");
        for (let j in posts[i]) {
            if (posts[i].title.match(keyReg) || posts[i].author.match(keyReg)) {
                td = document.createElement("td");
                txt = document.createTextNode(posts[i][j]);
                td.appendChild(txt);
                td.style.border = "2px solid";
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
    }

    table.style.borderCollapse = "collapse";
    dom_table.appendChild(table);
}

/**
  * @function - clears the search result 
  * 
  * @returns {} the cleared table 
  */
function clearSearch() {
    var dom_table = document.querySelector("#result");
    dom_table.innerHTML = "";
}