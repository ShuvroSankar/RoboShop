import { Alert } from "react-bootstrap";
function Message({ varient, children }) {
  return <Alert variant={varient}>{children}</Alert>;
}
Message.defaultProps = {
  varient: "info",
};
export default Message;
