import { test } from 'tap'
import formAutoContent from 'form-auto-content'
import fs from 'fs'
import {app} from "../src/index"

const myForm  = formAutoContent({
    file: fs.createReadStream("README.md"),
})

test('Submit huge multipart file', async t => {
    console.log('uploading...')

    const res = await app.inject({
        method: 'post',
        url: '/upload',
        ...myForm
    })

    t.equal(res.statusCode, 200, 'returns a status code of 200')
})