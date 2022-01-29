function encrypt(payload, password)
{
    try
    {
        return CryptoJS.AES.encrypt(payload, password).toString();
    }
    catch (error)
    {
        console.warn(`Encryption error: ${error}`);
        return null;
    }
}

function decrypt(encrypted, password)
{
    try
    {
        return CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8);
    }
    catch (error)
    {
        console.warn(`Decryption error: ${error}`);
        return null;
    }
}
