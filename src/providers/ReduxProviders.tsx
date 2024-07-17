import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface IReduxProvidersProps {
  children: ReactNode;
}

const ReduxProviders: FC<IReduxProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProviders;
