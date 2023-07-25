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
      <div className="grid grid-cols-4 gap-4 sm:grid sm:grid-cols-4 sm:gap-4">
        <div className="bg-blue-200 p-4">
          <div className="mt-3">
            <img 
              src="https://hips.hearstapps.com/hmg-prod/images/gordon-ramsay-646367718a5f4.jpg?crop=1xw:1xh;center,top&resize=980:*"
              alt="User Profile Image"
              style={{borderRadius: "50%", maxHeight: "auto", maxWidth: "100%"}}
              ></img>
          </div>
        </div>
        <div className="bg-blue-200 p-4">
          <div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Name:</p>  {props.name}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Nickname:</p>  {props.nickName}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Signature: </p> {props.nickName}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Biolink: </p>  {props.bioLink}</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 p-4">
          <div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Fans: </p> {props.fans}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Following: </p> {props.following}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Total Likes: </p> {props.heart}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Videos: </p> {props.video}</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 p-4">
        <div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Commerce User: </p> {props.commerceUser}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Private Account: </p> {props.privateAccount}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Region: </p> {props.region}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Verified: </p> {props.verified}</span>
            </div>
            <div className="mb-3">
              <span><p style={{color: 'grey'}}>Tiktok Seller: </p> {props.ttSeller}</span>
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
