import { styled } from 'styled-components'
import PageLayout from './PageLayout.jsx'
import me from '../images/me.jpg'


export default function Home() {
    return (
        <PageLayout headerinfo="Sean Lin" paragraph="My online resume">
            <h2>Home</h2>
            <img src={me} style={{width: "20%"}} alt="Sean" />
            <p>Welcome to my page! My name is Sean and I am a senior studying computer science. I am graduating next spring and in my free time I love to watch and play tennis and badminton!</p>
        </PageLayout>
    )
}