"use strict";$(document).ready(function(){function resize(){$(".sparkline1").sparkline([209,210,209,210,210,211,212,210,210,211,213,212,211,210,212,211,210,212],{type:'line',width:'100%',height:'150',lineColor:'#329cff',fillColor:'#b2daff',tooltipSuffix:'Users'});var barParentdiv2=$('.sparkline2').closest('div');var barCount2=[209,210,209,210,210,211,212,210,210,211,213,212,211,210,212,211,210,212,209,210,209,210,210,211,212,210];var barSpacing2=2;$(".sparkline2").sparkline(barCount2,{type:'bar',barWidth:(barParentdiv2.width()-(barCount2.length*barSpacing2))/barCount2.length,height:'150',barSpacing:barSpacing2,barColor:'#329cff',tooltipSuffix:'Users'});var barParentdiv3=$('.sparkline3').closest('div');var barCount3=[1,1,-1,-1,1,0,-1,1,-1,-1,1,-1,-1,1,1,1,0,-1,1,1,-1,-1];var barSpacing3=2;$(".sparkline3").sparkline(barCount3,{type:'tristate',height:'150',barWidth:(barParentdiv3.width()-(barCount3.length*barSpacing3))/barCount3.length,barSpacing:barSpacing3,posBarColor:'#5aca82',negBarColor:'#f86a67',zeroBarColor:'#937eff',tooltipSuffix:'Users'});var count4=[4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5,4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5,4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5,4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5,4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5,4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5,4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5];$(".sparkline4").sparkline(count4,{type:'discrete',lineColor:'#937eff',xwidth:'100%',thresholdValue:5,height:'150',thresholdColor:'#329cff'});var count5=[10,12,12,9,7];$(".sparkline5").sparkline(count5,{type:'bullet',targetColor:'#f86a67',targetWidth:'100%',width:'100%',height:'150',performanceColor:'#329cff',rangeColors:['#f86a67','#5aca82','#fcb410']});var count6=[10,12,12,9,7];$('.sparkline6').sparkline(count6,{type:'pie',height:'150',offset:-40,sliceColors:['#329cff','#5aca82','#fcb410','#937eff','#f86a67']});var count7=[10,12,12,9,7];$('.sparkline7').sparkline(count7,{type:'box',height:'150',width:'100%',boxLineColor:'#329cff',boxFillColor:'#b2daff',whiskerColor:'#937eff',outlierLineColor:'#937eff',outlierFillColor:'#937eff',targetColor:'#f86a67',minValue:'24',maxValue:'54'});var barParentdiv8=$('.sparkline8').closest('div');var barCount8=[209,210,209,210,210,211,212,210,210,211,213,212,211,210,212,211,210,212];var barSpacing8=2;$(".sparkline8").sparkline(barCount8,{type:'bar',width:'100%',height:'150',barWidth:(barParentdiv8.width()-(barCount8.length*barSpacing8))/barCount8.length,barSpacing:barSpacing8,barColor:'#fcb410',tooltipSuffix:' Sales'});$('.sparkline8').sparkline([209,210,209,210,210,211,212,210,210,211,213,212,211,210,212,211,210,212],{composite:true,fillColor:false,width:"100%",spotColor:'#f0ad4e',lineColor:'#31d0d6',tooltipSuffix:' Sales'});var mrefreshinterval=500;var lastmousex=-1;var lastmousey=-1;var lastmousetime;var mousetravel=0;var mpoints=[];var mpoints_max=30;$('html').mousemove(function(e){var mousex=e.pageX;var mousey=e.pageY;if(lastmousex>-1){mousetravel+=Math.max(Math.abs(mousex-lastmousex),Math.abs(mousey-lastmousey));}lastmousex=mousex;lastmousey=mousey;});var mdraw=function(){var md=new Date();var timenow=md.getTime();if(lastmousetime&&lastmousetime!=timenow){var pps=Math.round(mousetravel/(timenow-lastmousetime)*1000);mpoints.push(pps);if(mpoints.length>mpoints_max)mpoints.splice(0,1);mousetravel=0;$('.sparkline9').sparkline(mpoints,{width:'100%',tooltipSuffix:' pixels per second',height:'150',chartRangeMax:24,lineColor:'#937eff',fillColor:'#31d0d6',highlightLineColor:'rgba(50, 156, 255,.1)',highlightSpotColor:'rgba(50, 156, 255,.2)'});}lastmousetime=timenow;setTimeout(mdraw,mrefreshinterval);}
setTimeout(mdraw,mrefreshinterval);}resize();$(".sidebar-toggle").on("click",function(){setTimeout(function(){resize();},100);});$(window).resize(function(){resize();})});