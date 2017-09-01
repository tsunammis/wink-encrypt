![:wink:](./doc/wink.png)
# :wink: Decrypt and encrypt text from punctuation

Decrypt & encrypt text from punctuation, funky, doesn't it?

## Why ?

Sometimes, people want to talk only with punctuation :wink:
So, I created this small tool to decrypt text from punctuation, and vice versa.

## Use with node.js

1. First thing, setup
    ```bash
    npm install wink-encrypt
    # or
    yarn add wink-encrypt
    ```

2. How to use ?
    ```js
    const winkEncrypt = require('wink-encrypt')

    console.log(`Hello Mar... 😉  == ${winkEncrypt.encodeString('Hello Mar... 😉')}`)

    console.log(`:--!!.;!.;?!!!.;?!!!.;-!."?!!.:"!!.:"--!!.;-!!!!."--!."--!."--!."?!!.)))))(;;;:?!!.)))))(',;;;"-?! == ${winkEncrypt.decodeString(':--!!.;!.;?!!!.;?!!!.;-!."?!!.:"!!.:"--!!.;-!!!!."--!."--!."--!."?!!.)))))(;;;:?!!.)))))(\',;;;"-?!')}`)
    ```

## Use into a browser

1. Get browser compliant file `dist/wink-encrypt.min.js`

2. Put it into your HTML file
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="wink-encrypt.min.js"></script>
        <script type="text/javascript">
            console.log(`Hello Mar... 😉  == ${winkEncrypt.encodeString('Hello Mar... 😉')}`)
            console.log(`:--!!.;!.;?!!!.;?!!!.;-!."?!!.:"!!.:"--!!.;-!!!!."--!."--!."--!."?!!.)))))(;;;:?!!.)))))(',;;;"-?! == ${winkEncrypt.decodeString(':--!!.;!.;?!!!.;?!!!.;-!."?!!.:"!!.:"--!!.;-!!!!."--!."--!."--!."?!!.)))))(;;;:?!!.)))))(\',;;;"-?!')}`)
        </script>
    </head>
    <body>Hello</body>
    </html>
    ```