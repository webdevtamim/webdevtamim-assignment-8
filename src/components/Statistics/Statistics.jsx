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
            <PieChart width={1000} height={window.innerHeight}>
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
                {/* <Tooltip
                    contentStyle={{ backgroundColor: '#FFF', border: '1px solid #888' }} // Customize the tooltip's background and border
                    labelStyle={{ fontWeight: 'bold' }} // Customize the label style
                    formatter={(value, name) => [`${name}: ${value.toFixed(2)}%`, `Total: ${totalValue.toFixed(2)}`]} // Customize the tooltip content
                /> */}
                <Legend
                    wrapperStyle={{ padding: '0px', bottom: '100px' }}
                    align="center" // Adjust the alignment of legend items (left, center, right)
                    verticalAlign="bottom" // Adjust the vertical alignment (top, middle, bottom)
                    iconSize={70} // Customize the size of legend icons
                    iconType="plainline" // Use a different icon type (e.g., 'circle', 'diamond', 'triangle')
                    formatter={(value) => `${value}`} // Customize the legend item text
                />
            </PieChart>
        </div>
    );
};

export default Statistics;