/**
 *This is DFRobot: the electronic compass user control library.
 */
//% weight=10 color=#00CED1 icon="\uf013" block="CMPS11"
namespace CMPS11 {
    const CMPS11_ADDRESS = 0x60

    let PITCH = 0
    let ROLL = 0
    let BEARING = 0
    let FINE = 0
    let SOFTVER = 0

    function i2cWriteByte(value: number) {
        pins.i2cWriteNumber(CMPS11_ADDRESS, value, NumberFormat.UInt8BE)
    }

    function i2cRead(num: number) {
        return pins.i2cReadBuffer(CMPS11_ADDRESS, num);
    }

    function getSoftVer() {
        i2cWriteByte(0)
        return i2cRead(1)[0]
    }

    /**
     * This function is used to get all of the sensor data,
     * and every time you need to get any data you have to 
     * perform this function.
    */
    //% weight=80
    //% blockId=CMPS11_getData block="Getting data"
    export function getData(): void {
        i2cWriteByte(2)
        let data = pins.createBuffer(4)
        data = i2cRead(4)
        let highByte = data[0]
        let lowByte = data[1]
        PITCH = data[2]
        ROLL = data[3]
        BEARING = ((highByte<<8)+lowByte)/10
        FINE = ((highByte<<8)+lowByte)%10
        SOFTVER = getSoftVer()
    }

    /**
     * Get the electronic compass software version.
    */
    //% weight=70
    //% blockId=CMPS11_softVer block="Software version"
    export function softVer(): number {
        let num = SOFTVER
        SOFTVER = 0
        return num
    }

    /**
     * Get the pitch Angle data.
    */
    //% weight=60
    //% blockId=CMPS11_pitch block="Pitch"
    export function pitch(): number {
        let num = PITCH
        PITCH = 0
        return num
    }

    /**
     * Gets the roll Angle data.
    */
    //% weight=50
    //% blockId=CMPS11_roll block="Roll"
    export function roll(): number {
        let num = ROLL
        ROLL = 0
        return num
    }

    /**
     * Gets the integer part of the bearing Angle data.
    */
    //% weight=40
    //% blockId=CMPS11_bearing block="Bearing"
    export function bearing(): number {
        let num = BEARING
        BEARING = 0
        return num
    }

    /**
     * The decimal part to obtain bearing Angle data.
    */
    //% weight=30
    //% blockId=CMPS11_fine block="Fine"
    export function fine(): number {
        let num = FINE
        FINE = 0
        return num
    }
}