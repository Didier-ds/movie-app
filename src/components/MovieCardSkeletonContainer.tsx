import MovieCardSkeleton from "./Skeleton/MovieSkeleton.tsx"

import Chance from 'chance';

// Instantiate Chance so it can be used
const chance = new Chance();

const MovieCardSkeletonContainer = () => {
    const nums = chance.unique(chance.natural, 8, {min: 1, max: 100})

    return (
        <>
            <div className='mx-auto py-10'>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10'>
                    {/*(number: number) => return Math.floor(Math.random() * (number + 1))*/}
                    {[...nums].map((index: any) => (
                        <MovieCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}


export default MovieCardSkeletonContainer