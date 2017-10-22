function Booklookup(mocktest) {
    this.mocktest = mocktest

    this.serach = (isbn) => {
        var obj = this.mocktest(isbn)
        return {
            bookName : obj.title,
            cover :obj.image,
            isbn:obj.isbn
        }
    }
}
test('Test Booklookup',()=>{
  var info = {
        title: 'Color of the wind',
        image: 'thevoice.jpg',
        isbn:  'is123456789'
    }

  var returnobj ={
      bookName :'Color of the wind',
      cover :   'thevoice.jpg',
      isbn:     'is123456789'
  }
  const AmazonService =  jest.fn('is123456789').mockReturnValue(info)


  let app = new Booklookup(AmazonService)
  let value = app.serach('is123456789')


  expect(AmazonService).toHaveBeenCalled()
  expect(AmazonService).toHaveBeenCalledWith('is123456789')

  expect(info.title).toBe('Color of the wind')
  expect(value).toEqual(returnobj)



})
