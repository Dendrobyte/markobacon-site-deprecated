import { Timeline } from 'react-twitter-widgets';

// Just in case I want to make changages. Also helps to compartmentalize this stuff.
// TODO: Make button only show up when a user is logged in
function SecondaryColumnContent() {
    return (
        <>  
            
            <div className="secondaryColumnHeader">
                <p className="secondaryColumnHeaderText">Tweets @Mobkinz78</p>
            </div>
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