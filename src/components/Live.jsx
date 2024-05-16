import live from '../assets/live.png';
import abrilNueve from '../assets/abrilNueve.jpg';
import abrilVeinticinco from '../assets/abrilVeinticinco.jpg';
export const Live = () => {
    return (
        <>
            <section className="mt-24 flex flex-col items-center">
                <img className="max-w-40 animate-pulse mb-8" src={live} alt="" />
                <img src={abrilNueve} alt="" className='w-3/4'/>
                {/* <iframe className="rounded-lg shadow-[0_0px_10px_-0px_rgba(0,0,0,0.1)] shadow-yellow-500 w-5/6  h-5/6 mb-2" src="https://www.youtube.com/embed/G74W-rdtiGU?si=qhb2sMYRBhHMUb8x" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            </section>
        </>
    )
}
