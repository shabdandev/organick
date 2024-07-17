import { FC } from "react";
import { useAppSelector } from "../../../redux/store";

const News: FC = () => {
  const { product } = useAppSelector((s) => s);
  console.log(product);

  return (
    <div>
      <div className="container">
        <div className="news">
          {product.map((el: Todo) => (
            <div key={el._id}>
              <img src={el.url} alt="" />
              <h3>{el.name}</h3>
              <p>{el.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
