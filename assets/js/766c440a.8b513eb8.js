"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4,description:"Learn how to customize the look and feel of your Flutter news application."},r="Theming",l={unversionedId:"flutter_development/theming",id:"flutter_development/theming",title:"Theming",description:"Learn how to customize the look and feel of your Flutter news application.",source:"@site/docs/flutter_development/theming.md",sourceDirName:"flutter_development",slug:"/flutter_development/theming",permalink:"/news_toolkit/flutter_development/theming",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/flutter_development/theming.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn how to customize the look and feel of your Flutter news application."},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/news_toolkit/flutter_development/testing"},next:{title:"Analytics",permalink:"/news_toolkit/flutter_development/analytics"}},p={},s=[{value:"Splash Screen",id:"splash-screen",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"App Launcher Icon",id:"app-launcher-icon",level:2},{value:"App Logo",id:"app-logo",level:2},{value:"App Colors",id:"app-colors",level:2},{value:"Theme Colors",id:"theme-colors",level:3},{value:"In-line Colors",id:"in-line-colors",level:3},{value:"Typography",id:"typography",level:2},{value:"Fonts",id:"fonts",level:3},{value:"Additional Customization",id:"additional-customization",level:3},{value:"Text Style Visualization",id:"text-style-visualization",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"theming"},"Theming"),(0,o.kt)("h2",{id:"splash-screen"},"Splash Screen"),(0,o.kt)("p",null,"Flutter's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/development/ui/advanced/splash-screen"},"Adding a Splash Screen to Your Mobile App")," documentation provides the most up-to-date and in-depth guidance on customizing the splash screen in your mobile app."),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("p",null,"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/src/main/res")," folder, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"launch_image.png")," inside the"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mipmap-mdpi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mipmap-hdpi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mipmap-xhdpi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mipmap-xxhdpi"))),(0,o.kt)("p",null,"folders with the image asset you want featured on your Android splash screen. The ",(0,o.kt)("inlineCode",{parentName:"p"},"launch_image.png")," you provide inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"mipmap")," folders should have an appropriate size for that folder."),(0,o.kt)("p",null,"The background color of your splash screen can be changed by editing the hex code value with ",(0,o.kt)("inlineCode",{parentName:"p"},'name="splash_background"')," in ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/src/main/res/values/colors.xml"),"."),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("p",null,"You should configure your iOS splash screen using an Xcode storyboard. To begin, add your splash screen image assets named"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LaunchImage.png")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LaunchImage@2x.png")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LaunchImage@3x.png"))),(0,o.kt)("p",null,"with sizes corresponding to the filename inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"ios/Runner/Assets.xcassets/LaunchImage.imageset")," folder."),(0,o.kt)("p",null,"Open your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"ios")," folder in Xcode and open ",(0,o.kt)("inlineCode",{parentName:"p"},"Runner/LaunchScreen.storyboard")," in the editor. Specify your desired splash screen image and background by selecting those elements and editing their properties in the Xcode inspectors window. Feel free to further edit the splash screen properties in the Xcode inspectors window to customize the exact look of your splash screen."),(0,o.kt)("h2",{id:"app-launcher-icon"},"App Launcher Icon"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_launcher_icons"},"Flutter Launcher Icons")," package to streamline adding your new app launcher icon."),(0,o.kt)("p",null,"Alternatively, you may want to manually update your app's launcher icon. Flutter's documentation contains information on how to accomplish this for both ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/deployment/ios#add-an-app-icon"},"iOS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/deployment/android#adding-a-launcher-icon"},"Android"),"."),(0,o.kt)("h2",{id:"app-logo"},"App Logo"),(0,o.kt)("p",null,"App logo image assets are displayed at both the top of the feed view and at the top of the app navigation drawer. To replace these with your custom assets, replace the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/app_ui/assets/images/logo_dark.png")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/app_ui/assets/images/logo_light.png"))),(0,o.kt)("p",null,"Change the dimensions specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppLogo")," widget (",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/lib/src/widgets/app_logo.dart"),") to match your new image dimensions."),(0,o.kt)("h2",{id:"app-colors"},"App Colors"),(0,o.kt)("p",null,"The colors used throughout your app are specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app_colors.dart")," file found in ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/lib/src/colors"),". Add custom colors to this file and reference them as an attribute of the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppColors")," class inside your app (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"AppColors.orange"),"). The role of colors within your app can be specified as either theme information or as an inline color."),(0,o.kt)("h3",{id:"theme-colors"},"Theme Colors"),(0,o.kt)("p",null,"Some colors are assigned to themes, which allow colors to be shared throughout your app based on their intended role in the user interface. For additional information on specifying theme colors, reference the Flutter ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/cookbook/design/themes"},"Use Themes to Share Colors and Font Styles")," cookbook."),(0,o.kt)("p",null,"App themes are laid out in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app_theme.dart")," file inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/lib/src/theme")," folder. For example, the widget-specific theme ",(0,o.kt)("inlineCode",{parentName:"p"},"_appBarTheme")," allow you to specify the colors and theme information for your ",(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/material/AppBar-class.html"},"AppBar"),"."),(0,o.kt)("h3",{id:"in-line-colors"},"In-line Colors"),(0,o.kt)("p",null,"Not all of your desired color assignments can be specified by changing the app's theme data. You may want to use a color only on certain instances of a widget or specify colors with more granularity than the theme information supports. There are several existing inline color specifications in your app:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Specifying Button Colors")),(0,o.kt)("p",null,"The colors of an app button are specified by the named constructors laid out in ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/lib/src/widgets/app_button.dart"),". To specify new button colors, create a new color constructor. For example, to create an orange app button create the constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"const AppButton.orange({\n  Key? key,\n  VoidCallback? onPressed,\n  double? elevation,\n  TextStyle? textStyle,\n  required Widget child,\n}) : this._(\n        key: key,\n        onPressed: onPressed,\n        buttonColor: AppColors.orange,\n        child: child,\n        foregroundColor: AppColors.white,\n        elevation: elevation,\n        textStyle: textStyle,\n     );\n")),(0,o.kt)("p",null,"You can then call the new ",(0,o.kt)("inlineCode",{parentName:"p"},"AppButton.orange")," constructor in your app wherever you want to add an orange button, or replace an existing constructor call such as ",(0,o.kt)("inlineCode",{parentName:"p"},"AppButton.redWine")," with your new constructor to update the button color."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Specifying TabBar Colors")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TabBarTheme")," specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"app_theme.dart")," does not provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor")," property. To specify a specific color for the ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoriesTabBar")," rendered below the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppBar"),", edit ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoriesTabBar"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"build()")," method inside ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/categories/widgets/categories_tab_bar.dart")," to place the ",(0,o.kt)("inlineCode",{parentName:"p"},"TabBar")," widget inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"ColoredBox"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"return ColoredBox(\n  color: AppColors.organge,\n  child: TabBar(\n    controller: controller,\n    isScrollable: true,\n    tabs: tabs,\n  ),\n);\n")),(0,o.kt)("p",null,"Other widgets with in-line specified colors include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostContentPremiumCategory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SlideshowCategory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostContentCategory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MagicLinkPromptSubtitle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ManageSubscriptionView")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AppTextField")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ArticleIntroduction"))),(0,o.kt)("h2",{id:"typography"},"Typography"),(0,o.kt)("h3",{id:"fonts"},"Fonts"),(0,o.kt)("p",null,"For general details regarding font customization, reference Flutter's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/cookbook/design/fonts"},"Use a Custom Font")," documentation."),(0,o.kt)("p",null,"To change the fonts used in your app, first add your font assets inside ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/assets/fonts"),", then list the added fonts under the ",(0,o.kt)("inlineCode",{parentName:"p"},"fonts")," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/pubspec.yaml"),"."),(0,o.kt)("p",null,"You can specify which fonts you want used in different elements of your app in the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/lib/src/typography/app_text_styles.dart")," file."),(0,o.kt)("p",null,"You can specify the fonts used in your app by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"fontFamily")," value at the following locations inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"app_text_styles.dart")," file to match the name of your desired font family:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UITextStyle._baseTextStyle"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specifies the default font used in UI elements."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ContentTextStyle._baseTextStyle"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specifies the default font used in news content."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"button"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specifies the font used in buttons."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"caption"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specifies the font used in your caption text."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"overline"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specifies the font used in overline text elements such as category labels."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"labelSmall"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specifies the font used in label text (",(0,o.kt)("em",{parentName:"li"},"not referenced in the template out-of-the-box"),").")))),(0,o.kt)("h3",{id:"additional-customization"},"Additional Customization"),(0,o.kt)("p",null,"To customize your app's typography further, you can add and edit various ",(0,o.kt)("inlineCode",{parentName:"p"},"TextStyle")," values, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"fontWeight"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fontSize"),", and others in the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app_ui/lib/src/typography/app_text_styles.dart")," file.\nThe correspondence between selected ",(0,o.kt)("inlineCode",{parentName:"p"},"TextStyles")," and visual elements in the app is illustrated below."),(0,o.kt)("p",null,"For styling text contained in ",(0,o.kt)("inlineCode",{parentName:"p"},"HtmlBlocks"),", you can edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," map in ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/news_blocks_ui/lib/src/html.dart")," to associate HTML selectors with the ",(0,o.kt)("inlineCode",{parentName:"p"},"TextStyle")," you want to be utilized when the HTML is rendered."),(0,o.kt)("h3",{id:"text-style-visualization"},"Text Style Visualization"),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/61138206/191820826-7ef6c873-94ee-49e8-bcd6-25e35421c055.png"}))}u.isMDXComponent=!0}}]);