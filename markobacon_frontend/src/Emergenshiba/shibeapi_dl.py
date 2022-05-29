'''
Image credit goes to shibe.online -- This was written when CORS wasn't working but we're good now.

How the script works is up to you to reverse engineer, as the sources I will not include.
'''


import requests  # to get image from the web
import shutil  # to save it locally
import json  # to read from a "mysterious" json file

# Grab the image URLs from the shibe.online API
jsonFile = open('./imgs/image_urls.json', 'r+')
jsonData = json.load(jsonFile)

image_urls = []
counter = 0
for link in jsonData['urls']:
    if link not in image_urls:
        image_urls.append(link)
    else:
        counter += 1

print("Just FYI, there are", counter, "duplicates in the file")

# Iterate through the pulled URLs and go from there
for imageLink in image_urls:

    # Open the url image, set stream to True, this will return the stream content.
    r = requests.get(imageLink, stream=True)

    # Check if the image was retrieved successfully
    if r.status_code == 200:
        # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
        r.raw.decode_content = True

        # Open a local file with wb ( write binary ) permission.
        destFileName = imageLink.split("/")[-1]
        with open('./imgs/' + destFileName, 'wb') as f:
            shutil.copyfileobj(r.raw, f)

        print('Image sucessfully Downloaded: ', destFileName)
    else:
        print('Image Couldn\'t be retreived')
