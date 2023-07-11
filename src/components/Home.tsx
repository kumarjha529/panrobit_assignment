
import './Home.scss'
import UserItem from '../globalcomponent/UserItem'
import { useContext } from 'react'
import { CreateContext } from '../App'

interface HomeProps {

}

const Home = (props: HomeProps) => {
    const data = useContext(CreateContext);
    console.log(data);
    return (
        <div className='home_page'>
            <div className="card-center">
                <div className="card-header">Select an acount</div>
                <div className='card-body'>
                    {data?.map((item: any) => <UserItem key={item.id} id={item.id} name={item.name} profilepicture={item.profilepicture} />)}
                </div>
            </div>
        </div>
    )
}

export default Home