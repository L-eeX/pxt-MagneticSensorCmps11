/**
 *This is DFRobot:motor user motor and steering control function.
 */
//% weight=10 color=#DF6721 icon="\uf013" block="CMPS11"
namespace CMPS11 {
    const CMPS11_ADDRESS = 0x60

    let pitch = 0
    let roll = 0
    let bearing = 0
    let fine = 0
    let softVersion = 0

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
     * Execute a 42BYGH1861A-C step motor(Degree).
     * M1_M2/M3_M4.
    */
    //% weight=80
    //% blockId=CMPS11_getData block="Getting data"
    export function getData(): void {
        i2cWriteByte(2)
        let data = pins.createBuffer(4)
        data = i2cRead(4)
        let highByte = data[0]
        let lowByte = data[1]
        pitch = data[2]
        roll = data[3]
        bearing = ((highByte<<8)+lowByte)/10
        fine = ((highByte<<8)+lowByte)%10
        softVersion = getSoftVer()
    }

    /**
     * Execute a 42BYGH1861A-C step motor(Degree).
     * M1_M2/M3_M4.
    */
    //% weight=70
    //% blockId=CMPS11_softVer block="Software version"
    export function softVer(): number {
        return softVersion
    }


}