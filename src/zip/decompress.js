import * as zlib from 'zlib'
import * as fs from 'fs'

const unzip = zlib.createUnzip()

const decompress = async () => {
    let read = fs.createReadStream('./src/zip/files/archive.gz')
    let write = fs.createWriteStream('./src/zip/files/fileToCompress.txt')
    read.pipe(unzip).pipe(write)

};

await decompress();