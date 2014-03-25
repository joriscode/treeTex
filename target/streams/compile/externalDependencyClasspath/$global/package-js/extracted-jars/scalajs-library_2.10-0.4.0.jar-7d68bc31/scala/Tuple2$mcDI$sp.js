/** @constructor */
ScalaJS.c.scala_Tuple2$mcDI$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcD$sp$f = 0.0;
  this.$$und2$mcI$sp$f = 0
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcDI$sp;
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.$$und1$mcD$sp__D = (function() {
  return this.$$und1$mcD$sp$f
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.$$und1__D = (function() {
  return this.$$und1$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.$$und2$mcI$sp__I = (function() {
  return this.$$und2$mcI$sp$f
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.$$und2__I = (function() {
  return this.$$und2$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcDI$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.swap$mcDI$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcID$sp().init___I__D(this.$$und2__I(), this.$$und1__D())
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.copy$default$1__D = (function() {
  return this.copy$default$1$mcD$sp__D()
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.copy$default$1$mcD$sp__D = (function() {
  return this.$$und1__D()
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.copy$default$2__I = (function() {
  return this.copy$default$2$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.copy$default$2$mcI$sp__I = (function() {
  return this.$$und2__I()
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bI(this.copy$default$2__I())
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bD(this.copy$default$1__D())
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bI(this.$$und2__I())
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bD(this.$$und1__D())
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.init___D__I = (function(_1$mcD$sp, _2$mcI$sp) {
  this.$$und1$mcD$sp$f = _1$mcD$sp;
  this.$$und2$mcI$sp$f = _2$mcI$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  ScalaJS.impls.scala_Product2$mcDI$sp$class__$init$__Lscala_Product2$mcDI$sp__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcDI$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcDI$sp.prototype = ScalaJS.c.scala_Tuple2$mcDI$sp.prototype;
ScalaJS.is.scala_Tuple2$mcDI$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcDI$sp)))
});
ScalaJS.as.scala_Tuple2$mcDI$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcDI$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcDI$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcDI$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcDI$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcDI$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcDI$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcDI$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcDI$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcDI$sp: 0
}, false, "scala.Tuple2$mcDI$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcDI$sp: 1,
  scala_Product2$mcDI$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcDI$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcDI$sp;
//@ sourceMappingURL=Tuple2$mcDI$sp.js.map
