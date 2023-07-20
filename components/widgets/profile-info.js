import { UserOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { fetchTiktokProfile } from "@/services/viralhub-api";

const ProfileInfo = (props) => {

  // This for testing if frontend can access backend
  // useEffect(() => {
  //   console.log("UseEffect")
  //   const response = fetchTiktokProfile(['gordonramsayofficial'])
  //   console.log(response);
  // }, []);

  return(
    <>
      <div className="grid grid-cols-3 gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
        <div className="bg-blue-200 p-4">
          <div className="inline-flex flex-row">
            <h1 className="ml-3">Profile: {props.nickName}</h1>
          </div>
          <div className="mt-3">
            <img 
              src="https://hips.hearstapps.com/hmg-prod/images/gordon-ramsay-646367718a5f4.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="User Profile Image"
              style={{borderRadius: "50%"}}
              ></img>
          </div>
        </div>
        <div className="bg-blue-200 p-4">
          <div>
            <div className="mb-3">
              <span>Fans: {props.fans}</span>
            </div>
            <div className="mb-3">
              <span>Following: {props.following}</span>
            </div>
            <div className="mb-3">
              <span>Total Likes: {props.heart}</span>
            </div>
            <div className="mb-3">
              <span>Videos: {props.video}</span>
            </div>
            <div className="mb-3">
              <span>Signature: {props.signature}</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 p-4">
        <div>
            <div className="mb-3">
              <span>Biolink:  {props.bioLink}</span>
            </div>
            <div className="mb-3">
              <span>Commerce User:  {props.commerceUser}</span>
            </div>
            <div className="mb-3">
              <span>Private Account: {props.privateAccount}</span>
            </div>
            <div className="mb-3">
              <span>Region: {props.region}</span>
            </div>
            <div className="mb-3">
              <span>Verified: {props.verified}</span>
            </div>
            <div className="mb-3">
              <span>Tiktok Seller: {props.ttSeller}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

const profileInfo = {
  component: () => {
    return <ProfileInfo />;
  },
  key: "profileInfo",
  label: "Profile Info",
  description:
    "User Profile component serves as an encompassing, information-rich dashboard, designed to provide an at-a-glance view of a user's vital statistics.",
  icon: <UserOutlined />,
};

export default profileInfo;
