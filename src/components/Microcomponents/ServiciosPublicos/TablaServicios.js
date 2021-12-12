import React, { Fragment, useState } from "react";
import ReactTooltip from "react-tooltip";
import TablaContent from "../Tables/TablaContent";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 1300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const TablaServicios = () => {
  let [validaModal, modificaModal] = useState(false);

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
    modificaModal(true);
  };
  const handleClose = () => {
    setOpen(false);
    modificaModal(false);
  };

  return (
    <Fragment>
      <TablaContent 
      validaModal={false} 
      handleOpen={handleOpen}

      
       />

      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 className="text-center">Total Factura</h2>
          <TablaContent
           validaModal={validaModal}
            />
        </div>
      </Modal>

      <ReactTooltip id="add-information" place="top" type="info" effect="solid">
        Ver Más Informacion
      </ReactTooltip>
    </Fragment>
  );
};

export default TablaServicios;
