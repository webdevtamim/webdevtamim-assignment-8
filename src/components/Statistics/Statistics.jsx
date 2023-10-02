import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCardDonate } from '../../utility/localstorage';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';


const Statistics = () => {

    const donateCards = useLoaderData();

    const [appliedDonation, setAppliedDonation] = useState([]);


    useEffect(() => {
        const storedCardIds = getStoredCardDonate();
        if (donateCards.length > 0) {
            const cardsApplied = donateCards.filter(donateCard => storedCardIds.includes(donateCard.id))
            setAppliedDonation(cardsApplied);
        }
    }, [])

    const donateCardsLength = donateCards.length;
    const appliedDonationLength = appliedDonation.length;

    const data = [
        { name: 'Total Donation', value: donateCardsLength - appliedDonationLength },
        { name: 'Your Donation', value: appliedDonationLength },
    ];

    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

const dataWithPercentages = data.map(entry => ({
    name: entry.name,
    value: (entry.value / totalValue) * 100,
}));

    const colors = ['#FF444A', '#00C49F'];

    return (
        <div style={{ height: '', margin: 0, padding: 0 }} className='grid justify-center'>
            <PieChart width={500} height={window.innerHeight}>
                <Pie
                    data={dataWithPercentages}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={170}
                    fill="#8884d8"
                    label={({ value }) => `${(Math.trunc(value))}%`}
                >
                    {dataWithPercentages.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;