import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
} from '@chakra-ui/react'
import { useState } from 'react';
import img from "./images/loginimg.png";
import style from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return ( 
        <Flex className={style.border} alignItems={"center"} w={"90%"} margin={"auto"} justifyContent={"space-around"}>
            <Box flex={1}>
                <Stack spacing={2} mx={'auto'} maxW={'md'} >
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} fontFamily={"inherit"} >Log in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'} display={"flex"} >
                            to enjoy all of our cool <Text color={'blue.400'} margin={"auto 2px auto 4px"}> features </Text> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Text color={'blue.400'}>Create account</Text>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Box flex={1} borderBottom={"1px solid black"} >
                <Image objectFit={"contain"} aspectRatio={"3/2"} src={img} alt='login-img' />
            </Box>
        </Flex>
    )
}


export default Login;

