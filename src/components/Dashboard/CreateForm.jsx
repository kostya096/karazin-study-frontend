import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CourseTaskForm = ({fields}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Course Task Form
            </Typography>
            <Box sx={{width: '50%'}}>
                {fields.map((field, index) => (
                    <div key={index}>
                        {field.type != "button" && (
                            <Typography variant="h6">{field.name}</Typography>)
                        }
                        {field.type === "input_text" && (

                            <TextField
                                id={field.name}
                                label={field.name}
                                variant="standard"
                                defaultValue={field.input}
                                onChange={(e) => {
                                    field.set_input(e.target.value);
                                }}
                                sx={{width: '100%'}}
                            />
                        )}
                        {field.type === "input_text_big" && (
                            <TextField
                                id={field.name}
                                label={field.name}
                                multiline
                                rows={4}
                                defaultValue={field.input}
                                variant="standard"
                                onChange={(e) => {
                                    field.set_input(e.target.value);
                                }}
                                sx={{width: '100%'}}
                            />

                        )}
                        <div style={{paddingBottom: 20}}/>
                    </div>
                ))}
                {fields.map((field, index) => (
                        <div key={index}>
                            {field.type === "button" && (
                                <>

                                    <Button variant="contained" color="primary" onClick={field.input}>
                                        {field.name}
                                    </Button>
                                </>
                            )}
                        </div>
                    )
                )}

            </Box>
        </Box>
    );
};

export default CourseTaskForm;
