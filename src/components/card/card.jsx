import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id, cover, title, cate, bg, color, over} = card;
    return (
        <Link to={`${id}`} style={{backgroundColor: `${bg}`}} className='card card-compact cursor-pointer hover:shadow'>
            <figure><img className="w-full" src={cover} alt="Card Image" /></figure>
            <div style={{color: `${color}`}} className='card-body'>
                <div><span style={{backgroundColor: `${over}`}} className='py-1 px-3 rounded font-medium'>{cate}</span></div>
                <h2 className="card-title">{title}</h2>
            </div>
        </Link>
    );
};

export default Card;