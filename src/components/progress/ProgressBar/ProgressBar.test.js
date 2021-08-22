const ProgressBar = require("./ProgressBar")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new ProgressBar.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("progress", () => {
    let inst

    beforeEach(() => {
        inst = new ProgressBar.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.progress(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.progress(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.progress(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.progress(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.progress("bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.progress(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
