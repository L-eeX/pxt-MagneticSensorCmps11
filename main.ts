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



    /**
     * Steering gear control function.
     * S1~S8.
     * 0°~180°.
    */
    //% blockId=motor_servo block="Servo|%index|degree|%degree"
    //% weight=100
    //% degree.min=0 degree.max=180
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=4
    export function servo(index: number, degree: number): void {

    }
}