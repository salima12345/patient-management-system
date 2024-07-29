import React from 'react';
import { render, screen } from '@testing-library/react';
import { useForm, Controller, useFormContext, FormProvider } from 'react-hook-form';
import CustomFormField,{FormFieldType} from './CustomFormFied';
import '@testing-library/jest-dom';

interface CustomFormFieldProps {
    name: string;
    label: string;
    placeholder?: string;
    fieldType: FormFieldType;
}

const RenderComponent: React.FC<CustomFormFieldProps> = (props) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={props.name}
            render={({ field }) => <CustomFormField {...props} control={control} />}
        />
    );
};

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
};

const renderComponent = (props: CustomFormFieldProps) => {
    return render(
        <Wrapper>
            <RenderComponent {...props} />
        </Wrapper>
    );
};

describe('CustomFormField Component', () => {
    it('renders input field correctly', () => {
        renderComponent({
            name: 'testInput',
            label: 'Test Input',
            placeholder: 'Enter text',
            fieldType: FormFieldType.INPUT,
        });

        expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders textarea field correctly', () => {
        renderComponent({
            name: 'testTextarea',
            label: 'Test Textarea',
            placeholder: 'Enter text',
            fieldType: FormFieldType.TEXTAREA,
        });

        expect(screen.getByLabelText('Test Textarea')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders phone input field correctly', () => {
        renderComponent({
            name: 'testPhone',
            label: 'Test Phone',
            placeholder: 'Enter phone number',
            fieldType: FormFieldType.PHONE_INPUT,
        });

        expect(screen.getByLabelText('Test Phone')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter phone number')).toBeInTheDocument();
    });

    it('renders checkbox field correctly', () => {
        renderComponent({
            name: 'testCheckbox',
            label: 'Test Checkbox',
            fieldType: FormFieldType.CHECKBOX,
        });

        expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
    });

    it('renders date picker field correctly', () => {
        renderComponent({
            name: 'testDatePicker',
            label: 'Test Date Picker',
            fieldType: FormFieldType.DATE_PICKER,
        });

        expect(screen.getByLabelText('Test Date Picker')).toBeInTheDocument();
    });

    it('renders select field correctly', () => {
        renderComponent({
            name: 'testSelect',
            label: 'Test Select',
            fieldType: FormFieldType.SELECT,
        });

        expect(screen.getByLabelText('Test Select')).toBeInTheDocument();
    });
});
