import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import './getStarted.scss'

const GetStarted = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/signup/${query}`)
        }
    };
    return (
        <ContentWrapper>
        <div className="heroBannerContent">
            <span className="subTitle">
            Ready to watch? Enter your email to create or restart your membership...
            </span>
            <div className="searchInput">
                <input
                    type="text"
                    placeholder="'Please enter email.....'"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                />
                <button onClick={searchQueryHandler}>Get Started</button>
            </div>
        </div>
    </ContentWrapper>
    )
}

export default GetStarted

