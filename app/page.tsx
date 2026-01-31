import Hello from '@/components/hello'
import {fetchRemoteData} from '@/components/fetchRemoteData'

const Home = async () => {
    console.log("Here we are here");
    const data = await fetchRemoteData();

    return (
        <main>
        <div className={"text-5xl underline"}>Node 5000 Development Track - Fullstack </div>
        <Hello/>
            <p>
                {JSON.stringify(data, null, 2)}
            </p>

        </main>
    )
}
export default Home

