import { Container } from '../Container';
import { InfoSecAttributesBox, ImageFormField, TextAreaFormField, TextFormField } from '../Formfields';

export function StrategyForm() {
    return (
        <Container
            containerType='main'
            containerClasses='my-20 mx-32 p-12 bg-beatsBlack-700 rounded-10px relative container-height'
        >
            <h1 className='font-Montserrat text-4xl text-left underline green-underline-title mb-12'>
                Register Strategy
            </h1>

            <div className='w-4/6 flex flex-col gap-8 justify-between'>
                <TextFormField fieldName='Strategy Name' />

                <TextFormField fieldName='Aliases' />

                <InfoSecAttributesBox fieldName='InfoSec Attributes' />

                <TextAreaFormField fieldName='Problem' />

                <TextAreaFormField fieldName='Forces' />

                <TextAreaFormField fieldName='Solution' />

                <ImageFormField fieldName='Optional - upload 1 or more images that show your solution' />

                <TextFormField fieldName='Rationale' />

                <TextAreaFormField fieldName='Consequences' />

                <TextAreaFormField fieldName='Examples' />

                <TextFormField fieldName='Related Patterns' />

                <TextAreaFormField fieldName='References' />

                <button
                    className='h-12 w-6/12 rounded-md bg-beatsGreen-500 text-beatsWhite-full font-bold
                transition duration-400 ease-in hover:brightness-125 active:brightness-125 active:ring-2 active:ring-beatsGreen-700 active:ring-brightness-125'
                >
                    Register Strategy
                </button>
            </div>
        </Container>
    );
}
