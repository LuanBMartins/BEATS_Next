import { Chip } from '../Chip';

export function InfoSecAttributesBox() {
    return (
        <div
            className='border border-beatsWhite-900 rounded-xl
            flex flex-col justify-between w-7/12
            p-6'
        >
            <h3 className='text-sm font-SourceSans mb-8'>Information Security Attributes</h3>

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
