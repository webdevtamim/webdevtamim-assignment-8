import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardDonate } from "../../utility/localstorage";
import { Link } from 'react-router-dom';

const Donation = () => {
    const donateCards = useLoaderData();

    const [appliedDonation, setAppliedDonation] = useState([]);
    const [showAll, setShowAll] = useState(false);

    console.log(appliedDonation.length);
    if(appliedDonation.length > 4){
        const showAllButton = document.getElementById('showAllButton');
        showAllButton.classList.remove('hidden');
    }

    const seeAllBtn = () => {
        setShowAll(true);
        const cardContainer = document.getElementById('show-all-btn');
        cardContainer.classList.add('hidden');
    }

    useEffect(() => {
        const storedCardIds = getStoredCardDonate();
        if (donateCards.length > 0) {
            const cardsApplied = donateCards.filter(donateCard => storedCardIds.includes(donateCard.id));
            setAppliedDonation(cardsApplied)
        }
    }, [donateCards])

    const visibleDonations = showAll ? appliedDonation : appliedDonation.slice(0, 4);

    return (
        <div className="max-w-[1420px] mx-auto pt-20 pb-36 px-5 grid lg:grid-cols-2 gap-6">
            {
                visibleDonations.map(listDonation => <div
                    key={listDonation.id}
                    style={{ backgroundColor: `${listDonation.bg}` }}
                    className='rounded-lg flex sm:flex-row flex-col'
                >
                    <img className="rounded-lg sm:rounded-none" src={listDonation.pic} alt="" />
                    <div className="p-6 flex items-center">
                        <div className="space-y-2">
                            <span style={{ backgroundColor: `${listDonation.over}`, color: `${listDonation.color}` }} className='text-sm px-3 py-1 rounded'>{listDonation.cate}</span>

                            <h3 className="text-2xl font-semibold text-[#0B0B0B]">{listDonation.title}</h3>

                            <span style={{ color: `${listDonation.color}` }} className={`font-semibold`}>${listDonation.price}.00</span>

                            <div className="sm:pb-0 pb-5 pt-3">
                                <Link to={`/${listDonation.id}`}
                                    style={{ backgroundColor: `${listDonation.color}` }} className='text-white font-semibold text-lg px-4 py-2 rounded'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div id="show-all-btn" className="col-span-2 flex justify-center pt-2">
                <button id="showAllButton" onClick={seeAllBtn} className='hidden text-white bg-green-800 font-medium text-md px-6 py-3 rounded'>See All</button>
            </div>
        </div>
    );
};

export default Donation;