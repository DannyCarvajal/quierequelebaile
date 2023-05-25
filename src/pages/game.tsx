// Hooks
import { useDanceSteps } from "@hooks";

const GamePage = () => { 

    /* Initialize state */
    const { danceSteps } = useDanceSteps();
    console.log({danceSteps})

    return (
        <div className='flex justify-center'>
            Game page
        </div>
    )
}

export default GamePage;