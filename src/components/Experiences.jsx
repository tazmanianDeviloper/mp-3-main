import { styled } from 'styled-components'
import PageLayout from './PageLayout.jsx'


export default function Experiences() {
    return (
        <PageLayout headerinfo="Experiences" paragraph="Jobs I have held at BU">
             <h2>Past work experience</h2>
                <br/>
                <hr/>
                <h4>Teaching Assistant @ BU</h4>
                <p>Currently I am a teaching assistant for CS412 (Full-stack Web Development).</p>
                <hr/>
                <h4>Course Assistant @ BU</h4>
                <p>I was previously a course assistant for 4 semesters for CS111 (Intro to Python) and CS237 (Randomness in Computing).</p>
                <hr/>
                <h4>Office Assistant @ BU</h4>
                <p>During my first year, I was a office assistant for the budget and planning office.</p>
                <hr/>
        </PageLayout>
    )
}