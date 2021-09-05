import { Alert } from "@material-ui/lab";

const Errorbox = ({ message }) => {
  return (
    <>
      <Alert variant="filled" severity="error">
        {message}
      </Alert>
    </>
  );
};

export default Errorbox;
