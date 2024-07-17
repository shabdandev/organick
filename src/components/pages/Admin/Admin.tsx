import { FC, useState } from "react";
import "./admin.css";
import { useAppDispatch } from "../../../redux/store";
import { post } from "../../../redux/features/TodoSlice";

const Admin: FC = () => {
  const [url, setUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string | number>("");
  const dispatch = useAppDispatch();

  function postProduct() {
    let newData = {
      url,
      name,
      price,
    };
    dispatch(post(newData));
  }

  return (
    <div>
      <div className="container">
        <div className="admin">
          <h1>Create Product</h1>
          <div className="admin-page">
            <select>
              <option value="VEGE">Vegetable</option>
              <option value="FRESH">Fresh</option>
              <option value="MILL">Millets</option>
              <option value="NUTS">Nuts</option>
              <option value="HEALTH">Health</option>
            </select>
            <input
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              type="text"
              placeholder="Url"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="text"
              placeholder="Price"
            />
            <button onClick={postProduct}>Add Todo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
