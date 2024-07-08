import InstanceAxios from "./";
export const SubscriptionConfig = async () => {
  return InstanceAxios.get("/subscription/config");
};

export const CancelSubscription = async () => {
  return InstanceAxios.get("/subscription/cancelSubscription");
};

export const SubscriptionCreateCheckoutSession = async (
  priceId,
  success_url,
  cancel_url,
  packageName
) => {
  return InstanceAxios.post("/subscription/create-checkout-session", {
    priceId,
    success_url,
    cancel_url,
    packageName,
  });
};
