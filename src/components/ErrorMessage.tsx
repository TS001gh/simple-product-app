interface IProps {
  msg: string;
}

const ErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-red-700 font-semibold text-sm animate-fadeIn">
      {msg}
    </span>
  ) : null;
};

export default ErrorMessage;
