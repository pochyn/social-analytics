"use client";
import { useState } from "react";
import { Alert } from "antd";
import React from "react";

const UsernameSearch = ({
  shouldFetch,
  username,
  handleUsernameInputChange,
  handleTiktokUserProfileSubmission,
}) => {
  const [validationError, setValidationError] = useState("");

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
            {validationError.length > 0 && (
              <Alert
                message={validationError}
                type="error"
                closable
                onClose={onClose}
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-start space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            <input
              type="text"
              id="hs-leading-icon"
              name="hs-leading-icon"
              className="pl-2 pt-2 pb-2 block border shadow-sm text-sm focus:z-10 focus:border-secondary focus:ring-secondary dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="@username"
              value={username}
              onChange={(event) =>
                handleUsernameInputChange(event.target.value)
              }
            ></input>
            <button
              rel="noopener noreferrer"
              onClick={handleTiktokUserProfileSubmission}
              disabled={shouldFetch}
              className="px-6 sm:px-8 py-2 text-sm sm:text-md text-white font-semibold bg-secondary border dark:border-gray-100 disabled:opacity-75"
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
