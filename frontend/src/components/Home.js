import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="table-responsive">
                <div className='btn btn-primary'>
                    <Link className='nav-link' to="/add">Add</Link>
                </div>
                <table
                    class="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Column 1</th>
                            <th scope="col">Column 2</th>
                            <th scope="col">Column 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <td scope="row">R1C1</td>
                            <td>R1C2</td>
                            <td>R1C3</td>
                        </tr>
                        <tr class="">
                            <td scope="row">Item</td>
                            <td>Item</td>
                            <td>Item</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Home;