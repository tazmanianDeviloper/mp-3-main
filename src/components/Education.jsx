import { styled } from 'styled-components'
import bu from '../images/bu.jpg'
import bxsci from '../images/bxsci.jpg'
import PageLayout from './PageLayout.jsx'

export default function Education() {
    return (
        <PageLayout headerinfo="Education" paragraph="Schools I have attended">
            <h2>Schools I have attended</h2>
                    <h4>Boston University</h4>
                    <img src={bu} width="20%" alt="Boston University" />
                    <p>2021-2025</p>
                    <h4>Bronx High School of Science</h4>
                    <img src={bxsci} width="20%" alt="Bronx Science" />
                    <p>2017-2021</p>
        </PageLayout>
    )
}