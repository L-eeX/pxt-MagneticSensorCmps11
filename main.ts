/**
 *This is DFRobot:motor user motor and steering control function.
 */
//% weight=10 color=#DF6721 icon="\uf013" block="DF-Driver"
namespace CMPS11 {
    const CMPS11_ADDRESS = 0x60
    //% block="42"
    Ste1 = 1
    //% block="28"
    Ste2 = 2

    function i2cWriteByte(value: number) {
        pins.i2cWriteNumber(CMPS11_ADDRESS, value, NumberFormat.UInt8BE)
    }

    function i2cRead(num: number) {
        return pins.i2cReadBuffer(CMPS11_ADDRESS, num);
    }

}