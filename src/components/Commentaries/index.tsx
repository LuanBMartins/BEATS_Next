interface commentaryProps {
    commentaries: any;
}

interface baseCommentaryProps {
    author: 'string';
    date: Date;
    id?: 'string';
    replies?: Array<any>;
    text: 'string';
}

interface responseCommentaryProps {
    author: string;
    date: Date;
    text: string;
}

export function Commentaries({ commentaries }: commentaryProps) {
    console.log(commentaries && commentaries.comments);
    return (
        <section className='mb-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative overflow-hidden'>
            <div
                className='skeleton-item
                        before:absolute before:bg-beatsGreen-700 before:h-12 before:w-4 before:block before:top-0 before:left-0 before:
                        flex flex-col w-full'
            >
                <h2 className='font-Montserrat font-bold text-2xl mb-10'>Commentaries</h2>
                {commentaries &&
                    commentaries.comments.map((commentary: baseCommentaryProps) => {
                        return (
                            <BaseCommentary
                                key={commentary.id}
                                author={commentary.author}
                                date={commentary.date}
                                text={commentary.text}
                                replies={commentary.replies}
                            />
                        );
                    })}
                {/* <BaseCommentary />
                <ResponseCommentary /> */}
            </div>
        </section>
    );
}

function BaseCommentary({ author, date, text, replies }: baseCommentaryProps) {
    const formatedDate = new Date(date).toLocaleString('en-US');
    return (
        <div className='py-2'>
            <p
                className='text-base mb-2 relative ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                <span className='font-bold inline-block text-base'>{author}:</span> {text}
            </p>
            <p className='text-base mb-2'>- {formatedDate}</p>
            {replies
                ? replies.map((reply) => {
                      return (
                          <ResponseCommentary
                              key={reply.id}
                              author={reply.author}
                              date={reply.date}
                              text={reply.text}
                          />
                      );
                  })
                : null}
        </div>
    );
}

function ResponseCommentary({ author, date, text }: responseCommentaryProps) {
    const formatedDate = new Date(date).toLocaleString('en-US');

    return (
        <>
            <p
                className='text-base mb-2 ml-14 relative
            before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                <span className='font-bold inline-block text-base'>{author}:</span> {text}
            </p>
            <p className='text-base ml-10 mb-2'>- {formatedDate}</p>
        </>
    );
}
