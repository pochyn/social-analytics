import { useState } from "react";
import { Alert, Space } from 'antd';
import React from 'react';
import { fetchTiktokProfile } from "@/services/viralhub-api";

const UsernameSearch = () => {
    const [usernameInput, setUsernameInput] = useState("");
    const [validationError, setValidationError] = useState("");
    const [serverErrorMessage, setServerErrorMessage] = useState("");

    const handleInputChange = (e) => {
        setUsernameInput(e.target.value);
    }

    const handleUsernameSearchClick = async () => {
        if(usernameInput.length === 0) {
            setValidationError("Username cannot be empty")
            return;
        }
        let profiles = [];
        profiles.push(usernameInput);
        const userProfileData = await fetchTiktokProfile(profiles);
        console.log("From search comp: ", userProfileData);

        // create a data store file
        // update the user profile state of the file
        // consumers will be updated once the state is updated
    }

    const onClose = (e) => {
        setValidationError("");
    };

    return (
        <>
        <div className="mb-4 sm:mb-0">
            <span className="text-secondary font-bold text-2xl">01</span>
            <div className="mb-2 text-sm sm:text-md font-semibold text-primary">
                Enter Tik-Tok @username you want to analyze.
            </div>
            <div>
                <div className="flex flex-col items-center mb-3 justify-start space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                {validationError.length > 0 && <Alert
                    message={validationError}
                    type="error"
                    closable
                    onClose={onClose}
                /> }
                </div>
                <div className="flex flex-col items-center justify-start space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <input
                    type="text"
                    id="hs-leading-icon"
                    name="hs-leading-icon"
                    className="pl-2 pt-2 pb-2 block border shadow-sm text-sm focus:z-10 focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="@username"
                    value={usernameInput}
                    onChange={(e) => handleInputChange(e)}
                    ></input>
                    <button
                    rel="noopener noreferrer"
                    onClick={handleUsernameSearchClick}
                    className="px-6 sm:px-8 py-2 text-sm sm:text-md text-white font-semibold bg-secondary border dark:border-gray-100"
                    >
                    Search
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default UsernameSearch;
