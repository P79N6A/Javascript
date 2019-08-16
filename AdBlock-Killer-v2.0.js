[Adblock Plus 2.0]
! Title: AakList (Anti-Adblock Killer)
! Author: Reek | http://reeksite.com/
! Version: 10.0
! Expires: 1 days
! License: https://creativecommons.org/licenses/by-sa/4.0/
! Homepage: https://github.com/reek/anti-adblock-killer/
! Twitter: https://twitter.com/antiadbkiller
! Contact: https://reek.github.io/anti-adblock-killer/#contact
! Support: https://github.com/reek/anti-adblock-killer/issues
! Contribution: https://github.com/reek/anti-adblock-killer#donate
! WritingRules: https://adblockplus.org/filters
! RedundantRules: https://arestwo.org/famlam/redundantRuleChecker.html
! RegExpVisualizer http://www.regexper.com/
!
! ----- Anti-Adblockers ------------------------------------------------------------------------------------------------------------------- !
!
! ----- Generic ----- !
!
! TryMask.com
! https://trymask.com/ (home)
! http://www.getgrubbing.com/ (demo)
||trymask.com/api/$third-party
! AdWorkMedia
! if (!awm) { window.location = 'http://adworkmedia.com/help/removeAB.php'; }
! if (!awm) { window.location = 'http://loxtk.com/help/removeAB.php'; }
! if (!awm) { window.location = 'http://contentlockingnetworks.com/help/removeAB.php'; }
@@||adworkmedia.com/gLoader.php?GID=$script,third-party
@@||adworkmedia.com/gTemplate.php?GID=$subdocument,third-party
@@||loxtk.com/gLoader.php?GID=$script,third-party
@@||loxtk.com/gTemplate.php?GID=$subdocument,third-party
@@||contentlockingnetworks.com/gLoader.php?GID=$script,third-party
@@||contentlockingnetworks.com/gTemplate.php?GID=$subdocument,third-party
! AdScendMedia
! if (gwloaded==false){window.location = "http://adscendmedia.com/gateway_adblock.php?p=4316";}
! https://adscendmedia.com/widget_adblock.php?p=12377 --> redirect
! http://adscendmedia.com/gwjs.php?aff=4316&prf=18180&sid=
@@||adscendmedia.com/gwjs.php?aff=$script,third-party
!@@||adscendmedia.com/gwframe.php?$domain=bee4.biz|filesdld.com
! cpagrip.com
@@||cpagrip.com/script_include.php?id=$script
! RTK AntiAdblock
! http://ryanteck.github.io/RTK-Anti-Adblock/
/blockcake.js$script
! Anti Ad Buster (Anti-Ad Blocker / Defender)
! http://anti-ad-blocker.blogspot.com/
/anti-ad-buster.js$script
! AntiAdblock (ClemensConrads)
! http://detect-ad-blocking-software.webconrad.com/
@@/adframe.js$script
! AntiAdblock (ErikSwan)
! http://erikswan.net/abp/ (<div id="tester">)
! AntiAdblock (D3xt3r)
! http://d3xt3r.com/anti-adblock?test (blockblockA)
! Default
@@/advertisement*.js$script
@@/advert.js$script,domain=~adultmult.tv
! FFBS Ad Blocker (to see)
! http://static.graddit.com/js/advertisement.js
! jQuery Adblock Detector
! https://github.com/broom9/jquery-adblock-detector
/jquery.adblock-detector.js|$script
! jQuery Adblock
! http://www.vivekv.com
/jquery.adblock.js|$script
! jQuery AntiAdsBlock (Hendriono)
/jquery.antiadsblock.js|$script
! HowToRemoveAdblock
! howtoremoveadblock.com
||howtoremoveadblock.com/js/adblock-detector.js$script
! Adbuddy
! http://xenodesystems.appspot.com/adbuddy.html
/js/adbuddy.min.js$script
###adbuddy-no-adb-container
###adbuddy-overlay
! ABT - Ad Block Test check
! http://esd.io/blog/detecting-adblock-javascript.html
! https://github.com/elidickinson/ad-block-test
#@##sponsored-ad
! Adblock Blocker
! https://wordpress.org/plugins/addblockblocker/
! http://tinyurl.com/nswn6fz
! http://pastebin.com/d65zr37m
! https://github.com/reek/anti-adblock-killer/issues?q=label%3A%22AdBlockBlocker+%28afs_ads%29%22
#@#.afs_ads
! Anti ADs Blocker
! http://codecanyon.net/item/anti-adblock-aadb-anti-ads-blocker-script/5367731
/aadb/script.js|$script
! Better Stop Adblock
||codeclan.altervista.org/wp-content/uploads/*/*/*.mp3$media
/plugins/better-stop-adblock/*
/js/bsa-script-doctype.js$script
/js/bsa-script-no-doctype.js$script
! Adblock Detector 
/AdblockDetector/handler.min.js$script
/AdblockDetector.js$script
! StopAdBlock
! http://www.stopadblock.org/
||stopadblock.org/adblocker-deaktivieren$subdocument
! Plugins Wordpress
! Ad Blocking Advisor
! https://wordpress.org/plugins/ad-blocking-advisor/
/wp-content/plugins/ad-blocking-advisor/*$script,stylesheet
! Ad Block Defender
! https://fr.wordpress.org/plugins/ad-block-defender/
/wp-content/plugins/ad-block-defender/*$script
! DeAdblocker
! https://wordpress.org/plugins/deadblocker/
##.deadblocker-header-bar
/wp-content/plugins/deadblocker/*$script,stylesheet
! NoAdblock Nice Message
! https://fr.wordpress.org/plugins/noadblock-nice-message/
@@/plugins/noadblock-nice-message/assets/js/ads.js?$script,~third-party
! FeatureBlock
/plugins/ibd-block-adblocker/*$script,stylesheet
! No Adblock
! http://www.noadblock.com/
/plugins/no-adblock/*
/blockBlock.jquery.js$script
! WordPress AdBlock Blocker
! http://thisismyurl.com/
! AntiBlock (BukssaAyman)
! http://www.bukssaayman.co.za/anti-block/
/plugins/anti-block/*
/anti-block-modal.js$script
! BlockAlyzer - Adblock counter
! https://wordpress.org/plugins/blockalyzer-adblock-counter/
@@plugins/blockalyzer-adblock-counter/img/ads/$image
@@/plugins/blockalyzer-adblock-counter/js/advert.js$script
! Ad Blocking Detector
! http://adblockingdetector.jtmorris.net/demo/
@@/plugins/ad-blocking-detector/assets/js/*$script
/wp-content/plugins/*/adblock-detector.min.js$script
! AdBlock Notify
/wp-content/themes/rehub/js/adblock_notify.js$script
! AdBlock Notify by Bweb
! http://b-website.com/adblock-notify-plugin-for-wordpress
! https://greasyfork.org/en/forum/discussion/7502
/plugins/adblock-notify-by-bweb/*
/js/an-detect.min.js$script
/js/an-scripts.js$script
/js/an-scripts.min.js$script
/wp-content/uploads/an-temp/*$script,stylesheet
b-website.com#@##adsense
! AdUnBlock - http://adunblock.com
||adunblock.com/code/*.html
! AdBlockConverter - http://www.adblockconverter.com/
! https://github.com/reek/anti-adblock-killer/issues/731
||adblockconverter.com/js/aab.js$script,third-party
! BlockAdblock 2.01
! http://blockadblock.com/
#@##banner_ad
! Tisoomi (direkt)
! rechtslupe.de, infranken.de, formel1.de, fremdwort.de, inside-handy.de, autozeitung.de, motorsport-total.com, aussenwirtschaftslupe.de, donnerwetter.de, wintotal.de
! http://pastebin.com/evd6pHZN
@@||adternal.com/*/ad-loading.bmp$image
! Tisoomi (indirekt)
! energy.de, getvids.de, spielespielen24.de, dialo.de
! http://pastebin.com/sXaZhrmd
@@||s3-eu-west-1.amazonaws.com/bucket-ad/ad-image.png=$image
! podcast.de
! http://pastebin.com/ex0S1tQU
@@||d2jqs2kfmi9hwf.cloudfront.net/ad-image.png=$image
! WPAdBlock
! http://schema.org/WPAdBlock
! https://github.com/reek/anti-adblock-killer/issues/821
#@#div[itemtype="http://schema.org/WPAdBlock"]
! KillAdBlock
! http://tinyurl.com/zl2kxmq
/kill-adblock//js/function.js$script
/kill-adblock/js/function.js$script
! FuckAdBlock & BlockAdBlock (generic)
! 3x: http://fuckadblock.sitexw.fr/
! 4x: http://fuckadblock.sitexw.fr/beta/
! repo: https://github.com/sitexw/FuckAdBlock
! repo: https://github.com/sitexw/BlockAdBlock
! #@#div[class="pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"]
fuckadblock.sitexw.fr#@#.pub_300x250
/fuckadblock.js$script
/blockadblock.js$script
/fuckadblock.min.js$script
/blockadblock.min.js$script
! FuckAdBlock & BlockAdBlock (customized)
! gq.com
! https://github.com/reek/anti-adblock-killer/issues/898
gq.com#@#.pub_300x250
gq.com#@#.pub_300x250m
gq.com#@#.pub_728x90
gq.com#@#.text-ad
gq.com#@#.textAd
gq.com#@#.text_ad
gq.com#@#.text_ads
gq.com#@#.text-ads
gq.com#@#.text-ad-links
! AdDefender
! repo: https://github.com/TRoskop/AdDefender
! demo: http://trserver1.site40.net/projects/AdDefender/app-fullbanner.php.html
! issue: https://github.com/reek/anti-adblock-killer/issues/941
@@/AdDefender/adwordstracking.js$script
! Sorry AdBlocker
! http://wp.openwill.jp/sorry-adblocker/
! https://wordpress.org/plugins/sorry-adblocker/
! test: http://wp.openwill.jp/sab-demo/
/wp-content/plugins/sorry-adblocker/js/sab.js$script
! EasyList
/ad-blocking-detector/*
/adb_detector.
/adblock-blocker/*
/adblock_detector.
/adblockdetect.
/adblockdetection.
/anti_ab.
/antiadblock.
/wp-content/plugins/anti_ad_blocker/*
/adblock_detection/*
/antipubblicita.js
/noadblock.jpg
! AdReactor
! https://www.adreactor.com/
||adreactor.com/js/FAB.js$script,third-party
! AdblockPopup
! https://github.com/reek/anti-adblock-killer/issues?q=televisa.com
/adblock/adblockpopup.js$script
! AdblockChecker
! https://github.com/reek/anti-adblock-killer/issues?q=adblockchecker
/adblockbait.js$script
/adblockchecker.js$script
!
! ----- Specific ----- !
!
! canRunAds
! https://github.com/MatthewGross/CanRunAds
! var canRunAds = true;
! straight-world.de
@@||straight-world.de/js/ads.js$script
! satoshiquiz.com
! https://github.com/reek/anti-adblock-killer/issues?q=satoshiquiz.com
@@||satoshiquiz.com/ad.js$script
@@||satoshiquiz.com/ads.js$script
! fptplay.net
@@||fptplay.net/js/ads.js$script
! cpubenchmark.net
! https://github.com/reek/anti-adblock-killer/issues?q=cpubenchmark.net
@@||cpubenchmark.net/js/ads.js$script
! vstrim.pl
! https://github.com/reek/anti-adblock-killer/issues?q=vstrim.pl
@@||vstrim.pl/js/ads.js$script,domain=vstrim.pl
! hubturkey.net
! https://github.com/reek/anti-adblock-killer/issues?q=hubturkey.net
@@||hubturkey.net/js/ads.js$script
! ynet.co.il
! https://github.com/reek/anti-adblock-killer/issues?q=ynet.co.il
@@||ynet.co.il/common/javascript/ads.js$script,~third-party
! t2e.pl
! https://github.com/reek/anti-adblock-killer/issues?q=t2e.pl
@@||t2e.pl/www/js/ads.js$script
! datalog.co.uk
! https://github.com/reek/anti-adblock-killer/issues?q=datalog.co.uk
@@||datalog.co.uk/js/ads.js$script
! designtaxi.com
! https://github.com/reek/anti-adblock-killer/issues?q=designtaxi.com
@@||designtaxi.com/js/ads.js$script
! Google Syndication
@@||pagead2.googlesyndication.com/pagead/show_ads.js$domain=360haven.com|agame.com|bbc.com|bitcoiner.net|carsfromitaly.info|codeasily.com|drivearabia.com|dsero.com|everythingon.tv|ffiles.com|file4go.com|freewaregenius.com|ftlauderdalewebcam.com|full-ngage-games.blogspot.com|gamespowerita.com|gifmagic.com|ilix.in|kingofgames.net|korean-candy.com|megaallday.com|misheel.net|moviemistakes.com|ninjaraider.com|numberempire.com|nyharborwebcam.com|oldversion.com|omegadrivers.net|photos.essence.com|portcanaveralwebcam.com|portevergladeswebcam.com|priva.us|readersdigest.com.au|rotoinfo.com|seeingwithsound.com|tech-blog.net|techydoor.com|tipstank.com|trutower.com|tv-kino.net|upfordown.com|urlink.at|warp2search.net|preemlinks.com|risiko-gesundheit.de|skincodesgiveaway.com|ffa-hosting.com
! hellsmedia.com
@@||hellsmedia.com/js/advert.js$script
! writing.com
!@@||anywriters.com/main/js/advert.js$script
!@@||1stwrites.com/main/js/ads-adv.js$script
!@@||writingaids.com/main/js/ads-adv.js$script
!@@||writeracademy.com/main/js/ad-text.js
@@/main/js/ad*.js$script,third-party,domain=writing.com
! teknogods.com
@@||teknogods.com/advert.js$script
! siamfishing.com
@@||siamfishing.com/_js/advert.js$script
! gamespowerita.com
forum.gamespowerita.com#@##ad_block
! tvdez.com
tvdez.com,casadossegredos.tv,estadiofutebol.com,televisaofutebol.com#@##pubfooter
tvdez.com,casadossegredos.tv,estadiofutebol.com,televisaofutebol.com#@##pub2
tvdez.com,casadossegredos.tv,estadiofutebol.com,televisaofutebol.com##DIV[style="padding-top:5px;float:left;width:100%;font-size:13px;line-height:26px;height:31px;top: 12px;z-index:9999;text-align:left"]
||cdn.tvdez.com^$third-party
! pro-zik.ws domains
/js/check.js$domain=pro-zik.ws|pro-tect.ws|pro-ddl.ws|pro-sport.ws
! file4go.com
! https://github.com/reek/anti-adblock-killer/issues?q=file4go.com
file4go.com###banner_728x90B
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=file4go.com
! afreesms.com
! https://github.com/reek/anti-adblock-killer/issues?q=afreesms.com
@@||afreesms.com/advertisement.js$script,xmlhttprequest
! sms-receive.net
@@||sms-receive.net/advertisment.js$script
! gamecopyworld domains
/getads.js$domain=gamecopyworld.com|gamecopyworld.eu
gamecopyworld.com,gamecopyworld.eu###confirmOverlay
! ecchi.animeron.tv
ecchi.animeron.tv###confirmBox
ecchi.animeron.tv###confirmOverlay
! mix.dj
@@||mix.dj/jscripts/jquery/mdj_adverts.js$script
mix.dj##.classAds
mix.dj###maskads
! cp-g.net
cp-g.net###adblock_layer
! generation-nt.com
generation-nt.com##P[style="margin:10px 18px 0;border:3px solid red;padding:10px;line-height:1.4em;font-size:14px;color:#333;"]
! shoegames.blogspot.com
shoegames.blogspot.com###HTML5
! unfair.co
unfair.co###awesomemessage
! magestorm.net
magestorm.net##.inner > .corners-top + .topiclist + DIV[style="padding: 5px 5px 2px 5px; font-size: 1.1em; background-color: #ECF1F3; margin: 0px auto; text-align: center;"]
! forum.gizmolord.com
forum.gizmolord.com###announcement-container > #announcement-content > .no
! de.adklick.net
de.adklick.net###w_ad.no_ad
! bitcoins4.me
bitcoins4.me##.alert.alert-block
! canhasbitcoin.com
canhasbitcoin.com###adblock-message
! enigmaboard.com
enigmaboard.com##.no
! eventhubs.com
@@||ads.abusinessforsellingyouthingsthatareniceandyoulikethem.info^$domain=eventhubs.com
@@||haveyoueverfartedinamovietheaterandhadtoleaveitwassobad.us^$domain=eventhubs.com
@@||doubleclick.infineoncorp.com^$domain=eventhubs.com
! megagames.com
megagames.com##.message.adblock-message
! romulation.net
romulation.net##DIV[style="background-color: #CC4444; color: #fff; padding:10px;"]
! xxxdownloadsfree.blogspot.com
xxxdownloadsfree.blogspot.com##DIV[style*="position:fixed;width:100%;top:0px;height:100%;background-color:black;z-index:100;"]
! instantmanga.com
instantmanga.com###notice
! scan-manga.com
scan-manga.com###pub_f0
! ilix.in domains
ilix.in,urlink.at,priva.us##.backk
ilix.in,urlink.at,priva.us###blockMsg
! senmanga.com
senmanga.com##P[class="no"]
! removeadblock.com
@@||removeadblock.com/js/show_ads.js$script
! gametrailers.com
@@||v.fwmrm.net/crossdomain.xml$object-subrequest,domain=gametrailers.com
@@||v.fwmrm.net/ad/p/1?$object-subrequest,domain=gametrailers.com
! hdtvtuga.com
||hdtvtuga.com/canais/jsads.js$script
||vencerocasino.com/$popup
! seekingalpha.com
! https://github.com/reek/anti-adblock-killer/issues?q=seekingalpha.com
seekingalpha.com#@##ad_unit
! jheberg.net
@@||jheberg.net/js/*_advertisement.js$script
jheberg.net#@##ads_bottom
jheberg.net##.jadb
jheberg.net##.loading-background
! go4up.com
go4up.com##IMG[src="http://go4up.com/assets/img/downloadfr.gif"]
! myspass.de
!@@||nuggad.net^$object-subrequest,domain=myspass.de
!@@||adscale.de^$object-subrequest,domain=myspass.de
!@@||movad.net^$object-subrequest,domain=myspass.de
!@@||flashtalking.com^$object-subrequest,domain=myspass.de
!@@||adscale.de^$object-subrequest,domain=myspass.de
@@||myspass.de/myspass/includes/apps/video/getvideometadataxml.php?$object-subrequest
@@||myspass.de/myspass/includes/apps/player/standard/avt_config.php?$object-subrequest
@@||serving-sys.com^$third-party,domain=myspass.de
! play.tv
!||play.tv/assets/scripts/main-*.js$script
! dbzog.de
@@||dbzog.de/Bilder/$image
@@||dbzog.de^$elemhide
! dizi-mag.com
@@||adhood.com^$third-party,domain=dizi-mag.com
! hentaistream.com
@@||syndication.exoclick.com/splash.php?$popup,domain=hentaistream.com
@@||popunder.fpctraffic.com/pop.js$popup,domain=hentaistream.com
@@||cdn.popcash.net/pop.js,$popup,domain=hentaistream.com
||hentaistream.com^$popup
! nation2.com
@@||cpagrip.com/script_include.php?id=$domain=nation2.com
! videotools.12pings.net
videotools.12pings.net###chucknorris
! mako.co.il
@@||checkm8.com^$object-subrequest,domain=mako.co.il
! snsw.us
!||snsw.us/static/anti-ad.js$script
snsw.us#@##ad_1
! revision3.com
@@||m.v.fwmrm.net/p/release/latest-JS/adm/prd/AdManager.js$domain=revision3.com
! vostfr-vf.com
vostfr-vf.com##A[href="/100Mbs.html"]
vostfr-vf.com##.fixe
vostfr-vf.com##A[href^="http://api.adlure.net/partner/click/"]
! video.kooora.com
@@||zedo.com/ads2/$object-subrequest,domain=video.kooora.com
@@||zedo.com/asw/$object-subrequest,domain=video.kooora.com
! majorleaguegaming.com
||majorleaguegaming.com/assets/ab.js$script
! free-movie-home.com
@@||mgcashgate.com/cpalocker/?$domain=free-movie-home.com
! allostreaming-fr.com
@@||zitvk.rpxxv.chickenkiller.com/js/bannerad6.js$domain=allostreaming-fr.com
! anisearch.com
anisearch.com#@#.adsbygoogle
anisearch.com#@##advertise
anisearch.com##.box-error
! maisgasolina.com
@@||maisgasolina.com^$elemhide
! aniroleplay.com
@@||aniroleplay.com/adframe_*.js$script
! roleplayer.me
@@||roleplayer.me/adframe_*.js$script
! dailybitcoins.org
dailybitcoins.org#@#.ad-img
@@||dailybitcoins.org/banners/$image
! freebitco.in / freedoge.co.in
! https://github.com/reek/anti-adblock-killer/issues/498
! https://github.com/reek/anti-adblock-killer/issues/372
! https://github.com/reek/anti-adblock-killer/issues/59
! http://pastebin.com/KXgLSQxZ
freebitco.in,freedoge.co.in#@##box_ad_middle
freebitco.in,freedoge.co.in#@##main_content_ad_left
freebitco.in,freedoge.co.in#@#.adsbygoogle
freebitco.in,freedoge.co.in#@#.ad-img
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=freebitco.in|freedoge.co.in
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=freebitco.in|freedoge.co.in
! 2unlimited.info
@@||2unlimited.info/js/adsense.js
! anime-shinden.info
anime-shinden.info#@##ads_video
! beppegrillo.it
beppegrillo.it#@#div[id^="div-gpt-ad-"]
! filecore.co.nz / fcore.eu
filecore.co.nz,fcore.eu#@#div[id^="div-gpt-ad-"]
@@||partner.googleadservices.com/gpt/$domain=filecore.co.nz|fcore.eu,script
! gaijin.at
gaijin.at##.box_error.box_error_icon
! makemehost.com (adblock_aktiv = false;)
@@||makemehost.com/js/ads.js$script
! ukvarminting.com
ukvarminting.com#@#.ipsAd
! tvdesporto.com
tvdesporto.com#@##ads1
sporttvdireto.com#@##ads1
||sporttvdireto.com/ads/popunder.php$popup
! elahmad.com
elahmad.com#@##adblock
! z0r.de
z0r.de##.adb
! filmon.com
@@||static.filmon.com/ad/affiliateimages/banner-250x350.png
! forum.pac-rom.com
forum.pac-rom.com#@#.banner_ads
! cpalead.com
! https://github.com/reek/anti-adblock-killer/issues?q=runningmanengsub.com
! https://github.com/reek/anti-adblock-killer/issues?q=receive-sms.com
! https://github.com/reek/anti-adblock-killer/issues?q=takwing.idv.hk
@@||cpalead.com/*.php?$script,third-party,domain=receive-sms.com|takwing.idv.hk|runningmanengsub.com
! pc.online143.com
@@||mgcashgate.com/cpalocker/?$script,domain=pc.online143.com
! freedom-ip.com
freedom-ip.com#@#.pub_vertical ins
freedom-ip.com#@#.pub_vertical div
! avaxhome.cc
avaxhome.cc##.adblock-warning
! fichier.net
fichier.net#@##contentAd
! pic4you.ru / pic5you.ru
pic4you.ru,pic5you.ru##.centerdiv
! forum.thgtr.com
forum.thgtr.com##.block_uyari
! exashare.com
! https://github.com/reek/anti-adblock-killer/issues/624
! https://github.com/reek/anti-adblock-killer/issues/506
! https://github.com/reek/anti-adblock-killer/issues/486
exashare.com,dowed.info###player_mgs
exashare.com,dowed.info###player_mgo
exashare.com##[href="http://www.videohube.eu/script/url.php?c=ep"]
@@||exashare.com/ici.html$subdocument
! mydisc.net
mydisc.net#@#.ad_1
mydisc.net#@#.ad_2
! yellowbridge.com
@@||yellowbridge.com^$elemhide
@@||pagead2.googlesyndication.com/pagead/$script,domain=yellowbridge.com
! tv.majorleaguegaming.com
@@||b.scorecardresearch.com^$xmlhttprequest,object-subrequest,domain=tv.majorleaguegaming.com
@@||pubads.g.doubleclick.net/gampad/ads?$object-subrequest,xmlhttprequest,domain=tv.majorleaguegaming.com
! hentai-flix.net
hentai-flix.net###wppa-overlay-bg
hentai-flix.net##.trs_sticky_notice_text_box
! seguridadwireless.es
@@||descargas.seguridadwireless.es/banner.gif
! ftlwiki.com
ftlwiki.com###top-banner-advert
! watcharab.com
watcharab.com#@##adblock
! privateinsta.com
@@||privateinsta.com/javascript/rqrkrm.js$script
@@||cpalead.com/mygateway.php?$domain=privateinsta.com,script
! javzoo.com & javpee.com
@@||javzoo.com/*.js|$script
@@||javpee.com/*.js|$script
! btspread.com
@@||btspread.com/*.js|$script
! anime4fun.com
anime4fun.com###hover
||anime4fun.com/js/newanime.js$script
! eveskunk.com
! https://github.com/reek/anti-adblock-killer/issues/645
@@||eveskunk.com/ad/300x250/ads/$xmlhttprequest,domain=eveskunk.com
! flowplayer_api
videofun.me,videobug.net,video44.net,play44.net,byzoo.org,playbb.me,videowing.me,videozoo.me,easyvideo.me,playpanda.net##.jhasvdjhas
! prod.static.cardinals.clubs.nfl.com
azcardinals.com###adblock-notice
@@/js/detect-blocked-ads.js$script,domain=prod.static.cardinals.clubs.nfl.com
! breakmanga.com
breakmanga.com###notice
! chine-informations.com
chine-informations.com###entete + div[id][class="nomobile"]
! chrissmoove.com
chrissmoove.com#@##adserver
@@||ads.google.com/adserver/adlogger_tracker.php$domain=chrissmoove.com
! tiervermittlung.de
@@||tiervermittlung.de/adblock.js$script
! funniermoments.com
@@||rackcdn.com/ads1.js$script,domain=funniermoments.com
! vapingunderground.com
||vapingunderground.com/js/vapingunderground/3253a5a323gaw352.js$domain=vapingunderground.com
! ||ytconv.net/site/adblock_detect
||ytconv.net/site/adblock_detect
! ddl-search.biz
ddl-search.biz###mc35
!@@||adverts.cdn.tvcatchup.com/ads/$domain=tvcatchup.com,object-subrequest
! jeuxactu.com (just hide message)
jeuxactu.com###infoBlock
! gamergen.com
! ||static.gamergen.com/js/app.packed.js?* (contains fuction antiadblock)
@@||static.gamergen.com/img/pubs/ads.html
@@||static.gamergen.com/img/pubs/ads.gif
! aloneteam.net (fake download)
@@||dammu.tk^$domain=aloneteam.net
@@||bdv.bidvertiser.com/BidVertiser.dbm?$domain=vanhut.tk
! maxcheaters.com
@@||maxcheaters.com/public/js/jsLoader.js$script
! hqq.tv
!||c.hqq.tv/js/adb/adb.js$script
! online.dramacafe.tv
! https://github.com/reek/anti-adblock-killer/issues/34
online.dramacafe.in##.pm-ad-zone
online.dramacafe.in##BODY > DIV[style^="background-color: rgb(251, 236, 173); position: fixed;"]
||wafmedia3.com^$script,domain=online.dramacafe.in
! hln.be + nieuwsblad.be + demorgen.be
@@||imasdk.googleapis.com/flash/*.swf$domain=syndication.vmma.be,object-subrequest
@@||pubads.g.doubleclick.net/gampad/ads?$domain=syndication.vmma.be,object-subrequest
! tvn24.pl
@@||admin.brightcove.com^$object-subrequest,domain=tvn24.pl
! clubedohardware.com.br
clubedohardware.com.br#@#.nexusad
clubedohardware.com.br#@##banner
clubedohardware.com.br#@#.ipsAd
! secret-zone.net
@@||secret-zone.net/abp/adblock_detector.js$script
! cbs.com
@@||analytics.edgesuite.net^$domain=cbs.com,object-subrequest
@@||ailde.biz/a.sponsorads.js$domain=cbs.com,script
! gamingroom.tv
gamingroom.tv#@#.adsbygoogle
@@||ad4.liverail.com^$xmlhttprequest,domain=gamingroom.tv
! upf.co.il
@@||upf.co.il/advertisment.js$script
! sat1.de
@@||gmads.net^$object-subrequest,domain=sat1.de|sat1.ch
! firstrowfr.eu
firstrowfr.eu###adblockplus
firstrowfr.eu###fanback
! firstrowas.co
firstrowas.co###ad_overlabut
! ifirstrow.eu
ifirstrow.eu###adblockplus
ifirstrow.eu###fanback
! firstrows network
! see aakscript
! emprestimo.eu
##A[href*="emprestimo.eu"]
! googleme.eu
##A[href*="googleme.eu"]
! safelinking.biz
||safelinking.biz/adblock-detector.htm$subdocument
! linkshrink.net
linkshrink.net#@#.overlay_ad
linkshrink.net#@##overlay_ad
! eclypsia.com
eclypsia.com#@##adv_tester
@@||adverts.eclypsia.com/www/delivery/spcjs.php$script
@@||pagead2.googlesyndication.com/pagead/$domain=eclypsia.com,script
! coolkora.com
@@||coolkora.com^$elemhide
! javso.com
@@/adblock/adblock.js$script,domain=javso.com
||javso.com/popjs/popred.js$script
||js.adkrazy.com^$script,domain=javso.com
||adkrazy.com^$popup,domain=javso.com
! lequipe.fr
! https://github.com/reek/anti-adblock-killer/issues?q=lequipe.fr
@@||lequipe.fr/*/js/ads-v*.js$script
@@||smartadserver.com/config.js$script,domain=lequipe.fr
@@||smartadserver.com/diff/js/smart.js$script,domain=lequipe.fr
||lequipe.fr/v6/js/popinVideo.js$script
||idalia.assariaburdine.com/happiness.js$script,domain=lequipe.fr
! receive-sms-online.info
! https://github.com/reek/anti-adblock-killer/issues/55
@@||receive-sms-online.info/advert*.js$script
! linkguard.biz
||linkguard.biz/adblock-detector.htm$subdocument
! sylnk.net
||sylnk.net/adblock-detector.htm$subdocument
! planetatvonlinehd.blogspot.com
planetatvonlinehd.blogspot.com###tupiklan
planetatvonlinehd.blogspot.com###anuncio
! videodroid.org
||videodroid.org/vip/adblockcheck.js$script
! skiplimite.tv
@@||skiplimite.tv^$elemhide
@@||pubdirecte.com/script/banniere.php?$domain=skiplimite.tv
@@||adcash.com/a/display.php$subdocument,domain=skiplimite.tv
! tzetze.it
tzetze.it#@##TzeTze_728x90
tzetze.it#@#div[id^="div-gpt-ad-"]
! filmweb.pl
@@||ad.filmweb.pl/adbanner/reklamy/adx.js$script
! coingamez.com
@@||advert.popunder.ru/banners/advert.php$domain=coingamez.com,subdocument,image
! banid.pl
banid.pl#@#.ga
@@||pagead2.googlesyndication.com/pagead/$script,domain=banid.pl
! floozycity.com
||floozycity.com/ad/$popup
redtube.com##.add-blocker-msg
! play.novatv.bg
@@||adm.fwmrm.net/p/MTG_Live/Video2AdRenderer.swf$domain=play.novatv.bg,object-subrequest
@@||5d427.v.fwmrm.net/ad/p/1$domain=play.novatv.bg,object-subrequest
@@||5d3e9.v.fwmrm.net/ad/l/1$domain=play.novatv.bg,object-subrequest
! mackproject.com
||mackproject.com/tara.php$subdocument
! apkmirror.com
! https://github.com/reek/anti-adblock-killer/issues/1083
! https://github.com/reek/anti-adblock-killer/issues/940
! https://github.com/reek/anti-adblock-killer/issues/378
! https://github.com/reek/anti-adblock-killer/issues/224
! https://github.com/reek/anti-adblock-killer/issues/78
! http://pastebin.com/C4sw7edH
apkmirror.com##script:contains(canRunAds = false)
apkmirror.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/$script,domain=apkmirror.com
! streamlive.to
streamlive.to###adblockplus
! gtaxscripting.blogspot.com
gtaxscripting.blogspot.com#@##AdSense2
@@||pagead2.googlesyndication.com/pagead/js/$script,domain=gtaxscripting.blogspot.com
! turkdown.com
||tekproxy.com/$popup,domain=turkdown.com
@@||filmyfundaz.googlecode.com/files/google_ads.js
! pogocheats.net
@@||pagead2.googlesyndication.com/pagead/js/$domain=pogocheats.net
pogocheats.net#@#.adsbygoogle
! torrent-rutor.org
@@||advert.popunder.ru/banners/advert.php$image,subdocument,domain=torrent-rutor.org
||activepr.ru^$domain=torrent-rutor.org
||stats.tadic.tk^$domain=torrent-rutor.org
! rutube.ru
@@||yast.rutube.ru/crossdomain.xml$object-subrequest
@@||rutube.ru/dbg/player_stat?$object-subrequest
! porn-blog.me
@@||porn-blog.me/ads/banner.jpg$image
@@||porn-blog.me/?pr_api=true&/ad_holder/$subdocument
! adultkino.org
@@||adultkino.org/ads/banner.jpg$image
@@||adultkino.org/?pr_api=true&/adframe/$subdocument
porn-blog.me###dbx_light
! bywarrior.com
! filecore.co.nz
filecore.co.nz#@#.adsense
@@||enrondev.net/ads/server/www/delivery/$domain=filecore.co.nz,subdocument
! streaming-foot.info
||foot-live.info/images/adblok.mp3$media
||streaming-foot.info/images/adblok.mp3$media
! gratisbitco.in (isAdBlockActive=false;)
! https://github.com/reek/anti-adblock-killer/issues/81
@@||gratisbitco.in/scripts/ads.js$script
! labnol.org
||img.labnol.org/di/support.png$image
! quickbitco.in (isAdBlockActive=false;)
! https://github.com/reek/anti-adblock-killer/issues/106
@@||quickbitco.in/js/ads.js$script
! onemanga.me
onemanga.me#@#.adblock
@@||optimized-by.rubiconproject.com/a/10926/26000/$subdocument,domain=onemanga.me
@@||ads.rubiconproject.com/ad/$script,domain=onemanga.me
! tyrant.40in.net
@@||pagead2.googlesyndication.com/pagead/$domain=tyrant.40in.net,script
! iphones.ru
iphones.ru##DIV[style="background-color: rgb(222, 71, 0); margin-bottom: 20px; padding: 60px 0px;"]
! lien-torrent.com
||lien-torrent.com/eticilbup/$image,subdocument,script
||141.105.69.88/eticilbup/$image,subdocument,script
lien-torrent.com###ad_divr
lien-torrent.com###ad_divl
! miniup.com
@@||miniup.com/images/ads.png$image
@@||miniup.com/ads/ads.png$image
! call-share.ddns.net
@@||googleads.g.doubleclick.net/favicon.ico$domain=call-share.ddns.net
! culo.sourceforge.net
! subdocument
||comptoir-hardware.com/edi/edi7_sq.php$subdocument
||comptoir-hardware.com/edi/edi7_sk.htm$subdocument
||comptoir-hardware.com/edi/edi7_lb.php$subdocument
! maxedtech.com
maxedtech.com#@#.a160x600
! readms.com
readms.com###reader-sky
readms.com##.message-ld.pull-right
! fz.se
fz.se###AdBlockerInfo
! avmask.com
@@||avmask.com/eroex.js$script
! pencurimovie.cc
pencurimovie.cc##.adb_overlay
pencurimovie.cc###simplemodal-overlay
pencurimovie.cc###simplemodal-container
! sports.ru
@@||sports.ru^*/adfox.$xmlhttprequest
! smashboards.com
smashboards.com###noticeMain
smashboards.com##.premiumContain
! zive.cz
doupe.zive.cz#@##adblock-leaderboard
@@||ads.rubiconproject.com/ad/$script,domain=doupe.zive.cz
||doupe.zive.cz/Client.Scripts/jquery.onp.sociallocker.1.7.6.js$script
! debilizator.tv
||debilizator.tv/static/ab.min.js$script
! videopremium.tv
videopremium.tv#@#.pub_300x250
videopremium.tv#@#.pub_300x250m
videopremium.tv#@#.pub_728x90
videopremium.tv#@#.text-ad
videopremium.tv#@#.textAd
videopremium.tv#@#.text_ad
videopremium.tv#@#.text_ads
videopremium.tv#@#.text-ads
videopremium.tv#@#.text-ad-links
! skidrowcrack.com
! https://github.com/reek/anti-adblock-killer/issues?q=skidrowcrack.com
@@||skidrowcrack.com/adsense.js$script
! afdah.com
afdah.com##.debridnok
! alternativeto.net
alternativeto.net##.cuuummmonnnn
! turbogenerator.info
turbogenerator.info###blanuncio
turbogenerator.info###anuncio
! grifthost.com
grifthost.com#@#.ad468
! dota-trade.com (adblock = false)
@@||media.dota-trade.com/js/ads.js$script
! rojadirecta.me
rojadirecta.me#@##adserver
! planetatvonlinehd.blogspot.com
planetatvonlinehd.blogspot.com#@#.adsantilok
planetatvonlinehd.blogspot.com.ar#@#.adsantilok
! phonandroid.com
@@||phonandroid.com/adscript.js$script
! rlsbb.com
rlsbb.com###contentArea > .information
! crococoin.com
@@||crococoin.com/static/js/Controller/Advertise.js$script
! treebitcoin.com
@@||treebitcoin.com/static/js/Controller/Advertise.js$script
! bithourly.com / dailyfreebits.com / jewelrybitco.in / welovebtc.com / robcoins.eu / elenabitco.in / freebetco.in / qoinfaucet.com
@@/show_ads.js$script,domain=bithourly.com|dailyfreebits.com|jewelrybitco.in|welovebtc.com|robcoins.eu|elenabitco.in|freebetco.in|qoinfaucet.com
! jetetroll.com
jetetroll.com#@##adsense
! flashback.org
flashback.org###top-banner-container
! toolslib.net
toolslib.net##.panel.panel-default > .panel-body > .center-table.block-3x2
! socialblade.com
socialblade.com#@##bottomAd
! binbox.io
binbox.io#@#.banner-ad
@@||pastes.binbox.io/ad/banner$subdocument
! bitcoinpuddle.com
@@||bitcoinpuddle.com/show_ads.js$script
! dogecoinpuddle.com
@@||dogecoinpuddle.com/show_ads.js$script
! icebitco.in
@@||icebitco.in/show_ads.js$script
! btc-gratis.com
@@||btc-gratis.com/banner.gif$image
! btcgratis.com
@@||btcgratis.com/banner.gif$image
! omux.ru
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=omux.ru
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=omux.ru
! lachainemeteo.com + script rule
! https://github.com/reek/anti-adblock-killer/issues?q=lachainemeteo.com
@@||a.ligatus.com/?ids=*&t=js$script,domain=lachainemeteo.com
! bitonplay.com (isAdBlockActive=false;)
@@||bitonplay.com/js/ads.js$script
! 4shared.com
! https://github.com/reek/anti-adblock-killer/issues?q=4shared.com
@@||4shared.com/show_ad_.gif$image
@@||4shared.com/show_ad_.xml$script
@@||4shared.com/show_ad_.xml$stylesheet
||4shared.com/js/blockDetect/blockDetect.4min.js$script
! bit-vortex.com
@@||bit-vortex.com/js/antiadblock.js$script
! fit.sh
@@||server1.affiz.net/tracking/ads_display.php$script,domain=fit.sh
@@||c.ad6media.fr/l.js$script,domain=fit.sh
! fosshub.com
! https://github.com/reek/anti-adblock-killer/issues/250
@@||fosshub.com/media/v2/js/ads.js$script
! coinracket.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=coinracket.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=coinracket.com
! faucetofamerica.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=faucetofamerica.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=faucetofamerica.com
! thebitcoinsheep.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=thebitcoinsheep.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=thebitcoinsheep.com
! landofdogecoin.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=landofdogecoin.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=landofdogecoin.com
! usafaucet.tk
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=usafaucet.tk
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=usafaucet.tk
! flightradar24.com
flightradar24.com##.noads
! ville-ideale.com
! https://github.com/reek/anti-adblock-killer/issues/258
ville-ideale.com###espace
ville-ideale.com###enc
ville-ideale.com###antyp
! notre-planete.info
! https://github.com/reek/anti-adblock-killer/issues/258
notre-planete.info###abp1
@@||notre-planete.info/medias/pub_300x250.png
! fan-de-cinema.com
@@||c.ad6media.fr/l.js$domain=fan-de-cinema.com
! xiaopan.co
xiaopan.co#@#.adsbygoogle
! thebitcoinsheep.com
thebitcoinsheep.com##.col-md-6 font[size="5"] > font[color="white"] > font[color="white"][size="3"]
! mobilevids.org
! https://github.com/reek/anti-adblock-killer/issues/347
@@||syndication.exoclick.com/ads-iframe-display.php$subdocument,domain=mobilevids.org
@@||ads.exoclick.com/ads.js$script,domain=mobilevids.org
! cryptospout.com
cryptospout.com#@#.adsbygoogle
! cmmonitor.com
cmmonitor.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=cmmonitor.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=cmmonitor.com
! 777bitco.in
@@||777bitco.in/static/js/Controller/Advertise.js$script
! videomega.tv
! https://github.com/reek/anti-adblock-killer/issues?q=videomega
@@/BTVQRA6OS11SO6ARQVTB/*.php$script,domain=videomega.tv
! theextopia.com
theextopia.com##.adsbanner
theextopia.com##.adsfoot1
theextopia.com##.adsfoot2
! filmovizija domains
! https://github.com/reek/anti-adblock-killer/issues/748
! https://github.com/reek/anti-adblock-killer/issues/719
! https://github.com/reek/anti-adblock-killer/issues/536
@@||filmovizija.club/advertise.js$script
@@||filmovizija.co/advertise.js$script
! umahdroid.blogspot.com
umahdroid.blogspot.com###energysaving
! streaming-foot.me
@@||streaming-foot.me/js/adblock.js$script
! dirtstyle.tv
||dirtstyle.tv/img/adblock.jpg
dirtstyle.tv##.lightbox
! viki domains
@@/google-ad-block-test-googleadservices-gpt-pubads.js$script,domain=viki.mx|viki.com
@@||pubads.g.doubleclick.net/gampad/ads?$object-subrequest,domain=viki.mx|viki.com
! alientube.co
alientube.co###adblockContainer
! proboards.com
proboards.com,freeforums.net,boards.net###support-message
! kwejk.pl
@@||kwejk.pl^$elemhide
! ps3-infos.fr
! https://github.com/reek/anti-adblock-killer/issues/312
@@||ps3-infos.fr/adsense/openads/ads/ads.js$script
! plej.tv
plej.tv#@#.advert_box
! danslescoulisses.com
@@||danslescoulisses.com/fr/min/$stylesheet
! vipleague
! also killed by AakScript
! https://github.com/reek/anti-adblock-killer/issues?q=strikeout
! https://github.com/reek/anti-adblock-killer/issues?q=vipbox
! https://github.com/reek/anti-adblock-killer/issues?q=vipleague
vipleague.is,vipleague.ws,vipleague.se,vipleague.tv,vipleague.me,vipleague.mobi,vipleague.co,vipleague.sx,vipleague.ch,vipbox.tv,vipbox.co,vipbox.biz,vipbox.sx,vipbox.eu,vipbox.so,vipbox.nu,vipboxsa.co,strikeout.co,strikeout.me,homerun.re,vipboxtv.co,vipapp.me##script + script + script + style + div[id]
strikeout.me,strikeout.co###overlayad
strikeout.me,strikeout.co##.in.fade.modal-backdrop
! stream4free.eu
@@||stream4free.eu/modules/mod_jpayday/js/doubleclick.js$script,domain=stream4free.eu
! forums.openpli.org
forums.openpli.org###content > [style="text-align:center;"] > DIV[style="margin 0 auto;display:inline-block;width:728px; height:84px; border:1px solid #000000; text-align:center; font-family:century gothic, arial, helvetica, sans serif;padding:4px;font-weight:bold;"]
! onvasortir.com
! https://github.com/reek/anti-adblock-killer/issues?q=onvasortir.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=onvasortir.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=onvasortir.com
! urbeez.com
@@||urbeez.com^$elemhide
@@||urbeez.com^$script
! WP.tv
! https://github.com/reek/anti-adblock-killer/issues?q=wp.pl
@@||wp.pl^$script,image
! sparkylinux.org
@@||sparkylinux.org/images/ad/$image
! demonoid.pw
@@||demonoid.pw/show_ads_.js$script
! carambatv.ru
@@||adv.gpm-digital.com/crossdomain.xml$object-subrequest,domain=carambatv.ru
! rookie.com.pl
! https://github.com/reek/anti-adblock-killer/issues/344
@@||rookie.com.pl/jscripts/ads.js$script
! cwtv.com
||dzxxxg6ij9u99.cloudfront.net/wb.js$script,domain=cwtv.com
! worldofgnome.org
worldofgnome.org#@#.google-ad
worldofgnome.org#@##wog-300x250-ads
! bitzfree.com
@@||bitzfree.com/js/*.js$script
@@||adpdx.com^$image,subdocument,domain=bitzfree.com
@@||adk2.co^$image,subdocument,domain=bitzfree.com
@@||adhexa.com^$image,subdocument,domain=bitzfree.com
@@||adshexa.com^$image,subdocument,domain=bitzfree.com
@@||adnxs.com^$image,subdocument,domain=bitzfree.com
@@||cdnads.com^$image,subdocument,domain=bitzfree.com
@@||padsdel.com^$image,subdocument,domain=bitzfree.com
@@||padstm.com^$image,subdocument,domain=bitzfree.com
@@||rhtag.com^$image,subdocument,domain=bitzfree.com
! rdio.com
!rdio.com#@#.ad_background
!rdio.com#@#.ad_bottom
!rdio.com#@#.ad_container
!rdio.com#@#.ad_text
! trafictube.ro
trafictube.ro#@#.widget-adv
! uptobox.com
uptobox.com#@##adblocktrap
uptobox.com#@#.ad-leader
uptobox.com#@#.ad-leader > div[id]
! bitcoiner.net
litecoiner.net,bitcoiner.net#@##ad-top
! softpedia.com
softpedia.com#@#.ad
! gamejolt.com
gamejolt.com###pre-roll-ad-container
! ogmods.net
@@||yllix.com/banner_show.php$subdocument,domain=ogmods.net
yllix.com##[href^="http://click2.yllix.com/"]
! sharecash.org
@@||widget.sharecash.org/jsclick.php$script
! naekranie.pl
naekranie.pl###niceMessage
! turbogenerator.info
@@||turbogenerator.info/adblock.js$script
! givemesome.tips
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=givemesome.tips
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=givemesome.tips
! fontsquirrel.com
fontsquirrel.com###bottom_banner_ad_container
! zerozero.pt
zerozero.pt###ad_block_msg
! annuaire-bleu.net
annuaire-bleu.net#@##adblocktest
@@||pagead2.googlesyndication.com/pagead/$image,domain=annuaire-bleu.net
! playbitco.in
! https://github.com/reek/anti-adblock-killer/issues/644
! https://github.com/reek/anti-adblock-killer/issues/577
! https://github.com/reek/anti-adblock-killer/issues/376
@@||waterbitco.in/show_ads.js$script
@@||playbitco.in/show_ads.js$script
! prizebitcoins.com
@@||prizebitcoins.com/banner.gif$image
! mojevideo.sk
@@||pagead2.googlesyndication.com/pagead/show_ads.js$domain=mojevideo.sk
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=mojevideo.sk
mojevideo.sk#@##video_ad
! zeperfs.com
@@||zeperfs.com/adsbygoogle.js$script
! tusmangas.net
tusmangas.net#@##adsense
||tusmangas.net/ama/oso.js$script
! youtubeproxy.info
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=youtubeproxy.info
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=youtubeproxy.info
! opitz-online.com
opitz-online.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=opitz-online.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=opitz-online.com
! audipassion.com
@@||forums.audipassion.com/public/js/jsLoader.js$script
! shqip-tv.info
@@||shqip-tv.info/webmasters/adblock.js$script
! razem.tv
@@||razem.tv/Scripts/InsysPlayer.v0.1.0/adTest.png$image,domain=razem.tv
! onet.pl
! https://github.com/reek/anti-adblock-killer/issues?q=onet.pl
||lib.onet.pl^*/adp/adp.js$script
! t3n.de
t3n.de##.abContentMsg
t3n.de##.adb
! bricozone.fr
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=bricozone.fr
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=bricozone.fr
! heavenly-blue.net
@@||heavenly-blue.net^$elemhide
! find-my-search.com
@@||find-my-search.com/includes/js/adblockDetect/_advertisement.js$script
! vide-greniers.org
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=vide-greniers.org
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=vide-greniers.org
vide-greniers.org##A[class^="replacement_"]
! comics-sanctuary.com
@@||smartadserver.com/config.js$script,domain=comics-sanctuary.com
@@||r.sascdn.com/diff/js/smart.js$script,domain=comics-sanctuary.com
! planete205.com / planete-205.com
@@||googleads.g.doubleclick.net^$image,domain=planete205.com|planete-205.com
! trakt.tv
trakt.tv###huckster-desktop-top
trakt.tv###huckster-desktop-bottom
! cinemaniahdd.com
cinemaniahdd.com###i32c
! agar.io
@@||agar.io/js/a.js$script
! needrom.com (account required)
! https://github.com/reek/anti-adblock-killer/issues/593
! https://github.com/reek/anti-adblock-killer/issues/425
@@||cdn.needrom.com/advert3.js$script
needrom.com#@##ba_banner61
! 4players.de
@@||4players.de/javascript/adtag.check.js$script
! schoener-fernsehen.com
||peer-stream.com/api/AdvertisementPlugin$object-subrequest,domain=schoener-fernsehen.com
! btava.com
@@||btava.com/eroex.js$script,domain=btava.com
! plus-belle-la-vie-replay.blogspot.com
! plus-belle-la-vie-video.blogspot.com
plus-belle-la-vie-replay.blogspot.com#@##publicite
plus-belle-la-vie-replay.blogspot.com#@##adsense
plus-belle-la-vie-video.blogspot.com#@##publicite
plus-belle-la-vie-video.blogspot.com#@##adsense
! sharewareonsale.com
@@||sharewareonsale.com/wp-content/plugins/checkout-ad-checker/assets/$script,stylesheet,image
! kozaczek.pl (isAdBlockActive=false;)
! https://github.com/reek/anti-adblock-killer/issues/414
@@||kozaczek.pl/js/ads.js$script,domain=kozaczek.pl
! zeberka.pl (isAdBlockActive=false;)
! https://github.com/reek/anti-adblock-killer/issues/414
@@||zeberka.pl/js/ads.js$script,domain=zeberka.pl
! videostar.pl
@@||static-videostar2.4vod.tv/assets/js/adcheck.js$script,domain=videostar.pl
@@||static-videostar2.4vod.tv/assets/js/adcheck.min.js$script,domain=videostar.pl
! srnet.eu
@@||srnet.eu/ads2.js$script
! carambatv.ru
@@||ads.adfox.ru/crossdomain.xml$object-subrequest,domain=carambatv.ru
! proxywiky.com
proxywiky.com###overlay-holder
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=proxywiky.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=proxywiky.com
! facebookproxy.info
facebookproxy.info###overlay-holder
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=facebookproxy.info
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=facebookproxy.info
! videoproxy.in
videoproxy.in###overlay-holder
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=videoproxy.in
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=videoproxy.in
! turkanime.tv
@@||turkanime.tv/ads.html$subdocument,domain=turkanime.tv
! playtv.fr
@@playtv.fr$object-subrequest,domain=play.tv|playtv.fr
@@||ads.stickyadstv.com/crossdomain.xml$object-subrequest,domain=play.tv|playtv.fr
@@||ads.stickyadstv.com/www/delivery$object-subrequest,domain=play.tv|playtv.fr
@@||bid.g.doubleclick.net/$object-subrequest,domain=play.tv|playtv.fr
@@||bs.serving-sys.com/crossdomain.xml$object-subrequest,domain=play.tv|playtv.fr
@@||bs.serving-sys.com/BurstingPipe/adServer.bs$object-subrequest,domain=play.tv|playtv.fr
@@||ad*.liverail.com/?LR_$object-subrequest,domain=play.tv|playtv.fr
@@||ad.doubleclick.net/crossdomain.xml$object-subrequest,domain=play.tv|playtv.fr
@@||ad.doubleclick.net/ddm/pfadx/$object-subrequest,domain=play.tv|playtv.fr
! now.ru
@@||adsrv.gpm-digital.com/$object-subrequest,domain=rutube.ru
@@||adv.gpm-digital.com/crossdomain.xml$object-subrequest,domain=rutube.ru
@@||adv.gpm-digital.com/*now.ru$object-subrequest,domain=rutube.ru
! rutube.ru
@@||ad4.liverail.com/?LR_PUBLISHER_ID=$object-subrequest,domain=rutube.ru
! up2stream.com
! https://github.com/reek/anti-adblock-killer/issues/456
@@/BTVQRA6OS11SO6ARQVTB/*.php$script,domain=up2stream.com
! crypto-clix.net
crypto-clix.net#@#.ad-block
crypto-clix.net#@#.ad-content
crypto-clix.net#@#.ad-footer
! hireteen.com
! https://github.com/reek/anti-adblock-killer/issues/462
hireteen.com###adb-enabled
! binbox.io
! https://github.com/reek/anti-adblock-killer/issues/466
! https://github.com/reek/anti-adblock-killer/issues/229
@@||binbox.io/adblock.js$script
! gram.pl
! https://github.com/reek/anti-adblock-killer/issues/468
@@||gram.pl/js/advertising.js$script
! lggautotrasporti.esy.es
! https://github.com/reek/anti-adblock-killer/issues/492
@@||lggautotrasporti.esy.es^$elemhide
@@||lggautotrasporti.esy.es/images/logofinaleLGG.png$image,domain=lggautotrasporti.esy.es
! spaste.com
! https://github.com/reek/anti-adblock-killer/issues?q=spaste.com
@@||spaste.com/ads/$subdocument
@@||spaste.com^$generichide
||taboola.com^$domain=spaste.com
! mupvl.us
! https://github.com/reek/anti-adblock-killer/issues/489
@@||advert.com/advert$image,domain=mupvl.us
! sportsplays.com
@@||sportsplays.com/ads/banner.jpg$image
@@||sportsplays.com/ads/ad.html$subdocument
! wetter3.de
@@||sponsorads.de/script.php$script,domain=wetter3.de
! pebx.pl
pebx.pl#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=pebx.pl
! telepolis.pl
telepolis.pl##DIV[style="width:750px; height:200px; background-color:black; color:white; text-align: center; font: bold 30px Helvetica, Arial, sans-serif;"]
! italiatv.org
@@||adcash.com/ad/display.php$script,domain=italiatv.org
@@||adcash.com/ban/$image,domain=italiatv.org
! animedigitalnetwork.fr
@@||animedigitalnetwork.fr/templates/adn/js/advertising.js$script
! comptoir-info.com
comptoir-info.com#@#.textad
! adultmult.tv
! https://github.com/reek/anti-adblock-killer/issues/366
@@||37.1.207.27/playlist/$subdocument,domain=adultmult.tv
! 4chan.org
4chan.org#@#.ad-plea
4chan.org#@#.topad
4chan.org#@#.middlead
4chan.org#@#.bottomad
4chan.org##.center[style]
! mega-faucet.eu
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=mega-faucet.eu
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=mega-faucet.eu
! rocketfaucet.co.in
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=rocketfaucet.co.in
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=rocketfaucet.co.in
! robcoins.eu
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=robcoins.eu
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=robcoins.eu
! big-coin.eu
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=big-coin.eu
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=big-coin.eu
! btcfaucetlist.net
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=btcfaucetlist.net
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=btcfaucetlist.net
! get-free-bitco.in
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=get-free-bitco.in
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=get-free-bitco.in
! leakyfaucet.uk
@@||leakyfaucet.uk/show_ads.js$script
! tree.tv
! https://github.com/reek/anti-adblock-killer/issues/508
tree.tv#@##adverts
! aseanlegacy.net
! https://github.com/reek/anti-adblock-killer/issues/448
@@||aseanlegacy.net/adsense/ads.png
@@||aseanlegacy.net/assets/*/*/advertisement.php$script
@@||aseanlegacy.net/senzement/ads.png
@@||aseanlegacy.net/senzement/senzement.js.php
@@||aseanlegacy.net/modules/adblock/controller.php
! epoznan.pl/wtkplay.pl
! https://github.com/reek/anti-adblock-killer/issues/525
@@||play.wtk.insys.pl/Scripts/InsysPlayer.v0.1.0/adTest.png$image
@@||ad.adview.pl/ad/$xmlhttprequest,domain=play.wtk.insys.pl
! xiaopan.co
! https://github.com/reek/anti-adblock-killer/issues/528
! https://github.com/reek/anti-adblock-killer/issues/264
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=xiaopan.co
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=xiaopan.co
! djawir.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=djawir.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=djawir.com
! vvvvid.it
! https://github.com/reek/anti-adblock-killer/issues/1364
! https://github.com/reek/anti-adblock-killer/issues/756
! https://github.com/reek/anti-adblock-killer/issues/585
! https://github.com/reek/anti-adblock-killer/issues/513
! https://github.com/reek/anti-adblock-killer/pull/282
! https://github.com/reek/anti-adblock-killer/issues/205
@@||vvvvid.it/img/ad/advertisement.xml$xmlhttprequest
@@||imasdk.googleapis.com$domain=vvvvid.it
@@||static.vvvvid.it/img/ad$domain=vvvvid.it
@@||des.smartclip.net/ads?$domain=vvvvid.it
@@||adx.adform.net/adx$domain=vvvvid.it
@@||adx.adform.net/videoad/?$domain=vvvvid.it
! captchme.net / captchme.com
! https://github.com/reek/anti-adblock-killer/issues/934
! https://github.com/reek/anti-adblock-killer/issues/921
! https://github.com/reek/anti-adblock-killer/issues/533
! http://pastebin.com/gHPBA25S
@@||api.captchme.net/api/media$image
@@||googleads.g.doubleclick.net/pagead/ads$subdocument,third-party,domain=~afreesms.com
! wyborcza.pl / gazeta.pl
! https://github.com/reek/anti-adblock-killer/issues/531
@@||squid.gazeta.pl/info/squid/fprint.js$script,domain=wyborcza.pl|gazeta.pl
@@||squid.gazeta.pl/sqpwgl/pwfpl$xmlhttprequest,domain=wyborcza.pl|gazeta.pl
@@||squid.gazeta.pl/sqpwgl/pwif$subdocument,domain=wyborcza.pl|gazeta.pl
! torrent-tv.ru
! https://github.com/reek/anti-adblock-killer/issues/537
torrent-tv.ru##.page > .right-side > .section + .section + .section
! tsa-algerie.com
! https://greasyfork.org/fr/forum/discussion/5493/
@@||tsa-algerie.com/wp-content/themes/tsa/js/ads.js$script
! freemulticoins.com
! https://greasyfork.org/zh-TW/forum/discussion/5694
freemulticoins.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=freemulticoins.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=freemulticoins.com
! lowcygier.pl (var niceAdsCheck = true;)
! https://github.com/reek/anti-adblock-killer/issues/539
@@||lowcygier.pl/wp-content/themes/graphene/js/ads.js$script
! crichd.tv
! https://github.com/reek/anti-adblock-killer/issues/849
! https://github.com/reek/anti-adblock-killer/issues/557
! https://github.com/reek/anti-adblock-killer/issues/544
popeoftheplayers.eu###mask1
yocast.tv##.player_div + #video_ads_overdiv + div
crichd.tv###notice
! cast4u.tv
! https://github.com/reek/anti-adblock-killer/issues/900
cast4u.tv###notice
cast4u.tv###video_ads_overdiv
! la-faculte.net
! https://github.com/reek/anti-adblock-killer/issues/550
la-faculte.net#@##adsense
! femmeactuelle.fr
! https://github.com/reek/anti-adblock-killer/issues/551
@@||sascdn.com/config.js?nwid=$domain=femmeactuelle.fr
@@||sascdn.com/diff/js/smart.js$domain=femmeactuelle.fr
! hackintosh.zone
! https://github.com/reek/anti-adblock-killer/issues?q=hackintosh.zone
@@||hackintosh.zone^*/ads.js$script
! hackintosh.computer
! https://github.com/reek/anti-adblock-killer/issues?q=hackintosh.computer
@@||hackintosh.computer^$generichide
@@||hackintosh.computer/*ad$script
@@||pagead2.googlesyndication.com^$script,domain=hackintosh.computer
hackintosh.computer##.adscenter
hackintosh.computer###googleads
! turbodebrideur.com
! https://github.com/reek/anti-adblock-killer/issues/563
turbodebrideur.com#@##pubdirecte
! openload (network)
! https://github.com/reek/anti-adblock-killer/issues/840
! https://github.com/reek/anti-adblock-killer/pull/697
! https://github.com/reek/anti-adblock-killer/issues/680
! https://github.com/reek/anti-adblock-killer/issues/475
@@||openload.io^$elemhide
@@||openload.co^$elemhide
@@||openload.tv^$elemhide
@@/Advertisement.css$stylesheet,domain=openload.co|openload.io|openload.tv
! filesupload.org
! https://github.com/reek/anti-adblock-killer/issues?q=filesupload.org
@@||multiup.org/pop.js$script,domain=filesupload.org
! biggestplayer.me
! https://github.com/reek/anti-adblock-killer/issues/566
biggestplayer.me##.masr
popeoftheplayers.eu###html4
! krs-online.com.pl
! https://github.com/reek/anti-adblock-killer/issues/567
@@||krs-online.com.pl/js/showads.js$script
! sc2casts.com
! https://github.com/reek/anti-adblock-killer/issues?q=sc2casts
@@||pagead2.googlesyndication.com/pub-config/$script,domain=sc2casts.com
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$script,domain=sc2casts.com
! nnm-club.ws
! https://greasyfork.org/forum/discussion/5923
! https://github.com/reek/anti-adblock-killer/issues?q=nnm-club.ws
||nnm-club.ws/forum/docs/requests.js$script
! bricozone.fr
! https://github.com/reek/anti-adblock-killer/issues/574
bricozone.fr#@#.adsbygoogle
! howtogeek.com
! https://github.com/reek/anti-adblock-killer/issues/578
! https://github.com/reek/anti-adblock-killer/issues/576
@@||howtogeek.com/adframe.js$subdocument
! piter.tv
! https://greasyfork.org/forum/discussion/5997
@@||static.videocore.tv/jscript/PTV_06_13/advert2.js$script,domain=piter.tv
! articlerewritertool.com
! https://github.com/reek/anti-adblock-killer/issues/589
articlerewritertool.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=articlerewritertool.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=articlerewritertool.com
! spinbot.com
! https://github.com/reek/anti-adblock-killer/issues/589
spinbot.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=spinbot.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=spinbot.com
! journaldugeek.com
! journaldugamer.com
! pixelistes.com
! jdubuzz.com
! https://github.com/reek/anti-adblock-killer/issues/602
@@/adscript.js$script,~third-party,domain=jdubuzz.com|journaldugamer.com|journaldugeek.com|pixelistes.com
! 990.ro
! https://github.com/reek/anti-adblock-killer/issues/601
@@||990.ro/functions/adgen2/adbanner.js$script,~third-party
! unshowmasonline.com
! https://github.com/reek/anti-adblock-killer/issues/618
@@||unshowmasonline.com/banner.gif$image
! 4tuning.ro
! https://github.com/reek/anti-adblock-killer/issues/610
4tuning.ro#@#.adsbygoogle
! tibiopedia.pl
! https://github.com/reek/anti-adblock-killer/issues/615
@@||tibiopedia.pl/js/show_ads.js$script,domain=tibiopedia.pl
! playerapp1.pw
! https://github.com/reek/anti-adblock-killer/issues/611
playerapp1.pw###divPanel
playerapp1.pw##[id^="total"]
! ponlatv.com
! https://github.com/reek/anti-adblock-killer/issues/1482
ponlatv.com###divPanel
ponlatv.com##[id^="total"]
! teledeporteonline.pw
! https://github.com/reek/anti-adblock-killer/issues/1485
teledeporteonline.pw###divPanel
teledeporteonline.pw##[id^="total"]
! playerhd1.pw
! playerhd2.pw
! https://greasyfork.org/forum/discussion/7424/
playerhd1.pw,playerhd2.pw##[id^="total"]
playerhd1.pw,playerhd2.pw###divPanel
! dinozap network
! https://github.com/reek/anti-adblock-killer/issues/715
dinozap.com,dinozap.info,dinostream.pw##[id^="total"]
dinozap.com,dinozap.info,dinostream.pw###divPanel
! verdirectotv.com
! https://github.com/reek/anti-adblock-killer/issues/801
verdirectotv.com##div[id^="closeX"]
verdirectotv.com##div[id^="capa"]
verdirectotv.com###divPanel
verdirectotv.com##[id^="total"]
! fossbytes.com
! https://github.com/reek/anti-adblock-killer/issues/603
fossbytes.com#@##adsense
! showup.tv
! https://github.com/reek/anti-adblock-killer/issues/604
@@||showup.tv/js/core/Advertisement.js$xmlhttprequest,domain=showup.tv
! habrahabr.ru
! megamozg.ru
! geektimes.ru
! https://github.com/reek/anti-adblock-killer/issues/606
@@/advertising.js$script,domain=habrahabr.ru|megamozg.ru|geektimes.ru
@@/adriver.js$script,domain=habrahabr.ru|megamozg.ru|geektimes.ru
! sharefreeall.com
! https://github.com/reek/anti-adblock-killer/issues/623
sharefreeall.com#@##adsense
! dziennikwschodni.pl
! https://github.com/reek/anti-adblock-killer/issues/633
dziennikwschodni.pl#@#.adholder
! polscygracze.pl (var niceAdsCheck=true;)
! https://github.com/reek/anti-adblock-killer/issues/632
@@||polscygracze.pl/wp-content/plugins/noadblock-nice-message/assets/js/ads.js$script,domain=polscygracze.pl
! wpworld.pl
! windowsowo.pl
! https://github.com/reek/anti-adblock-killer/issues/631
wpworld.pl,windowsowo.pl#@##adBanner
! virpe.com
! https://github.com/reek/anti-adblock-killer/issues/626
@@||virpe.com/includes/js/adver.js$script,domain=virpe.com
! polotv.pl
! https://github.com/reek/anti-adblock-killer/issues/625
@@||polotv.pl/html/js/adv.bbelements.js$script,domain=polotv.pl
! lumload.com
! https://greasyfork.org/pt-BR/forum/discussion/6208
@@||lumload.com/pop.js$script
! shippuden.tv
! https://github.com/reek/anti-adblock-killer/issues/622
@@||shippuden.tv/ads.xml
@@||shippuden.tv/gkplugins_license.swf
! eska.tv
! https://github.com/reek/anti-adblock-killer/issues/635
@@||eska.tv/assets/js/ads.js$script,domain=eska.tv
! voxmusic.tv
! https://github.com/reek/anti-adblock-killer/issues/636
@@||voxmusic.tv/html/js/adv.bbelements.js$script,domain=voxmusic.tv
! f1fanklub.pl
! https://github.com/reek/anti-adblock-killer/issues/637
f1fanklub.pl#@##topad
@@||3.bp.blogspot.com/*.jpg#/adaffiliate_/adops/ad/adsales/ad/adsby./adtest./$domain=f1fanklub.pl
! fokus.tv
! https://github.com/reek/anti-adblock-killer/issues/638
@@||fokus.tv/html/js/adv.bbelements.js$script,domain=fokus.tv
! dziennik.pl
! forsal.pl
! gazetaprawna.pl
! jegostrona.pl
! prawnik.pl
! https://github.com/reek/anti-adblock-killer/issues/627
@@||gazetaprawna.pl/gp/js/ads_blocker_test.js$script,domain=dziennik.pl|forsal.pl|gazetaprawna.pl|jegostrona.pl|prawnik.pl
! freeskier.com (also added script rule)
! https://github.com/reek/anti-adblock-killer/issues/639
freeskier.com###adb-enabled
freeskier.com#@##adb-not-enabled
! tvsierpc.pl
! https://github.com/reek/anti-adblock-killer/issues/640
@@||tvsierpc.pl/media/videoads/FILMY/*.mp4$object,image,domain=tvsierpc.pl
! inwestycje.pl
! https://github.com/reek/anti-adblock-killer/issues/641
inwestycje.pl###show-message
! hostuje.net
! https://github.com/reek/anti-adblock-killer/issues/642
@@||hostuje.net/show_ads.js$script,domain=hostuje.net
! enlacespremium.biz
! https://github.com/reek/anti-adblock-killer/issues/643
@@||bajaenlaces.com/adblock.js$script
! videoo.info
! https://github.com/reek/anti-adblock-killer/issues/646
@@||videoo.info/show_ads.js$script,domain=videoo.info
! jetradar.pl
! https://github.com/reek/anti-adblock-killer/issues/647
jetradar.pl##.ng-scope.no_adblock_wrapper
! buickforums.com
! https://github.com/reek/anti-adblock-killer/issues/648
@@||pagead2.googlesyndication.com/pagead/show_ads.js$domain=buickforums.com
@@||pagead2.googlesyndication.com/pagead/js/*show_ads_impl.js$domain=buickforums.com
! proaudioz2.audio
! https://github.com/reek/anti-adblock-killer/issues/651
@@||advert.popunder.ru/banners/advert.php$image,subdocument,domain=proaudioz2.audio
! dayt.se
! http://paste2.org/jeHAk7sg
! https://github.com/reek/anti-adblock-killer/issues/722
dayt.se#@##bottomcenterit
@@||dayt.se/bottombannerkw.php$subdocument,domain=dayt.se
dayt.se#@##Ad3TextAd
@@||aflrm.com/$subdocument,domain=dayt.se
dayt.se#@##ads
@@||ads.ad-center.com^$subdocument,domain=dayt.se
! zorofiles.com (antiblock.org static)
! https://greasyfork.org/en/forum/discussion/6451
zorofiles.com###z662
! myvideo123.me
! https://github.com/reek/anti-adblock-killer/issues/655
@@||go.padstm.com/?id=$script,domain=mediatechnologycenter.info
@@||go.padsdel.com/?id=$script,domain=mediatechnologycenter.info
! zdunskawola24.pl
! https://github.com/reek/anti-adblock-killer/issues/659
@@||hugo.zdunskawola24.pl/$script,domain=zdunskawola24.pl
! tv3sport.dk (fab)
! https://greasyfork.org/forum/discussion/10354
! https://github.com/reek/anti-adblock-killer/issues/560
@@||tv3sport.dk^$elemhide
@@||tv3sport.dk/ad.banner.adview.html
! freedisc.pl
! https://github.com/reek/anti-adblock-killer/issues/656
@@||webshark.pl/adserver/*/main_script.js?advertise_check=1$script,domain=freedisc.pl
||ocs-pl.oktawave.com/v1/AUTH_*/Reklamy/$object-subrequest,domain=freedisc.pl|reseton.pl
! komentare.sme.sk
! https://github.com/reek/anti-adblock-killer/issues/662
komentare.sme.sk###js-top-info-bar-wrapper
! ghacks.net
! https://github.com/reek/anti-adblock-killer/issues/672
@@||ghacks.net/wp-content/plugins/bwp-minify/$stylesheet,domain=ghacks.net
! topfilmz.com
! https://github.com/reek/anti-adblock-killer/issues/667
topfilmz.com#@##adsense
! londynek.net
! https://github.com/reek/anti-adblock-killer/issues/679
londynek.net###abp
! javfor.me
! https://github.com/reek/anti-adblock-killer/issues/751
! https://github.com/reek/anti-adblock-killer/issues/678
@@||js.juicyads.com/jac.js$script,domain=jav4.me
@@||puhtml.com/7c/70/ab/$script,domain=jav4.me
@@||serve.popads.net/checkInventory.php$script,domain=jav4.me
! kinoman.tv
! https://github.com/reek/anti-adblock-killer/issues/676
kinoman.tv##IMG[src="http://static.kinoman.tv/assets/img/vip-info.png?v"]
! ppe.pl
! https://github.com/reek/anti-adblock-killer/issues/674
ppe.pl###abl
! shinden.pl
! https://github.com/reek/anti-adblock-killer/issues/673
shinden.pl#@#.AD-RC-300x250
! manga-sanctuary.com
! https://github.com/reek/anti-adblock-killer/issues/681
@@||www.smartadserver.com/config.js?$script,domain=manga-sanctuary.com
@@||r.sascdn.com/diff/js/smart.js$script,domain=manga-sanctuary.com
! bild.de
! https://github.com/reek/anti-adblock-killer/pull/687
@@||bild.de^$elemhide
@@||sascdn.com^$script,domain=bild.de
@@||smartadserver.com^$script,domain=bild.de
! itespresso.fr
! https://github.com/reek/anti-adblock-killer/issues/686
@@/advertising.js$script,domain=itespresso.fr
! xxx-image.com
! https://github.com/reek/anti-adblock-killer/issues/675
xxx-image.com###footer > font > b
! geo.de
! https://github.com/reek/anti-adblock-killer/pull/691
geo.de##div.lp_mwi_dialog-overlay.lp_mwi_dialog-overlay--is-active
geo.de##.lp_mwi_dialog-wrapper
! androiding.how
! https://github.com/reek/anti-adblock-killer/pull/693
androiding.how##.jsXY6yjBmGN4
androiding.how##.jsXY6yjBmGN4-bg
! techsini.com
! https://github.com/reek/anti-adblock-killer/issues/698
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=techsini.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=techsini.com
! cuisineactuelle.fr
! https://github.com/reek/anti-adblock-killer/issues/702
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=cuisineactuelle.fr
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=cuisineactuelle.fr
! maskinteknik.dk
! https://github.com/reek/anti-adblock-killer/issues/709
@@||maskinteknik.dk/assets/templates/maskinteknik/gfx/ads.png
! dagens.dk
! https://github.com/reek/anti-adblock-killer/issues/708
||avxwcuaagfcdn.net^$domain=dagens.dk
! al.ly
! https://github.com/reek/anti-adblock-killer/issues?q=al.ly
! http://pastebin.com/Zg4H2xXi
@@||al.ly/Advertiser.js$script
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=al.ly
! gokano.com
! https://github.com/reek/anti-adblock-killer/issues/704
gokano.com#@#.adsbygoogle
! hdwallpapers4you.com
! https://greasyfork.org/es/forum/discussion/6838
@@||hdwallpapers4you.com/js/adsbygoogle.js$script
! ctenetwork.com
! https://github.com/reek/anti-adblock-killer/issues/713
||ctenetwork.com^$third-party
! p2pcast.tv
! https://github.com/reek/anti-adblock-killer/issues/717
p2pcast.tv#@##adblock
! youporn.com
! https://github.com/reek/anti-adblock-killer/issues/720
@@||media.trafficjunky.net/js/holiday-promo.js$script,domain=youporn.com
! corporatecentral.com
! https://github.com/reek/anti-adblock-killer/issues/725
corporatecentral.com#@##top_add
corporatecentral.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=corporatecentral.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=corporatecentral.com
! cityam.com
! https://github.com/reek/anti-adblock-killer/issues/700
||cityam.com/assets/js/PbCode.min.js$script
! rtlxl.nl
! https://github.com/reek/anti-adblock-killer/issues/726
@@||staticfiles.rtl.nl/lib/rtl.jsapi/pubads_impl_70r.js$script,domain=rtlxl.nl
! macos-app.com
! https://github.com/reek/anti-adblock-killer/issues/727
macos-app.com#@##adsense
! squidboards.com
! https://github.com/reek/anti-adblock-killer/issues/730
squidboards.com##.funbox
squidboards.com##.premiumBlock
squidboards.com##.premiumContain
! mrpiracy.xyz / mrpiracy.club
! https://github.com/reek/anti-adblock-killer/issues/1405
! https://github.com/reek/anti-adblock-killer/issues/1347
! https://github.com/reek/anti-adblock-killer/issues/732
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=mrpiracy.xyz|mrpiracy.club
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=mrpiracy.xyz|mrpiracy.club
! iplex.pl
! https://github.com/reek/anti-adblock-killer/issues/735
@@||cdn3.iplex.pl/iplex3/static/js/ads.js$script
! giovanniterlingen.com
! https://github.com/reek/anti-adblock-killer/issues/738
giovanniterlingen.com#@#.text_ads
! starmusiq.com
starmusiq.com###adblock-detector-popup-alert
starmusiq.com###adblock-detector-fade-texture
! yocast.tv
! https://github.com/reek/anti-adblock-killer/issues/743
yocast.tv#@##adblock
yocast.tv###notice
! megabitload.com
! https://greasyfork.org/en/forum/discussion/7013
@@||cpalead.com/cpalock.php$script,domain=megabitload.com
! vtele.ca
! https://github.com/reek/anti-adblock-killer/issues/790
! https://github.com/reek/anti-adblock-killer/issues/752
! https://github.com/reek/anti-adblock-killer/issues/612
@@/blockadblock.js$script,domain=vtele.ca
@@/adgear.js$script,domain=vtele.ca
! synonim.net
! https://github.com/reek/anti-adblock-killer/issues/758
@@||synonim.net/ads$script,xmlhttprequest,domain=synonim.net
! olweb.tv
! https://github.com/reek/anti-adblock-killer/issues/757
@@||olcdn.net/ads.adsense.ads1.js$script
! film.org.pl
! https://github.com/reek/anti-adblock-killer/issues/759
film.org.pl#@##adsense
! hentenaar.com
! https://github.com/reek/anti-adblock-killer/issues/755
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=hentenaar.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=hentenaar.com
hentenaar.com#@#.adsbygoogle
! securenetsystems.net
! https://github.com/reek/anti-adblock-killer/issues/770
@@||securenetsystems.net/*/scripts/adv.js$script,~third-party
! jeu-concours.biz
! https://github.com/reek/anti-adblock-killer/issues/775
@@||jeu-concours.biz/show_ads.js
! hugo.sieradz.com.pl
! https://github.com/reek/anti-adblock-killer/issues/780
@@||hugo.sieradz.com.pl^$script
! terrarium.com.pl
! https://github.com/reek/anti-adblock-killer/issues/779
@@||advert-serv.johnmorris.me/adserver/adlogger_tracker.php$subdocument,script,domain=www.terrarium.com.pl
! 6play.fr
! https://github.com/reek/anti-adblock-killer/issues/787
@@||6play.fr/media/js/publicite.js
! animeheaven.eu
! https://github.com/reek/anti-adblock-killer/pull/910
! https://github.com/reek/anti-adblock-killer/issues/789
@@||animeheaven.eu/*/showads$script
! skyrock.com
skyrock.com##IMG[src*="adblock/pave.png"]
skyrock.com##IMG[src*="adblock/megabanner.png"]
! novamov.com
! https://github.com/reek/anti-adblock-killer/issues/795
@@||novamov.com/banner.php$script
! nowvideo (network)
! https://github.com/reek/anti-adblock-killer/issues?q=5nowvideo.com
! https://github.com/reek/anti-adblock-killer/issues?q=nowvideo
@@||nowvideo.sx/banner.php$script
@@||nowvideo.to/banner.php$script
@@||nowvideo.co/banner.php$script
@@||5nowvideo.com/banner.php$script
! nowvideo.li
! https://greasyfork.org/forum/discussion/7322/
@@||nowvideo.li/banner.php$script
! wholecloud.net
! https://github.com/reek/anti-adblock-killer/issues/798
@@||wholecloud.net/banner.php$script
! cloudtime.to
! https://github.com/reek/anti-adblock-killer/issues/799
@@||cloudtime.to/banner.php$script
! videoweed.es
! https://github.com/reek/anti-adblock-killer/issues/795
@@||videoweed.es/banner.php$script
! showsport-tv.com
! https://github.com/reek/anti-adblock-killer/issues/802
||showsport-tv.com/js/detect.js$script
||showsport-tv.com/js/detect.css$stylesheet
! https://github.com/reek/anti-adblock-killer/issues/804
! radioline.co
! https://github.com/reek/anti-adblock-killer/issues/806
@@||radioline.co/js/advert.js$xmlhttprequest,~third-party
! purevid.com
purevid.com#@##ad
! cba.pl
! j.pl
! c0.pl
! y0.pl
! https://github.com/reek/anti-adblock-killer/issues/815
@@||go.idmnet.bbelements.com/bb/bb_one$script,domain=cba.pl|j.pl|c0.pl|y0.pl
@@||go.idmnet.bbelements.com/please/showit/$script,domain=cba.pl|j.pl|c0.pl|y0.pl
! voyageforum.com
! https://github.com/reek/anti-adblock-killer/issues/816
@@||images.voyageforum.com^$image
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=voyageforum.com
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=voyageforum.com
! pssite.com
! https://github.com/reek/anti-adblock-killer/issues/820
pssite.com#@#.adver
! hitek.fr (is_blocker = false;)
! https://github.com/reek/anti-adblock-killer/issues/822
@@||hitek.fr/ads.js$script
@@||hitek.fr/adserver.js$script
! xboxforum.pl
! https://github.com/reek/anti-adblock-killer/issues/823#issuecomment-162237832
xboxforum.pl##.noticeContainer:not(.hidden)
! teleboy.ch
! https://greasyfork.org/forum/discussion/7303/
@@||teleboy.ch/assets/js/werbung.ad.dc2.adtech.de.addyn.js$xmlhttprequest,domain=teleboy.ch
! scooter-chinois-4t.com
! https://github.com/reek/anti-adblock-killer/issues/829
scooter-chinois-4t.com#@#.adsbygoogle
! freeiphone.fr
! https://github.com/reek/anti-adblock-killer/issues/827
freeiphone.fr#@##adsense
! movie7share.net
! https://github.com/reek/anti-adblock-killer/issues/834
rlsbb.movie7share.net##.information > [color="red"] > H3
! wwwshooter.com
! https://github.com/reek/anti-adblock-killer/issues/835
@@||wwwshooter.com/js/adblockdetect/_advertisement.js$script
! samehadaku.net
! https://github.com/reek/anti-adblock-killer/issues/838
samehadaku.net#@##adsense
! terrarium.pl
! https://github.com/reek/anti-adblock-killer/issues/839
@@||terrarium.pl/public/js/showads.js$script
! optyczne.pl
! https://github.com/reek/anti-adblock-killer/issues/837
@@||optyczne.pl/adsense.js$script
! epiotrkow.pl
! https://github.com/reek/anti-adblock-killer/issues/842
@@||www.epiotrkow.pl/js/adv.reklama.js$script
! wakanim.tv
! https://github.com/reek/anti-adblock-killer/issues/844
@@||ads.stickyadstv.com/www/delivery/swfIndex.php?$xmlhttprequest,domain=wakanim.tv
! hayan.tv
! https://github.com/reek/anti-adblock-killer/issues/843
hayan.tv#@##uzcrsite
@@||hayan.tv/adp.htm
! quebeccoupongratuit.com
! https://github.com/reek/anti-adblock-killer/issues/846
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$script,domain=quebeccoupongratuit.com
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=quebeccoupongratuit.com
! imgbb.net (isAdBlockActive=false;)
! https://github.com/reek/anti-adblock-killer/issues/847
@@||imgbb.net/js/ads.js$script
! ddtorun.pl
! ddwloclawek.pl
! https://github.com/reek/anti-adblock-killer/issues/853
@@||ddtorun.pl/pl/js/show_ads.js$script
@@||ddwloclawek.pl/pl/js/show_ads.js$script
! benchmark.pl
! https://github.com/reek/anti-adblock-killer/issues/852
benchmark.pl###adblock-info
! ruutu.fi
! https://github.com/reek/anti-adblock-killer/issues/862
@@||adserver.adtech.de/?adrawdata/$xmlhttprequest,domain=ruutu.fi
! zelaznalogika.net
! https://github.com/reek/anti-adblock-killer/issues/866
zelaznalogika.net#@##adsense
! mymanga.io
! https://github.com/reek/anti-adblock-killer/issues?q=mymanga.io
@@||mymanga.io/css/ads.css$stylesheet
! rychlost.cz
! https://github.com/reek/anti-adblock-killer/pull/854#issuecomment-166157295
rychlost.cz###cpcbsd9z1
||rychlost.cz/_pub/jquery/scripts.js$script
||rychlost.cz/_pub/scripts/js.js$script
||c.imedia.cz/js/scripts.js$script,domain=rychlost.cz
! bitcoin-gator.com
! https://github.com/reek/anti-adblock-killer/issues/874
@@||bitcoin-gator.com/public/adblock.js$script
! how2play.pl 
! https://github.com/reek/anti-adblock-killer/issues/876
@@||how2play.pl/wp-content/themes/htp/js/vendor/adblock.js$script
! theargus.co.uk
! https://github.com/reek/anti-adblock-killer/issues/877
theargus.co.uk##.adwarn.adblock-warning
! merlininkazani.com
! https://github.com/reek/anti-adblock-killer/issues/881
@@||merlininkazani.com/js/ads.js$script
! putlocker.is
! https://github.com/reek/anti-adblock-killer/issues/894
@@||jsc.mgid.com^*/putlocker.is.$script,domain=putlocker.is
! anibatch.net
! https://github.com/reek/anti-adblock-killer/issues/895
anibatch.net##.su-box.su-box-style-default
! agarserv.com
! https://github.com/reek/anti-adblock-killer/issues/896
agarserv.com#@##adsense
! biggestplayer.me
biggestplayer.me##.pipi
! missmedia.pl
! https://github.com/reek/anti-adblock-killer/issues/897
@@||go.idmnet.bbelements.com/bb/bb_one$script,domain=missmedia.pl
@@||go.idmnet.bbelements.com/please/showit/$script,domain=missmedia.pl
! hornmatters.com
! https://github.com/reek/anti-adblock-killer/issues/904
hornmatters.com#@#.footer_ad
! auroravid.to
! https://github.com/reek/anti-adblock-killer/issues/907
@@||auroravid.to/banner.php$script
! appki.com.pl
! https://github.com/reek/anti-adblock-killer/issues/901
appki.com.pl#@##adsense
! dstar.pzk.pl
! https://github.com/reek/anti-adblock-killer/issues/908
dstar.pzk.pl#@#.adsbox
! rappers.in
! https://github.com/reek/anti-adblock-killer/issues/915
@@||rappers.in/js/antiadblock.js$script
! faucetbitcoins
! https://github.com/reek/anti-adblock-killer/issues/912#issuecomment-169270277
@@||faucetbitcoins.com/banner.gif$image
! grajkownia.com
! https://github.com/reek/anti-adblock-killer/issues/913
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=grajkownia.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=grajkownia.com
! imgnova.xyz
! https://github.com/reek/anti-adblock-killer/issues/917
@@||serve.popads.net/checkInventory.php$script,domain=imgnova.xyz
! ads
imgnova.xyz###boxes
imgnova.xyz###mask
||adf.ly/puscript$script,domain=imgnova.xyz
||allanalpass.com^$popup,domain=imgnova.xyz
||1339.cf/yuzrmji.js$script,domain=imgnova.xyz
||imgnova.xyz/Tas/P.js$script,domain=imgnova.xyz
! stalker-worlds.ru
! PM
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=stalker-worlds.ru
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=stalker-worlds.ru
! iprima.cz
! https://github.com/reek/anti-adblock-killer/issues/920
iprima.cz#@#.bannerAd
! woprime.com
! https://github.com/reek/anti-adblock-killer/issues/922
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=woprime.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=woprime.com
! boxfaucet.com
! https://github.com/reek/anti-adblock-killer/issues/925
@@||boxfaucet.com/banner.gif$image
! 3bmeteo.com
! https://github.com/reek/anti-adblock-killer/issues/929
3bmeteo.com###adblock_warning
! itsrainingbitcoins.com
! https://github.com/reek/anti-adblock-killer/issues/927
@@||itsrainingbitcoins.com/banner.gif$image
! flymer.ru
! https://github.com/reek/anti-adblock-killer/issues/796
flymer.ru#@#.ad-unit
! phonearena.com
! https://github.com/reek/anti-adblock-killer/issues/936
phonearena.com##.adblock_awareness
! cnx-software.com
! https://github.com/reek/anti-adblock-killer/issues/1042
! https://github.com/reek/anti-adblock-killer/issues/937
cnx-software.com##img[src="/pic/support_cnxsoft.png"]
cnx-software.com##img[src="/pic/support_cnx-software.png"]
! srnk.co
! https://github.com/reek/anti-adblock-killer/issues/1178
! https://github.com/reek/anti-adblock-killer/issues/944
@@||srnk.co/js/ads.js$xmlhttprequest
! darkbtc.info
! https://github.com/reek/anti-adblock-killer/issues/953
@@||darkbtc.info/banner.gif$image
! daciaclub.cz
! https://greasyfork.org/forum/discussion/7860
daciaclub.cz#@#.reklama
! windows7themes.net
! https://greasyfork.org/en/forum/discussion/7871
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=windows7themes.net
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=windows7themes.net
! beforeitsnews.com
! https://greasyfork.org/forum/discussion/7872
beforeitsnews.com###fancybox-overlay
beforeitsnews.com###fancybox-wrap
! croydonguardian.co.uk
! https://github.com/reek/anti-adblock-killer/issues/959
||cloudfront.net^$script,domain=croydonguardian.co.uk
! tobys.dk
! https://github.com/reek/anti-adblock-killer/issues/960
tobys.dk#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=tobys.dk
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=tobys.dk
! fanfiktion.de
! https://github.com/reek/anti-adblock-killer/issues/963
||fanfiktion.de/pics/*.gif$domain=fanfiktion.de
fanfiktion.de###ad-leaderboard-inner
! iprima.cz
! https://github.com/reek/anti-adblock-killer/issues/966
iprima.cz#@#.adsbox
! iptvforever.com
! https://github.com/reek/anti-adblock-killer/issues/967
@@||iptvforever.com/js/adsbygoogle.js$script
! mfiles.pl
! https://github.com/reek/anti-adblock-killer/issues/971
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$script,domain=mfiles.pl
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$script,domain=mfiles.pl
mfiles.pl###float_square
! bitvid.sx
! https://github.com/reek/anti-adblock-killer/issues/974
@@||bitvid.sx/banner.php$script
bitvid.sx###aad
! cultofmac.com
! https://github.com/reek/anti-adblock-killer/issues/978
||cultofmac.com/wp-content/plugins/com2014-ads/static/js/frontend-functionality.js$script
! ios-blog.co.uk
! https://github.com/reek/anti-adblock-killer/issues/977
@@||ios-blog.co.uk/*/showads.js$script
! dlneko.org
! https://github.com/reek/anti-adblock-killer/issues/972
dlneko.org##.xDialog
dlneko.org##.DialogMask
! digitalcitizen.life
! https://github.com/reek/anti-adblock-killer/issues/987
digitalcitizen.life###dont-block-our-ads-popup
digitalcitizen.life##.TopAdBanner
! alluc.ee (isAdBAct=false;isAdBlockActive=false;)
! https://github.com/reek/anti-adblock-killer/issues/988
@@||alluc.ee/js/ads.js$script
alluc.ee###aovl
! gaijin.at
! https://github.com/reek/anti-adblock-killer/issues/989
@@||gaijin.at/ads/advertising.js$script
! linuxiarze.pl
! https://github.com/reek/anti-adblock-killer/issues/991
@@||linuxiarze.pl/images/ad/$image
! se.pl
! https://github.com/reek/anti-adblock-killer/issues/992
se.pl###adb_popup
! filehorse.com (isAdBlockActive=false;)
! https://github.com/reek/anti-adblock-killer/issues/993
@@||filehorse.com/js/ads.js$script
! canalplus.fr
! https://github.com/reek/anti-adblock-killer/issues/994
@@||videoplaza.tv^$object-subrequest,domain=canalplus.fr
! binbucks.com
@@||binbucks.com/ads/ads.html$subdocument
! talktv.vn
! https://github.com/reek/anti-adblock-killer/issues/995
@@||talktv.vn/resource/third-party/jwplayer/ads.js$object-subrequest
! telegraaf.nl
! https://github.com/reek/anti-adblock-killer/issues/1000
@@||telegraaf.tcdn.nl/javascript/showads.*.js$script
! mangasproject.com.br
! mangasproject.net.br
! mangas.zlx.com.br
! http://brazilunblock.info/
! https://greasyfork.org/fr/forum/discussion/4132
! https://github.com/reek/anti-adblock-killer/issues/998
@@/js/lib/controllers/Leitor/Leitor.min.js$script,domain=mangasproject.com.br|mangasproject.net.br|mangas.zlx.com.br
! telegraph.co.uk
! https://github.com/reek/anti-adblock-killer/issues/973
||optimizely.com^$third-party
! bleachmx.co
! https://github.com/reek/anti-adblock-killer/issues/1005
bleachmx.co#@##adsense
! twojeip.wp.pl
! https://github.com/reek/anti-adblock-killer/issues/1019
twojeip.wp.pl#@##adverts
! sportdeutschland.tv
! https://github.com/reek/anti-adblock-killer/issues/1015
@@||ad.71i.de/global_js/$script,domain=sportdeutschland.tv
@@||sportdeutschland.vidibuscloud.net/themes/sportdeutschland-623/javascripts/lib/my_ad_integration.js$script
! f1i.com
! https://github.com/reek/anti-adblock-killer/issues/1020
@@||partner.googleadservices.com/gpt/pubads_impl_$script,domain=f1i.com
! wallpapermania.eu
! https://github.com/reek/anti-adblock-killer/issues/1023
@@||wallpapermania.eu/assets/js/ads.js$xmlhttprequest
! lepoint.fr
! https://github.com/reek/anti-adblock-killer/issues/1027
! https://github.com/reek/anti-adblock-killer/issues/1035
@@||lepoint.fr/publicite/*/*/pub.js$script,~third-party
! rte.ie
! https://github.com/reek/anti-adblock-killer/issues/1221
! https://github.com/reek/anti-adblock-killer/issues/1044
! https://github.com/reek/anti-adblock-killer/issues/1030
! https://github.com/reek/anti-adblock-killer/issues/370
@@||bs.serving-sys.com^*crossdomain.xml$object-subrequest,domain=rte.ie
@@||pubads.g.doubleclick.net/gampad/ads?$object-subrequest,domain=rte.ie
! outlook.live.com
! https://github.com/reek/anti-adblock-killer/issues/1022
outlook.live.com###owaadbar
! shencomics.com
! http://pastebin.com/8EjnmMne
! https://github.com/reek/anti-adblock-killer/issues/1036
@@||adr.realclick.co.kr/favicon.ico$subdocument,image,domain=shencomics.com
! lolsy.tv
! https://github.com/reek/anti-adblock-killer/issues/1038
lolsy.tv##.reklama-sidebar
! playonlinux.com
! https://github.com/reek/anti-adblock-killer/issues/1041
playonlinux.com###menu_droite > .login > div
! wired.com
! https://greasyfork.org/en/forum/discussion/8235
!@@||wired.com^$script
! onperiscope.com
! https://greasyfork.org/forum/discussion/8223
onperiscope.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=onperiscope.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=onperiscope.com
! downloads.codefi.re
! https://github.com/reek/anti-adblock-killer/issues/1048
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=downloads.codefi.re
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=downloads.codefi.re
! settlersonlinemaps.com
! https://github.com/reek/anti-adblock-killer/issues/1051
settlersonlinemaps.com###prb
! hentai-foundry.com (var noadblocker=true;)
! https://github.com/reek/anti-adblock-killer/issues/1059
@@||img.hentai-foundry.com/themes/default/js/adv.js$script
! massdj.org
! https://github.com/reek/anti-adblock-killer/issues/1060
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=massdj.org
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=massdj.org
! abysstream.com
! https://github.com/reek/anti-adblock-killer/issues/1062
@@||abysstream.com/ads.js$script
! cekresi.com
! https://github.com/reek/anti-adblock-killer/issues/1064
cekresi.com##.pleasehideadblkuc.popio
! gamersglobal.de
! https://github.com/reek/anti-adblock-killer/issues/1068
@@||gamersglobal.de/wbg/www/delivery/spcjs.js$script
! auto.cz
! https://github.com/reek/anti-adblock-killer/issues/1071
@@||auto.cz/auto/skins/2012/js/advertisment.js$script
! dragoart.com ()
! https://github.com/reek/anti-adblock-killer/issues/1069
@@||dragoart.com/ads.js$script,~third-party
! trading-evolution.com
! https://github.com/reek/anti-adblock-killer/issues/1070
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=trading-evolution.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=trading-evolution.com
! creativeuncut.com
! https://github.com/reek/anti-adblock-killer/issues/1072
creativeuncut.com###g_abox
! hrej.cz
! https://greasyfork.org/fr/forum/discussion/8349
@@||go.cz.bbelements.com/bb/bb_one2n.$script,domain=hrej.cz
! nu.nl
! https://github.com/reek/anti-adblock-killer/issues/1076
@@||nu.nl/static/js/advertising.js$script
! sport1.de
! https://github.com/reek/anti-adblock-killer/issues?q=sport1.de
! http://pastebin.com/wLKxczeS
@@|http://$script,domain=sport1.de
@@|https://$script,domain=sport1.de
! mocospace.com
! https://github.com/reek/anti-adblock-killer/issues/1008
! http://pastebin.com/XAYLdNN8
mocospace.com#@#.dfp_ad
mocospace.com#@#.ads1x1
@@/html/images/blank.png$image,domain=mocospace.com
mocospace.com###dialog-adblocker
mocospace.com##.jqmOverlay
! filikula.com
! PM
@@||filikula.com/wp-admin/admin-ajax.php$xmlhttprequest
! ruleporn.com
! https://github.com/reek/anti-adblock-killer/issues/1079
ruleporn.com#@##adsense
! oglaszamy24.pl
! https://github.com/reek/anti-adblock-killer/issues/1090
@@||oglaszamy24.pl/js-css/reklamy/bannery/google_ads/ad/banner/adv.js$script
! abovetopsecret.com
! https://github.com/reek/anti-adblock-killer/issues/1093
@@||abovetopsecret.com/ads.html$subdocument
! seoghoer.dk
! https://github.com/reek/anti-adblock-killer/issues/1096
||allercdn.net/randomurl.js$script,domain=seoghoer.dk
! dama.bg
! https://github.com/reek/anti-adblock-killer/issues/1100
@@||dama.bg^*/js/ad$script
! upvast.com
! https://github.com/reek/anti-adblock-killer/issues/1102
@@||upvast.com/pop.js$script
! theguardian.com
! https://github.com/reek/anti-adblock-killer/issues/1107
theguardian.com##.js-adblock-sticky
theguardian.com##.site-message--adblock-message
! dlh.net
! https://github.com/reek/anti-adblock-killer/issues/1108
@@||dlh.net/ads.html$subdocument
! computerworld.com.au
! https://github.com/reek/anti-adblock-killer/issues/1113
||cdn.computerworld.com.au/compressor-staticfiles/adsmin/idg_gpt_pipeline_generated.js$script
! vipracing.info
! https://github.com/reek/anti-adblock-killer/issues/818
vipracing.info##.in-video-adds
!! mangamint.com / mangabird.me
! https://greasyfork.org/id/forum/discussion/8524
@@/sites/default/files/*$image,domain=mangamint.com|mangabird.me
mangamint.com,mangabird.me#@#.ad728
! clikcoin.pl
! https://github.com/reek/anti-adblock-killer/issues/1121
clikcoin.pl#@##adsense
! vider.pl
! https://github.com/reek/anti-adblock-killer/issues/1122
@@||webshark.pl/adserver/*/main_script.js?advertise_check=1$script,domain=vider.pl
! halamadrid.pl
! https://github.com/reek/anti-adblock-killer/issues/1123
@@||halamadrid.pl/wp-content/plugins/noadblock-nice-message/assets/js/ads.js$script
! turfomania.fr
! https://github.com/reek/anti-adblock-killer/issues/1125
turfomania.fr###adblock-overlay
! pcworld.co.nz
! https://github.com/reek/anti-adblock-killer/issues/1126
||pcworld.co.nz/*pipeline$script
! girlstory.kr
! https://github.com/reek/anti-adblock-killer/issues/1130
girlstory.kr#@#.adsbygoogle
! jupako.uk
! https://github.com/reek/anti-adblock-killer/issues/1116
@@||jupako.uk/ads.php$subdocument
jupako.uk###over-small
jupako.uk###over-large
! wurst-client.tk
! https://github.com/reek/anti-adblock-killer/issues/1134
wurst-client.tk#@#.adsbygoogle
! sweclockers.com
! https://github.com/reek/anti-adblock-killer/issues/1138
@@||sweclockers.com/js/ad.js$script
! wstream.video
! https://github.com/reek/anti-adblock-killer/issues/1137
@@||ads.ad-center.com/smart_ad/display?$subdocument,domain=wstream.video
! ria.ru
! https://github.com/reek/anti-adblock-killer/issues/1136
ria.ru##.antiblock
! net.hr
! https://github.com/reek/anti-adblock-killer/issues/1150
! https://github.com/reek/anti-adblock-killer/issues/1139
net.hr#@#.reklama
! hdmovie14.net
! https://github.com/reek/anti-adblock-killer/issues/1133
185.63.252.176#@#div[id^="MarketGid"]
hdmovie14.net#@#.pub_300x250
hdmovie14.net#@#.pub_300x250m
hdmovie14.net#@#.pub_728x90
hdmovie14.net#@#.text-ad
hdmovie14.net#@#.textAd
hdmovie14.net#@#.text_ad
hdmovie14.net#@#.text_ads
hdmovie14.net#@#.text-ads
hdmovie14.net#@#.text-ad-links
! voici.fr
! https://github.com/reek/anti-adblock-killer/issues/1354
@@||ops.prismamediadigital.com/js/advertisement.js$xmlhttprequest,domain=voici.fr
||live.prismamediadigital.com/ops/TRA/ab_ban/$image,domain=voici.fr
@@||www.voici.fr/ads.js|$xmlhttprequest
! turkleech.com
! https://greasyfork.org/en/forum/discussion/8571
turkleech.com###h237
! leo.org
! https://github.com/reek/anti-adblock-killer/issues/1145
leo.org##div.floatRight.p.tf1
! joyreactor.cc
! https://github.com/reek/anti-adblock-killer/issues/1140
joyreactor.cc##div#sidebar
! kupongid.ru
! https://greasyfork.org/en/forum/discussion/8612
@@||kupongid.ru/design/js/adblock_detector.js$script
! pornhub network
! https://github.com/reek/anti-adblock-killer/issues?q=pornhub
@@||media.trafficjunky.net/js/holiday-promo.js$script,domain=pornhub.com|tube8.fr|tube8.es|tube8.com
pornhub.com,tube8.fr,tube8.es,tube8.com###adBlockAlertWrap
pornhub.com,tube8.fr,tube8.es,tube8.com###abAlert
! hackingwithswift.com
! https://github.com/reek/anti-adblock-killer/issues/1151
@@||hackingwithswift.com/js/adsbygoogle.js$script
! vtomske.ru
! https://github.com/reek/anti-adblock-killer/issues/1149
@@||st.vtomske.ru/js/adv*.js$script
! appspot.com
! https://github.com/reek/anti-adblock-killer/issues/1154
@@||ge-map-overlays.appspot.com/files/js/ads.js$script
! serve.netsh.org
! https://github.com/reek/anti-adblock-killer/issues/1141
@@||serve.netsh.org/pub/*/ads.js$xmlhttprequest
! di.se
! https://github.com/reek/anti-adblock-killer/issues/1319
! https://github.com/reek/anti-adblock-killer/issues/1159
! https://github.com/reek/anti-adblock-killer/issues/841
@@||di.se^$elemhide
! trackr.fr
! PM
@@||trackr.fr/sites/all/themes/contrib/touch/js/miroirs/adwordstracking.js$script
! nokiahacking.pl
! https://github.com/reek/anti-adblock-killer/issues/1162
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=nokiahacking.pl
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=nokiahacking.pl
! jeja.pl
! https://github.com/reek/anti-adblock-killer/issues/1163
jeja.pl#@##bottomAd
! seguridadwireless.es
! PM
@@||googleads.g.doubleclick.net^$subdocument,domain=seguridadwireless.es
! semprot.com
! https://greasyfork.org/forum/discussion/7663
! https://github.com/reek/anti-adblock-killer/issues/1349
! https://github.com/reek/anti-adblock-killer/issues/1168
/clientscript/vbulletin_userpost.js$script,domain=64.237.43.94|46.166.167.16|semprot.com
/clientscript/vbulletin_userpost_script.js$domain=64.237.43.94|46.166.167.16|semprot.com
||gambar123.com/semprotsejati/xyz-$image,domain=64.237.43.94|46.166.167.16|semprot.com
! embedupload.com
! https://github.com/reek/anti-adblock-killer/issues/1174
! https://github.com/reek/anti-adblock-killer/issues/1173
embedupload.com#@#.pub_300x250
embedupload.com#@#.pub_300x250m
embedupload.com#@#.pub_728x90
embedupload.com#@#.text-ad
embedupload.com#@#.textAd
embedupload.com#@#.text_ad
embedupload.com#@#.text_ads
embedupload.com#@#.text-ads
embedupload.com#@#.text-ad-links
! newyorker.com
! https://github.com/reek/anti-adblock-killer/issues/1177
newyorker.com#@#.ad-container
! eskago.pl
! https://github.com/reek/anti-adblock-killer/issues/1176
@@||eskago.pl/html/js/ads-header.js$script
! freetuts.net
! https://github.com/reek/anti-adblock-killer/issues/1179
@@||freetuts.net/*/adsense.js$script
! lemonde.fr
! https://github.com/reek/anti-adblock-killer/issues/1186
@@||lemonde.fr/*/advertisingbanner.js$xmlhttprequest
! lefigaro.fr
! https://github.com/reek/anti-adblock-killer/issues/1187
@@||a.f1g.fr/*/adsense.js$script,domain=lefigaro.fr
! lexpress.fr
! https://github.com/reek/anti-adblock-killer/issues/1189
@@||lexpress.fr/*/ads.css$stylesheet
! nouvelobs.com
! https://github.com/reek/anti-adblock-killer/issues/1201
||referentiel.nouvelobs.com/js/nobs;manifest-analytics.js$script
! 20min.fr
! https://github.com/reek/anti-adblock-killer/issues/1337
! https://github.com/reek/anti-adblock-killer/issues/1180
@@/js/adblock.js$script,domain=20minutes.fr|20min.fr
||*.kameleoon.eu^$domain=20minutes.fr|20min.fr
20minutes.fr,20min.fr##.ab-container
! 20min.ch
! https://github.com/reek/anti-adblock-killer/issues/1198
||googletagmanager.com/gtm.js$script,domain=20minutes.ch|20min.ch
! rtl.fr
! https://github.com/reek/anti-adblock-killer/issues/1192
rtl.fr#@##bottomAd
! larvf.com
! https://github.com/reek/anti-adblock-killer/issues/1191
@@||larvf.com/js/ads.js$script
! sports4u network
! https://github.com/reek/anti-adblock-killer/issues?q=sports4u
sports4u.tv,sports4u.live#@##adblock
! filesisland.com
! https://github.com/reek/anti-adblock-killer/issues/1195
@@||filesisland.com/js/ads.js$script
! oneplay.tv
! https://github.com/reek/anti-adblock-killer/issues/1193
@@||oneplay.tv/embed/darkuzdev_ads.js$script
! goldenmoustache.com
! https://github.com/reek/anti-adblock-killer/issues/1200
||goldenmoustache.com/wp-content/themes/golden-moustache/js/libs/modernizr-$script
! clubic.com
! https://github.com/reek/anti-adblock-killer/issues/1196
! https://greasyfork.org/fr/forum/discussion/8713
||clubic.com/assets/js/6f34f4c.js$script
! 6play.fr
! https://github.com/reek/anti-adblock-killer/issues/1204
||6play.fr/assets/js/vendors-3600848c1f.js$script
! bfmtv.com
! https://github.com/reek/anti-adblock-killer/issues/1209
! https://greasyfork.org/forum/discussion/10597
@@||static.bfmtv.com/ressources/js/ads.js$script
bfmtv.com##.geste
! 01net.com
! https://github.com/reek/anti-adblock-killer/issues/1235
01net.com##.geste
! crunchyroll.com
! https://github.com/reek/anti-adblock-killer/issues/1206
@@||crunchyroll.com/*/ads_enabled_flag.js$script
! vgtv.no
! https://github.com/reek/anti-adblock-killer/issues?q=vgtv.no
@@||acdn.adnxs.com/ast/ast.js$script,domain=vgtv.no|vg.no
! godt.no
! https://github.com/reek/anti-adblock-killer/issues/1419
godt.no##.adblock-info
! minmote.no
! https://github.com/reek/anti-adblock-killer/issues/1402
minmote.no##.adblock-info
! btaia.com
! https://github.com/reek/anti-adblock-killer/issues/1213
@@||btaia.com/bloggerex.js$script
! dl.free.fr
! https://github.com/reek/anti-adblock-killer/issues/1222
@@||cpm1.affiz.net/tracking/ads_video$script,domain=pltform.springstreetads.com
! blastingnews.com
! https://github.com/reek/anti-adblock-killer/issues/1229
@@||srs.blastingnews.com/js/adv/_compiled.js$script
! freevaluator.com
! https://github.com/reek/anti-adblock-killer/issues/1236
||freevaluator.com^*/js/check.js
! wpmienphi.com
! https://github.com/reek/anti-adblock-killer/issues/1238
wpmienphi.com###d7b2
! anisubsia.com
! https://github.com/reek/anti-adblock-killer/issues/1240
! https://github.com/reek/anti-adblock-killer/issues/14
anisubsia.com###de13
! theplace2.ru
! https://github.com/reek/anti-adblock-killer/issues/1242
theplace2.ru#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=theplace2.ru
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=theplace2.ru
! tut.by
! https://github.com/reek/anti-adblock-killer/issues/1244
tut.by#@#.pub_300x250
tut.by#@#.pub_300x250m
tut.by#@#.pub_728x90
tut.by#@#.text-ad
tut.by#@#.textAd
tut.by#@#.text_ad
tut.by#@#.text_ads
tut.by#@#.text-ads
tut.by#@#.text-ad-links
! scambiofile.info
! https://github.com/reek/anti-adblock-killer/issues?q=scambiofile.info
@@||scambiofile.info/js/ads.$script
! farmet.info
! https://github.com/reek/anti-adblock-killer/issues/889
@@||farmet.info/ads.php$subdocument
! robotcoingame.com / monstercoingame.com / wonderlandco.in
! https://github.com/reek/anti-adblock-killer/issues/1248
robotcoingame.com,monstercoingame.com,wonderlandco.in#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=robotcoingame.com|monstercoingame.com|wonderlandco.in
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=robotcoingame.commonstercoingame.com|wonderlandco.in
! remotupload.com
! https://github.com/reek/anti-adblock-killer/issues/1249
||remotupload.com/js/bigtouch.js$script
! cbsnews.com
! https://github.com/reek/anti-adblock-killer/issues/1406
! https://github.com/reek/anti-adblock-killer/issues/1253
@@|http://$xmlhttprequest,image,domain=cbsnews.com
@@||pubads.g.doubleclick.net^$object-subrequest,domain=cbsnews.com
! bmw-club.cz
! https://github.com/reek/anti-adblock-killer/issues/1251
bmw-club.cz#@#.reklama
! foerderland.de
! https://github.com/reek/anti-adblock-killer/issues/1254
foerderland.de#@#.pub_300x250
foerderland.de#@#.pub_300x250m
foerderland.de#@#.pub_728x90
foerderland.de#@#.text-ad
foerderland.de#@#.textAd
foerderland.de#@#.text_ad
foerderland.de#@#.text_ads
foerderland.de#@#.text-ads
foerderland.de#@#.text-ad-links
! elfqrin.com
! https://github.com/reek/anti-adblock-killer/issues/1255
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=elfqrin.com
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=elfqrin.com
! file4go.net
! https://github.com/reek/anti-adblock-killer/issues/1258
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=file4go.net
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=file4go.net
! nowdownload.ec
! https://github.com/reek/anti-adblock-killer/issues/1259
@@||nowdownload.ec/banner.php$script
! nationalgeographic.com
! https://github.com/reek/anti-adblock-killer/issues/1260
@@||nationalgeographic.com/global/js/advertising.js$script
! tutoriels-android.com
tutoriels-android.com##.an-alternative
! next-episode.net
! https://github.com/reek/anti-adblock-killer/issues/1262
next-episode.net###rundown
! larioja.com
! https://github.com/reek/anti-adblock-killer/issues/1316
! https://github.com/reek/anti-adblock-killer/issues/1277
@@||larioja.com/*/adfrm.js$script
! smashingmagazine.com
! https://github.com/reek/anti-adblock-killer/issues/1278
||media-mediatemple.netdna-ssl.com/wp-content/themes/smashing-magazine/assets/js/blocked.min.js$script,domain=smashingmagazine.com
! dz-android.com
! https://github.com/reek/anti-adblock-killer/issues/1280
dz-android.com#@##adsense
! tvseriesonline.pl
! https://github.com/reek/anti-adblock-killer/issues/1281
@@||tvseriesonline.pl/wp-content/themes/tvseriesonline/js/adsbygoogle.js$script
! motorsport-total.com
! https://greasyfork.org/en/forum/discussion/8937
||*.amazonaws.com/js/adblock.min.js$script,domain=motorsport-total.com
! aquabitcoin.com
! PM
@@||aquabitcoin.com/show_ads.js$script
! dailydoge.org
! PM
dailydoge.org#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=dailydoge.org
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=dailydoge.org
! bachtrack.com
! https://github.com/reek/anti-adblock-killer/issues/1291
bachtrack.com#@##adblock1
bachtrack.com#@##adblock2
bachtrack.com#@##adblock3
bachtrack.com#@##adblock4
! mp3skull network
! https://github.com/reek/anti-adblock-killer/issues/1311
! https://github.com/reek/anti-adblock-killer/issues/1296
||mp3skull.is/fab/FAB.js$script
||mp3skull.vg/fab/FAB.js$script
! sheekyforums.com
! https://github.com/reek/anti-adblock-killer/issues/1302
sheekyforums.com#@##adsense
! pcworld.idg.com.au
! https://github.com/reek/anti-adblock-killer/issues/1305
||cdn.pcworld.*/idg_gpt_pipeline_$script
! tvono.com
! https://github.com/reek/anti-adblock-killer/issues/1314
tvono.com#@#.adsbox
! dasolo.org
! https://github.com/reek/anti-adblock-killer/issues/1318
! https://github.com/reek/anti-adblock-killer/issues/1018
@@||adscale.de/getads.js$image,domain=dasolo.org
! purepc.pl
! https://github.com/reek/anti-adblock-killer/issues/1309
purepc.pl#@#.reklama
purepc.pl#@#[class$="reklama"]
! izzylaif.com
! https://github.com/reek/anti-adblock-killer/issues/1320
@@||izzylaif.com/en/js/ad$script,~third-party
! game4free.nl
! https://github.com/reek/anti-adblock-killer/issues/1321
game4free.nl#@##adsense
! spieletipps.de
! https://github.com/reek/anti-adblock-killer/issues/1322
@@||spieletipps.de/static/ads/adb_detector.gif$image
spieletipps.de##[src^="http://www.spieletipps.de/sp/"]
spieletipps.de##a[href^="http://www.spieletipps.de/sp/"]
! fullmatchesandshows.com
! https://github.com/reek/anti-adblock-killer/issues/1324
fullmatchesandshows.com#@#.adsbox
fullmatchesandshows.com#@#.adsense
fullmatchesandshows.com#@#.adslot
fullmatchesandshows.com#@#.adspot
fullmatchesandshows.com#@#.pub_300x250
fullmatchesandshows.com#@#.pub_300x250m
fullmatchesandshows.com#@#.pub_728x90
fullmatchesandshows.com#@#.text-ad
fullmatchesandshows.com#@#.textAd
fullmatchesandshows.com#@#.text_ad
fullmatchesandshows.com#@#.text_ads
fullmatchesandshows.com#@#.text-ads
fullmatchesandshows.com#@#.text-ad-links
! cinemablend.com
! https://github.com/reek/anti-adblock-killer/issues/1358
! https://github.com/reek/anti-adblock-killer/issues/1357
cinemablend.com#@#.adsbox
cinemablend.com#@#.adsense
cinemablend.com#@#.adslot
cinemablend.com#@#.adspot
cinemablend.com#@#.pub_300x250
cinemablend.com#@#.pub_300x250m
cinemablend.com#@#.pub_728x90
cinemablend.com#@#.text-ad
cinemablend.com#@#.textAd
cinemablend.com#@#.text_ad
cinemablend.com#@#.text_ads
cinemablend.com#@#.text-ads
cinemablend.com#@#.text-ad-links
! playwire.com
! https://github.com/reek/anti-adblock-killer/issues/1368
playwire.com#@#.adsbox
playwire.com#@#.adsense
playwire.com#@#.adslot
playwire.com#@#.adspot
playwire.com#@#.pub_300x250
playwire.com#@#.pub_300x250m
playwire.com#@#.pub_728x90
playwire.com#@#.text-ad
playwire.com#@#.textAd
playwire.com#@#.text_ad
playwire.com#@#.text_ads
playwire.com#@#.text-ads
playwire.com#@#.text-ad-links
! satcesc.com
! https://github.com/reek/anti-adblock-killer/issues/1327
@@/banner.gif$image,domain=satcesc.com
! porncomix.info
! https://github.com/reek/anti-adblock-killer/issues/1336
||porncomix.info/images/an-temp/$stylesheet,script
! videowood.tv
! https://github.com/reek/anti-adblock-killer/issues/1388
! https://github.com/reek/anti-adblock-killer/issues/1339
videowood.tv#@#.pub_300x250
videowood.tv#@#.pub_300x250m
videowood.tv#@#.pub_728x90
videowood.tv#@#.text-ad
videowood.tv#@#.textAd
videowood.tv#@#.text_ad
videowood.tv#@#.text_ads
videowood.tv#@#.text-ads
videowood.tv#@#.text-ad-links
! link.tl
! https://github.com/reek/anti-adblock-killer/issues/1340
@@||ads.wordego.com/a.js$script,domain=link.tl
! off-soft.net
! https://github.com/reek/anti-adblock-killer/issues/1348
off-soft.net#@#.adsbygoogle
! yad2.co.il
! https://github.com/reek/anti-adblock-killer/issues/1351
yad2.co.il###sLightbox_overlay
yad2.co.il###sLightbox_container
! exrapidleech.info
! https://github.com/reek/anti-adblock-killer/issues?q=exrapidleech
@@||bdfrm.bidvertiser.com/BidVertiser.dbm$subdocument,domain=exrapidleech.info
! demo.hongkiat.com
! https://github.com/reek/anti-adblock-killer/issues/1355
@@||demo.hongkiat.com/jquery-detect-ads-block/images/ads.jpg$image
! detectadblock.com
! https://github.com/reek/anti-adblock-killer/issues/1356
@@||detectadblock.com/ads.js$script
@@||adblockanalytics.com/ads.js$script
! voicetv.co.th
! https://github.com/reek/anti-adblock-killer/issues/1367
@@||imasdk.googleapis.com/js/sdkloader/ima3.js$script,domain=news.voicetv.co.th
@@||news.voicetv.co.th/player/video-js/$stylesheet,script
@@||news.voicetv.co.th/js/ads.js$script
! passimtv.xyz
! https://github.com/reek/anti-adblock-killer/issues/1369
@@||shukitv.ucoz.com/script/ads.js$script,domain=passimtv.xyz
! listamais.com.br
! https://github.com/reek/anti-adblock-killer/issues/1370
||257298.a.siteapps.com/257298.js$script,domain=listamais.com.br
! snacktv.de
! https://github.com/reek/anti-adblock-killer/issues/1371
@@||player.snacktv.de/js/ads.js$script
! titlovi.com
! https://github.com/reek/anti-adblock-killer/issues/1376
titlovi.com#@#.pub_300x250
titlovi.com#@#.pub_300x250m
titlovi.com#@#.pub_728x90
titlovi.com#@#.text-ad
titlovi.com#@#.textAd
titlovi.com#@#.text_ad
titlovi.com#@#.text_ads
titlovi.com#@#.text-ads
titlovi.com#@#.text-ad-links
! dogry.pl
! https://github.com/reek/anti-adblock-killer/issues/1379
@@||dogry.pl/ads.html$subdocument
! telephoneannuaire.fr
! https://github.com/reek/anti-adblock-killer/issues/1384
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=telephoneannuaire.fr
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=telephoneannuaire.fr
! tiscali.cz
! https://github.com/reek/anti-adblock-killer/issues/1385
@@||bbcdn.go.cz.bbelements.com/bb/bb_one2n.$script,domain=tiscali.cz
! spoiler.net
! https://github.com/reek/anti-adblock-killer/issues/1389
spoiler.net#@#.banner-ad
! themarysue.com
! https://github.com/reek/anti-adblock-killer/issues/1390
||connect.cointent.com^$domain=themarysue.com
! narcity.com
! https://github.com/reek/anti-adblock-killer/issues?q=narcity
@@||narcity.com/*/ads.advert.js$script
! schoener-wohnen.de
! https://github.com/reek/anti-adblock-killer/issues/1403
||connectormwi.laterpay.net^$script,domain=schoener-wohnen.de
! vizer.tv
! https://github.com/reek/anti-adblock-killer/issues/1411
vizer.tv#@#.adsbox
vizer.tv#@#.adBlockDetected
! folha.uol.com.br
! https://github.com/reek/anti-adblock-killer/issues?q=folha.uol.com.br
||paywall.folha.uol.com.br^$domain=folha.uol.com.br
||folha.uol.com.br/paywall/js/$script
||folha.uol.com.br/folha/furniture/paywall/$xmlhttprequest
||folha.uol.com.br/folha/furniture/paywall/loader.js$script
@@||folha.uol.com.br/*/publicidade.ads.js$script
! zarabiajnaokazjach.pl
! https://github.com/reek/anti-adblock-killer/issues/1404
zarabiajnaokazjach.pl#@##adsense
! emucr.com
! https://github.com/reek/anti-adblock-killer/issues/1410
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=emucr.com
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=emucr.com
! ouest-france.fr
! https://github.com/reek/anti-adblock-killer/issues/1418
@@||ouest-france.fr/sites/all/themes/base/js/adblock.js$script
! mmm.dk
! https://github.com/reek/anti-adblock-killer/issues/1422
@@||mmm.dk^$elemhide
! topsport.bg / news.bg
! https://github.com/reek/anti-adblock-killer/pull/1345
! https://github.com/reek/anti-adblock-killer/pull/1776
@@||webnews.bg/assets/js/ads.js$script,domain=topsport.bg|news.bg
@@||webnews.bg/assets/js/min/dfp.js$script,domain=topsport.bg|news.bg
@@||partner.googleadservices.com/gpt/pubads_impl_84.js$script,domain=topsport.bg|news.bg
! darmowa-bramkasms.pl
! https://github.com/reek/anti-adblock-killer/issues/1429
@@||darmowa-bramkasms.pl/ad-server/$script
! scigacz.pl
! https://github.com/reek/anti-adblock-killer/issues/1430
scigacz.pl###adv_750
! inc.com
! https://github.com/reek/anti-adblock-killer/issues/1431
@@||inc.com//js/ads.js$xmlhttprequest
@@||partner.googleadservices.com/gpt/pubads_impl_*.js$script,domain=inc.com
! forum.kooora.com
! https://github.com/reek/anti-adblock-killer/issues/1439
@@||partner.googleadservices.com/gpt/pubads_impl_*.js$script,domain=forum.kooora.com
! filechoco.com
! https://github.com/reek/anti-adblock-killer/issues/1441
filechoco.com#@#.adsbox
! boxfaucet.net
! PM
@@||boxfaucet.net/banner.gif$image
! ksl.com
! https://github.com/reek/anti-adblock-killer/issues/1450
@@||ksl.com/myAds/
! wsj.com
! https://github.com/reek/anti-adblock-killer/issues/1454
||online.wsj.com/javascript/abm.js$script
! politiken.dk
! PM
@@||politiken.dk/static/content/js/ads.js$script
! linkdecode.com
! https://github.com/reek/anti-adblock-killer/issues/1458
linkdecode.com#@#.adsbygoogle
! nbc.com
! https://github.com/reek/anti-adblock-killer/issues/1456
@@||nbcudigitaladops.com/hosted/pubads.js$script,domain=nbc.com
nbc.com##.video-player__overlay.video-player__overlay--pause
nbc.com##.video-player__overlay.video-player__overlay--mute
! mathportal.org
! https://github.com/reek/anti-adblock-killer/issues/1460
mathportal.org/temp/blocked/blockedCounter.php
mathportal.org###noSenseCalculatorTop
! vrank.org
! https://github.com/reek/anti-adblock-killer/issues/1461
||vrank.org/go/adblock_detect$subdocument
! Revenuehits
! solidfiles.com, userscloud.com, uplod.it, hulkload.com
@@/.adforge.|$script,domain=solidfiles.com|userscloud.com|uplod.it|hulkload.com
@@/ads/ads.js|$script,domain=solidfiles.com|userscloud.com|uplod.it|hulkload.com
||*.cloudfront.net^$script,domain=solidfiles.com|userscloud.com|uplod.it|hulkload.com
! bitcoin25.com
! PM
||bitcoin25.com/libs/check.js$script
||bitcoin25.com/js/scroll1.js$script
! metal-bitcoin.com
! PM
||metal-bitcoin.com/libs/check.js$script
||metal-bitcoin.com/js/scroll1.js$script
! azulyblanco.co
! https://github.com/reek/anti-adblock-killer/issues/1483
azulyblanco.co#@##adblock
azulyblanco.co###notice
azulyblanco.co###vlay
! vercanalestv.com (vaughnlive.tv)
! https://github.com/reek/anti-adblock-killer/issues/1488
@@|http*/crossdomain.xml$object-subrequest,domain=vercanalestv.com
@@||doubleclickbygoogle.com^$object-subrequest,domain=vercanalestv.com
@@||pubads.g.doubleclick.net^$object-subrequest,domain=vercanalestv.com
! speedof.me
! https://github.com/reek/anti-adblock-killer/issues/1487
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=speedof.me
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=speedof.me
! dmax.de
! https://github.com/reek/anti-adblock-killer/issues/1489
@@||adm.fwmrm.net/p/release/latest-JS/adm/prd/AdManager.js$script,domain=dmax.de
! animezone.pl
! PM
animezone.pl#@#.myTestAd
! cenapaliw.pl
! https://github.com/reek/anti-adblock-killer/issues/1500
cenapaliw.pl#@#div[id^="div-gpt-ad"]
@@||googletagservices.com^$domain=cenapaliw.pl
@@||googleadservices.com^$domain=cenapaliw.pl
cenapaliw.pl#@#iframe[id^="google_ads_iframe"]
! fastrapidleech.com
! https://github.com/reek/anti-adblock-killer/issues/1505
@@||fastrapidleech.com/*/adsbygoogle.js$script
! gwshare.com
! https://greasyfork.org/en/forum/discussion/9724
gwshare.com#@##adCol
! hoy.es
! https://github.com/reek/anti-adblock-killer/issues/1503
@@||hoy.es/comun/js/*/adfrm.js$script
! forumdz.com
! https://github.com/reek/anti-adblock-killer/issues/1504
forumdz.com###breadcrumb + center > [color="red"] > b
! jasaku.net
! https://github.com/reek/anti-adblock-killer/issues/1506
cloud.jasaku.net##.adblock
! clarin.com
! https://github.com/reek/anti-adblock-killer/issues/1507
||clarin.com/static/CLAClarinV3/js/comprimido.js$script
! sumeronline.com
! https://github.com/reek/anti-adblock-killer/issues/1510
@@||sumeronline.com^$generichide
! kiplinger.com
! https://github.com/reek/anti-adblock-killer/issues/1499
@@||kiplinger.com^$elemhide
@@||kiplinger.com/*/adblock.js$script
! apk.tw
! https://greasyfork.org/forum/discussion/9792
@@||apk.tw/source/plugin/mydefplugin/advertise.js$script,~third-party
! 012.tw
! https://greasyfork.org/forum/discussion/9792
012.tw#@#.ad728
! bloomberg.com
! https://github.com/reek/anti-adblock-killer/issues/1520
bloomberg.com###adBlockerContainer
! idnes.cz
! https://greasyfork.org/forum/discussion/9826
@@||1gr.cz/js/ad/reklama/banner.js$script,domain=idnes.cz
! limitsizamca.org
! PM
@@||limitsizamca.org/reklam.js$script,~third-party
! la-cosa.it
! https://github.com/reek/anti-adblock-killer/issues/1532
la-cosa.it#@#div[id^="div-gpt-ad"]
! oneplay.tv
! https://github.com/reek/anti-adblock-killer/issues/1534
@@||oneplay.tv/assets/js/ads.js$script,~third-party
! b8b8.tv
! https://github.com/reek/anti-adblock-killer/issues/1539
@@||live.b8b8.tv/watch/js/adview*.js$script,~third-party
! darkcomet-rat.com
! https://github.com/reek/anti-adblock-killer/issues/1536
||ajax.googleapis.com/ajax/libs/jquery/$domain=darkcomet-rat.com
! napisy24.pl
! https://github.com/reek/anti-adblock-killer/issues/1546
! https://github.com/reek/anti-adblock-killer/issues/1509
@@||napisy24.pl/run/js/ads/$script
@@||pagead2.googlesyndication.com/*show_ads$script,domain=napisy24.pl
! bytzbiorowy.pl
! https://github.com/reek/anti-adblock-killer/issues/1547
bytzbiorowy.pl###stickymsg
! imged.pl
! https://github.com/reek/anti-adblock-killer/issues/1548
@@/js/adblock-advertisement.js$script,domain=imged.pl
! myanimelist.net
! https://github.com/reek/anti-adblock-killer/issues/1551
myanimelist.net##._unit
! l2topzone.com
! https://github.com/reek/anti-adblock-killer/issues/1559
@@||l2topzone.com/ads.png$image,~third-party
! b.dk
! https://github.com/reek/anti-adblock-killer/issues/1562
||b.dk/sites/all/libraries/messaging/adblock-messager.js$script,domain=b.dk
! skyrimcalculator.com
! https://greasyfork.org/forum/discussion/9958
@@||skyrimcalculator.com/showads.js$script,~third-party
! allmusic.com
! https://github.com/reek/anti-adblock-killer/issues/1569
@@||allmedia-d.openx.net/w/1.0/jstag$script,domain=allmusic.com
! streaminporn.com / gaypornmasters.com
! https://github.com/reek/anti-adblock-killer/issues/1574
streaminporn.com,gaypornmasters.com#@##adsense
! imgsicily.it
! https://github.com/reek/anti-adblock-killer/issues/1570
||imgsicily.it/dist/sweetalert
! miuipro.ru
! https://github.com/reek/anti-adblock-killer/issues/1576
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=miuipro.ru
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=miuipro.ru
! mercedesclub.cz
! https://github.com/reek/anti-adblock-killer/issues/1577
mercedesclub.cz#@#.reklama
! gry.pl
! https://github.com/reek/anti-adblock-killer/issues/1581
gry.pl##.adblock
! english-subtitles.club
! https://github.com/reek/anti-adblock-killer/issues/1584
@@||english-subtitles.club/assets/$image,~third-party
! r7.com
! https://github.com/reek/anti-adblock-killer/issues/1585
@@||sc.r7.com/js/ads.js$script
! dragcave.net
! https://github.com/reek/anti-adblock-killer/issues/1591
||static.dragcave.net/cache/js/a/$script
dragcave.net##._w_4
! deviantart.com
! https://github.com/reek/anti-adblock-killer/issues/1592
deviantart.com###block-notice
! nadajemy.pl
! https://github.com/reek/anti-adblock-killer/issues/1601
@@||nadajemy.pl/*/adsense/ad/banner/adv.js$script
! 52av.tv
! https://github.com/reek/anti-adblock-killer/issues/1602
@@||52av.tv/source/plugin/unadblock/$script
! burze.dzis.net
! https://github.com/reek/anti-adblock-killer/issues/1612
burze.dzis.net#@#.adsbygoogle
! 380cc.cc
! https://github.com/reek/anti-adblock-killer/issues/1615
380cc.cc#@##adsbottom
380cc.cc#@##myadfor_mobiletop
! javfreestreaming.com
! https://github.com/reek/anti-adblock-killer/issues/1617
javfreestreaming.com##.notes
! socketloop.com
! blockadblock customized + others mechanisms
! https://github.com/reek/anti-adblock-killer/issues/1614
socketloop.com#@##banner_ads
socketloop.com##.adtester-container
@@||amazonaws.com/socketloop/show_ads_epmads.js$script,domain=socketloop.com
@@||pagead2.googlesyndication.com/pagead/osd.js$script,domain=socketloop.com
@@|http://$image,domain=socketloop.com
@@|https://$image,domain=socketloop.com
! diymediahome.org
! https://github.com/reek/anti-adblock-killer/issues/1621
@@||diymediahome.org/*/adframe.min.js$script,~third-party
! pasazer.com
! https://github.com/reek/anti-adblock-killer/issues/1624
@@||pasazer.com/adsense.js$script,~third-party
! slacker.com
! https://github.com/reek/anti-adblock-killer/issues/1626
@@||slacker.com^$xmlhttprequest
@@||imasdk.googleapis.com^$script,domain=slacker.com
@@||partner.googleadservices.com^$domain=slacker.com
! dstar.pzk.pl
! https://github.com/reek/anti-adblock-killer/issues/1628
dstar.pzk.pl#@#.adsbygoogle
! tsviewer.com
! https://github.com/reek/anti-adblock-killer/issues/1629
tsviewer.com#@#.adsbygoogle
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=tsviewer.com
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=tsviewer.com
! cnubis.com
! https://greasyfork.org/forum/discussion/10257
cnubis.com#@#.adsbox
cnubis.com#@#.adsense
cnubis.com#@#.adslot
cnubis.com#@#.adspot
cnubis.com#@#.pub_300x250
cnubis.com#@#.pub_300x250m
cnubis.com#@#.pub_728x90
cnubis.com#@#.text-ad
cnubis.com#@#.textAd
cnubis.com#@#.text_ad
cnubis.com#@#.text_ads
cnubis.com#@#.text-ads
cnubis.com#@#.text-ad-links
! itsupportguides.com
! https://github.com/reek/anti-adblock-killer/issues/1632
itsupportguides.com##.adblock_wrapper
! proplanta.de
! https://github.com/reek/anti-adblock-killer/issues/1643
proplanta.de#@##ad_728_90
proplanta.de#@##ad_img
proplanta.de#@##mainAd
proplanta.de#@##adDiv
proplanta.de#@##bottom_ad
proplanta.de#@#.adsbygoogle
proplanta.de#@#.searchad
! anitoonstv.com
! https://github.com/reek/anti-adblock-killer/issues/1645
@@||adblockdetect.xyz^$script,domain=anitoonstv.com
@@||anitoonstv.com/ver/banner.gif$image
! investing.com
! https://github.com/reek/anti-adblock-killer/issues?q=investing.com
@@||investing.com/js/ads.js$script
@@||static.doubleclick.net/instream/ad_status.js$domain=investing.com
! crunchyroll.com
! https://github.com/reek/anti-adblock-killer/issues/1640
@||crunchyroll.com/*/ads_enabled_flag*.js$script
! indiatimes.com
! use multiples abcheck
! https://github.com/reek/anti-adblock-killer/issues?q=indiatimes
||indiatimes.in/*/detector.js$script
||indiatimes.com/detector/$script
||indiatimes.com/detector.cms$script
||indiatimes.com/ads_native_js^$script
@@||indiatimes.com/ads.cms$script
@@||indiatimes.com/toi_js_ads/ads/*$script
indiatimes.com#@#div[id^="div-gpt-ad"]
! hindustantimes.com
! https://github.com/reek/anti-adblock-killer/issues?q=hindustantimes
@@||hindustantimes.com^/ads.js$script
! vakarm.net
! https://github.com/reek/anti-adblock-killer/issues/1662
||vakarm.net/css/sprite_vkm_2.css
! loi1901.com
! https://github.com/reek/anti-adblock-killer/issues/1664
@@||loi1901.com^$generichide
@@||googleads.g.doubleclick.net/favicon.ico$domain=loi1901.com
! eurosolidaire.com
! https://github.com/reek/anti-adblock-killer/issues/1665
@@||eurosolidaire.com^$generichide
@@||googleads.g.doubleclick.net/favicon.ico$domain=eurosolidaire.com
! leparisien.fr
! https://github.com/reek/anti-adblock-killer/issues?q=leparisien
||leparisien.fr/espace-securise/shield/read-article/*?fingerprint=
! jagran.com
! https://github.com/reek/anti-adblock-killer/issues/1669
@@||jagran.com/*/ads.js$script
! dcode.fr
! https://github.com/reek/anti-adblock-killer/issues/1651
dcode.fr###yb5d
! aternos.org
! https://github.com/reek/anti-adblock-killer/issues?q=aternos.org
aternos.org###atblck
aternos.org###detect
aternos.org##.skyscraper
! lasprovincias.es
! https://github.com/reek/anti-adblock-killer/issues?q=lasprovincias.es
@@||lasprovincias.es/*/adfrm.js$script
! mid-day.com
! https://github.com/reek/anti-adblock-killer/issues?q=mid-day.com
@@||mid-day.com/*/ads.js$script
! xmovies8.org
! https://github.com/reek/anti-adblock-killer/issues?q=xmovies8.org
@@||xmovies8.org/js/showads.js$xmlhttprequest
! eenadu.net
! https://github.com/reek/anti-adblock-killer/issues?q=eenadu.net
@@||eenadu.net/ads.js$script
! globes.co.il
! https://github.com/reek/anti-adblock-killer/issues?q=globes.co.il
globes.co.il###chromeWindow
globes.co.il###grayLayer
! somersetcountygazette.co.uk
! https://github.com/reek/anti-adblock-killer/issues?q=somersetcountygazette.co.uk
somersetcountygazette.co.uk##.ad-blocker-warning
! skins4virtual.com
! https://github.com/reek/anti-adblock-killer/issues?q=skins4virtual.com
skins4virtual.com##.ui-front.ui-widget-overlay
skins4virtual.com##.ui-resizable.ui-front.ui-corner-all.ui-widget-content.ui-widget.ui-dialog
! afdah.tv
! https://github.com/reek/anti-adblock-killer/issues?q=afdah.tv
@@||yourjavascript.com/*/show-ad.js$domain=afdah.tv
! codexpcgames.com
! https://github.com/reek/anti-adblock-killer/issues?q=codexpcgames.com
||files.codexpcgames.com/uploads/zTMLhNjIZ8Cj/gYWyo5XsoWmG.js$~third-party
! pokemonizle.net
! https://github.com/reek/anti-adblock-killer/issues?q=pokemonizle.net
pokemonizle.net#@##adsense
! swindonadvertiser.co.uk
! https://github.com/reek/anti-adblock-killer/issues?q=swindonadvertiser.co.uk
swindonadvertiser.co.uk##.ad-blocker-warning
! graffica.info
! https://github.com/reek/anti-adblock-killer/issues?q=graffica.info
@@||ad.doubleclick.net/favicon.ico$xmlhttprequest,domain=graffica.info
graffica.info#@#.pub300x250
graffica.info#@#.ad300-250
graffica.info#@#.text-ad
graffica.info#@#.text_ads
graffica.info#@#.text-ad-link
! gogi.in
! https://github.com/reek/anti-adblock-killer/issues?q=gogi.in
@@||cdn.oriel.io/ads/$xmlhttprequest,domain=gogi.in
gogi.in#@#.pub300x250
gogi.in#@#.ad300-250
gogi.in#@#.text-ad
gogi.in#@#.text_ads
gogi.in#@#.text-ad-link
! hayhaytv.vn
! hayhaytv.vn
hayhaytv.vn#@#.ads_wrapper
! comprovendolibri.it
! https://github.com/reek/anti-adblock-killer/issues?q=comprovendolibri.it
comprovendolibri.it#@#.myTestAd
! jagranjunction.com
! https://github.com/reek/anti-adblock-killer/issues?q=jagranjunction.com
@@||jagranjunction.com/js/ads.js$script
! trovesaurus.com
! https://github.com/reek/anti-adblock-killer/issues?q=trovesaurus.com
trovesaurus.com###blocked
! dogefaucet.com
! https://github.com/reek/anti-adblock-killer/issues?q=dogefaucet.com
@@||dogefaucet.com/initializr/js/ads.js$script
! reuters.com
! https://github.com/reek/anti-adblock-killer/issues?q=reuters.com
@@||yospace.com^$domain=reuters.com
reuters.com#@#.adsbox
reuters.com##.RTVSyndicatedPlayer
! flashx.tv
! https://github.com/reek/anti-adblock-killer/issues?q=flashx.tv
@@||flashx.tv/js/-fleshlight2.js$script
! record.xl.pt
@@||aminhaconta.xl.pt/Campaigns/Blockers/ads.html$subdocument,document=record.xl.pt
! ojogo.pt
@@||ojogo.pt/common/scripts/ads.js$script
ojogo.pt###AdBloquer
! filterbypass.me
filterbypass.me##.adhome-728
! fox.com.tr
fox.com.tr#@#.pub_300x250
fox.com.tr#@#.pub_300x250m
fox.com.tr#@#.pub_728x90
fox.com.tr#@#.text-ad
fox.com.tr#@#.textAd
fox.com.tr#@#.text_ad
fox.com.tr#@#.text_ads
fox.com.tr#@#.text-ads
fox.com.tr#@#.text-ad-links
! fox.com.tr
fox.com.tr#@#.pub_300x250
fox.com.tr#@#.pub_300x250m
fox.com.tr#@#.pub_728x90
fox.com.tr#@#.text-ad
fox.com.tr#@#.textAd
fox.com.tr#@#.text_ad
fox.com.tr#@#.text_ads
fox.com.tr#@#.text-ads
fox.com.tr#@#.text-ad-links
! lfg.co / leasticoulddo.com
! https://github.com/reek/anti-adblock-killer/issues?q=lfg.co
! https://github.com/reek/anti-adblock-killer/issues?q=leasticoulddo.com
lfg.co,leasticoulddo.com#@##ad_test
lfg.co,leasticoulddo.com#@#.img_ad
lfg.co,leasticoulddo.com#@#.ad_300x250
lfg.co,leasticoulddo.com#@#.pub_300x250
lfg.co,leasticoulddo.com#@#.pub_300x250m
lfg.co,leasticoulddo.com#@#.pub_728x90
lfg.co,leasticoulddo.com#@#.text-ad
lfg.co,leasticoulddo.com#@#.textAd
lfg.co,leasticoulddo.com#@#.text_ad
lfg.co,leasticoulddo.com#@#.text_ads
lfg.co,leasticoulddo.com#@#.text-ads
lfg.co,leasticoulddo.com#@#.text-ad-links
lfg.co,leasticoulddo.com#@#.adsbygoogle
lfg.co,leasticoulddo.com#@#.act-ad-container
! last.fm
! https://github.com/reek/anti-adblock-killer/issues?q=last.fm
@@||$xmlhttprequest,domain=last.fm
@@||adsensecustomsearchads.com/adsense/$script,domain=last.fm
@@||securepubads.g.doubleclick.net$script,domain=last.fm
! liliputing.com
! https://github.com/reek/anti-adblock-killer/issues?q=liliputing.com
@@||liliputing.com^$generichide
! livenewschat.eu
! https://github.com/reek/anti-adblock-killer/issues?q=livenewschat.eu
@@||livenewschat.eu^$generichide
! labcmalayalam.com
! https://github.com/reek/anti-adblock-killer/issues?q=abcmalayalam.com
@@||abcmalayalam.com^$generichide
! fullstuff.co
! https://github.com/reek/anti-adblock-killer/issues?q=fullstuff.co
@@||fullstuff.co^$generichide
! apk.tw
! https://github.com/reek/anti-adblock-killer/issues?q=apk.tw
@@||apk.tw^$generichide
! ridediriddim.com
! https://github.com/reek/anti-adblock-killer/issues?q=ridediriddim.com
@@||ridediriddim.com^$generichide
! haxoff.net
! https://github.com/reek/anti-adblock-killer/issues?q=haxoff.net
@@||haxoff.net^$generichide
! linkdrop.net
! https://github.com/reek/anti-adblock-killer/issues?q=linkdrop.net
@@||linkdrop.net^$generichide
! zahitvstation.com
! https://github.com/reek/anti-adblock-killer/issues?q=zahitvstation.com
@@||zahitvstation.com^$generichide
! apkmos.com
! https://github.com/reek/anti-adblock-killer/issues?q=apkmos.com
@@||apkmos.com^$generichide
! zeta.pokemon-vortex.com
! https://github.com/reek/anti-adblock-killer/issues?q=zeta.pokemon-vortex.com
@@||zeta.pokemon-vortex.com^$generichide
! e-mete.com
! https://github.com/reek/anti-adblock-killer/issues?q=e-mete.com
@@||e-mete.com/js/ads*.js$script,third-party
! qbasic.net
! https://github.com/reek/anti-adblock-killer/issues?q=qbasic.net
qbasic.net#@#.adsbygoogle
! uploadrocket.net
! https://github.com/reek/anti-adblock-killer/issues?q=uploadrocket.net
@@||uploadrocket.net/advertising/ads.js$script
! trakt.tv
! https://github.com/reek/anti-adblock-killer/issues?q=trakt.tv
trakt.tv##.huckster-dfp
! naasongs.com / nsongs.com
! https://github.com/reek/anti-adblock-killer/issues?q=naasongs.com
@@||nsongs.com^$generichide
@@||naasongs.com^$generichide
@@|http://*adv$image,domain=naasongs.com|nsongs.com
! politiken.dk
! https://github.com/reek/anti-adblock-killer/issues?q=politiken.dk
@@||politiken.dk/*ad$script
! ing.dk
! https://github.com/reek/anti-adblock-killer/issues?q=ing.dk
@@||ing.dk/*ad$script
! jyllands-posten
! https://github.com/reek/anti-adblock-killer/issues?q=jyllands-posten.dk
@@||jyllands-posten.dk/*ad$script
! hypixel.net
! https://github.com/reek/anti-adblock-killer/issues?q=hypixel.net
@@||hypixel.net^$generichide
! snesfun.com
! https://github.com/reek/anti-adblock-killer/issues?q=snesfun.com
@@||snesfun.com/js/ads.js$script
! tvp.pl
! https://github.com/reek/anti-adblock-killer/issues?q=tvp.pl
@@||s.tvp.pl/files/tvplayer/*/advertisement.gif$image
! swagbucks.com
! https://github.com/reek/anti-adblock-killer/issues?q=swagbucks.com
@@||swagbucks.com^$generichide
! pcbolsa.com
! https://github.com/reek/anti-adblock-killer/issues?q=pcbolsa.com
@@||pcbolsa.com^*/ads.js$script
! itv.com 
! https://github.com/reek/anti-adblock-killer/issues?q=itv.com 
@@||tidaltv.com/ILogger.aspx$object,domain=itv.com
! dvbtmap.eu
! https://github.com/reek/anti-adblock-killer/issues?q=dvbtmap.eu
@@||dvbtmap.eu/script/ads*.js$script
! loksatta.com
! https://github.com/reek/anti-adblock-killer/issues?q=loksatta.com
@@||loksatta.com/*/ads$script
! 8muses.com
! https://github.com/reek/anti-adblock-killer/issues?q=8muses.com
8muses.com#@#[style*="background: transparent url(\"data:image/gif;base64,"]
! mindgames.com / htmlgames.com
! https://github.com/reek/anti-adblock-killer/issues?q=mindgames.com
@@||imasdk.googleapis.com/js/sdkloader/*$script,domain=mindgames.com|htmlgames.com
! nicematin.com
! https://github.com/reek/anti-adblock-killer/issues?q=nicematin.com
@@||nicematin.com/assets/*/ads.js$script
! hotslogs.com
! https://github.com/reek/anti-adblock-killer/issues?q=hotslogs.com
@@||d3pkae9owd2lcf.cloudfront.net/mb105.gz.js$script,domain=hotslogs.com
! minecraftbuildinginc.com
! https://github.com/reek/anti-adblock-killer/issues?q=minecraftbuildinginc.com
@@||minecraftbuildinginc.com^$generichide
! server-setting.info
! https://github.com/reek/anti-adblock-killer/issues?q=server-setting.info
server-setting.info#@#.adsbygoogle
! goalsarena.org
! https://github.com/reek/anti-adblock-killer/issues?q=goalsarena.org
@@||goalsarena.org^$generichide
! hulkusc.com
! https://github.com/reek/anti-adblock-killer/issues?q=hulkusc.com
@@||afairweb.com/api/$xmlhttprequest,domain=hulkusc.com
hulkusc.com#@#.adsbox
hulkusc.com###bab_popup
! thehomestyle.co
! https://github.com/reek/anti-adblock-killer/issues?q=thehomestyle.co
@@||pagead2.googlesyndication.com/pagead/js/*/show_ads_impl.js$domain=thehomestyle.co
@@||pagead2.googlesyndication.com/pagead/js/adsbygoogle.js$domain=thehomestyle.co
! adage.com
! https://github.com/reek/anti-adblock-killer/issues?q=adage.com
||adage.com/assets/js/min/adBlockDetector.js$script
! gelbooru.com
! https://github.com/reek/anti-adblock-killer/issues?q=gelbooru.com
gelbooru.com##.noticeError
! emuparadise.me
! https://github.com/reek/anti-adblock-killer/issues?q=emuparadise.me
||p.mprd.se/js/bscripts*.js$script,domain=emuparadise.me
! yafud.pl
! https://github.com/reek/anti-adblock-killer/issues?q=yafud.pl
@@||yafud.pl^$generichide
yafud.pl###adsense_banner_top
! siamfishing.com
! https://github.com/reek/anti-adblock-killer/issues?q=siamfishing.com
@@||siamfishing.com/_js/adsbygoogle.js$script
! videacesky.cz
! https://github.com/reek/anti-adblock-killer/issues?q=videacesky.cz
@@||videacesky.cz/getbanner.cfm$script
! sitenable.com
! https://github.com/reek/anti-adblock-killer/issues?q=sitenable.com
@@||sitenable.com/admega.php$script
@@||sitenable.org/admega.php$script
! koddostu.com
! https://github.com/reek/anti-adblock-killer/issues?q=koddostu.com
@@||koddostu.com/js/ads.js$script
! megatorrentshd.com
! https://github.com/reek/anti-adblock-killer/issues?q=megatorrentshd.com
||noticiasurgente.in/embed/p2/Controller/DesktopViewControladorMicki.js$script,domain=megatorrentshd.com
! prem.link
! https://github.com/reek/anti-adblock-killer/issues?q=prem.link
@@||liveadexchanger.com/a/display.php$script,domain=prem.link
! wolfram-client.tk
! wolfram-client.tk
@@||go.wolfram-client.tk^$generichide
! ----- Hide/Block ------------------------------------------------------------------------------------------------------------------- !
!
! ----- Annoying Elements ----- !
!
/fbox/fb.js$script
/fbox/fblaunch.js$script
/plugins/main/js/jquery.simplemodal.js$script
/plugins/social-traffic-pop/stp.js$script
/social-traffic-pop/jquery.stp.js$script
!
! ----- Tracking ----- !
!
||js.sapo.pt/SAPOWebAnalytics/
||flash.banners-service.info^
! compteur-visite.com
||compteur-visite.com^$third-party
! histats.com
||histats.com^$third-party
! pagefair.com (Measure ads blocked)
||pagefair.com^$third-party
||pagefair.net^$third-party
!
! ----- Malwares ----- !
!
||getapplicationmy.info^
||doremido.com^
||speednetwork14.com^
!
! ----- Fake ----- !
!
##A[href^="http://www.liveadexchanger.com/a/display.php"]
##A[href^="http://share.payoneer-affiliates.com/a/clk/"]
##A[href="http://goo.gl/jQ9bcz"]
##A[href^="http://www.yourfilezone.com/play?lng="]
##A[href^="https://action.metaffiliation.com/trk.php?"]
##A[href^="http://action.metaffiliation.com/trk.php?"]
##A[href^="http://get.d3b3e6340.website/as/clk?id="]
###WarningCodec
junksport.com##DIV[style="background-color: rgb(251, 236, 173); position: absolute; margin: 0px 0px 0px -350px; left: 50%; width: 700px; z-index: 999999; height: 22px; font-family: arial; font-weight: bold; font-size: 14px; text-shadow: none; text-align: left; color: black; padding-top: 5px; padding-bottom: 5px; top: 0px;"]
!
! ----- Popups ----- !
!
||everydaycarry.com^$popup
||bet-at-home.com^$popup
||scorebull.com/adv/$popup
||sender.contentjs.com^$popup
||sports747.com^$popup
||sexgangsters.com^$popup
||atrx7.com^$popup
||dealxplorer.org^$popup
||offer.alibaba.com^$popup
!
! ----- Shortners ----- !
!
! linkbucks.com (Visit Script)
||allanalpass.com/visitScript/$script,third-party
||amy.gs/visitScript/$script,third-party
||any.gs/visitScript/$script,third-party
||cash4files.com/visitScript/$script,third-party
||cash4links.co/visitScript/$script,third-party
||deb.gs/visitScript/$script,third-party
||drstickyfingers.com/visitScript/$script,third-party
||dyo.gs/visitScript/$script,third-party
||eafyfsuh.net/visitScript/$script,third-party
||fapoff.com/visitScript/$script,third-party
||filesonthe.net/visitScript/$script,third-party
||freean.us/visitScript/$script,third-party
||freegaysitepass.com/visitScript/$script,third-party
||galleries.bz/visitScript/$script,third-party
||goneviral.com/visitScript/$script,third-party
||hornywood.tv/visitScript/$script,third-party
||linkbabes.com/visitScript/$script,third-party
||linkbucks.com/visitScript/$script,third-party
||megaline.co/visitScript/$script,third-party
||miniurls.co/visitScript/$script,third-party
||picbucks.com/visitScript/$script,third-party
||poontown.net/visitScript/$script,third-party
||qqc.co/visitScript/$script,third-party
||rqq.co/visitScript/$script,third-party
||sasontnwc.net/visitScript/$script,third-party
||seriousdeals.net/visitScript/$script,third-party
||sexpalace.gs/visitScript/$script,third-party
||theseblogs.com/visitScript/$script,third-party
||theseforums.com/visitScript/$script,third-party
||tinylinks.co/visitScript/$script,third-party
||tnabucks.com/visitScript/$script,third-party
||tubeviral.com/visitScript/$script,third-party
||ultrafiles.net/visitScript/$script,third-party
||urlbeat.net/visitScript/$script,third-party
||whackyvidz.com/visitScript/$script,third-party
||youfap.me/visitScript/$script,third-party
||yyv.co/visitScript/$script,third-party
||zatnawqy.net/visitScript/$script,third-party
||zff.co/visitScript/$script,third-party
! linkbucks.com (Full Page Script)
||allanalpass.com/Webservices/jsParseLinks.aspx$script,third-party
||amy.gs/Webservices/jsParseLinks.aspx$script,third-party
||any.gs/Webservices/jsParseLinks.aspx$script,third-party
||cash4files.com/Webservices/jsParseLinks.aspx$script,third-party
||cash4links.co/Webservices/jsParseLinks.aspx$script,third-party
||deb.gs/Webservices/jsParseLinks.aspx$script,third-party
||drstickyfingers.com/Webservices/jsParseLinks.aspx$script,third-party
||dyo.gs/Webservices/jsParseLinks.aspx$script,third-party
||eafyfsuh.net/Webservices/jsParseLinks.aspx$script,third-party
||fapoff.com/Webservices/jsParseLinks.aspx$script,third-party
||filesonthe.net/Webservices/jsParseLinks.aspx$script,third-party
||freean.us/Webservices/jsParseLinks.aspx$script,third-party
||freegaysitepass.com/Webservices/jsParseLinks.aspx$script,third-party
||galleries.bz/Webservices/jsParseLinks.aspx$script,third-party
||goneviral.com/Webservices/jsParseLinks.aspx$script,third-party
||hornywood.tv/Webservices/jsParseLinks.aspx$script,third-party
||linkbabes.com/Webservices/jsParseLinks.aspx$script,third-party
||linkbucks.com/Webservices/jsParseLinks.aspx$script,third-party
||megaline.co/Webservices/jsParseLinks.aspx$script,third-party
||miniurls.co/Webservices/jsParseLinks.aspx$script,third-party
||picbucks.com/Webservices/jsParseLinks.aspx$script,third-party
||poontown.net/Webservices/jsParseLinks.aspx$script,third-party
||qqc.co/Webservices/jsParseLinks.aspx$script,third-party
||rqq.co/Webservices/jsParseLinks.aspx$script,third-party
||sasontnwc.net/Webservices/jsParseLinks.aspx$script,third-party
||seriousdeals.net/Webservices/jsParseLinks.aspx$script,third-party
||sexpalace.gs/Webservices/jsParseLinks.aspx$script,third-party
||theseblogs.com/Webservices/jsParseLinks.aspx$script,third-party
||theseforums.com/Webservices/jsParseLinks.aspx$script,third-party
||tinylinks.co/Webservices/jsParseLinks.aspx$script,third-party
||tnabucks.com/Webservices/jsParseLinks.aspx$script,third-party
||tubeviral.com/Webservices/jsParseLinks.aspx$script,third-party
||ultrafiles.net/Webservices/jsParseLinks.aspx$script,third-party
||urlbeat.net/Webservices/jsParseLinks.aspx$script,third-party
||whackyvidz.com/Webservices/jsParseLinks.aspx$script,third-party
||youfap.me/Webservices/jsParseLinks.aspx$script,third-party
||yyv.co/Webservices/jsParseLinks.aspx$script,third-party
||zatnawqy.net/Webservices/jsParseLinks.aspx$script,third-party
||zff.co/Webservices/jsParseLinks.aspx$script,third-party
! linkbucks.com (Load Target Url)
@@||allanalpass.com/intermission/loadTargetUrl$xmlhttprequest
@@||amy.gs/intermission/loadTargetUrl$xmlhttprequest
@@||any.gs/intermission/loadTargetUrl$xmlhttprequest
@@||cash4files.com/intermission/loadTargetUrl$xmlhttprequest
@@||cash4links.co/intermission/loadTargetUrl$xmlhttprequest
@@||deb.gs/intermission/loadTargetUrl$xmlhttprequest
@@||drstickyfingers.com/intermission/loadTargetUrl$xmlhttprequest
@@||dyo.gs/intermission/loadTargetUrl$xmlhttprequest
@@||eafyfsuh.net/intermission/loadTargetUrl$xmlhttprequest
@@||fapoff.com/intermission/loadTargetUrl$xmlhttprequest
@@||filesonthe.net/intermission/loadTargetUrl$xmlhttprequest
@@||freean.us/intermission/loadTargetUrl$xmlhttprequest
@@||freegaysitepass.com/intermission/loadTargetUrl$xmlhttprequest
@@||galleries.bz/intermission/loadTargetUrl$xmlhttprequest
@@||goneviral.com/intermission/loadTargetUrl$xmlhttprequest
@@||hornywood.tv/intermission/loadTargetUrl$xmlhttprequest
@@||linkbabes.com/intermission/loadTargetUrl$xmlhttprequest
@@||linkbucks.com/intermission/loadTargetUrl$xmlhttprequest
@@||megaline.co/intermission/loadTargetUrl$xmlhttprequest
@@||miniurls.co/intermission/loadTargetUrl$xmlhttprequest
@@||picbucks.com/intermission/loadTargetUrl$xmlhttprequest
@@||poontown.net/intermission/loadTargetUrl$xmlhttprequest
@@||qqc.co/intermission/loadTargetUrl$xmlhttprequest
@@||rqq.co/intermission/loadTargetUrl$xmlhttprequest
@@||sasontnwc.net/intermission/loadTargetUrl$xmlhttprequest
@@||seriousdeals.net/intermission/loadTargetUrl$xmlhttprequest
@@||sexpalace.gs/intermission/loadTargetUrl$xmlhttprequest
@@||theseblogs.com/intermission/loadTargetUrl$xmlhttprequest
@@||theseforums.com/intermission/loadTargetUrl$xmlhttprequest
@@||tinylinks.co/intermission/loadTargetUrl$xmlhttprequest
@@||tnabucks.com/intermission/loadTargetUrl$xmlhttprequest
@@||tubeviral.com/intermission/loadTargetUrl$xmlhttprequest
@@||ultrafiles.net/intermission/loadTargetUrl$xmlhttprequest
@@||urlbeat.net/intermission/loadTargetUrl$xmlhttprequest
@@||whackyvidz.com/intermission/loadTargetUrl$xmlhttprequest
@@||youfap.me/intermission/loadTargetUrl$xmlhttprequest
@@||yyv.co/intermission/loadTargetUrl$xmlhttprequest
@@||zatnawqy.net/intermission/loadTargetUrl$xmlhttprequest
@@||zff.co/intermission/loadTargetUrl$xmlhttprequest
! linkbucks.com (Anti-Adblock)
@@|http://*.net/*/$subdocument,third-party,domain=allanalpass.com|amy.gs|any.gs|cash4files.com|cash4links.co|deb.gs|drstickyfingers.com|dyo.gs|eafyfsuh.net|fapoff.com|filesonthe.net|freean.us|freegaysitepass.com|galleries.bz|goneviral.com|hornywood.tv|linkbabes.com|linkbucks.com|megaline.co|miniurls.co|picbucks.com|poontown.net|qqc.co|rqq.co|sasontnwc.net|seriousdeals.net|sexpalace.gs|theseblogs.com|theseforums.com|tinylinks.co|tnabucks.com|tubeviral.com|ultrafiles.net|urlbeat.net|whackyvidz.com|youfap.me|yyv.co|zatnawqy.net|zff.co
! adf.ly
||cdn.adf.ly/js/entry.js$script,third-party
||cdn.j.gs/js/entry.js$script,third-party
||cdn.q.gs/js/entry.js$script,third-party
||cdn.ay.gy/js/entry.js$script,third-party
||cdn.adf.ly/js/link-converter.js$script,third-party
||cdn.j.gs/js/link-converter.js$script,third-party
||cdn.q.gs/js/link-converter.js$script,third-party
||cdn.ay.gy/js/link-converter.js$script,third-party
||cdn.adf.ly/js/display.js$script,third-party
||cdn.j.gs/js/display.js$script,third-party
||cdn.q.gs/js/display.js$script,third-party
||cdn.ay.gy/js/display.js$script,third-party
! adf.ly (anti-adblock)
! https://github.com/reek/anti-adblock-killer/issues?q=adf.ly
@@||adf.ly^$generichide
@@||j.gs^$generichide
@@||q.gs^$generichide
@@||ay.gy^$generichide
@@||s1-adfly.com/show.php$subdocument,domain=adf.ly|j.gs|q.gs|ay.gy
@@/static/image/ad*.png$image,domain=adf.ly|j.gs|q.gs|ay.gy
@@||static.adf.ly/static/image/ad*.png$image,third-party
! shorte.st
||cdn.shorte.st/link-converter.min.js$script,third-party
! bc.vc
||bc.vc/js/link-converter.js$script,third-party
||bc.vc/js/bcvc_go.js$script,third-party
||bc.vc/js/bcvc_in.js$script,third-party
! gca.sh
||gca.sh/static/linkreplacer.js$script,third-party
! ouo.io
/js/ouo/entry.js$script,third-party
/js/ouo/entry_v1.js$script,third-party
||cdn.ouo.io/js/full-page-script.js$script,third-party
! binbox.io
||binbox.io/autolink.js$script,third-party
! esprit-click.com
||esprit-click.com/display.php$subdocument,third-party
||esprit-click.com/ec-async.js$script,third-party
!
! ----- Torrents ----- !
!
! torrentz.eu
||torrentz.eu/p/$popup
||torrentz.eu/tzs.2.js$script
! kickass.to
kat.ph,kickass.to,katproxy.com,proxykat.me##.partner1Button
! thepiratebay
/poptest.js|$popup,domain=thepiratebay.sx|pirateproxy.se|unblocked.co|piratesniper.net|pirateproxy.net|piratebaybyproxy.com|proxybay.eu|tpbunion.com|quluxingba.info|tpb.ducke.co|piratebayunion.com|tpb.piraten.lu|tpb.ipredator.se|tpb.pirati.cz|theproxybay.biz|51tsj.com|bay.alanaktion.net|tpbpirate.tk
! fenopy.se
fenopy.se##[rel="nofollow external"][href^="/ddl/"]
! seedpeer.me
seedpeer.me###body > #pageTop + * + #headerbox + TABLE[width="100%"]
! mininova.org
mininova.org###content > #adspot-a + .maintable
! zetorrents.com
zetorrents.com##A[href^="http://acces.directionplaisir.com/a.php?"]
zetorrents.com##A[href^="http://www.insta-cash.net/tds/?"]
! cpasbien.io
/js/ec_connectorDelivery.js$script,domain=cpasbien.io
! rarbg.com
rarbg.com##A[href^="/w_d_adpub.php?id="]
! emule-island.ru##
emule-island.ru##.newsgroup
emule-island.ru##.lastnews + A[href^="http://www.downloadmr.com/dmr/download/"]
! bts.to
bts.to##.dl_blue[href^="/goto_.php?url="]
! torrent-finder.info
torrent-finder.info###addon_info
! poringapic.com
poringapic.com##IMG[src^="http://poringapic.com/image.php?"]
! torrentproject.com
torrentproject.com##A[href^="//torrentproject.com/out/?"]
! torrent-avenue.com
||torrent-avenue.com/popup.js
! torrent-francais.com
torrent-francais.com##A[onclick^="this.href='http://www.FriendlyDuck.com/AF_TA/rel/"]
! t411.me
t411.me##IMG[src="http://www.t411.me/images/external/usenet.jpg"]
t411.me##.ads
! extratorrent.cc
||uiqatnpooq.com/0f8b73d477b554394e23077935e1fff4.js$script,domain=extratorrent.cc
!
! ----- Debriders ----- !
!
! preemlinks.com
preemlinks.com#@##divads
! mondebrideur.com
mondebrideur.com##.plugbarremozi
! mega-debrid.eu
||kyliane.fr/pub.php
||kyliane.fr/pub2.php
! juba-get.com
juba-get.com##IMG[src="http://linkeasy.org/img/uploaded/468x60x7.gif"]
||dl.dropbox.com/u/50417078/gerador/LonelyHeart.mp3
juba-get.com##IMG[src="http://goo.gl/KcrEH"]
! stream-happy.com
stream-happy.com###layer2
! coredistrict.com
coredistrict.com##IMG[src^="http://pixxur.com/pfb/"]
! comopremium.com.ar
comopremium.com.ar###blanuncio
comopremium.com.ar##IMG[src="templates/plugmod/images/a.png"]
! fullpremiums.com
fullpremiums.com##IMG[src="templates/plugmod/images/a.png"]
! rapid8.com
rapid8.com###blcokMzg
rapid8.com##.backk
||mobatory.com^$domain=rapid8.com
! eami.in
@@||eami.in/images/js/ads.js$script
! cnzz.mmstat.com
@@||cnzz.mmstat.com/*.gif$domain=400gb.com
! uploaded-premium.ru
@@||uploaded-premium.ru/ads/ad.js$script
@@||ad.sevenads.net/layer.php?p=$script,domain=uploaded-premium.ru
@@||ad.sevenads.net/banner.php?$script,domain=uploaded-premium.ru
! referencemega.com
referencemega.com###hebdotop_t
||track.effiliation.com/servlet/$popup,domain=referencemega.com
||siteunder.unclejeans.com^$popup,domain=referencemega.com
! keepfiles.fr
keepfiles.fr###shadow
! turkdown.com
turkdown.com###duyuru
! dada44230.fr
||nefroto.net^$script,domain=dada44230.fr
! generatupremium.biz
generatupremium.biz##[href="http://www.hostunder.net/windows-rdp/"]
! generatorlinkpremium.com
@@||generatorlinkpremium.com/js/ads.js$script
generatorlinkpremium.com##.thirdsky
generatorlinkpremium.com##.secondsky
! game-state.com
@@||static.game-state.com/js/adblock.js$script
! gamejolt.com
gamejolt.com###ima-ad-container
! fakirdebrid.net
||upresim.tk/berat/js/entry$script,domain=fakirdebrid.net
!
! ----- Cloud ----- !
!
! wawa-film.org
wawa-film.org##A[href^="http://api.adlure.net/partner/click/"]
! planet-series.tv
planet-series.tv##[href*="/offer?prod="]
!
! ----- Streaming ----- !
!
! floatLayer
tvportugalhd.info,tvportugalhd.com,tvportugalhd.org,tvphd.com,sporttv.pt.am,pogotv.eu,zonatugatv.com,flashstreams.net,cocas.tv,soccertoall.net,tvgente.com,sportvgratis1.com,icasthd.tv,hdtvtuga.com,hdembed.com,streamking.org,championsuefa.tv,canalescp.blogspot.com,miscanales21.blogspot.com,miscanalescp25.blogspot.com,peliculascp.blogspot.com,zeyutvcanales.com,turbocast.tv,torcidatricolor.eu,fixolas.net,wowhq.ws,wowhq.eu,futhd1.blogspot.com,tugastream.com,portugaldesportivo.com,cocas1.com,cbox.ws,uvue.de,sportstvonline.net,portalzuca.net,look-tvs.com,tvgente.eu,kingstreams.tv,micast.tv,wowhq.umbb.net,streaming-foot.me,footdirect24.com,wiz1.net,crichd.tv,stadium-live.biz,ligier-voiture.eu,match-foot-streaming.com,buzina.xyz,cast4u.tv,live9.net,megaviptv.me,wizhdsports.com,hdcast.info,premiersporthd.com,eplstream.com,lethalstreams.xyz,veecast.net,hdfree.tv,beinsport-streaming.com##[id^="floatLayer"]
! bannerfloat
freelivesport.eu,cv55.eu,nowwatchtvlive.me,nowwatchtvlive.co,liguendirect.com,beinsports24.com,dabstrap.com,tous-sports.tv,hdcast.org,coolsport.se,hdfree.tv##[id^="bannerfloat"]
! hdfree.tv
hdfree.tv##[href^="http://hdfree.tv/ads/"]
! livesoccerhq
s.m2pub.com###adk2_img
! tvportugalhd
tvportugalhd.org,tvportugalhd.eu##.xbidv468
tvportugalhd.org,tvportugalhd.eu##.bidv468
! tv.tugastvs.com
tv.tugastvs.com###adtugas1
tv.tugastvs.com###adtugas2
tv.tugastvs.com###adtugas3
! megafilmeshd.net
megafilmeshd.net###ad1
megafilmeshd.net###ad2
megafilmeshd.net##[href^="http://click.afiliados.uol.com.br/Clique"]
! live.gtcaster.com
live.gtcaster.com##[id^="adc"]
live.gtcaster.com###bbb
! tous-sports.tv
tous-sports.tv##IMG[src="http://www.tous-sports.tv/images/blanccloses.png"]
! hdcastream.com
hdcastream.com###closeFrame_banner
hdcastream.com###closeFrame1
! btvsports.com
btvsports.com###ai_tapar
! serverhd.eu
serverhd.eu##[id^="closeFrame"]
serverhd.eu###countDown
! footstream.tv
||foot.footstream.tv/js/compteur1.js$script
||business-agence.eu^$domain=footstream.tv
! hdcastream.com
hdcastream.com###total
hdcastream.com##.container
! ilive.to
ilive.to###ad_overlay
ilive.to###ad_overlay_content
ilive.to###ad_overlay_countdown
! tiv.pw
cdn.tiv.pw###Advertisement1
! pornoshara.tv
||pornoshara.tv/template/branding/swf/
! streamsportlive.es
streamsportlive.es###WarningCodecBanner
! stream2watch.me
stream2watch.me###moveads
! ana1.me
ana1.me##.videopos
! zuuk.net
zuuk.org###fl10
! embeducaster.com
embeducaster.com###impo_overlay
! tvdez.com
cdn.tvdez.com##IFRAME[src^="http://ad.directrev.com/RealMedia/ads/"]
cdn.tvdez.com###cerrar
! tugastream.com
tugastream.com##IMG[src="http://i39.tinypic.com/sobxg2.gif"]
tugastream.com###closediv
! antena24.com
antena24.com##[id^="layer"]
! thesporttv.eu
thesporttv.eu,sporttvhdmi.com##[id^="ad_tlvmedia-"]
! livesportshd.us
channel1.livesportshd.us###ai_tapar_content
! sportvgratis1.com
sportvgratis1.com##IMG[src^="http://www.pt.vigour-europe.com/"]
sportvgratis1.com###eplayer
tvrojadirecta.com##IMG[src="/close.gif"]
! limaenvivo.com
limaenvivo.com##IMG[title="close"]
! championsuefa.tv
championsuefa.tv###closebutton
! zeyutvcanales.com
zeyutvcanales.com###KBTricksFBpop
! micast.tv##.adv
micast.tv##.adv
micast.tv###up
micast.tv###closediv
###micast_ads
! pirlotv.tv
pirlotv.tv###ad_overlay
pirlotv.tv###ad_overlay_content
pirlotv.tv###ad_overlay_countdown
! chatytvgratis.me
@@||cdn.chatytvgratis.me/ads/ads.php?$domain=cineplanet21.com
@@||cdn.chatytvgratis.me/ads/ads2.php?$domain=cineplanet21.com
! sharecast network
sharecast.eu,sharecast.to###table1
! youmoviz.tv
youmoviz.tv##.plugbarremozi
! adbuck.cc
adbuck.cc###col_publi
||adbuck.cc^$third-party
@@||adbuck.cc/player/
! wowhq.ws - wowhq.eu - wowhq.info
! @@||wowhq.eu^$elemhide
wowhq.umbb.net##IMG[width="970"][height="90"]
wowhq.umbb.net##IMG[width="160"][height="600"]
wowhq.umbb.net##[href^="http://porreiropa.com/cms/"] > IMG
cbox.ws##[href^="http://secretstory24h.com/cms/"] > IMG
cbox.ws##[href="http://fixolas.net/"] > IMG
fixolas.net##[href="http://fixolas.net/"] > IMG
! sport-show.fr
sport-show.fr##DIV[style="padding-top:0px;float:left;width:100%;font-size:13px;line-height:0px;top:4px;text-align:left"]
! majax31sport
foot.tous-sports.tv##IMG[src="http://foot.tous-sports.tv/images/blanccloses.png"]
strmh24.com###b1
! tiv.pw
cdn.tiv.pw##.drt
cdn.tiv.pw##.floater
! sharecast.to
sharecast.to##iframe[src^="http://delitaly.com.br/"]
sharecast.to##iframe[src^="http://mixturecloud.com.br/"]
! hdcast.org
hdcast.org##[id^="html"]
! u-stream.me##.videoSF
u-stream.me##.videoSF
u-stream.me##.video
! u-peak.me##.videoSF
u-peak.me##.videoSF
u-peak.me##.video
! dcast.tv
dcast.tv###hideall
! privatestream.tv
privatestream.tv###timer1
privatestream.tv###timer2
privatestream.tv###timer3
! jjcast.com
jjcast.com###timer1
jjcast.com###timer2
jjcast.com###timer3
jjcast.com##IMG[src="close_button.png"]
! aliez network
aliez.tv,aliez.me###ads
aliez.tv,aliez.me###adbtm
! tvfree2.me
tvfree2.me###adn1
||tvfree2.me/pub/
||tvfree2.me/ads_*.js$script
! aovivoagora.com
aovivoagora.com##div[id^="anuncio"]
! biggestplayer.me
biggestplayer.me##.cuadrado.rmv
! streaming-foot.info
! stream-foot.tv
! foot-live.info
! total-sport.tv
streaming-foot.info,stream-foot.tv,foot-live.info,total-sport.tv##.fb
streaming-foot.info,stream-foot.tv,foot-live.info,total-sport.tv##.fb_twitter
streaming-foot.info,stream-foot.tv,foot-live.info,total-sport.tv##[id^="timer"]
! tvfree.me (network)
tvfree.me,mytvfree.me,mytvfree2.me,mytvfree3.me,mytvfree4.me##[id^="template"]
! nowwatchtvlive.me
nowwatchtvlive.me##DIV[style="padding-top:5px;float:left;width:100%;font-size:13px;line-height:26px;height:31px;top: 12px;z-index:9999;text-align:left"]
! goodcast.co.uk
goodcast.co.uk##[style="position: absolute; top: 100px; left: 160px; z-index: 1000;"]
! zoomtv.me
! https://github.com/reek/anti-adblock-killer/issues?q=zoomtv.me
zoomtv.me##[class^="topad"]
zoomtv.me###membz
@@||zoomtv.me/*/js/ads.js$script
! pxstream.tv
pxstream.tv###ImpedeTela
pxstream.tv###mg_dindin
! 04stream.com
04stream.com##[id^="adv"]
04stream.com##[id^="closediv"]
04stream.com##[id^="otclosediv"]
! ftpnova.eu
ftpnova.eu###Av
! cinestrenostv.tv
cinestrenostv.tv##[id^="capa"]
cinestrenostv.tv##[id^="closeX"]
! usagoals.com
usagoals.com###overlay
! footdirect24.com
footdirect24.com###hid
! hdcast.info
||hdcast.info/adcompany.php$subdocument
! freehdsport.com
freehdsport.com##[id^="ltas_overlay_Player"]
! livefootballhd.net
||livefootballhd.net/ad.html$subdocument
! fgames.pw
fgames.pw###html3
! vipbox.online
vipbox.online###html3
! sportshubtv.com
sportshubtv.com###ad_tekst
sportshubtv.com###ad_show
! bro.adcast.tech
bro.adcast.tech,bro.adcast.site###ads
bro.adcast.tech,bro.adcast.site##.mask.adblock
||static.bro.adca.st/ad*.html$subdocument
! hdzog.com
! https://github.com/reek/anti-adblock-killer/issues/1362
@@||hdzog.com/js/advertising.js$script
! wallpapershacker.com
! https://github.com/reek/anti-adblock-killer/issues/1361
@@||wallpapershacker.com/js/adsbygoogle.js$script
! imgclick.net
! https://github.com/reek/anti-adblock-killer/issues/1359
@@/show_ads.js$script,domain=imgclick.net
! euroman.dk
! https://github.com/reek/anti-adblock-killer/issues/1374
||egmontassets.net/random.js$script,domain=euroman.dk
!
! ----- File Search ----- !
!
! sharedir.com
sharedir.com##IMG[src="http://premiumdl4.me/rseimages/rse_banner64_3.png"]
! filetram.com
filetram.com###triangle-border
! filediva.com
filediva.com##.download_top
filediva.com##A[href*="http://www.insta-cash.net/tds/"]
! fileshut.biz
fileshut.biz##.download_item2
! downloadnow.net
downloadnow.net##.results-premium.results-premium__top.holder-padding
! downloadsharedfilez.com
downloadsharedfilez.com##A[href^="http://epnredirect.ru/redirect/cpa/"]
! isearchfiles.com
isearchfiles.com,filescroptube.com##A[href^="http://66.55.151.22/download.php?ref="]
! filegaga.com
filegaga.com##A[href^="/ot/fast.php"]
! general-fil.es
general-fil.es###sponsored
! mrtzcmp3.net
mrtzcmp3.net###hstp-bg-overlay
mrtzcmp3.net###hstp_interstitial
! ddl-search.biz##.wpbanner_superlenny
ddl-search.biz##.wpbanner_superlenny
! pronpic.org
||pronpic.org/52mp/index.php/adhandler/
||advertclicks.ru^$domain=pronpic.org
||limon.biz^$domain=pronpic.org
||tizru.com^$domain=pronpic.org
||piroji.com^$domain=pronpic.org
||crpoy.com^$domain=pronpic.org
||xaogi.com^$domain=pronpic.org
||6likosy.com^$domain=pronpic.org
||midlemee.ru^$domain=pronpic.org
||tafyeta.ru^$domain=pronpic.org
||tmserver-1.com^$domain=pronpic.org
||zinzimo.info^$domain=pronpic.org
||avitya.ru^$domain=pronpic.org
! rapidgator.net
||kovla.com/?$popup,domain=rapidgator.net
! antipubfirefox.org
splash.antipubfirefox.org##DIV[align="center"]
! ojogo.pt
ojogo.pt###moldura_ojogo
! banners-service.info
! europacash.com
||europacash.com^$third-party,script
! rencontreshard.com
||media.rencontreshard.com^$third-party,script
! cpatrendreklam.com
||cpatrendreklam.com^$third-party,script
! go4up.com
go4up.com##[href^="http://liversely.com/g4u?q="]
go4up.com##[href^="http://go.ad2up.com/afu.php?id="]
! academia.edu
@@||api.academia.edu/v0/users/*/stats$script
! permittingnorthlandseamen.info
||data.permittingnorthlandseamen.info^
! gaara-fr.com
gaara-fr.com###pub01
gaara-fr.com###ga-skin-left
gaara-fr.com###ga-skin-right
!
! ----- Others ----- !
!
! tvi
tvi24.iol.pt##iframe#barraIOL
tvi24.iol.pt###heightPH
! jornal record
||sportingbet-affiliate.host.bannerflow.com/core_bannerviewer.swf$domain=record.xl.pt
@@||record.xl.pt/pub/mrec_dynamic.aspx?pubvar=FOTOS
record.xl.pt##A[href^="http://partner.sbaffiliates.com/"]
||record.xl.pt/pub/
||record.xl.pt/common/images/pub/
||js.xl.pt/molduras/record/deco/
pubs.xl.pt###descontos
record.xl.pt###BannerINQ
netviagens.com###nvAdForm
! pro-ddl.ws
pro-ddl.ws###cboxOverlay + #colorbox + #fb-root + * + * + .fixe
androidhellas.com##IMG[src="http://androidhellas.com/wp-content/uploads/2013/08/Android-Hellas-banner-728x90A.gif"]
! soft98.ir
soft98.ir##.shad
soft98.ir##.shad2
! banstex.com
||script.banstex.com/script/
! 1fichier.com
1fichier.com##[style="float:right;width:300px;height:600px"]
! coder143.com
||musicfire.googlecode.com/files/CountryCode.js
||musicfire.googlecode.com/files/AD.Loader-min.js
||musicfire.googlecode.com/files/jquery.colorbox-min.js
! putlocker fake button malware
putlocker.com,sockshare.com##INPUT[type="button"][value="Download Now"]
! rireetchansons.fr
! https://github.com/reek/anti-adblock-killer/issues?q=rireetchansons.fr
rireetchansons.fr###popins
rireetchansons.fr###upsell
mylivesocial.com##.bgimg
! billionuploads.com/
! https://github.com/reek/anti-adblock-killer/issues?q=billionuploads.com/
||pop.billionuploads.com/ppp/$popup
/grooptoo/index/getGrooptooAd/|
! assurance-conseil.net
! https://github.com/reek/anti-adblock-killer/issues?q=assurance-conseil.net
||assurance-conseil.net/popup.js
! kizu.org
! https://github.com/reek/anti-adblock-killer/issues?q=kizu.org
||kizu.org/adv-$popup
! tvgolo.com
! https://github.com/reek/anti-adblock-killer/issues?q=tvgolo.com
tvgolo.com###hstp-bg-overlay
tvgolo.com###hstp_interstitial
! mesddl.cc
! https://github.com/reek/anti-adblock-killer/issues?q=mesddl.cc
mesddl.cc###cboxContent
! urlchecker.net / urlchecker.org
! https://github.com/reek/anti-adblock-killer/issues?q=urlchecker.net
! https://github.com/reek/anti-adblock-killer/issues?q=urlchecker.org
urlchecker.net###adchecker
urlchecker.net###adchecker_btn
urlchecker.net###ads_notify
urlchecker.org###adchecker
urlchecker.org###adchecker_btn
urlchecker.org###ads_notify
!
! ----- Internal Use ------------------------------------------------------------------------------------------------------------------- !
!
###k2Uw7isHrMm5JXP1Vwdxc567ZKc1aZ4I
||reek.github.io/anti-adblock-killer/k2Uw7isHrMm5JXP1Vwdxc567ZKc1aZ4I.js|$script
@@||githubusercontent.com/reek/anti-adblock-killer/
@@||github.com/reek/anti-adblock-killer/
@@||cdn.jsdelivr.net/jwplayer/5.10/jwplayer.js$script
@@||vjs.zencdn.net/4.12/video.js$script
@@||jwpsrv.com/library/5V3tOP97EeK2SxIxOUCPzg.js$script
gaara-fr.com###ga-skin-top
