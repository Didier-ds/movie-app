import BgImage from "../assets/image/bg-image.png"
import Container from "../components/Container.tsx";
import IMDB from "../components/icons/IMDB.tsx";
import Tomato from "../components/icons/Tomato.tsx";
import Play from "../assets/image/Play.png"
import Header from "../components/Header.tsx";
import MovieContainer from "../components/MovieContainer.tsx";


export default function Example() {
    return (
        <div className="">
            <Header/>
            <div className="relative isolate overflow-hidden pt-14">
                <img
                    src={BgImage}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <Container>
                    <div className="max-w-2xl py-32 sm:py-48 lg:py-56">
                        <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            John Wick 3 : Parabellum
                        </h1>

                        <div className="flex mt-4 gap-10">
                            <div className="text-white flex gap-2 items-center">
                                <IMDB/>
                                86.0 / 100
                            </div>
                            <div className="text-white flex gap-2 items-center">
                                <Tomato/>
                                97%
                            </div>
                        </div>

                        <p className="mt-6 text-lg leading-8 text-white">
                            John Wick is on the run after killing a member of the international assassins' guild, and
                            with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                        </p>

                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md flex items-center gap-2 bg-rose p-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <img src={Play} className="w-5 h-5" alt="play"/>
                                Watch Trailer
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
            <MovieContainer/>
        </div>
    )
}
