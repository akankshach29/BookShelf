var book = [
    {
        id: '1',
        bookImg: 'https://miro.medium.com/max/1838/1*YdGqkz_Z9NTgmMwpS0x_Vw.jpeg',
        title: 'The 5AM Club',
        author: 'Robin Sharma'
    },
    {
        id: '2',
        bookImg: 'https://images.livemint.com/img/2019/07/06/original/book1_1562384332712.PNG',
        title: 'Raavan',
        author: 'Amish'
    },
    {
        id: '3',
        bookImg: 'https://images-na.ssl-images-amazon.com/images/I/61zq0QlVqsL.jpg',
        title: 'The start-up of you',
        author: 'Reid Hoffman'
    },
    {
        id: '4',
        bookImg: 'data:image/jpeg;base64,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',
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt'
    }
]

export default book;
