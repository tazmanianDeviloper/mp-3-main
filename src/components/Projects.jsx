import { styled } from 'styled-components';
import PageLayout from './PageLayOut';
import Calculator from './Calculator';

export default function Projects() {
    return (
        <PageLayout headerinfo="Projects" paragraph="My online calculator">
            <Calculator/>
        </PageLayout>
    )
}