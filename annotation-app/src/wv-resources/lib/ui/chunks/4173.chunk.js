(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[4173],{34173:function(_,t,e){_.exports=function(_){"use strict";var t=function(_){return _&&"object"==typeof _&&"default"in _?_:{default:_}}(_),e="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),s="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),n=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function r(_,t,e){var s,n;return"m"===e?t?"хвилина":"хвилину":"h"===e?t?"година":"годину":_+" "+(s=+_,n={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[e].split("_"),s%10==1&&s%100!=11?n[0]:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?n[1]:n[2])}var u=function(_,t){return n.test(t)?e[_.month()]:s[_.month()]};u.s=s,u.f=e;var M={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:u,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:r,mm:r,h:r,hh:r,d:"день",dd:r,M:"місяць",MM:r,y:"рік",yy:r},ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};return t.default.locale(M,null,!0),M}(e(74353))}}]);
//# sourceMappingURL=4173.chunk.js.map