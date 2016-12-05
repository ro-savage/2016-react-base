import { getUserFromArray, getUserNameFromArray } from '../usersHelpers'

describe('usersHelpers', () => {
  describe('getUserFromArray', () => {
    it('Should return user from array', () => {
      const usersArr = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]
      const userId = 2
      expect(getUserFromArray(userId, usersArr)).toEqual({ id: 2 })
    })

    it('Should return false if can not find', () => {
      const usersArr = [{ id: 1 }]
      const userId = 2
      expect(getUserFromArray(userId, usersArr)).toEqual(false)
      expect(getUserFromArray(userId, [])).toEqual(false)
    })

    it('Should handle string or int', () => {
      const usersArr = [
        { id: 1 },
        { id: '2' },
        { id: 3 },
      ]

      expect(getUserFromArray(1, usersArr)).toEqual({ id: 1 })
      expect(getUserFromArray(2, usersArr)).toEqual({ id: '2' })
      expect(getUserFromArray('3', usersArr)).toEqual({ id: 3 })
    })
  })

  describe('getUserNameFromArray', () => {
    it('Should return the users name', () => {
      const usersArr = [
        { id: 1, name: 'mockName' },
      ]
      expect(getUserNameFromArray(1, usersArr)).toEqual('mockName')
    })

    it('Should return Unknown User if it cant find the user', () => {
      const usersArr = [
        { id: 1, name: 'mockName' },
      ]
      expect(getUserNameFromArray(2, usersArr)).toEqual('Unknown user')
    })

    it('Should return Unknown User if it cant find the users name property', () => {
      const usersArr = [
        { id: 1 },
      ]
      expect(getUserNameFromArray(1, usersArr)).toEqual('Unknown user')
    })
  })
})
