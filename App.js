{/*
<div>
<div class="parent">
    <div class="child">
        <h1>Hi i am H1</h1>
        <h2>Hi i am H2</h2>
    </div>
</div>
</div> 
*/}

const element  = React.createElement("div",{},[React.createElement("div",{class:"parent"},
React.createElement("div",{class:"child"},
[React.createElement("h1",{} ,"Hi i am H1"),React.createElement("h2",{} ,"Hi i am H2")]) ),
React.createElement("div",{class:"parent"},
React.createElement("div",{class:"child"},
[React.createElement("h1",{} ,"Hi i am H1"),React.createElement("h2",{} ,"Hi i am H2")]) )])
console.log(element)
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(element)
