import { useState } from 'react';
import Banner from '../Banner/Banner';
import Cards from '../cards/cards';

const Home = () => {
    const [searchText, setSearchText] = useState('');

    const handleCards = getSearchText => {
        setSearchText(getSearchText);
    }

    return (
        <div>
            <Banner handleCards={handleCards}></Banner>
            <Cards searchText={searchText}></Cards>
        </div>
    );
};

export default Home;