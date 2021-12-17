import Image from 'next/image';
import { useGlobalData } from '../../../contexts/GlobalDataContext';
import axios from 'axios';
import { urlApi } from '../../hooks/environments';
import { useState } from 'react';
import { AddOrEditCommentariesFormField } from '../Formfields';

interface commentaryProps {
    commentaries: any;
    strategyName: string;
}

interface baseCommentaryProps {
    author: 'string';
    date: Date;
    id: 'string';
    replies?: Array<any>;
    text: 'string';
    strategyName: string;
}

interface responseCommentaryProps {
    author: string;
    date: Date;
    text: string;
    id: string;
    strategyName: string;
}

// function deleteComment(id: string, commentary: string, token: string, strategyname: string) {
//     const dataToSend = { text: commentary };
// console.log({
//     headers: headers,
//     data: dataToSend,
// });

function deleteComment(id: string, token: string, strategyname: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyname}/comments/${id}`;
    axios
        .delete(finalURL, {
            headers: headers,
        })
        .then((dataReceivedFromAPI) => {
            console.log(dataReceivedFromAPI);
        })
        .catch((errorReturnedFromAPI) => console.log(errorReturnedFromAPI.response));
}

function editComment(id: string, token: string, strategyname: string, comment: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyname}/comments/${id}`;
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

function addBaseComment(id: string, token: string, strategyname: string, comment: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyname}/comments`;
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

function addResponseComment(id: string, token: string, strategyname: string, comment: string) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const finalURL = `${urlApi}/strategies/${strategyname}/comments/${id}`;
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

export function Commentaries({ commentaries, strategyName }: commentaryProps) {
    console.log(commentaries && commentaries.comments);
    const { loginData } = useGlobalData();

    const isUserLoggedIn = loginData.status == 'logged-in' ? true : false;

    return (
        <section className='mb-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative overflow-hidden'>
            <div
                className='skeleton-item
                        before:absolute before:bg-beatsGreen-700 before:h-12 before:w-4 before:block before:top-0 before:left-0 before:
                        flex flex-col w-full'
            >
                <div className='mb-10 flex items-center align-center gap-6'>
                    <h2 className='font-Montserrat font-bold text-2xl'>Commentaries</h2>
                    <div className='relative'>
                        {isUserLoggedIn ? <Image src='/add.svg' alt='' height={28} width={28} /> : null}
                    </div>
                </div>
                {commentaries &&
                    commentaries.comments.map((commentary: baseCommentaryProps) => {
                        console.log(commentary);
                        return (
                            <BaseCommentary
                                key={commentary.id}
                                author={commentary.author}
                                date={commentary.date}
                                text={commentary.text}
                                replies={commentary.replies}
                                id={commentary.id}
                                strategyName={strategyName}
                            />
                        );
                    })}
                {/* <BaseCommentary />
                <ResponseCommentary /> */}
            </div>
        </section>
    );
}

function BaseCommentary({ author, date, text, replies, id, strategyName }: baseCommentaryProps) {
    const [newComment, setNewComment] = useState('');
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

    const [newEditionOnComment, setNewEditionOnComment] = useState('');
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);

    const formatedDate = new Date(date).toLocaleString('en-US');
    const { loginData } = useGlobalData();

    const isUserLoggedIn = loginData.status == 'logged-in' ? true : false;
    const isUserAllowedToEditOrDelete =
        loginData.username == author || loginData.userType == 'Administrator' ? true : false;

    function handleSendEdit() {
        editComment(id, loginData.token, strategyName, newEditionOnComment);
    }
    function handleSendNewBaseComment() {
        addBaseComment(id, loginData.token, strategyName, newEditionOnComment);
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
                        onClick={(e) => deleteComment(id, loginData.token, strategyName)}
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

            {isCommentBoxOpen ? (
                <AddOrEditCommentariesFormField
                    fieldName=''
                    fieldValue={newComment}
                    settingFunction={setNewComment}
                    name='comment'
                    sendFunction={handleSendNewBaseComment}
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
                              strategyName={strategyName}
                          />
                      );
                  })
                : null}
        </div>
    );
}

function ResponseCommentary({ author, date, text, id, strategyName }: responseCommentaryProps) {
    const [newComment, setNewComment] = useState('');
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);

    const [newEditionOnComment, setNewEditionOnComment] = useState('');
    const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);

    function handleSendEdit() {
        editComment(id, loginData.token, strategyName, newEditionOnComment);
    }

    function handleSendNewBaseComment() {
        addResponseComment(id, loginData.token, strategyName, newEditionOnComment);
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
                        onClick={(e) => deleteComment(id, loginData.token, strategyName)}
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

            {isCommentBoxOpen ? (
                <AddOrEditCommentariesFormField
                    fieldName=''
                    fieldValue={newComment}
                    settingFunction={setNewComment}
                    name='comment'
                    sendFunction={handleSendNewBaseComment}
                />
            ) : null}
        </>
    );
}
