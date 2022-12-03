const payInvoice = (id: string, paymentMethod: string, amount: number) => {
    switch (paymentMethod) {
        case "gopay":
            console.log("User paid with gopay.");
            break;
        case "bank transfer":
            console.log("User paid with bank transfer.");
            break;
        case "dana":
            console.log("User paid with dana.");
            break;
        default:
            console.log("Payment method invalid.");
    }
};

// TODO: Call payInvoice with whatever arguments
// TODO: Create an enum for paymentMethod
