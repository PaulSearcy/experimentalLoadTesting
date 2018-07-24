import express from 'express'
import fs from 'fs'
import path from 'path'
import bodyParser from 'body-parser'
const server = express()
const port = 8085
global.__dirname = path.win32.resolve(path.win32.dirname(decodeURI(new URL(import.meta.url).pathname)));

server.use('/js', express.static('./dist/js'))
server.use('/base',express.static('./'))
server.use('/lib',express.static('./lib'))
//server.use('/',express.static(path.join(__dirname, '/')))
server.get('/',(req,res) => {
    console.log('sending')
    res.sendFile(__dirname.replace('c:\\','') + '/index.html')
})
server.listen(port)