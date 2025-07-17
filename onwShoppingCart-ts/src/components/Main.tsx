import { useState } from "react";
import { db } from "../data/db";
import { Items } from "./Items";
import type {item} from "../types/types.ts"


export function Main({addToCart}:{addToCart: (product: item) => void}) {
  const [data] = useState(db);

  return (
    <main className="py-5 bg-light min-vh-100">
      <div className="container">
        <h2 className="mb-5 text-center">Nuestros Productos</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
          {data.map((item) => (
            <Items 
              item={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
