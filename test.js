import chai from 'chai'
chai.should()
import{getSum, getMax} from './script.js'

  describe('test code', function() {
    it('getSum', function() {
      getSum(1,2,3,4,5).should.equal(15)
    })
    it('getMax', function() {
        getMax(1,2,3,4,5).should.equal(5)
      })

  })
