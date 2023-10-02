const Banner = ({ handleCards }) => {
    const callHandleCards = () => {
        const searchTextFild = document.getElementById('searchText');
        const searchText = searchTextFild.value;
        handleCards(searchText);
        searchTextFild.value = '';
    }

    return (
        <div className="bg-[url('../src/assets/donation.png')] bg-no-repeat bg-cover bg-center -mt-36">
            <div id="banner-overlay" className="space-y-10 pt-60 lg:pb-52 md:pb-36 pb-20 px-5">
                <h2 className="text-center lg:text-5xl md:text-4xl text-3xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h2>
                <div className="lg:w-[500px] md:w-[450px] max-w-[400px] mx-auto flex">
                    <input
                        id="searchText"
                        className="bg-white border py-4 px-4 text-sm text-[#BBB766] rounded-l-lg outline-none w-3/4"
                        type="text"
                        name="text"
                        placeholder="Search here...."
                    />
                    <button
                        onClick={callHandleCards}
                        className="bg-[#FF444A] py-4 sm:px-7 px-0 font-semibold text-white rounded-r-lg w-1/4"
                    >Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;