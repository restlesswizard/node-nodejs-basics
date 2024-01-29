import * as zlib from 'zlib'
import * as fs from 'fs'

const zip = zlib.createGzip();

const compress = async () => {
    let read = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    let write = fs.createWriteStream('./src/zip/files/archive.gz') 
    read.pipe(zip).pipe(write)
};

await compress();