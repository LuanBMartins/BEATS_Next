import { useEffect, useState, Dispatch, SetStateAction, ChangeEvent, useRef } from 'react';
import { Chip } from '../Chip';
import { ImageContainer } from '../ImageContainer';
import { securityInformationItemsInitials } from '../../../contexts/GlobalDataContext';

interface fieldProps {
    fieldName: string;
    fieldType?: string | 'text';
    name?: string;
    fieldValue?: string;
    aliasesValues?: string[];
    settingFunction?: Dispatch<SetStateAction<any>>;
    isRequired?: boolean;
    searchResultAttributesObject?: any;
    disabled?: boolean | false;
}

export function TextFormField({
    fieldName,
    fieldType,
    name,
    settingFunction,
    fieldValue,
    isRequired,
    disabled,
}: fieldProps) {
    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        settingFunction ? settingFunction(value) : null;
    };

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
                value={fieldValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handle(e)}
                name={name}
                required={isRequired}
                className='bg-beatsBlack-100 h-10 w-full border border-beatsWhite-100 rounded-md px-2
                focus:outline-none focus:border-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                disabled={disabled}
            />
        </div>
    );
}

export function AliasesFormField({ fieldName, aliasesValues, settingFunction: settingOnArrayFunction }: fieldProps) {
    const [boxMessage, setBoxMessage] = useState('');
    const ref: any = useRef();

    function setValue(e: any) {
        setBoxMessage(e.target.value);
    }

    function includeAliasInArray() {
        let isItemInArray = false;
        aliasesValues &&
            aliasesValues.forEach((alias) => {
                if (alias === boxMessage) isItemInArray = true;
            });

        if (!isItemInArray && aliasesValues && aliasesValues.length <= 4 && boxMessage != '') {
            settingOnArrayFunction ? aliasesValues && settingOnArrayFunction([...aliasesValues, boxMessage]) : null;
            setBoxMessage('');
            ref.current && ref.current.focus();
        }
    }

    function removeAliasFromArray(receivedAlias: any) {
        aliasesValues &&
            aliasesValues.forEach((alias) => {
                if (alias == receivedAlias) {
                    const newAliasesArray = aliasesValues.filter((alias) => alias !== receivedAlias);
                    settingOnArrayFunction && settingOnArrayFunction(newAliasesArray);
                    ref.current && ref.current.focus();
                }
            });
    }

    return (
        <div className='w-full'>
            <label
                className='font-bold relative block mb-4 ml-4 relative
            before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
            >
                {fieldName}:
            </label>
            <div className='input-with-button-inside relative'>
                <input
                    ref={ref}
                    className='bg-beatsBlack-100 h-10 w-full border border-beatsWhite-100 rounded-md px-2 relative
                focus:outline-none focus:border-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                    value={boxMessage}
                    onChange={setValue}
                />
                <button onClick={includeAliasInArray} type='button'>
                    <ImageContainer
                        vertical=''
                        horizontal=''
                        width={16}
                        height={16}
                        localization='/add_button.png'
                        alt=''
                        position=''
                        background='flex justify-center items-center absolute top-3 right-3'
                    />
                </button>
            </div>

            {(aliasesValues &&
                aliasesValues.length == 0 &&
                'No alias(es) informed - Type an alias and press the + button to register it') ||
                (aliasesValues &&
                    aliasesValues.map((alias) => {
                        return (
                            <div className='grid grid-cols-3 gap-2 max-width-020 my-2' key={alias}>
                                <span
                                    key={alias}
                                    className='col-span-2 text-sm font-SourceSans overflow-ellipsis overflow-hidden whitespace-nowrap'
                                >
                                    - {alias}
                                </span>
                                <button
                                    onClick={() => removeAliasFromArray(alias)}
                                    type='button'
                                    className='col-span-1'
                                >
                                    <ImageContainer
                                        vertical=''
                                        horizontal=''
                                        width={16}
                                        height={16}
                                        localization='/clear_button.png'
                                        alt=''
                                        position=''
                                        background='inline-block flex justify-center items-center '
                                    />
                                </button>
                            </div>
                        );
                    }))}
        </div>
    );
}

export function TextFormFieldNoDecorator({ fieldName, fieldType, settingFunction, fieldValue }: fieldProps) {
    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        settingFunction ? settingFunction(value) : null;
    };
    return (
        <div className='w-full'>
            <label className='font-bold relative block mb-4'>{fieldName}:</label>
            <input
                type={fieldType}
                value={fieldValue}
                onChange={handle}
                className='bg-beatsBlack-100 h-10 w-full border border-beatsWhite-100 rounded-md px-2
                focus:outline-none focus:border-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
            />
        </div>
    );
}

export function TextAreaFormField({ fieldName, name, settingFunction, fieldValue, disabled }: fieldProps) {
    const handle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;

        settingFunction ? settingFunction(value) : null;
    };

    return (
        <div className=''>
            <label
                className='font-bold relative block mb-4 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md w-full'
            >
                {fieldName}:
            </label>
            <textarea
                value={fieldValue}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handle(e)}
                name={name}
                className='bg-beatsBlack-100 w-full border border-beatsWhite-100 rounded-md px-2
                focus:outline-none focus:border-beatsGreen-700 focus:ring-1 focus:ring-beatsGreen-700'
                rows={5}
                disabled={disabled}
            />
        </div>
    );
}

export function ImageFormField({ fieldName, settingFunction }: fieldProps) {
    const [boxMessage, setBoxMessage] = useState('No image(s) selected');
    const [uploadedFiles, setUploadedFiles] = useState(([] as Array<File>) || []);
    // https://www.youtube.com/watch?v=XeiOnkEI7XI&ab_channel=Academind
    // const fd = new FormData;
    // fd.append('image', uploadedFiles[0], uploadedFiles[0].name)

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
            settingFunction ? settingFunction(finalArray) : null;
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

export function InfoSecAttributesOnSearchResult({ searchResultAttributesObject, fieldName }: fieldProps) {
    function returnAttributeName(receivedKey: string) {
        let name = '';

        // This is super messy but is working, the map does nothing but iterate over the object
        const resultObject = Object.entries(securityInformationItemsInitials).map(
            ([keyInInitialsObject, valueInInitialsObject]) => {
                receivedKey === valueInInitialsObject ? (name = keyInInitialsObject) : null;
                return;
            }
        );
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        <div>
            {fieldName == 'Attributes' ? (
                <label
                    className='font-bold relative block mb-4 ml-4
                before:absolute before:bg-beatsGreen-700 before:h-2 before:w-2 before:block before:top-2 before:-left-4 before:rounded-md'
                >
                    {fieldName}:
                </label>
            ) : null}
            <div className='flex gap-2'>
                {searchResultAttributesObject &&
                    Object.entries(searchResultAttributesObject).map(([key, value]) => {
                        return value ? (
                            <Chip
                                attributeName={returnAttributeName(key)}
                                iconName='info'
                                key={key}
                                isChipSelectable={false}
                            />
                        ) : null;
                    })}
            </div>
        </div>
    );
}
