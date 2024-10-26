import { styled } from 'styled-components';
import PageLayout from './PageLayOut.jsx';
import Calculator from './Calculator';

export default function Projects() {
    return (
        <PageLayout headerinfo="Projects" paragraph="My online calculator">
            <Calculator/>
        </PageLayout>
    )
}