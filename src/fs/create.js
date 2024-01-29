import * as fs from 'fs';

const create = async () => {
    let file = './src/fs/files/fresh.txt'
    let fileData = 'I am fresh and young'

    fs.access(file, fs.constants.F_OK, (err) => {
        if (!err) {
            throw Error('FS operation failed')
        } else {
            fs.writeFileSync(file, fileData)
        }
    })
};

await create();