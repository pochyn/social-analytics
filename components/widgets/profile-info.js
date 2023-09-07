import { UserOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { fetchTiktokProfile } from "@/services/viralhub-api";
import Image from "next/image";

const ProfileInfo = ({ data }) => {
  // This for testing if frontend can access backend
  // useEffect(() => {
  //   console.log("UseEffect")
  //   const response = fetchTiktokProfile(['gordonramsayofficial'])
  //   console.log(response);
  // }, []);
  console.log("**** data", data);

  const authorMeta = data[0]?.authorMeta ?? {};

  return (
    <>
      <div className="grid grid-cols-4 gap-4 sm:grid sm:grid-cols-4 sm:gap-4">
        <div className="bg-blue-200 p-4">
          <div className="mt-3">
            {authorMeta?.avatar ? (
              <img
                src={authorMeta?.avatar}
                alt="User Profile Image"
                style={{
                  borderRadius: "50%",
                  maxHeight: "auto",
                  maxWidth: "100%",
                }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="bg-blue-200 p-4">
          <div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Name:</p> {authorMeta?.name}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Nickname:</p>{" "}
                {authorMeta?.nickName}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Signature: </p>{" "}
                {authorMeta?.signature}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Biolink: </p>{" "}
                {authorMeta?.bioLink ? authorMeta.bioLink : "➖"}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 p-4">
          <div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Fans: </p> {authorMeta?.fans}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Following: </p>{" "}
                {authorMeta?.following}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Total Likes: </p>{" "}
                {authorMeta?.heart}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Videos: </p> {authorMeta?.video}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 p-4">
          <div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Commerce User: </p>{" "}
                {authorMeta?.commerceUser ? "✅" : "❌"}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Private Account: </p>{" "}
                {authorMeta?.privateAccount ? "Private" : "Public"}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Region: </p> {authorMeta?.region}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Verified: </p>{" "}
                {authorMeta?.verified ? "Verified" : "❌"}
              </span>
            </div>
            <div className="mb-3">
              <span>
                <p style={{ color: "grey" }}>Tiktok Seller: </p>{" "}
                {authorMeta?.ttSeller ? "✅" : "❌"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const profileInfo = {
  component: (height, width, itemsLayout, data) => {
    return <ProfileInfo data={data} />;
  },
  key: "profileInfo",
  label: "Profile Info",
  description:
    "User Profile component serves as an encompassing, information-rich dashboard, designed to provide an at-a-glance view of a user's vital statistics.",
  icon: <UserOutlined />,
};

export default profileInfo;
