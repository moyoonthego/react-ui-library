import React from 'react';
import styled from 'styled-components';
import { Main, MainProps, Responsive, ResponsiveProps } from '@Utils/BaseStyles';
import { __useImplicitProps, useTransition } from '@Utils/Hooks';
import { flex, transition } from '@Utils/Mixins';

export const LabelLayout = ({
    name,
    label,
    description,
    error,
    success,
    children,
    className,
    ...props
}) => {
    const implicitProps = __useImplicitProps(props, [ ...MainProps, ...ResponsiveProps ]);
    const [ ,_error ] = useTransition(error, { end: 250 });
    const layoutProps = {
        description,
        success,
        className
    };

    return (
        <Layout { ...layoutProps } { ...implicitProps }>
            { label && <Label htmlFor={ name }>{ label }</Label> }
            { description && <Info id={`#${ name }-info`}>{ description }</Info> }
            { children }
            <ErrorLabel id={`#${ name }-error`} error={ error }>
                { _error }
            </ErrorLabel>
        </Layout>
    );
}

const Layout = styled.div`
    ${ transition(['opacity']) }
    ${ flex('column') }
    ${ Responsive }
    ${ Main }
`;

const Label = styled.label`
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 5px;
`;

const ErrorLabel = styled(Label)`
    ${ transition(['max-height', 'opacity']) }
    overflow: hidden;
    margin-top: 5px;
    max-height: 0;
    opacity: 0;
    color: red;

    ${({ error }) => error ? `
        max-height: 20px;
        opacity: 1;
    ` : ''}
`;

const Info = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
    opacity: 0.7;
    margin: -5px 0 5px;
`;