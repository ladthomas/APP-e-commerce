import InstanceAxios from ".";
export const GetUser = async ({ userId }) => {
  return InstanceAxios.get("/user/" + userId);
};
export const UpdateUser = async (data) => {
  if (Object.values(data).includes(undefined)) {
    return;
  }
  return InstanceAxios.patch(
    "/user/update",
    {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    }
  );
};
export const DeleteUser = async (data) => {
  return InstanceAxios.post(
    "/user/delete",
    {
      userId: data.userId,
    }
  );
};
