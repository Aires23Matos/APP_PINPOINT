import { Text, View } from "react-native"
import CustomButton from "./CustomButton";

const Payment = () => {
    const openPaymentSheet = async () => {

    };

    return(
        <>
            <CustomButton
            title="Confirmar"
            className="my-10"
            onPress={openPaymentSheet}
            />
        </>
    );
}

export default Payment;
