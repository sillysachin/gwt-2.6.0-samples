$wnd.showcase.runAsyncCallback24("function zDb(a){this.b=a}\nfunction CDb(a){this.b=a}\nfunction FDb(a){this.b=a}\nfunction MDb(a,b){this.b=a;this.c=b}\nfunction ut(a,b){a.remove(b)}\nfunction jbc(a,b){bbc(a,b);ut((jZb(),a.hb),b)}\nfunction aZb(){var a;if(!ZYb||cZb()){a=new ABc;bZb(a);ZYb=a}return ZYb}\nfunction cZb(){var a=$doc.cookie;if(a!=$Yb){$Yb=a;return true}else{return false}}\nfunction dZb(a){a=encodeURIComponent(a);$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction uDb(a,b){var c,d,e,f;tt(ebc(a.d));f=0;e=WJ(aZb());for(d=Dyc(e);d.b.Je();){c=sW(Jyc(d),1);gbc(a.d,c);duc(c,b)&&(f=ebc(a.d).options.length-1)}rp((kp(),jp),new MDb(a,f))}\nfunction vDb(a){var b,c,d,e;if(ebc(a.d).options.length<1){Qdc(a.b,xGc);Qdc(a.c,xGc);return}d=ebc(a.d).selectedIndex;b=fbc(a.d,d);c=(e=aZb(),sW(e.ye(b),1));Qdc(a.b,b);Qdc(a.c,c)}\nfunction bZb(b){var c=$doc.cookie;if(c&&c!=xGc){var d=c.split(aIc);for(var e=0;e<d.length;++e){var f,g;var i=d[e].indexOf(mIc);if(i==-1){f=d[e];g=xGc}else{f=d[e].substring(0,i);g=d[e].substring(i+1)}if(_Yb){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.Ae(f,g)}}}\nfunction tDb(a){var b,c,d;c=new P8b(3,3);a.d=new lbc;b=new f1b('Supprimer');Bj((jZb(),b.hb),GNc,true);a8b(c,0,0,'<b><b>Cookies existants:<\\/b><\\/b>');d8b(c,0,1,a.d);d8b(c,0,2,b);a.b=new $dc;a8b(c,1,0,'<b><b>Nom:<\\/b><\\/b>');d8b(c,1,1,a.b);a.c=new $dc;d=new f1b('Sauvegarder Cookie');Bj(d.hb,GNc,true);a8b(c,2,0,'<b><b>Valeur:<\\/b><\\/b>');d8b(c,2,1,a.c);d8b(c,2,2,d);Ij(d,new zDb(a),(qz(),qz(),pz));Ij(a.d,new CDb(a),(gz(),gz(),fz));Ij(b,new FDb(a),pz);uDb(a,null);return c}\nUgb(735,1,NEc,zDb);_.Rc=function ADb(a){var b,c,d;c=Js(_i(this.b.b),FMc);d=Js(_i(this.b.c),FMc);b=new KV(qgb(ugb((new IV).q.getTime()),WEc));if(c.length<1){d$b('Vous devez indiquer un nom de cookie');return}eZb(c,d,b);uDb(this.b,c)};Ugb(736,1,OEc,CDb);_.Qc=function DDb(a){vDb(this.b)};Ugb(737,1,NEc,FDb);_.Rc=function GDb(a){var b,c;c=ebc(this.b.d).selectedIndex;if(c>-1&&c<ebc(this.b.d).options.length){b=fbc(this.b.d,c);dZb(b);jbc(this.b.d,c);vDb(this.b)}};Ugb(738,1,QEc);_.xc=function KDb(){yjb(this.c,tDb(this.b))};Ugb(739,1,{},MDb);_.zc=function NDb(){this.c<ebc(this.b.d).options.length&&kbc(this.b.d,this.c);vDb(this.b)};_.c=0;var ZYb=null,$Yb,_Yb=true;var l5=_sc(MLc,'CwCookies$1',735),m5=_sc(MLc,'CwCookies$2',736),n5=_sc(MLc,'CwCookies$3',737),p5=_sc(MLc,'CwCookies$5',739);DFc(lo)(24);\n//# sourceURL=showcase-24.js\n")
