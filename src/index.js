import connectToState from "./connectToState";
import CCF from "./CreditCardInput";
import CCI from "./CCInput";
import LiteCCF from "./LiteCreditCardInput";
import CV from "./CardView";

export const CreditCardInput = connectToState(CCF);
export const LiteCreditCardInput = connectToState(LiteCCF);
export const CCInput = CCI;
export const CardView = CV;
