import Hello from '@/components/hello'

const Home = () => {
    console.log("Here we are here");

    return (
        <main>
        <div className={"text-5xl underline"}>Node 5000 Development Track - Fullstack </div>
        <Hello/>
        </main>
    )
}
export default Home

