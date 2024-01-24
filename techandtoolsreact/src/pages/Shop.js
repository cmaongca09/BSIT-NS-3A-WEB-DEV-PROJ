import { React } from "react";
import SampleProducts from "../Data/SampleProducts.json";
export const Shop = () => {
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  // const openModal = (product) => {
  //   setSelectedProduct(product);
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <section>
      <h1>Shop page</h1>

      {SampleProducts.map((product, index) => (
        <button onClick={console.log(product.name)}>
          <div key={index}>
            <p>{product.id}</p>

            <img
              src={require(`../imgassets/${product.imageurl}`)}
              alt={product.name}
            />

            <p>{product.name}</p>
          </div>
        </button>
      ))}
    </section>
  );
};
