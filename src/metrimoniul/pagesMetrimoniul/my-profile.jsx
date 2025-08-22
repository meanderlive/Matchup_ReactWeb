import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../component/layout/pageheader";

import ActiveMember from "../component/sidebar/member";
import FooterFour from "../component/layout/footerFour";
import userMale from "../../dating/assets/images/myCollection/user-male.jpg";

// male img
import imgmale1 from "../assets/images/member/male/02.jpg";
import imgmale2 from "../assets/images/member/male/03.jpg";
import imgmale4 from "../assets/images/member/male/05.jpg";

//female img
import imgfemale3 from "../assets/images/member/female/03.jpg";
import imgfemale5 from "../assets/images/member/female/05.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfileAsync,
  uploadProfilePictureAsync,
} from "../../dating/store/slice/profileSlice";
import ActivityPage from "../../pages/activity";
import ShowPhotoViewerModal from "../../dating/component/popUps/photoAlbum";
import moment from "moment";
import ShareMyProfile from "../component/layout/my-profile/ShareMyProfile";
import HeaderFour from "../component/layout/HeaderFour";
import Lodder from "../component/layout/Lodder";
import { USER_ID_LOGGEDIN } from "../../utils";
const activety = "Online";

let MideaAll = [
  {
    id: 1,
    imgUrl: imgmale1,
    imgAlt: "Dating Thumb",
  },
  {
    id: 2,
    imgUrl: imgmale2,
    imgAlt: "Dating Thumb",
  },
  {
    id: 3,
    imgUrl: imgmale4,
    imgAlt: "Dating Thumb",
  },
  {
    id: 4,
    imgUrl: imgfemale3,
    imgAlt: "Dating Thumb",
  },
  {
    id: 5,
    imgUrl: imgfemale5,
    imgAlt: "Dating Thumb",
  },
  {
    id: 6,
    imgUrl: imgmale2,
    imgAlt: "Dating Thumb",
  },
  {
    id: 7,
    imgUrl: imgfemale5,
    imgAlt: "Dating Thumb",
  },
  {
    id: 8,
    imgUrl: imgfemale5,
    imgAlt: "Dating Thumb",
  },
  {
    id: 9,
    imgUrl: imgfemale5,
    imgAlt: "Dating Thumb",
  },
];

const MyProfile = () => {
  const uploading = useSelector((state) => state.profile.uploading);
  const profileData = useSelector((state) => state.profile.userData);
  const [showInstallApp, setShowInstallApp] = useState(false);
  const [force, forceUpdate] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const userID = USER_ID_LOGGEDIN;

  const handleImageClickOpenModal = (image) => {
    setSelectedImage(image);
    setShowPhoto(true);
  };

  const user = useSelector((state) => state.userCreate.user);

  const dispatch = useDispatch();

  let User;
  if (user?.data) {
    User = user.data;
  } else {
    User = profileData?.[0];
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(
        uploadProfilePictureAsync({ imageData: file, userId: userID })
      ).then(() => {
        forceUpdate(!force);
      });
    }
  };

  useEffect(() => {
    dispatch(getUserProfileAsync(userID));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [force, dispatch, userID]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowInstallApp(true);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Fragment>
      <HeaderFour />
      {loading ? (
        <Lodder />
      ) : (
        <div>
          <PageHeader />
          <div className="group group--single padding-bottom">
            <div className="group__top">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 d-none d-xl-block"></div>
                  <div className="col-xl-9">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="gt1-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#gt1"
                          type="button"
                          role="tab"
                          aria-controls="gt1"
                          aria-selected="true"
                        >
                          <i className="fa-solid fa-user"></i> About{" "}
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="gt2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#gt2"
                          type="button"
                          role="tab"
                          aria-controls="gt2"
                          aria-selected="true"
                        >
                          <i className="fa-solid fa-user"></i> Edu. & Career{" "}
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="gt6-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#gt6"
                          type="button"
                          role="tab"
                          aria-controls="gt6"
                          aria-selected="true"
                        >
                          <i className="fa-solid fa-user"></i> Family{" "}
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="gt3-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#gt3"
                          type="button"
                          role="tab"
                          aria-controls="gt3"
                          aria-selected="false"
                        >
                          <i className="fa-solid fa-photo-film"></i> Media{" "}
                        </button>
                      </li>

                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="gt4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#gt4"
                          type="button"
                          role="tab"
                          aria-controls="gt4"
                          aria-selected="false"
                        >
                          <i class="fa fa-sticky-note" aria-hidden="true"></i>{" "}
                          Activity{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link "
                          id="gt5-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#gt5"
                          type="button"
                          role="tab"
                          aria-controls="gt5"
                          aria-selected="false"
                        >
                          <i class="fa-solid fa-share-nodes"></i> Share profile{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="group__bottom">
              <div className="container">
                <div className="row g-4">
                  <div className="col-xl-6 order-xl-1">
                    <div className="group__bottom--left">
                      <div className="tab-content" id="myTabContent">
                        {/* ----------basic info start---------- */}
                        {/* -----------tab no 1----------- */}
                        <div
                          className="tab-pane fade show active "
                          id="gt1"
                          role="tabpanel"
                          aria-labelledby="gt1-tab"
                        >
                          <div className="info">
                            <div className="info-card mb-4">
                              <div className="info-card-title">
                                <h6>
                                  About{" "}
                                  <span>
                                    <Link
                                      to="/metrimonial/manage-profile"
                                      style={{
                                        float: "right",
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Edit
                                    </Link>
                                  </span>{" "}
                                </h6>
                              </div>

                              <div className="info-card-content">
                                <p>{User?.description || ""}</p>
                              </div>
                            </div>

                            <div className="info-card mb-4">
                              <div className="info-card-title">
                                <h6>
                                  Basic Details{" "}
                                  <span>
                                    <Link
                                      to="/metrimonial/manage-profile"
                                      style={{
                                        float: "right",
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Edit
                                    </Link>
                                  </span>{" "}
                                </h6>
                              </div>

                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Name</p>
                                    <p className="info-details">
                                      {User?.name || ""}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Date of Birth</p>
                                    <p className="info-details">
                                      {moment(User?.dob).format("DD/MM/YYYY")}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Gender</p>
                                    <p className="info-details">
                                      {User?.iAm === "Male"
                                        ? "Man"
                                        : "Woman" || ""}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Marital Status</p>
                                    <p className="info-details">
                                      {User?.marital || ""}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="info-card mb-4">
                              <div className="info-card-title">
                                <h6>
                                  Contact Details{" "}
                                  <span>
                                    <Link
                                      to="/metrimonial/manage-profile"
                                      style={{
                                        float: "right",
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Edit
                                    </Link>
                                  </span>
                                </h6>
                              </div>
                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Email</p>
                                    <p className="info-details">
                                      {User?.email || ""}
                                    </p>
                                  </li>

                                  <li>
                                    <p className="info-name">Phone</p>
                                    <p className="info-details">
                                      {User?.phoneNumber || ""}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="info-card">
                              <div className="info-card-title">
                                <h6>
                                  Personal Details{" "}
                                  <span>
                                    <Link
                                      to="/metrimonial/manage-profile"
                                      style={{
                                        float: "right",
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Edit
                                    </Link>
                                  </span>
                                </h6>
                              </div>
                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Religion</p>
                                    <p className="info-details">
                                      {User?.Religion || ""}
                                    </p>
                                  </li>

                                  <li>
                                    <p className="info-name">Caste</p>
                                    <p className="info-details">
                                      {User?.Caste || ""}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Height</p>
                                    <p className="info-details">
                                      {User?.Height || ""}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Birth Place</p>
                                    <p className="info-details">
                                      {User?.birthPlace || ""}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Diet</p>
                                    <p className="info-details">
                                      {User?.DietPreferences || ""}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* -----------basic info end------------ */}

                        {/* ----------career & education start------------ */}
                        {/* -----------tab no 2----------- */}
                        <div
                          className="tab-pane fade show"
                          id="gt2"
                          role="tabpanel"
                          aria-labelledby="gt2-tab"
                        >
                          <div className="info">
                            <div className="info-card mb-4">
                              <div className="info-card-title">
                                <h6>
                                  Career & Education{" "}
                                  <span>
                                    <Link
                                      to="/metrimonial/manage-profile-Edu&career"
                                      style={{
                                        float: "right",
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Edit
                                    </Link>
                                  </span>{" "}
                                </h6>
                              </div>

                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Profession</p>
                                    <p className="info-details">
                                      {User?.occupation || ""}
                                    </p>
                                  </li>
                                  {/* <li>
                                    <p className="info-name">Company Name</p>
                                    <p className="info-details">
                                      {User?.companyName || ""}
                                    </p>
                                  </li> */}
                                  <li>
                                    <p className="info-name">Anual Income</p>
                                    <p className="info-details">
                                      {User?.salary || ""}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">
                                      Highest Qualification
                                    </p>
                                    <p className="info-details">
                                      {User?.education || ""}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Education</p>
                                    <p className="info-details">
                                      {User?.education || ""}
                                    </p>
                                  </li>
                                  {/* <li>
                                    <p className="info-name">university</p>
                                    <p className="info-details">
                                      {User?.univercity || ""}
                                    </p>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------career & education end------------ */}

                        {/* ----------Family details start------------ */}
                        {/* -----------tab no 6----------- */}
                        <div
                          className="tab-pane fade show  "
                          id="gt6"
                          role="tabpanel"
                          aria-labelledby="gt6-tab"
                        >
                          <div className="info">
                            <div className="info-card mb-4">
                              <div className="info-card-title">
                                <h6>
                                  Family Details{" "}
                                  <span>
                                    <Link
                                      to="/metrimonial/manage-profile-family"
                                      style={{
                                        float: "right",
                                      }}
                                    >
                                      <i
                                        class="fa fa-pencil"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Edit
                                    </Link>
                                  </span>{" "}
                                </h6>
                              </div>

                              <div className="info-card-content">
                                <ul className="info-list">
                                  <li>
                                    <p className="info-name">Family Status</p>
                                    <p className="info-details">
                                      {User?.familyStatus}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Father’s Name</p>
                                    <p className="info-details">
                                      {User?.FathersName}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Father’s Status</p>
                                    <p className="info-details">
                                      {User?.FathersStatus}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Mother’s Name</p>
                                    <p className="info-details">
                                      {User?.MothersName}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Mother’s Status</p>
                                    <p className="info-details">
                                      {User?.MothersStatus}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">No of Brother</p>
                                    <p className="info-details">
                                      {User?.NumberOfBrother}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Married</p>
                                    <p className="info-details">
                                      {User?.NoOfMarriedBrother}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">No. of Sister</p>
                                    <p className="info-details">
                                      {User?.NumberOfSister}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Married</p>
                                    <p className="info-details">
                                      {User?.NoOfMarriedSister}
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ----------Family details end------------ */}

                        <div
                          className="tab-pane fade show "
                          id="gt3"
                          role="tabpanel"
                          aria-labelledby="gt3-tab"
                        >
                          <div className="group__bottom--body bg-white">
                            <div className="group__bottom--allmedia">
                              <div className="media-wrapper">
                                <ul
                                  className="nav nav-tabs"
                                  id="myTab3"
                                  role="tablist"
                                >
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link active"
                                      id="all-media-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#all-media"
                                      type="button"
                                      role="tab"
                                      aria-controls="all-media"
                                      aria-selected="true"
                                    >
                                      <i className="fa-solid fa-table-cells-large"></i>{" "}
                                      All <span>12</span>
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="album-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#album"
                                      type="button"
                                      role="tab"
                                      aria-controls="album"
                                      aria-selected="false"
                                    >
                                      <i className="fa-solid fa-camera"></i>{" "}
                                      Albums <span>4</span>
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="photos-media-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#photos-media"
                                      type="button"
                                      role="tab"
                                      aria-controls="photos-media"
                                      aria-selected="false"
                                    >
                                      <i className="fa-solid fa-image"></i>{" "}
                                      Photos <span>4</span>
                                    </button>
                                  </li>
                                </ul>

                                <div className="tab-content" id="myTabContent3">
                                  {/* midea all images show on modal  */}
                                  <div
                                    className="tab-pane fade show active"
                                    id="all-media"
                                    role="tabpanel"
                                    aria-labelledby="all-media-tab"
                                  >
                                    <div className="media-content">
                                      <ul className="media-upload">
                                        <li className="upload-now">
                                          <div className="custom-upload">
                                            <div className="file-btn">
                                              <i className="fa-solid fa-upload"></i>{" "}
                                              Upload
                                            </div>
                                            <input type="file" />
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                        <ShowPhotoViewerModal
                                          showModal={showPhoto}
                                          hideModal={() => setShowPhoto(false)}
                                          selectedImage={selectedImage}
                                        />
                                        {MideaAll.map((item) => (
                                          <div
                                            className="col"
                                            key={item.id}
                                            onClick={() =>
                                              handleImageClickOpenModal(item)
                                            }
                                          >
                                            <div className="media-thumb video-thumb pointer">
                                              <img
                                                src={item.imgUrl}
                                                alt={item.imgAlt}
                                              />
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="text-center mt-5">
                                        <a href="#" className="default-btn">
                                          <i className="fa-solid fa-spinner"></i>{" "}
                                          Load More
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  {/* midea album images show on modal */}
                                  <div
                                    className="tab-pane fade"
                                    id="album"
                                    role="tabpanel"
                                    aria-labelledby="album-tab"
                                  >
                                    <div className="media-content">
                                      <ul className="media-upload">
                                        <li className="upload-now">
                                          <div className="custom-upload">
                                            <div className="file-btn">
                                              <i className="fa-solid fa-upload"></i>{" "}
                                              Upload
                                            </div>
                                            <input type="file" />
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                        <div className="col">
                                          <div className="media-thumb albam-thumb">
                                            <img
                                              src="../assets/images/allmedia/02.jpg"
                                              alt="dating thumb"
                                            />
                                            <a
                                              href="../assets/images/allmedia/02.jpg"
                                              target="_blank"
                                              className="icon"
                                            >
                                              <i className="fa-solid fa-camera"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="media-thumb albam-thumb">
                                            <img
                                              src="../assets/images/allmedia/06.jpg"
                                              alt="dating thumb"
                                            />
                                            <a
                                              href="../assets/images/allmedia/06.jpg"
                                              target="_blank"
                                              className="icon"
                                            >
                                              <i className="fa-solid fa-camera"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="media-thumb albam-thumb">
                                            <img
                                              src="../assets/images/allmedia/10.jpg"
                                              alt="dating thumb"
                                            />
                                            <a
                                              href="../assets/images/allmedia/10.jpg"
                                              target="_blank"
                                              className="icon"
                                            >
                                              <i className="fa-solid fa-camera"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div className="media-thumb albam-thumb">
                                            <img
                                              src="../assets/images/allmedia/12.jpg"
                                              alt="dating thumb"
                                            />
                                            <a
                                              href="../assets/images/allmedia/12.jpg"
                                              target="_blank"
                                              className="icon"
                                            >
                                              <i className="fa-solid fa-camera"></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="text-center mt-5">
                                        <a href="#" className="default-btn">
                                          <i className="fa-solid fa-spinner"></i>{" "}
                                          Load More
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  {/* midea photos images show on modal */}
                                  <div
                                    className="tab-pane fade"
                                    id="photos-media"
                                    role="tabpanel"
                                    aria-labelledby="photos-media-tab"
                                  >
                                    <div className="media-content">
                                      <ul className="media-upload">
                                        <li className="upload-now">
                                          <div className="custom-upload">
                                            <div className="file-btn">
                                              <i className="fa-solid fa-upload"></i>{" "}
                                              Upload
                                            </div>
                                            <input type="file" />
                                          </div>
                                        </li>
                                      </ul>
                                      <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                        {MideaAll.map((item) => (
                                          <div
                                            className="col"
                                            key={item.id}
                                            onClick={() =>
                                              handleImageClickOpenModal(item)
                                            }
                                          >
                                            <div className="media-thumb video-thumb pointer">
                                              <img
                                                src={item.imgUrl}
                                                alt={item.Alt}
                                              />
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                      <div className="text-center mt-5">
                                        <a href="#" className="default-btn">
                                          <i className="fa-solid fa-spinner"></i>{" "}
                                          Load More
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  {/* // share profile */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="tab-pane fade show "
                          id="gt4"
                          role="tabpanel"
                          aria-labelledby="gt4-tab"
                        >
                          <ActivityPage />
                        </div>

                        <div
                          className="tab-pane fade show "
                          id="gt5"
                          role="tabpanel"
                          aria-labelledby="gt5-tab"
                        >
                          <ShareMyProfile />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 order-xl-0">
                    <div className="group__bottom--center">
                      <div className="story__item style2">
                        <div className="story__inner">
                          <div className="story__thumb position-relative">
                            <input
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                              onChange={handleFileChange}
                              id="imageInput"
                            />
                            <label
                              className="matri-proffile"
                              htmlFor="imageInput"
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={
                                  User?.mainAvatar
                                    ? `https://datingapi.meander.software/assets/images/${User?.mainAvatar}`
                                    : User?.avatars?.[0]
                                    ? `https://datingapi.meander.software/assets/images/${User?.avatars?.[0]}`
                                    : userMale
                                }
                                style={{
                                  objectFit: "cover",
                                }}
                                alt="matrimonial thumb"
                              />

                              {uploading && <p>Uploading...</p>}
                            </label>
                          </div>
                          <div className="story__content">
                            <h4>{User?.name}</h4>
                            <div className="story__content--content mb-2 pb-3">
                              <p>
                                <i
                                  className="fa-sharp fa-solid fa-circle"
                                  size="2xs"
                                  style={{ color: "#11e415" }}
                                />{" "}
                                {activety}
                              </p>
                            </div>
                            <div className="story__content--author pb-2"></div>
                          </div>
                          <div className="container">
                            <h4>Interests</h4>
                            <div className="container">
                              <div className="row">
                                {User?.interest ? (
                                  <div className="container">
                                    <div className="row">
                                      {User &&
                                        User?.interest.map((item, i) => (
                                          <div
                                            key={i}
                                            style={{
                                              margin: "10px 10px 10px 10px",
                                              background: "#f24570",
                                              color: "#fff",
                                              padding: "5px 12px",
                                              borderRadius: "25px",
                                            }}
                                            className={`interest-item col text-center  flex-nowrap `}
                                          >
                                            {item?.name}
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                ) : (
                                  <p>No interests available</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 order-xl-2">
                    <div className="group__bottom--right">
                      <ActiveMember />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FooterFour />
        </div>
      )}
      ;
    </Fragment>
  );
};

export default MyProfile;
