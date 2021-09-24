import { Timeline } from 'react-twitter-widgets';

// Just in case I want to make changages. Also helps to compartmentalize this stuff.
function SecondaryColumnContent() {
    return (
        <>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'Mobkinz78'
                }}
                options={{
                    height: '800',
                    theme: 'dark'
                }}
            />
            <hr></hr>
        </>
    )
}

export default SecondaryColumnContent;