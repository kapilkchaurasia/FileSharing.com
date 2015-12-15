# FileSharing.com
Its allow you to upload a file and give back you download link which you can share with anyone .Backend is done in nodejs using socket.io , express and multer(as middleware).


1.Open fileSharing.html ,where u can upload any foramt of file (size under 1 MB).

2.Upload button will fire fileUploader.js which using express doing routing , use mutler to save file in server and using socket.io will
	communicate to browser(redirect to DownloaderPage.html) the download link ,which u can share to anyone. 



TODO:

1. Add facebook,twitter,linkedin api so user can share it on its wall.
