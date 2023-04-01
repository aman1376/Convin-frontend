import { DialogContent, DialogTitle, FormGroup, TextField } from "@mui/material";
import { forwardRef } from "react";
const EditCard = forwardRef((props, ref) => (
    <>
        <DialogTitle>Add/Edit Card</DialogTitle>
        <DialogContent>
            <FormGroup sx={{ pt: "1rem", gap: '1rem' }} ref={ref}>
                <TextField
                    helperText="Please Enter Card Name"
                    label="Name"
                    required
                />
                <TextField
                    helperText="Please Enter EMBED Link of the Video "
                    label="Link"
                    required
                />
            </FormGroup>
        </DialogContent>
    </>
))

export default EditCard
