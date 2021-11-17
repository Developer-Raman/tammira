import React from 'react'
import { DialogContent, DialogContentText, TextField, DialogActions, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    inputWrapper: {
      marginTop: "15px !important",
    }
  });

const AddPostForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    dirty,
    isSubmitting,
    onClose
}) => {
    const classes = useStyles();
    
    return (
        <form onSubmit={handleSubmit}>
            <DialogContent>
                <Box mx={3}>
                    <TextField
                        fullWidth
                        name="title"
                        label="Title"
                        value={values.title}
                        onChange={handleChange}
                        error={touched.title && Boolean(errors.title)}
                        helperText={touched.title && errors.title}
                        classes={{ root: classes.inputWrapper }}
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        multiline
                        maxRows={20}
                        name="body"
                        label="Body"
                        value={values.body}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.body && Boolean(errors.body)}
                        helperText={touched.body && errors.body}
                        classes={{ root: classes.inputWrapper }}
                        variant="standard"
                    />
                    

                    <DialogActions>
                        <Box textAlign={"center"}>
                            <Button
                                variant="outlined"
                                style={{ textAlign: "center", marginRight: '1rem' }}
                                classes={{ root: classes.inputWrapper }}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={!dirty || isSubmitting}
                                style={{ textAlign: "center" }}
                                classes={{ root: classes.inputWrapper }}
                            >
                                Save
                            </Button>
                        </Box>
                    </DialogActions>
                </Box>
            </DialogContent>
        </form>
    )   
}

export default AddPostForm