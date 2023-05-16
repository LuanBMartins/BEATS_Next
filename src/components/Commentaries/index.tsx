import Image from 'next/image';
import { useGlobalData } from '../../../contexts/GlobalDataContext';
import axios from 'axios';
import { urlApi } from '../../hooks/environments';
import { Dispatch, useEffect, useState } from 'react';
import { AddOrEditCommentariesFormField } from '../Formfields';
import { useRouter } from 'next/router';
import { customApi } from '../../hooks/useFetch'

interface commentaryProps {
    commentaries: any;
    strategyId: number;
}

interface baseCommentaryProps {
    author: 'string';
    date: Date;
    id: 'string';
    replies?: Array<any>;
    text: 'string';
    strategyId: number;
    usuario: {
        email: string
    }
    setReset: Dispatch<any>
    setIsLoading: Dispatch<any>
    reset: boolean
}

interface responseCommentaryProps {
    author: string;
    date: Date;
    text: string;
    id: string;
    strategyId: number;
    usuario: {
        email: string
    }
    setReset: Dispatch<any>
    setIsLoading: Dispatch<any>
    reset: boolean
}

async function deleteComment(id: string, token: string, strategyId: number) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyId}/comments/${id}`;
    axios
        .delete(finalURL, {
            headers: headers,
        })
        .then((dataReceivedFromAPI) => {
            console.log(dataReceivedFromAPI);
        })
        .catch((errorReturnedFromAPI) => console.log(errorReturnedFromAPI.response));
}

async function editComment(id: string, token: string, strategyId: number, comment: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyId}/comments/${id}`;
    axios
        .put(
            finalURL,
            {
                text: comment,
            },
            {
                headers: headers,
            }
        )
        .then((dataReceivedFromAPI) => {
            console.log(dataReceivedFromAPI);
        })
        .catch((errorReturnedFromAPI) => console.log(errorReturnedFromAPI.response));
}

async function addBaseComment(token: string, strategyId: number, comment: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyId}/comments`;
    axios
        .post(
            finalURL,
            {
                text: comment,
            },
            {
                headers: headers,
            }
        )
        .then((dataReceivedFromAPI) => {
            console.log(dataReceivedFromAPI);
        })
        .catch((errorReturnedFromAPI) => console.log(errorReturnedFromAPI.response));
}

async function addResponseComment(id: string, token: string, strategyId: number, comment: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyId}/comments/${id}`;
    axios
        .post(
            finalURL,
            {
                text: comment,
            },
            {
                headers: headers,
            }
        )
        .then((dataReceivedFromAPI) => {
            console.log(dataReceivedFromAPI);
        })
        .catch((errorReturnedFromAPI) => console.log(errorReturnedFromAPI.response));
}

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function Commentaries({ commentaries: initialCommentaries, strategyId }: commentaryProps) {
    const { loginData } = useGlobalData();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
    const [commentaries, setCommentaries] = useState(initialCommentaries);
    const [reset, setReset] = useState(false)

    useEffect(() => {
        const routeToFetch = router.asPath.slice(1);
        delay(700).then(() => {
            customApi.methodGet(routeToFetch + '/comments', {}, (httpResponse) => {
                setCommentaries(httpResponse.data)
            })
        }).finally(() => {
            setIsLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset])

    function handleSendNewBaseComment() {
        setIsLoading(true)
        addBaseComment(loginData.token, strategyId, newComment).then(() => {
            setIsCommentBoxOpen(false)
            setNewComment('')
        }).finally(() => {
            setReset(!reset)
        });
    }

    const isUserLoggedIn = loginData.status == 'logged-in' ? true : false;

    return (
        <section className='mb-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative overflow-hidden'>
            <div
                className='skeleton-item
                        before:absolute before:bg-beatsGreen-700 before:h-12 before:w-4 before:block before:top-0 before:left-0 before:
                        flex flex-col w-full'
            >
                <div className='mb-10 flex flex-col align-center gap-6'>
                    <div className='flex gap-6'>
                        <h2 className='font-Montserrat font-bold text-2xl'>Commentaries</h2>
                        <div className='relative'>
                            {isUserLoggedIn ? (
                                <Image
                                    src='/add.svg'
                                    alt=''
                                    height={28}
                                    width={28}
                                    onClick={(e) => setIsCommentBoxOpen(true)}
                                />
                            ) : null}
                        </div>
                    </div>
                    {isCommentBoxOpen ? (
                        <AddOrEditCommentariesFormField
                            fieldName=''
                            fieldValue={newComment}
                            settingFunction={setNewComment}
                            name='comment'
                            sendFunction={handleSendNewBaseComment}
                        />
                    ) : null}
                </div>
                {isLoading ?
                    <div className="flex justify-center items-center">
                        <p>Aguarde...</p>
                    </div>
                    : commentaries && commentaries.comments && (commentaries.comments.length > 0) ?
                        commentaries.comments.map((commentary: baseCommentaryProps) => {
                            return (
                                <BaseCommentary
                                    key={commentary.id}
                                    author={commentary.author}
                                    date={commentary.date}
                                    text={commentary.text}
                                    replies={commentary.replies}
                                    id={commentary.id}
                                    strategyId={strategyId}
                                    usuario={commentary.usuario}
                                    setReset={setReset}
                                    reset={reset}
                                    setIsLoading={setIsLoading}
                                />
                            );
                        }) : null}
                {/* <BaseCommentary />
                <ResponseCommentary /> */}
            </div>
        </section>
    );
}

function BaseCommentary({ author, date, text, replies, id, strategyId, usuario, setReset, setIsLoading, reset }: baseCommentaryProps) {
    const router = useRouter();
    const [newComment, setNewComment] = useState('');
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

    const [newEditionOnComment, setNewEditionOnComment] = useState('');
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);

    const formatedDate = new Date(date).toLocaleString('en-US');
    const { loginData } = useGlobalData();

    const isUserLoggedIn = loginData.status == 'logged-in' ? true : false;
    const isUserAllowedToEditOrDelete =
        loginData.username == usuario.email || loginData.userType == 'Administrator' ? true : false;

    function handleSendResponseComment() {
        setIsLoading(true)
        addResponseComment(id, loginData.token, strategyId, newComment).then(() => {
            setIsCommentBoxOpen(false)
            setNewComment('')
        }).finally(() => {
            setReset(!reset)
        });
    }

    function handleSendEdit() {
        setIsLoading(true)
        editComment(id, loginData.token, strategyId, newEditionOnComment).then(() => {
            setIsEditBoxOpen(false)
            setNewEditionOnComment('')
        }).finally(() => {
            setReset(!reset)
        });;
    }

    function handleDelete(id: string, token: string) {
        setIsLoading(true)
        deleteComment(id, token, strategyId).then(() => { })
            .finally(() => {
                setReset(!reset)
            });
    }

    return (
        <div className='py-2'>
            <p
                className='text-base mb-2 relative ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                <span className='font-bold inline-block text-base'>{author}:</span> {text}
            </p>

            <div className='relative flex items-center align-center gap-2 mb-2'>
                <span className='text-base'>- {formatedDate}</span>
                {isUserLoggedIn ? (
                    <Image src='/add.svg' alt='' height={24} width={24} onClick={(e) => setIsCommentBoxOpen(true)} />
                ) : null}
                {isUserAllowedToEditOrDelete ? (
                    <Image src='/edit.svg' alt='' height={24} width={24} onClick={(e) => setIsEditBoxOpen(true)} />
                ) : null}
                {isUserAllowedToEditOrDelete ? (
                    <Image
                        src='/delete.svg'
                        alt=''
                        height={24}
                        width={24}
                        onClick={(e) => handleDelete(id, loginData.token)}
                    />
                ) : null}
            </div>

            {isCommentBoxOpen ? (
                <AddOrEditCommentariesFormField
                    fieldName=''
                    fieldValue={newComment}
                    settingFunction={setNewComment}
                    name='comment'
                    sendFunction={handleSendResponseComment}
                />
            ) : null}

            {isEditBoxOpen ? (
                <AddOrEditCommentariesFormField
                    fieldName=''
                    fieldValue={newEditionOnComment}
                    settingFunction={setNewEditionOnComment}
                    name='comment'
                    sendFunction={handleSendEdit}
                />
            ) : null}

            {replies
                ? replies.map((reply) => {
                    return (
                        <ResponseCommentary
                            key={reply.id}
                            author={reply.author}
                            date={reply.date}
                            text={reply.text}
                            id={reply.id}
                            strategyId={strategyId}
                            usuario={reply.usuario}
                            setReset={setReset}
                            reset={reset}
                            setIsLoading={setIsLoading}
                        />
                    );
                })
                : null}
        </div>
    );
}

function ResponseCommentary({ author, date, text, id, strategyId, usuario, setReset, setIsLoading, reset }: responseCommentaryProps) {
    const [newEditionOnComment, setNewEditionOnComment] = useState('');
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);

    function handleSendEdit() {
        setIsLoading(true)
        editComment(id, loginData.token, strategyId, newEditionOnComment).then(() => { })
            .finally(() => {
                setReset(!reset)
            });;
    }

    function handleDelete(id: string, token: string) {
        setIsLoading(true)
        deleteComment(id, token, strategyId).then(() => { })
            .finally(() => {
                setReset(!reset)
            });
    }

    const formatedDate = new Date(date).toLocaleString('en-US');

    const { loginData } = useGlobalData();

    const isUserLoggedIn = loginData.status == 'logged-in' ? true : false;
    const isUserAllowedToEditOrDelete =
        loginData.username == usuario.email || loginData.userType == 'Administrator' ? true : false;

    return (
        <>
            <p
                className='text-base mb-2 ml-14 relative
            before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                <span className='font-bold inline-block text-base'>{author}:</span> {text}
            </p>
            <div className='relative flex items-center align-center gap-2 mb-2 ml-10'>
                <span className='text-base'>- {formatedDate}</span>

                {isUserAllowedToEditOrDelete ? (
                    <Image src='/edit.svg' alt='' height={24} width={24} onClick={(e) => setIsEditBoxOpen(true)} />
                ) : null}

                {isUserAllowedToEditOrDelete ? (
                    <Image
                        src='/delete.svg'
                        alt=''
                        height={24}
                        width={24}
                        onClick={(e) => handleDelete(id, loginData.token)}
                    />
                ) : null}
            </div>
            {isEditBoxOpen ? (
                <AddOrEditCommentariesFormField
                    fieldName=''
                    fieldValue={newEditionOnComment}
                    settingFunction={setNewEditionOnComment}
                    name='comment'
                    sendFunction={handleSendEdit}
                />
            ) : null}
        </>
    );
}
