import Image from 'next/image';
import { useGlobalData } from '../../../contexts/GlobalDataContext';
import axios from 'axios';
import { urlApi } from '../../hooks/environments';
import {  useState } from 'react';
import { AddOrEditCommentariesFormField } from '../Formfields';

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
}

interface responseCommentaryProps {
    author: string;
    date: Date;
    text: string;
    id: string;
    strategyId: number;
}

function deleteComment(id: string, token: string, strategyId: number) {
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

function editComment(id: string, token: string, strategyId: number, comment: string) {
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

function addBaseComment(token: string, strategyId: number, comment: string) {
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

function addResponseComment(id: string, token: string, strategyId: number, comment: string) {
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

export function Commentaries({ commentaries, strategyId }: commentaryProps) {
    const { loginData } = useGlobalData();

    const [newComment, setNewComment] = useState('');
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

    function handleSendNewBaseComment() {
        addBaseComment(loginData.token, strategyId, newComment);
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
                {commentaries &&
                    commentaries.comments.map((commentary: baseCommentaryProps) => {
                        // console.log(commentary);
                        return (
                            <BaseCommentary
                                key={commentary.id}
                                author={commentary.author}
                                date={commentary.date}
                                text={commentary.text}
                                replies={commentary.replies}
                                id={commentary.id}
                                strategyId={strategyId}
                            />
                        );
                    })}
                {/* <BaseCommentary />
                <ResponseCommentary /> */}
            </div>
        </section>
    );
}

function BaseCommentary({ author, date, text, replies, id, strategyId }: baseCommentaryProps) {
    const [newComment, setNewComment] = useState('');
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

    const [newEditionOnComment, setNewEditionOnComment] = useState('');
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);

    // useEffect(() => {
    //     console.log(newComment);
    // }, [newComment]);

    const formatedDate = new Date(date).toLocaleString('en-US');
    const { loginData } = useGlobalData();

    const isUserLoggedIn = loginData.status == 'logged-in' ? true : false;
    const isUserAllowedToEditOrDelete =
        loginData.username == author || loginData.userType == 'Administrator' ? true : false;

    function handleSendResponseComment() {
        addResponseComment(id, loginData.token, strategyId, newComment);
    }

    function handleSendEdit() {
        editComment(id, loginData.token, strategyId, newEditionOnComment);
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
                        onClick={(e) => deleteComment(id, loginData.token, strategyId)}
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
                          />
                      );
                  })
                : null}
        </div>
    );
}

function ResponseCommentary({ author, date, text, id, strategyId }: responseCommentaryProps) {
    const [newEditionOnComment, setNewEditionOnComment] = useState('');
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);

    function handleSendEdit() {
        editComment(id, loginData.token, strategyId, newEditionOnComment);
    }

    const formatedDate = new Date(date).toLocaleString('en-US');

    const { loginData } = useGlobalData();

    const isUserLoggedIn = loginData.status == 'logged-in' ? true : false;
    const isUserAllowedToEditOrDelete =
        loginData.username == author || loginData.userType == 'Administrator' ? true : false;

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
                        onClick={(e) => deleteComment(id, loginData.token, strategyId)}
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
