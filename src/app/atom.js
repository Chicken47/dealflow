import { atom } from "recoil";

export const invoiceDetails = atom({
  key: "invoiceDetails",
  default: {
    companyName: "",
    companyId: "",
    email: "",
    companyType: "",
    country: "",
    city: "",
    streetAddress: "",
    postalCode: "",
    stateProvinceRegion: "",
  },
});
