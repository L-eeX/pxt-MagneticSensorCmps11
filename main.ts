/**
 *This is DFRobot:motor user motor and steering control function.
 */
//% weight=10 color=#DF6721 icon="\uf013" block="CMPS11"
namespace CMPS11 {
    const CMPS11_ADDRESS = 0x60


    function i2cWriteByte(value: number) {
        pins.i2cWriteNumber(CMPS11_ADDRESS, value, NumberFormat.UInt8BE)
    }

    function i2cRead(num: number) {
        return pins.i2cReadBuffer(CMPS11_ADDRESS, num);
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
        let highByte=data[0]
        let lowByte=data[1]
        let pitch = data[2]
        let roll = data[3]
        let bearing = ((highByte<<8)+lowByte)
        let fine = ((highByte<<8)+lowByte)%10
        //let softVer = getSoftVer()
    }
}