export const cfEndMarkup = `
</body>
</html>
`

export const cfMarkup = `
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="X-Csrf-Token" content="2cc170160bb1d028bb252884c963e630"/>
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=0.01"/>


    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery-1.8.3.js"></script>
    <script type="application/javascript">
        window.standaloneContest = false;
        function adjustViewport() {
            var screenWidthPx = Math.min($(window).width(), window.screen.width);
            var siteWidthPx = 1100; // min width of site
            var ratio = Math.min(screenWidthPx / siteWidthPx, 1.0);
            var viewport = "width=device-width, initial-scale=" + ratio;
            $('#viewport').attr('content', viewport);
            var style = $('<style>html * { max-height: 1000000px; }</style>');
            $('html > head').append(style);
        }

        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            adjustViewport();
        }

        /* Protection against trailing dot in domain. */
        let hostLength = window.location.host.length;
        if (hostLength > 1 && window.location.host[hostLength - 1] === '.') {
            window.location = window.location.protocol + "//" + window.location.host.substring(0, hostLength - 1);
        }
    </script>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="expires" content="-1">
    <meta http-equiv="profileName" content="h1">
    <meta name="google-site-verification" content="OTd2dN5x4nS4OPknPI9JFg36fKxjqY0i1PSfFPv_J90"/>
    <meta property="fb:admins" content="100001352546622" />
    <meta property="og:image" content="//codeforces.org/s/44704/images/codeforces-telegram-square.png" />
    <link rel="image_src" href="//codeforces.org/s/44704/images/codeforces-telegram-square.png" />
    <meta property="og:title" content="Problem - 1623E - Codeforces"/>
    <meta property="og:description" content=""/>
    
    <meta property="og:site_name" content="Codeforces"/>
    <meta name="uc" content="5eb634dbb6105eb3a856cbae5dbf0584c8d0fe35"/>
    <meta name="usmc" content="ead480166dceabcf9b1318fc78c67fc0a0907ebb"/>
    
    <meta name="cc" content="c4b1fe2ce834253f629b27f00ebd732d85c74d2d"/>
    <meta name="pc" content="6796eb5c67add1c2acf9dd820e257fd30cfe1226"/>
    
    <meta name="utc_offset" content="+03:00"/>
    <meta name="verify-reformal" content="f56f99fd7e087fb6ccb48ef2" />
    <title>Problem - 1623E - Codeforces</title>
        <meta name="description" content="Codeforces. Programming competitions and contests, programming community" />
        <meta name="keywords" content="programming algorithm contest competition informatics olympiads c++ java graphs vkcup" />
    <meta name="robots" content="index, follow" />

    <link rel="stylesheet" href="//codeforces.org/s/44704/css/font-awesome.min.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/line-awesome.min.css" type="text/css" charset="utf-8" />

        <link href='//fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href='//fonts.googleapis.com/css?family=Cuprum&subset=latin,cyrillic' rel='stylesheet' type='text/css'>


    <link rel="apple-touch-icon" sizes="57x57" href="//codeforces.org/s/44704/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="//codeforces.org/s/44704/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="//codeforces.org/s/44704/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="//codeforces.org/s/44704/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="//codeforces.org/s/44704/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="//codeforces.org/s/44704/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="//codeforces.org/s/44704/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="//codeforces.org/s/44704/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="//codeforces.org/s/44704/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="//codeforces.org/s/44704/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="//codeforces.org/s/44704/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="//codeforces.org/s/44704/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="//codeforces.org/s/44704/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="//codeforces.org/s/44704/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!--CombineResourcesFilter-->
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/prettify.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/clear.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/style.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/ttypography.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/problem-statement.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/second-level-menu.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/roundbox.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/datatable.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/table-form.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/topic.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/jquery.jgrowl.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/facebox.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/jquery.wysiwyg.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/jquery.autocomplete.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/codeforces.datepick.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/colorbox.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/css/jquery.drafts.css" type="text/css" charset="utf-8" />
        <link rel="stylesheet" href="//codeforces.org/s/44704/css/community.css" type="text/css" charset="utf-8" />
        <link rel="stylesheet" href="//codeforces.org/s/44704/css/sidebar-menu.css" type="text/css" charset="utf-8" />

    <!-- MathJax -->
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {inlineMath: [['$$$','$$$']], displayMath: [['$$$$$$','$$$$$$']]}
    });
    MathJax.Hub.Register.StartupHook("End", function () {
        Codeforces.runMathJaxListeners();
    });
    </script>
    <script type="text/javascript" async
            src="https://mathjax.codeforces.org/MathJax.js?config=TeX-AMS_HTML-full"
    >
    </script>
    <!-- /MathJax -->

    <script type="text/javascript" src="//codeforces.org/s/44704/js/prettify/prettify.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/pushstream.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.lavalamp.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.jgrowl.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.swipe.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.hotkeys.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/facebox.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.wysiwyg.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/controls/wysiwyg.colorpicker.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/controls/wysiwyg.table.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/controls/wysiwyg.image.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/controls/wysiwyg.link.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.autocomplete.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/ua-parser.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.datepick.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.ie6blocker.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.colorbox-min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.ba-bbq.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/jquery.drafts.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/clipboard.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/autosize.min.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/sjcl.js"></script>
    <script type="text/javascript" src="/scripts/55bc10bbb08da2828994a0de4565d7df/en/codeforces-options.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/codeforces.js?v=20160131"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/EventCatcher.js?v=20160131"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/js/preparedVerdictFormats-en.js"></script>
    <!--/CombineResourcesFilter-->

    <link rel="stylesheet" href="//codeforces.org/s/44704/markitup/skins/markitup/style.css" type="text/css" charset="utf-8" />
    <link rel="stylesheet" href="//codeforces.org/s/44704/markitup/sets/markdown/style.css" type="text/css" charset="utf-8" />


    <script type="text/javascript" src="//codeforces.org/s/44704/markitup/jquery.markitup.js"></script>
    <script type="text/javascript" src="//codeforces.org/s/44704/markitup/sets/markdown/set.js"></script>

    <!--[if IE]>
    <style>
        #sidebar {
            padding-left: 1em;
            margin: 1em 1em 1em 0;
        }
    </style>
    <![endif]-->


        <script id="nocomb.ace-builds/ace.js" src="//codeforces.org/s/44704/js/ace-builds/ace.js" type="text/javascript"></script>
        <script id="nocomb.ace-builds/ext-language_tools.js" src="//codeforces.org/s/44704/js/ace-builds/ext-language_tools.js" type="text/javascript"></script>
        <script id="nocomb.ace-builds/ext-modelist.js" src="//codeforces.org/s/44704/js/ace-builds/ext-modelist.js" type="text/javascript"></script>
 <style>
    body{
    background-color: #080808;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3CradialGradient id='a' cx='500' cy='500' r='60%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23BBBBBB'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='500' cy='500' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23BBBBBB' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%23BBBBBB' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1000' height='1000'/%3E%3Cg fill='none' stroke='%23888888' stroke-width='2' stroke-miterlimit='10' stroke-opacity='.5'%3E%3Ccircle cx='500' cy='500' r='725'/%3E%3Ccircle cx='500' cy='500' r='700'/%3E%3Ccircle cx='500' cy='500' r='675'/%3E%3Ccircle cx='500' cy='500' r='650'/%3E%3Ccircle cx='500' cy='500' r='625'/%3E%3Ccircle cx='500' cy='500' r='600'/%3E%3Ccircle cx='500' cy='500' r='575'/%3E%3Ccircle cx='500' cy='500' r='550'/%3E%3Ccircle cx='500' cy='500' r='525'/%3E%3Ccircle cx='500' cy='500' r='500'/%3E%3Ccircle cx='500' cy='500' r='475'/%3E%3Ccircle cx='500' cy='500' r='450'/%3E%3Ccircle cx='500' cy='500' r='425'/%3E%3Ccircle cx='500' cy='500' r='400'/%3E%3Ccircle cx='500' cy='500' r='375'/%3E%3Ccircle cx='500' cy='500' r='350'/%3E%3Ccircle cx='500' cy='500' r='325'/%3E%3Ccircle cx='500' cy='500' r='300'/%3E%3Ccircle cx='500' cy='500' r='275'/%3E%3Ccircle cx='500' cy='500' r='250'/%3E%3Ccircle cx='500' cy='500' r='225'/%3E%3Ccircle cx='500' cy='500' r='200'/%3E%3Ccircle cx='500' cy='500' r='175'/%3E%3Ccircle cx='500' cy='500' r='150'/%3E%3Ccircle cx='500' cy='500' r='125'/%3E%3Ccircle cx='500' cy='500' r='100'/%3E%3Ccircle cx='500' cy='500' r='75'/%3E%3Ccircle cx='500' cy='500' r='50'/%3E%3Ccircle cx='500' cy='500' r='25'/%3E%3C/g%3E%3Crect fill-opacity='.5' fill='url(%23b)' width='1000' height='1000'/%3E %3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    }

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d; 
    }

 </style>
</head>
<body>
`