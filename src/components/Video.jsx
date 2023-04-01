import {Box, DialogContent, DialogTitle } from "@mui/material";

export default function Video({ link}) {
    return (
        <>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <Box>
                    <iframe style={{ width: '100%', aspectRatio: '1.78' }} src={link} allowFullScreen ></iframe>
                </Box>
            </DialogContent>
        </>
    )
}
