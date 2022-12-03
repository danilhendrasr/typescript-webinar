interface Phone {
    // In inch
    screenSize: number;

    // In mAh
    batteryCapacity: number;
}

function isThisPhoneGood(phone: Phone) {
    if (phone.batteryCapacity > 5000) return true;
    return false;
}

// TODO: Create an object with type Phone and call isThisPhoneGood with it
