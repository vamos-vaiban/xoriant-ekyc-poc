// import { palette } from "../palette";
import { makeStyles } from "@material-ui/core";
const overrideSettings = makeStyles((theme)=>({
    root2:{
        "& .Mui-focused ": {
            borderColor:"black",
            color:"black",
            border: '1px solid'
           
        }
    },
    root:{
        
        '& label.Mui-focused': {
            borderColor: 'white',
            backgroundColor: 'white',
            paddingLeft:"0.2vw",
            paddingRight:"0.2vw"
        },
        '& .MuiFormHelperText-root':{
            border:"none",
            color:"red"
        }

    }
}))
export default overrideSettings;