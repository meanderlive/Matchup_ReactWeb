import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { metriGetAllUsersAsync } from "../../service/MANAGE_SLICE/find-user-SLICE";
import { LOCAL_USER_GENDER } from "../../utils";

const UserByOpoGender = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sessionInteractedUsers, setSessionInteractedUsers] = useState([]);
  const ALL_USER_METRIMONIAL = useSelector((state) => state.getAllUser.users);
  const dispatch = useDispatch();
  const userByMode = LOCAL_USER_GENDER();

  const showuserByGender = ALL_USER_METRIMONIAL.filter(
    (member) => member.iAm !== userByMode
  );

  const tempRemoveUsers = showuserByGender.filter(
    (member) => !sessionInteractedUsers.includes(member._id)
  );

  useEffect(() => {
    dispatch(metriGetAllUsersAsync());
  }, [dispatch]);

  useEffect(() => {
    const filteredMembers = showuserByGender.filter(
      (member) => !sessionInteractedUsers.includes(member._id)
    );
    setFilteredUsers(filteredMembers);
  }, [showuserByGender, sessionInteractedUsers]);

  useEffect(() => {
    setFilteredUsers(showuserByGender);
  }, [filteredUsers]);

  useEffect(() => {
    setFilteredUsers(tempRemoveUsers);
  }, [sessionInteractedUsers, tempRemoveUsers]);

  return null; // This component doesn't render anything, just triggers API calls and updates state
};

export { UserByOpoGender };
