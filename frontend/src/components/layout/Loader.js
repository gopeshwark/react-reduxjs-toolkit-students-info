import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(2px)",
  },
}));

const Loader = () => {
  const styles = useStyles();
  return (
    <Backdrop className={styles.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
