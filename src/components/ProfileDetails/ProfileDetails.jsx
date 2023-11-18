import "./ProfileDetails.scss";
import userImage from '../assets/cut photo ravi cv.jpg';

const ProfileDetails = () => {
    return (
        <div className="ProfileDetails">
            <div className="profile-status">
                <div className="profilepic">
                    <img src={userImage} alt="user-profile" />
                </div>
                <div className="details">
                    <div className="name">
                        <h2>Ravikant Kumar</h2> 
                        <i className="verify-icon fa-solid fa-check"></i>
                        <i className = "gem-icon  fa-regular fa-gem"></i>
                    </div>
                    <div className="stats">
                        <div className="followers">
                            <a href="/">56987</a>
                            <p>Followers</p>
                        </div>
                        <div className="following">
                            <a href="/">1</a>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-bio">
                <p>Co-founder & CEO at Terribly Tiny Tales</p>
                <a href="https://www.linkedin.com/in/ravi-s1916/">https://www.linkedin.com/in/ravi-s1916/</a>
                <div className="icons">
                    {/* font awesome icons */}
                    <div className="ico">
                        <i className="star fa-regular fa-star"> </i> 25424
                    </div>

                    <div className="ico">
                        <i className="like fa-regular fa-thumbs-up"> </i> 56987
                    </div>

                    <div className="ico">
                        <i className="eye fa-regular fa-eye"></i>  124.8 k
                    </div>

                    <div className="ico">
                        <i className="heart fa-regular fa-heart"> </i> 755 k
                    </div>

                </div>
            </div>


        </div>
    )
}

export default ProfileDetails;