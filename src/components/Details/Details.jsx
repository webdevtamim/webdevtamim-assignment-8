import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveCardDonate } from "../../utility/localstorage";

const Details = () => {
    const cardsDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const cardDetails = cardsDetails.find(details => details.id == idInt);
    const { color, pic, price, title, desc } = cardDetails;

    const handleTostify = () => {
        saveCardDonate(idInt);

        toast('Your kindness shines through! Your donation will make a meaningful difference in the lives of those in need. Thank you for your generosity and compassion.')
    }

    return (
        <div>
            <div className="card card-compact max-w-[1400px] mx-auto px-5 md:pt-20 pt-14 md:pb-28 pb-20">
                <figure className="flex-col">
                    <img className="w-full h-auto max-h-[900px] brightness-90 z-10 rounded-3xl" src={pic} alt="card details" />

                    <div className="-mt-32 md:p-8 p-5 bg-[#0b0b0b80] w-full flex items-center z-20 rounded-b-3xl">
                        <button onClick={handleTostify} style={{backgroundColor: `${color}`}} className='md:text-xl text-lg font-semibold text-white py-4 md:px-7 px-5 rounded hover:scale-x-105 duration-100'>Donate ${price}</button>
                    </div>
                </figure>
                <div className="px-0">
                    <h2 className="md:text-4xl text-2xl font-bold text-[#0B0B0B] md:pt-14 pt-10 pb-6">{title}</h2>
                    <p className="text-[#0b0b0bcc] leading-7 font-medium md:text-lg">{desc}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;