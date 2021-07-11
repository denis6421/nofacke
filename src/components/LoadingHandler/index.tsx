interface IProps {
  children: JSX.Element;
  CustomLoader?: any;
  isLoading: boolean;
}

const DefaultLoader = () => {
  return <div>loading....</div>;
};
const LoadingHandler = ({
  children,
  isLoading,
  CustomLoader = DefaultLoader,
}: IProps) => {
  return isLoading ? CustomLoader : children;
};

export default LoadingHandler;
