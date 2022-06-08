type FormSendingButtonProps = {
    sendingStatus: string;
    sendForm: (e: any) => void;
    resetStatus: (e: any) => void;
    navigate: () => void;
};
export function FormSendingButton({ resetStatus, navigate, sendForm, sendingStatus }: FormSendingButtonProps) {
    return (
        (sendingStatus == 'stale' && (
            <button
                className='h-12 w-6/12 rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold
            transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                onClick={sendForm}
                type='submit'
            >
                Register Strategy
            </button>
        )) ||
        (sendingStatus == 'loading' && (
            <button
                className='h-12 w-6/12 rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold flex gap-4 justify-center items-center cursor-default'
                onClick={(e) => e.preventDefault()}
            >
                Registering Strategy...
                <div className='border-4 animate-spin border-beatsWhite-900 border-t-[#B4656F] border-b-[#B4656F] rounded-[50%] h-6 w-6'></div>
            </button>
        )) ||
        (sendingStatus == 'sent' && (
            <>
                <button
                    className='border-2 border-beatsGreen-900 text-beatsWhite-full font-bold p-2 desktop:p-3 rounded-md cursor-default'
                    onClick={navigate}
                >
                    Strategy Registered! <span className='text-beatsGreen-900 font-bold text-lg '>✓</span>
                </button>
                <span className='flex justify-center text-sm'>Click the button to go back to home page</span>
            </>
        )) || (
            <button
                className='h-12 w-6/12 bg-beatsRed-900/75 text-beatsWhite-full font-bold p-2 desktop:p-3 rounded-md'
                onClick={resetStatus}
            >
                Error, click to try again
            </button>
        )
    );
}
