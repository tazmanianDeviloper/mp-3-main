import PageLayout from './PageLayout.jsx'
import dl from '../images/dl.jfif'
export default function Achievements() {
    return (
        <PageLayout headerinfo="Achievements" paragraph="Awards received">
            <h2>Dean&#39;s List</h2>
            <img src={dl} width="20%" alt="Dean's List" />
            <p>I was awarded the dean&#39;s list for multiple semesters at BU.</p>
        </PageLayout>
    )
}

