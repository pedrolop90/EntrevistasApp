import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { Link } from "react-router-dom";



function Navbar({ elementos }) {

    return (
        <Fragment>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar variant="dense" disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Entrevistas
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={null}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(null)}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {
                                    elementos.map(elemento =>
                                        <MenuItem key={elemento.texto} >
                                            <Typography textAlign="center">{elemento.texto}</Typography>
                                        </MenuItem>
                                    )
                                }
                            </Menu>
                        </Box>
                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Entrevistas
                        </Typography> */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {
                                elementos.map(elemento =>
                                    <Button
                                        key={elemento.url}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >

                                        <Typography>
                                            <Link to={elemento.url}>
                                                {elemento.texto}
                                            </Link>
                                        </Typography>

                                    </Button>
                                )
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Fragment>
    );
}

export default Navbar;