import InstanceAxios from "./";
export const SignUp = async (data) => {
  if (Object.values(data).includes(undefined)) {
    return;
  }
  return InstanceAxios.post(
    "/auth/register",
    {
      ...data,
    },
    {
      headers: {
        // remove headers
      },
    }
  );
};
export const SignIn = async (data) => {
  if (Object.values(data).includes(undefined)) {
    return;
  }
  return InstanceAxios.post(
    "/auth/login",
    {
      email: data.email,
      password: data?.password,
    },
    {
      headers: {
        // remove headers
      },
    }
  );
};
export const ResetPasswordUsers = async (data) => {
  if (Object.values(data).includes(undefined)) {
    return;
  }
  return InstanceAxios.post(
    "/user/forgot-password",
    {
      email: data.email,
    },
    {
      headers: {
        // remove headers
      },
    }
  );
};
