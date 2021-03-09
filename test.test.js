import kanan from './src/redux/ice/actionPKanan'
import kiri from './src/redux/ice/actionPKiri'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: "PutarKanan"
    }
    expect(kanan()).toEqual(expectedAction)
  })
  it('should create an action to add a todo', () => {
    const expectedAction2 = {
      type: "PutarKiri"
    }
    expect(kiri()).toEqual(expectedAction2)
    })
})