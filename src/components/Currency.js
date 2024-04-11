import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
                type: "CHG_CURRENCY",
                payload: event.target.value
            }
        )
    }
    return (
                <div style={{backgroundColor:"rgb(50, 205, 50)"}}className='alert alert-secondary'>
                        <span>Currency: </span>
                        <select style={{backgroundColor: "rgb(144, 238, 144)"}}name="Currency" onChange={handleCurrencyChange}>
                            <option value="$">$Dollar</option>
                            <option value="£">£Pound</option>
                            <option value="€">€Euro</option>
                            <option value="₹">₹Reppee</option>
                        </select>

                </div>
    );
};

export default Currency;