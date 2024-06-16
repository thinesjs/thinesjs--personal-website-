/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react'
import { Portfolio } from '@/app/interfaces/portfolio'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { times } from 'lodash'
import { Button, Card, CardBody, CardFooter, HStack, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorMode, useDisclosure, useToast } from '@chakra-ui/react';
import { portfolioData } from '@/app/data/portfolio';

const PortfolioSection = () => {
    const data = portfolioData;
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const openInNewTab = (url: any) => {
        window.open(url, "_blank", "noreferrer");
    };
    
    return (
        <div id="projects" className='w-full'>
            <div className="flex flex-col max-w-screen-lg p-4 mx-auto">
                <p className='inline text-4xl font-bold'>Projects {String.fromCodePoint(Number('0x1F5A5'))}</p>
                <p className='py-6 text-semibold'>Check out some of my projects that i am working/worked on!</p>
                <div className="gap-3">
                    {data.length === 0 && (
                        <p>Feel free to check my GitHub at https://github.com/thinesjs!</p>
                    )}
                    {data.map((item) => (
                        <Card
                            key={item.id}
                            className='mb-5 rounded-2xl'
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={item.thumbnail}
                                alt={'image'}
                            />
                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{item.title}</Heading>
                                    <Text py='2'>
                                        {item.description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <HStack>
                                        <Button
                                            className={colorMode === "light" ? "bg-gray-100" : "bg-gray-700"}
                                            variant='solid'
                                            onClick={() =>
                                                toast({
                                                    title: 'Coming Soon!',
                                                    description: "You've just discovered an item from the to-do list!",
                                                    status: 'info',
                                                    duration: 9000,
                                                    position: 'top',
                                                    isClosable: true,
                                                })
                                            }
                                        >
                                            About Project
                                        </Button>
                                        {item.hyperlink != null ?
                                            <Button
                                                className={colorMode === "light" ? "bg-gray-100" : "bg-gray-700"}
                                                variant='solid'
                                                onClick={() => openInNewTab(item.hyperlink)}
                                            >
                                                Preview
                                            </Button> : ""}
                                    </HStack>
                                </CardFooter>
                            </Stack>
                        </Card>
                    ))}
                </div>
           
            </div>
        </div>
    )
}

export default PortfolioSection