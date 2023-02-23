import { ImageContainer } from '../ImageContainer';
import { TextAreaFormFieldNoDecorator } from '../Formfields';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { customApi } from '../../hooks/useFetch';
import { strategy } from '../../interfaces/strategy';
import { AxiosResponse, AxiosError } from 'axios';


const statusColor = {
    waitingAdm: 'text-beatsYellow-900',
    rejectedAdm: 'text-beatsRed-900',
    councilVoting: 'text-beatsYellow-900',
    reviewSuggested: 'text-beatsYellow-900',
    approved: 'text-beatsGreen-900',
};

export function WaitingForAdmApprovalStrategy(props: any) {
    const strategy: strategy = props.strategy
    const votingStatus = 'waitingAdm';
    const router = useRouter()

    const deleteOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { value: protocol } = event.currentTarget;
        customApi.methodDelete(
          `requests/delete/${protocol}`,
          {},
          (response: AxiosResponse<any>) => {
            router.push('/')
          },
        );
      };
      
      

    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <div className='flex mb-4'>
                    <p className='font-bold'>
                        Status:
                        <span className={`${statusColor[votingStatus]} font-normal pl-2 align-middle`}>
                            Waiting for adm. approval{' '}
                        </span>
                    </p>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={18}
                        height={18}
                        localization='/Material Icons/clock.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>{strategy.protocol_number}</span>
                </p>

                <p className='font-bold'>
                    Application Date: <span className='font-normal pl-2'>{new Date(strategy.date_required).toLocaleDateString()}</span>
                </p>
            </div>

            <div className='strategy-buttons col-span-1'>
                <button
                    type='button'
                    value={strategy.protocol_number}
                    onClick={deleteOnClick}
                    className='font-Montserrat text-xl border border-beatsWhite-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/delete.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Delete Application
                </button>
            </div>
        </>
    );
}

export function WaitingForAdmApprovalStrategyContext(props: any) {
    const strategy: strategy = props.strategy
    const votingStatus = 'waitingAdm';
    const router = useRouter()

    const visualizeOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            router.push('/strategy-requests/' + strategy.protocol_number)
    };
      
      

    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <div className='flex mb-4'>
                    <p className='font-bold'>
                        Status:
                        <span className={`${statusColor[votingStatus]} font-normal pl-2 align-middle`}>
                            Waiting for approval 
                        </span>
                    </p>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={18}
                        height={18}
                        localization='/Material Icons/clock.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>{strategy.protocol_number}</span>
                </p>

                <p className='font-bold'>
                    Application Date: <span className='font-normal pl-2'>{new Date(strategy.date_required).toLocaleDateString()}</span>
                </p>
            </div>

            <div className='strategy-buttons col-span-1'>
                <button
                    type='button'
                    value={strategy.protocol_number}
                    onClick={visualizeOnClick}
                    className='font-Montserrat text-xl border border-beatsWhite-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/search.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Visualize
                </button>
            </div>
        </>
    );
}

export function RejectedByAdminStrategy(props: any) {
    const strategy: strategy = props.strategy
    const votingStatus = 'rejectedAdm';
    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <p className='font-bold mb-4'>
                    Status:<span className={`${statusColor[votingStatus]} font-normal pl-2`}>Rejected by Admin</span>
                </p>

                <p className='font-bold mb-4'>
                    Admin Decision: <span className='font-normal pl-2'>{strategy.recurrence_number}</span>
                </p>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>{strategy.protocol_number}</span>
                </p>

                <p className='font-bold'>
                    Application Date: <span className='font-normal pl-2'>{strategy.date_required}</span>
                </p>
            </div>
        </>
    );
}

export function CouncilVotingStrategy(props: any) {
    const strategy: strategy = props.strategy
    const votingStatus = 'councilVoting';
    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <div className='flex mb-4'>
                    <p className='font-bold'>
                        Status:
                        <span className={`${statusColor[votingStatus]} font-normal pl-2`}>
                            Approved by admin. Council voting ongoing{' '}
                        </span>
                    </p>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={16}
                        height={16}
                        localization='/Material Icons/clock.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>{strategy.protocol_number}</span>
                </p>

                <p className='font-bold mb-4'>
                    Number of Reviews: <span className='font-normal pl-2'>{strategy.recurrence_number}</span>
                </p>

                <p className='font-bold mb-4'>
                    Application Date: <span className='font-normal pl-2'>{strategy.date_required}</span>
                </p>

                <div className='flex'>
                    <p className='font-bold'>Council Votes:</p>
                    <span className='font-normal text-beatsGreen-700 pl-2'> {strategy.accept_with_suggestions_count} </span>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={16}
                        height={16}
                        localization='/Material Icons/check.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                    <span className='font-normal text-beatsRed-900 pl-2'>NumberNegativeVotes </span>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={18}
                        height={18}
                        localization='/Material Icons/close.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>
            </div>

            <div className='strategy-buttons col-span-1'>
                <button
                    type='button'
                    className='font-Montserrat text-xl border border-beatsWhite-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/delete.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Delete Application
                </button>
            </div>
        </>
    );
}

export function ReviewSuggestedStrategy(props: any) {
    const strategy: strategy = props.strategy
    const votingStatus = 'reviewSuggested';
    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <div className='flex mb-4'>
                    <p className='font-bold'>
                        Status:
                        <span className={`${statusColor[votingStatus]} font-normal pl-2`}>
                            Approved by admin. Review suggested by Council
                        </span>
                    </p>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={16}
                        height={16}
                        localization='/Material Icons/feedback.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>{strategy.protocol_number}</span>
                </p>

                <p className='font-bold mb-4'>
                    Number of Reviews: <span className='font-normal pl-2'>{strategy.recurrence_number}</span>
                </p>

                <p className='font-bold mb-4'>
                    Application Date: <span className='font-normal pl-2'>{strategy.date_required}</span>
                </p>

                <div className='flex'>
                    <p className='font-bold'>Council Votes:</p>
                    <span className='font-normal text-beatsGreen-700 pl-2'>NumberPositiveVotes </span>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={16}
                        height={16}
                        localization='/Material Icons/thumbs_up.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                    <span className='font-normal text-beatsYellow-500 pl-2'>
                        NumberSuggestionVotes Acepted with Suggestions
                    </span>
                    <span className='font-normal text-beatsRed-900 pl-2'>NumberNegativeVotes </span>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={16}
                        height={16}
                        localization='/Material Icons/thumbs_down.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>
            </div>

            <div className='strategy-buttons col-span-1 flex flex-col gap-6'>
                <button
                    type='button'
                    className='font-Montserrat text-xl border border-beatsWhite-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/delete.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Delete Application
                </button>

                <button
                    type='button'
                    className='font-Montserrat text-xl border border-beatsWhite-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/review.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Review Application
                </button>
            </div>
        </>
    );
}

export function ApprovedStrategy(props: any) {
    const votingStatus = 'approved';
    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-900 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <p className='font-bold mb-4'>
                    Status:
                    <span className={`${statusColor[votingStatus]} font-normal pl-2`}>
                        Approved by admin. Approved by Council. Published.
                    </span>
                </p>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>protocol data</span>
                </p>

                <p className='font-bold mb-4'>
                    Application Date: <span className='font-normal pl-2'>12/17/2021</span>
                </p>

                <p className='font-bold'>
                    Acceptance Date: <span className='font-normal pl-2'>12/17/2021</span>
                </p>
            </div>
        </>
    );
}

export function StrategyInAdminPage(props: any) {
    const votingStatus = 'reviewSuggested';

    const [commentary, setCommentary] = useState('');
    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <div className='flex mb-4'>
                    <p className='font-bold'>
                        Status:
                        <span className={`${statusColor[votingStatus]} font-normal pl-2 align-middle`}>
                            Waiting for adm. approval{' '}
                        </span>
                    </p>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={18}
                        height={18}
                        localization='/Material Icons/clock.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>protocol data</span>
                </p>

                <p className='font-bold mb-4'>
                    Application Date: <span className='font-normal pl-2'>12/17/2021</span>
                </p>

                <div className='flex align-center'>
                    <p className='font-bold'>Decision:</p>
                    <div className='flex mb-4'>
                        <button
                            type='button'
                            className='ml-2 font-bold border px-1 py-0.5 border-beatsWhite-900 rounded-3px flex gap-2 items-center'
                        >
                            <ImageContainer
                                vertical=''
                                horizontal=''
                                width={13}
                                height={13}
                                localization='/Material Icons/thumbs_up.svg'
                                alt=''
                                position=''
                                background='flex justify-center items-center'
                            />{' '}
                            Accept
                        </button>
                        <button
                            type='button'
                            className='ml-2 font-bold border px-1 py-0.5 border-beatsWhite-900 rounded-3px flex gap-2 items-center'
                        >
                            <ImageContainer
                                vertical=''
                                horizontal=''
                                width={13}
                                height={13}
                                localization='/Material Icons/thumbs_down.svg'
                                alt=''
                                position=''
                                background='flex justify-center items-center'
                            />{' '}
                            Reject
                        </button>
                    </div>
                </div>

                <TextAreaFormFieldNoDecorator
                    fieldName='Commentary'
                    name='commentary'
                    fieldValue={commentary}
                    settingFunction={setCommentary}
                />
            </div>

            <div className='strategy-buttons col-span-1 flex flex-col gap-6'>
                <button
                    type='button'
                    className='font-Montserrat text-xl border border-beatsWhite-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/assignment.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    View Application
                </button>

                <button
                    type='button'
                    className='font-Montserrat text-xl border border-beatsGreen-900 text-beatsGreen-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/check_alt.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Submit Decision
                </button>
            </div>
        </>
    );
}

export function StrategyInCouncilPage(props: any) {
    const votingStatus = 'reviewSuggested';

    return (
        <>
            <div className='strategy-description col-span-3'>
                <h3
                    className='font-Montserrat text-2xl relative mb-6 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-3 before:-left-4 before:rounded-md'
                >
                    Title
                </h3>

                <div className='flex mb-4'>
                    <p className='font-bold'>
                        Status:
                        <span className={`${statusColor[votingStatus]} font-normal pl-2 align-middle`}>
                            Approved by admin. Council voting ongoing{' '}
                        </span>
                    </p>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={18}
                        height={18}
                        localization='/Material Icons/clock.svg'
                        alt=''
                        position=''
                        background='ml-1 flex justify-center items-center'
                    />
                </div>

                <p className='font-bold mb-4'>
                    Protocol Number: <span className='font-normal pl-2'>protocol data</span>
                </p>

                <p className='font-bold mb-4'>
                    Application Date: <span className='font-normal pl-2'>12/17/2021</span>
                </p>

                <div className='flex align-center'>
                    <p className='font-bold'>Decision:</p>
                    <div className='flex mb-4'>
                        <button
                            type='button'
                            className='ml-2 font-bold border px-1 py-0.5 border-beatsWhite-900 rounded-3px flex gap-2 items-center'
                        >
                            <ImageContainer
                                vertical=''
                                horizontal=''
                                width={13}
                                height={13}
                                localization='/Material Icons/thumbs_up.svg'
                                alt=''
                                position=''
                                background='flex justify-center items-center'
                            />{' '}
                            Accept
                        </button>
                        <button
                            type='button'
                            className='ml-2 font-bold border px-1 py-0.5 border-beatsWhite-900 rounded-3px flex gap-2 items-center'
                        >
                            <ImageContainer
                                vertical=''
                                horizontal=''
                                width={13}
                                height={13}
                                localization='/Material Icons/add_comment.svg'
                                alt=''
                                position=''
                                background='flex justify-center items-center'
                            />{' '}
                            Accept with Suggestions
                        </button>
                        <button
                            type='button'
                            className='ml-2 font-bold border px-1 py-0.5 border-beatsWhite-900 rounded-3px flex gap-2 items-center'
                        >
                            <ImageContainer
                                vertical=''
                                horizontal=''
                                width={13}
                                height={13}
                                localization='/Material Icons/thumbs_down.svg'
                                alt=''
                                position=''
                                background='flex justify-center items-center'
                            />{' '}
                            Reject
                        </button>
                    </div>
                </div>
            </div>

            <div className='strategy-buttons col-span-1 flex flex-col gap-6'>
                <button
                    type='button'
                    className='font-Montserrat text-xl border border-beatsWhite-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/assignment.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    View Application
                </button>

                <button
                    type='button'
                    className='font-Montserrat text-xl border border-beatsGreen-900 text-beatsGreen-900 px-6 py-2 rounded-10px w-full flex gap-2 items-center'
                >
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={24}
                        height={24}
                        localization='/Material Icons/check_alt.svg'
                        alt=''
                        position=''
                        background='flex justify-center items-center'
                    />{' '}
                    Submit Decision
                </button>
            </div>
        </>
    );
}
