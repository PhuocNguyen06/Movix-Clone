import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './getStarted.scss'

const GetStarted = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const sendEmailAndNavigate = async () => {
        if (query.length > 0) {
            try {
                // Assuming you have a server endpoint for sending emails
                await axios.post('/api/send-email', { email: query });

                // If the email is sent successfully, navigate to a new page
                navigate(`/success-page`);
            } catch (error) {
                console.error('Error sending email:', error);
                // Handle error, maybe show an error message to the user
            }
        }
    };

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            sendEmailAndNavigate();
        }
    };
    return (
        <div className="container">
            <h2 className="title">Ready to watch? Enter your email to create or restart your membership.</h2>
            <div className="content">
                <input type="text"
                    placeholder='Please enter email.....'
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                    />
                <button
                onClick={sendEmailAndNavigate}
                >Get Started</button>
            </div>
        </div>
    )
}

export default GetStarted

