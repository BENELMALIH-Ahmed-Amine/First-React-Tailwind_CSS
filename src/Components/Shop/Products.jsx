import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
    render() {
        return(
            <main className="flex justify-around items-center px-[150px] py-[50px] mt-[70px]">
                <div className=" p-[15px] flex justify-around items-center flex-wrap gap-3">
                    <Product />
                </div>
            </main>
        )
    }
}

export default (Products);
