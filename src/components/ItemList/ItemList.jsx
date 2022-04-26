import Item from "../Item/Item";

const ItemList = ({ products }) => {
  console.log("products en ItemLIst", products);
  return (
    <>
      {products.map((product) => {
        console.log(product);
        return (
          <Item key={product.id} title={product.title} image={product.image} detail={product.detail} price={product.price} />
        );
      })}
    </>
  );
};
export default ItemList;