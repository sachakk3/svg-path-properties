// http://geoexamples.com/path-properties/ v1.0.13 Copyright 2022 Roger Veciana i Rovira
function t(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function n(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var i={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},h=/([astvzqmhlc])([^astvzqmhlc]*)/gi,r=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,s=function(t){var n=t.match(r);return n?n.map(Number):[]},a=function(n,e,i,h){var r=this;t(this,"x0",void 0),t(this,"x1",void 0),t(this,"y0",void 0),t(this,"y1",void 0),t(this,"getTotalLength",(function(){return Math.sqrt(Math.pow(r.x0-r.x1,2)+Math.pow(r.y0-r.y1,2))})),t(this,"getPointAtLength",(function(t){var n=t/Math.sqrt(Math.pow(r.x0-r.x1,2)+Math.pow(r.y0-r.y1,2));n=Number.isNaN(n)?1:n;var e=(r.x1-r.x0)*n,i=(r.y1-r.y0)*n;return{x:r.x0+e,y:r.y0+i}})),t(this,"getTangentAtLength",(function(t){var n=Math.sqrt((r.x1-r.x0)*(r.x1-r.x0)+(r.y1-r.y0)*(r.y1-r.y0));return{x:-(r.x1-r.x0)/n,y:-(r.y1-r.y0)/n}})),t(this,"getPropertiesAtLength",(function(t){var n=r.getPointAtLength(t),e=r.getTangentAtLength(t);return{x:n.x,y:n.y,tangentX:e.x,tangentY:e.y}})),this.x0=n,this.x1=e,this.y0=i,this.y1=h},o=function(n,e,i,h,r,s,a,o,l){var c=this;t(this,"x0",void 0),t(this,"y0",void 0),t(this,"rx",void 0),t(this,"ry",void 0),t(this,"xAxisRotate",void 0),t(this,"LargeArcFlag",void 0),t(this,"SweepFlag",void 0),t(this,"x1",void 0),t(this,"y1",void 0),t(this,"length",void 0),t(this,"getTotalLength",(function(){return c.length})),t(this,"getPointAtLength",(function(t){t<0?t=0:t>c.length&&(t=c.length);var n=g({x:c.x0,y:c.y0},c.rx,c.ry,c.xAxisRotate,c.LargeArcFlag,c.SweepFlag,{x:c.x1,y:c.y1},t/c.length);return{x:n.x,y:n.y}})),t(this,"getTangentAtLength",(function(t){t<0?t=0:t>c.length&&(t=c.length);var n,e=.05,i=c.getPointAtLength(t);t<0?t=0:t>c.length&&(t=c.length);var h=(n=t<c.length-e?c.getPointAtLength(t+e):c.getPointAtLength(t-e)).x-i.x,r=n.y-i.y,s=Math.sqrt(h*h+r*r);return t<c.length-e?{x:-h/s,y:-r/s}:{x:h/s,y:r/s}})),t(this,"getPropertiesAtLength",(function(t){var n=c.getTangentAtLength(t),e=c.getPointAtLength(t);return{x:e.x,y:e.y,tangentX:n.x,tangentY:n.y}})),this.x0=n,this.y0=e,this.rx=i,this.ry=h,this.xAxisRotate=r,this.LargeArcFlag=s,this.SweepFlag=a,this.x1=o,this.y1=l;var f=u(300,(function(t){return g({x:n,y:e},i,h,r,s,a,{x:o,y:l},t)}));this.length=f.arcLength},g=function(t,n,e,i,h,r,s,a){n=Math.abs(n),e=Math.abs(e),i=l(i,360);var o=c(i);if(t.x===s.x&&t.y===s.y)return{x:t.x,y:t.y,ellipticalArcAngle:0};if(0===n||0===e)return{x:0,y:0,ellipticalArcAngle:0};var g=(t.x-s.x)/2,u=(t.y-s.y)/2,f={x:Math.cos(o)*g+Math.sin(o)*u,y:-Math.sin(o)*g+Math.cos(o)*u},y=Math.pow(f.x,2)/Math.pow(n,2)+Math.pow(f.y,2)/Math.pow(e,2);y>1&&(n=Math.sqrt(y)*n,e=Math.sqrt(y)*e);var p=(Math.pow(n,2)*Math.pow(e,2)-Math.pow(n,2)*Math.pow(f.y,2)-Math.pow(e,2)*Math.pow(f.x,2))/(Math.pow(n,2)*Math.pow(f.y,2)+Math.pow(e,2)*Math.pow(f.x,2));p=p<0?0:p;var v=(h!==r?1:-1)*Math.sqrt(p),M=v*(n*f.y/e),L=v*(-e*f.x/n),w={x:Math.cos(o)*M-Math.sin(o)*L+(t.x+s.x)/2,y:Math.sin(o)*M+Math.cos(o)*L+(t.y+s.y)/2},A={x:(f.x-M)/n,y:(f.y-L)/e},d=x({x:1,y:0},A),P=x(A,{x:(-f.x-M)/n,y:(-f.y-L)/e});!r&&P>0?P-=2*Math.PI:r&&P<0&&(P+=2*Math.PI);var b=d+(P%=2*Math.PI)*a,T=n*Math.cos(b),m=e*Math.sin(b);return{x:Math.cos(o)*T-Math.sin(o)*m+w.x,y:Math.sin(o)*T+Math.cos(o)*m+w.y,ellipticalArcStartAngle:d,ellipticalArcEndAngle:d+P,ellipticalArcAngle:b,ellipticalArcCenter:w,resultantRx:n,resultantRy:e}},u=function(t,n){t=t||500;for(var e,i=0,h=[],r=[],s=n(0),a=0;a<t;a++){var o=y(a*(1/t),0,1);e=n(o),i+=f(s,e),r.push([s,e]),h.push({t:o,arcLength:i}),s=e}return e=n(1),r.push([s,e]),i+=f(s,e),h.push({t:1,arcLength:i}),{arcLength:i,arcLengthMap:h,approximationLines:r}},l=function(t,n){return(t%n+n)%n},c=function(t){return t*(Math.PI/180)},f=function(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))},y=function(t,n,e){return Math.min(Math.max(t,n),e)},x=function(t,n){var e=t.x*n.x+t.y*n.y,i=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(n.x,2)+Math.pow(n.y,2)));return(t.x*n.y-t.y*n.x<0?-1:1)*Math.acos(e/i)},p=[[],[],[-.5773502691896257,.5773502691896257],[0,-.7745966692414834,.7745966692414834],[-.33998104358485626,.33998104358485626,-.8611363115940526,.8611363115940526],[0,-.5384693101056831,.5384693101056831,-.906179845938664,.906179845938664],[.6612093864662645,-.6612093864662645,-.2386191860831969,.2386191860831969,-.932469514203152,.932469514203152],[0,.4058451513773972,-.4058451513773972,-.7415311855993945,.7415311855993945,-.9491079123427585,.9491079123427585],[-.1834346424956498,.1834346424956498,-.525532409916329,.525532409916329,-.7966664774136267,.7966664774136267,-.9602898564975363,.9602898564975363],[0,-.8360311073266358,.8360311073266358,-.9681602395076261,.9681602395076261,-.3242534234038089,.3242534234038089,-.6133714327005904,.6133714327005904],[-.14887433898163122,.14887433898163122,-.4333953941292472,.4333953941292472,-.6794095682990244,.6794095682990244,-.8650633666889845,.8650633666889845,-.9739065285171717,.9739065285171717],[0,-.26954315595234496,.26954315595234496,-.5190961292068118,.5190961292068118,-.7301520055740494,.7301520055740494,-.8870625997680953,.8870625997680953,-.978228658146057,.978228658146057],[-.1252334085114689,.1252334085114689,-.3678314989981802,.3678314989981802,-.5873179542866175,.5873179542866175,-.7699026741943047,.7699026741943047,-.9041172563704749,.9041172563704749,-.9815606342467192,.9815606342467192],[0,-.2304583159551348,.2304583159551348,-.44849275103644687,.44849275103644687,-.6423493394403402,.6423493394403402,-.8015780907333099,.8015780907333099,-.9175983992229779,.9175983992229779,-.9841830547185881,.9841830547185881],[-.10805494870734367,.10805494870734367,-.31911236892788974,.31911236892788974,-.5152486363581541,.5152486363581541,-.6872929048116855,.6872929048116855,-.827201315069765,.827201315069765,-.9284348836635735,.9284348836635735,-.9862838086968123,.9862838086968123],[0,-.20119409399743451,.20119409399743451,-.3941513470775634,.3941513470775634,-.5709721726085388,.5709721726085388,-.7244177313601701,.7244177313601701,-.8482065834104272,.8482065834104272,-.937273392400706,.937273392400706,-.9879925180204854,.9879925180204854],[-.09501250983763744,.09501250983763744,-.2816035507792589,.2816035507792589,-.45801677765722737,.45801677765722737,-.6178762444026438,.6178762444026438,-.755404408355003,.755404408355003,-.8656312023878318,.8656312023878318,-.9445750230732326,.9445750230732326,-.9894009349916499,.9894009349916499],[0,-.17848418149584785,.17848418149584785,-.3512317634538763,.3512317634538763,-.5126905370864769,.5126905370864769,-.6576711592166907,.6576711592166907,-.7815140038968014,.7815140038968014,-.8802391537269859,.8802391537269859,-.9506755217687678,.9506755217687678,-.9905754753144174,.9905754753144174],[-.0847750130417353,.0847750130417353,-.2518862256915055,.2518862256915055,-.41175116146284263,.41175116146284263,-.5597708310739475,.5597708310739475,-.6916870430603532,.6916870430603532,-.8037049589725231,.8037049589725231,-.8926024664975557,.8926024664975557,-.9558239495713977,.9558239495713977,-.9915651684209309,.9915651684209309],[0,-.16035864564022537,.16035864564022537,-.31656409996362983,.31656409996362983,-.46457074137596094,.46457074137596094,-.600545304661681,.600545304661681,-.7209661773352294,.7209661773352294,-.8227146565371428,.8227146565371428,-.9031559036148179,.9031559036148179,-.96020815213483,.96020815213483,-.9924068438435844,.9924068438435844],[-.07652652113349734,.07652652113349734,-.22778585114164507,.22778585114164507,-.37370608871541955,.37370608871541955,-.5108670019508271,.5108670019508271,-.636053680726515,.636053680726515,-.7463319064601508,.7463319064601508,-.8391169718222188,.8391169718222188,-.912234428251326,.912234428251326,-.9639719272779138,.9639719272779138,-.9931285991850949,.9931285991850949],[0,-.1455618541608951,.1455618541608951,-.2880213168024011,.2880213168024011,-.4243421202074388,.4243421202074388,-.5516188358872198,.5516188358872198,-.6671388041974123,.6671388041974123,-.7684399634756779,.7684399634756779,-.8533633645833173,.8533633645833173,-.9200993341504008,.9200993341504008,-.9672268385663063,.9672268385663063,-.9937521706203895,.9937521706203895],[-.06973927331972223,.06973927331972223,-.20786042668822127,.20786042668822127,-.34193582089208424,.34193582089208424,-.469355837986757,.469355837986757,-.5876404035069116,.5876404035069116,-.6944872631866827,.6944872631866827,-.7878168059792081,.7878168059792081,-.8658125777203002,.8658125777203002,-.926956772187174,.926956772187174,-.9700604978354287,.9700604978354287,-.9942945854823992,.9942945854823992],[0,-.1332568242984661,.1332568242984661,-.26413568097034495,.26413568097034495,-.3903010380302908,.3903010380302908,-.5095014778460075,.5095014778460075,-.6196098757636461,.6196098757636461,-.7186613631319502,.7186613631319502,-.8048884016188399,.8048884016188399,-.8767523582704416,.8767523582704416,-.9329710868260161,.9329710868260161,-.9725424712181152,.9725424712181152,-.9947693349975522,.9947693349975522],[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213]],v=[[],[],[1,1],[.8888888888888888,.5555555555555556,.5555555555555556],[.6521451548625461,.6521451548625461,.34785484513745385,.34785484513745385],[.5688888888888889,.47862867049936647,.47862867049936647,.23692688505618908,.23692688505618908],[.3607615730481386,.3607615730481386,.46791393457269104,.46791393457269104,.17132449237917036,.17132449237917036],[.4179591836734694,.3818300505051189,.3818300505051189,.27970539148927664,.27970539148927664,.1294849661688697,.1294849661688697],[.362683783378362,.362683783378362,.31370664587788727,.31370664587788727,.22238103445337448,.22238103445337448,.10122853629037626,.10122853629037626],[.3302393550012598,.1806481606948574,.1806481606948574,.08127438836157441,.08127438836157441,.31234707704000286,.31234707704000286,.26061069640293544,.26061069640293544],[.29552422471475287,.29552422471475287,.26926671930999635,.26926671930999635,.21908636251598204,.21908636251598204,.1494513491505806,.1494513491505806,.06667134430868814,.06667134430868814],[.2729250867779006,.26280454451024665,.26280454451024665,.23319376459199048,.23319376459199048,.18629021092773426,.18629021092773426,.1255803694649046,.1255803694649046,.05566856711617366,.05566856711617366],[.24914704581340277,.24914704581340277,.2334925365383548,.2334925365383548,.20316742672306592,.20316742672306592,.16007832854334622,.16007832854334622,.10693932599531843,.10693932599531843,.04717533638651183,.04717533638651183],[.2325515532308739,.22628318026289723,.22628318026289723,.2078160475368885,.2078160475368885,.17814598076194574,.17814598076194574,.13887351021978725,.13887351021978725,.09212149983772845,.09212149983772845,.04048400476531588,.04048400476531588],[.2152638534631578,.2152638534631578,.2051984637212956,.2051984637212956,.18553839747793782,.18553839747793782,.15720316715819355,.15720316715819355,.12151857068790319,.12151857068790319,.08015808715976021,.08015808715976021,.03511946033175186,.03511946033175186],[.2025782419255613,.19843148532711158,.19843148532711158,.1861610000155622,.1861610000155622,.16626920581699392,.16626920581699392,.13957067792615432,.13957067792615432,.10715922046717194,.10715922046717194,.07036604748810812,.07036604748810812,.03075324199611727,.03075324199611727],[.1894506104550685,.1894506104550685,.18260341504492358,.18260341504492358,.16915651939500254,.16915651939500254,.14959598881657674,.14959598881657674,.12462897125553388,.12462897125553388,.09515851168249279,.09515851168249279,.062253523938647894,.062253523938647894,.027152459411754096,.027152459411754096],[.17944647035620653,.17656270536699264,.17656270536699264,.16800410215645004,.16800410215645004,.15404576107681028,.15404576107681028,.13513636846852548,.13513636846852548,.11188384719340397,.11188384719340397,.08503614831717918,.08503614831717918,.0554595293739872,.0554595293739872,.02414830286854793,.02414830286854793],[.1691423829631436,.1691423829631436,.16427648374583273,.16427648374583273,.15468467512626524,.15468467512626524,.14064291467065065,.14064291467065065,.12255520671147846,.12255520671147846,.10094204410628717,.10094204410628717,.07642573025488905,.07642573025488905,.0497145488949698,.0497145488949698,.02161601352648331,.02161601352648331],[.1610544498487837,.15896884339395434,.15896884339395434,.15276604206585967,.15276604206585967,.1426067021736066,.1426067021736066,.12875396253933621,.12875396253933621,.11156664554733399,.11156664554733399,.09149002162245,.09149002162245,.06904454273764123,.06904454273764123,.0448142267656996,.0448142267656996,.019461788229726478,.019461788229726478],[.15275338713072584,.15275338713072584,.14917298647260374,.14917298647260374,.14209610931838204,.14209610931838204,.13168863844917664,.13168863844917664,.11819453196151841,.11819453196151841,.10193011981724044,.10193011981724044,.08327674157670475,.08327674157670475,.06267204833410907,.06267204833410907,.04060142980038694,.04060142980038694,.017614007139152118,.017614007139152118],[.14608113364969041,.14452440398997005,.14452440398997005,.13988739479107315,.13988739479107315,.13226893863333747,.13226893863333747,.12183141605372853,.12183141605372853,.10879729916714838,.10879729916714838,.09344442345603386,.09344442345603386,.0761001136283793,.0761001136283793,.057134425426857205,.057134425426857205,.036953789770852494,.036953789770852494,.016017228257774335,.016017228257774335],[.13925187285563198,.13925187285563198,.13654149834601517,.13654149834601517,.13117350478706238,.13117350478706238,.12325237681051242,.12325237681051242,.11293229608053922,.11293229608053922,.10041414444288096,.10041414444288096,.08594160621706773,.08594160621706773,.06979646842452049,.06979646842452049,.052293335152683286,.052293335152683286,.03377490158481415,.03377490158481415,.0146279952982722,.0146279952982722],[.13365457218610619,.1324620394046966,.1324620394046966,.12890572218808216,.12890572218808216,.12304908430672953,.12304908430672953,.11499664022241136,.11499664022241136,.10489209146454141,.10489209146454141,.09291576606003515,.09291576606003515,.07928141177671895,.07928141177671895,.06423242140852585,.06423242140852585,.04803767173108467,.04803767173108467,.030988005856979445,.030988005856979445,.013411859487141771,.013411859487141771],[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872]],M=[[1],[1,1],[1,2,1],[1,3,3,1]],L=function(t,n,e){return{x:(1-e)*(1-e)*(1-e)*t[0]+3*(1-e)*(1-e)*e*t[1]+3*(1-e)*e*e*t[2]+e*e*e*t[3],y:(1-e)*(1-e)*(1-e)*n[0]+3*(1-e)*(1-e)*e*n[1]+3*(1-e)*e*e*n[2]+e*e*e*n[3]}},w=function(t,n,e){return d([3*(t[1]-t[0]),3*(t[2]-t[1]),3*(t[3]-t[2])],[3*(n[1]-n[0]),3*(n[2]-n[1]),3*(n[3]-n[2])],e)},A=function(t,n,e){var i,h,r;i=e/2,h=0;for(var s=0;s<20;s++)r=i*p[20][s]+i,h+=v[20][s]*T(t,n,r);return i*h},d=function(t,n,e){return{x:(1-e)*(1-e)*t[0]+2*(1-e)*e*t[1]+e*e*t[2],y:(1-e)*(1-e)*n[0]+2*(1-e)*e*n[1]+e*e*n[2]}},P=function(t,n,e){void 0===e&&(e=1);var i=t[0]-2*t[1]+t[2],h=n[0]-2*n[1]+n[2],r=2*t[1]-2*t[0],s=2*n[1]-2*n[0],a=4*(i*i+h*h),o=4*(i*r+h*s),g=r*r+s*s;if(0===a)return e*Math.sqrt(Math.pow(t[2]-t[0],2)+Math.pow(n[2]-n[0],2));var u=o/(2*a),l=e+u,c=g/a-u*u,f=l*l+c>0?Math.sqrt(l*l+c):0,y=u*u+c>0?Math.sqrt(u*u+c):0,x=u+Math.sqrt(u*u+c)!==0?c*Math.log(Math.abs((l+f)/(u+y))):0;return Math.sqrt(a)/2*(l*f-u*y+x)},b=function(t,n,e){return{x:2*(1-e)*(t[1]-t[0])+2*e*(t[2]-t[1]),y:2*(1-e)*(n[1]-n[0])+2*e*(n[2]-n[1])}};function T(t,n,e){var i=m(1,e,t),h=m(1,e,n),r=i*i+h*h;return Math.sqrt(r)}var m=function t(n,e,i){var h,r,s=i.length-1;if(0===s)return 0;if(0===n){r=0;for(var a=0;a<=s;a++)r+=M[s][a]*Math.pow(1-e,s-a)*Math.pow(e,a)*i[a];return r}h=new Array(s);for(var o=0;o<s;o++)h[o]=s*(i[o+1]-i[o]);return t(n-1,e,h)},q=function(t,n,e){for(var i=1,h=t/n,r=(t-e(h))/n,s=0;i>.001;){var a=e(h+r),o=Math.abs(t-a)/n;if(o<i)i=o,h+=r;else{var g=e(h-r),u=Math.abs(t-g)/n;u<i?(i=u,h-=r):r/=2}if(++s>500)break}return h},_=function(n,e,i,h,r,s,a,o){var g=this;t(this,"a",void 0),t(this,"b",void 0),t(this,"c",void 0),t(this,"d",void 0),t(this,"length",void 0),t(this,"getArcLength",void 0),t(this,"getPoint",void 0),t(this,"getDerivative",void 0),t(this,"getTotalLength",(function(){return g.length})),t(this,"getPointAtLength",(function(t){var n=[g.a.x,g.b.x,g.c.x,g.d.x],e=[g.a.y,g.b.y,g.c.y,g.d.y],i=q(t,g.length,(function(t){return g.getArcLength(n,e,t)}));return g.getPoint(n,e,i)})),t(this,"getTangentAtLength",(function(t){var n=[g.a.x,g.b.x,g.c.x,g.d.x],e=[g.a.y,g.b.y,g.c.y,g.d.y],i=q(t,g.length,(function(t){return g.getArcLength(n,e,t)})),h=g.getDerivative(n,e,i),r=Math.sqrt(h.x*h.x+h.y*h.y);return r>0?{x:h.x/r,y:h.y/r}:{x:0,y:0}})),t(this,"getPropertiesAtLength",(function(t){var n,e=[g.a.x,g.b.x,g.c.x,g.d.x],i=[g.a.y,g.b.y,g.c.y,g.d.y],h=q(t,g.length,(function(t){return g.getArcLength(e,i,t)})),r=g.getDerivative(e,i,h),s=Math.sqrt(r.x*r.x+r.y*r.y);n=s>0?{x:r.x/s,y:r.y/s}:{x:0,y:0};var a=g.getPoint(e,i,h);return{x:a.x,y:a.y,tangentX:n.x,tangentY:n.y}})),t(this,"getC",(function(){return g.c})),t(this,"getD",(function(){return g.d})),this.a={x:n,y:e},this.b={x:i,y:h},this.c={x:r,y:s},void 0!==a&&void 0!==o?(this.getArcLength=A,this.getPoint=L,this.getDerivative=w,this.d={x:a,y:o}):(this.getArcLength=P,this.getPoint=d,this.getDerivative=b,this.d={x:0,y:0}),this.length=this.getArcLength([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],1)},S=function(e){var r=this;t(this,"length",0),t(this,"partial_lengths",[]),t(this,"functions",[]),t(this,"initial_point",null),t(this,"getPartAtLength",(function(t){t<0?t=0:t>r.length&&(t=r.length);for(var n=r.partial_lengths.length-1;r.partial_lengths[n]>=t&&n>0;)n--;return n++,{fraction:t-r.partial_lengths[n-1],i:n}})),t(this,"getTotalLength",(function(){return r.length})),t(this,"getPointAtLength",(function(t){var n=r.getPartAtLength(t),e=r.functions[n.i];if(e)return e.getPointAtLength(n.fraction);if(r.initial_point)return r.initial_point;throw new Error("Wrong function at this part.")})),t(this,"getTangentAtLength",(function(t){var n=r.getPartAtLength(t),e=r.functions[n.i];if(e)return e.getTangentAtLength(n.fraction);if(r.initial_point)return{x:0,y:0};throw new Error("Wrong function at this part.")})),t(this,"getPropertiesAtLength",(function(t){var n=r.getPartAtLength(t),e=r.functions[n.i];if(e)return e.getPropertiesAtLength(n.fraction);if(r.initial_point)return{x:r.initial_point.x,y:r.initial_point.y,tangentX:0,tangentY:0};throw new Error("Wrong function at this part.")})),t(this,"getParts",(function(){for(var t=[],n=0;n<r.functions.length;n++)if(null!==r.functions[n]){r.functions[n]=r.functions[n];var e={start:r.functions[n].getPointAtLength(0),end:r.functions[n].getPointAtLength(r.partial_lengths[n]-r.partial_lengths[n-1]),length:r.partial_lengths[n]-r.partial_lengths[n-1],getPointAtLength:r.functions[n].getPointAtLength,getTangentAtLength:r.functions[n].getTangentAtLength,getPropertiesAtLength:r.functions[n].getPropertiesAtLength};t.push(e)}return t}));for(var g,u=Array.isArray(e)?e:function(t){var e=(t&&t.length>0?t:"M0,0").match(h);if(!e)throw new Error("No path elements found in string ".concat(t));return e.reduce((function(t,e){var h=e.charAt(0),r=h.toLowerCase(),a=s(e.substr(1));for("m"===r&&a.length>2&&(t.push([h].concat(n(a.splice(0,2)))),r="l",h="m"===h?"l":"L");a.length>=0;){if(a.length===i[r]){t.push([h].concat(n(a.splice(0,i[r]))));break}if(a.length<i[r])throw new Error('Malformed path data: "'.concat(h,'" must have ').concat(i[r]," elements and has ").concat(a.length,": ").concat(e));t.push([h].concat(n(a.splice(0,i[r]))))}return t}),[])}(e),l=[0,0],c=[0,0],f=[0,0],y=0;y<u.length;y++){if("M"===u[y][0])f=[(l=[u[y][1],u[y][2]])[0],l[1]],this.functions.push(null),0===y&&(this.initial_point={x:u[y][1],y:u[y][2]});else if("m"===u[y][0])f=[(l=[u[y][1]+l[0],u[y][2]+l[1]])[0],l[1]],this.functions.push(null);else if("L"===u[y][0])this.length+=Math.sqrt(Math.pow(l[0]-u[y][1],2)+Math.pow(l[1]-u[y][2],2)),this.functions.push(new a(l[0],u[y][1],l[1],u[y][2])),l=[u[y][1],u[y][2]];else if("l"===u[y][0])this.length+=Math.sqrt(Math.pow(u[y][1],2)+Math.pow(u[y][2],2)),this.functions.push(new a(l[0],u[y][1]+l[0],l[1],u[y][2]+l[1])),l=[u[y][1]+l[0],u[y][2]+l[1]];else if("H"===u[y][0])this.length+=Math.abs(l[0]-u[y][1]),this.functions.push(new a(l[0],u[y][1],l[1],l[1])),l[0]=u[y][1];else if("h"===u[y][0])this.length+=Math.abs(u[y][1]),this.functions.push(new a(l[0],l[0]+u[y][1],l[1],l[1])),l[0]=u[y][1]+l[0];else if("V"===u[y][0])this.length+=Math.abs(l[1]-u[y][1]),this.functions.push(new a(l[0],l[0],l[1],u[y][1])),l[1]=u[y][1];else if("v"===u[y][0])this.length+=Math.abs(u[y][1]),this.functions.push(new a(l[0],l[0],l[1],l[1]+u[y][1])),l[1]=u[y][1]+l[1];else if("z"===u[y][0]||"Z"===u[y][0])this.length+=Math.sqrt(Math.pow(f[0]-l[0],2)+Math.pow(f[1]-l[1],2)),this.functions.push(new a(l[0],f[0],l[1],f[1])),l=[f[0],f[1]];else if("C"===u[y][0])g=new _(l[0],l[1],u[y][1],u[y][2],u[y][3],u[y][4],u[y][5],u[y][6]),this.length+=g.getTotalLength(),l=[u[y][5],u[y][6]],this.functions.push(g);else if("c"===u[y][0])(g=new _(l[0],l[1],l[0]+u[y][1],l[1]+u[y][2],l[0]+u[y][3],l[1]+u[y][4],l[0]+u[y][5],l[1]+u[y][6])).getTotalLength()>0?(this.length+=g.getTotalLength(),this.functions.push(g),l=[u[y][5]+l[0],u[y][6]+l[1]]):this.functions.push(new a(l[0],l[0],l[1],l[1]));else if("S"===u[y][0]){if(y>0&&["C","c","S","s"].indexOf(u[y-1][0])>-1){if(g){var x=g.getC();g=new _(l[0],l[1],2*l[0]-x.x,2*l[1]-x.y,u[y][1],u[y][2],u[y][3],u[y][4])}}else g=new _(l[0],l[1],l[0],l[1],u[y][1],u[y][2],u[y][3],u[y][4]);g&&(this.length+=g.getTotalLength(),l=[u[y][3],u[y][4]],this.functions.push(g))}else if("s"===u[y][0]){if(y>0&&["C","c","S","s"].indexOf(u[y-1][0])>-1){if(g){var p=g.getC(),v=g.getD();g=new _(l[0],l[1],l[0]+v.x-p.x,l[1]+v.y-p.y,l[0]+u[y][1],l[1]+u[y][2],l[0]+u[y][3],l[1]+u[y][4])}}else g=new _(l[0],l[1],l[0],l[1],l[0]+u[y][1],l[1]+u[y][2],l[0]+u[y][3],l[1]+u[y][4]);g&&(this.length+=g.getTotalLength(),l=[u[y][3]+l[0],u[y][4]+l[1]],this.functions.push(g))}else if("Q"===u[y][0]){if(l[0]==u[y][1]&&l[1]==u[y][2]){var M=new a(u[y][1],u[y][3],u[y][2],u[y][4]);this.length+=M.getTotalLength(),this.functions.push(M)}else g=new _(l[0],l[1],u[y][1],u[y][2],u[y][3],u[y][4],void 0,void 0),this.length+=g.getTotalLength(),this.functions.push(g);l=[u[y][3],u[y][4]],c=[u[y][1],u[y][2]]}else if("q"===u[y][0]){if(0!=u[y][1]||0!=u[y][2])g=new _(l[0],l[1],l[0]+u[y][1],l[1]+u[y][2],l[0]+u[y][3],l[1]+u[y][4],void 0,void 0),this.length+=g.getTotalLength(),this.functions.push(g);else{var L=new a(l[0]+u[y][1],l[0]+u[y][3],l[1]+u[y][2],l[1]+u[y][4]);this.length+=L.getTotalLength(),this.functions.push(L)}c=[l[0]+u[y][1],l[1]+u[y][2]],l=[u[y][3]+l[0],u[y][4]+l[1]]}else if("T"===u[y][0]){if(y>0&&["Q","q","T","t"].indexOf(u[y-1][0])>-1)g=new _(l[0],l[1],2*l[0]-c[0],2*l[1]-c[1],u[y][1],u[y][2],void 0,void 0),this.functions.push(g),this.length+=g.getTotalLength();else{var w=new a(l[0],u[y][1],l[1],u[y][2]);this.functions.push(w),this.length+=w.getTotalLength()}c=[2*l[0]-c[0],2*l[1]-c[1]],l=[u[y][1],u[y][2]]}else if("t"===u[y][0]){if(y>0&&["Q","q","T","t"].indexOf(u[y-1][0])>-1)g=new _(l[0],l[1],2*l[0]-c[0],2*l[1]-c[1],l[0]+u[y][1],l[1]+u[y][2],void 0,void 0),this.length+=g.getTotalLength(),this.functions.push(g);else{var A=new a(l[0],l[0]+u[y][1],l[1],l[1]+u[y][2]);this.length+=A.getTotalLength(),this.functions.push(A)}c=[2*l[0]-c[0],2*l[1]-c[1]],l=[u[y][1]+l[0],u[y][2]+l[1]]}else if("A"===u[y][0]){var d=new o(l[0],l[1],u[y][1],u[y][2],u[y][3],1===u[y][4],1===u[y][5],u[y][6],u[y][7]);this.length+=d.getTotalLength(),l=[u[y][6],u[y][7]],this.functions.push(d)}else if("a"===u[y][0]){var P=new o(l[0],l[1],u[y][1],u[y][2],u[y][3],1===u[y][4],1===u[y][5],l[0]+u[y][6],l[1]+u[y][7]);this.length+=P.getTotalLength(),l=[l[0]+u[y][6],l[1]+u[y][7]],this.functions.push(P)}this.partial_lengths.push(this.length)}},C=function(n){var e=this;if(t(this,"inst",void 0),t(this,"getTotalLength",(function(){return e.inst.getTotalLength()})),t(this,"getPointAtLength",(function(t){return e.inst.getPointAtLength(t)})),t(this,"getTangentAtLength",(function(t){return e.inst.getTangentAtLength(t)})),t(this,"getPropertiesAtLength",(function(t){return e.inst.getPropertiesAtLength(t)})),t(this,"getParts",(function(){return e.inst.getParts()})),this.inst=new S(n),!(this instanceof C))return new C(n)};export{C as svgPathProperties};
