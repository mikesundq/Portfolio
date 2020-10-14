import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

//CenterButton
export const CenterButton = styled(props => <Link {...props} />)`
    
    text-transform: uppercase;
    background: ${props => props.theme.color.primary5};
    color: ${props => props.theme.color.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${props => props.theme.spacing};
    display: inline-block;
    font-weight: 700;
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.radius};
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;

    &:hover{
    color: ${props => props.theme.color.primary1};
    background: ${props => props.theme.color.primary8};
    }
`


//ContactButton
export const ContactButton = styled(props => <Link {...props} />)`

    text-transform: uppercase;
    background: ${props => props.theme.color.primary5};
    color: ${props => props.theme.color.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${props => props.theme.spacing};
    display: inline-block;
    font-weight: 700;
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.radius};

    &:hover{
        color: ${props => props.theme.color.primary1};
        background: ${props => props.theme.color.primary8};
    }

`

//Button
export const Button = styled(Link)`
    text-transform: uppercase;
    background:${props => props.theme.color.primary5};
    color: ${props => props.theme.color.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${props => props.theme.spacing};
    display: inline-block;
    font-weight: 700;
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.radius};

    &:hover{
        color: ${props => props.theme.color.primary1};
        background: ${props => props.theme.color.primary8};
    }
`