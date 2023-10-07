{/* <div>
        <div>
            <h2></h2>
            <h2></h2>
        </div>
        <div>
        </div>
    </div> 
*/}





const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [React.createElement("h2", {}, "im tag h2"),
    React.createElement("h3", {}, "im tag h3")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h2", {}, "im tag h2"),
    React.createElement("h3", {}, "im tag h3")])
]);





console.log(parent);///it will not return the html , will return react object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);