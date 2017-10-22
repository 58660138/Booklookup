function Booklookup(mocktest) {
    this.mocktest = mocktest

    this.serachAmazon = (isbn) => {
        var obj = this.mocktest(isbn)
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

  var obj {
      bookName :'Color of the wind',
      cover :'ewtwt.bng'
      isbn: 'is123456789'
  }
  const AmazonService =  jest.fn(isbn).mockReturnValue(info)


  let app = new Booklookup(AmazonService)
  let value = app.serachAmazon('is123456789')


  expect(AmazonService).toHaveBeenCalled()
  expect(facebookAuthMock).toHaveBeenCalledWith(isbn)
  expect(value).toEqual(info)



})
