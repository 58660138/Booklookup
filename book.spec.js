function Booklookup(mocktest) {
    this.mocktest = mocktest

    this.serachAmazon = (isbn) => {
        return this.authService(phone, password)
    }
}

test('Test Booklookup'=>(){
  var info  {
        title: 'Color of the wind',
        image: 'thevoice.jpg',
        isbn: '123456789'
    }
  const AmazonService =  jest.fn().mockReturnValue(info)


  let app = new serach(AmazonService)
  let value = app.signInWithFacebook('is2539')

  expect(value).toEqual(returnObject)
  expect(mockFacbook).toBeCalled()
    expect(mockFacbook).toBeCalledWith('is2539')

})
