import "../css/Success.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Success = () => {
    return (
        <div className="success">
            <h1>
                We received your message.
                <br />
                We'll get back to you as soon as we can.
                <br />
            </h1>
            <AiFillCheckCircle />
        </div>
    )
};

export default Success;