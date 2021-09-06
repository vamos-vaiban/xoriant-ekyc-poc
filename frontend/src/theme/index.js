import { createTheme } from "@material-ui/core";
import palette from "./palette"
import overrides from "./overrides"
import typography from "./typography";
const theme = createTheme({
    palette,
    overrides,
    typography
})

export default theme