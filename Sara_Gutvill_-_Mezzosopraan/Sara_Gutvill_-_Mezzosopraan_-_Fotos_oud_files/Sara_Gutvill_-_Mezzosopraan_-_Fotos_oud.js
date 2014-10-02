// Created by iWeb 3.0.4 local-build-20130923

function createMediaStream_id3()
{return IWCreatePhotocast("http://www.saragutvill.com/Sara_Gutvill_-_Mezzosopraan/Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/rss.xml",false);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.saragutvill.com/Sara_Gutvill_-_Mezzosopraan',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.saragutvill.com/Sara_Gutvill_-_Mezzosopraan',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(165,165),new IWSize(165,0),new IWSize(204,180),27,27,0,new IWSize(2,2)),new IWEmptyStroke(),imageStream,range,new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.400000}),null,1.000000,null,'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,540),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_8.png'},{rect:new IWRect(-1,-1,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_9.png'},{rect:new IWRect(1,-1,194,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_10.png'},{rect:new IWRect(195,-1,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_11.png'},{rect:new IWRect(195,1,2,540),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_12.png'},{rect:new IWRect(195,541,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_13.png'},{rect:new IWRect(1,541,194,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_14.png'},{rect:new IWRect(-1,541,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_15.png'}],new IWSize(196,542)),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,541),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_1.png'},{rect:new IWRect(1,-1,1010,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_2.png'},{rect:new IWRect(1011,-1,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_3.png'},{rect:new IWRect(1011,1,2,541),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_4.png'},{rect:new IWRect(1011,542,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_5.png'},{rect:new IWRect(1,542,1010,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_6.png'},{rect:new IWRect(-1,542,2,2),url:'Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/stroke_7.png'}],new IWSize(1012,543)),stroke_2:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Sara_Gutvill_-_Mezzosopraan_-_Fotos_oud_files/Sara_Gutvill_-_Mezzosopraan_-_Fotos_oudMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id3()}
function onPageUnload()
{Widget.onunload();}
