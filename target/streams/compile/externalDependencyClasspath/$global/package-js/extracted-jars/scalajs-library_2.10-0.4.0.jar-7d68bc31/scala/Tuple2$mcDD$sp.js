/** @constructor */
ScalaJS.c.scala_Tuple2$mcDD$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcD$sp$f = 0.0;
  this.$$und2$mcD$sp$f = 0.0
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcDD$sp;
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.$$und1$mcD$sp__D = (function() {
  return this.$$und1$mcD$sp$f
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.$$und1__D = (function() {
  return this.$$und1$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.$$und2$mcD$sp__D = (function() {
  return this.$$und2$mcD$sp$f
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.$$und2__D = (function() {
  return this.$$und2$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcDD$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.swap$mcDD$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcDD$sp().init___D__D(this.$$und2__D(), this.$$und1__D())
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.copy$default$1__D = (function() {
  return this.copy$default$1$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.copy$default$1$mcD$sp__D = (function() {
  return this.$$und1__D()
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.copy$default$2__D = (function() {
  return this.copy$default$2$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.copy$default$2$mcD$sp__D = (function() {
  return this.$$und2__D()
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bD(this.copy$default$2__D())
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bD(this.copy$default$1__D())
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bD(this.$$und2__D())
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bD(this.$$und1__D())
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.init___D__D = (function(_1$mcD$sp, _2$mcD$sp) {
  this.$$und1$mcD$sp$f = _1$mcD$sp;
  this.$$und2$mcD$sp$f = _2$mcD$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  ScalaJS.impls.scala_Product2$mcDD$sp$class__$init$__Lscala_Product2$mcDD$sp__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcDD$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcDD$sp.prototype = ScalaJS.c.scala_Tuple2$mcDD$sp.prototype;
ScalaJS.is.scala_Tuple2$mcDD$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcDD$sp)))
});
ScalaJS.as.scala_Tuple2$mcDD$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcDD$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcDD$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcDD$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcDD$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcDD$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcDD$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcDD$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcDD$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcDD$sp: 0
}, false, "scala.Tuple2$mcDD$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcDD$sp: 1,
  scala_Product2$mcDD$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcDD$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcDD$sp;
//@ sourceMappingURL=Tuple2$mcDD$sp.js.map
