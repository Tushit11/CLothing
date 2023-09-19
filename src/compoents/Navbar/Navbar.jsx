import React from 'react';
import style from "./Navbar.module.css";
import { Box, Button, Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handlehomepage = () => {
        navigate("/");
    }

    return (
        <Box className={style.navbar_head} zIndex={10} >
            <Box display={"grid"} position={"fixed"} backgroundColor={"white"} top={0} left={0} right={0}>
                <Box border={"1px solid black"} padding={"8px 10px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >
                    <Box>
                        <Image cursor={"pointer"} onClick={handlehomepage} w={"230px"} src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="logo" />
                    </Box>
                    <Box className={style.login_btn} >
                        <Link to={"/login"}>
                            <Button variant='outline'>
                                Login
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={4} padding={"0 10px"} >
                    <Button variant={"unstyled"} > Men </Button>
                    <Button variant={"unstyled"} > Women </Button>
                    <Button variant={"unstyled"} > Kids </Button>
                </Box>
            </Box>
        </Box>

    )
}

export default Navbar;

