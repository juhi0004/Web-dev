import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrices=["123444","982922","987763","99999"];
    let newPrices=["8,9999","45555","765444","7432"];
    let description=[["8,000 DPI","Programmable buttons"],["intuitive surface","portable"],["designed for ipad","best in use"],["stylish","new"]];
    return(
        <div className="Product">
            <h4>{title}</h4>
            
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;