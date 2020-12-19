import React from 'react'
import {InvoiceForm} from "./components/InvoiceForm";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function App() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Invoice form
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <Paper style={{padding: "10px"}}>
                        <InvoiceForm/>
                    </Paper>
                </Grid>

            </Container>
        </div>
    );
}

export default App;
