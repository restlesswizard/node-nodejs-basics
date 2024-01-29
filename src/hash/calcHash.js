import { createHash } from 'node:crypto'

let file = './src/hash/files/fileToCalculateHashFor.txt'

const calculateHash = async (file) => {
    return console.log(createHash('sha256').update(file).digest('hex'))
};

await calculateHash(file);