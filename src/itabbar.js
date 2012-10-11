/*
 * iTabbar
 * Copyright (c) Gino Cote & Pascal Carmoni
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
var count = $("#tabbar li").length;
var pourcent = 100 / count;
$("#tabbar li").css("width", pourcent + "%");
//alert(pourcent);

var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');

$("#tabbar a").bind(clickEventType, function() {
	$("#tabbar a").addClass("current").not(this).removeClass("current");
    //$("#tabbar div").addClass("current").not(this).removeClass("current");
});