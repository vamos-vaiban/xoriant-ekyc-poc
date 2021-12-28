import React, {useState, useEffect} from "react";
import { Box, FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import DialogBox from './DialogBox'


export default function SwitchComponent({showTitle, status, onChange, dialogText,isDisabled,onChangeRemark}) {
  const [localStatus,setLocalStatus] = useState(false)
  const [open,setOpen] = useState(false)

  const handleChange = (event) => {
    setLocalStatus(event.target.checked)
    setOpen(true)
  };

  useEffect(() => {
      if(status == "Approved"){
        setLocalStatus(true)
      }else{
        setLocalStatus(false)
      }
   
  },[status])

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <FormControlLabel
        control={
          <Switch
            checked={localStatus}
            disabled = {isDisabled}
            onChange={handleChange}
            name={localStatus ? "Approved" : showTitle}
            // color="primary"
          />
        }
        label={showTitle}
      />
      <DialogBox 
        shouldOpen={open}
        onSelect={(shouldProcess) => {
            if(shouldProcess){
              onChange(localStatus)
            }else{
              setLocalStatus(!localStatus)
            }
            setOpen(false)
        }}
        dialogText={dialogText}
        showTitle = {showTitle}
        onChangeRemark = {onChangeRemark}/>
    </Box>
  );
}