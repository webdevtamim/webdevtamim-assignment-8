import { useEffect, useState } from "react";
import Card from "../card/card";

const Cards = ({ searchText }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(card => card.cate.toLowerCase().includes(searchText.toLowerCase()));
                setCards(filteredData);
            });
    }, [searchText])

    return (
        <div>
            {cards.length !== 0 && (
                <div id="card-container" className="md:pt-24 pt-20 xl:pb-44 lg:pb-32 md:pb-24 pb-20 md:space-y-0 space-y-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-[1420px] mx-auto px-5">
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
            )}
            {cards.length === 0 && (
                <div id="no-content-message" className="text-center pt-20 pb-40 max-w-[430px] mx-auto">
                    <p className="sm:text-3xl text-xl font-bold text-color3">Oops!! Sorry, There is no content here</p>
                </div>
            )}
        </div>
    );
};

export default Cards;