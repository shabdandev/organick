interface Todo {
  _id?: number;
  url: string;
  name: string;
  price: string | number;
}

namespace TODO {
  type get = void;
  type post = {
    title: string;
    img: string;
  };

  type EditReq = {
    _id: number;
    newData: Todo;
  };
  type deleteN = number;
}
