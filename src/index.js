import CTS from "./connectToState";
import CCF from "./CreditCardInput";
import CCI from "./CCInput";
import LiteCCF from "./LiteCreditCardInput";
import CV from "./CardView";

export const CreditCardInput = CTS(CCF);
export const connectToState = CTS;
export const LiteCreditCardInput = CTS(LiteCCF);
export const CCInput = CCI;
export const CardView = CV;
