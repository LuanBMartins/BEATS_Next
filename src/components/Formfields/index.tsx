import { useState } from 'react';
import { Chip } from '../Chip';

interface fieldProps {
    fieldName: string;
    fieldType?: string | 'text';
}

export function TextFormField({ fieldName, fieldType }: fieldProps) {
    return (
        <div className='w-full'>
            <label
                className='font-bold relative block mb-4 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                {fieldName}:
            </label>
            <input
                type={fieldType}
                className='bg-beatsBlack-100 h-10 w-full border border-beatsWhite-100 rounded-md px-2
                focus:outline-none focus:border-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
            />
        </div>
    );
}

export function TextFormFieldNoDecorator({ fieldName }: fieldProps) {
    return (
        <div className='w-full'>
            <label className='font-bold relative block mb-4'>{fieldName}:</label>
            <input
                className='bg-beatsBlack-100 h-10 w-full border border-beatsWhite-100 rounded-md px-2
                focus:outline-none focus:border-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
            />
        </div>
    );
}

export function TextAreaFormField({ fieldName }: fieldProps) {
    return (
        <div className=''>
            <label
                className='font-bold relative block mb-4 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md w-full'
            >
                {fieldName}:
            </label>
            <textarea
                className='bg-beatsBlack-100 w-full border border-beatsWhite-100 rounded-md px-2
                focus:outline-none focus:border-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                rows={5}
            />
        </div>
    );
}

export function ImageFormField({ fieldName }: fieldProps) {
    const [boxMessage, setBoxMessage] = useState('No image(s) selected');
    const [uploadedFiles, setUploadedFiles] = useState(([] as Array<File>) || []);

    function onUpload(filesReceived: FileList) {
        const listOfFilesReturned = Object.entries(filesReceived).map(([key, currentFile]) => {
            return currentFile;
        });

        if (listOfFilesReturned.length === 0) setBoxMessage('No image(s) selected');
        else if (listOfFilesReturned.length > 2) {
            setBoxMessage('You have selected more than 2 files, attaching the first ones.');
            const finalArray = listOfFilesReturned.slice(0, 2) as Array<File>;
            setUploadedFiles(finalArray);
        } else if (listOfFilesReturned.length == 1) {
            setBoxMessage('1 File selected:');
            const finalArray = listOfFilesReturned.slice(0, 1) as Array<File>;
            setUploadedFiles(finalArray);
        } else if (listOfFilesReturned.length == 2) {
            setBoxMessage('2 Files selected:');
            const finalArray = listOfFilesReturned.slice(0, 2) as Array<File>;
            setUploadedFiles(finalArray);
        }
    }

    return (
        <div className='w-full'>
            <p
                className='font-bold relative block mb-4 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                {fieldName}:
            </p>

            <div className='flex gap-6 items-center'>
                <label htmlFor='input-btn' className='input-button transition duration-400 ml-4'></label>
                <input
                    id='input-btn'
                    type='file'
                    accept='image/*'
                    className='hidden'
                    onChange={(e) => onUpload(e.target.files as FileList)}
                    multiple
                />

                <div>
                    <p className='text-sm font-SourceSans overflow-ellipsis overflow-hidden whitespace-nowrap'>
                        {boxMessage}
                    </p>
                    {boxMessage !== 'No image(s) selected' &&
                        uploadedFiles.map((file) => {
                            return (
                                <p
                                    key={file.name}
                                    className='text-sm font-SourceSans overflow-ellipsis overflow-hidden whitespace-nowrap'
                                >
                                    - {file.name}
                                </p>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export function InfoSecAttributesBox({ fieldName }: fieldProps) {
    return (
        <div className='w-full'>
            <label
                className='font-bold relative block mb-4 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                {fieldName}:
            </label>
            <div className='flex flex-wrap gap-2'>
                <Chip attributeName='Confidentiality' iconName='info' isChipSelectable={true} />
                <Chip attributeName='Integrity' iconName='info' isChipSelectable={true} />
                <Chip attributeName='Availability' iconName='info' isChipSelectable={true} />
                <Chip attributeName='Authentication' iconName='info' isChipSelectable={true} />
                <Chip attributeName='Authorization' iconName='info' isChipSelectable={true} />
                <Chip attributeName='Accountability' iconName='info' isChipSelectable={true} />
                <Chip attributeName='Non-Repudiation' iconName='info' isChipSelectable={true} />
            </div>
        </div>
    );
}

export function InfoSecAttributesOnSearchResult() {
    return (
        <div className='flex gap-2'>
            <Chip attributeName='Availability' iconName='info' isChipSelectable={false} />
            <Chip attributeName='Non-Repudiation' iconName='info' isChipSelectable={false} />
        </div>
    );
}
