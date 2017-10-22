function Booklookup(mocktest) {
    this.mocktest = mocktest

    this.serachAmazon = (isbn) => {
        var obj = this.mocktest()
        return {
            bookName :'Color of the wind',
            cover :'ewtwt.bng'
            isbn: 'is123456789'
        }
    }
}

test('Test Booklookup'=>(){
  var info  {
        title: 'Color of the wind',
        image: 'thevoice.jpg',
        isbn: 'is123456789'
    }
  const AmazonService =  jest.fn().mockReturnValue(info)


  let app = new serach(AmazonService)
  let value = app.signInWithFacebook('is123456789')

  expect(value).toEqual(returnObject)
  expect(mockFacbook).toBeCalled()
    expect(mockFacbook).toBeCalledWith('is123456789')

})
