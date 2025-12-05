let countTop=0;
        function sub(id){
            let bid = id;
            let burgerCount;
            let tableElement;
            switch(bid){
                case "b1s": 
                    burgerCount = "C1"; 
                    tableElement = "T1";
                    break;
                case "b2s": 
                    burgerCount = "C2"; 
                    tableElement = "T2";
                    break;
                case "b3s": 
                    burgerCount = "C3"; 
                    tableElement = "T3";
                    break;
            }
            let count=parseInt(document.getElementById(burgerCount).innerText);
            console.log(count);
            if(count>0){
                if(count===1){
                let table = document.getElementById(tableElement);
                    while (table.rows.length > 1) {
                        console.log(countTop);
                        table.deleteRow(1); // removes the first item row
                    }
                }
                count--;
                document.getElementById(burgerCount).innerText=count;
                document.getElementById(tableElement).rows[1].cells[2].innerText=count;
            }
            
        }
        function add(id){
            let bid = id;
            console.log(bid);
            let burgerCount;
            let tableElement;
            let burgerName;
            let burgerPrice;
            switch(bid){
                case "b1a": 
                    console.log("inside case1");
                    burgerCount = "C1"; 
                    tableElement = "T1";
                    burgerName  = document.getElementById("RegVeg").innerText;
                    console.log(burgerName);
                    burgerPrice = parseInt(document.getElementById("B1Price").innerText);
                    console.log(burgerPrice);
                    break;
                case "b2a": 
                    console.log("inside case2");
                    burgerCount = "C2"; 
                    tableElement = "T2";
                    burgerName  = document.getElementById("ChickenB").innerText;
                    console.log(burgerName);
                    burgerPrice = parseInt(document.getElementById("B2Price").innerText);
                    console.log(burgerPrice);
                    break;
                case "b3a": 
                    console.log("inside case3");
                    burgerCount = "C3"; 
                    tableElement = "T3";
                    burgerName  = document.getElementById("RajmaB").innerText;
                    console.log(burgerName);
                    burgerPrice = parseInt(document.getElementById("B3Price").innerText);
                    console.log(burgerPrice);
                    break;
            }
            let count=parseInt(document.getElementById(burgerCount).innerText);
            count++;
            document.getElementById(burgerCount).innerText=count;
            let quantity = document.createElement("td");
            let table = document.getElementById(tableElement);
            let row = document.createElement("tr");
            if(count===1){
                let item = document.createElement("td");
                let price = document.createElement("td");
                item.innerText = burgerName;
                price.innerText = burgerPrice;
                quantity.innerText = count;
                row.appendChild(item);
                row.appendChild(price);
                row.appendChild(quantity);
                table.appendChild(row);  
            }
            else if(count>=1){
                console.log("Count > 1");
                document.getElementById(tableElement).rows[1].cells[2].innerText=count;
            }
        }
function addTop(id) {
            let bid = id;
            let burgerCount;
            let tableElement;
            let toppings;
            switch(bid){
                case "top1": 
                    burgerCount = "C1"; 
                    tableElement = "T1";
                    toppings = document.getElementById("toppings1").value;
                    break;
                case "top2": 
                    burgerCount = "C2"; 
                    tableElement = "T2";
                    toppings = document.getElementById("toppings2").value;
                    break;
                case "top3": 
                    burgerCount = "C3"; 
                    tableElement = "T3";
                    toppings = document.getElementById("toppings3").value;
                    break;
            }
            let countBurger=parseInt(document.getElementById(burgerCount).innerText);
            countTop++;
            if(countBurger<1){
                window.alert("Please select at least one burger to add toppings.");
            }
            else{       
                console.log(toppings);
                let table = document.getElementById(tableElement);
                let row  = document.createElement("tr");
                let item = document.createElement("td");
                let price = document.createElement("td");
                let quantity = document.createElement("td");
                item.innerText = toppings;
                price.innerText = "7";
                quantity.innerText = 1;
                row.appendChild(item);
                row.appendChild(price);
                row.appendChild(quantity);
                table.appendChild(row);
                
            }
}
        
function order() {
    let finalData = [];

    // table IDs in your file
    let tables = ["T1", "T2", "T3"];

    tables.forEach(tableId => {
        let table = document.getElementById(tableId);

        // skip header row → start from row 1
        for (let i = 1; i < table.rows.length; i++) {
            let cols = table.rows[i].cells;

            finalData.push({
                item: cols[0].innerText,
                price: cols[1].innerText,
                quantity: cols[2].innerText
            });
        }
    });

    // store data for next page
    localStorage.setItem("orderData", JSON.stringify(finalData));

    // open order summary page
    window.open("ordersSummary.html", "_blank");
}