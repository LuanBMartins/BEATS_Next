import { Chip } from '../Chip';

export function StrategiesBox() {
    return (
        <div
            className='border border-beatsWhite-900 rounded-xl
            flex flex-col justify-between w-7/12
            p-6'
        >
            <h2 className='text-sm font-SourceSans mb-8'>Information Security Attributes</h2>

            <div className='flex justify-between flex-wrap'>
                <Chip attributeName='Confidentiality' iconName='info' margin='3' />
                <Chip attributeName='Integrity' iconName='info' margin='3' />
                <Chip attributeName='Availability' iconName='info' margin='3' />
                <Chip attributeName='Authentication' iconName='info' margin='3' />
                <Chip attributeName='Authorization' iconName='info' margin='3' />
                <Chip attributeName='Accountability' iconName='info' margin='3' />
                <Chip attributeName='Non-Repudiation' iconName='info' margin='3' />
            </div>
        </div>
    );
}
