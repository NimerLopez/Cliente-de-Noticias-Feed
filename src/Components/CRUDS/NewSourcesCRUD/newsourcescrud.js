import './newsourcescrud.css';

function Newsourcescrud() {
    return (
        <div className="sources-box">
            <h2>News Sources</h2>
            <table class="sources-table">
                <tr className="menu">
                    <th id="strong">Name</th>
                    <th>Category</th>
                    <th id="strong">Actions</th>
                </tr>
                <tr>
                    <td>CRHoy</td>
                    <td>Deportes</td>
                    <td id="edit">Edit|Delete</td>
                </tr>
                <tr>
                    <td>Nacion</td>
                    <td>Farandula</td>
                    <td id="edit">Edit|Delete</td>
                </tr>
                <tr>
                    <td>CNN</td>
                    <td>Sucesos</td>
                    <td id="edit">Edit|Delete</td>
                </tr>
            </table>

            <div className="add-button-crudlink">
                    <input type="submit" name="A3" value="Add New"></input>
                </div>
        </div>
    );
}

export default Newsourcescrud;