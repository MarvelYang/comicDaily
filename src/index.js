const x = require('x-ray')();
const fs = require('fs');
const tieba_template = require('./template/tieba');
const books = require('./config').books;

(async () => {
    const data = await x(
        `https://tieba.baidu.com/f?ie=utf-8&kw=${encodeURI(
            books[0].title
        )}&fr=search`,
        '.threadlist_title',
        [
            {
                title: 'a',
                link: 'a@href',
            },
        ]
    )
        .paginate('.next.pagination-item@href')
        .limit(2);

    const tieList = data.map((item) => {
        return {
            name: books[0].title,
            ...item,
        };
    });

    fs.writeFileSync('tieba.html', tieba_template(tieList));
})();
